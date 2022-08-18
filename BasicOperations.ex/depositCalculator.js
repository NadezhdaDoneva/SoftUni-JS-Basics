function depositCalculator(input){
    const depositSum = Number(input[0])
    const period = Number(input[1])
    const percent = Number(input[2])
    const interest = (depositSum*percent)/100
    const interestPerMonth = interest / 12;
    const finalSum = depositSum + period*interestPerMonth
    console.log(finalSum)
}
depositCalculator(["200", "3", "5.7"])