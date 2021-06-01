import { useState, useEffect } from 'react';


function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }
  // Return non-descript default values
  return { width: 800, height: 1000 }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return windowDimensions
}


export function isMobile() {
  const [mobileState, setMobileState] = useState(false)

  function getMobileState() {
    if (typeof window !== 'undefined') {
      return setMobileState(window.innerWidth <= 500)
    }
    return false
  }

  useEffect(() => {
    window.addEventListener('resize', getMobileState)
    
    return () => window.removeEventListener('resize', getMobileState);
  }, [])

  return mobileState
}
