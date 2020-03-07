import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DashMenu.module'

const DashMenu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link className={styles.headerLogo} to='/'><i className="far fa-file-alt"></i>Take-CMD</Link>
      </div>
      <ul className={styles.menuItems}>
        <li>
          <Link className={styles.singleMenuItem} to='/calendar'><i className="far fa-calendar-check"></i></Link>
        </li>
        <li>
          <Link className={styles.singleMenuItem} to='/profile'><i className="fas fa-user-circle"></i></Link>
        </li>
        <li>
          <Link className={`${styles.singleMenuItem} ${styles.menuItemBtn}`} to='/signout'>Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(DashMenu);