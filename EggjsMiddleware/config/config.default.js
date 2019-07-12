/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = appInfo => {
  
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562302135116_5215';

  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  };
  
  config.api = 'http://apis.juhe.cn/lottery';

  config.middleware = ['info','date'];
  
    
  config.date = {
    aaa:"aaa"
  };

 
  return config;
};

