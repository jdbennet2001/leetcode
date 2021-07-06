function mySqrt(x){

  let pivot = x/2;
  let ans = pivot = x/2;

  while( Math.abs( ans * ans - x) > 0.01 ){

    pivot = pivot /2;

    if ( Math.floor(ans) * Math.floor(ans) == x)
        return ans;

    if ( ans * ans > x)
        ans = ans - pivot
    else
        ans = ans + pivot

    console.log( `${ans} => ${ans * ans}`)
  }
      
  return Math.floor(ans);

}

let soln = mySqrt(8)
console.log( soln );

