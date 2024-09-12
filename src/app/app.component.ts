import { Component, inject } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lemon-mart-f'
  constructor() {
    const iconRegistry = inject(MatIconRegistry)
    const sanitizer = inject(DomSanitizer)
    iconRegistry.addSvgIcon(
      'lemon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/lemon.svg')
    )
  }
}
