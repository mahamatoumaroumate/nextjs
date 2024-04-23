import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl pb-8'>Next.Js Tutorial</h1>
      <Link href='/client' className='btn btn-accent'>
        Get Started
      </Link>
    </div>
  )
}
