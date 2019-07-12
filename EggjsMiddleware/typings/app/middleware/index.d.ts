// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDate = require('../../../app/middleware/date');
import ExportInfo = require('../../../app/middleware/info');

declare module 'egg' {
  interface IMiddleware {
    date: typeof ExportDate;
    info: typeof ExportInfo;
  }
}
