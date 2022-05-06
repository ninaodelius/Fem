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