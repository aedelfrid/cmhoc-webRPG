# Planning for cmhoc web rpg

## influences

### forces-style

sign up page?

maybe a recruitment site for public service

    leaning into this we could develop features like a cursus honorum
    start as an activist, volunteer and work your way up to mp and eventually PM

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

replace the soldier with a stock or AI image of an ethnically ambiguous woman in a pantsuit shaking hands with someone

replace govt of canada with canadian model house of commons

### ourcommons

![alt text](image-5.png)

muted and boring i think, but maybe more what cmhoc is about

maybe we can reconcile the two.

### current reddit

also boring and locks us into a posts-based ui

## features/pages 

### stage one

#### home page

first draft

![first draft](mockup1.png)

when logged in the Log in button will turn into a log out

buttons added to feed to go straight to grading a post

![logged in home page](logged-in-mockup1.png)

and a linktree thing to the cmhoc subs and discords

#### login page
    for admins/graders in stage one

#### grading portal
    grading page
    api pull from reddit
    publish to database or spreadsheet
    track what posts have been graded
    seperate between different subreddits/tags


### stage two

open login/sign up for non-admins

character page with simple bio

ability to submit to feed from the site
    reuse grading portal?

### stage three

and
lasy idea for now
an email newsletter
where leaders can send emails to their party
and general cmhoc emails for every1
cuz if i have that i am 283738% more likely to know whats going on and to debaye

persona, place where people can write info about their character

character attributes
    charisma
    law knowledge
    organization
    etc...

character quick actions
    press button to barnstorm
    press button to hold fundraiser
    etc...

get user activity from discord

gamification

I gpt'd the following

`const fetch = require('node-fetch');

// Function to fetch posts and comments for a subreddit
async function fetchSubredditData(subreddit) {
const currentUTC = new Date();
const oneDayAgo = new Date(currentUTC);
oneDayAgo.setDate(currentUTC.getDate() - 1);

const currentUnixTimestamp = Math.floor(currentUTC.getTime() / 1000);
const oneDayAgoUnixTimestamp = Math.floor(oneDayAgo.getTime() / 1000);
const response = await fetch (https://api.reddit.com/r/${subreddit}/new?limit=100);

const data = await response.json();

    const filteredData = data.data.children.filter(item => {
        const createdUtc = item.data.created_utc;
        return createdUtc > oneDayAgoUnixTimestamp && createdUtc < currentUnixTimestamp;
    });

    const formattedData = filteredData.map(item => {
        const { author, created_utc, title, body } = item.data;
        const parent = item.data.parent_id ? title : null;

        return {
            username: author || '[deleted]',
            datetime: new Date(created_utc * 1000).toISOString(),
            text: title || body,
            parent: parent
        };
    });

    return formattedData;
} catch (error) {
    console.error('Error fetching subreddit data:', error);
    return [];
}
}

// List of subreddits
const subreddits = ['cmhoc', 'cmhocpress', 'electionscmhoc'];

// Fetch data for each subreddit
const allData = {};
subreddits.forEach(async subreddit => {
allData[subreddit] = await fetchSubredditData(subreddit);
});

// Output data as JSON (You can use the data wherever needed)
console.log(JSON.stringify(allData, null, 2));
`
dm me for user agent, make sure to replace YOUR_USER_AGENT with the env var



