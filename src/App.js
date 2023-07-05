import './styles/Appstyle.css';
import React, { Component } from 'react';
import ZingTouch from 'zingtouch';

//importing all the icons 
import next from './assets/next.png';
import pause from './assets/pause.png';
import previous from './assets/previous.png';
import greater from './assets/greater.png';

// importing all the submenu components
import Mainmenupics from './componets/Mainmenupics';
import Submenu from './componets/Submenu';
import Albumpics from './componets/Albumpics';
import Albummenu from './componets/Albummenu';
import Songplayer from './componets/Songplayer';
import Songmenu from './componets/Songmenu';

export default class App extends Component {
  //constructor for initialization of states 
  constructor() {
    super()

    // all the required states  
    this.state = {
      //state to handle changes in angle inside scroll wheel
      angled: 0,
      //menu helps in handling which component to mount and which component to unmount 
      mainMenu: false,
      submenu: false,
      artistmenu: false,
      albummenu: false,
      songmenu: false,
      // Indexs helps in managing the index of menu items .
      // *--  i have created different indexstate for different menus because it helps to 
      // keep record of users progress in different menus  .

      selectedIndex: 0,
      submenuindex: 0,
      artistmenuindex: 0,
      albummenuindex: 0,
      songmenuindex: 0,
      albumpics: false,
      picsubmenu: false,
      artistpics: false,
      songplayer: false,
      audioplaying: false,
      // all menus and submenus get info from this state 
      menutopic: [
        {
          overflow: []
        },
        {
          Music: [
            {
              Allsongs: [
             // link in allsongs array refers to the link of the audio file so that user can enjoy music in this application 
                {
                  link: "https://hypalong.com/wp-content/uploads/2023/05/Drake-In-My-Feelings.mp3",
                  image: 'https://i.ytimg.com/vi/az6m9IE8h4o/maxresdefault.jpg',
                  name: 'In my Feelings'
                },
                {
                  link: "https://pwdown.info/113604/I%20Guess%20-%20KRSNA.mp3",
                  image: 'https://i.scdn.co/image/ab67616d0000b273a29f8977d3f13760d01332e0',
                  name: 'I Guess'
                },
                {
                  link: "https://www.pagalworld.com.se/files/download/id/65991",
                  image: 'https://i.scdn.co/image/ab67616d0000b2732d1d2bad9d7c2e4e79579648',
                  name: 'Been a While'
                },
                {
                  link: 'https://pwdown.info/111592/01.%20Zara%20Sa.mp3',
                  image: 'https://c.saavncdn.com/801/Jannat-Hindi-2008-20190629135803-500x500.jpg',
                  name: 'Zara sa'
                },
                {
                  link: 'https://paglasongs.com/files/download/id/14254',
                  image: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/3d/59/36/3d59363b-7ba6-77b3-0d4c-0bd7d5509868/197186944850.jpg/1200x1200bf-60.jpg',
                  name: "Obsessed"
                },
                {
                  link: "https://paglasongs.com/files/download/id/14395",
                  image: 'https://c.saavncdn.com/704/Still-Rollin-Punjabi-2023-20230512121542-500x500.jpg',
                  name: 'Still rollin'
                },
                {
                  link: 'https://paglasongs.com/files/download/id/14402',
                  image: 'https://i.ytimg.com/vi/XJp7D46UhjQ/mqdefault.jpg',
                  name: 'Cheques',
                },
                {
                  link: 'https://paglasongs.com/files/download/id/3510',
                  name: 'Stay',
                  image: 'https://cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/350x350.jpg'
                },
                {
                  link: 'https://paglasongs.com/files/download/id/10003',
                  name: 'Bol na halke halke ',
                  image: 'https://c.saavncdn.com/478/Jhoom-Barabar-Jhoom-Hindi-2007-20190329181232-500x500.jpg'
                }
              ],
            },
            {
              Artists: [
                //image links use to render image of the specific artist 
                {
                  name: 'Drake',
                  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApJdGN6I8NjFvhKfOBIwjz759q53b8HBckMLXl_blfq5RXZFy'
                },
                {
                  name: "Justin Bieber ",
                  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ'
                },
                {
                  name: "Ed Shreeran",
                  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRc4AESl1S8fji2_mLhZtdwAarkWbLSrGMtiVjMrrERAg4eew-B'
                },
                {
                  name: "Tylor Swift",
                  image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAPp4Cyx0uAkK3RupL-EZJ4z-BPsC01kCIoBIbfPlyW208WBn_'
                },

              ],
            },
            {
              Albums: [
                {
                  name: "I Guess",
                  image: 'https://i.scdn.co/image/ab67616d0000b273a29f8977d3f13760d01332e0'
                },
                {
                  name: 'Elevated',
                  image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/93/af/11/93af1152-3af9-b028-a74e-302eb639b37f/196511464742.jpg/1200x1200bf-60.jpg'
                },
                {
                  name: 'Still Rollin',
                  image: 'https://i.scdn.co/image/ab67616d0000b2731a8c4618eda885a406958dd0'
                },
                {
                  name: 'Obsessed',
                  image: 'https://images.hungama.com/c/1/dde/6dd/95316068/95316068_300x300.jpg'
                }
              ]
            }
          ]
        },
        {
          Games: []
        },
        {
          Settings: []
        },
      ],
    }
  }

  //function helps in playing and pausing the music
  playnpause = ()=>{
    this.setState((pre)=>({
      audioplaying : !pre.audioplaying,
    }))
  }

  //helps in playing the next song 
  nextsong = () => {
    if (this.state.songmenuindex >= this.state.menutopic[1].Music[0].Allsongs.length - 1) {
      this.setState((pre) => ({
        songmenuindex: 0,
      }))
    }
    else {
      this.setState((pre) => ({
        songmenuindex: pre.songmenuindex + 1,
      }))
    }
  }

  //helps to go to the previous song 
  previousSong = () => {
    if (this.state.songmenuindex <= 0) {
      this.setState({
        songmenuindex: this.state.menutopic[1].Music[0].Allsongs.length - 1
      })
    }
    else {
      this.setState((pre)=>({
        songmenuindex : pre.songmenuindex -1 ,
      }))
    }
  }

  // function captures the rotation gesture inside controlpanel of ipod 
  bindzingtouch = () => {
    var controllerpadTouchArea = document.querySelector('.controllerpad')
    var myRegion = new ZingTouch.Region(controllerpadTouchArea);
 
      let emitcounter = 0;
      // counter helps maintaining the sensitivity of the rotation gesture  
      myRegion.bind(controllerpadTouchArea , 'rotate', (e) => {
        // binding rotate gesture to selected region so it records gesture on in that region
        let {  angle } = e.detail

        angle = Math.round(angle);
        if (emitcounter % 40 === 0 && angle < 350) {
          // conditions to direct gesture movement i.e if rotated clock wise index while move downward or vice versa
                    
          if (this.state.angled > angle) {
            // different conditions refers to different indexes when they are visible 
            if (this.state.submenu === true) {
              if (this.state.submenuindex >= this.state.menutopic[1].Music.length - 1) {
                this.setState({
                  submenuindex: 0
                })
              }
              else {
                this.setState({
                  submenuindex: this.state.submenuindex + 1
                })
              }
            }
            //  condition controlling albummenu index when its visible  
            else if (this.state.albummenu === true) {
              if (this.state.albummenuindex >= this.state.menutopic[1].Music[2].Albums.length - 1) {
                this.setState({
                  albummenuindex: 0
                })
              }
              else {
                this.setState({
                  albummenuindex: this.state.albummenuindex + 1
                })
              }
            }
            // condition for artistmenuindex 
            else if (this.state.artistmenu == true) {
              if (this.state.artistmenuindex >= this.state.menutopic[1].Music[1].Artists.length - 1) {
                this.setState({
                  artistmenuindex: 0
                })
              }
              else {
                this.setState({
                  artistmenuindex: this.state.artistmenuindex + 1
                })
              }
            }
            //condition for songmenuindex 
            else if (this.state.songmenu === true) {
              if (this.state.songmenuindex >= this.state.menutopic[1].Music[0].Allsongs.length - 1) {
                this.setState({
                  songmenuindex: 0
                })
              }
              else {
                this.setState({
                  songmenuindex: this.state.songmenuindex + 1
                })
              }
            }
            // else rotating the wheel will make changes in mainmenu 
            else {
              if (this.state.selectedIndex >= this.state.menutopic.length - 1) {
                this.setState({
                  selectedIndex: 0
                })
              }
              else {
                this.setState({
                  selectedIndex: this.state.selectedIndex + 1
                })
              }
            }

          }
          // conditions for all the menuindexes when rotate guesture is captured to be anticlock wise 
          else if (this.state.angled < angle + 1) {

            if (this.state.submenu === true) {

              if (this.state.submenuindex <= 0) {
                this.setState({
                  submenuindex: this.state.menutopic[1].Music.length - 1
                })
              }
              else {
                this.setState({
                  submenuindex: this.state.submenuindex - 1
                })
              }

            }
            else if (this.state.artistmenu == true) {
              if (this.state.artistmenuindex <= 0) {
                this.setState({
                  artistmenuindex: this.state.menutopic[1].Music[1].Artists.length - 1
                })
              }
              else {
                this.setState({
                  artistmenuindex: this.state.artistmenuindex - 1
                })
              }
            }
            else if (this.state.songmenu === true) {
              if (this.state.songmenuindex <= 0) {
                this.setState({
                  songmenuindex: this.state.menutopic[1].Music[0].Allsongs.length - 1
                })
              }
              else {
                this.setState({
                  songmenuindex: this.state.songmenuindex - 1
                })
              }
            }
            else if (this.state.albummenu === true) {
              if (this.state.albummenuindex <= 0) {
                this.setState({
                  albummenuindex: this.state.menutopic[1].Music[2].Albums.length - 1
                })
              }
              else {
                this.setState({
                  albummenuindex: this.state.albummenuindex - 1
                })
              }
            }
            else {
              if (this.state.selectedIndex <= 0) {
                this.setState({
                  selectedIndex: this.state.menutopic.length - 1
                })
              }
              else {
                this.setState({
                  selectedIndex: this.state.selectedIndex - 1
                })
              }
            }

          }
          this.setState((pre) => ({ angled: angle }))
        }
        emitcounter++;
      });
  }


  // it handle all the actions when okey button is clicked
  Handleokey = () => {

    // like selecting a listitem from the menu and switch menu on/off 
    if (this.state.artistmenu === true) {
      this.setState({
        artistpics: true,
        artistmenu: false
      })
    }
    else if (this.state.songmenu === true) {
      this.setState({
        songplayer: true,
        audioplaying: true,
        songmenu: false
      })
    }
    else if (this.state.albummenu === true) {
      this.setState({
        albumpics: true,
        albummenu: false
      })
    }
    // handle the open of submenus inside submenu  
    else if (this.state.submenu === true) {

      if (this.state.submenuindex === 1) {
        this.setState({
          artistmenu: true,
          submenu: false
        })
      } else if (this.state.submenuindex === 2) {
        this.setState({
          albummenu: true,
          submenu: false,
        })
      } else if (this.state.submenuindex === 0) {
        this.setState({
          songmenu: true,
          submenu: false
        })
      }
    }
    else if (this.state.mainMenu == true) {
      if ([0, 3, 2].includes(this.state.selectedIndex)) {
        this.setState((pre) => ({
          picsubmenu: true
        }))
      }
      else {
        this.setState((pre) => ({
          submenu: true
        }))
      }
    }
    this.setState({
      mainMenu: false
    })
  }


  // handles all the actions by clicking on menu button 
  // it also maintains the previous menu and move only one step back not to the beggining 
  HandlemenuClick = () => {

    if (this.state.artistpics === true) {
      this.setState({
        artistpics: false,
        artistmenu: true,
      })
    }
    else if (this.state.songplayer === true) {
      this.setState({
        songmenu: true,
        songplayer: false
      })
    }
    else if (this.state.songmenu === true) {
      this.setState({
        songmenu: false,
        submenu: true
      })
    }
    else if (this.state.albummenu === true) {
      this.setState({
        albummenu: false,
        submenu: true
      })
    }
    else if (this.state.albumpics === true) {
      this.setState({
        albumpics: false,
        albummenu: true
      })
    }
    else if (this.state.artistmenu === true) {
      this.setState({
        artistmenu: false,
        submenu: true
      })
    }
    else {

      this.setState((pre) => ({
        picsubmenu: false,
        submenu: false,
        mainMenu: !pre.mainMenu
      }))
    }
  }

  // binds zingtouch into  ipodwheel whenever component is mounted succesfully 
  componentDidMount() {
    this.bindzingtouch();
  }



  render() {

    return (
      <div className="app  " >

        <div className='ipodmain   ' >

          <div className='displayarea' >
            {this.state.mainMenu ?
              <div className='displaypack'  >
                <h2 className='displayheader' > Ipod.js </h2>
                <ul className='optionslist'  >
                   {/* handle rendering of all the main menu options   */}
                  {this.state.menutopic.map((e, i) => {
                    return (
                      <>
                        {this.state.selectedIndex == i ?
                          <li key={i} className='selectedlistitem' > <p> {Object.keys(e)}   </p> <img className='greatericon' src={greater} /> </li>
                          : <li key={i} ><p> {Object.keys(e)} </p></li>}

                      </>
                    )
                  })}
                </ul>
              </div>
              : null}
              {/* all conditional rendering components render when their states are true  */}
            {
              this.state.picsubmenu ? <Mainmenupics index={this.state.selectedIndex} artist={false} /> : null
            }
            {
              this.state.submenu ? <Submenu menu={this.state.menutopic[1]} index={this.state.submenuindex} /> : null
            }
            {
              this.state.artistmenu ? <Albummenu menu={this.state.menutopic[1].Music[1]} index={this.state.artistmenuindex} /> : null
            }
            {
              this.state.artistpics ? <Albumpics details={this.state.menutopic[1].Music[1].Artists[this.state.artistmenuindex]} /> : null
            }
            {
              this.state.albumpics ? <Albumpics details={this.state.menutopic[1].Music[2].Albums[this.state.albummenuindex]} /> : null
            }
            {
              this.state.albummenu ? <Albummenu menu={this.state.menutopic[1].Music[2]} index={this.state.albummenuindex} /> : null
            }
            {
              this.state.songplayer ? <Songplayer details={this.state.menutopic[1].Music[0].Allsongs[this.state.songmenuindex]}  playorpause = {this.state.audioplaying}  /> : null
            }
            {
              this.state.songmenu ? <Songmenu menu={this.state.menutopic[1].Music[0]} index={this.state.songmenuindex} /> : null
            }

          </div>

          {/* ipod wheel that handle the rotation guesture */}
           
          <div className="controllerpad  " >
            <div className="child1 commonc " >
              <p onClick={this.HandlemenuClick} >menu</p>
            </div>
            <div className="child2 commonc " onClick={this.nextsong} >
              <img alt='next' src={next} />
            </div>
            <div className="child3 commonc " onClick={this.playnpause}  >
              <img src={pause} alt="playpause" />
            </div>
            <div className="child4 commonc " onClick={this.previousSong}   >
              <img src={previous} alt='previous' />
            </div>

          </div>
          <div className='okeybutton' onClick={this.Handleokey} ></div>
        </div>
        {/* im rendering same div twice for the mirror shadow reflection css  */}
        <div className='ipodmain' ></div>
      </div>
    );
  }
}
