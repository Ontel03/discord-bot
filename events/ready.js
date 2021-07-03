module.exports.run = (client) => {
  console.log(`✔ Logged in as ${client.username}`)
  client.user.setActivity("q!setup | q!help"); 
}
