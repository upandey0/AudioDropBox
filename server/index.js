import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import models from './models/index.js';
import router from './routes/routes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ limit: '16kb' }));

models.sequelize.sync()
  .then(() => {
    console.log('Database synchronized');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api', router);
