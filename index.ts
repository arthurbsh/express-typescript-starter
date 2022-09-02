import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import status from './routes/status';
import users from './routes/users';

dotenv.config();

const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 8080; // Port that the app runs





app.use('/status', status);

app.use('/users', users);




// error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Your error handler logic
});

// This starts the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});