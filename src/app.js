import express from "express";
import user from './routes/user/users.controler.js'
import {pool} from './common/models/mysql.js'


const app = express();

app.use(express.json());
app.get('/ping', async (req, res, next)=>{
  console.log('hola')
  //const result= await pool.query('SELECT 1 + 1 AS result')
  const result= await pool.getConnection()
  
res.json({result})
})

// Routes 
app.get('/', (req, res, next)=>
  res.send('hola humanitos')
);
app.use('/users', user);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});
  
export default app;