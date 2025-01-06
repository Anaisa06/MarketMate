import { IItem } from "../interfaces/item";

export interface ListData {
  title: string;
  data: IItem[];
}

export function groupItems(list: IItem[]) {
    let groupedObject: any = {};
    list.forEach(item => {

        if (!groupedObject[item.category]) {
            groupedObject[item.category] = { title: item.category, data: [] }
        }

        groupedObject[item.category].data.push(item)
    })

    const itemsForList: ListData[] = Object.values(groupedObject)

    return itemsForList.sort((a, b ) => a.title.localeCompare(b.title))
}