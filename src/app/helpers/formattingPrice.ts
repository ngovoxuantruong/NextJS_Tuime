export function formattingPrice(price: number) {
  return price.toLocaleString().replace(',', '.');
}
