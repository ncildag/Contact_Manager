/*
1.  kisikaydi fonksiyonu olacak.
    bu fonksiyon icine isim soyisim tel ve mailleri alip kart seklinde biriktirecek

2.  kisikaydi fonksiyonu elindeki bilgileri kayitlar fonksiyonuna iletecek bilgiler burada tutulacak.



*/

function getData(){
    
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let email = $('#email').val();
    let email2 =  $('#email2').val();
    let email3 =  $('#email3').val();
    let phoneNumber =  $('#phoneNumber').val();
    let phoneNumber2 =  $('#phoneNumber2').val();
    let phoneNumber3 =  $('#phoneNumber3').val();

    return {
        firstName, lastName, 
        email,
        email2, email3, 
        phoneNumber, phoneNumber2,phoneNumber3
    };
}




function addContactToList(oneContact){

    // localStorage kayit yapacagiz. //

    let listStringi=localStorage.getItem("listOfContact");
    let list=JSON.parse(listStringi);
    if(list==undefined){
        list=new Array ();
    }

    list.push(oneContact);
    listStringi=JSON.stringify(list);
    localStorage.setItem("listOfContact",listStringi);

    return list;

}
/*
firstName = data.firstName;
lastName=data.lastName;
email=data.email;
email2=data.email2;
email3=data.email3;
phoneNumber=data.phoneNumber;
phoneNumber2=data.phoneNumber2;
phoneNumber3=data.phoneNumber3;


for(let i=0; i<data.contactList; i++){
    /* let table = 
        makeTable(veriler.biriniciCarpanMinimum,
                        veriler.biriniciCarpanMaximum,
                        veriler.ikinciCarpanMinimum,
                        veriler.ikinciCarpanMaximum);
    alistirmaListesi.push(alistirma);
}

return alistirmaListesi;
}
  



function saveContact(data,getDataFromInput){
    let contactBox = [];
    for(let i=0; i<liste.length; i++){
        contactBox.push(`
        
          
            
        `);
    }

    $('tbody').html(contactBox.join(""));
}


 /* BURADA NASIL BIR DUZENLEME YAPACAGIZ !!!

    for(let i=0; i<dataOnePerson.toplamAlistirmaSayisi; i++){
        let alistirma = 
            alistirmaOlustur(veriler.biriniciCarpanMinimum,
                            veriler.biriniciCarpanMaximum,
                            veriler.ikinciCarpanMinimum,
                            veriler.ikinciCarpanMaximum);
        alistirmaListesi.push(alistirma);
    }

    return alistirmaListesi;
}

*/





/*

let myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (let [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
// 0 = zero
// 1 = one





function generateData(contactBox, adresDefteri){

    let dataOnePerson = [

        {label: "Name", data: adresDefteri.firstName},
        {label: "Surname", data: adresDefteri.lastName},
        {label: "Mail", data: adresDefteri.email},
        {label: "Mail_2", data: adresDefteri.email2},
        {label: "Mail_3", data: adresDefteri.email3},
        {label: "Telephone", data: adresDefteri.telephone},
        {label: "Telephone_2", data: adresDefteri.telephone2},
        {label: "Telephone_3", data: adresDefteri.telephone3},
        
    ];

    let rows = [];
    for(let i=0; i<dataOnePerson.length; i++){
        rows.push(`
            <tr>
                
                <td>${dataOnePerson[i].data}</td>
            </tr>
        `);
    }

    $('#current_result table').html(rows.join(""));
    document.getElementById('tbody').showModal();

    return dataOnePerson;
}

*/