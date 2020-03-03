import React, {useState, useEffect} from 'react';
import DashLayout from './DashLayout';
import AddDocument from './AddDocument';

const Dashboard = () => {
 return (
   <DashLayout className='dashboard'>
     <h1>Dashboard</h1>
     <AddDocument />
   </DashLayout>
  );
};

export default Dashboard;