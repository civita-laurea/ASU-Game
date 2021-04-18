$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(products, function(index, product ) {

                // string += '<tr><td>'+(index+1)+'</td><td>'+product['_id']+'</td><td>'+product['name']+'</td><td>'+product['category']+'</td><td>'+product['price']+'</td><td>'+product['manufacturer']+'</td></tr>';
                string += '<tr><td>'+(index+1)+'</td><td>'+product['question']+'</td><td>'+product['option1']+'</td><td>'+product['option2']+'</td><td>'+product['option3']+'</td><td>'+product['option4']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });
 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 