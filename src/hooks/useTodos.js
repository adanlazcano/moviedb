import { useState } from "react";

const useTodos = (initialTodos) => {
    const [todos, setTodos] = useState(initialTodos);

    const random = (range) => {
        return Math.floor(Math.random() * (range - 0 + 1) + 1);
    };

    const addTodo = (todo) => {
        todo.title = `Task No. ${random(10000)}`;
        todo.id = random(100000);

        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    return [todos, addTodo, deleteTodo];
};

export default useTodos;