import React from 'react'
import Image from 'next/image'

const Clients = () => {
  return (
    <section className='w-full h-full py-24'>
        <div className='container p-2 mx-auto'>
            <div className='flex flex-col items-center gap-10'>
                <h4 className='uppercase text-[#c8ced8] text-[16px] font-semibold text-center'>Some of our trusted clients</h4>
                <div className='items-center justify-center gap-10 space-y-10 lg:space-y-0 lg:flex'>
                    <Image src={"/assets/stripe.png"} alt="stripe-logo" width={96} height={46}/>
                    <Image src={"/assets/Google.png"} alt="stripe-logo" width={109} height={37}/>
                    <Image src={"/assets/Deloitte.png"} alt="stripe-logo" width={147} height={60}/>
                    <Image src={"/assets/accenture.png"} alt="stripe-logo" width={110} height={31} className=''/>
                    <Image src={"/assets/IBM.png"} alt="stripe-logo" width={67} height={27}/>
                    <Image src={"/assets/Samsung.png"} alt="stripe-logo" width={122} height={23}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients