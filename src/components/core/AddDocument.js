import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddDocument.module'


const AddDocument = () => {

  const [formFields, setFormFields] = useState({
    title: '',
    description: ''
  });

  const { title, description } = formFields;

  const [error, isError] = useState(false);
  const [success, isSuccess] = useState(false);
  const [loading, isLoading] = useState(false);

  const handleChange = name => e => {
    setFormFields({
      ...formFields,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    // localStorage.setItem('key', 'value')

    console.log(formFields)
  }

  const addDocumentForm = () => (
    <form onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <label htmlFor='title-input'>Title</label>
         <input
          id='title-input'
          className={styles.formTitle}
          type='text'
          value={title || ''}
          onChange={handleChange('title')}
          required
          />
      </div>
      <div className={styles.formItem}>
        <label htmlFor='desc-text'>Description</label>
         <textarea
          id='desc-text'
          className={styles.formDescription}
          value={description}
          onChange={handleChange('description')}
          required
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