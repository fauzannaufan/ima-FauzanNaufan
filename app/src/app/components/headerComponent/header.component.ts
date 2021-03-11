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
    selector: 'bh-header',
    templateUrl: './header.template.html'
})

export class headerComponent extends NBaseComponent implements OnInit {

    showAddButton = false;

    constructor(public dialog: MatDialog) {
        super();
    }

    ngOnInit() {
        console.log(window.location);
        if (window.location.pathname === "/home") {
            this.showAddButton = true;
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(formincidentComponent, {
            width: '500px',
            data: {},
            disableClose: true
        });
    }
}
