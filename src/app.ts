import express, {Express, Response, Request} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';
import authRouter from './routers/authRouter';
import GlobalErrorHandler from './common/globalError';
import userRouter from "./routers/userRouter"





const app : Express = express();



app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({extended: true}));
app.use(express.static("./public"))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));








app.use("/api/auth",  authRouter)
app.use("/api/user",  userRouter)




app.get('/', (req, res) => {
    res.send('Hello Wokkkkkkkrld!');
});

app.use((error: unknown, req: Request, res: Response, next: express.NextFunction) => {
    GlobalErrorHandler(error, req, res, next);
});



export default app;


