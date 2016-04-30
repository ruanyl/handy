import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import HostList from '../components/HostList'
import * as HostActions from '../actions/host'

import styles from './layout.css'

class Hosts extends Component {
  render() {
    const { hosts } = this.props
    return (
      <div className={styles.hosts}>
        <HostList hosts={hosts} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    hosts: state.hosts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Hosts)
