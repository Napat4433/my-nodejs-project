const fs = require('fs');

// อ่านไฟล์และแสดงผล
fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});