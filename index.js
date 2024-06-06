

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router=require('./Router/router')
require('./DB/connection')

const bmeServer=express()

//dataSharing
bmeServer.use(cors())

//parse json

bmeServer.use(express.json())
bmeServer.use(router)
bmeServer.use('/Uploads',express.static('./Uploads'))

const PORT=3000 || process.env.PORT

bmeServer.listen(PORT,()=>{
    console.log(`BME Server start listening at port:${PORT}`);
})

bmeServer.get('/',(req,res)=>{
    res.send("hello")
})

