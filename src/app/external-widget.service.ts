import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalWidgetService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) { return; }
    const script = document.createElement('script');
    script.src = 'assets/widget-bundle.js';
    document.body.appendChild(script);
    this.loaded = true;
  }
}
