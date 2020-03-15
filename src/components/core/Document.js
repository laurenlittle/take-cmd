import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';

const Document = ({title, description, id}) => {

  const documentRef = firestore.doc(`documents/${id}`);

  const handleRemove = () => {
    documentRef.delete();
  }

  return (

    <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className="" onClick={handleRemove}>Delete</button>
      <hr/>
    </div>
  )
}

export default Document;