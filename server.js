const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const slotController = require('./libs/SlotController')

app.use(bodyParser.json()); 
app.use(express.static('public'))

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
});

app.get('/api/water',(req, res)=>{
    res.send({'dry': isDry});
});
app.post('/api/water', (req, res) => {
    const time = Number.parseInt(req.body.seconds) * 1000;
    slot1.set();
    slot2.set();
    setTimeout(()=>{
        slot1.reset();
        slot2.reset();
        res.sendStatus(200);
    },time)
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))