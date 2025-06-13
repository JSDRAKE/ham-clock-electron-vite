import { useState, useEffect, useCallback } from 'react'

/**
 * Hook personalizado que maneja la lógica del reloj, incluyendo la actualización en tiempo real
 * y la conversión entre zonas horarias.
 *
 * @example
 * // Uso básico
 * const { time } = useClock(); // Hora local
 * const { time: utcTime } = useClock(true); // Hora UTC
 *
 * @param {boolean} [isUtc=false] - Si es true, devuelve la hora en UTC. Si es false, devuelve la hora local.
 * @returns {Object} Objeto que contiene el tiempo formateado con las siguientes propiedades:
 * @returns {string} time.hour - Hora en formato 'HH'
 * @returns {string} time.minute - Minutos en formato 'MM'
 * @returns {string} time.second - Segundos en formato 'SS'
 * @returns {string} time.day - Día de la semana formateado (ej: 'Lunes', 'Tuesday')
 * @returns {string} time.date - Fecha completa formateada según la configuración regional
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
 */
const useClock = (isUtc = false) => {
  const [time, setTime] = useState({
    hour: '00',
    minute: '00',
    second: '00',
    day: isUtc ? 'Thursday' : 'Jueves', // Valor por defecto en inglés/español
    date: '',
  })

  const updateTime = useCallback(() => {
    const now = new Date()

    // Detectar el idioma del sistema
    const systemLanguage = navigator.language || 'en-US'
    const isSpanish = systemLanguage.startsWith('es')
    const locale = isSpanish ? 'es-ES' : 'en-US'

    // Para UTC, usamos los métodos UTC del objeto Date
    if (isUtc) {
      const utcDay = now.toLocaleString(locale, {
        timeZone: 'UTC',
        weekday: 'long',
      })
      const utcDate = now.toLocaleString(locale, {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      setTime({
        hour: String(now.getUTCHours()).padStart(2, '0'),
        minute: String(now.getUTCMinutes()).padStart(2, '0'),
        second: String(now.getUTCSeconds()).padStart(2, '0'),
        day: utcDay.charAt(0).toUpperCase() + utcDay.slice(1),
        date: utcDate,
      })
    } else {
      // Para hora local
      const localDay = now.toLocaleString(locale, {
        weekday: 'long',
      })
      const localDate = now.toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      setTime({
        hour: String(now.getHours()).padStart(2, '0'),
        minute: String(now.getMinutes()).padStart(2, '0'),
        second: String(now.getSeconds()).padStart(2, '0'),
        day: localDay.charAt(0).toUpperCase() + localDay.slice(1),
        date: localDate,
      })
    }
  }, [isUtc])

  useEffect(() => {
    updateTime()

    // Usar requestAnimationFrame para mejor rendimiento
    let animationFrameId
    let lastUpdate = 0

    const update = (timestamp) => {
      if (!lastUpdate) lastUpdate = timestamp
      const delta = timestamp - lastUpdate

      // Actualizar cada segundo (1000ms)
      if (delta >= 1000) {
        updateTime()
        lastUpdate = timestamp - (delta % 1000)
      }

      animationFrameId = requestAnimationFrame(update)
    }

    animationFrameId = requestAnimationFrame(update)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [updateTime])

  return { time }
}

export default useClock
