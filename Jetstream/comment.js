window.onload = function(){

    document.getElementById("formkontakt").onsubmit = function (e) {
        e.preventDefault()

        const post = {
            email : document.getElementById("email1").value,            
            mitteilung : document.getElementById("mitteilung1").value
                    };                    

        //Kontrolliert ob das Eingabefeld lehr ist.
        if(post.email == "" || post.mitteilung == ""){
            alert("Eingabe ist ungültig");
            return true;
        }
        
        //Die Mitteilung wird als create_date übermittelt. Mit dem neuen Backend können wir keine eigenen mehr hinzufügen.
            fetch("http://localhost:5000/api/registration",
            {
                method: "POST",
                headers: {
                    "Accept" : "application/json",
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name: null,
                    email: post.email,
                    priority: null,           
                    service:null,
                    create_date:post.mitteilung,
                    
                })
            }   
                )
        .then((response)=>response.json())
            .then((json)=>finish(json))
            .catch((error)=>
            //Wenn die Kommunikation mit dem Server NICHT erfolgreich war
            {
                document.getElementById("negmitteilung").innerHTML = `<input type="text" pattern="[A-Za-z]*" class="form-control" value="Leider gab es einen Fehler, bitte versuchen Sie es später noch einmal!" id="negmitteilung" required onchange="checkAllFieldsFilled()">`
                document.getElementById("email1").value =    ""        
                document.getElementById("mitteilung1").value = ""
                return false;
            }
            );
            return true;
            //Wenn die Kommunikation mit dem Server erfolgreich war            
            function finish()
            {                 
                document.getElementById("mitteilung").innerHTML = `<input class="form-control" style="width:100%" value="Ihre Mitteilung wurde erfolgreich übermittelt."type="text">`
                return true;
            }

    }


}