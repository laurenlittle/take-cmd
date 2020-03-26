import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';

const Document = ({title, description, id, editDocument}) => {

  const documentRef = firestore.doc(`documents/${id}`);

  const handleRemove = () => {
    documentRef.delete();
  }

  const runUpdate = () => {
    editDocument({title, description}, documentRef);
  }

  return (

    <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className="" onClick={runUpdate}>Update</button>
        <button className="" onClick={handleRemove}>Delete</button>
      <hr/>
    </div>
  )
}

export default Document;