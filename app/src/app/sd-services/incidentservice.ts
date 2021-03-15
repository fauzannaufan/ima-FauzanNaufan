/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class incidentservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_incidentservice

  async getIncList(...others) {
    try {
      var bh = {
        input: {},
        local: {
          incidentList: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_3TSiiQkbpOR0cOj7(bh);
      //appendnew_next_getIncList
      return (
        // formatting output variables
        {
          input: {},
          local: {
            incidentList: bh.local.incidentList,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NnL0lGy6wXd7a1AQ');
    }
  }

  async addIncident(
    subject = '',
    description = '',
    priority = 0,
    date: any = undefined,
    ...others
  ) {
    try {
      var bh = {
        input: {
          subject: subject,
          description: description,
          priority: priority,
          date: date,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_IMTVy3sdirrRe4Ug(bh);
      //appendnew_next_addIncident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6On7SYaCEf14uaOq');
    }
  }

  async editincident(
    subject = '',
    description = '',
    priority = 0,
    date: any = undefined,
    id = 0,
    ...others
  ) {
    try {
      var bh = {
        input: {
          subject: subject,
          description: description,
          priority: priority,
          date: date,
          id: id,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_XZ9reN0eTNzRnKwu(bh);
      //appendnew_next_editincident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VY0T5foQKB9w0eYR');
    }
  }

  async deleteincident(id = 0, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_GHjY5MRkx8T22G6T(bh);
      //appendnew_next_deleteincident
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Km84zmHxHNtCChxE');
    }
  }

  //appendnew_flow_incidentservice_start

  async sd_3TSiiQkbpOR0cOj7(bh) {
    try {
      bh.local.apiUrl = `${bh.system.environment.properties.ssdURL}incidentlist`;
      bh = await this.sd_nkc1E1VFbAWkt7ht(bh);
      //appendnew_next_sd_3TSiiQkbpOR0cOj7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3TSiiQkbpOR0cOj7');
    }
  }

  async sd_nkc1E1VFbAWkt7ht(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.incidentList = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_nkc1E1VFbAWkt7ht
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nkc1E1VFbAWkt7ht');
    }
  }

  async sd_IMTVy3sdirrRe4Ug(bh) {
    try {
      bh.local.apiUrl = `${bh.system.environment.properties.ssdURL}incident`;
      bh = await this.sd_rZ3dtQfQPMwB1bB5(bh);
      //appendnew_next_sd_IMTVy3sdirrRe4Ug
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IMTVy3sdirrRe4Ug');
    }
  }

  async sd_rZ3dtQfQPMwB1bB5(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_rZ3dtQfQPMwB1bB5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rZ3dtQfQPMwB1bB5');
    }
  }

  async sd_8vCXE3MLo442d0wl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.error);
      //appendnew_next_sd_8vCXE3MLo442d0wl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8vCXE3MLo442d0wl');
    }
  }

  async sd_XZ9reN0eTNzRnKwu(bh) {
    try {
      bh.local.apiUrl = `${bh.system.environment.properties.ssdURL}updateincident`;
      bh = await this.sd_tjA113nzlGVuc73L(bh);
      //appendnew_next_sd_XZ9reN0eTNzRnKwu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XZ9reN0eTNzRnKwu');
    }
  }

  async sd_tjA113nzlGVuc73L(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_tjA113nzlGVuc73L
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tjA113nzlGVuc73L');
    }
  }

  async sd_GHjY5MRkx8T22G6T(bh) {
    try {
      bh.local.apiUrl = `${bh.system.environment.properties.ssdURL}deleteincident`;
      bh = await this.sd_9DxxhMnAntkZ07a8(bh);
      //appendnew_next_sd_GHjY5MRkx8T22G6T
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GHjY5MRkx8T22G6T');
    }
  }

  async sd_9DxxhMnAntkZ07a8(bh) {
    try {
      let requestOptions = {
        url: bh.local.apiUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_9DxxhMnAntkZ07a8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9DxxhMnAntkZ07a8');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_VcUJZbInPDLEtXAN(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_VcUJZbInPDLEtXAN(bh) {
    const catchConnectedNodes = ['sd_8vCXE3MLo442d0wl'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_8vCXE3MLo442d0wl(bh);
    //appendnew_next_sd_VcUJZbInPDLEtXAN
    return true;
  }
  //appendnew_flow_incidentservice_Catch
}
