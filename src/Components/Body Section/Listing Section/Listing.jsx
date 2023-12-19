import React from 'react'
import './listing.css'

import { BsArrowRightShort } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'



import img from '../../../assests/image (1).png'
import img1 from '../../../assests/image (2).png'
import img2 from '../../../assests/image (3).png'
import img3 from '../../../assests/image (5).png'

import user from '../../../assests/user (1).jpg'
import user1 from '../../../assests/user (2).jpg'
import user2 from '../../../assests/user (3).jpg'
import user3 from '../../../assests/user (4).jpg'






const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>
          My Listings
        </h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="iname" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="iname" />
          <h3>Coffee Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="iname" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="iname" />
          <h3>Spider Plant</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="uimage" />
              <img src={user1} alt="uimage" />
              <img src={user2} alt="uimage" />
              <img src={user3} alt="uimage" />

            </div>

            <div className="cardText">
              <span>
                14,667 plants sold <br/>
                <small>
                  21 sellers <span className='date'>7 days</span>
                </small>
              </span>
            </div>
          </div>

        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="uimage" />
              <img src={user3} alt="uimage" />
              <img src={user2} alt="uimage" />
              <img src={user} alt="uimage" />

            </div>

            <div className="cardText">
              <span>
                22,667 plants sold <br/>
                <small>
                  35 sellers <span className='date'>14 days</span>
                </small>
              </span>
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Listing