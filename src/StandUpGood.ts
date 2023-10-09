interface TicketPriceCalculator {
  calculatePrice(): number;
}

export class VipTicketPriceCalculator implements TicketPriceCalculator {
  calculatePrice(): number {
    return 8000;
  }
}

export class ParterTicketPriceCalculator implements TicketPriceCalculator {
  calculatePrice(): number {
    return 6000;
  }
}

export class AmfiteatrTicketPriceCalculator implements TicketPriceCalculator {
  calculatePrice(): number {
    return 4000;
  }
}

export class BeletazhTicketPriceCalculator implements TicketPriceCalculator {
  calculatePrice(): number {
    return 2000;
  }
}

export class BalkonTicketPriceCalculator implements TicketPriceCalculator {
  calculatePrice(): number {
    return 1200;
  }
}

export class StandUpGood {
  constructor(private place: string, private calculator: TicketPriceCalculator) {}

  getPrice(): number {
    return this.calculator.calculatePrice();
  }
}