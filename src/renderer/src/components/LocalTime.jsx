import React from 'react'
import { useTranslation } from 'react-i18next'
import useClock from '../hooks/useClock'
import '../styles/Clock.css'

/**
 * Componente que muestra la hora local con formato legible.
 * Utiliza el hook useClock para obtener y mostrar la hora actual del sistema.
 *
 * @component
 * @example
 * // Uso básico
 * <LocalTime />
 *
 * @returns {JSX.Element} Componente React que muestra la hora local formateada
 *
 * @see UtcTime - Componente hermano que muestra la hora UTC
 * @see useClock - Hook que proporciona la lógica del reloj
 *
 * @description
 * Este componente muestra:
 * - Día de la semana (ej: "Lunes")
 * - Fecha completa (ej: "13 de junio de 2023")
 * - Hora actual en formato HH:MM:SS
 * - Etiquetas descriptivas para cada unidad de tiempo
 *
 * El diseño es responsivo y se adapta al contenedor padre.
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
