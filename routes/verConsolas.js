
import express from 'express'; 
import {consolas} from '../data.js';

const verConsolas = express.Router();

verConsolas.get('/api/consolas',(req, res) =>{
  res.json(consolas);
})

export default verConsolas; 