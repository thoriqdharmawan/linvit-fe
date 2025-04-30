import { useCountdown } from "@/hooks/useCountdown"

const DateItem = ({ amount, label }: { amount: number; label: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="castoro-regular text-3xl font-thin text-primary">{amount}</h4>
      <p className="castoro-regular text-lg text-gray-500">{label}</p>
    </div>
  )
}

const Countdown = ({ date }: { date: string }) => {
  const { days, hours, minutes, seconds } = useCountdown(new Date(date))

  return (
    <div className="grid grid-cols-2 gap-12">
      <DateItem amount={days} label="Days" />
      <DateItem amount={hours} label="Hours" />
      <DateItem amount={minutes} label="Minutes" />
      <DateItem amount={seconds} label="Seconds" />
    </div>
  )
}

export default Countdown
