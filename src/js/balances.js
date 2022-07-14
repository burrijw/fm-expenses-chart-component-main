import oldBalances from '../data.json'

// find the max amount
const amounts = oldBalances.map(el => el.amount);
export const maxAmount = Math.max(...amounts)

// create new array with percentages
export const data = () => ({
    maxAmount: maxAmount,
    balances: oldBalances.map(el => {
        return {
            day: el.day,
            amount: el.amount,
            percentage: Math.round((el.amount / maxAmount) * 100)

        }
    })

}
)





