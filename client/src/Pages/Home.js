import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <div className="hero" id="home">
    <div className="hero__container">
      <h1 className="hero__heading">Doom Scroller <span></span></h1>
      <h2>Are you Ready?</h2>
      <p className="hero__description">Impossible Prices
      </p>
      <button className="main__btn"><Link to="/search">Explore</Link></button>
    </div>
  </div>
  <div className="main" id="sign-up">
    <div className="main__container">
      <div className="main__content">
        <h2>Sign Up Today</h2>
        <button className="main__btn"><a href="#">Sign Up</a></button>
      </div>
      <div className="main__img--container">
        <div className="main__img--card" id="card-2">
          <i className="fas fa-users"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
