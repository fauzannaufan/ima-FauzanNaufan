/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {incidentservice} from '../../sd-services/incidentservice';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-tableincident',
    templateUrl: './tableincident.template.html'
})

export class tableincidentComponent extends NBaseComponent implements OnInit {

    showTable = false;

    data = []

    constructor(public incs:incidentservice) {
        super();
    }

    ngOnInit() {
        this.getIncident();
    }

    async getIncident() {
        let result = await this.incs.getIncList();

        this.showTable = true;
        this.data = result.local.incidentList;
    }
}
