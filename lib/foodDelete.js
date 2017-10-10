function deleteFood() {
  $('.delete-food-btn').on("click", function(e){
    $(this).closest('tr').remove()
    let id = $(this).closest('tr').find('td.food-id').text();
    deleteAjax(id);
  });
}
