const express = require("express")
const { send } = require("process")
const app = express()
const PORT = process.env.PORT || 3000


const villians = {allvillians: [{name: "Tri Pack", city: "Chicago", punchline: "abcdefg"},
{name:"JB", city:"Byn", punchline:"skägget brun efter varje mille"},
{name: "LilB", city:"Atlanta", punchline:"wa wa wa "}, 
{name: "Youngboy", city:"chicago", punchline:"OOOOoooooOOOo"}, 
{name: "Lil", city: "NY", punchline:"aääaääah"}]}

const firstName = ["Tony", "Pablo", "bb", "cc", "ee"]
const lastName = ["ja", " kdhe", "dwd", " dew", "dwd"]
const city = ["Chicago", "NY", "Bronx", "Biskåpp", "Kallebäck"]



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/villians", (req, res) => {
    res.send(villians)
})


app.get("/newentry", (req, res) => {
    newEntry()
    res.send("newentry")
})


function newEntry(){
    const randomFirstName = firstName[Math.floor(Math.random) * firstName.length]
    const randomLastName = lastName[Math.floor(Math.random) * lastName.length]
    const randonCitys = city[Math.floor(Math.random) * city.length]
    const fullName = randomFirstName + " " + randomLastName

    villians.allvillians.push({name: fullName, city: randonCitys })
    return villians 
}


app.listen(PORT, () => {
    console.log("Listning to port" + PORT)
    console.log(villians)
})