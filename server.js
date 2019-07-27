const express = require('express')
const app = express()
const slotController = require('./libs/SlotController')

const slot1 = slotController.registryPin(17,'out');
const slot2 = slotController.registryPin(27,'out');
const sensor1 = slotController.registryPin(22,'in');

slot1.set();
slot2.set();
sensor1.on('change',(value)=>{
    console.log('sensor:'+value);
})

app.put('/gpio/:id', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))