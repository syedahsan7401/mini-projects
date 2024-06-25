import React from 'react'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
const Whiteboard = () => {
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Whiteboard App</h1>
          <div style={{position: 'fixed', inset: 0}}>
            <Tldraw />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whiteboard