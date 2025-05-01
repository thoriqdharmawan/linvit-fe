import { useState, useEffect, useCallback, RefObject } from "react"

interface FullScreenDocument extends Document {
  mozFullScreenElement?: Element
  msFullscreenElement?: Element
  webkitFullscreenElement?: Element
  msExitFullscreen?: () => Promise<void>
  webkitExitFullscreen?: () => Promise<void>
  mozCancelFullScreen?: () => Promise<void>
}

interface FullScreenHTMLElement extends HTMLElement {
  msRequestFullscreen?: () => Promise<void>
  webkitRequestFullscreen?: () => Promise<void>
  mozRequestFullScreen?: () => Promise<void>
}

const useFullscreen = (elementRef?: RefObject<HTMLElement>) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  const enterFullscreen = useCallback(() => {
    const element = elementRef?.current ?? document.documentElement

    if (!element) return

    const fsElement = element as FullScreenHTMLElement

    if (fsElement.requestFullscreen) {
      fsElement
        .requestFullscreen()
        .catch((err) => console.error(`Error attempting to enable fullscreen: ${err.message}`))
    } else if (fsElement.mozRequestFullScreen) {
      fsElement.mozRequestFullScreen()
    } else if (fsElement.webkitRequestFullscreen) {
      fsElement.webkitRequestFullscreen()
    } else if (fsElement.msRequestFullscreen) {
      fsElement.msRequestFullscreen()
    }
  }, [elementRef])

  const exitFullscreen = useCallback(() => {
    const fsDocument = document as FullScreenDocument

    if (fsDocument.exitFullscreen) {
      fsDocument.exitFullscreen().catch((err) => console.error(`Error attempting to exit fullscreen: ${err.message}`))
    } else if (fsDocument.mozCancelFullScreen) {
      fsDocument.mozCancelFullScreen()
    } else if (fsDocument.webkitExitFullscreen) {
      fsDocument.webkitExitFullscreen()
    } else if (fsDocument.msExitFullscreen) {
      fsDocument.msExitFullscreen()
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  const checkFullscreen = useCallback(() => {
    const fsDocument = document as FullScreenDocument

    const fullscreenElement =
      fsDocument.fullscreenElement ||
      fsDocument.mozFullScreenElement ||
      fsDocument.webkitFullscreenElement ||
      fsDocument.msFullscreenElement

    setIsFullscreen(!!fullscreenElement)
  }, [])

  useEffect(() => {
    // Add fullscreen change event listeners
    document.addEventListener("fullscreenchange", checkFullscreen)
    document.addEventListener("webkitfullscreenchange", checkFullscreen)
    document.addEventListener("mozfullscreenchange", checkFullscreen)
    document.addEventListener("MSFullscreenChange", checkFullscreen)

    // Check initial state
    checkFullscreen()

    // Clean up event listeners
    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen)
      document.removeEventListener("webkitfullscreenchange", checkFullscreen)
      document.removeEventListener("mozfullscreenchange", checkFullscreen)
      document.removeEventListener("MSFullscreenChange", checkFullscreen)
    }
  }, [checkFullscreen])

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  }
}

export default useFullscreen
