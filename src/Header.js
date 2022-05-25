import mycss from './mycss.module.css';

function Header() {
    return(
  <div class={mycss.header}>

  <img class={mycss.logo1}src={require('./image/logo.jpg')}></img>
  
  <div class={mycss.headerright}>
    <a class={mycss.active} href="#home">Home</a>
    <a href="#blog">Blog</a>
    <a href="#pricing">Pricing</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
   
   )

}
export default Header;