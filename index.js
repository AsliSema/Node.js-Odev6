const Koa = require('koa');
const app = new Koa();
const koaRouter = require("koa-router");

const router = new koaRouter(); //router for the middleware

router.get("/index", (ctx)=>{
    ctx.body = 'INDEX SAYFASINA HOSGELDINIZ';
});

router.get("/about", (ctx)=>{
    ctx.body = 'HAKKIMIZDA SAYFASINA HOSGELDINIZ';
});

router.get("/contact", (ctx)=>{
    ctx.body = 'ILETISIM SAYFASINA HOSGELDINIZ';
});

app.use(router.routes());
const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port} da çalışmaya başladı...`)
});