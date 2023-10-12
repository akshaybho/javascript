let marks = {
    harry : 90,
    boss : 45,
    dir : 36,
    amit : 65,
    raj : 23
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}

for (let key in marks){
    console.log("the marks of "+key+" are "+marks[key])
}