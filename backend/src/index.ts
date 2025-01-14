import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { todoRouter } from './routes/todo';
import { cors } from 'hono/cors';

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();

app.use('/*',cors());

app.route('/api/v1/user',userRouter);
app.route('/api/v1/todo',todoRouter);

export default app;
