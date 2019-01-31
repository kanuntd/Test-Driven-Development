function greet(name){
    if(Array.isArray(name)){
        // return `Hello, ${name.join(" and ")}.`
        var text = "";
        if(name.length === 1){
            text =  `Hello, ${name[0]}.`
        }else if(name.length === 2){
            text = `Hello, ${name.join(" and ")}.`
        }else if(name.length > 2){
            text = `Hello, ${name.slice(0,-1).join(', ') + ', and ' + name.slice(-1)}.`
        }
            return `${text}`
        
    }
    else if(name === null){
        return 'Hello, my friend.'
    }
    else if(name == name.toUpperCase()){
        return `HELLO ${name}!`
    }
  
    return `Hello, ${name}.`;
}

module.exports = greet;