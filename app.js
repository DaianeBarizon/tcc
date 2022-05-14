const express = require('express')
const app = express()
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/file/async', async function (req, res) {
    try {
        const data = await fs.readFile('template/dummydata.txt', { encoding: 'utf8' }, () => {});
        res.status(200).send("OK")
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/file/sync', (req, res) => {
    try {
        const data = fs.readFileSync('template/dummydata.txt', { encoding: 'utf8' }, () => {});
        res.status(200).send("OK")
    } catch (err) {
        res.status(500).send(err)
    }
})
  

app.listen(3000)