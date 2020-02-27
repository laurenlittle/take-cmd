import React from 'react';
import DashMenu from './DashMenu';

const DashLayout = ({ className, children }) => (

  <>
    <DashMenu />
    <div className={className}> {children} </div>
    <footer>Footer</footer>
  </>
)

export default DashLayout;