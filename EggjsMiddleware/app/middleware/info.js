
module.exports = (options,app) => {

    return async function info(ctx,next){
        await next();
        setTimeout(() => {
            console.log(ctx.host); //打印主机IP和端口
            console.log(ctx.url);  //打印url
        }, 4000);
        
        
    }

}