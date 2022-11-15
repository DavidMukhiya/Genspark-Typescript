import { Items} from './ItemType'
export default interface Warehouse{
    item:Items[]
    removeItem(o:Items):void
    addItem(o:Items):void
}