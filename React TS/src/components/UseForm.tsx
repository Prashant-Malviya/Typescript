// components/UserForm.tsx
import React, { FormEvent, useState } from "react";
import { Person } from "../types/index";

const UserForm: React.FC = () => {
  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        placeholder="Age..."
        value={user?.age || ""}
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
        }
      />
      <input
        type="text"
        placeholder="Name..."
        value={user?.name || ""}
        onChange={(e) =>
          setUser((prev) => ({ ...prev!, name: e.target.value }))
        }
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserForm;
