import { db } from '../../../firebase/firebaseConfig'
import {getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'GET') {
      const doc = await getDoc(doc(db, 'posts', id))
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await deleteDoc(doc(db, 'posts', id))
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
}