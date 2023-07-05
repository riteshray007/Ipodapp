import React, { Component } from 'react'

export default class Albumpics extends Component {
  // this component is used to render main menu options 
  render() {
      const {details} = this.props;
    return (
      <div className='submenupics' >
            <img alt='artistpic' className='picinsubmenu' src={details.image} />
            <h2> {details.name} </h2>
      </div>
    )
  }
}
