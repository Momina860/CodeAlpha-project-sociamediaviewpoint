// Mock data for feeds
const mockFeeds = {
    facebook: ["Post 1 from Facebook", "Post 2 from Facebook"],
    twitter: ["Tweet 1 from Twitter", "Tweet 2 from Twitter"],
    instagram: ["Photo 1 from Instagram", "Photo 2 from Instagram"]
};

// Mock login function
document.getElementById('loginButton').addEventListener('click', () => {
    alert('Logged in successfully!');
});

// Mock connection functions
document.getElementById('connectFacebook').addEventListener('click', () => {
    document.getElementById('facebookContent').innerHTML = mockFeeds.facebook.join('<br>');
    alert('Facebook account connected!');
});

document.getElementById('connectTwitter').addEventListener('click', () => {
    document.getElementById('twitterContent').innerHTML = mockFeeds.twitter.join('<br>');
    alert('Twitter account connected!');
});

document.getElementById('connectInstagram').addEventListener('click', () => {
    document.getElementById('instagramContent').innerHTML = mockFeeds.instagram.join('<br>');
    alert('Instagram account connected!');
});
