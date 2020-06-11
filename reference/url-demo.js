// const url = require('url');

const my_url = new URL('https://zbnmoura.com?test=123');

//serialized url
console.log(my_url.href);
console.log(my_url.toString());

//host (root domain)
console.log(my_url.host);

//host withou port
console.log(my_url.hostname);

//pathname
console.log(my_url.pathname);

//serialized query
console.log(my_url.search);

//params obj
console.log(my_url.searchParams);

//add param
my_url.searchParams.append('abd', 124);
console.log(my_url.searchParams);

//loop through params
my_url.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
