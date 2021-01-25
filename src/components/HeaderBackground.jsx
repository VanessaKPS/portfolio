import React, { useState, useEffect } from 'react'
import Background from '../assets/Background.jpg'

const HeaderBackground = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [size, setSize] = useState(15)

    const onMouseMove = (e) => {
        setSize(20)
        let timer
        clearTimeout(timer)
        timer = setTimeout(() => {
            setSize(15)
        }, 300)
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => document.removeEventListener('mousemove', onMouseMove)
    }, [])

    const customStyle = {
        top: `${position.y - size * 8}px`,
        left: `${position.x - size * 8}px`,

        backgroundImage: `url(${Background})`,
        width: `${size}rem`,
        height: `${size}rem`,
    }

    return <div className='header-bg' style={customStyle}></div>
}

export default HeaderBackground
