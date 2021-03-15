/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject} from '@angular/core'
import {DatePipe} from '@angular/common';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder,Validators}  from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {incidentservice} from '../../sd-services/incidentservice'

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

    constructor(public dialogRef: MatDialogRef<formincidentComponent>,
        public fb: FormBuilder,
        public snackBar: MatSnackBar,
        public incs: incidentservice,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private datePipe: DatePipe
    ) {
        super();
    }

    ngOnInit() {
        console.log(this.data);

        this.incidentform = this.fb.group({
            subject: [this.data?.subject, Validators.pattern('^[a-zA-Z ]*$')],
            description: [this.data?.description, Validators.pattern('^[a-zA-Z0-9 ]*$')],
            priority: [this.data?.priority, [Validators.pattern('[0-9]'), Validators.min(1), Validators.max(5)]],
            incidentdate: [this.data?.date]
        });

        this.date = new Date();
    }

    closeDialog() {
        this.dialogRef.close();
    }

    async insertIncident() {
        let formdata = this.incidentform.value;
        let date = this.datePipe.transform(formdata?.incidentdate,"yyyy-MM-dd");
        await this.incs.addIncident(formdata?.subject, formdata?.description, Number(formdata?.priority), date);
    }

    async updateIncident() {
        let formdata = this.incidentform.value;
        let date = this.datePipe.transform(formdata?.incidentdate,"yyyy-MM-dd");
        await this.incs.editincident(formdata?.subject, formdata?.description, Number(formdata?.priority), date, this.data?.id);
    }

    onSubmit() {
        this.incidentform.markAllAsTouched();
        if (this.incidentform.valid) {
            if (this.data?.id) {
                this.updateIncident();
            } else {
                this.insertIncident();
            }
            
            this.snackBar.open('Incident submitted successfully', '', {
                duration: 2000,
            });
            this.dialogRef.close(this.incidentform.value);
        }
    }
}
