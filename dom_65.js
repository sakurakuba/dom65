    ////zadanie 1

    let tmp = document.getElementsByTagName("div")
    let arr = [tmp[2].textContent, tmp[4].textContent, tmp[1].textContent, tmp[5].textContent, tmp[3].textContent, tmp[0].textContent]
    for (let i=0;i<arr.length;i++) {console.log(arr[i])}


    ////zadanie 2

    let a = document.getElementsByTagName("div")

    for (let i=0;i<a.length;i++) {
        if (i < 3) {console.log(a[i].style.color='red')}
        else {console.log(a[i].style.color='green')}
    }


    ////zadanie 3

    let b = document.getElementById("container")

    for (let i=0;i<5;i++) {
        b.innerHTML += `<div class="element">Element ${i+1}</div>`
    }