# daily-wallpaper
In a fairly recent update to their homepage, [Unsplash](https://unsplash.com/) began to introduced a daily photo component,
however I couldn't find an api wrapper for it anywhere....

So this is a Node script that scrapes the homepage, gets the photo ID, downloads it and sets it as your desktop wallpaper.

Currently not very stable, but it works. I might make it a serverless function at one point.

## Using it
Not reccommended yet as it isn't 100% stable, but using it is pretty simple.
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed.
```
cd wherever/you/want
git clone https://github.com/Pixelrobin/daily-wallpaper.git
cd daily-wallpaper
npm install
```

Then, to run once, simply do `node index` at the directory where everything was installed.
This will perform the action once. In my use case I just set it up to run at startup for me.

Currently only tested on windows, but should technically work on other platforms.
