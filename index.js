// code your solution here
function superbowlWin(item){
    let obj = item.find(item => item.result === "W")
    if (obj){
        return obj.year
    }
    return obj
    }