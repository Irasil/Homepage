window.onload = function hey(){

    //Schaut ob etws in der URL steht und wählt die entsprechende Dienstleistung aus
    var queryString = window.location.search
    if(queryString != ""){
    const urlParams = new URLSearchParams(queryString);
    const dienstleistung = urlParams.get("dienstleistung")
    document.getElementById("dienstleistung").value = dienstleistung;
    console.log(dienstleistung)
    }else{
        document.getElementById("dienstleistung").value = "Kleiner Service"
    }

    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const name = document.getElementById('name');
    const vorname = document.getElementById('vorname');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const prio = document.getElementById('prio');
    const dienstleistung = document.getElementById('dienstleistung');
    let startdatum = new Date();
    let enddatum = new Date()
    let container = [name.value, vorname.value, email.value, tel.value]
    let feedbacks_label = ["name_feedback", "vorname_feedback", "email_feedback", "tel_feedback"]
    let feedbacktexte = ["Bitte geben Sie einen gültigen Namen ein.", "Bitte geben Sie einen gültigen Vornamen ein.", "Bitte geben Sie eine gültige Emailadresse an.", "Bitte geben Sie eine gültige Telefonnummer ein (nur Zahlen, keine Leerzeichen)"]
    

  
    //Datum Anzeige je nach Prio es werden nur Arbeitstage gezählt
   function countDays(noOfDaysToAdd) {
    var startDate = new Date;
    startDate = new Date
    var endDate = "", count = 0;
    while(count < noOfDaysToAdd){
        endDate = new Date(startDate.setDate(startDate.getDate() + 1));
        if(endDate.getDay() != 0 && endDate.getDay() != 6){
        count++;
        }    
    }
    enddatum = endDate;
    return (endDate);
}


    //Anzeige der Abholdaten der jeweiligen Prio
    let tief = countDays(12); 
    let standart = countDays(7);
    let express = countDays(5)
    
    document.getElementById("tief").innerHTML = tief.toLocaleDateString('de-DE', options)
    document.getElementById("standart").innerHTML = standart.toLocaleDateString('de-DE', options)
    document.getElementById("express").innerHTML = express.toLocaleDateString('de-DE', options)
    
    
  
    // Überprüft ob die Feldern name, vorname, email und tel ausgefüllt sind. Wenn ja wird der Bestell-Button enabled
    checkAllFieldsFilled = function () {
        container = [name.value, vorname.value, email.value, tel.value, prio.value]
        if (container[0].length > 0 && container[1].length > 0 && container[2].length > 0 && container[3].length > 0 && container[4].length > 0) {
            document.getElementById("btn-bestellen").disabled = false;
        } else {
            document.getElementById("btn-bestellen").disabled = true;
        }
    }

    // Checkt ob Sonderzeichen vorhanden
    function containsNoSpecialChars(str) {
        const specialChars = /[`1234567890 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return !specialChars.test(str);
    }  
    
    
    
    // Klick auf Bestell-Button -----------------------------------------------------
    document.getElementById("btn-bestellen").onclick = function varInURL() {
        var feedbacks = [true,true,true,true]
        for (let i = 0; i < container.length; i = i + 1) {
            if (i < 2) {
                if(container[i] == ""){
                    feedbacks[i]  = false;}else
                {feedbacks[i] = (containsNoSpecialChars(container[i]))}
            }
            if (i == 2) {
                feedbacks[i] = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
            }

            if (i == 3) {
                feedbacks[i] = /^[0-9]+$/.test(tel.value)
            }
            
        }
    //Kontrolliert die Prio
        if (prio.value == "Tief") {            
            countDays(12)          
        } else if (prio.value == "Standart") {           
            countDays(7)       
        } else {           
            countDays(5)     
        }
      
    
    //Schickt Feedback und disablet denn Bestellbutton, wenn ein Feld nicht richtig Ausgefüllt wurde   
       for (let i = 0; i < feedbacks.length; i = i + 1) {
            if (feedbacks[i] == false) {
                document.getElementById(feedbacks_label[i]).innerHTML = feedbacktexte[i]
                document.getElementById("btn-bestellen").disabled = true;
            } else {
                document.getElementById(feedbacks_label[i]).innerHTML = " "      
            }
        }

        var filter = 0
        for (let i = 0; i < feedbacks.length; i = i + 1){
            filter = filter + feedbacks[i]
        }

    //Die Daten werden erst weitergeleitet wenn alle Inputfelder richtig ausgefült wurden
        if (filter == 4) {
            
            startdatum = startdatum.toLocaleDateString('de-DE', options);
            enddatum = enddatum.toLocaleDateString('de-DE', options);
            window.location = `bestaetigen.html?name=${name.value}&vorname=${vorname.value}&email=${email.value}&tel=${tel.value}&prio=${prio.value}&dienstleistung=${dienstleistung.value}&startdatum=${startdatum}&enddatum=${enddatum}`;
        }
    }    
}