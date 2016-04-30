import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './HostList.css'

const HostList = ({hosts}) => {
  return (
    <div>
      {
        hosts.map((host) => {
          return (
            <div className={styles.item}>
              <Link to="/">{host.name}</Link>
              <label className={styles.toggle}>
                <input type="checkbox" />
                <i></i>
              </label>
            </div>
          )
        })
      }
    </div>
  );
};

HostList.propTypes = {
  hosts: React.PropTypes.array
}

export default HostList
