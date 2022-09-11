import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      route: '/charts/bar',
      name: 'Bars',
    },
    {
      route: '/charts/double-bar',
      name: 'Double Bar',
    },
    {
      route: '/charts/donut',
      name: 'Donut',
    },
    {
      route: '/charts/donut-http',
      name: 'Donut Http',
    },
  ];
}

// => 333
