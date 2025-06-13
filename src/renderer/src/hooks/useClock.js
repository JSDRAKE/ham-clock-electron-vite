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
    date: ''
  })

  const updateTime = useCallback(() => {
    const now = new Date()
    const date = isUtc ? new Date(now.toISOString().slice(0, -1)) : now

    // Detectar el idioma del sistema
    const systemLanguage = navigator.language || 'en-US'
    const isSpanish = systemLanguage.startsWith('es')
    const locale = isSpanish ? 'es-ES' : 'en-US'
    const timeZone = isUtc ? 'UTC' : undefined

    const day = date.toLocaleString(locale, {
      timeZone,
      weekday: 'long'
    })

    const formattedDate = date.toLocaleString(locale, {
      timeZone,
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    setTime({
      hour: String(isUtc ? date.getUTCHours() : date.getHours()).padStart(2, '0'),
      minute: String(isUtc ? date.getUTCMinutes() : date.getMinutes()).padStart(2, '0'),
      second: String(isUtc ? date.getUTCSeconds() : date.getSeconds()).padStart(2, '0'),
      day: day.charAt(0).toUpperCase() + day.slice(1),
      date: formattedDate
    })
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
