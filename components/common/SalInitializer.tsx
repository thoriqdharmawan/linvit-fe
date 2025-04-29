"use client"

import { useEffect } from "react"
import sal from "sal.js"
import "sal.js/dist/sal.css"

const SalInitializer = () => {
  useEffect(() => {
    sal()
  }, [])

  return null
}

export default SalInitializer
