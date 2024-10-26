let headBarArray = ['Date', 'Dispo', 'Start Roll', 'End Roll', 'Total Roll', 'Quantity', 'Unit', 'Remark']
let headView = document.querySelector("#headBarTitle")

headBarArray.map((item)=>{
    headView.innerHTML += `<li class="headItem">${item}</li>`
})
let headItem = document.querySelectorAll(".headItem")
let headItemArray = Array.from(headItem)
headItemArray.map((hitem)=>{
    hitem.style.width = `calc(100% / ${headBarArray.length})`
    hitem.style.textAlign = "center"
    
})



// Data viewer Start from here
let dataViewer = document.querySelector("#dataViewer")
let dataArray = ['19-Jan-2024', 109855, 20, 30, 10, 2015, 'M', 'x']
dataArray.map((ditem)=>{
    dataViewer.innerHTML += `<li class="dataItem">${ditem}</li>`
})

let dataItem = document.querySelectorAll(".dataItem")
let ditemArray = Array.from(dataItem)
ditemArray.map((myitem)=>{
    myitem.style.width = `calc(100% / ${ditemArray.length})`
    myitem.style.textAlign = "center"
})
// Data viewer Stop from here