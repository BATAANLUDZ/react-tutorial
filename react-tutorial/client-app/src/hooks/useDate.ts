import { useEffect, useState } from 'react'

export const useDate = () => {
  const locale = 'en'
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  const day = currentDate.toLocaleDateString(locale, { weekday: 'long' })
  const date = `${day}, ${currentDate.getDate()} ${currentDate.toLocaleDateString(
    locale,
    { month: 'long' },
  )} ${currentDate.getUTCFullYear()}\n\n`

  const hour = currentDate.getHours()

  const time = currentDate.toLocaleTimeString(locale, {
    hour: '2-digit',
    hour12: true,
    minute: 'numeric',
    second: '2-digit',
  })

  const timeOnly = time.slice(0, 8)

  const timeSuffix = time.slice(8, 11)

  return { date, timeOnly, timeSuffix }
}
