import foods from "./foods";

function choice() {
  return foods[Math.floor(Math.random * foods.length)];
}
