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
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.log1(bh);
      //appendnew_next_getIncList
      return (
        // formatting output variables
        {
          input: {},
          local: {},
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
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.script1(bh);
      //appendnew_next_addIncident
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6On7SYaCEf14uaOq');
    }
  }

  //appendnew_flow_incidentservice_start

  async log1(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), 'Getting incident data');
      //appendnew_next_log1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NeoSpvYhNN1F72P4');
    }
  }

  async script1(bh) {
    try {
      console.log(bh.input);
      //appendnew_next_script1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gDLfFwi0Uuu2htUz');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_incidentservice_Catch
}
