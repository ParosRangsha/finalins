let txtInput = document.querySelector("#txtInput")
let btnCheck = document.querySelector("#btnCheck")
let headBarArray = ['Date', 'Dispo', 'Start Roll', 'End Roll', 'Total Roll', 'Quantity', 'Unit', 'Remark']
let headView = document.querySelector("#headBarTitle")
let myCol;

headBarArray.map((item)=>{
    headView.innerHTML += `<li class="headItem">${item}</li>`
})
let headItem = document.querySelectorAll(".headItem")
let headItemArray = Array.from(headItem)
myCol = headBarArray.length
headItemArray.map((hitem)=>{
    hitem.style.width = `calc(100% / ${myCol})`
    hitem.style.textAlign = "center"  
})
btnCheck.addEventListener("click",()=>{
    check()
})
txtInput.addEventListener("keydown",()=>{
    check()
})



// Data viewer Start from here

function check(){
    dataViewer.innerHTML = ""
    let mydata = txtInput.value
    let dataArray = handover.filter(d => d.DS === Number(txtInput.value));
    console.log(dataArray);
    
    dataArray.map((ditem)=>{
        dataViewer.innerHTML += `<li class="dataItem"><a class="lItem">${ditem.DT}</a><a class="lItem">${ditem.DS}</a><a class="lItem">${ditem.SR}</a><a class="lItem">${ditem.ER}</a><a class="lItem">${ditem.TR}</a><a class="lItem">${ditem.QT}</a><a class="lItem">${ditem.RM}</a><a class="lItem">x</a></li>`
    })
    let lItem = document.querySelectorAll(".lItem")
    let lItemArray = Array.from(lItem)
    lItemArray.map((myItem)=>{
        myItem.style.width = `calc(100% / ${myCol})`
    })
}



// Data viewer Stop from here