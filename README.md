# daily-wallpaper
Node script that scrapes the [Unsplash.com](https://unsplash.com/) photo of the day from their homepage and sets it as the desktop background. The official API doesn't seem to have a way of getting that photo.

This was meant for personal use, and can break at any time since it depends on the Unsplash DOM.

## Using it
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed.
```
cd wherever/you/want
git clone https://github.com/Pixelrobin/daily-wallpaper.git
cd daily-wallpaper
npm install
```

Then, to run, simply do `node index` at the directory where everything was installed.
This will perform the action once. In my use case I just set it up to run at startup for me.

Currently only tested on windows, but should technically work on other platforms.

## Future plans
This was just a quick and dirty script for my needs, but maybe I'll take it further. Here are some ideas:
* Make it into a serverless function?
* Host it on an rss feed?
* Make a twitter bot?
* Make a desktop app?
* Add more options then use the actual [Unsplash Source](https://source.unsplash.com/) API?
* Make it an actual node module?
* Make it into a CLI?

## Contributing
Feel free to open up issues and make PRs if this is something you're interested in.

## Disclaimer
This is not offically associated with Unsplash in any way. Things can and probably will break eventually.