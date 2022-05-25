
import mycss from './mycss.module.css';
function Blog()
{
    return(
        <div>
        <h1 class={mycss.Blog}>Blog</h1>
        <div>
        <div class={mycss.gallery}>
          <img src={require('./image/img1.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>
      
      <div class={mycss.gallery}>
          <img src={require('./image/img2.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>
      <div class={mycss.gallery}>
          <img src={require('./image/img3.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>

      <div class={mycss.gallery}>
          <img src={require('./image/img1.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>
      
      <div class={mycss.gallery}>
          <img src={require('./image/img2.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>
      
      <div class={mycss.gallery}>
          <img src={require('./image/img3.jpg')} alt="Cinque Terre" width="400" height="250"></img>
          <div>Add a description of the image here</div>
      </div>
        </div>
        </div>
    
        
    )
}

export default Blog;