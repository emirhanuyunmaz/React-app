import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm({setTodoList , todo , todoFormValue , formUpdate ,todoList}) {


    function resetForm(){
        todoFormValue.setInputCheckbox(false)
        todoFormValue.setInputText("")
    }

    function submitOnClick(event){
        event.preventDefault()
        if(formUpdate.update.clickedUpdate){
            const updateItemID = todoList.findIndex((obj) => obj.id === formUpdate.update.id)
            console.log(updateItemID)
            todoList[updateItemID].text = todoFormValue.inputText
            todoList[updateItemID].priority = todoFormValue.inputCheckbox
            formUpdate.setUpdate({clickedUpdate:false , id: -1 })
        }else{
            todo.id=uuidv4()
            todo.priority=todoFormValue.inputCheckbox
            todo.text=todoFormValue.inputText
            setTodoList((prev) => [todo,...prev])
        }
        resetForm()
    }


    return (
        <div className=''>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="todoText" className="form-label">Todo</label>
                                <input type="text" className="form-control" value={todoFormValue.inputText} onChange={(prev) => todoFormValue.setInputText(prev.target.value)} id="todoText"/>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                                value={todoFormValue.inputCheckbox} checked = {todoFormValue.inputCheckbox}
                                onChange={(prev) => todoFormValue.setInputCheckbox(prev.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submitOnClick}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TodoForm
