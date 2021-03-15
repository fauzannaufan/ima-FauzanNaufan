import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders } from './config/declarations';
import { appImportModules } from './config/import-modules';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules],
  providers: [...appProviders, DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
