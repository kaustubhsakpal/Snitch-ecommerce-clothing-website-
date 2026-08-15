import app from './app.js';
import 'dotenv/config.js';
import {dbconnection} from './config/db.connection.js';

const port = process.env.PORT || 3000;
dbconnection();
app.listen(port,()=>{
    
    if(process.env.NODE_ENV=="devlopment" ){
        console.log("its and devlopment port ");
    }
    console.log(`server started  on port ${port}`);  
})

