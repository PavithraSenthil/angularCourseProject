import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  onNavClicked(navClicked: HTMLAnchorElement) {
    this.featureSelected.emit(navClicked.textContent);
  }

}

