
import { Items } from './ItemType';
import Warehouse from './Warehouse'
export default class Item implements Warehouse{
    item: Items[]=[];
    removeItem=(i:Items)=>{
        let index:number = this.item.indexOf(i);
        if(index<-1){
            this.item.splice(index,1);
            i.itemCount--;
            console.log(`Item ${i.name} is removed. Remaining stock for ${i.name}:${i.itemCount}`)
        }else{
            console.log(`couldn't find the item or stock is empty`)
        }
    
    }
    addItem=(i:Items)=>{
        this.item.push(i);
        console.log(`item ${i.name} is added `)
    }
}