import { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface IContext {
  todos: Todos[] | null;
  setTodos: (todos: Todos[]) => void;
}

type Todos = { title: string; when: string };

type ContextValue = IContext | null;

export const TodoContext = createContext<ContextValue>(null);

const TodoContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todos[] | null>([
    { title: "Daily meeting with teams", when: "today at 2.30 am" },
    { title: "Reading at home", when: "today at 10.00 am" },
  ]);

  /* Props */
  const values: IContext = { todos, setTodos };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
