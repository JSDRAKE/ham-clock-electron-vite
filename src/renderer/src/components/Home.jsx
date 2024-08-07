import LocalTime from './LocalTime'
import UtcTime from './UtcTime'

const Home = () => {
  return (
    <div className="home-div">
      <LocalTime />
      <UtcTime />
    </div>
  )
}

export default Home
