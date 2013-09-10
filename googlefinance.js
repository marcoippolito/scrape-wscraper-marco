// $ is the DOM document to be parsed//
// result is the objsct containing the result of parsing //

result = {};
price = $('div.id-price-panel').find('span.pr').children().text();
result.price = price;
