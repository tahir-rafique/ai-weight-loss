import React from 'react'

export default function Btn({ title = '',
    className = '',
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className={`${className} cursor-pointer`}>
            {title}
        </div>
    )
}
