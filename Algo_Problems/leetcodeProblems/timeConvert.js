// iven a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    let mil = ""
    if(s[8] == "P") {
        let time = s.substring(0,8).split(":")
        if(time[0] == "12"){
            mil+=time[0]
        } else {
            mil+=parseInt(time[0])+12
        }
        for(let i = 1; i < time.length; i++){            
            mil+=":"
            mil+=time[i]
        }
    } else {
        let time = s.substring(0,8).split(":")
        if(time[0] == "12"){
            mil+="00"
        } else {
            mil+=time[0]
        }
        for(let i = 1; i < time.length; i++){            
            mil+=":"
            mil+=time[i]
        }
    }
    return mil
}