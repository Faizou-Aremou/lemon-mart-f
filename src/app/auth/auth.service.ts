import { Injectable, WritableSignal, signal } from '@angular/core'
import { Observable } from 'rxjs'

export interface AuthStatus {
  isAuthenticated: boolean
  userRole: UserRole
  userId: string | null
}

export enum UserRole {
  None = 'none',
  Clerk = 'clerk',
  Cashier = 'cashier',
  Manager = 'manager',
}

export interface IServerAuthResponse {
  accessToken: string
}
export const DEFAULT_AUTH_STATUS: AuthStatus = {
  isAuthenticated: false,
  userRole: UserRole.None,
  userId: null,
}
export interface IAuthService {
  readonly authStatus: WritableSignal<AuthStatus>
  readonly currentUser: WritableSignal<User>
  login(email: string, password: string): Observable<void>
  logout(clearToken?: boolean): void
  getToken(): string
}

export interface User {
  id: string
  email: string
  dateOfBirth: Date | undefined
  name: Name
  picture: string
  role: UserRole
  userStatus: boolean
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
export abstract class AuthService implements IAuthService {
  authStatus = signal<AuthStatus>(DEFAULT_AUTH_STATUS)
  currentUser = signal<User>(DEFAULT_USER)
  constructor() {}
  login(email: string, password: string): Observable<void> {
    throw new Error('Method not implemented.')
  }
  logout(clearToken?: boolean | undefined): void {
    throw new Error('Method not implemented.')
  }
  getToken(): string {
    throw new Error('Method not implemented.')
  }
}
