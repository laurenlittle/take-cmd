import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { addIdToDoc } from '../../utilities';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';
import DocumentsList from './DocumentsList';
import styles from './Dashboard.module';

const Dashboard = () => {

  const [documentsList, setDocumentsList] = useState([]);

  const loadDocuments = async () => {

    // Subscribe to DB changes
    firestore.collection('documents').onSnapshot(snapshot => {
      const documents = snapshot.docs.map(addIdToDoc);
      setDocumentsList(documents);
    })

  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleCreatedDocument = async document => {
    firestore.collection('documents').add(document);
  };

  const handleRemoveDocument = async id => {
    firestore.doc(`documents/${id}`).delete();
  }

 return (
  <DashLayout className={styles.dashboard}>

    <section className={styles.dashLeft}>
      <h1>Discover Your Accomplishments</h1>
      <p>Search and Sort</p>
      <DocumentsList docList={documentsList} onRemove={handleRemoveDocument}  />
    </section>

    <section className={styles.dashRight}>
     <AddDocument onCreate={handleCreatedDocument} />
    </section>

   </DashLayout>
  );
};

export default Dashboard;