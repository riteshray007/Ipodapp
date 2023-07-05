import React, { Component } from 'react'
import dicepic from '../assets/dice.png';
import settingpic from '../assets/gear.png';

export default class Mainmenupics extends Component {
      render() {
            const { index } = this.props
            console.log( "From index - " ,  index);
            return (
                  <div className='submenupics' >
                        {
                              index === 0 ? <h1> OverFlow </h1> : <>
                                    {index === 2 ? <>
                                          <img alt="dicepic" className='picinsubmenu' src={dicepic} />
                                          <h2> Games </h2>
                                    </>
                                    : <>
                                          {index === 3 ? <>
                                                <img alt="settingpic" className='picinsubmenu' src={settingpic} />
                                                <h2>Settings</h2>
                                          </> : null }
                                    
                                    </>   }  
                              </>
                        }
                  </div>
            )
      }
}
