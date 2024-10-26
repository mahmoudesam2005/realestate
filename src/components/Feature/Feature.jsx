import React from 'react'

export default function Feature({icon, caption, children}) {
    return (
    <div className='flex flex-col items-center transition-all duration-300 p-3 rounded-lg hover:shadow-[0_0_10px_rgba(0,0,0,0.18)] cursor-pointer'>
        <div className="icon"><img src={icon} alt={children} /></div>
        <div className="text-2xl">{children}</div>
        <div className="text-sm">{caption}</div>
    </div>
    )
}
