import FeaturedProject from '@/components/FeaturedProject'
import Hero from '@/components/Hero'
import StatList from '@/components/StatList'
import Subscribe from '@/components/Subscribe'
import WorkList from '@/components/WorkList'

export default function Home() {
  return (
    <>
      <Hero />
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
    </>
  )
}
