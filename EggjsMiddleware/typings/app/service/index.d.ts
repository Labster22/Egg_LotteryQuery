// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportQuerydata = require('../../../app/service/querydata');

declare module 'egg' {
  interface IService {
    querydata: ExportQuerydata;
  }
}
