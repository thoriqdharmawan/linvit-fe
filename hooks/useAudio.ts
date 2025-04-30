import { useEffect, useRef, useState } from "react"

export function useAudio(audioUrl: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    audioRef.current = new Audio(audioUrl)
    audioRef.current.loop = true

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [audioUrl])

  const play = () => {
    audioRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        console.warn("Audio play failed:", err)
      })
  }

  const pause = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }

  return {
    play,
    pause,
    isPlaying,
  }
}
