export const TodoList=({task,removeTask})=>{
        return (
            <div className="item-todo">
                <div>
                    {task.value}
                </div>
            <div className="item-delete" onClick={() => removeTask(task.id)}>
                X
            </div>
        </div>
    )
}                                                                                                                                                           