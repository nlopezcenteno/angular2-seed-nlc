import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NGB_DIRECTIVES, NGB_PRECOMPILE } from '@ng-bootstrap/ng-bootstrap';

import { Config, NameListService, HeaderComponent } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  viewProviders: [NameListService, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NGB_DIRECTIVES, HeaderComponent],
  precompile: [ NGB_PRECOMPILE ]
})
export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
