import { Injectable } from '@angular/core'
import {
  BehaviorSubject,
  Observable,
  catchError,
  filter,
  map,
  switchMap,
  tap,
  throwError,
} from 'rxjs'
import { JwtPayload, jwtDecode } from 'jwt-decode'
import { transformError } from '../common/error.handling'

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
  readonly authStatus$: Observable<AuthStatus>
  readonly currentUser$: Observable<User>
  login(email: string, password: string): void
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
  readonly authStatus = new BehaviorSubject<AuthStatus>(DEFAULT_AUTH_STATUS)
  readonly currentUser = new BehaviorSubject<User>(DEFAULT_USER)
  readonly authStatus$ = this.authStatus.asObservable()
  readonly currentUser$ = this.currentUser.asObservable()
  constructor() {}
  login(email: string, password: string): void {
    this.authProvider(email, password).pipe(
      map((value) => {
        const token = jwtDecode(value.accessToken)
        return this.transformJwtToken(token)
      }),
      tap((status) => this.authStatus.next(status)),
      filter((status: AuthStatus) => status.isAuthenticated), // create two type here;
      switchMap(() => this.getCurrentUser()),
      tap((user) => this.currentUser.next(user)),
      catchError((err) => {
        this.logout()
        return throwError(() => transformError(err))
      })
    )
  }

  logout(clearToken?: boolean | undefined): void {
    throw new Error('Method not implemented.')
  }
  getToken(): string {
    throw new Error('Method not implemented.')
  }
  protected abstract authProvider(
    email: string,
    password: string
  ): Observable<IServerAuthResponse>
  protected abstract transformJwtToken(token: JwtPayload): AuthStatus
  protected abstract getCurrentUser(): Observable<User>
}
