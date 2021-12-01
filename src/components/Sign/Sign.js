import './Sign.css'

export default function Sign(props) {
  return (
    <div className="sign">
      <img src={`${process.env.PUBLIC_URL}/signs/${props.name}.png`} />
      <span className="name">{props.name}</span>
      <span>{props.dates}</span>
    </div>
  )
}
