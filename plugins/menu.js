const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    react:"📂",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
| *DOWNLOAD COMMANDS* |
    ▫️.song <text>
    ▫️.video <text>
    ▫️.fb <link>
| *GROUP COMMANDS* |
${menu.group}
| *OWNER COMMANDS* |
    ▫️.restart
    ▫️.update
| *CONVERT COMMANDS* |
    ▫️.sticker <reply img>
    ▫️.img <reply sticker>
    ▫️.tr <lang><text>
    ▫️.tts <text>
| *SEARCH COMMANDS* |
${menu.search}


~🥶𝐌𝐚𝐝𝐞 𝐛𝐲 PINk_QUEEN_MD🥶~

> PINk_QUEEN_MD MENU MSG
`;
await robin.sendPresenceUpdate('recording', from);
await robin.sendMessage(from, { audio: { url: 'https://github.com/ransika2008/Img-2/raw/refs/heads/main/Adio/Top%205%20Trending%20Songs%202025%20%23shorts%20%23trending%20%23song%20%23viralvideo.mp3' }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
await robin.sendMessage(from,{sticker: { url : 'https://github.com/ransika2008/Img-2/raw/refs/heads/main/File%20from%20%F0%9D%93%A8.%F0%9D%93%9C%20%F0%9D%93%92%F0%9D%93%97%F0%9D%93%9C%F0%9D%93%98%F0%9D%93%9D%F0%9D%93%93%F0%9D%93%A4' },package: 'S_I_H_I_L_E_L'},{ quoted: mek })   


      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/ransika2008/Img-2/refs/heads/main/Bright%2C%20vibrant%20colors%20and%20intense%20dramatic%20lighting%20highlight%20a%203D%20text%20design%20'PINK%20QUEEN%20MD'%20and%20'MENU'%20in%20elegant%2C%20decorative%20gold%20fonts%20with%20reflections.%20A%20rose%20pink%20gradient%20background%20features%20golden%20baroque%20flourishes%20and%20a%20crown.%20High%20contras.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
