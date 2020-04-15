import { Component } from '@angular/core';
import { ExternalWidgetService } from './external-widget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private externalService: ExternalWidgetService) { }

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  add(tileKind: string): void {
    const data = this.getData();
    const tile = document.createElement(tileKind);
    tile.setAttribute('class', 'col');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(tile);
  }

  addExternal(): void {
    this.externalService.load();
    this.add('external-custom-element');
  }
}
