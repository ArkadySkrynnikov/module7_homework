const obj = {
    a:1,
    b:2,
};
function showObjKeyProp(obj){
    for (let key in obj) { 
        console.log(`key from obj - ${key} , properties from obj - ${obj[key]}`);
    }
}
showObjKeyProp(obj);