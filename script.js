function displayNumber(num) {
    let txtbox=document.querySelector("#res")
    txtbox.value+=num
}
function clearBox() {
    res.value=""
}
function evaluateExperssion() {
    res.value=eval(res.value)
}
function removeText() {
    res.value=res.value.slice(0,-1)
}