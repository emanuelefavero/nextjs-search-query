import { useState } from 'react'

type Post = {
  id: number
  title: string
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<[] | Post[]>([])

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!query) return

    const response = await fetch(`/api/search?q=${query}`)
    const data = await response.json()
    setResults(data)
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      <ul>
        {results.map((post: Post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>

            {/* TIP: change this to a Link to go to post detail page */}
            {/* <a href={`/posts/${post.id}`}>{post.title}</a> */}
          </li>
        ))}
      </ul>
    </>
  )
}
