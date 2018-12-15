const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Hakkında Kısa Bilgı**\n\n\n  **`r!`yardım = yazarak komutları göre bilirsiniz** \n  **`r!`davet = yazarak sunucunuza davet edebılırsınız** \n  **`r!`ailemiz = Yazarak Botun Hangı Sunucuda Bulundugunu Ogrene bılırsınız** \n **`r!`tavsiye = Bota Tavsıye Edersınız**',
              '**Kullanıcı Ve Eğlence**\n\n\n  **`r!`8ball = Sorularınızı Yanıtlar** \n **`r!`aşkölçer = Aşkınızı Ölçer.** \n **`r!`çekiç = Çekiç Atarsınız.** \n  **`r!`çayiç = Çay İçersiniz **\n **`r!`döviz = Dövizlere Bakarsınız** \n **`r!`wwegif = Rast Gele Gif Gonderır** \n **`r!`çekiliş = Sunucunuzda Çekiliş Yaparsınız** \n **`r!`mcödül = Ödül Kazanarsınız ** \n **`r!`dcnitro = Avatarınıza Nıtro Ekler** \n **`r!`stresçarkı = Stres Atarsınız ** \n **`r!`invert = Avatarınızın Rengini Ters Renk Yapar** \n **`r!`wasted = Avatarınıza Wasted Effekti Yapar** \n **`r!`top10 = Botun 10 Sunucuda Ne Yaptıgını Gosterır** \n **`r!`yaz = Bota Bir Sey Yazarsınız** \n **`r!`sor = Bota Bır Seyler Sorarsınız** \n **`r!`kullanıcıbilgim = Kendınız Hakkında Ogrene Bılırısınız** \n **`r!`emojiyazı = Emojı Seklınde Yazarsınız**',
              '**Yetkili Komutlar**\n\n\n **mod-log Kanalı Olmadan Çalısmaz** \n\n**`r!`uyar = Istedıgınız Kısıyı Uyarırsınız** \n **`r!`sustur = Istedıgınız Kısıyı Susturursunuz** \n **`r!`ban = Istedıgınız Kısıyı Ban Yaparsınız** \n **`r!`unban = Istedıgınız Kısının Banını Kaldırrısınız** \n **`r!`mute = Istedıgınız Kısını Surelı Susturursunuz** \n **`r!`temizle = Istedıgınız Kadar Mesal Sılersınız** \n **`r!`kick = Sunucudan Kıckler** \n **`r!`kilit = Bulunduğunuz Kanalı Kilitler** \n **`r!`çekiliş = Çekiliş Yaparsınız** \n **`r!`yavaşmod = Bulundugunuz Kanalda Yavasmod Acılır** \n **`r!`rol-ver = Istedıgınız Kısıye Rol Verırsınız** \n **`r!`sunucubilgi = Sunucu Hakkında Ogrene Bılırsınız** \n **`r!`mesajat = Bırıne Mesaj Atarsınız**',
              '**Bot Bilgi**\n\n\n **`r!`davet = Bot İle İlgili Bağlantıları Görürsünüz.** \n **`r!`ping = Botun Pingini Gösterir.** \n **`r!`istatistik = Botun İstatistiklerini Gösterir.**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};