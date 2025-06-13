import React from 'react'
import { useTranslation } from 'react-i18next'
import useClock from '../hooks/useClock'
import '../styles/Clock.css'

/**
 * Componente que muestra la hora Universal Coordinada (UTC) con formato legible.
 * Similar al componente LocalTime pero muestra la hora en la zona horaria UTC.
 *
 * @component
 * @example
 * // Uso básico
 * <UtcTime />
 *
 * @returns {JSX.Element} Componente React que muestra la hora UTC formateada
 *
 * @see LocalTime - Componente hermano que muestra la hora local
 * @see useClock - Hook que proporciona la lógica del reloj
 *
 * @description
 * Este componente es esencial para radioaficionados que necesitan coordinar
 * comunicaciones a nivel internacional, donde se utiliza comúnmente la hora UTC.
 *
 * Muestra:
 * - Día de la semana en UTC (ej: "Monday")
 * - Fecha completa en UTC
 * - Hora UTC actual en formato HH:MM:SS
 * - Etiquetas descriptivas para cada unidad de tiempo
 *
 * El diseño es idéntico al de LocalTime para mantener consistencia visual.
 */
const UtcTime = React.memo(() => {
  const { t } = useTranslation()
  const { time } = useClock(true)

  return (
    <div className="div-clock">
      <div className="clock-container">
        <h3>{t('utcTime')}</h3>
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

UtcTime.displayName = 'UtcTime'

export default UtcTime
