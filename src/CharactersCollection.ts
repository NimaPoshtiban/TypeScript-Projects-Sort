export class CharactersCollection {
  constructor(public data: string) {}

  public get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase().trim() >
      this.data[rightIndex].toLowerCase().trim()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}
