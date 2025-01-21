import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoItems from "./components/TodoItems";
import { saveTodos } from "./utils/features";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    });

    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((i) => i.id !== id);

    setTodos(newTodos);
  };

  const editHandler = (id: TodoItemType["id"], newTitle: string): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.title = newTitle;
      return i;
    });

    setTodos(newTodos);
  };

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };
    setTodos((prev) => [...prev, newTodo]);

    setTitle("");
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"75%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((i) => (
          <TodoItems
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            key={i.id}
            todo={i}
            editHandler={editHandler}
          />
        ))}
      </Stack>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") submitHandler();
        }}
        fullWidth
        label={"New Task"}
      />
      <Button
        sx={{
          margin: "1rem 0",
          padding: "0.75rem 0",
        }}
        fullWidth
        variant="contained"
        onClick={submitHandler}
        disabled={title === ""}
      >
        ADD
      </Button>
    </Container>
  );
};

export default App;
