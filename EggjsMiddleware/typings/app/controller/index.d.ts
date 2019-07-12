// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportLottery = require('../../../app/controller/lottery');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    lottery: ExportLottery;
  }
}
