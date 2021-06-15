var countBits = function(n) {
    let bitArr = [4194304,2097152,1048576,524288,262144,131072,65536,32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1]
    let count = 0
    for(let i = 0; i < bitArr.length; i++){
        if(n - bitArr[i] >= 0 ){
            n-=bitArr[i]
            count++
        }
    }
    return count;
}

var countBits = function(n) {
    let temp = 1
    let bitArr = []
    while(temp <= n){
        bitArr.push(temp)
        temp*=2
    }
    let count = 0
    for(let i = bitArr.length-1; i >=0 ; i--) {
        if(n - bitArr[i] >= 0 ){
            n-=bitArr[i]
            count++
        }
    }
    return count
}


console.log(Math.log2(64));
console.log(Math.ceil(Math.log2(63)));