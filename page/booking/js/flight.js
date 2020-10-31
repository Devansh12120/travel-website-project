function availflight() {
    var source = document.flight.source;
    var destination= document.flight.destination;
    var departing= document.flight.departing;
    var arrival= document.flight.arrival;    
    var patt = /[a-zA-Z]{3,12}/;
	if (source.value=="" && destination.value=="" && departing.value=="" && arrival.value=="") {
		alert("fill the required details");
		source.style.border="3px solid blue"
		destination.style.border="3px solid blue"
		departing.style.border="3px solid blue"
		arrival.style.border="3px solid blue"
		return false;
    }
    if(!patt.test(source) || !patt.test(destination) ){
        if (!patt.test(source)) {
            source.style.border="3px solid blue"
            alert("Wrong source format \n Sample source NewDelhi ");
        } else {
            destination.style.border="3px solid blue"
            alert("Wrong source format \n Sample source NewDelhi ");
        }
        
		destination.style.border="3px solid blue"
        
        return false;  
    }
    if (source.value== destination.value) {
        source.style.border="3px solid blue"
		destination.style.border="3px solid blue"
        alert("source and destination cannot be same");
        return false;
    }
    if(departing.value==arrival.value){
        departing.style.border="3px solid blue"
        arrival.style.border="3px solid blue"
        alert("Departure date and Returning date cannot be same");
		return false;
    }
	 else {
		alert("details submitted successfully\n looking for flights")
		return true;
    }
    

}