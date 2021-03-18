import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-servicepageComponent
import { servicepageComponent } from '../components/servicepageComponent/servicepage.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/headerComponent/header.component';
//CORE_REFERENCE_IMPORT-tableincidentComponent
import { tableincidentComponent } from '../components/tableincidentComponent/tableincident.component';
//CORE_REFERENCE_IMPORT-formincidentComponent
import { formincidentComponent } from '../components/formincidentComponent/formincident.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-servicepageComponent
servicepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-tableincidentComponent
tableincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-formincidentComponent
formincidentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'incidentlist', component: tableincidentComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'service', component: servicepageComponent, canActivate: [NeutrinosAuthGuardService]},{path: '', redirectTo: 'home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
