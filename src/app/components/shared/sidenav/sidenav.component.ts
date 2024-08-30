import { Component } from '@angular/core';
import { INavData } from '@coreui/angular';
import { SidebarModule } from '@coreui/angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [    
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ShadowOnScrollDirective,
    ContainerComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
   navItems: INavData[] = [
    {
      name: 'Admin Panel',
      url: '',
      iconComponent: {name: 'cil-speedometer'},
    },
    {
      name: 'Product',
      title: true,
    },
    {
      name: 'Product',
      url: '',
      iconComponent: {name: 'cil-notes' },
      children: [
        {
          name: 'Product',
          url: '',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Add_Product',
          url: '',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Add Variant',
          url: '',
          icon: 'nav-icon-bullet',
        },
  
      ],
    },
    {
      name: 'Order',
      url: '',
      iconComponent: { name: 'cil-notes' },
      children: [
        
        {
          name: 'Active',
          url: '',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Delivered',
          url: '',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Cancelled',
          url: '',
          icon: 'nav-icon-bullet',
        },
      ],
    },
    {
      name: 'Payment',
      url: '',
      iconComponent: { name: 'cil-notes' },
      children: [
        {
          name: 'Form Control',
          url: '',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Select',
          url: '',
          icon: 'nav-icon-bullet',
        },
  
  
  
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      iconComponent: { name: 'cil-bell' },
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Modal',
          url: '/notifications/modal',
          icon: 'nav-icon-bullet',
        },
        {
          name: 'Toast',
          url: '/notifications/toasts',
          icon: 'nav-icon-bullet',
        },
      ],
    },  
  ]
}
