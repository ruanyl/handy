import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainMenu from '../components/MainMenu';
import {Brand} from '../components/Brand';

import styles from './layout.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className={styles.menu}>
        <Brand />
        <MainMenu />
      </div>
    );
  }
}
