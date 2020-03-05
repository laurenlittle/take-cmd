import React, { useState, useEffect } from 'react';

const Document = ({title, description}) => {

  return (

    <div>
        <h4>{title}</h4>
        <p>{description}</p>
      <hr/>
    </div>
  )
}

export default Document;