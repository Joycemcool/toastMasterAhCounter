import React from 'react'
import Session from '../session/Session'

const WordSession = ({count,setCount}) => {

   const addAhhandler = () => {
    setCount ({
      ...count,
     Ah:count.Ah + 1});
   };

  //  Math.max(newValue, 0)
   const minusAhhandler = () => {
    setCount ({
      ...count,
     Ah:Math.max((count.Ah - 1),0)});
   };

   const addUmhandler = () => {
    setCount ({
      ...count,
     Um:count.Um + 1});
   };
   const minusUmhandler = () => {
    setCount ({
      ...count,
      Um:Math.max((count.Um - 1),0)});
   };
   
   const addErhandler = () => {
    setCount ({
      ...count,
     Er:count.Er + 1});
   };
   const minusErhandler = () => {
    setCount ({
      ...count,
     Er:Math.max((count.Er - 1),0)});
   };

   const addWellhandler = () => {
    setCount ({
      ...count,
     Well:count.Well + 1});
   };
   const minusWellhandler = () => {
    setCount ({
      ...count,
      Well:Math.max((count.Well - 1),0)});
   };

   const addSohandler = () => {
    setCount ({
      ...count,
      So:count.So + 1});
   };
   const minusSohandler = () => {
    setCount ({
      ...count,
      So:Math.max((count.So - 1),0)});
   };

   const addLikehandler = () => {
    setCount ({
      ...count,
      Like:count.Like + 1});
   };
   const minusLikehandler = () => {
    setCount ({
      ...count,
      Like:Math.max((count.Like - 1),0)});
   };


   const addButhandler = () => {
    setCount ({
      ...count,
      But:count.But + 1});
   };
   const minusButhandler = () => {
    setCount ({
      ...count,
      But:Math.max((count.But - 1),0)});
   };

   const addRepeatshandler = () => {
    setCount ({
      ...count,
      Repeats:count.Repeats + 1});
   };
   const minusRepeatshandler = () => {
    setCount ({
      ...count,
      Repeats:Math.max((count.Repeats - 1),0)});
   };


// After two days, I finally figure out how to use a react component and make my code much cleaner! 
  return (
    <div className='filler-words-container'>

    <div className='filler-words-container-column'>
        <Session color={'#00c4f5'} unitHeight={'142px'} word={'Ah'} addHandler={addAhhandler} minusHandler={minusAhhandler}/>
        <Session color={'#50D2CD'} unitHeight={'130px'} word={'Um'} addHandler={addUmhandler} minusHandler={minusUmhandler}/>
        <Session color={'#7AE582'} unitHeight={'163px'} word={'Er'} addHandler={addErhandler} minusHandler={minusErhandler}/>
        <Session color={'#004E64'} unitHeight={'89px'} word={'Well'} addHandler={addWellhandler} minusHandler={minusWellhandler}/>  
    </div>
    <div className='filler-words-container-column'>
        <Session color={'#24A18E'} unitHeight={'98px'} word={'So'} addHandler={addSohandler} minusHandler={minusSohandler}/>
        <Session color={'#62D0AD'} unitHeight={'130px'} word={'Like'} addHandler={addLikehandler} minusHandler={minusLikehandler}/>
        <Session color={'#004364'} unitHeight={'174px'} word={'But'} addHandler={addButhandler} minusHandler={minusButhandler}/>
        <Session color={'#00c4f5'} unitHeight={'122px'} word={'Repeats'} addHandler={addRepeatshandler} minusHandler={minusRepeatshandler}/>
    </div>
  </div>
  )
}

export default WordSession