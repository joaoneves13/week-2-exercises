function wallOfFame(name, skill){
    return `
                                    WALL OF FAME

        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|  ${name} : ${skill} |___|___|___|___|___|
        ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
        _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
    `
}

const miloud = wallOfFame('Miloud', 'Growth Hacking')
const johan = wallOfFame('Johan', 'Fixing Ubuntu')
const danny = wallOfFame('Danny', 'Product Owning')

console.log(miloud)
console.log(johan)
console.log(danny)