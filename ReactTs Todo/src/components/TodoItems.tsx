import { Check, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
  editHandler: (id: TodoItemType["id"], newTitle: string) => void;
};

const TodoItems = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const [editActive, setEditActive] = useState<boolean>(false);

  const [textVal, setTextVal] = useState<string>(todo.title);

  return (
    <div>
      <Paper
        sx={{
          padding: "1rem",
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          {editActive ? (
            <TextField
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && textVal !== "") {
                  editHandler(todo.id, textVal);
                  setEditActive(false);
                }
              }}
            />
          ) : (
            <Typography marginRight={"auto"}>{todo.title}</Typography>
          )}

          <Checkbox
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />

          <Button onClick={() => setEditActive((prev) => !prev)}>
            {editActive ? <Check /> : <Edit />}
          </Button>
          <Button onClick={() => deleteHandler(todo.id)}>
            <Delete />
          </Button>
        </Stack>
      </Paper>
    </div>
  );
};

export default TodoItems;
