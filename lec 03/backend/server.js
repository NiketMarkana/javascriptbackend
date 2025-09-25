import express from 'express'// new way
// ^ is module js

// const express = require('express') //old way

const app = express();

    const jokes=[
        {
            id : 1,
            title : 'A joke 1',
            content :  'This is a joke 1'
        },
        {
            id : 2,
            title : 'A joke 2',
            content :  'This is a joke 2'
        },
        {
            id : 3,
            title : 'A joke 3',
            content :  'This is a joke 3'
        },
        {
            id : 4,
            title : 'A joke 4',
            content :  'This is a joke 4'
        },
        {
            id : 5,
            title : 'A joke 5',
            content :  'This is a joke 5'
        },

    ]

app.get('/',(req, res)=>{
    res.send("server is ready");
}); 

app.get('/api/jokes', (req, res)=>{
    res.json(jokes)
})

const port = process.env.PORT || 3000 ; 

app.listen(port,(req,res)=>{
        console.log(`serve at http://localhost:${port}`);
    }
);