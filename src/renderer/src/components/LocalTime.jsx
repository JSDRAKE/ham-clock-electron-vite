import React from 'react'
import { useTranslation } from 'react-i18next'
import useClock from '../hooks/useClock'
import '../styles/Clock.css'

/**
 * Componente que muestra la hora local
 * @component
 * @returns {JSX.Element} Componente de reloj local
 */
const LocalTime = React.memo(() => {
  const { t } = useTranslation()
  const { time } = useClock(false)

  return (
    <div className="div-clock">
      <div className="clock-container">
        <h3>{t('localTime')}</h3>
        <div className="date-container">
          <h2 className="day">{time.day}</h2>
          <h2 className="date">{time.date}</h2>
        </div>
        <div className="box">
          <div className="clock">
            <div className="front-clock">
              <div>{time.hour}</div>
              <p>
                {t('time.hour')}
                {time.hour !== '01' ? 's' : ''}
              </p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div>{time.minute}</div>
              <p>{t(time.minute === '01' ? 'time.minute' : 'time.minutes')}</p>
            </div>
          </div>
          <div className="clock">
            <div className="front-clock">
              <div>{time.second}</div>
              <p>{t(time.second === '01' ? 'time.second' : 'time.seconds')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

LocalTime.displayName = 'LocalTime'

export default LocalTime
