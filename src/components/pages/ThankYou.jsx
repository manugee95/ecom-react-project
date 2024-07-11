import React from 'react'
import { Link } from 'react-router-dom'

function ThankYou() {
  return (
    <div className='py-[5%] px-[10%] bg-cover bg-center mb-[-10%] text-center' style={{backgroundImage: `url(/img/thanks.jpg)`, height: `100vh`}}>
        <div className='bg-white py-[20px] opacity-80'>
            <p className='text-xl'>Thank you for your purchase. A representative will contact you shortly, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure necessitatibus accusantium blanditiis ratione reprehenderit quod quaerat laboriosam quasi pariatur.</p>
            <Link to="/products">
                <button className='bg-blue-950 p-[10px] rounded-lg text-white'>Back to products</button>
            </Link>
        </div>
    </div>
  )
}

export default ThankYou