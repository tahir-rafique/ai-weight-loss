import React from 'react'

export default function Btn({ title = '',
    className = '',
}) {
    return (
        <div className={`${className} cursor-pointer`}>
            {title}
        </div>
    )
}
