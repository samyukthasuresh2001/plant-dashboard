import React from 'react'
import './activity.css'

import {BsArrowRightShort} from 'react-icons/bs'

import customer from '../../../assests/user (1).jpg'
import customer1 from '../../../assests/user (2).jpg'
import customer2 from '../../../assests/user (3).jpg'
import customer3 from '../../../assests/user (4).jpg'
import customer4 from '../../../assests/user (1).jpg'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer} alt="customer" />
          <div className="customerDetails">
            <span className="name">
              Benny
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer1} alt="customer" />
          <div className="customerDetails">
            <span className="name">
              Roslin
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer2} alt="customer" />
          <div className="customerDetails">
            <span className="name">
              Danny
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            20 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer3} alt="customer" />
          <div className="customerDetails">
            <span className="name">
              Joseph
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            35 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={customer4} alt="customer" />
          <div className="customerDetails">
            <span className="name">
              Jack
            </span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            1 hour ago
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activity