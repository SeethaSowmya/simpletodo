// Write your code here
import './index.css'

const TodoItem = props => {
  const {list, deleteTodo} = props
  const {id, title} = list

  const deleteTodoList = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="container">
        <p>{title}</p>
        <button type="button" onClick={deleteTodoList} className="button">
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
