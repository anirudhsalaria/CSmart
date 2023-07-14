import React from 'react'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='w-full py-8 hero-bg'>
            <div className='container  grid md:grid-cols-2 sm:grid-rows-1 '>
                <div className=' p-6 m-auto'>
                    <h1 className='text-6xl font-semibold'>One-stop destination for computer science students</h1>
                    <p className='text-jacarta-600'>The ultimate resource hub for computer science students seeking high-quality study materials</p>
                    <div className='grid md:grid-cols-2 sm:grid-rows-1  p-3'>
                        <div className=' m-auto'>
                            <Link href="./">
                                <button className='btn-grad rounded-full '>
                                    Explore
                                </button>
                            </Link>
                        </div>
                        <div className=' m-auto'>
                           <Link href="./">
                                <button className='btn-grad rounded-full'>
                                    Meet Team
                                </button>
                           </Link>
                        </div>
                    </div>
                </div>
                <div className=' p-6 '>
                    <img className='rounded-3lg rotate-3 ' src="https://th.bing.com/th/id/OIG.K.qpYTPnC8ohghmKLmV0?pid=ImgGn" alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero
