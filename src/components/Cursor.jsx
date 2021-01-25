import React, { useState, useEffect } from 'react'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => document.removeEventListener('mousemove', onMouseMove)
    }, [])
    const customStyle = {
        top: `${position.y}px`,
        left: `${position.x}px`,
    }
    return <div className='cursor' style={customStyle}></div>
}

export default Cursor
