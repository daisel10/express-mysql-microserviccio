import express from "express";
import user from './routes/user/users.controler.js'


const app = express();

// Routes 
app.get('/', (req, res, next)=>
  res.send('hola humanitos')
);
app.use('/users', user);

app.use((req, res, next) => {
    res.send('hola humanitos d')
  });
  
export default app;