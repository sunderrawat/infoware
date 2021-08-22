const app = require('./app')
require("./db/mongoose")

//create server and listen
app.listen('3000', ()=>{
    console.log('app is started on port 3000')
})