import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './MainMenu.css';


export default class MainMenu extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link className={styles.item} to="/hosts">
          <strong><i className="fa fa-wrench" aria-hidden="true"></i></strong>
          <span>HOSTS</span>
        </Link>
      </div>
    );
  }
}
