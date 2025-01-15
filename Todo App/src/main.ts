import './style.css'


interface Todo{
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos:Todo[] = [];

const todosContainer = document.querySelector(".todocontainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e:SubmitEvent) => {
  e.preventDefault();

  const todo:Todo={
    title: todoInput.value,
    isCompleted:false,
    id:String(Math.random()*1000)
  }

  todos.push(todo);

  todoInput.value = ""

  renderTodo();
  
}

const generateTodoItem = ()=>{
  const todo:HTMLDivElement = document.createElement("div");
  todo.className = "todo";
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type","checkbox")
}

const renderTodo = (todos:todo[])=>{
  todos.forEach(item=>{
    generateTodoItem()
  })
}