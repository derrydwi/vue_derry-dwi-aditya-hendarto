let bdays = ['10-17', '05-19', '20-19'];
console.log(bdays);
bdays = bdays.map((item) => item.replace('-', '/'));
console.log(bdays);
