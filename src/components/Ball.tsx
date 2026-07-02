import profilePhoto from '../assets/pavelprofpic.png'
import './Ball.css'

function Ball({ rotation }: { rotation: number }) {
  return (
    <div className="ball">
      <img
        src={profilePhoto}
        alt=""
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  )
}

export default Ball
