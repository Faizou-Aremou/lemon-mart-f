import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbar } from '@angular/material/toolbar'
import { MatTooltip } from '@angular/material/tooltip'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [MatToolbar, MatButtonModule, RouterOutlet, MatTooltip],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {}
