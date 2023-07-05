import React, { Component } from 'react';
import greater from '../assets/greater.png';

export default class Albummenu extends Component {

      // this component is reused for both album and artist menu 

      render() {
            const {menu , index } = this.props

            return (
                  <>
                        <div className="displaypack" >
                              <h2 className="displayheader" >  {Object.keys(menu)}  </h2>
                              <ul className="optionslist"  >
                                    {menu[Object.keys(menu)[0]].map((e, i) => (
                                          <>
                                                {index === i ?

                                                      <li key={i} className="selectedlistitem" > <p> {e.name} </p> <img className="greatericon" src={greater} />  </li> :
                                                      <li key={i} > <p> {e.name} </p> </li>
                                                }
                                          </>
                                    ))}


                              </ul>

                        </div>



                  </>
            )
      }
}
