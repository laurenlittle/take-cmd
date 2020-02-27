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
    <nav class={styles.navbar}>
      <div className='header-logo'>
        <Link to='/'>Take-CMD</Link>
      </div>
      <ul>
        <li className='menu-item'>
          <Link to='/calendar'><i class="far fa-calendar-check"></i></Link>
        </li>
        <li className='menu-item'>
          <Link to='/profile'><i class="fas fa-user-circle"></i></Link>
        </li>
        <li className='menu-item menu-item-btn'>
          <Link to='/signout'>Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(DashMenu);