const os = require('os');
console.log("Nama User :", os.userInfo().username);
console.log("Platform  :", os.platform());
console.log("Total Memori :", os.totalmem());

const url = require('url');
let alamat = 'https://www.exampele.com/search?keyword=nodejs';
let parsed = url.parse(alamat, true);
console.log("kata kunci pencarian :", parsed.query.keyword);
