function yardGreening(input){
    let area = Number(input[0]);
    let total = area*7.61;
    let discount = 0.18*total;
    let final = total - discount;
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);