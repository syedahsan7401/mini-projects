import React, { useState } from 'react'

const TodoApp = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [task, settask] = useState([]);

  let renderTask = <h5>No Task available...</h5>;
  const delHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    settask(copyTask);

  }
 if (task.length > 0) {
  renderTask = task.map((t, i) => {
    return <li key={i} className='d-flex justify-content-around p-2'>
      <h4 >{t.title}</h4>
      <h4 >{t.desc}</h4>
      <button onClick={()=>{
        delHandler(i);
      }} className='btn btn-outline-danger py-2 px-4'>Delete</button>
    </li>
  })
 }

  const SubmitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, desc }]);
    settitle("");
    setdesc("");
  }
  return (
    <>
      <div className="container my-5">
        <div className="card my-1">
          <div className="card-body text-center">
            <h1>Todo List App</h1>
            <div className="my-3">
              <form onSubmit={SubmitHandler}>
                <input type="text"
                  className='mx-5 px-4 py-2 border-black rounded border-2 col-2'
                  placeholder='Enter Task Here '
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value)
                  }} />
                <input type="text"
                  className='mx-5 px-4 py-2 border-black rounded border-2 col-4'
                  placeholder='Enter Description Here '
                  value={desc}
                  onChange={(e) => {
                    setdesc(e.target.value)
                  }} />
                <button className='btn btn-outline-success px-4 py-2'>Add Task</button>
              </form>
            </div>
          </div>
          <hr />
          <div className="card-body text-center">
            <h1>Tasks</h1>
            <ul className='py-2' style={{backgroundColor: "#7E8EF1", textAlign: "left"}}>
              {renderTask}
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default TodoApp