import React, { useState, useEffect } from 'react';
import Document from './Document';

const DocumentsList = ({
    docList,
    onRemove
  }) => {

  return (
    <section>
      {docList.map(document => <Document {...document} key={document.id} onRemove={onRemove} />)}
    </section>
  )
}

export default DocumentsList;
