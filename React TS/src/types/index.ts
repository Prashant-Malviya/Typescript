// types/index.ts
export type ThemeType = "light" | "dark";

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export interface Person {
  name: string;
  age: number;
}

export type StateType = {
  count: number;
};

export type ActionType =
  | { type: "Increament"; payload: number }
  | { type: "Decreament"; payload: number };
