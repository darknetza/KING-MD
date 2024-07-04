const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("263713571083")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://test:test@cluster0.axdtbzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '263713571083';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'KING-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Naveed Dogar' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZoUDdKcUpjVW5zdmZ1Y1E2MzJNMURFV1FSQXFEcVMxV3h5TkljcklFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmZmNnoyeU9CWElOSCtOUHo2OVdFSnl5MWZKY29taVJoZlFOZzIwUUNGST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSHBZQjZKaGJ5b1NGc3pxTlFVcU9lVlk0Qm84NnkzVk9hb3hQSm4xbTA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzbGFIWDMwUlRXQjlacTFJdjdiUkJVb1U3RHpjR0xlYmdpUFkzeEIwbngwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLN3orT1d4TUQ2WDYyeWVPV0hTamZTenh5SFBaNXR3VlE2QXVNRW5vMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhzdlIvVW5CNGY0MzJYNUdOTEgxTFpVdUpXRnRUNU92bXJ3RmJ4UGp1bGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUI4OUdTZVN2Yyt6OU4rL3U3bGJsY1loZDMzRG4vZU1Qcy9Nb1hmYlpHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzN4ZXlJeXJna2pJNEpYVUU5NGNydkhNQWxRVXBVcVlwTlBEYUVuc2hDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5NTFNsMG1WWm9zU3ZWR3VvTXdOd3NycFBoREliamRsb1FqSnZ0b3BiRVhxUWRhUkorS0J5elhENGdDMVB0eUtkekFBT1lzbVZJc21xbXczS0YwRWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJoS0NWUG9TZmtJOHZlMDJiWnAvQzBwWk44bHo1KytYSEFPVWRQNjVycldZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMzU3MTA4M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyN0ZDOUJGMjEzRjk1OTAyNEVGOEZBNEM2N0U3Q0Q3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMDM3NDczfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3MTM1NzEwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjc0Mzg5NjMxQzA5OUZEMjQ0MUQzQkRCMjhEQkUzM0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDAzNzQ3M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiancxWjVDRkdReFM1cGxLdkF3X0lLZyIsInBob25lSWQiOiIzMjUwNzEyZC1mNWMwLTQyY2UtYWUwMi00MmZmODMzMDk4MmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWpmSk11WVBYM0FZVC81YW9Ydmc5Mkhvb1g4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBIOGtOUXEvVlNZSzREOG8rMmJjM0dud2NmST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRWTVWM1NQQiIsIm1lIjp7ImlkIjoiMjYzNzEzNTcxMDgzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaXRxcHdERU5MZ2xyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkV2NSSDF1RzNQMklGMEkzWm5rWi9pT2hHalRJNC9rY01EYlBKNTRnNERjPSIsImFjY291bnRTaWduYXR1cmUiOiJnTVZHVi82cDhoV0lXSmlnT1E5WFNYcWZqS3JtMm9BQ0FzUksxVEorV2I0N2ozbE9ybmY5ZjRKWlNBRWdHR1JYWW0rT2RPODc0OUhjWUxFVjlVRkRCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiREhGeDBZOW5ZUkMwRDFjMFFGY0YwVGlSZVYvQkNidVp4aUxoa1RaZjNQL1BqWkUyVjMwTVpLMVFPczZ3d1J6SmorOHJhd2tRcXJmalhDYlpQMjFWaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTM1NzEwODM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVm5FUjliaHR6OWlCZENOMlo1R2Y0am9SbzB5T1A1SERBMnp5ZWVJT0EzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDM3NDcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9JLyJ9 ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
