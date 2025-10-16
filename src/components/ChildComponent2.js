import React from 'react'

const ChildComponent2 = ({isSelectedOption}) => {
  return (
    <div>
      <h1>Child Component 2</h1>
      <button onClick={()=>isSelectedOption("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildComponent2
