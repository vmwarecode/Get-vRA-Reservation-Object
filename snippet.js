// VMware vRealize Orchestrator action sample
//
// Get Reservation Object from Reservation Name as String.
// 
// For vRO/VRA 7.0+
//
// Action Inputs:
// resName - string - Reservation Name 
// Selva Jaganathan VMware Inc.
// Return type: vCAC:Reservation - Reservation Object
var myReservation = Server.findAllForType("VCAC:Reservation", null);



for each(reservation in myReservation) {

 if (reservation.HostReservationName == resName) {
  reservationObject = reservation;
 }
}

return reservationObject;