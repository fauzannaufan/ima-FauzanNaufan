let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
//append_imports_end
export class database {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'database';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new database(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_database_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: database');

    //appendnew_flow_database_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: database');

    if (!this.swaggerDocument['paths']['/incident']) {
      this.swaggerDocument['paths']['/incident'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incident']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/incident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_quA5JRXpyHN3Nh5m(bh);
          //appendnew_next_sd_oDZWZ4NhTPX64Zc4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oDZWZ4NhTPX64Zc4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/incidentList']) {
      this.swaggerDocument['paths']['/incidentList'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/incidentList']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/incidentList`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_fWYNeNt5gELcotf8(bh);
          //appendnew_next_sd_tDDwUHJdzHaNtynP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tDDwUHJdzHaNtynP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateincident']) {
      this.swaggerDocument['paths']['/updateincident'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateincident']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/updateincident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_qKWfJVHNZLQGZBaS(bh);
          //appendnew_next_sd_kzcuIiCVipXPtHAV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kzcuIiCVipXPtHAV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteincident']) {
      this.swaggerDocument['paths']['/deleteincident'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteincident']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/deleteincident`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_47C1CMb2RphazTDy(bh);
          //appendnew_next_sd_SsQgnFpmyLEbOpa9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_SsQgnFpmyLEbOpa9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_database_HttpIn
  }
  //   service flows_database

  //appendnew_flow_database_start

  async sd_quA5JRXpyHN3Nh5m(bh) {
    try {
      let reqBody = bh.input.body;

      bh.local.parameters = [
        reqBody?.subject,
        reqBody?.description,
        reqBody?.priority,
        reqBody?.date,
      ];
      bh = await this.sd_Fi4y6cl0fA20EGtV(bh);
      //appendnew_next_sd_quA5JRXpyHN3Nh5m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_quA5JRXpyHN3Nh5m');
    }
  }

  async sd_Fi4y6cl0fA20EGtV(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_TtOHHkMFFcjyiYvv'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.parameters;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'INSERT INTO public.incidents (subject, description, priority, "date") VALUES($1, $2, $3, $4);',
        params
      );
      await this.sd_JMzDSLi22UYBR8Wh(bh);
      //appendnew_next_sd_Fi4y6cl0fA20EGtV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fi4y6cl0fA20EGtV');
    }
  }

  async sd_JMzDSLi22UYBR8Wh(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JMzDSLi22UYBR8Wh');
    }
  }

  async sd_3WVieZqRg3kIgqN8(bh) {
    try {
      let logobj: any = bh.error;
      if (logobj instanceof Error) {
        log.error(logobj);
      } else {
        log.error(safeStringify.default(logobj));
      }
      //appendnew_next_sd_3WVieZqRg3kIgqN8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3WVieZqRg3kIgqN8');
    }
  }

  async sd_fWYNeNt5gELcotf8(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_TtOHHkMFFcjyiYvv'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'SELECT * FROM public.incidents ORDER BY id;',
        params
      );
      await this.sd_EPeUzfOyfjFlwme3(bh);
      //appendnew_next_sd_fWYNeNt5gELcotf8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fWYNeNt5gELcotf8');
    }
  }

  async sd_EPeUzfOyfjFlwme3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EPeUzfOyfjFlwme3');
    }
  }

  async sd_qKWfJVHNZLQGZBaS(bh) {
    try {
      let reqBody = bh.input.body;

      bh.local.parameters = [
        reqBody?.subject,
        reqBody?.description,
        reqBody?.priority,
        reqBody?.date,
        reqBody?.id,
      ];
      bh = await this.sd_i2xnLoFGRYUl4aQA(bh);
      //appendnew_next_sd_qKWfJVHNZLQGZBaS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qKWfJVHNZLQGZBaS');
    }
  }

  async sd_i2xnLoFGRYUl4aQA(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_TtOHHkMFFcjyiYvv'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.parameters;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'UPDATE public.incidents SET subject=$1, description=$2, priority=$3, "date"=$4 WHERE id=$5;',
        params
      );
      await this.sd_IkRKdmA6AuFRGlWk(bh);
      //appendnew_next_sd_i2xnLoFGRYUl4aQA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i2xnLoFGRYUl4aQA');
    }
  }

  async sd_IkRKdmA6AuFRGlWk(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IkRKdmA6AuFRGlWk');
    }
  }

  async sd_47C1CMb2RphazTDy(bh) {
    try {
      let reqBody = bh.input.body;

      bh.local.parameters = [reqBody?.id];
      bh = await this.sd_N560nPWmDEpINHxE(bh);
      //appendnew_next_sd_47C1CMb2RphazTDy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_47C1CMb2RphazTDy');
    }
  }

  async sd_N560nPWmDEpINHxE(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_TtOHHkMFFcjyiYvv'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.parameters;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'DELETE FROM public.incidents WHERE id=$1;',
        params
      );
      await this.sd_Odbr3rAWthq8w9GP(bh);
      //appendnew_next_sd_N560nPWmDEpINHxE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N560nPWmDEpINHxE');
    }
  }

  async sd_Odbr3rAWthq8w9GP(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Odbr3rAWthq8w9GP');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_6G5oEIVelT3Wov17(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_6G5oEIVelT3Wov17(bh) {
    const catchConnectedNodes = ['sd_3WVieZqRg3kIgqN8'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_3WVieZqRg3kIgqN8(bh);
    //appendnew_next_sd_6G5oEIVelT3Wov17
    return true;
  }
  //appendnew_flow_database_Catch
}
