let todo=[];

let req=prompt("enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting todo app");
        break;
    }
    if(req=="list"){
        console.log("--------");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i])
        }
            console.log("--------");
    }else if(req=="add"){
        let task=prompt("enter your  task you want to add");
        todo.push(task);
        console.log("task Added")
    }else if(req=="delete"){
        let task=prompt("enter the task you want to delete");
        todo.splice(task,1);
        console.log("deleted ")
    }
    req=prompt("enter your request");

}