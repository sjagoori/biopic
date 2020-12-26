import React from 'react'
import { database } from '../config'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'updated'
    }
  }

  async componentDidMount() {
    await database.ref().once('value').then((snapshot) => {
      this.setState({key: snapshot.val().key})
    })
  }

  render() {
    return (
      <>
        {this.state.key}
      </>
    )
  }
}