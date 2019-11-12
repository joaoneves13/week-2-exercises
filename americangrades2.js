function toAmericanGrade(grade) {
    if (grade >= 9) {
        return 'A'
    }
    if (grade >= 8) {
        return 'B'
    }
    if (grade >= 7) {
        return 'C'
    }
    if (grade >= 6) {
        return 'D'
    }
    return 'F'
}

function toAmericanGrades(grades) {
    return grades.map(toAmericanGrade)
}
// test
const grades1 = [9, 5.5, 6, 7.3]
const res = toAmericanGrades(grades1)[3]
console.log(`last is C? ${'C' == res ? "yes" : `no: ${res}`}`)