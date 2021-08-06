const mongoose = require('mongoose');
const express = require("express");
const server = express();
const next = require('next');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const result = require('dotenv').config({ path: path.resolve(__dirname, '../', '.env'), silent: true});


const PORT = process.env.PORT || 4000;
const dev = process.env.NODE_ENV !== 'production';

const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admin');
const productRoute = require('./routes/product');
const resetPasswordRoute = require('./routes/reset-password');


const app = next({ dev });

const handle = app.getRequestHandler();

server.use(cookieParser);
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}));



// app.prepare().then(async () => {
//     try{

        server.use("/api/auth", authRoute);

        server.use("/api/admin", adminRoute);

        server.use("/api/product", productRoute);

        server.use("/api/reset-password", resetPasswordRoute);



        // server.all("*", (req, res) => handle(req, res));
const start = async () => {
        await mongoose.connect('mongodb://localhost:27017/shop-project', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });

        server.listen(PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${PORT}`);
        });
    }
    start();
//     }catch(e){
//         console.log(e)
//     }
// });