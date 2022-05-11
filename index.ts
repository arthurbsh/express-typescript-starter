import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import status from './routes/status';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/status', status);

// your own error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Your error handler logic
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});