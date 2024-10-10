import { Injectable, computed, signal } from '@angular/core'
import { Receipt } from '../receipt/receipt'
import { Observable } from 'rxjs'

//Entities

export enum UserRole {
  None = 'none',
  Clerk = 'clerk',
  Cashier = 'cashier',
  Manager = 'manager',
}
export interface User {
  id: string
  email: string
  dateOfBirth: Date | undefined
  name: Name
  picture: string
  role: UserRole
  userStatus: boolean
  receipt: Receipt[]
  level: number
  address: Address | null
  phones: Phone[]
}
export const DEFAULT_USER: User = {
  id: '',
  email: '',
  dateOfBirth: new Date(),
  name: {
    first: '',
    middle: '',
    last: '',
  },
  picture: '',
  role: UserRole.None,
  userStatus: false,
  receipt: [],
  level: 0,
  address: null,
  phones: [],
}

// value objects
export interface Name {
  first: string
  middle: string
  last: string
}

export interface Address {
  line1: string
  line2?: string
  city: string
  state: string
  zip: string
}
export enum PhoneType {
  None = 'none',
  Mobile = 'mobile',
  Home = 'home',
  Work = 'work',
}
export interface Phone {
  type: PhoneType
  digits: string
  id: number
}
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
