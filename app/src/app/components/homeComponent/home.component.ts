/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialog} from '@angular/material/dialog';
import {formincidentComponent} from '../formincidentComponent/formincident.component'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {

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

    constructor(public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        console.log(this);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(formincidentComponent, {
            width: '500px',
            data: {},
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            if (result) {
                this.data.push({
                    id: this.data.length+1,
                    subject: result.subject,
                    description: result.description,
                    priority: result.priority,
                    incidentdate: result.incidentdate
                })
            }
        });
    }
}
