import React from 'react'
import { useRef, useEffect } from 'react';

export default function InputFocus() {

  const textRef = useRef()

  useEffect(() => {
      textRef.current.focus()
  },[])


  return (
    <div>
      <input ref={textRef} type='text'/>
    </div>
  )
}
