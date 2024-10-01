import { Injectable } from '@angular/core'
import { Receipt } from '../receipt/receipt'

//Entities
export interface CreatedUser {
  id: string
  email: string
  password: string
  dateOfBirth: Date | undefined
  name: Name
  picture: string
  role: UserRole
  userStatus: boolean
  receipt: Receipt[]
  level: number
  address: Address
  phones: Phone[]
}
export interface SavedUser {
  id: string
  email: string
  dateOfBirth: Date | undefined
  name: Name
  picture: string
  role: UserRole
  userStatus: boolean
  receipt: Receipt[]
  level: number
  address: Address
  phones: Phone[]
}

// value objects
export interface Name {
  first: string
  middle: string
  last: string
}
export enum UserRole {
  None = 'none',
  Clerk = 'clerk',
  Cashier = 'cashier',
  Manager = 'manager',
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
  constructor() {}
}
