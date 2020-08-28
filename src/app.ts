
/**
 * Required External Modules
 */

import bodyParser from 'body-parser';
import cors from "cors";
import express, { NextFunction, Request, Response } from 'express';
import helmet from "helmet";
import { simpleRouter } from './router';

/**
 *  App Configuration
 */

const app = express();
 
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/uppercase', simpleRouter)


/**
 * App Router
 */
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome CS1951-V!")
})

 
/**
 * Server Activation
 */

app.listen(process.env.PORT || 8081, () => console.log("Server Running on :8081"))
