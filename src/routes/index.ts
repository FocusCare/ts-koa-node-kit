import * as Router from 'koa-router';
import { Context } from 'koa';

const router = Router({
    prefix: '/nodeapi'
});

router.get('/user', (ctx) => {
    ctx.body = ctx.user;
});


export default router;
