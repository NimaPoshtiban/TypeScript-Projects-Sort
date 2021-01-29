import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

console.table([numbersCollection.data]);
const charactersCollection = new CharactersCollection('xsadqdw');
console.table([charactersCollection]);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-1);
linkedList.add(0);
linkedList.sort();
linkedList.print();
