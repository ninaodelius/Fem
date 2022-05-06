import { useEffect, useState, React } from 'react';
import { useRouter } from 'next/router';
import { db, auth, provider } from '../firebase/firebaseConfig'
import {Container, Row, Col, Button, Input, Form} from 'reactstrap';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from 'firebase/firestore';

const LoggedIn = () => {

  const { authUser, loading, signOut } = auth;
  const [post, setPost] = useState('');
  const router = useRouter();
  const onSubmit =  (event) => {
    console.log(post)
   try {
     addDoc(collection(db, "post"), {
      post : post,
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
} catch(error)  {
      console.error("Error adding document: ", error);
  };
    event.preventDefault()
  };
  const [posts, postsloading, postserror] = useCollection(
    collection(db, "post"),
    {}
  );

  /*useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])*/


  return (
    <Container>
      // ...
      <Button onClick={signOut}>Sign out</Button>
      // ...
      <Col>
      <h1> Posts </h1>
      <div>
      {postserror && <strong>Error: {JSON.stringify(postserror)}</strong>}
        {postsloading && <span>Collection: Loading...</span>}      
      {posts && posts.docs.map((doc) => (
              <div>
                {JSON.stringify(doc.data())},{' '}
              </div>
            ))}
            </div>
            <Form  className="custom-form"
            onSubmit={onSubmit}>
            <Input value={post} onChange={(event) => setPost(event.target.value)} />
            <Button >Add post</Button>
            </Form>
      </Col>
    </Container>
  )
}

export default LoggedIn;