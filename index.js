var random = function(digit) {
  var patterns = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var val = '';

  if (typeof digit === 'undefined') digit = 8;

  for (var i = 0; i < digit; i++) {
      val += patterns[Math.floor(Math.random() * patterns.length)] + '';
  }

  return val;
};

const mineflayer = require('mineflayer')

setInterval(() => {
  const bot = mineflayer.createBot({
    host: 'AlphaRazorDX141.aternos.me',
    username: 'JP_' + random(8)
  })
  bot.on('login', () => {
    console.log('Login')
    for (var i = 0; i < 10; i++) {
      bot.chat('We will send a message from Osaka prefecture to the Aternos server. Trolls are interesting. Please do your best with a brain that has only a monkey and take measures w' + i * i / i )
    }
    bot.quit()
  })
}, 5000);