function submitFeedback () {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var mejl = document.getElementById("mejlFeedback").value;

    var provera = true;
    if((ime==null||ime=="") && (mejl==null||mejl=="")){
        alert("Unesite ime, prezime i email adresu!");
        provera = false;
    }else{
        if(ime==null || ime==""){
        alert("Unesite ime i prezime!");
        provera = false;
        }
        if(mejl==null || mejl==""){
        alert("Unesite email adresu!");
        provera = false;
    }

    if(provera == true){
        var r=confirm("Da li želite da poruka bude poslata?")
        if(r==true){
           alert("Vaša poruka je poslata!");
           window.location.reload();
        }
        }
        
    }

}