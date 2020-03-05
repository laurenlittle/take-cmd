import React, { useState, useEffect } from 'react';
import Document from './Document';

const DocumentsList = ({docList}) => {

  return (
    <section>
      {docList.map(document => <Document {...document} key={document.id} />)}
    </section>
  )
}

export default DocumentsList;
