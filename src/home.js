
import './App.css';
import backv from './images/homevideo.mp4';
import './home.css';



function BackgroundVideo() {
  return (
    <div>
      
<video loop autoPlay muted id='bg-video'>
    <source src={backv} type='video/mp4'/>
</video>
     <h>hrekklk</h>  
    </div>
  );
}
export default BackgroundVideo;
