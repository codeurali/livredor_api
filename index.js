const helpers = require('./helper/helpers');
const posts = require("./data/data.json");
const filename = "./data/data.json"



const express = require('express')
const app = express()
const port = process.env.PORT || 3003

app.use(express.json());


// Permet de formaliser la structure d'un post au niveau du backend.
class Post {
    constructor(id, comment, author) {
        this.id = id;
        this.comment = comment;
        this.author = author;
    }
}



const getdata = () => posts;

const list = () => getdata();

const insert = newPost => {
    const id = helpers.getNewId(posts)
    newPost = new Post(id, ...newPost)
    console.log(newPost)
    posts.push(newPost);
    helpers.writeJSONFile(filename, posts)
}


app.get('/', (req, res) => {
  res.send(list());
})

app.post('/add', (req, res) => {
  res.send(insert(req.body));
  console.log(req.query)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

