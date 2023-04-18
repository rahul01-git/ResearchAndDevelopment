import React, { Component } from 'react'
import Photo from '../assets/photo.jpg'
import '../assets/body.css'
import BodyDesc from './BodyDesc'

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="body__img-container">
          <img src={Photo} alt="user" />
        </div>
        <div className="body__details">
          <p className="body__details__title">React Developer</p>
          <h3 className="body__details__name">Professional profile</h3>
          <BodyDesc/>
          <button className="body__details__button">
            Download CV
          </button>
        </div>
      </div>
    )
  }
}
