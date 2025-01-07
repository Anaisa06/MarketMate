import { itemStatus } from "./itemStatus"

export interface IItem {
    id: number
    name: string
    category: string
    status: itemStatus
    quantity: string;
  }