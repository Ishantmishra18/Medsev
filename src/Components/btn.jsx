import React from 'react'
import { Link } from 'react-router-dom'

const btn = ({text , link}) => {
  return (
    <Link to={link} className=' px-8 py-4 rounded-full bg-black text-white cursor-pointer duration-200 hover:translate-y-1 shadow-2xl'>{text}</Link>
  )
}

export default btn