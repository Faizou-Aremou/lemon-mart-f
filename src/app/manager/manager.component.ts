import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { MatToolbar } from '@angular/material/toolbar'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, RouterOutlet, MatIcon, MatTooltip],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss',
})
export class ManagerComponent {}
