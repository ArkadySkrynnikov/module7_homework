let object1 = {
    a:1,
    b:2,
    c:true,
    d:NaN,
    e:undefined,
    2:321321321,
};

object1.f = null;

function examinateObj(string,obj){
    if (string in obj === true){
        console.log(true);
    } else {
        console.log(false);
    }
};
examinateObj("a",object1);