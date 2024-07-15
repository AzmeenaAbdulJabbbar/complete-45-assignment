// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface items{
    name: string
    price :number
}
const veg: items={
    name :"tomato",
    price:150
}
const fruits: items={
    name :"mango",
    price:250
}
console.log('vag name',veg.name,'veg price',veg.price)
console.log('fruits name',fruits.name,'fruits price',fruits.price)