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

    data = [
        {
            id: 1,
            subject: "Incident One",
            description: "Small incident",
            priority: 1,
            incidentdate: "2021-03-01"
        },
        {
            id: 2,
            subject: "Incident Two",
            description: "Big incident",
            priority: 5,
            incidentdate: "2021-03-04"
        }
    ]

    constructor(public incs:incidentservice) {
        super();
    }

    ngOnInit() {
        this.getIncident();
    }

    async getIncident() {
        await this.incs.getIncList();
    }
}
