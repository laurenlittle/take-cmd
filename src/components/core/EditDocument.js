import React, { useState } from 'react';
import styles from './AddDocument.module'; // use same styles as other form

const EditDocument = ({setEditing, currentDoc, documentRef, updateDocument}) => {

const [document, setDocument] = useState(currentDoc);

  const handleChange = name => e => {
    setDocument({
      ...document,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    updateDocument(document, documentRef);
    setDocument({
      ...document,
      title: '',
      description: ''
    })

    setEditing(false);
  }

  const editDocumentForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.formItem}>
         <input
          id='title-input'
          className={styles.formTitle}
          type='text'
          name='title'
          value={document.title}
          onChange={handleChange('title')}
          required
          title='Title'
          placeholder='Title'
          />
      </div>
      <div className={styles.formItem}>
         <textarea
          id='desc-text'
          className={styles.formDescription}
          name='description'
          value={document.description}
          onChange={handleChange('description')}
          required
          title='Description'
          placeholder='Description'
          ></textarea>
      </div>
      <button className={styles.btnSubmit}>+ Add to CMD</button>
    </form>
  )

  return (
    <>
    <h2>Edit CMD:</h2>
    {editDocumentForm()}
    </>
  )

}

export default EditDocument;