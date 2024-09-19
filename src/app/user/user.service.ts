import { Injectable } from '@angular/core'
import { Receipt } from '../receipt/receipt'

//Entities
export interface User {
  id: string
  email: string
  password: string
  name: Name
  picture: string
  role: UserRole
  userStatus: UserStatus
  Receipt: Receipt
}
// value objects
export interface Name {
  first: string
  middle: string
  last: string
}
export enum UserRole {
  Clerk = 'clerk',
  Cashier = 'cashier',
  Manager = 'manager',
}
export enum UserStatus {}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
}
