# NgDashboardShell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.


# Micro Front Ends with Angular Elements
1. Creating a new shell (treat it as normal angular main project) 
`ng new ng-dashboard-shell`

2. To dynamically load the [angular element](https://github.com/ccchen1991/ng-dashboard-widget) into the host, you just need some DOM manipulations to create a respective script tag as well as a tag for the component itself:  
    ```TSX
    // add script tag  
    const script = document.createElement('script');  
    script.src = 'assets/widget-bundle.bundle.js';  
    document.body.appendChild(script);  
    
    // add web component  
    const tile = document.createElement('external-custom-element');  
    tile.setAttribute('class', 'col');
    tile.setAttribute('a', '100');  
    tile.setAttribute('b', '50');  
    tile.setAttribute('c', '25');  
    const content = document.getElementById('content');  
    content.appendChild(tile);
    ```