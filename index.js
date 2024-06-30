function receivesAFunction(makeTea){
     
    makeTea();
    
    console.log("Tea was mad")   
   
}

function returnsANamedFunction(){
    
    return function coolKids(){
     
    }
}
function returnsAnAnonymousFunction(){
    
    return function(){

    }
}