import React from 'react'

export default function Item({ params }) {
    const { itemid } = params
    return (
        <h1>Item Id {itemid}</h1>
    )
}
