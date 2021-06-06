const mineflayer = require('mineflayer')

setInterval(() => {
  var len = 8;
  var str = "はろおお";
  var strLen = str.length;
  var result = "";
   
  for (var i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * strLen)];
  }

const bot = mineflayer.createBot({
  host: 'AlphaRazorDX141.aternos.me',
  username: result
})

bot.on('login', () => {
  console.log('Login')
  for(var ii = 0;ii < 500;ii++) {
    bot.chat('こんにちは' + ii / ii + ii * ii)
  }
})
}, 5000);