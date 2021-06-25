import { createContext, useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface Context {
  todos: Todos[] | null;
  setTodos: (todos: Todos[]) => void;
  moveUp: (todo: Todos) => void;
  moveDown: (todo: Todos) => void;
  create: (todo: Todos) => void;
}

type Todos = { title: string; when: string };

export const TodoContext = createContext<Context>({} as Context);

const TodoContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todos[] | null>([
    { title: "Daily meeting with teams", when: "today at 2.30 am" },
    { title: "Reading at home", when: "today at 10.00 am" },
  ]);

  const create = (todo: Todos) => {
    // Create a copy of todo list.
    let newList = todos?.map((value) => value);

    // Add new todo item to at the start of todo list.
    newList?.unshift(todo);

    // Update list of todos.
    setTodos(newList!);
  };

  const moveUp = (todo: Todos) => {
    // Find index of current todo item.
    const todoIndex = todos?.indexOf(todo);

    // Check if index of current todo is already "0".
    if (todoIndex! < 1) {
      return;
    } else {
      // Return new list of todos without current todo item.
      let newList = todos?.filter((value) => value !== todo);

      // Adds current todo item to new list with new index position.
      newList?.splice(todoIndex! - 1, 0, todo);

      // Update list of todos.
      setTodos(newList!);
    }
  };

  const moveDown = (todo: Todos) => {
    // Find index of current todo item.
    const todoIndex = todos?.indexOf(todo);

    // Check if index of current todo is already "0".
    if (todoIndex! > 0) {
      return;
    } else {
      // Return new lsit of todos without current todo item.
      let newList = todos?.filter((value) => value !== todo);

      // Adds current todo item to new list with new index position.
      newList?.splice(todoIndex! + 1, 0, todo);

      // Update list of todos.
      setTodos(newList!);
    }
  };

  /* Props */
  const values: Context = { todos, setTodos, moveUp, moveDown, create };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
