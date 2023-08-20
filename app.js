let a = [2,2,7,9,8,9,8, 3, 1, 3];

function soln(num) {
    let be=[];
    let ce=0;
    for (let i = 0; i < num.length; i++) {
        if(be.indexOf(num[i])==-1){
            be.push(num[i]);            
        }else{
            be.splice((be.indexOf(num[i])),1);
        }
    }
    for (let x = 0; x < be.length; x++) {
        ce += be[x];
        
    }
    console.log(ce);
    
}
soln(a);
// console.log(soln(a));