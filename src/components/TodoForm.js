import {useState} from "react";

const TodoForm = ({addTodo}) => {

  const [todo, setTodo] = useState('')

  const submit = e => {
    e.preventDefault()
    addTodo(todo)
    setTodo('')
  }

  return (
    <form onSubmit={submit}>
      <label><input value={todo} onChange={e => setTodo(e.target.value)}/></label>
      <button>OK</button>
    </form>
  )
}

export default TodoForm
