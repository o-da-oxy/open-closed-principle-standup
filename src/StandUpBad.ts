export class StandUpBad {
  constructor(private place: string) {}

  getPrice(): number {
    let price: number;

    if (this.place === 'вип') {
      price = 8000;
    } else if (this.place === 'партер') {
      price = 6000;
    } else if (this.place === 'амфитеатр') {
      price = 4000;
    } else if (this.place === 'бельэтаж') {
      price = 2000;
    } else if (this.place === 'балкон') {
      price = 1200;
    }

    return price;
  }
}