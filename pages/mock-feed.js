import useSWR from 'swr'
import Post from '../components/post'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function MockFeed() {
  const { data, error } = useSWR('/api/posts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      {data.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </div>
  )
}