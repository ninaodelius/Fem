import { posts } from '../../data'



export default function handler(req, res) {
  const body = req.body

  res.status(200).json({ email: `${body.email}` , password:`${body.password}` })
  
}