import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from '@coreui/angular';
import { SidenavComponent } from "./components/shared/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarModule, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'core-ui';
}
