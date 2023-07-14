import React from 'react'
import Link from 'next/link'

const Semester = () => {
    return (
        <div className='w-full  '>
            <h1 className='text-center text-4xl font-semibold text-accent-dark hover:text-jacarta-900 mt-8'>Which Semester?</h1>
            <div className='container  grid md:grid-cols-2 sm:grid-rows-1 p-2 gap-12 text-2xl font-bold text-center mt-8'>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        1st Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        2nd Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        3rd Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        4th Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        5th Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        6th Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        7th Semester
                    </div>
                </Link>
                <Link href="./">
                    <div className='p-20  bg-sem w-full h-full rounded-3lg bg-center bg-cover  shadow-2xl '>
                        8th Semester
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Semester
