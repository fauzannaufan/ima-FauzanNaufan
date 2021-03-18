/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-servicepage',
    templateUrl: './servicepage.template.html'
})

export class servicepageComponent extends NBaseComponent implements OnInit {

    isAuthorized = false;

    constructor(public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {
        let teams = this.neutrinosOAuthClientService.userInfo.teams;

        if (teams.find(el => el.displayName === "ima-admins")) {
            // can see the page
            this.isAuthorized = true;
        } else {
            // not authorized
            alert('Not authorized');
            window.open('home','_self');
        }
    }
}
