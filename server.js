const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const slotController = require('./libs/SlotController')

app.use(bodyParser.json()); 
app.use(express.static('public'))

let isDry = false;
let isLight = false;
let isSmart = false;
const slot1 = slotController.registryPin(17,'out');
const slot2 = slotController.registryPin(27,'out');
const sensor1 = slotController.registryPin(22,'in',(val)=>{
    console.log('sensor init value:' + sensor1.value);
    isDry = sensor1.value ? true : false;
});

slot1.set(0); //pump
slot2.set(0); //light


sensor1.on('change',(value)=>{
    //0: wet, 1:dry
    console.log('sensor:'+value);
    isDry = sensor1.value ? true : false;
    if(slot1.value && isSmart && !isDry){
        slot1.set(0);
    }
});

app.get('/api/water',(req, res)=>{
    res.send({'dry': isDry});
});

app.get('/api/light',(req, res)=>{
    isLight = slot2.value ? true : false;
    res.send({'light': isLight});
});

app.post('/api/light', (req, res)=>{
    isLight = req.body.light;
    if(isLight){
        slot2.set(1);
    }else{
        slot2.set(0);
    }
    res.send({light: isLight});
})

app.post('/api/water', (req, res) => {
    const time = Number.parseInt(req.body.seconds) * 1000;
    isSmart = req.body.smartMode;
    slot1.set();
    setTimeout(()=>{
        slot1.set(0);
        res.send({dry: isDry});
    },time);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))