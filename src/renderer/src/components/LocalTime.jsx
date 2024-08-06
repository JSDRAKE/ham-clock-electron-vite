import '../styles/Clock.css'

const LocalTime = () => {
  return (
    <div className="local-clock">
      <div className="clock-container">
        <h2 className="day" id="day"></h2>
        <div className="box">
          <div className="clock">
            <div className="front-clock">
              <div id="hour">00</div>
              <p>Hora</p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div id="minutes">00</div>
              <p>Minutos</p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div id="second">00</div>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalTime
