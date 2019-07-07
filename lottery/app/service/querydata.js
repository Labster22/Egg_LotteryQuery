'use strict';

const Service = require('egg').Service;

class QuerydataService extends Service {
  async Query() {
    
    var api = this.config.api + '/types?key=89a1df505dc2ff477adbaf5a4bc855d0'

    var response=await this.ctx.curl(api);

    var data=JSON.parse(response.data);

    return data.result;

  }

  async SSQquery(){

    var api = this.config.api + '/history?lottery_id=ssq&page_size=&page=&key=89a1df505dc2ff477adbaf5a4bc855d0'

    var response = await this.ctx.curl(api);

    console.log('RESPONSE',response);

    console.log('RESPONSE.DATA',response.data);

    var data=JSON.parse(response.data);

    return data.result.lotteryResList;

  }


}

module.exports = QuerydataService;
