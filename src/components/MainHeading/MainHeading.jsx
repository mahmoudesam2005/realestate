import React from 'react'

export default function MainHeading({caption, children}) {
    return (
    <div className="text-center mx-auto w-fit mt-12 mb-4">
        <p className="text-sm uppercase">{caption}</p>
        <h2 className='text-2xl'>{children}</h2>
    </div>
    )
}
