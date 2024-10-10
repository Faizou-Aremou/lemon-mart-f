import { PhoneType, User, UserRole } from '../auth/auth.service'

export interface UserDTO {
  id: string
  email: string
  password: string
  name: {
    first: string
    middle: string
    last: string
  }
  dateOfBirth: string | undefined
  level: number
  address: { line1: string; line2?: string; city: string; state: string; zip: string }
  phones: {
    type: string
    digits: string
    id: number
  }[]
  picture: string
  role: string
  userStatus: boolean
  Receipt: {
    id: string
    cashierId: string
    managerId: string
    subTotal: number
    tax: number
    total: number
    paymentType: {}
    paymentAmount: number
  }
}

function buildUser(user: UserDTO): User {
  const id = user.id ?? null
  const name = user.name ?? null
  const email = user.email ?? null
  const picture = user.picture ?? null
  const role = (user.role as UserRole) ?? UserRole.None
  const dateOfBirth = user.dateOfBirth ? new Date(user.dateOfBirth) : undefined
  const userStatus = user.userStatus ?? false
  const level = user.level ?? 0
  const address = user.address ?? null
  const phones = user.phones.map((phone) => ({ ...phone, type: phone.type as PhoneType }))

  return {
    id,
    name,
    email,
    picture,
    role,
    dateOfBirth,
    userStatus,
    level,
    address,
    phones,
  }
}

function toCreatedUserDTO(user: User): Omit<UserDTO, 'id'> {
  throw new Error()
}
function toSavedUserDTO(user: User): UserDTO {
  throw new Error()
}
