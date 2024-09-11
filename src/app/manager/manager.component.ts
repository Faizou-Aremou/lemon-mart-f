import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbar } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, RouterOutlet],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
})
export class ManagerComponent {}
