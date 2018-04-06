const request   = require('request');
const cheerio   = require('cheerio');
const path      = require('path');
const fs        = require('fs');
const download  = require('image-downloader');
const wallpaper = require('wallpaper');

const url = 'https://unsplash.com/';

request(url, (error, response, html) => {
	if (!error) {
		const $ = cheerio.load(html);

		const anchor = $('a:contains("Day")')[0];
		if (anchor && anchor.attribs && anchor.attribs.href) {
			const id = path.basename(anchor.attribs.href);
			const picUrl = 'https://source.unsplash.com/' + id + '/3200x1800/';

			console.log(picUrl);

			download.image({ url: picUrl, dest: './wallpaper.jpg' })
				.then(({ filename, image }) => {
					console.log('Image saved to ' + filename);

					wallpaper.set('./wallpaper.jpg').then(() => {
						console.log('Wallpaper set');
					});
				})
				.catch((err) => { throw err });
		}
	}
});