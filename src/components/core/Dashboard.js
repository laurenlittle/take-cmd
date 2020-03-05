import React, {useState, useEffect} from 'react';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';
import DocumentsList from './DocumentsList';

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
   <DashLayout className='dashboard'>
     <h1>Dashboard</h1>
     <DocumentsList docList={documentsList} />
     <AddDocument onCreate={handleCreatedDocument} />
   </DashLayout>
  );
};

export default Dashboard;