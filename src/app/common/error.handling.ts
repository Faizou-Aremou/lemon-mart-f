import { HttpErrorResponse } from '@angular/common/http'

export function transformError(error: HttpErrorResponse | string): void {
  const errorMessage = 'An unknown error has occurred'
  if (typeof error === 'string') {
    throw new Error(errorMessage)
  } else if (error.error instanceof ErrorEvent) {
    throw new Error(`Error! ${error.error.message}`)
  } else if (error.status) {
    throw new Error(`Request failed with ${error.status} ${error.statusText}`)
  } else if (error instanceof Error) {
    throw new Error(error.message)
  }
}
