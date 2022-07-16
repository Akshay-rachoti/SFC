import { Fragment, useState } from 'react';
import './App.css';                  //CSS styling file linked
import m1 from './music/Sa.m4a';    //music files imported
import m2 from './music/re.m4a';
import m3 from './music/ga.m4a';
import m4 from './music/ma.m4a';
import m5 from './music/pa.m4a';
import m6 from './music/da-1.m4a';
import m7 from './music/ni.m4a';


function App() {
    //music and color added into array
  const audios = [m1, m2, m3, m4, m5, m6, m7]     //imported music files name added into array
  const arry = ["rgb(240, 162, 162)", "rgb(211, 243, 148)", "rgb(248, 177, 248)", "rgb(253, 253, 176)", "rgb(248, 171, 158)", "rgb(238, 163, 238)", "rgb(182, 204, 243)"];//color added into array 


  const [colo, setcolo] = useState("");
  const [play, setplay] = useState(false);

  let audio = new Audio(m1);
  var i = 0;

  let timerId;
      //function called on click of start / pause button
  const btnclk = (e) => { 

    if (e.target.value == 'Start') {
      e.target.value = 'Pause';
      document.getElementsByClassName("reset")[0].style.display = "block";
      timerId = setInterval(miz, 2000);
    }

    else {
      document.getElementsByClassName("reset")[0].style.display = "none";
      e.target.value = 'Start';
      clearInterval(timerId);
      audio.pause();
    }
  }

    //function that iterates through array of color and music
  const miz = () => {

    if (i < arry.length) {
      let audio = new Audio(audios[i]);
      audio.play();
      document.getElementsByClassName("hrcrcle")[0].style.backgroundColor = arry[i];
      i++;
    }
    else i = 0
  }

    //function for reset/ reload of page
  const resbtn = () => {
    window.location.reload();
  }


  return (
    <Fragment>
      <div className='hrWhole'>
        <div className='nacvBar'>
          <div className='navheadng'>mUSICal HEal</div>
          <div className='navlogo'>hR</div>
        </div>
        <div className='hrContainer'>
          <div className='hrCont1'></div>
          <div className='hrCont2'></div>
          <div className='hrCont3'></div>
          <div className='hrCont4'></div>
          <div className='hrCont5'></div>
          <div className='hrCont6'></div>
        </div>
        <div className='hrcrcle'>
          <div className='inrCrcle inrCrcle1'></div>
          <div className=' inrCrcle inrCrcle2'></div>
          <div className='inrCrcle inrCrcle3'></div>
          <input type="button" className='crcbtn starbtn' onClick={btnclk} value="Start"></input>
          <input type="button" style={{ display: 'none' }} onClick={resbtn} className='crcbtn reset' value="Reset"></input>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
