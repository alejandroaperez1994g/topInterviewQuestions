function moveZeroes(nums: number[]): void {
    let numOfZeroes: number = 0
    let k:number = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i]=== 0){
            numOfZeroes++
        }else{
            nums[k]=nums[i]
            k++
        }
    }

    for(let j =0; j < numOfZeroes; j++ ){
        nums[k++]=0
    }

};