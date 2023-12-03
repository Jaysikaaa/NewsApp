import React from 'react'

function ContextMenu({articleId}) {

    const editClickHandler = () => {
        alert(`id: ${articleId} , action: Edit`)
    }

    const deleteClickHandler = () => {
        alert(`id: ${articleId} , action: Delete`)
    }
  return (
    <div>
      
        <button onClick={editClickHandler}>Edit</button>
        <button onClick={deleteClickHandler}>Delete</button>
    </div>
  )
}

export default ContextMenu;
