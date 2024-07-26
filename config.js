const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴳᴴᴼˢᵀ-ⱽ1-ᴹᴰ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741140620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkh5bnFvQWFwUW00cHJPaVVPQkRkWFFmeVk1VDl0ZHJaZGJiK3pIaHcvNUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRMWnhEQ2ZZU1dHeTVKWUh4XzFUVEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk3MWFmYTYtNDFjZS00NjQ2LWFlYjEtMmM4M2RiOTdhZjUyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgODgsXG4gICAgICAyMDEsXG4gICAgICAyMjcsXG4gICAgICAyNDIsXG4gICAgICAyMDksXG4gICAgICA5OSxcbiAgICAgIDIxMyxcbiAgICAgIDkzLFxuICAgICAgMTA4LFxuICAgICAgMjA4LFxuICAgICAgNzcsXG4gICAgICAxNzIsXG4gICAgICAyMjUsXG4gICAgICA0MixcbiAgICAgIDEwNCxcbiAgICAgIDEzNixcbiAgICAgIDY4LFxuICAgICAgMzIsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIxMyxcbiAgICAgIDg4LFxuICAgICAgMTAsXG4gICAgICAxMjEsXG4gICAgICAxNTUsXG4gICAgICA3NixcbiAgICAgIDEwMSxcbiAgICAgIDE1NixcbiAgICAgIDEzNCxcbiAgICAgIDcyLFxuICAgICAgMTMxLFxuICAgICAgMTg1LFxuICAgICAgNCxcbiAgICAgIDQ3LFxuICAgICAgNTQsXG4gICAgICAxMDAsXG4gICAgICAyMzMsXG4gICAgICAyMTksXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUVBUDlHVlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI4MjU3MTA3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XtvCdl7pcXG5cXG5cXG5cXG5cXG5LXFxuXFxuXFxuXFxuXFxuQVxcblxcblxcblxcblxcblZcXG5cXG5cXG5cXG5cXG5JXFxuXFxuXFxuXFxuS0FWSVwiLFxuICAgIFwibGlkXCI6IFwiMTE5NTgwOTE1NzI0NTI0OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpTTl0SUNFTG1WanJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicW0yTmo5R0x6YUxDZ2VEM096T0xybHRtTEQ4VkM2eDBSMGwzcU1LZThrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmM3U4TFNPOGZJUjBsaTdiQ0VtU2Nqak5OYmp5OGdlTTV6V29iejJJV1hnRjhjd1YrRkxyRXVTQ2NIbHYvQ0pidzkvajNwS0NoUktoc1R4WDlYUkhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFNWg5Y1JHNUUxcWpudDVyWER3bkNiTGljMkkxNHFUcmJNZHYvajVtUTJzWjkxc0JjaElvYUczYzRVZm1rSndwYWxIYTUzRlVwOGdWTm9hNmxlMCtEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyODI1NzEwNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTkzOTE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDhQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQOFAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNYldCczAwOE9pMlVrU0hETzVRTnIvR3RYTG92eEVDWlhTY1NFY2QvaVhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMDc3MjI3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "GHOST",
  botname : process.env.BOT_NAME  || "GHOST-MD",
  ownername:process.env.OWNER_NAME|| "GHOST-MD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
