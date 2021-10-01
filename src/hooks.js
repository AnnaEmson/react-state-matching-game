import React, { useRef, useEffect, useState } from 'react'

function useHover () {
  const ref = useRef()
  const [hover, setHover] = useState(false)
  const enter = () => {
    setHover(true)
  }

  const leave = () => {
    setHover(false)
  }

  useEffect(() => {
    const refCopy = ref
    refCopy.current.addEventListener('mouseenter', enter())
    refCopy.current.addEventListener('mouseleave', leave())
    refCopy.current.removeEventListener('mouseenter', 'mouseleave')
  })
  return (
    [ref, hover]
  )
}

export default useHover



