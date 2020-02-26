import React from 'react';
import styles from './Layout.module'

const Layout = ({ className, children }) => (

  <>
    <nav className={styles.red}> Navigation</nav>
    <div className={className}> {children} </div>
    <footer>Footer</footer>
  </>
)

export default Layout;