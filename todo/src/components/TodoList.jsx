import React from 'react'

function TodoList({todoList , setTodoList , todo, todoFormValue , formUpdate}) {

    //console.log(todoList)
  
    function deleteTodo(id) {
      setTodoList((prev) => (prev.filter((item) => item.id !== id)))
    }
    
    function updateTodo(item) {
      //console.log("update item::",item)
      todoFormValue.setInputText(item.text)
      todoFormValue.setInputCheckbox(item.priority)
      formUpdate.setUpdate({clickedUpdate:true , id: item.id })
    }
    
    if(todoList.length === 0 ){
        return 
    }
  
    return (
    <div className='container mt-3 '>
      <div className="row">
        <div className="col-sm-8 mx-auto">
          <ul className="list-group">
            {todoList.map((item) => <li key={item.id} className="list-group-item">
              {item.text}
                <div className="btn-group float-end" role="group" aria-label="Basic mixed styles example">
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTodo(item.id)}>Delete</button>
                  <button type="button" className="btn btn-success btn-sm" onClick={() => updateTodo(item)}>Update</button>
                </div>
              </li> )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList
