function searchFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById('search-foods');
    filter = input.value.toUpperCase();
    table = document.getElementById("food-table");
    tr = table.getElementsByTagName('tr');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
        a = tr[i].getElementsByTagName("td")[0];
        if(ifFunction(a, filter)){
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
};

function ifFunction(a, filter){
  return a.innerHTML.toUpperCase().indexOf(filter, 51) > -1
}

searchFunction();
