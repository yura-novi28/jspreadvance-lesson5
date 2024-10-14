function addNumbers(){
    let n = 0;
    return function(q){
        n += q;
        console.log(n);
    }
}

const sum = addNumbers();
sum(3);
sum(5);
sum(228);