/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {incidentservice} from '../../sd-services/incidentservice';
import {formincidentComponent} from '../formincidentComponent/formincident.component'
import {MatDialog} from '@angular/material/dialog';

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

    constructor(public incs:incidentservice, public dialog:MatDialog) {
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

    async deleteInc(id) {
        this.showTable = false;
        await this.incs.deleteincident(id);

        this.getIncident();
    }

    deleteIncident(el) {
        if(confirm("Are you sure?")) {
            this.deleteInc(el.id);
        }
    }

    updateIncident(el) {
        let dialogRef = this.dialog.open(formincidentComponent, {
            width: '500px',
            data: el,
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            this.showTable = false;
            this.getIncident();
        });
    }
}
