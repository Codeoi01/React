import React from 'react'
import PropTypes from 'prop-types'
import im from '../assets/react.svg'
import './Card.css'

const card = (props) => {
  return (
    <div className='card'>
     <img  src={im} alt="image" />
      <h1> {props.title}</h1>
      <p>{props.dis}</p>
    </div>
  )
}
card.propTypes = {
    title: PropTypes.string.isRequired,
    dis: PropTypes.string.isRequired
}   
export default card
