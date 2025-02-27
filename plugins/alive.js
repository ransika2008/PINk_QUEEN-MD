const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    react:"🤖",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await robin.sendMessage(from,{sticker: { url : 'https://github.com/ransika2008/Img-2/raw/refs/heads/main/File%20from%20%F0%9D%93%A8.%F0%9D%93%9C%20%F0%9D%93%92%F0%9D%93%97%F0%9D%93%9C%F0%9D%93%98%F0%9D%93%9D%F0%9D%93%93%F0%9D%93%A4'},package: 'S_I_H_I_L_E_L'},{ quoted: mek })   
await robin.sendPresenceUpdate('recording', from);
await robin.sendMessage(from, { audio: { url: 'https://github.com/ransika2008/Img-2/raw/refs/heads/main/Adio/Top%205%20Trending%20Songs%202025%20%23shorts%20%23trending%20%23song%20%23viralvideo.mp3' }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });

const config = await readEnv();
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
