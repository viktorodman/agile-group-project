import { Context } from 'koa';
import Router, { IMiddleware } from 'koa-router';
import MessageController from '../controllers/message-controller';
import AuthMiddleware from '../middlewares/auth-middleware';

export default class MessageRouter {
    private _router: Router = new Router();
    private controller: MessageController = new MessageController();
    private middleware: AuthMiddleware = new AuthMiddleware();

    constructor() {
        this.initializeRoutes();
    }
    public get router(): IMiddleware<any, unknown> {
        return this._router.routes();
    }

    private initializeRoutes(): void {
        this._router.post('/',
            // (ctx: Context, next: Next) => this.middleware.requestHasValidToken(ctx, next),
            // (ctx: Context, next: Next) => this.middleware.requesterHasAdminRights(ctx, next),
            (ctx: Context) => this.controller.add(ctx)
        );
        this._router.get('/room/:id', 
            (ctx: Context) => this.controller.getRoomMessages(ctx)
        );
        this._router.get('/:id', 
            (ctx: Context) => this.controller.get(ctx)
        );
        this._router.get('/user/:id', 
            (ctx: Context) => this.controller.getAll(ctx)
        );
    }
}