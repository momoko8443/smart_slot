const express = require('express')
const app = express()
const slotController = require('./libs/SlotController')

let isDry = false;
const slot1 = slotController.registryPin(17,'out');
const slot2 = slotController.registryPin(27,'out');
const sensor1 = slotController.registryPin(22,'in',(val)=>{
    console.log('sensor init value:' + sensor1.value);
    isDry = sensor1.value ? true : false;
});

slot1.reset();
slot2.reset();


sensor1.on('change',(value)=>{
    //0: wet, 1:dry
    console.log('sensor:'+value);
    isDry = sensor1.value ? true : false;
})

app.put('/gpio/:id', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))