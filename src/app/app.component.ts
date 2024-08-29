import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lemon-mart-f'
}
