import {useState} from 'react'
import './Addtodo.css'
function AddTodo (){

    return (
        <>

        <div className="container">
         <h4>Add todo</h4>
            <form className='formData' action="">

             <label for="title">Title
             <input type="text" id="title" name="title"/>
             </label>

             <label for="description">Description
            <textarea id="description" name="description"></textarea>
           </label>
             

            <button type="button">Submit</button>


         </form>


        </div>
        
        
        </>
    )

}

export default AddTodo