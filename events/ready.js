const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
        "💪Tam Gaz Devam💪",
        " BOT = YENIDEN AKTIF",
        "💪 7/24 Aktif!",  
        "💡 r!aşkölçer = AŞK",
        "👨  Kullanıcı!",
        "🌍  Sunucuda Hizmet!",
        "r!yardım 🔥 + r!tavsiye 🔥 +  r!ailemiz"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/emirhansaracyt");
        }, 2 * 2500);
}
