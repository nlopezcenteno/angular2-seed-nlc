import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'sd-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ROUTER_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES]
})

export class HeaderComponent {

  public isCollapsed: boolean;

  public constructor() {
    this.isCollapsed = true;
  }
}
