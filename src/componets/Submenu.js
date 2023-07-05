import '../styles/Appstyle.css';
import React,{Component} from "react";
import greater from '../assets/greater.png';

export default class Submenu extends Component {


      render(){
            const {menu , index } = this.props
            return(
                  <>
                        <div className="displaypack" >
                              <h2 className="displayheader" >  {Object.keys(menu)}  </h2>
                              <ul className="optionslist"  >  
                                    {menu.Music.map( (e , i )=>(
                                          <>
                                                {index === i ? 
                                                      <li key={i} className="selectedlistitem" > <p> {Object.keys(e)} </p> <img className="greatericon"  src={greater} />  </li>  :
                                                      <li key={i} > <p> {Object.keys(e)} </p> </li> 
                                                }
                                          </>
                                    )  )}
                                    

                              </ul>

                        </div>
                  
                  
                  </>
            )
      }
}