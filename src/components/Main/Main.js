import './Main.css'
import background from '../../background.jpeg'
import { zodiac } from '../../data'
import Sign from '../Sign/Sign'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <Sign key={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  )
}
