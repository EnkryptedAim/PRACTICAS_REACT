import './ShowCount.css'

const ShowCount = (props) => {
  return (
    <div>
      <h2>
        Has pulsado aquí {props.count} {props.count === 1 ? 'vez' : 'veces'}
      </h2>
    </div>
  )
}

export default ShowCount
