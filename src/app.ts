import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import routes from './routes';
import config from './config';

export const app = new Koa();

app.use(bodyParser({
    multipart: true
}));

// 引入路由分发
app.use(routes.routes());

// 启动程序，监听端口
if (!module.parent) {
    app.listen(config.port, () => debug(`listening on port ${config.port}`));
}
