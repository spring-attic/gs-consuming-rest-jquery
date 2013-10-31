$(function(){
    $.ajax({
        url: "/greeting",
        success: function(data) {
           $('#greeting-id').append(data.id);
           $('#greeting-content').append(data.content);
        }
    });
});
