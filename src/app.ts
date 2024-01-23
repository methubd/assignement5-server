import express from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app = express();

//parser
app.use(express.json());
app.use(cors());

//api's
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('NSHL Server!');
});

//Global Errors
app.use(globalErrorHandler);

export default app;
