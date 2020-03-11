import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';
import DocumentsList from './DocumentsList';
import styles from './Dashboard.module';

const Dashboard = () => {

  const [documentsList, setDocumentsList] = useState([]);

  const loadDocuments = async () => {
    const snapshot =  await firestore.collection('documents').get();
    
    const documents = snapshot.docs.map(doc => {
      return {
        id: doc.id, 
        ...doc.data()
        }
      });
    
    setDocumentsList(documents);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleCreatedDocument = document => {
    setDocumentsList([document, ...documentsList]);
  };

 return (
  <DashLayout className={styles.dashboard}>

    <section className={styles.dashLeft}>
      <h1>Discover Your Accomplishments</h1>
      <p>Search and Sort</p>
      <DocumentsList docList={documentsList} />
    </section>

    <section className={styles.dashRight}>
     <AddDocument onCreate={handleCreatedDocument} />
    </section>  

   </DashLayout>
  );
};

export default Dashboard;