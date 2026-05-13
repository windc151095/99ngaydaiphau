import https from 'https';

https.get('https://storage.googleapis.com/mpx-node-content/1cc2b20fb5b66d7ad5f50ef7a8eb8d4e13ec9bcdaaad2c88d8b948df92ee4312.jpeg', (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', res.headers);
});
