import React from 'react'

interface Props{
  score: number;
}

const ScoreBoard = ({score}: Props) => {
  return (
    <div>Score: {score}</div>
  )
}

export default ScoreBoard