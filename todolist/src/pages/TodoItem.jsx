

function TodoItem({ task,onEdit }) {

  return (

      <li className={`todo-item ${task.priority}`}>
      <div className="todo-header">
        <h3>{task.title}</h3>
        <span className="priority">{task.priority}</span>
      </div>

      <p>{task.description}</p>

      {task.duedate && (
        <small className="date">Due: {task.duedate}</small>
      )}
      <div className="button-group">
      <button onClick={() => onEdit(task)} className="editBtn">
 Edit
</button>
      <button className="deleteBtn">Delete</button>
      <button className="completeBtn">Mark as Completed</button>

      </div>


      
     
    </li>

   
      

    
    
  );
}
export default TodoItem;