export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'CyBIIVUoc_Ac0sdMIDmt5',
    client_secret:
      '86CfpMl9Y8ioD-Il_FDjtwyRkoR_X30iNScF5LdsEKcR5rHHIU7mA1rtRP7d1P_e_wSskhLFQTHWIQzmQuhTLg',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
