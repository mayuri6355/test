import mycss from './mycss.module.css';
  
  function Slider(){
    return(
        <div>
            <img className={mycss.slider} src={require('./image/img1.jpg')}></img>
        </div>

    )
}

export default Slider;