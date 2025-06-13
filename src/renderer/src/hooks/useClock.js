import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook para manejar la lógica del reloj
 * @param {boolean} isUtc - Indica si el reloj debe mostrar hora UTC
 * @returns {Object} Objeto con el tiempo formateado y funciones relacionadas
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
