import { IItem } from "../interfaces/item";
import { itemStatus } from "../interfaces/itemStatus";
import { groupItems } from "./groupItems";

function generateRandomColor(): string {
    const randomColor = Math.floor(Math.random() * 0xffffff);
    return `#${randomColor.toString(16).padStart(6, "0")}`;
  }

export const sortCategories = (items: IItem[]) => {
  const groupedItems = groupItems(items);

  return groupedItems.map(item => {
    return {
      label: item.title,
      value: item.data.length,
      color: generateRandomColor(),
    }
  })
}

export const sortItemsByStatus = (items: IItem[]) => {
    const bought = items.filter(item => item.status === itemStatus.BOUGHT)
    const pending = items.filter(item => item.status === itemStatus.PENDING)

    return [
        {
            label: 'Comprado',
            value: bought.length,
            color: generateRandomColor()
        },
        {
            label: 'Pendiente',
            value: pending.length,
            color: generateRandomColor()
        }
    ]
}