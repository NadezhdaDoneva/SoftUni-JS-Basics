function vacation(size, type, day){
    let money =0;
    if (type=="Students"){
        switch(day){
            case "Friday":
                money = size*8.45
                break;
                case "Saturday":
                    money = size*9.80
                    break;
                    case "Sunday":
                        money = size*10.46
                        break;
        }
    }
        if (type=="Business"){
            switch(day){
                case "Friday":
                    money = size*10.90
                    break;
                    case "Saturday":
                        money = size*15.60
                        break;
                        case "Sunday":
                            money = size*16
                            break;
            }
    }
    if (type=="Regular"){
        switch(day){
            case "Friday":
                money = size*15
                break;
                case "Saturday":
                    money = size*20
                    break;
                    case "Sunday":
                        money = size*22.50
                        break;
        }
    }
    if (type=="Students"){
        if (size>=30){
            money=money*85/100
        }
    }
    if (type=="Business"){
        if(size>=100){
            switch(day){
                case "Friday":
            money = (size-10)*10.90
            break;
            case "Saturday":
                money = (size-10)*15.60
                break;
                case "Sunday":
                    money = (size-10)*16
            }
        }
    }
    if (type =="Regular"){
        if (size>=10&&size<=20){
            money=money*95/100
        }
    }
    console.log(`Total price: ${money.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )