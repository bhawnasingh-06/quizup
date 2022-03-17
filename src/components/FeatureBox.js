import React from 'react'
import './css/features.css'
const Featurebox = (props) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt="" />
        </div>
        <div className="s-b-text">
            <h4><strong>{props.title}</strong></h4>
            <p>{props.content}</p>
        </div>
        
    </div>
  )
}

export default Featurebox