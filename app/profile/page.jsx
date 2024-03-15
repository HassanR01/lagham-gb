import React from 'react'
import LogOut from '../components/buttons/logOut'
import Image from 'next/image'
import Link from 'next/link'

const getUser = async (email) => {
  const apiUrl = process.env.API_URL
  try {
    const res = await fetch(`${apiUrl}/api/users/${email}`, {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Cannot Fetch The User')
    }

    return res.json()

  } catch (error) {
    console.log(error);
  }
}


export default async function Profile({ searchParams }) {
  const email = searchParams.email
  const { user } = await getUser(email)
  const { orders } = user
  console.log(orders[3]);
  return (
    <section id='profile'>
      <div className="userInfo flex flex-col sm:flex-row w-full justify-around items-center pb-4">
        <div className="mainInfo text-xl m-2 mb-8 flex flex-col items-center justify-center sm:items-start">
          <Image src={user.image} className='image rounded-full border-4 my-2' width={120} height={120} alt='Profile pic' />
          <h3 className='font-semibold text-2xl'>{user.name}</h3>
          <h4>{user.email}</h4>
        </div>
        <div className="add text-xl sm:w-auto flex flex-col font-semibold justify-center items-center sm:items-start">
          <h4>{user.points} Points</h4>
          <h4 className=' py-2'>{orders.length} Orders</h4>
          <a href="/" className='link'>Menu</a>
        </div>
      </div>
      <h2 className='text-4xl font-bold'>Orders List</h2>
      <div className="orders w-full flex items-center justify-center my-4">
        <div className="orderList w-4/5 flex flex-col items-center justify-center rounded-lg border-y-8 p-8">
          <div className="evid flex w-full justify-around items-center text-2xl font-semibold pb-6">
            <h3>Item</h3>
            <h3>Total Price</h3>
            <h3>Phone</h3>
            <h3>Status</h3>
          </div>
          <div className="list w-full max-h-80 sm:max-h-max flex overflow-scroll sm:overflow-hidden flex-col justify-start items-center bg-gray-900 rounded-lg px-2">
            {orders.length > 0 && orders.map(order => (
              <div className="order w-full flex flex-col items-center justify-around border-x-4 rounded-lg bg-bgColor text-2xl m-2" key={order._id}>
                <div className="info w-full flex items-center justify-around p-2">
                  <h3>{order.items.length} items</h3>
                  <h3>{order.totalPrice} EGP</h3>
                  <h3>{order.phoneNum}</h3>
                  <h3 className='font-bold text-2xl text-green-400'>Received</h3>
                </div>
                <div className="items relative w-full h-0 overflow-hidden duration-700 flex flex-col justify-start items-center">
                  {order.items.length > 0 && order.items.map((item, ind) => (
                    <div className="item w-full flex flex-row justify-start items-start p-2" key={ind}>
                      <div className="detail flex w-full justify-around items-center">
                        <div className="quantity flex">
                          <h3 className='mr-4'>{item.quantity}</h3>
                          <h3>{item.itemInfo.titleEn}</h3>
                        </div>
                        <h3>{item.quantity * item.itemInfo.price - (item.quantity * item.itemInfo.price * 0.1)} EGP</h3>
                        <h3>{item.size}</h3>
                      </div>
                    </div>
                  ))}
                  <div className='absolute left-2 bottom-2 text-lg flex'>Location: {order.address === "" ? (<>In The Branch</>) : (<>{order.address}</>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="adminDashboard py-3">
        {user.email === 'hassanrageh.236@gmail.com' && (<Link href={{
          pathname: '/Dashboard',
          query: {
            email: user.email
          }
        }} className='link'>Dashboard</Link>)}
      </div>
      <LogOut />
    </section>
  )
}
