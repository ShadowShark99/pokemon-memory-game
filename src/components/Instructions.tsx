import { useState } from "react"

const Instructions = () => {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <div>
      {!show && <button onClick={() => toggleShow()}>Show Instructions</button>}
      {show && <button onClick={() => toggleShow()}>Hide Instructions</button>}
      {show && <p>Given a set of pokemon, click through all of them without repeating a selection!<br/>
A new set will be loaded after completing the current set.<br/>
See how many pokemon you can keep in your memory!</p>}
    </div>
  )
}

export default Instructions