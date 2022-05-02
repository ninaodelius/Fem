import useSWR from 'swr'
import Posts from '../components/Posts'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function MockFeed() {
  const { data, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Posts key={i} post={p} />
      ))}
    </ul>
  )
}