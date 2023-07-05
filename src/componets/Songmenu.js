import React, { Component } from 'react';
import greater from '../assets/greater.png';

export default class Songmenu extends Component {


      componentDidUpdate(prevprops) {

            // the below code helps in handling the scroll dyanmically in menu component has contains overflow in scroll 
            let element = document.querySelector('.optionslist');
            let data = document.querySelector('.selectedlistitem').getBoundingClientRect();
                  console.log( prevprops.index , " ,  data.y  =  " ,  data.y);
                  if(data.y < -50){
                        element.scrollTo(0 , -50 );
                  }
                  else if(data.y > 440){
                        element.scrollTo(0 , 430);
                  }
                  else if(data.y < 140 ){
                        element.scrollBy(0 , -40 );
                  }
                  else if(data.y > 245 && data.y < 265 ){
                        element.scrollBy(0 , 40 );
                  }

      }


      render() {
            const { menu, index } = this.props
            return (
                  <>
                        <div className="displaypack" >
                              <h2 className="displayheader" >  {Object.keys(menu)}  </h2>
                              <ul className="optionslist"  >
                                    {menu.Allsongs.map((e, i) => (
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
