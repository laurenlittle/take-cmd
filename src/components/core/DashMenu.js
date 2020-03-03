import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DashMenu.module'

const isActive = (history, path) => {

  if(history.location.pathname === path) {
    return { color: '#FF0745' }
  } else {
    return { color: '#39423E' }
  }
}

const DashMenu = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.headerLogo}>
        <Link to='/'>Take-CMD</Link>
      </div>
      <ul className={styles.menuItems}>
        <li className={styles.singleMenuItem}>
          <Link to='/calendar'><i className="far fa-calendar-check"></i></Link>
        </li>
        <li className={styles.singleMenuItem}>
          <Link to='/profile'><i className="fas fa-user-circle"></i></Link>
        </li>
        <li className={`${styles.singleMenuItem} ${styles.menuItemBtn}`}>
          <Link to='/signout'>Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(DashMenu);