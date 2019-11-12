const teachers = ['David', 'Kelley', 'Jeroen']

function getLastElementOfArray(array){
    const lastIndex = array.length - 1
    return  array[lastIndex]
}

const lastTeacher = getLastElementOfArray(teachers) 

console.log(lastTeacher)
console.log(teachers) // [ 'David', 'Kelley' ] Uh-oh!
// array.pop() also removes the last element from the array.
// The original array of teachers is now 'Mutated'