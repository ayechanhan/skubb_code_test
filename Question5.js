// Mathematics: Write down the formula/equation to calculate the following.
// Price after 20% discount = $1000
// What is the price before discount / original price ?

function price_before_discount(discount, current_price){
    let discount_in_decimal = discount/100
    let originalPrice = current_price/(1-discount_in_decimal)
    return `Original price: $${originalPrice}`
}

discount = 20
current_price = 1000
console.log(price_before_discount(discount, current_price))