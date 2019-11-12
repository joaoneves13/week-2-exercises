function averageAmericanGrades(grades) {
    return toAmericanGrade(grades.reduce((sum, value) => sum + value, 0) / grades.length)
}

// test
// This array was already declared in the previous section. 
// You might get an error if you run it again.
const grades1 = [9, 5.5, 6, 7.3]
const res = averageAmericanGrade(grades1)
console.log(`average is D? ${'D' == res ? "yes" : `no: ${res}`}`)