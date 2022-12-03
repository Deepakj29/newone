const mongoose =require('mongoose');
require ("dotenv").config;

// module.export = () =>{
//     const connetionParams={
//         useNewurlParser:true,
//         useUnifiedToplogy:true,
//     };
//     try{
//         mongoose.connect(process.env.DB,connetionParams);
//         console.log("Database Connected successfully");
//     }catch(error){
//         console.log(error);
//         console.log("could not connected database!..")
//     }
// };



const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB,{
           
        });
        console.log(`Database Connected successfully: ${conn}`);
       
    }catch(error){
        console.log(error);
        console.log(`could not connected database!: ${error.message}`);
        process.exit();
    }
};
module.exports = connectDB();















// let conn;
// module.exports = {
//     connectToServer: function( callback ) {
//         mongoose.connect( process.env.DB, ( err, db ) => {
//             conn = db.db("login");
//             // console.log("db connect");
//             return callback( err );
//         } );
//     },
//     getDb: function() {
//         return conn;
//     }
// };
// console.log("db connect");