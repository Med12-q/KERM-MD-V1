/*
_  ______   _____ _____ _____ _   _
| |/ / ___| |_   _| ____/___ | | | |
| ' / |  _    | | |  _|| |   | |_| |
| . \ |_| |   | | | |__| |___|  _  |
|_|\_\____|   |_| |_____\____|_| |_|

ANYWAY, YOU MUST GIVE CREDIT TO MY CODE WHEN COPY IT
CONTACT ME HERE +237659535227
YT: KermHackTools
Github: kermtech6
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "KERM-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUx2TTdBUzJqelYvdjlpZnN6cnNqMGszME4yK0JyNG8yZWxKbjlyT0xWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0E1a25reVdvRWsydVhabWdnemVjQnZ5V0RtQTYvRHdIeWxiaTJwMVVuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Qlk0QkFkZlp0REpKOTJid3V6WFZ5cncvN25Ecjl1ZDJuNTU2N1hCQWtNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNWYvSHJoWkZjWE9wYnIzMFBqMUZLUGlDZWszTmdPeGVIK1RxeGhZSEJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEMFVHNzdnNDd1MmhoNk9CUm5FbWI4c21rYU51ejhpbk0wRGZuRFpyMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdXalZMZDVJV2lHZ29HRWlUcko0aHh0cnFESVhtQzBldUMzOEJhSG9Uams9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Voa1VYU1ZxZ0lqdSs5dGNSZDNOQzAzZVA1VU1zVUNNdlBPZUlCRS9VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG01MlZSM1JGeWtVSEVNR3BVSm1wY1VYYnJCeXlUZlhEbGxIa0JKWkUzTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI2T3Z3aVdnU2p5M01GekptZTNRRmdqMWxnZW9HcXJ2K0tZeUhCYlFMRzErRnA2SEFLWHI1RW1wQVV6MU8vNkkvcEJJSjR5TUVrSVV5SkR5T3FacWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6ImgydzVBVlg0R2szYnVKNTh4RjV0WXZNalFvdXVBNnhWQ3BBdC9vdTlvaUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiS0VSTVhNRDYiLCJtZSI6eyJpZCI6IjIzNzY1OTUzNTIyNzo5N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI2MDU4NDc3NTkwNTQ4ODo5N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01Pc211SUZFSmJEbU5BR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhsaHF6dlRjSm03Zk45NUdLMUxCRFl5WDVXQ2dNVnBQKzdlR0s1VEpQaHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJpS3l0UEVmeWN2SUxMV0hka3gwMTM4ZkROVk5iNDJubDVNNUFkWnNZR3A3Mkd0RzBqNVBoUHM4ckxBRUpJcFlZMDlQeVhiNzBESG9CWVIzbXNINkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzeUdZVFRTUFhYM0cxWkhXV1QyalB2UUY2WEo2ZFFpZEdBS0ZCTE9teEl2dVdJWDYyTFJHNlRDa0RJbllnN2grMEhqSXl5RDdxL0xJdWJOMHgyc3BpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1OTUzNTIyNzo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNVlhczcwM0NadTN6ZmVSaXRTd1EyTWwrVmdvREZhVC91M2hpdVV5VDRjIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3ODc4NjcxNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHZFYifQ==",
    CAPTION: process.env.CAPTION || "POWERED BY KERM-MD💜",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/HfmVLW4W/Rx-Yg-PZMj-WC.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M KERM MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_CALL: process.env.ANTI_CALL || "false",
    BAD_NUMBER_BLOCKER: process.env.BAD_NUMBER_BLOCKER || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    AUTO_DOWNLOADING: process.env.AUTO_DOWNLOADING || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "237659535227",
    OWNER_NAME: process.env.OWNER_NAME || "ᶜᴿᴬᶻᵞ𝙺𝙴𝚁𝙼 𝚃𝙴𝙲𝙷✖‿✖•",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "✭𝙺𝙴𝚁𝙼 𝙼𝙳✭",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү kerm md`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};
