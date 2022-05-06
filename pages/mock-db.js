import { collection, doc, getDoc} from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";

class Post {
    constructor (id, author, text ) {
        this.id = id;
        this.author = author;
        this.text = text;
    }
    toString() {
        return this.id + ', ' + this.author + ', ' + this.text;
    }
}

// Firestore data converter
const postConverter = {
    toFirestore: (post) => {
        return {
            id: post.id,
            author: post.author,
            text: post.text
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Post(data.id, data.author, data.post);
    }
};

function MockDB(){

const ref = doc(collection(db, "posts")).withConverter(postConverter);
if (docSnap.exists()) {
  // Convert to City object
  const post = docSnap.data();
  // Use a City instance method
  console.log(post.toString());
} else {
  console.log("No such document!");
}

}

export default MockDB;