emails = [
    "eliana.abate2@gmail.com",
    "giorgio.andrei2000@gmail.com",
    "davidebortoloni@gmail.com",
    "simonefilippobilardo@gmail.com",
    "bouhamla.rabab@gmail.com",
    "c.buoncompagni.98@gmail.com",
    "marilena.cantisani97@gmail.com",
    "michele.carboneetlab@gmail.com",
    "salvatorecascone8@gmail.com",
    "marco.che88@gmail.com",
    "mirkochiappori@gmail.com",
    "francesco.cina04@gmail.com",
    "cristinacorrado93@gmail.com",
    "simone.desantislt@gmail.com",
    "federica.dichio7@gmail.com",
    "simone.dimuro@gmail.com",
    "alefagi@gmail.com",
    "rocco.franchini1@gmail.com",
    "valentinafrascarg@gmail.com",
    "girottiriccardo1998@gmail.com",
    "janko.sergio1998@gmail.com",
    "damianolandi01@gmail.com",
    "leonardolocatelli98@gmail.com",
    "alessandromerenda22@gmail.com",
    "riccardopagni99@gmail.com",
    "pasinatosara.sp@gmail.com",
    "danielebooleanpipino@gmail.com",
    "manuel.pirro@gmail.com",
    "giuseppepisani2@gmail.com",
    "cpisanu96@gmail.com",
    "padqualeraso@gmail.com",
    "resminiloris@gmail.com",
    "edoardo.ruffi@gmail.com",
    "mario.alex.vivsenco@gmail.com",
    "michalpawelwadowski@gmail.com"
];
var userEmail = prompt("Inserire la propria Email", "esempio@email.com").trim();

if (userEmail.length <= 0) {
    alert("È obbligatorio inserire la propria Email");
}
else {
    var check = false;
    for (var i = 0; i < emails.length; i++) {
        if (emails[i] == userEmail) {
            check = true;
        }
    }
    if (check) {
        alert("Benvenuto nel nostro sito completamente vuoto");
    }
    else {
        alert("TU. NON PUOI. PASSARE!");
    }
}