

interface Props {
  handleClick: () => void;
}

const Scramble = ({handleClick}: Props) => {
  return (
    <button onClick={handleClick}>New Set</button>
  )
}

export default Scramble