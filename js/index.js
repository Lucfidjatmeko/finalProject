// console.log("aku terpanggil");



// exampleInputEmail1
function handleSubmit(event) {
    event.preventDefault()    // untuk matiiin kebiasaan dari submit
    // if (document.getElementById("nama").value = ""){
    //     const valueNameUser = "Masukan nama anda"

    // }
   
    const valueNameUser = document.getElementById("nama").value
    const valuepesan = document.getElementById("pesan").value
    

    const fullNameUser = document.getElementById("nama-pengunjung").innerHTML = valueNameUser
    const fullpesan = document.getElementById("isi-pesan").innerHTML = valuepesan
}



// js untuk porto 
// $(function(){
//     $(".grid").masonry({ itemSelector: ".grid-item" });
    
//     $(".filtering").on("click", "span", function () {
//         var a = $(".gallery").isotope({});
//         var e = $(this).attr("data-filter");
//         a.isotope({ filter: e });
//     });
//     $(".filtering").on("click", "span", function () {
//         $(this).addClass("active").siblings().removeClass("active");
//     });
// }) 

// end js porto 

// js untuk mansory 
// document.getElementById("nama-saya").innerHTML = "Ari Heryawan"
// id="nama-saya"
document.getElementById("kode-promo").innerHTML = "Kode Promo : arroy"

let today = new Date(); // Membuat objek Date untuk tanggal hari ini
const monthsOfYearID = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

 // Mengambil hari, bulan, dan tahun
        let day = today.getDate().toString().padStart(2, '0'); // Menambahkan 0 di depan jika hari < 10
        let month = monthsOfYearID[today.getMonth()]; // Mendapatkan nama bulan (dengan array)
        let year = today.getFullYear(); // Mengambil tahun 4 digit


// let day = today.getDate().toString().padStart(2, '0');
document.getElementById("tanggal").innerHTML = day
document.getElementById("bulan").innerHTML = month



jQuery('#portfolio').mixItUp({  

    selectors: {
      target: '.tile',
      filter: '.filter',
      sort: '.sort-btn'
    },
    
        animation: {
        animateResizeContainer: false,
        effects: 'fade scale'
      }
  
  });





  
// js untuk mansory END

// js logo slider 

// logo slider js end 

