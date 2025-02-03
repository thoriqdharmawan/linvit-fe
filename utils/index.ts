export const getDay = (dateString: string): string => {
  const date = new Date(dateString)
  return Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date).toUpperCase()

  const day = date.getDate()

  const year = date.getFullYear()

  const getDaySuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return "th"
    const lastDigit = day % 10
    switch (lastDigit) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  return `${month}, ${day}<sup>${getDaySuffix(day)}</sup> ${year}`
}
