import React, { useEffect, useState } from 'react'
import '../styles/Clock.css'

const LocalTime = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())

      const hour = document.getElementById('hour')

      const minutes = document.getElementById('minutes')

      const second = document.getElementById('second')

      const date = document.getElementById('date')

      const day = document.getElementById('day')

      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

      day.innerHTML = days[new Date().getDay()]

      date.innerHTML = new Date().toLocaleDateString('es-ES')

      hour.innerHTML = new Date().getHours()

      minutes.innerHTML = new Date().getMinutes()

      second.innerHTML = new Date().getSeconds()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="div-clock">
      <div className="clock-container">
        <h3>Hora Local</h3>
        <div className="date-container">
          <h2 className="day" id="day"></h2>
          <h2 className="date" id="date"></h2>
        </div>
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
