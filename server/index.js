const express = require("express");
const fetch = require('node-fetch');

let subreddit = "cmhoc";
let page = 1;

// server
// express
// database
// mongo?
// reddit api
// fetch

async function getRedditPosts(subreddit, page) {
    const limit = (page + 1) * 10;
    const count = limit - 10; 

    const response = await fetch(`https://api.reddit.com/r/${subreddit}/new?count=${count}?limit=${limit}`)
    const posts = await response.json()

    console.log(posts)
}

async function getDaily(params) {
    
}

try {
    getRedditPosts(subreddit, page)
    
} catch {
    console.log("fetch failed")
}

