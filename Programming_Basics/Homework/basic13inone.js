function allOfTheAbove(arr) {
    function basic1() {
        for(var i = 1;i <=255;i++) {
            console.log(i)
        }
    }

    function basic2() {
        for(var i = 1;i <=255; i+=2) {
            console.log(i)
        }
    }

    function basic3() {
        var sum = 0;
        for (var i = 1; i <= 255;i++) {
            sum+=i
            console.log(i)
            console.log(sum)
        }
    }

    function basic4(arr) {
        for(var i = 0; i < arr.length;i++){
            console.log(arr[i])
        }
    }

    function basic5(arr) {
        var max = arr[0];
        for(var i = 1;i < arr.length;i++) {
            if(arr[i] > max) {
                max = arr[i]
            }
        }
        console.log(max)
        return max
    }

    function basic6(arr) {
        var sum = arr[0];
        for(var i = 1;i < arr.length; i++) {
            sum+=i
        }
        console.log(sum / arr.length);
        return (sum / arr.length);
    }

    function basic7() {
        newArr = [];
        for(var i = 1;i <= 255; i+=2) {
            newArr.push(i);
        }
        console.log(newArr)
    }

    function basic8(arr) {
        for(var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i]
        }
        console.log(arr);
    }

    function basic9(arr,y) {
        var count = 0;
        for(var i = 0;i < arr.length; i++) {
            if(arr[i] > y) {
                count++
            }
        }
        console.log(count);
    }

    function basic10(arr) {
        for(var i = 0;i < arr.length; i++) {
            if(arr[i] < 0) {
                arr[i] = 0;
            }
        }
        console.log(arr)
    }

    function basic11(arr) {
        var max = arr[0];
        var min = arr[0];
        var sum = arr[0];
        for(var i = 1; i < arr.length; i++) {
            sum +=arr[i]
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min) {
                min = arr[i];
            }
        }
        var avg = sum / arr.length
        console.log([max, min, avg])
    }

    function basic12(arr) {
        for( var i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }
        arr[arr.length - 1] = 0;
        console.log(arr);
    }

    function basic13(arr) {
        for(var i = 0;i < arr.length; i++) {
            if(arr[i] < 0) {
                arr[i] = "Dojo";
            }
        }
        console.log(arr)
    }

    allOfTheAbove.basic1  = basic1;
    allOfTheAbove.basic2  = basic2;
    allOfTheAbove.basic3  = basic3;
    allOfTheAbove.basic4  = basic4;
    allOfTheAbove.basic5  = basic5;
    allOfTheAbove.basic6  = basic6;
    allOfTheAbove.basic7  = basic7;
    allOfTheAbove.basic8  = basic8;
    allOfTheAbove.basic9  = basic9;
    allOfTheAbove.basic10  = basic10;
    allOfTheAbove.basic11  = basic11;
    allOfTheAbove.basic12  = basic12;
    allOfTheAbove.basic13  = basic13;

}

arr1 = [0,3,8,9,-3,56,-1,-99]

allOfTheAbove()
allOfTheAbove.basic11(arr1)
