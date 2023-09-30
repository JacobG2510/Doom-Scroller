import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <div class="hero" id="home">
    <div class="hero__container">
      <h1 class="hero__heading">Doom Scroller <span></span></h1>
      <h2>Are you Ready?</h2>
      <p class="hero__description">Impossible Prices
      </p>
      <button class="main__btn"><Link to="/search">Explore</Link></button>
    </div>
  </div>
  <div class="main" id="sign-up">
    <div class="main__container">
      <div class="main__content">
        <h2>Sign Up Today</h2>
        <button class="main__btn"><a href="#">Sign Up</a></button>
      </div>
      <div class="main__img--container">
        <div class="main__img--card" id="card-2">
          <i class="fas fa-users"></i>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
