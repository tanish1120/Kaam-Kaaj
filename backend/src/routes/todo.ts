import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";
import { createTodoInput, updateTodoInput } from "@tanishrathore/todo-common";

export const todoRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

todoRouter.use('/*', async (c, next) => {
    const header = c.req.header("authorization") || "";
    try {
        const user = await verify(header,c.env.JWT_SECRET)
        if(user){
            c.set("userId",user.id)
            await next()
        }else{
        c.status(403)
        return c.json({
            error: "Unauthorized"
        })
        }
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Unauthorized"
        })
    }
    
  })

todoRouter.post('/',async (c) => {
    const body = await c.req.json();
    const { success } = createTodoInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            Message: "Input incorrect"
        })
    }
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const todo = await prisma.todo.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({
        id: todo.id
    })
})

todoRouter.put('/',async (c) => {
	const body = await c.req.json();
    const { success } = updateTodoInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            Message: "Input incorrect"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const todo = await prisma.todo.update({
        where:{
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content,
            completed: body.completed
        }
    })

    return c.json({
        id: todo.id
    })
})

todoRouter.get('/bulk',async (c) => {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

	try {
        const todos = await prisma.todo.findMany({
            where:{
                authorId: userId
            },
            select:{
                content:true,
                title:true,
                id:true,
                completed: true
            }
        })
        return c.json({
            todos
        })
    } catch (e) {
        c.status(411);
        return c.json({
            msg: "Error while fetching todo"
        })
    }
})

todoRouter.get('/:id',async (c) => {
	const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const todo = await prisma.todo.findFirst({
            where:{
                id: id
            },
            select:{
                content:true,
                title:true,
                id:true,
                completed: true
            }
        })
        return c.json({
            todo
        })
    } catch (e) {
        c.status(411);
        return c.json({
            msg: "Error while fetching todo"
        })
    }

    
})