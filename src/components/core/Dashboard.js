import React, {useState, useEffect} from 'react';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';
import DocumentsList from './DocumentsList';
import styles from './Dashboard.module';

const Dashboard = () => {

  const defaultDocsList = [
    {
      id: 1,
      title: 'a title',
      description: 'a description'
    },
    {
      id: 2,
      title: 'yet another title',
      description: 'yet another description'
    }
  ];

  const [documentsList, setDocumentsList] = useState(defaultDocsList);

  useEffect(() => console.log(documentsList), [documentsList]);

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