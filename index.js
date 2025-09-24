require('dotenv').config()
const express = require('express')
const app = express()
//const port = 4000
const githubData={
  "login": "NiketMarkana",
  "id": 159057847,
  "node_id": "U_kgDOCXsHtw",
  "avatar_url": "https://avatars.githubusercontent.com/u/159057847?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/NiketMarkana",
  "html_url": "https://github.com/NiketMarkana",
  "followers_url": "https://api.github.com/users/NiketMarkana/followers",
  "following_url": "https://api.github.com/users/NiketMarkana/following{/other_user}",
  "gists_url": "https://api.github.com/users/NiketMarkana/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/NiketMarkana/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/NiketMarkana/subscriptions",
  "organizations_url": "https://api.github.com/users/NiketMarkana/orgs",
  "repos_url": "https://api.github.com/users/NiketMarkana/repos",
  "events_url": "https://api.github.com/users/NiketMarkana/events{/privacy}",
  "received_events_url": "https://api.github.com/users/NiketMarkana/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Niket Markana ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-05T17:30:18Z",
  "updated_at": "2025-09-20T11:29:58Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello World on twitter!')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/login',(req,res)=>{
    res.send("<h1>please login first</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
