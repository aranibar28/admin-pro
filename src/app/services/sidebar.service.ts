import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [{ title: 'Panel', url: '/' }],
    },
    {
      title: 'Clientes',
      icon: 'mdi mdi-account',
      submenu: [
        { title: 'Index', url: 'customers' },
        { title: 'Crear', url: 'customers/create' },
        { title: 'Actualizar', url: 'customers/update' },
      ],
    },
    {
      title: 'Productos',
      icon: 'mdi mdi-archive',
      submenu: [
        { title: 'Index', url: 'products' },
        { title: 'Crear', url: 'products/create' },
        { title: 'Actualizar', url: 'products/update' },
      ],
    },
  ];

  constructor() {}
}
