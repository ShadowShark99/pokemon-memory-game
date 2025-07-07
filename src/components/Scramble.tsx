import React from 'react'

interface Props {
  handleClick: () => void;
}

const Scramble = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick}>Scramble</button>
  )
}

export default Scramble