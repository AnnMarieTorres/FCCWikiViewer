$(document).ready(function(){
	$('#btn-search').click(function(){
		var searchTerm = $('#searchTerm').val();

		var url= 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm+'&format=json&callback=?';
		console.log(url);

		$.ajax({
			type:"GET",
			url: url,
			async: false,
			contentType:"application/javascript",
			dataType: "json",
			success: function(data){
				// gets the heading console.log(data[1][0]);
				// gets the description console.log(data[2][0]);
				// gets the link console.log(data[3][0]);
				for(var x = 0; x<data[1].length;x++){
					$('#results').prepend("<li><a href='"+data[3][x]+"' target='blank'>"+data[1][x]+"</a><p>"+data[2][x]+"</p></li>");
				}
			},
			error:(function(errorMessage){
				alert("error");
			})
		})
	});
});