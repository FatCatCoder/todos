import { createContext, useState, useMemo, useContext } from "react";

const TodoListContext = createContext([]);

const TodoListContextProvider = (props) => {
    const [todoList, setTodoList] = useState([]);

    // Only rerender when todoList changes
    const value = useMemo(() => [todoList, setTodoList], [todoList]);
    return (
        <TodoListContext.Provider value={value}>
            {props.children}
        </TodoListContext.Provider>
    )
}

const useTodoList = () => {
    const context = useContext(TodoListContext);
    if (!context) {
      throw new Error("useTodoList must be used inside TodoListProvider")
    }
  
    return context;
  }