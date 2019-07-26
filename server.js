const express = require('express')
const app = express()
const slotController = require('./libs/SlotController')

const slot1 = slotController.registryPin(17,'out');
const slot2 = slotController.registryPin(27,'out');

slot1.set();
slot2.set();

app.put('/gpio/:id', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))