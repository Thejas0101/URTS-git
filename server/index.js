const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cors());
app.use(express.json());

// const saltRounds = 10;


// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST","PUT","DELETE"],
//     credentials: true
// }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: true}));


// app.use(
//     session({
//         key: "userId",
//         secret: "somerandomstring",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             expires: 60,
//         },
//     })
// );


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'railway'
});

app.post('/create',(req,res)=>{
    // const id= req.body.id;

    const Train_name= req.body.Train_name;

    const Train_number= req.body.Train_number;

    const From_Train= req.body.From_Train;

    const To_Train= req.body.To_Train;

    const suggested_place= req.description;

    db.query('INSERT INTO railway ( Train_name, Train_number, From_Train, To_Train, description) VALUES (?,?,?,?,?)', [ Train_name, Train_number, From_Train, To_Train, description],
    (err,result)=>{
        if (err)
        {console.log(err)}
        else {
            console.log(result)
        }
    });
})



app.post('/usercreate',(req,res)=>{
    
    // const Id=req.body.id

    const name= req.body.name;

    const email= req.body.email;

    const mobilenum= req.body.mobilenum;

    const password= req.body.password;

    const confirmpassword= req.body.confirmpassword;

    db.query('INSERT INTO people ( name,  mobilenum,  email, password, confirmpassword) VALUES (?,?,?,?,?)', [ name, mobilenum, email,  password, confirmpassword],
    (err,result)=>{
        if (err)
        {console.log(err)}
        else {
            console.log("success");
            // alert("hi")
        }
    });
})

app.post('/message',(req,res)=>{
    
    const id= req.body.id;

    const email= req.body.email;

    const message= req.body.message;

    db.query('INSERT INTO contact (id, email, message) VALUES (?,?,?)', [id, email, message],
    (err,result)=>{
        if (err)
        {console.log(err)}
        else {
            console.log(result)
        }
    });
})




app.get('/get', (req,res)=>{
    
    db.query('SELECT * FROM train_list', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.get('/getpeople', (req,res)=>{
    
    db.query('SELECT * FROM people', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.get('/getcontact', (req,res)=>{
    
    db.query('SELECT * FROM contact', (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})



app.get('/GetTicketAmount', (req,res)=>{
    const trainnumber = req.body.trainnumber;
    console.log(trainnumber);
    db.query('SELECT * FROM booktik WHERE TrainNumber=?' ,[trainnumber] , (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.put('/update', (req,res)=>{

    const id= req.body.id;

    const Train_name= req.body.Train_name;

    const Train_number= req.body.Train_number;

    db.query('UPDATE train_list SET Train_name=?,Train_number=? WHERE id=?', [ Train_name,Train_number, id], (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    } )
})


app.delete('/delete/:id',(req,res)=>{

    const id= req.params.id;  

    db.query('DELETE FROM train_list WHERE  id=?',[id], (error, result)=>{
        if (error)
        {console.log(error)}
        else{
            res.send(result)
        }
    })
})


app.listen(3001, () =>{
    console.log('server Runnimg on port 3001')
})