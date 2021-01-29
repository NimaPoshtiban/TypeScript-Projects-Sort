import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.table([numbersCollection.data]);
// const charactersCollection=new CharactersCollection('xsadqdw')
// const sorter=new Sorter(charactersCollection)
// console.table([sorter])

const linkedList=new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-1)
linkedList.add(0)

const sorter=new Sorter(linkedList)
sorter.sort()
linkedList.print()