import React, { Dispatch, SetStateAction, ReactNode } from "react";

type PropsType = {
  heading: string;
  count: number;
  func1: (b: string, a: string) => void;
  children: ReactNode;
};

type InputValType = string | number;

const Box = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value as T)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Box;
