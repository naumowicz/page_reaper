const puppeteer = require('puppeteer');

const next = 'ul > li:nth-child(3) > button';




// tabindex="-1"


// const url = 'http://google.com';

(async () => {
	const browser = await puppeteer.launch({headless: false, defaultViewport:null, args: ['--start-maximized', '--start-fullscreen']});
	const page = await browser.newPage();
	// await page.setViewport({width: 1920, height: 1080});
	await page.goto(url, {waitUntil: 'networkidle2'});

	await page.focus('#plainuser');
	
	
	await page.focus('#password');
	

	await page.click('#submitbutton');

	await page.waitForSelector('#tbProfiles > li:nth-child(1) > a');
	await page.click('#tbProfiles > li:nth-child(1) > a');

	
	await page.waitForSelector('#ctl00_ctl00_MainContentArea_MainContentArea_continue1');
	await page.click('#ctl00_ctl00_MainContentArea_MainContentArea_continue1');

	await page.waitForSelector('#Searchbox1');
	await page.focus('#Searchbox1');
	await page.keyboard.type('selenium');

	await page.click('#SearchButton');

	await page.waitForSelector('#pdfft1');
	await page.click('#pdfft1');

	await page.waitFor(5000);

	var frameHandle = await page.frames()[1];
	// var frame = await frameHandle.$('')
	// await page.click('[title="Dopasuj stronę"]');
	await frameHandle.click('[title="Dopasuj stronę"]');

	let looping = true;
	let i = 0;

	// frameHandle = await frameHandle.frames()[1];
	
		       	
	while (looping) {

		await page.screenshot({path:`./selenium/${i++}.png`});
		await page.waitFor(1400);
		// const nextPageStatus = await frame.evaluate(`document.querySelector("${next}").getAttribute("tabindex")`);
		// if (nextPageStatus == -1) {
		// 	return;
		// } else {
			await frameHandle.click('[title="Idź do następnej strony"]');
		// }
	}
})();