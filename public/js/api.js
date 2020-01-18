var request = new XMLHttpRequest()
var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=INR&api_key=5e9b7aae32ad33a6f0d0819d516fee6eb033a450d55c26c95681851b8e6b327a";
request.open('GET', url, true)
request.onload = function() {
var data = JSON.parse(this.response)
// console.log('jbhj');
if (request.status >= 200 && request.status < 400) {
  	// console.log(data['ETH']['INR']);
  	document.querySelector("#priceE").innerHTML = data['ETH']['INR'];
} else{
	console.log('Error...');
}
}
request.send();