import mycss from './mycss.module.css'
 const Pricing = () => {
    return(
    
        <div>
       <h2 class={mycss.h2}> Pricing Tables</h2>
        <div class={mycss.columns}>
          <ul class={mycss.price}>
            <li class={mycss.header}>Basic</li>
            <li class={mycss.grey}>$ 9.99 / year</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class={mycss.grey}><a href="#" class={mycss.button}>Sign Up</a></li>
          </ul>
        </div>
        
        <div class={mycss.columns}>
          <ul class={mycss.price}>
            <li class={mycss.header}>Pro</li>
            <li class={mycss.grey}>$ 9.99 / year</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class={mycss.grey}><a href="#" class={mycss.button}>Sign Up</a></li>
          </ul>
        </div>

        <div class={mycss.columns}>
          <ul class={mycss.price}>
            <li class={mycss.header}>Primium</li>
            <li class={mycss.grey}>$ 9.99 / year</li>
            <li>10GB Storage</li>
            <li>10 Emails</li>
            <li>10 Domains</li>
            <li>1GB Bandwidth</li>
            <li class={mycss.grey}><a href="#" class={mycss.button}>Sign Up</a></li>
          </ul>
        </div>
        </div>
    
    )
  }

  export default Pricing;