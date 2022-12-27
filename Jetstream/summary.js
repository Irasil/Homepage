

window.onload = function(){

    //Die Parameter aus der URL werden in Variablen gespeichert
    var queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name")
    const vorname = urlParams.get("vorname")
    const email = urlParams.get("email")
    const tel = urlParams.get("tel")
    const prio = urlParams.get("prio")
    const dienstleistung = urlParams.get("dienstleistung")
    const startdatum = urlParams.get("startdatum")
    const enddatum = urlParams.get("enddatum")
    var fullname = vorname+" "+name

//Die Variablen werden in die jeweiligen Inputfelder übertragen
    document.getElementById("name").innerHTML = fullname;    
    document.getElementById("email").innerHTML = email;
    document.getElementById("tel").innerHTML = tel;
    document.getElementById("prio").innerHTML = prio;
    document.getElementById("dienstleistung").innerHTML = dienstleistung;
    document.getElementById("erfassungsdatum").innerHTML = startdatum;
    document.getElementById("abholdatum").innerHTML = enddatum;
   


    document.getElementById("formid").onsubmit = function () {     

        const post = {
            name : document.getElementById("name").innerHTML,
            email : document.getElementById("email").innerHTML,
            tel : document.getElementById("tel").innerHTML,
            prio : document.getElementById("prio").innerHTML,
            dienstleistung : document.getElementById("dienstleistung").innerHTML,
            startdatum : document.getElementById("erfassungsdatum").innerHTML,
            enddatum : document.getElementById("abholdatum").innerHTML
                    };
                    

        if(post.userId == "" || post.title == "" || post.body == ""){
            alert("Eingabe ist ungültig");
            return true;
        }
        
        
            fetch("http://localhost:5000/api/registration",{
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name:post.name,
                    email: post.email,
                    tel:post.tel,
                    priority:post.prio,
                    service:post.dienstleistung,
                    startdatum:post.startdatum,
                    enddatum:post.enddatum
                   })

            })
        .then((response)=>response.json())
            .then((json)=>finish(json))
            .catch((error)=>{
                alert("Leider gab es einen Fehler, bitte versuchen Sie es noch einmal");
                return false;
            }
            );
            return true;
            
            function finish(data)
        {
            return true;
        }

    }


}