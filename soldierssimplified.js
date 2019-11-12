function promote(soldier){
    switch (soldier.rank) {
        case 'private':
            return {
                ... soldier,
                rank: 'private-1st-class',
                salaryUSD: 4250
            }

        case 'private-1st-class':
            return {
                ... soldier,
                rank: 'specialist',
                salaryUSD: 4750
            }

        case 'specialist':
            return {
                ... soldier,
                rank: 'corporal',
                salaryUSD: 5100 
            }

        case 'corporal':

            return {
                ... soldier,
                rank: 'sergeant',
                salaryUSD: 5700
            }
        default:
            return {
                ... soldier,
                rank: soldier.rank ,
                salaryUSD: soldier.salaryUSD
            }
    }
}


const soldier = { firstName: 'Biggs', lastName: 'Darklighter', rank: 'specialist', salaryUSD: 4750 }
const promotedSoldier = promote(soldier)

console.log(promotedSoldier)
console.log('same object?', soldier === promotedSoldier) // output same object? false

const soldier2 = { firstName: 'Wedge', lastName: 'Antilles', rank: 'private-1st-class', salaryUSD: 4250 }
const promotedSoldier2 = promote(soldier2)

console.log(promotedSoldier2)
console.log('same object?', soldier2 === promotedSoldier2) // output same object? false

const soldier3 = {firstName: 'Joao', lastName: 'Neves', rank: 'nobbie', salaryUSD: 1000}
const promotedSoldier3 = promote(soldier3)

console.log(promotedSoldier3);
