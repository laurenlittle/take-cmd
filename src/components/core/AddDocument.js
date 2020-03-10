import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddDocument.module'


const AddDocument = ({onCreate}) => {

  const [formFields, setFormFields] = useState({
    title: '',
    description: ''
  });

  const { title, description } = formFields;

  const handleChange = name => e => {
    setFormFields({
      ...formFields,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(formFields);
    setFormFields({
      ...formFields,
      title: '',
      description: ''
    })

    console.log(formFields)
  }

  const addDocumentForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.formItem}>
         <input
          id='title-input'
          className={styles.formTitle}
          type='text'
          value={title || ''}
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
          value={description}
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