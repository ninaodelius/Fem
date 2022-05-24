import { db } from '../../firebase/firebaseConfig'
import { collection, query, where , orderBy, getDocs } from "firebase/firestore";

export default async (req, res) => {
  try {
    const q = query(collection(db, "posts"), orderBy('createdAt', 'asc'))
    const querySnapshot = await getDocs(q)
    const postsData = querySnapshot.docs.map(post => ({
      id: post.id,
      ...post.data()
    }));
    res.status(200).json({ postsData });
  } catch (e) {
    res.status(400).end();
  }
}