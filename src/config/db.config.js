const mongoose = require('mongoose');
const { ATLAS_DB_URL , NODE_ENV } = require('./server');

async function connectToDB(){
    try{
        if(NODE_ENV == 'development'){
            await mongoose.connect(ATLAS_DB_URL)
            return 'successfull connection to DB'
        }    
    }catch(error){
        console.log('error connecting to the DB' , error);
        return 'error connecting to the DB'
    }
}
connectToDB()
module.exports = connectToDB;