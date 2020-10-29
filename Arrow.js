//normal function

function name(Name)
{
    return Name;
}

var Name = "Ruhul Amin RRSS 24";

console.log(name(Name));


// Arrow Function

const nam = (name,age) => {
    console.log(name,age);
}
nam("Ruhul Amin RRSS",24);


// more arrow function

const ret = name => {
    console.log(name);
}

ret("Ruhul Amin RRSS 24")


const one = name => name;

console.log(one("Ruhul Amin RRSS 24"));