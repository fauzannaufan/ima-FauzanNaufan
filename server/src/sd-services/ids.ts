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
import * as sd_1CQLmZc2CuznRC9C from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_P269v2BskOFirPbP(bh);
          //appendnew_next_sd_jHi1VZMeStEKMf0R
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jHi1VZMeStEKMf0R');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_VZAVQGYtsXex3BKn(bh);
          //appendnew_next_sd_wEKCzaQ7ZZdLCRhd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wEKCzaQ7ZZdLCRhd');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
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
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_OHgOBnPuPlpFyyhS(bh);
          //appendnew_next_sd_3NLtRwlchnG7SupW
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3NLtRwlchnG7SupW');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
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
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_4V7YKgYkJ6j0zsQ1(bh);
          //appendnew_next_sd_3W4c0IYfyxVc4YoV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_3W4c0IYfyxVc4YoV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
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
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_ehHC9MlYJFmD9CE7(bh);
          //appendnew_next_sd_zsZq6BVu1Cf1FX6q
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zsZq6BVu1Cf1FX6q');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
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
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_9RWiHJeWewSdztFw(bh);
          //appendnew_next_sd_Zn843YymBxDnn8cj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Zn843YymBxDnn8cj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
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
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_TVsMUAsslXxIuf4D(bh);
          //appendnew_next_sd_OQZKrfFR96ucYAu5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OQZKrfFR96ucYAu5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_OHgOBnPuPlpFyyhS(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_0KJJszoid64gwCUJ(bh);
      //appendnew_next_sd_OHgOBnPuPlpFyyhS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OHgOBnPuPlpFyyhS');
    }
  }

  async sd_0KJJszoid64gwCUJ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Xxx5mopcKwuUx1U8(bh);
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
        bh = await this.sd_G59JssJFyKW5mQJk(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0KJJszoid64gwCUJ');
    }
  }

  async sd_Xxx5mopcKwuUx1U8(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_1f0KTGTtX2Ng0uzW(bh);
      //appendnew_next_sd_Xxx5mopcKwuUx1U8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Xxx5mopcKwuUx1U8');
    }
  }

  async sd_1f0KTGTtX2Ng0uzW(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_EiyVdkrysYyxcXsW(bh);
      //appendnew_next_sd_1f0KTGTtX2Ng0uzW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1f0KTGTtX2Ng0uzW');
    }
  }

  async sd_EiyVdkrysYyxcXsW(bh) {
    try {
      const sd_1CQLmZc2CuznRC9CInstance: sd_1CQLmZc2CuznRC9C.idsutil = sd_1CQLmZc2CuznRC9C.idsutil.getInstance();
      let outputVariables = await sd_1CQLmZc2CuznRC9CInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_qaWgSHpt1VYXg4rg(bh);
      //appendnew_next_sd_EiyVdkrysYyxcXsW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EiyVdkrysYyxcXsW');
    }
  }

  async sd_qaWgSHpt1VYXg4rg(bh) {
    try {
      const sd_1CQLmZc2CuznRC9CInstance: sd_1CQLmZc2CuznRC9C.idsutil = sd_1CQLmZc2CuznRC9C.idsutil.getInstance();
      let outputVariables = await sd_1CQLmZc2CuznRC9CInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_EGBDk92eGCvR5Lgb(bh);
      //appendnew_next_sd_qaWgSHpt1VYXg4rg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qaWgSHpt1VYXg4rg');
    }
  }

  async sd_EGBDk92eGCvR5Lgb(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_X3Yh00wzzUWhZ8qw(bh);
      //appendnew_next_sd_EGBDk92eGCvR5Lgb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EGBDk92eGCvR5Lgb');
    }
  }

  async sd_X3Yh00wzzUWhZ8qw(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X3Yh00wzzUWhZ8qw');
    }
  }

  async sd_G59JssJFyKW5mQJk(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_gyAd0j4sIMKjT78g(bh);
      //appendnew_next_sd_G59JssJFyKW5mQJk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G59JssJFyKW5mQJk');
    }
  }

  async sd_gyAd0j4sIMKjT78g(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gyAd0j4sIMKjT78g');
    }
  }

  async sd_P269v2BskOFirPbP(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_QW9PErwvTXxXJ0K7(bh);
      //appendnew_next_sd_P269v2BskOFirPbP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P269v2BskOFirPbP');
    }
  }

  async sd_QW9PErwvTXxXJ0K7(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QW9PErwvTXxXJ0K7');
    }
  }

  async sd_4V7YKgYkJ6j0zsQ1(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_U9j0Fx2TS6HKMjxx(bh);
      //appendnew_next_sd_4V7YKgYkJ6j0zsQ1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4V7YKgYkJ6j0zsQ1');
    }
  }

  async sd_U9j0Fx2TS6HKMjxx(bh) {
    try {
      const sd_1CQLmZc2CuznRC9CInstance: sd_1CQLmZc2CuznRC9C.idsutil = sd_1CQLmZc2CuznRC9C.idsutil.getInstance();
      let outputVariables = await sd_1CQLmZc2CuznRC9CInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_WOdhkrTZJ0vO0n6B(bh);
      //appendnew_next_sd_U9j0Fx2TS6HKMjxx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U9j0Fx2TS6HKMjxx');
    }
  }

  async sd_WOdhkrTZJ0vO0n6B(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_Z7PeMMD1j6SVhxjZ(bh);
      //appendnew_next_sd_WOdhkrTZJ0vO0n6B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WOdhkrTZJ0vO0n6B');
    }
  }

  async sd_Z7PeMMD1j6SVhxjZ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_Pzln6seUkdKtNA23(bh);
      //appendnew_next_sd_Z7PeMMD1j6SVhxjZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z7PeMMD1j6SVhxjZ');
    }
  }

  async sd_Pzln6seUkdKtNA23(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1tryeXWULTtJKkKR(bh);
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
        bh = await this.sd_LDHLPwCrEKsViuo5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Pzln6seUkdKtNA23');
    }
  }

  async sd_1tryeXWULTtJKkKR(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_Lefj44wWOg4lLerk(bh);
      //appendnew_next_sd_1tryeXWULTtJKkKR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1tryeXWULTtJKkKR');
    }
  }

  async sd_Lefj44wWOg4lLerk(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Lefj44wWOg4lLerk');
    }
  }

  async sd_LDHLPwCrEKsViuo5(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_sbRLC6fySAr1WkiC(bh);
      //appendnew_next_sd_LDHLPwCrEKsViuo5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LDHLPwCrEKsViuo5');
    }
  }

  async sd_sbRLC6fySAr1WkiC(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sbRLC6fySAr1WkiC');
    }
  }

  async sd_ehHC9MlYJFmD9CE7(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_LOdAFRQh8XVqukuo(bh);
      //appendnew_next_sd_ehHC9MlYJFmD9CE7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ehHC9MlYJFmD9CE7');
    }
  }

  async sd_LOdAFRQh8XVqukuo(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LOdAFRQh8XVqukuo');
    }
  }

  async sd_vWNbMypswDDuJqHm(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_vWNbMypswDDuJqHm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vWNbMypswDDuJqHm');
    }
  }

  async sd_9RWiHJeWewSdztFw(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_9Zt15ixa6nUkPZmq(bh);
      //appendnew_next_sd_9RWiHJeWewSdztFw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9RWiHJeWewSdztFw');
    }
  }

  async sd_9Zt15ixa6nUkPZmq(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_Tx65dkJkKYyeHZBT(bh);
      //appendnew_next_sd_9Zt15ixa6nUkPZmq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Zt15ixa6nUkPZmq');
    }
  }

  async sd_Tx65dkJkKYyeHZBT(bh) {
    try {
      const sd_1CQLmZc2CuznRC9CInstance: sd_1CQLmZc2CuznRC9C.idsutil = sd_1CQLmZc2CuznRC9C.idsutil.getInstance();
      let outputVariables = await sd_1CQLmZc2CuznRC9CInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_5UcVIgwHtNCiODTG(bh);
      //appendnew_next_sd_Tx65dkJkKYyeHZBT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Tx65dkJkKYyeHZBT');
    }
  }

  async sd_5UcVIgwHtNCiODTG(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_3M1uN9rYkBEugFoe(bh);
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
        bh = await this.sd_DqRxey8zppx0COFH(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5UcVIgwHtNCiODTG');
    }
  }

  async sd_3M1uN9rYkBEugFoe(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_3M1uN9rYkBEugFoe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3M1uN9rYkBEugFoe');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_5nap0MBmPG9xI9fh(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_5nap0MBmPG9xI9fh(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5nap0MBmPG9xI9fh');
    }
  }

  async sd_DqRxey8zppx0COFH(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_5nap0MBmPG9xI9fh(bh);
      //appendnew_next_sd_DqRxey8zppx0COFH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DqRxey8zppx0COFH');
    }
  }

  async sd_TVsMUAsslXxIuf4D(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_cnH0reGwxAT7sh9t(bh);
      //appendnew_next_sd_TVsMUAsslXxIuf4D
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TVsMUAsslXxIuf4D');
    }
  }

  async sd_cnH0reGwxAT7sh9t(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_sn59cKm1UHaApOYS(bh);
      //appendnew_next_sd_cnH0reGwxAT7sh9t
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cnH0reGwxAT7sh9t');
    }
  }

  async sd_sn59cKm1UHaApOYS(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ZS69g8jZRlt6zKeV(bh);
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
        bh = await this.sd_fDPFM2KLJ8RGcfyK(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sn59cKm1UHaApOYS');
    }
  }

  async sd_ZS69g8jZRlt6zKeV(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_DsFbXfcTA8NjrQ7c(bh);
      //appendnew_next_sd_ZS69g8jZRlt6zKeV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZS69g8jZRlt6zKeV');
    }
  }

  async sd_DsFbXfcTA8NjrQ7c(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DsFbXfcTA8NjrQ7c');
    }
  }

  async sd_fDPFM2KLJ8RGcfyK(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_zeSRf1vBSzyeI0Lv(bh);
      //appendnew_next_sd_fDPFM2KLJ8RGcfyK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fDPFM2KLJ8RGcfyK');
    }
  }

  async sd_zeSRf1vBSzyeI0Lv(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zeSRf1vBSzyeI0Lv');
    }
  }

  async sd_VZAVQGYtsXex3BKn(bh) {
    try {
      bh.local = {};
      bh = await this.sd_Fr9yW8PikKH0GeQY(bh);
      //appendnew_next_sd_VZAVQGYtsXex3BKn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VZAVQGYtsXex3BKn');
    }
  }

  async sd_Fr9yW8PikKH0GeQY(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_l3Z7dTYnQpD2SL2B(bh);
      //appendnew_next_sd_Fr9yW8PikKH0GeQY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fr9yW8PikKH0GeQY');
    }
  }

  async sd_l3Z7dTYnQpD2SL2B(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_IMcGSAIeUNPgqqa3(bh);
      //appendnew_next_sd_l3Z7dTYnQpD2SL2B
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_l3Z7dTYnQpD2SL2B');
    }
  }

  async sd_IMcGSAIeUNPgqqa3(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_esFZGZIsPu1OGLH2(bh);
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
        bh = await this.sd_IIf6D7yz5dejUPug(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IMcGSAIeUNPgqqa3');
    }
  }

  async sd_esFZGZIsPu1OGLH2(bh) {
    try {
      const sd_1CQLmZc2CuznRC9CInstance: sd_1CQLmZc2CuznRC9C.idsutil = sd_1CQLmZc2CuznRC9C.idsutil.getInstance();
      let outputVariables = await sd_1CQLmZc2CuznRC9CInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_zaEToXbva3qgJ3Ks(bh);
      //appendnew_next_sd_esFZGZIsPu1OGLH2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_esFZGZIsPu1OGLH2');
    }
  }

  async sd_zaEToXbva3qgJ3Ks(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XqV4qyk8ltfpfLs8(bh);
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
        bh = await this.sd_PPcEQZp9LD48nFeQ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zaEToXbva3qgJ3Ks');
    }
  }

  async sd_XqV4qyk8ltfpfLs8(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_kP1zDvqU6stdieXR(bh);
      //appendnew_next_sd_XqV4qyk8ltfpfLs8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XqV4qyk8ltfpfLs8');
    }
  }

  async sd_kP1zDvqU6stdieXR(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_P2GvgXd3ZwX0oB83(bh);
      //appendnew_next_sd_kP1zDvqU6stdieXR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kP1zDvqU6stdieXR');
    }
  }

  async sd_P2GvgXd3ZwX0oB83(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P2GvgXd3ZwX0oB83');
    }
  }

  async sd_PPcEQZp9LD48nFeQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_s8xlYedmRW56W0TQ(bh);
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
        bh = await this.sd_aWolVJVAIsPsfXTN(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PPcEQZp9LD48nFeQ');
    }
  }

  async sd_s8xlYedmRW56W0TQ(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_lK7bUbU5jpOqykoX(bh);
      //appendnew_next_sd_s8xlYedmRW56W0TQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s8xlYedmRW56W0TQ');
    }
  }

  async sd_lK7bUbU5jpOqykoX(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_aWolVJVAIsPsfXTN(bh);
      //appendnew_next_sd_lK7bUbU5jpOqykoX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lK7bUbU5jpOqykoX');
    }
  }

  async sd_aWolVJVAIsPsfXTN(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aWolVJVAIsPsfXTN');
    }
  }

  async sd_IIf6D7yz5dejUPug(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dCDBQmsYmddUBFF3(bh);
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
        bh = await this.sd_R9eCLdXxxFgtZQyT(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IIf6D7yz5dejUPug');
    }
  }

  async sd_dCDBQmsYmddUBFF3(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_P2GvgXd3ZwX0oB83(bh);
      //appendnew_next_sd_dCDBQmsYmddUBFF3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCDBQmsYmddUBFF3');
    }
  }

  async sd_R9eCLdXxxFgtZQyT(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_P2GvgXd3ZwX0oB83(bh);
      //appendnew_next_sd_R9eCLdXxxFgtZQyT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R9eCLdXxxFgtZQyT');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_0JM8rhW1hlRf8DLr(bh)) ||
      (await this.sd_61rAPNLxT3Nr1Twk(bh))
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
  async sd_0JM8rhW1hlRf8DLr(bh) {
    const nodes = [
      'sd_qaWgSHpt1VYXg4rg',
      'sd_3W4c0IYfyxVc4YoV',
      'sd_U9j0Fx2TS6HKMjxx',
      'sd_WOdhkrTZJ0vO0n6B',
      'sd_4V7YKgYkJ6j0zsQ1',
      'sd_Pzln6seUkdKtNA23',
      'sd_1tryeXWULTtJKkKR',
      'sd_LDHLPwCrEKsViuo5',
      'sd_Lefj44wWOg4lLerk',
      'sd_sbRLC6fySAr1WkiC',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_vWNbMypswDDuJqHm(bh);
      //appendnew_next_sd_0JM8rhW1hlRf8DLr
      return true;
    }
    return false;
  }
  async sd_61rAPNLxT3Nr1Twk(bh) {
    const nodes = ['sd_esFZGZIsPu1OGLH2'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_kP1zDvqU6stdieXR(bh);
      //appendnew_next_sd_61rAPNLxT3Nr1Twk
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
