import React, { useState } from 'react';
import styles from './AddDocument.module';

const AddDocument = ({addDocument}) => {

const initialFormState = {
  title: '',
  description: ''
};

const [document, setDocument] = useState(initialFormState);

  const handleChange = name => e => {
    setDocument({
      ...document,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    addDocument(document);
    setDocument({
      ...document,
      title: '',
      description: ''
    })
  }

  const addDocumentForm = () => (
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
    <h2>Your New Accomplishment:</h2>
    {addDocumentForm()}
    </>
  )

}

export default AddDocument;