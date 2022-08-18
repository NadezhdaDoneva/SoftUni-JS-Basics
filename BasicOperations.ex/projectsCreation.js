function projectsCreation(input){
    let name = input[0];
    let numberProjects = Number(input[1]);
    let hoursNeeded =  numberProjects*3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${numberProjects} project/s.`)
}
projectsCreation(["Ivan", "3"]);