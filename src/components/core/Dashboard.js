import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../firebase';
import { addIdToDoc } from '../../utilities';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';
import EditDocument from './EditDocument';
import Document from './Document';
import Authentication from '../auth/Authentication';
import styles from './Dashboard.module';

const Dashboard = () => {

  const [documentsList, setDocumentsList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentDoc, setCurrentDoc] = useState();
  const [documentRef, setDocumentRef] = useState();

  const loadDocuments = async () => {
    // Subscribe to DB changes
    firestore.collection('documents').onSnapshot(snapshot => {
      const documents = snapshot.docs.map(addIdToDoc);
      setDocumentsList(documents);
    })
  };

  let unsubscribeFromAuth = null;

  const loadUser = async () => {
    // Subscribe to user changes: fires on login/logout --> returns user obj or null
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    })
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  useEffect(() => {
    loadUser();
  }, [currentUser]);

  const addDocument = document => {
    firestore.collection('documents').add(document);
  };

  const updateDocument = (currentDoc, documentRef) => {
    setEditing(false);

    return documentRef.update({
        title: currentDoc.title,
        description: currentDoc.description
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(error => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

  const editDocument = (document, dbDocRef) => {
    setEditing(true);
    setCurrentDoc(document);
    setDocumentRef(dbDocRef);
  }

 return (
  <DashLayout className={styles.dashboard}>

    <Authentication user={currentUser} />

    <section className={styles.dashLeft}>
      <h1>Discover Your Accomplishments</h1>
      <p>Search and Sort</p>
      {documentsList.map(document => <Document {...document} editDocument={editDocument} key={document.id} />)}
    </section>

    <section className={styles.dashRight}>
       {editing ? (
          <div>
            <h2>Edit Document</h2>
            <EditDocument
              setEditing={setEditing}
              documentRef={documentRef}
              currentDoc={currentDoc}
              updateDocument={updateDocument}
            />
          </div>
        ) : (
          <div>
            <h2>Add Document</h2>
            <AddDocument addDocument={addDocument} />
          </div>
        )}
    </section>

   </DashLayout>
  );
};

export default Dashboard;