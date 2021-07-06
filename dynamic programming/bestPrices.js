function maxProfit(prices){

    let maxProfit  = 0

    let highs = maximums(prices)

    // TODO: Document algorithm...
    for ( let i = 0; i < prices.length-1; i++){
        let today = prices[i]
        let future = highs[i+1]
        let profit = future - today;    //DOCUMENT!
        console.log( `i=${i} => ${today}, ${future} => ${profit}`)
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit;

}

function maximums(prices){


    let outputs = []

    let previous = 0;

    for ( let i = prices.length -1;  i >= 0; i--){
        let now = prices[i];
        let max = Math.max(now, previous);
        outputs.unshift(max)
        previous = max;
    }

    return outputs;
}

// console.log( maximums([7,1,5,3,6,4]) )


console.log( maxProfit([7,1,5,3,6,4]))