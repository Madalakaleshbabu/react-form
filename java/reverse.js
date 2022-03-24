function reverse_a_number(number){
    number =number+""
    return number.split('').reverse().join('')
}
console.log("the reverse"+reverse_a_number(83343))