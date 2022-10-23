
import './App.css';
import backv from './images/homevideo.mp4';
import './home.css';
import About from './components/about';



function BackgroundVideo() {
  return (
    <div>
      
<video loop autoPlay muted id='bg-video'>
    <source src={backv} type='video/mp4'/>
</video>
     <h2>TRUSTED DENTAL CLINIC</h2>  
     <h3>Exceptional service packages<br/> for everyone</h3>
     <button className='book'>BOOK ONLINE</button>
     <h4>OR CALL (+254) 713 045 562</h4>
    
    </div>
  
  );

}


export default BackgroundVideo;
