import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="./pages/hello">
      <button className='text-white rounded-full p-3 bg-slate-700'>
        press me
      </button>
      </Link>
    </div>

  )
}
