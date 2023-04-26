import express from "express";
import user from './routes/user/users.controler.js'
import {pool} from './common/models/mysql.js'


const app = express();

// Routes 
app.get('/', (req, res, next)=>
  res.send('hola humanitos')
);

app.get('/ping', async (req,res,next) =>{
  try {
    const result =  await pool.query('SELECT 1 + 1 AS result')
    res.json(result)
  } catch (error) {
    console.log("🚀 ~ file: app.js:18 ~ app.get ~ error:", error)
    next()
    
  }
  
})
app.use('/users', user);

app.use((req, res, next) => {
    res.send('no se pudo')
  });
  
export default app;