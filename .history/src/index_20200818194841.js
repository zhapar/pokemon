import foods from "./foods";
import { choice, remove } from "./helpers";

const food = choice(foods);
console.log(foods[Math.floor(Math.random() * foods.length]));
console.log(`I’d like one ${food}, please.`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);
const foodsLeft = remove(foods, food);
console.log(`I’m sorry, we’re all out. We have ${foodsLeft.length} left.`);
