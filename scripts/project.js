const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5e2610548fmsh8c03efb85d7a377p1b9c99jsn2fa17554a928',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
async function getResponse(url,options){
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};

getResponse(url,options);
