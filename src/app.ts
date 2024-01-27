import express from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app = express();

//parser
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

//api's
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('BIKESHOP Server!');
});

//Global Errors
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
