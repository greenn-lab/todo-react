const TodoList = ({todos, toggle, remove}) => {

  const removeTodo = (e, id) => {
    e.stopPropagation()
    remove(id)
  };

  return (
    <ul>
      {
        todos.map(todo =>
          <li style={{textDecoration: todo.completed ? "line-through" : ''}} key={todo.id}
              onClick={() => toggle(todo.id)}>
            <span>{todo.title}</span>
            <button onClick={e =>
              removeTodo(e, todo.id)
            }>&times;</button>
          </li>
        )
      }
    </ul>
  )
}

export default TodoList
