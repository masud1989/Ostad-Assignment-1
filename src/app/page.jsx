import Hero from '@/components/Hero'
import StatList from '@/components/StatList'
import WorkList from '@/components/WorkList'
import WorksList from '@/components/WorksList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <WorksList /> */}
      <WorkList />
      <StatList />
    </>
  )
}
