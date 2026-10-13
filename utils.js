function total(arr){
let sum=0;
for(a of arr){
    sum+=a.amount;
    console.log(sum);
}
return sum;

}
module.exports = { total };