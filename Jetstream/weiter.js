 //Damit wird der richtige Parameter für die Dienstleistung weitergegeben.
 
 function bestellen (knopf){
        

            switch (knopf){

            case "bindung":
                const bindung = "Bindung montieren und einstellen"
                window.location = `bestellen.html?dienstleistung=${bindung}`
                break;

            case "wachs":
                const wachs = "Heisswachsen"
                window.location = `bestellen.html?dienstleistung=${wachs}`;
                break;

            case "fell":
                const fell = "Fell zuschneiden";
                window.location = `bestellen.html?dienstleistung=${fell}`
                break;
            case "gross":
                const gross = "Grosser Service"
                window.location = `bestellen.html?dienstleistung=${gross}`
                break;

            case "klein":
                const klein = "Kleiner Service"
                windows.location = `bestellen.html?dienstleistung=${klein}`
                break;
            case "renn":
                const renn = "Rennski-Service"
                window.location = `bestellen.html?dienstleistung=${renn}`

            default:
                break; 
            }    
     
    }
