function productExceptSelf(nums) {


 let lcarry = 1
 let left = []
 for ( let i = 0; i < nums.length; i++){
     lcarry = nums[i] * lcarry;
     left.push(lcarry)
 }

 let rcarry = 1;
 let right = [];
 for ( let i = nums.length -1; i >=0; i--){
     rcarry = rcarry * nums[i];
     right.unshift(rcarry)
 }

 let ans = [ right[1] ] // Boundry conditions
 for ( let i = 1; i < nums.length-1; i++){
     let lmult = left[i-1] * right[i+1];
  
     ans.push(lmult)
 }
 ans.push(left[left.length-2])

 console.log( `left = ${left}, right=${right}, ans=${ans}`)

 return ans;

}


let ans = productExceptSelf([4,3,2,1,2])
console.log( ans ) 