import useTodos from "../../hooks/useTodos";
const initialTodos = [
    {
        id:1,
        title:"Learn React",

    },
    {
        id:2,
        title:"Learn Node.js",

    },
]

const TodoCustom = () => {
    const[todos,addTodo,deleteTodo] = useTodos(initialTodos);
  return (
    <div>
        <button onClick={_=>addTodo({})}>add Todo</button>
        <ul>
        {todos.map(({id,title})=>(
            <li key={id}>{title}<button onClick={_=>deleteTodo(id)}>Delete</button></li>
        ))}
        
        </ul></div>
  )
}

export default TodoCustom