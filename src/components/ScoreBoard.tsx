import React, { useEffect, useState } from 'react'

interface Props{
  score: number;
}

const ScoreBoard = ({score}: Props) => {
  const [high, setHigh] = useState(0);
  useEffect(() => {
    if(score > high)
      setHigh(score);


  }, [score]);

  return (
    <>
      <div>Score: {score}</div>
      <div>HighScore: {high}</div>
    </>
    
  )
}

export default ScoreBoard