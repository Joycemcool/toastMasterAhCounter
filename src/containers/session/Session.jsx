import React,{ useState} from 'react'
import './session.css';

const Session = ({unitHeight, color, word, addHandler, minusHandler}) => {


  return (
    <div className='basic-session' style={{background:color}}>
        <div className='session-word'>
          <p>{word}</p>
        </div>
        <div className='session-modifier'>
          <div className='session-plus'>
              <button type='button' onClick={addHandler} >+</button>
          </div>
          <div className='session-minus'>
              <button type='button'onClick={minusHandler} >-</button>
          </div>
        </div>

    </div>
  )
}

export default Session