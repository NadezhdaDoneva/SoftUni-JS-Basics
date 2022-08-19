function login(input) {
    index=0
    let userName = input[index];
    index++
    let temp = input[index]
    let count=0
    let flag = false
    let str=""
    for (i=userName.length; i>=0; i--){
        str+= userName.charAt(i)
    }
    while (temp!=str) {
        if (count>=3) {
            flag = true
            console.log(`User ${userName} blocked!`)
            break
        }
        index++
        temp = input[index]
        count++
        console.log(`Incorrect password. Try again.`);       
    }
    if (!flag){
        console.log(`User ${userName} logged in.`);
    }
}
login(['sunny','rainy','cloudy','sunny','not sunny'])