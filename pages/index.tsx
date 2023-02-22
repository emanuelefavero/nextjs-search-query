import Search from '@/components/Search'

export default function Home() {
  return (
    <>
      <p className='hint'>
        Try searching for {'"'}first{'"'}, {'"'}second{'"'} or {'"'}post{'"'}.
      </p>
      <Search />
    </>
  )
}
