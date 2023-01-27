import React from 'react'
import CardItem from './CardItem'
import './Card.css'
import imG1 from '../images/img-1.jpg'
import imG2 from '../images/img-2.jpg'
import imG3 from '../images/img-3.jpg'
import imG4 from '../images/img-4.jpg'
import imG8 from '../images/img-8.jpg'

function Card() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={imG1}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src={imG2}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
              />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={imG3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem 
              src={imG4}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem 
              src={imG8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;