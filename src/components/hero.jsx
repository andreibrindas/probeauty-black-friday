import React from "react"
import Container from './container'
import heroStyles from "./hero.module.css"

export default function Hero(props) {
  return <div className={heroStyles.heroContainer}>

  <Container>
    <div className="logo-container">
      <div className="logo">
        <a href="//probeauty.ro" target="blank" className="logo__link">
          {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.03 20"><path d="M21.77,19.51V.49H32.25a6.88,6.88,0,0,1,5.33,1.93A5.34,5.34,0,0,1,39,6.14a5.53,5.53,0,0,1-4.43,5.3l4.69,8.07H36.42l-4.37-7.75H24.31v7.75ZM24.31,2.74V9.52h8.58a3.48,3.48,0,0,0,3.64-3.41,3.24,3.24,0,0,0-.9-2.21,4.43,4.43,0,0,0-3.38-1.16Z" fill="#fff"/><path d="M53.59,0c5.88,0,10.6,4.45,10.6,10a10.29,10.29,0,0,1-10.6,10A10.21,10.21,0,0,1,43.05,10C43.05,4.45,47.68,0,53.59,0Zm0,17.76A7.84,7.84,0,0,0,61.54,10a7.92,7.92,0,1,0-7.95,7.8Z" fill="#fff"/><path d="M69.51,19.51V.49h11a6.29,6.29,0,0,1,4.62,1.66,4.17,4.17,0,0,1,1.29,3,4.22,4.22,0,0,1-2.71,4,4.66,4.66,0,0,1,3.69,4.77,5.34,5.34,0,0,1-1.71,3.94,6.48,6.48,0,0,1-4.89,1.63ZM72,2.74V8.65h8.59a3.16,3.16,0,0,0,2.3-.85,3.1,3.1,0,0,0,.91-2.18,2.81,2.81,0,0,0-.79-1.95,3.8,3.8,0,0,0-2.77-.93Zm0,7.94v6.58h8.88a4.12,4.12,0,0,0,2.92-1,3.21,3.21,0,0,0,1-2.3,3,3,0,0,0-.9-2.13,3.62,3.62,0,0,0-2.62-1.11Z" fill="#ed2e85"/><path d="M95.76,17.27V10.62h7.69V8.39H95.76V2.73h12.75V.49H93.23v19H108l1-2.23Z" fill="#ed2e85"/><path d="M110.7,19.51l8.82-19h2.39l8.82,19H128l-2.59-5.71h-9.49l-2.56,5.71Zm6.08-7.75h7.69l-3.76-8.3h-.17Z" fill="#ed2e85"/><path d="M151.13.49V12.75c0,4.63-3.58,7.25-8.38,7.25s-8.33-2.62-8.33-7.25V.49h2.51V12.75c0,3.23,2.56,5,5.82,5s5.85-1.78,5.85-5V.49Z" fill="#ed2e85"/><path d="M171.18.49h-16V2.73h7.39V19.5h2.53V2.73h7.76Z" fill="#ed2e85"/><path d="M192,.49l-7.8,10.43v8.59H181.7V10.92L173.9.49h3.2l6,8.18,6-8.18Z" fill="#ed2e85"/><path d="M0,19.51V.49H10.28A6.83,6.83,0,0,1,15.6,2.42,5.37,5.37,0,0,1,15.37,10a6.87,6.87,0,0,1-5.09,1.75H2.53v7.75ZM2.53,2.74V9.52h7.75a4.49,4.49,0,0,0,3.26-1.08,3.23,3.23,0,0,0,1-2.33,3.18,3.18,0,0,0-.91-2.21,4.34,4.34,0,0,0-3.37-1.16Z" fill="#fff"/></svg> */}
          <img src={'img/logo.svg'} alt=""/>
        </a>
      </div>
    </div>
    <div className={heroStyles.heroMainContent}>
      <div className={heroStyles.mainText}>
        <p className="pink-highlighted-text">
          PROFITĂ DE
        </p> 
        <h1 className={heroStyles.heading}>SUPER <span className="pink-text">OFERTELE</span></h1>
        <p className="small-white-text mw-400">Orci varius natoque penatibus et magnis dis parturient montes, nascetur. Curabitur rutrum lectus in lacus ullamcorper.</p>
      </div>
      <div className={heroStyles.heroImageContainer}>
        <img src={'img/black-friday.png'} alt="Probeauty Black Friday"/>
      </div>
      <div className={heroStyles.linkToMain}>
        <a href="//probeauty.ro" target="blank">
          <span>
            VIZITEAZĂ <br/> PROBEAUTY.RO
          </span>
          <img src={'img/link-arrow.svg'} alt="vezi toate produsele pe Probeauty.ro"/>
          </a>
      </div>
    </div>
    
  </Container>
   
  </div>
} 