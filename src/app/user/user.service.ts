import { Injectable, computed, signal } from '@angular/core'
import { User } from '../auth/auth.service'

//Entities

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<User | null>(null)
  fullName = computed(() => {
    if (!this.user()?.name) {
      return ''
    } else if (this.user()?.name.middle) {
      return `${this.user()?.name.first} ${this.user()?.name.middle} ${this.user()?.name.last}`
    }
    return `${this.user()?.name.first} ${this.user()?.name.last}`
  })

  constructor() {}
}
