import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;
const placeholder = document.getElementById(
  "placeholder"
) as HTMLParagraphElement;

// Render the todos to the DOM
const renderTodo = (todos: Todo[]) => {
  todosContainer.innerHTML = ""; // Clear existing items

  if (todos.length === 0) {
    placeholder.style.display = "block";
  } else {
    placeholder.style.display = "none";
  }

  todos.forEach((todo) => {
    const todoElement = generateTodoItem(todo.title, todo.isCompleted, todo.id);
    todosContainer.appendChild(todoElement);
  });
};
// Generate individual todo item
const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo = document.createElement("div");
  todo.className = "todo";
  todo.setAttribute("data-id", id);

  // Create a checkbox
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;

  // Event listener for checkbox
  checkBox.addEventListener("change", () => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].isCompleted = checkBox.checked;
      renderTodo(todos);
    }
  });

  // Create a paragraph for the title
  const paragraph = document.createElement("p");
  paragraph.innerText = title;
  if (isCompleted) {
    paragraph.classList.add("textCut");
  }

  // Create delete button
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn";

  // Event listener for delete button
  btn.addEventListener("click", () => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
      renderTodo(todos);
    }
  });

  // Append all elements to the todo container
  todo.append(checkBox, paragraph, btn);
  return todo;
};

// Form submission event
myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const newTodo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };

  todos.push(newTodo);
  todoInput.value = ""; // Clear input
  renderTodo(todos); // Re-render todos
};

// Initial render
renderTodo(todos);
