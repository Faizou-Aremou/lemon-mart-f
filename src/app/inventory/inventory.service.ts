import { Injectable } from '@angular/core'
export interface Product {
  id: string
  categoryId: CategoryId
  sku: string
  upc: string
  price: number
  discountModifier: number
  listingStatus: ListingStatus
  inventory: Inventory
}

export interface Category {
  id: string
  parentId: string
  categoryName: string
  taxRate: string
}

export interface Inventory {
  id: string
}

export enum CategoryId {}
export enum ListingStatus {}

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor() {}
}
