show("tickets");

function show(f) {
    let arr = JSON.parse(localStorage.getItem("f"))
    let parent = document.getElementById("parent")
    arr.forEach(function (x) {
        let div = document.createElement("div")
        let name = document.createElement("h3")
        name.innerHTML = `Name: ${x.name}`;
        let price = document.createElement('h4')
        price.innerHTML = `price: ${x.price}`;
        let time = document.createElement('h4')
        time.innerHTML = `time : ${x.time}`;
        let desc = document.createElement("h4")
        desc.innerHTML = `desc: ${x.desc}`;
        div.append(name, price, time, desc);
        parent.append(div);
    });
}

function cart(element) {
    let arr = JSON.parse(localStorage.getItem("ticketsMore"))
    if (arr == null) {
        arr = [];
        arr.push(element);
    } else {
        arr = JSON.parse(localStorage.getItem("ticketsmore"))
        var k = 0;
        for (var i = 0; i < arr.length; i++) {
            var c = 0;re
            for (key in element) {
                if (arr[i][key] == element[key]) {
                    c++;
                    break;
                }
            }
            if (c > 0) {
                k++;
                break;
            }
        }
            if (k > 0) {
                alert("account already exists");
                return;
            }
            else {
                arr.push(element);
                window.location.href = "indexes.html"
            }  
    }
    localStorage.setItem("ticketsmore", JSON.stringify(arr))
}



