import { Context } from 'koa';
import { db } from '../db/postgres';

export default class UserController {
    // private testService: TestService = new TestService();

    public async getUsers(ctx: Context): Promise<void> {
        try {
            console.log(ctx.state.user);
            const users = await db.from('users').select('*');
            ctx.body = users;
        } catch (e) {
            console.error(e);
        }
    }

    // Work in progress
    public async addUser(ctx: Context): Promise<void> {
        try {
            const user = ctx.request.body.data;

            await db('users').insert(user);

            ctx.body = {
                message: 'Success',
            };
        } catch (e) {
            console.error(e);
        }
    }

    public async getSingleUser(ctx: Context): Promise<void> {
        try {
            const id = ctx.params.id;
            const user = await db.from('users').select('*').where({ id: id });

            ctx.body = user;
            ctx.state.user = user;
            console.log(user);
        } catch (e) {
            console.error(e);
        }
    }
}
