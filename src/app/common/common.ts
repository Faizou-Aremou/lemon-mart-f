import { ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { MatIconTestingModule } from '@angular/material/icon/testing'

export const commonTestingProviders = [
  // Intentionally left blank! Used in later chapters.
]

export const commonTestingModules = [
  ReactiveFormsModule,
  NoopAnimationsModule,
  provideHttpClientTesting(),
  MatIconTestingModule,
] as unknown[]
