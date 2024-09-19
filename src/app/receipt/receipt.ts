export interface Receipt {
  id: string
  cashierId: string
  managerId: string
  subTotal: number
  tax: number
  total: number
  paymentType: PaymentType
  paymentAmount: number
}

export enum PaymentType {}
