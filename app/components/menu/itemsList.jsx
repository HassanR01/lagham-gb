import Image from 'next/image'
import React from 'react'
import imageFood from '../../../public/hamburger.png'
import Link from 'next/link'

const getItems = async () => {
    const apiUrl = process.env.API_URL;
    try {
        const res = await fetch(`${apiUrl}/api/items`, {
            cache: 'no-store'
        })
        if (!res.ok) {
            throw new Error('Cannot Fetch The Items')
        }

        return res.json()
    } catch (err) {
        console.log(err);
    }
}

export default async function ItemsList() {
    const { items } = await getItems()

    return (
        <>
            {items.map(item => (
                <div className={`card item show ${item.category}`} key={item._id}>
                    <div className="image">
                        <Image src={item.image} height={300} width={300} alt={'name'} />
                    </div>
                    <div className="text">
                        <h4>{item.titleEn}</h4>
                        <h4>{item.titleAr}</h4>
                        <div className="links flex items-center justify-center flex-wrap">
                            <Link className='link' href={`/${item._id}`}>{item.price} L.E</Link>
                        </div>
                    </div>
                    <div className="points absolute top-1 left-1 py-1 px-2 bg-opacity-50 bg-bgColor rounded-full flex items-center justify-center text-yellow-500 font-semibold text-sm lg:text-xl">
                        <h4>{item.points} Point</h4>
                    </div>
                </div>
            ))}
        </>
    )
}
