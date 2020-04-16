import { Component } from '@angular/core';
import { ExternalWidgetService } from './external-widget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean;
  constructor(private externalService: ExternalWidgetService) { }

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  add(widgetName: string): void {
    const data = this.getData();
    const widget = document.createElement(widgetName);
    widget.setAttribute('class', 'widget');
    widget.setAttribute('a', '' + data[0]);
    widget.setAttribute('b', '' + data[1]);
    widget.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(widget);
  }

  addWidget(widgetName: string): void {
    this.externalService.load();
    this.add(widgetName);
  }
}
