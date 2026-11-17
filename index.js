const zoneDeTest = document.getElementById("zone-de-test");
console.log("test");
document.addEventListener("DOMContentLoaded", function() { 
    let fd = new FormData();

    fd.append('name', 'Dina');
    fd.append('id', '1234');
    fd.append('created_dt', Date.now());
    console.log(Array.from(fd));
})
// zoneDeTest.