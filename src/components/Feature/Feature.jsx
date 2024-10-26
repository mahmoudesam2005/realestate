import React from 'react'

export default function Feature({icon, caption, children}) {
    return (
    <div className='flex flex-col items-center transition-all duration-300 p-3 rounded-lg hover:shadow-md cursor-pointer'>
        <div className="icon"><img src={icon} alt={children} /></div>
        <div className="text-2xl">{children}</div>
        <div className="text-sm">{caption}</div>
    </div>
    )
}
