import { StandUpBad } from "./StandUpBad";
import { StandUpGood, VipTicketPriceCalculator } from "./StandUpGood";

const vip = new VipTicketPriceCalculator();
const price1 = new StandUpGood('вип', vip);
console.log(`Цена билета: ${price1.getPrice()}`);

const price2 = new StandUpBad('балкон');
console.log(`Цена билета: ${price2.getPrice()}`);
