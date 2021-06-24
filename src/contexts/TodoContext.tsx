import { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface Context {
  todos: Todos | null;
}

type Todos = [{ title: string; when: string }];

export const TodoContext = createContext<Context | null>(null);

const TodoContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todos | null>(null);

  /* Props */
  const values: Context = { todos };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
