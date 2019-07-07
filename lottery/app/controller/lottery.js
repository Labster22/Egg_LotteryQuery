'use strict';

const Controller = require('egg').Controller;

class LotteryController extends Controller {
  async query() {

    var list = await this.service.querydata.Query();

    await this.ctx.render('lottery',{

      list:list
    })
  }

  async ssq_query(){

    var list = await this.service.querydata.SSQquery();

    await this.ctx.render('lotteryquery',{

      list:list
    })
  }

}

module.exports = LotteryController;
