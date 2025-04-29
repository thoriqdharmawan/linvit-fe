import { useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const useCountdown = (targetDate: Date): TimeLeft => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = targetDate.getTime() - now

    const timeLeft: TimeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }

    return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}
