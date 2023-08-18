import React, { useState} from 'react';
import './article.css';


// function counting(number){
//   const text = document.querySelector('span');
//   text.textContent = number;
//   number +=1;
// }
const Article = ({text, color}) => {
  
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className='word-block'>
        <div className='content'>
            <button className='ah' style={{background:color}} onClick={incrementCount} >{text}</button>   
             <span>Number{count} </span>        
        </div>        
    </div>
  )
}

export default Article