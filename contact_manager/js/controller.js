/*
 Name: Contact Manager
 Description: An app for aintaining contacts effectively


 UI Interactions:
 - Forma bilgiler giriyor.
 - "Yeni ekle" butonuna basinca form yeni girdiye hazir hale getirilecek
 - Kullanici arama butonuna istedigi aram kriterini girecek ve arama sonunda ilgili sonuclar tabloda gösterilecek
    - Arama sadece "firstname" ve "lastname" üzerinden yapilacak
 - "kaydet" butonu ile girilen bilgiler tabloya eklenir.
    - "validation" Form dogrulama kaydetme öncesinde yapilmali.
 - "sil" butonu tetiklendiginde contact tablodan kaldirilacak
    - Silme islemi öncesi islem icin teyid istenecek.
 - Tablo satirina tiklandiginda o satirin ihtiva ettigi bilgi formda gösterilecek.
 - Input fieldlerin sag tarafinda bulunan arti iconu yeni bir input alani eklenmesini tetikler (email, phone, address).
 - Table header larina basildiginda o headera göre siralama yapilabilmesi lazim.
*/


$(document).ready(() => {
    
    $("form").submit(false);
    
    /*let data=getDataFromInput();*/

    $("#kaydet").click(function () {

        // Grililen inputlari al BooksOfContact'a ekle. //

        let oneContact=getData();

        
        

       // $("#firstName").val(); //
        
        let list=addContactToList(oneContact);

        renderList(list);

        /*

        function addContactToList(listOfContact){

            let firstName = $('#firstName').val();
            let lastName = $('#lastName').val();
            let email = $('#email').val();
            let email2 =  $('#email2').val();
            let email3 =  $('#email3').val();
            let phoneNumber =  $('#phoneNumber').val();
            let phoneNumber2 =  $('#phoneNumber2').val();
            let phoneNumber3 =  $('#phoneNumber3').val();
        
            return firstName,lastName,email,email2,email3,phoneNumber,phoneNumber2,phoneNumber3 
        
        };
        */


    });

    $("#yeniKayit").click(function () {

        // Butona tiklanildiginda sagtarafta bulunan formu ac. //

    });

    $("#sil").click(function () {

        // Butona tiklanildiginda contacti sil. //

    });

    /**
 * Her Girdiyi index.html de ki yere basacak.
 * @param {*} booksOfContact 
 */
function renderList(booksOfContact){


    /*
    1.
    let oneContactList=[];
    for(let i=0;i<booksOfContact.length i++){
        oneContactList.push(`
            <tr>
                <td>${booksOfContact[i]}</td>
            </tr>`


        );
    }
    
    2.
    let html=booksOfContact.reduce((cum,oneContact)=> cum+`<tr>
                <td>${booksOfContact[i]}</td>
            </tr>`); 
    html icine html koyabilirsiniz.*/



    let oneContactList=
    booksOfContact.map(oneContact => `<tr>
        <td>${oneContact.firstName}</td>
        <td>${oneContact.lastName}</td>
        <td>${oneContact.email}</td>
        <td>${oneContact.telephoneNumber}</td>
        <td>${oneContact.telephoneNumber2}</td>
        <td>${oneContact.telephoneNumber3}</td>
        <td>${oneContact.email2}</td>
        <td>${oneContact.email3}</td>
    </tr>`);

$("#tbody").html(oneContactList.join(""));

}


    

})