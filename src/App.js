import React, { useState } from 'react'

import { WordSession} from './containers'
import './App.css'
import Piechart from './containers/piechart/Piechart';


const App = () => {
   const [count, setCount] = useState({
    Ah: 0, 
    Um: 0,
    Er:0,
    Well:0,
    So:0,
    Like:0,
    But:0,
    Repeats:0,
   });


  return (
    <div className='filler-words'>
      <div className='page-title'>
        <h4>Ah Counter</h4>
      </div>
      <div className='analysis'>
          <Piechart count={count} />
      </div>
      <div className='other-input'>
        <input type="text" placeholder='other filler sounds/words'/> 
      </div>
      <div className='filler-words-container'>
        <WordSession  count={count} setCount={setCount}/>
      </div>

    </div>
  )
}

export default App