import React, { useEffect, useState } from 'react'
import '../styles/Clock.css'

const UtcTime = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())

      const hour = document.getElementById('hour-utc')

      const minutes = document.getElementById('minutes-utc')

      const second = document.getElementById('second-utc')

      const day = document.getElementById('day-utc')

      const date = document.getElementById('date-utc')

      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

      day.innerHTML = days[new Date().getDay()]

      date.innerHTML = new Date().toLocaleDateString('es-ES')

      hour.innerHTML = new Date().getUTCHours()

      minutes.innerHTML = new Date().getUTCMinutes()

      second.innerHTML = new Date().getUTCSeconds()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="div-clock">
      <div className="clock-container">
        <div className="date-container">
          <h2 className="day" id="day-utc"></h2>
          <h2 className="date" id="date-utc"></h2>
        </div>
        <div className="box">
          <div className="clock">
            <div className="front-clock">
              <div id="hour-utc">00</div>
              <p>Hora</p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div id="minutes-utc">00</div>
              <p>Minutos</p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div id="second-utc">00</div>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UtcTime
