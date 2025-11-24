function processProducts(products){
    const names = products.map(function(item){
        return item.name;
    });
     products.forEach(function(product){
        if(product.price>50){
            console.log(product.name+"is above $70");
        }else{
            console.log(product.name+"is below $70");
        }
    });
    return names;
}
const input=[
    {name:"Laptop",price $19000},
    {name:"Mouse",price:40}
];
processProducts(input);