/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder,Validators}  from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-formincident',
    templateUrl: './formincident.template.html'
})

export class formincidentComponent extends NBaseComponent implements OnInit {

    incidentform;
    date;

    constructor(public dialogRef: MatDialogRef<formincidentComponent>, public fb: FormBuilder, public snackBar: MatSnackBar) {
        super();
    }

    ngOnInit() {
        this.incidentform = this.fb.group({
            subject: ['', Validators.pattern('^[a-zA-Z ]*$')],
            description: ['', Validators.pattern('^[a-zA-Z0-9 ]*$')],
            priority: ['', [Validators.pattern('[0-9]'), Validators.min(1), Validators.max(5)]],
            incidentdate: ['']
        });

        this.date = new Date();
    }

    closeDialog() {
        this.dialogRef.close();
    }

    onSubmit() {
        this.incidentform.markAllAsTouched();
        if (this.incidentform.valid) {
            let snackBarRef = this.snackBar.open('Incident submitted successfully', '', {
                duration: 2000,
            });
            this.dialogRef.close(this.incidentform.value);
        }
    }
}
