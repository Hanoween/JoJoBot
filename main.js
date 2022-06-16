const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '!';

client.once('ready', () => {
    console.log('VeryScuffed is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    var refs = [
        "KONO POWA", 
        "So it's the same stand as Star Platinum", 
        "OK, Master! Let's kill da ho! BEEEEETCH", 
        "N I G E R U N D A Y O !", 
        "KONO DIA DA!",
        "arrivederci",
        "ZA WARUDO",
        "OMG",
        "SHIZAAAAAAAAAA",
        "*relorelorelo*",
        "yare yare",
        "YES I AM",
        "ORA ORA ORA",
        "Thunder Cross Split Attack!",
        "Your next line is",
        "AY AY AY AY",
        "*casual beat up*",
        "*torture dance*",
        "**Speedwagon**",
        "*Koichi being Koichi*",
        "Pizza Mozarella rela rela",
        "*Yes* yes **YeS** YES",
        "Oh? You're approaching me?",
        "o_O",
        "*Unexpected arrest*",
        "*Thickness unleashed*",
        "*Iggy*",
        "-HAYATO!",
        "||I got an erection||",
        "**Stardust Crusaders**",
        "Tsk Tsk",
        "Good!",
        "Nice!",
        "**Josuke pose**",
        "Joseph Joestar (?)",
        "**Giorno pose**",
        "EMERALD SPLASH!",
        "ROAD ROLLER DA!",
        "TURURURURURU",
        "*Okyasu running",
        "Très bien!"
        ];
    var dict = {
    0: "https://tenor.com/view/jojo-kono-power-kono-powa-jotaro-part4-gif-21152514", 
    1: "https://tenor.com/view/soitsthesametypeofstandasstarplatinum-star-platinum-stand-star-platinum-dio-vs-jotaro-gif-21003357",
    2: "https://tenor.com/view/jojo-koichi-ok-master-lets-kill-da-hoe-koichi-act3-jojo-renatojxd-gif-16057969",
    3: "https://tenor.com/view/jojo-anime-jojos-bizarre-adventure-joseph-joestar-battle-tendency-gif-17923881",
    4: "https://tenor.com/view/jojo-gif-7367273",
    5: "https://tenor.com/view/jojo-arrivederci-bruno-bucciarati-bruno-part5-gif-13710195",
    6: "https://tenor.com/view/za-warudo-jojo-bizarre-adventure-power-gif-14292027",
    7: "https://tenor.com/view/jojo-oh-my-god-shocked-gif-14878014",
    8: "https://tenor.com/view/caesar-anthonio-zeppeli-jo-jos-bizarre-mad-angry-pissed-gif-15097694",
    9 : "https://tenor.com/view/lick-jojo-nice-tongue-skill-gif-16184683",
    10: "https://tenor.com/view/anime-jotaro-jjba-jojo-yare-gif-12243323",
    11: "https://tenor.com/view/yes-i-am-yes-i-am-gif-4799231",
    12: "https://tenor.com/view/ora-beatdown-oraoraora-ora-gif-22314453",
    13: "https://tenor.com/view/jojo-thunder-cross-split-attack-phantom-blood-gif-14869868",
    14: "https://tenor.com/view/joseph-joestar-jojo-pointing-gif-13921955",
    15: "https://tenor.com/view/awaken-piller-men-jojo-ayayaya-gif-14863280",
    16: "https://tenor.com/view/jojos-bizarre-adventure-milton-jojo-kicking-fight-gif-16647809",
    17: "https://tenor.com/view/torture-dance-gif-14760311",
    18: "https://tenor.com/view/speedwagon-jojo-jobro-gif-14786325",
    19: "https://tenor.com/view/jojos-bizarre-adventure-jojos-bizarre-adventure-diu-jojo-koichi-koichi-hirose-jojo-renatojxd-gif-16057945",
    20: "https://tenor.com/view/gyro-pizza-mozarella-anime-talk-gif-17388109",
    21: "https://tenor.com/view/jojo-anime-yes-yes-yes-yeah-its-a-yes-gif-17161748",
    22: "https://tenor.com/view/jojo-gif-19904973",
    23: "https://tenor.com/view/jjba-jojos-bizarre-adventure-avdol-lewd-nsfw-gif-19505412",
    24: "https://tenor.com/view/jojo-gun-jojos-josuke-meme-gif-18019715",
    25: "https://tenor.com/view/mariah-jojos-bizarre-adventure-gif-13639070",
    26: "https://tenor.com/view/iggy-jojo-dog-gif-14794145",
    27: "https://tenor.com/view/part4-jojo-jojos-bizarre-adventure-kira-kira-yoshikage-gif-14453363",
    28: "https://tenor.com/view/kira-yoshikage-kira-i-got-an-erection-erection-kira-erection-gif-17443436",
    29: "https://tenor.com/view/jojos-bizarre-adventure-jojo-jjba-jotaro-kujo-joseph-joestar-gif-15646043",
    30: "https://tenor.com/view/tsk-tsk-tsk-avdol-gif-19180044",
    31: "https://tenor.com/view/jojo-good-metaphantom53-jjba-darby-gif-14091495",
    32: "https://tenor.com/view/joseph-joestar-nice-good-job-gif-7319727",
    33: "https://tenor.com/view/josuke-pose-jjba-jojo-josuke-pose-gif-7693551",
    34: "https://tenor.com/view/jojo-joseph-joestar-dressed-as-girl-gif-13825535",
    35: "https://tenor.com/view/giorno-giovanna-jojos-bizarre-adventure-anime-posing-pose-gif-17598360",
    36: "https://tenor.com/view/noriaki-kakyoin-emerauld-splash-hierophant-green-jojo-jojos-bizarre-adventures-gif-15805265",
    37: "https://tenor.com/view/dio-jjba-jojo-roadroller-mad-gif-7886930",
    38: "https://tenor.com/view/incoming-call-frog-jo-jos-bizarre-adventure-jjba-vinegar-doppio-gif-14649365",
    39: "https://tenor.com/view/jojo-okuyasu-run-nigeru-on-gif-18125631",
    40: "https://tenor.com/view/polnareff-jean-pierre-polnareff-jean-pierre-jean-pierre-eiffel-tres-bien-gif-21328239"
    };
    if(command === 'ping') {
        message.channel.send('pong!');
    }
    else if(command === 'jojo') {
        var number = Math.floor(Math.random() * refs.length);
        message.channel.send(refs[number]);
        message.channel.send(dict[number]);
        //message.channel.send(refs[1]);
        //message.channel.send(dict[1]);
    }
});

client.login('OTgwOTIzODQ1ODE5MTI1ODIw.GNdZAC.4DshGDqNQP-8OHoEiGCbzQVVQamre7C4Y3I2so');

