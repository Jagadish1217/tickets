function sign() {
    let form = document.getElementById("form");
    let name = form.name.value;
    let email = form.email.value;
    let num = form.num.value;
    let pass = form.pass.value;
    let check = form.check.value;
    if (name == "" || email == "" || num == "") {
        alert("one or two fields are empty")
        return;
    }
    if (pass.length < 8) {
        alert("password must contain 8 characters")
        return;
    }
    if (check == false) {
        alert("temrs and conditions must be followed")
        return;
    }

    let user = {
        name,
        email,
        num,
        pass,
    };
    let arr = JSON.parse(localStorage.getItem("userarr"));
    if (arr == null) {
        arr = [];
        arr.push(user);
    } else {
        arr = JSON.parse(localStorage.getItem("userarr"))
        var k = 0;
        for (var i = 0; i < arr.length; i++) {
            var c = 0;
            for (key in user) {
                if (arr[i][key] == user[key]) {
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
                arr.push(user);
                window.location.href = "indexes.html"
            }  
    }
    localStorage.setItem("userarr", JSON.stringify(arr))
}

function log() {
    let arr = JSON.parse(localStorage.getItem("userarr"))
    let form = document.getElementById("logform");
    let nam = form.name.value;
    let pas = form.pass.value;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == nam) {
            if (arr[i].pass == pas) {
                console.log("logged in as" + arr[i].name)
                window.location.href="indexes.html"
            }
        }
    }
    localStorage.setItem("userarr", JSON.stringify(arr))
}