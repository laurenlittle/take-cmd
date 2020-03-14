import React, { useState, useEffect } from 'react';

const Document = ({title, description, id, onRemove}) => {

  return (

    <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className="" onClick={() => onRemove(id)}>Delete</button>
      <hr/>
    </div>
  )
}

export default Document;