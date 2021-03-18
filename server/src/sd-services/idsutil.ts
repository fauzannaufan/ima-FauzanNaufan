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
//append_imports_end
export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_IWj0fv2jLfmeqkTh(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uyHfcXfyNL5QVzEX');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ZWiLuqdQkviTg6NI(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WhPUUov76xHGAAlS');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_DumoqCVELjGBSIrE(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GmqJ5Snj0CXs9ePL');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_IWj0fv2jLfmeqkTh(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_L0uUn2bNtlLQhBQO(bh);
      //appendnew_next_sd_IWj0fv2jLfmeqkTh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IWj0fv2jLfmeqkTh');
    }
  }

  async sd_L0uUn2bNtlLQhBQO(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_LCxVirlltxslMSIZ(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_vD2aT5wI7qyfuxkf(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L0uUn2bNtlLQhBQO');
    }
  }

  async sd_LCxVirlltxslMSIZ(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_eFVmtxCbdNg2iBN7(bh);
      //appendnew_next_sd_LCxVirlltxslMSIZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LCxVirlltxslMSIZ');
    }
  }

  async sd_eFVmtxCbdNg2iBN7(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_eFVmtxCbdNg2iBN7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eFVmtxCbdNg2iBN7');
    }
  }

  async sd_vD2aT5wI7qyfuxkf(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_vD2aT5wI7qyfuxkf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vD2aT5wI7qyfuxkf');
    }
  }

  async sd_ZWiLuqdQkviTg6NI(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_ZWiLuqdQkviTg6NI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZWiLuqdQkviTg6NI');
    }
  }

  async sd_DumoqCVELjGBSIrE(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_olPDnp8ZA2cF0nfk(bh);
      //appendnew_next_sd_DumoqCVELjGBSIrE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DumoqCVELjGBSIrE');
    }
  }

  async sd_olPDnp8ZA2cF0nfk(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7l6VIA5e2hQLwSm1(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H8CEWVavqgsRAQLP(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_olPDnp8ZA2cF0nfk');
    }
  }

  async sd_7l6VIA5e2hQLwSm1(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_7l6VIA5e2hQLwSm1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7l6VIA5e2hQLwSm1');
    }
  }

  async sd_H8CEWVavqgsRAQLP(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_JNlp2yy6ptNNGT28(bh);
      //appendnew_next_sd_H8CEWVavqgsRAQLP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H8CEWVavqgsRAQLP');
    }
  }

  async sd_JNlp2yy6ptNNGT28(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_HYincw3BZlkrIFIy(bh);
      //appendnew_next_sd_JNlp2yy6ptNNGT28
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JNlp2yy6ptNNGT28');
    }
  }

  async sd_HYincw3BZlkrIFIy(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6CiiseLtPQGeINzw(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zJCw3x7EjbC0orrx(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HYincw3BZlkrIFIy');
    }
  }

  async sd_6CiiseLtPQGeINzw(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_6CiiseLtPQGeINzw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6CiiseLtPQGeINzw');
    }
  }

  async sd_zJCw3x7EjbC0orrx(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_zJCw3x7EjbC0orrx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zJCw3x7EjbC0orrx');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_bb0JOf5K9lgf8cMQ(bh))
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
  async sd_bb0JOf5K9lgf8cMQ(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_zJCw3x7EjbC0orrx(bh);
      //appendnew_next_sd_bb0JOf5K9lgf8cMQ
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
