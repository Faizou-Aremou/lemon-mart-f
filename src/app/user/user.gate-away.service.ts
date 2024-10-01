import { PhoneType, SavedUser, UserRole } from './user.service'

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

function buildUser(user: UserDTO): SavedUser {
  const id = user.id
  const name = user.name
  const email = user.email
  const picture = user.picture
  const role = user.role as UserRole
  const dateOfBirth = user.dateOfBirth ? new Date(user.dateOfBirth) : undefined
  const userStatus = user.userStatus
  const level = user.level
  const address = user.address
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
    receipt: [],
  }
}
