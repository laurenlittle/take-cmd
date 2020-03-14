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
    const snapshot =  await firestore.collection('documents').get();

    const documents = snapshot.docs.map(addIdToDoc);

    setDocumentsList(documents);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleCreatedDocument = async document => {
    // add document to DB
    const firebaseDocRef = await firestore.collection('documents').add(document);

    // get the documents reference in the db
    const doc = await firebaseDocRef.get();
    const newDoc = addIdToDoc(doc)

    setDocumentsList([newDoc, ...documentsList]);
  };

  const handleRemoveDocument = async id => {
    const allDocs = documentsList;

    // Remove from DB
    await firestore.doc(`documents/${id}`).delete();

    // Remove from state
    const docs = allDocs.filter(doc => doc.id !== id) // keep docs with ids that don't match the one we want to delete

    setDocumentsList(docs)
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