$('.btn-info').on('click', function () {
    $('#gifs-position').empty();
    var person = $(this).attr('data-person');
    console.log("obj",$(this));

    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=oGdqz9lhb8Gna1H0BfErSk2D3JPTCwRs&limit=15";

    $.ajax({
        url: giphyUrl,
        method: 'GET'
    }).then(function (gifData) {
        var results = gifData.data;

        for (let i = 0; i < results.length; i++) {
            var resultsDiv = $('<div>');

            var titleP = $('<p>').text(results[i].title);

            var ratingP = $('<p>').text("Rating: " + results[i].rating);

            var gifImage = $('<img id = gif data-state = still>');
            gifImage.attr('src', results[i].images.fixed_height_still.url);
            console.log(gifImage.attr('src', results[i].images.fixed_height_still.url));
            resultsDiv.append(titleP);
            resultsDiv.append(ratingP);
            resultsDiv.append(gifImage);

            $('#gifs-position').prepend(resultsDiv);

            $('#gif').on('click', function () {
                var state = $(this).attr('data-state');
                if (state === 'still') {
                    $(this).attr('src', results[i].images.fixed_height.url);
                    $(this).attr('data-state', 'animate');
                }
                else {
                    $(this).attr('src', results[i].images.fixed_height_still.url);
                    $(this).attr('data-state', 'still');
                }
            })
        }
    })
})
$('.mb-2').on('click', function (event) {
    event.preventDefault();

    var input = $('#gifAdd').val();
    console.log(input);
    var buttonAddition = $('<button type="button" class="btn btn-info">').attr('data-person', input);
    buttonAddition.text(input);
    $('.button-positioning').append(buttonAddition);
    $('.btn-info').on('click', function () {
        $('#gifs-position').empty();
        var person = $(this).attr('data-person');
        console.log("obj",$(this));
    
        var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=oGdqz9lhb8Gna1H0BfErSk2D3JPTCwRs&limit=15";
    
        $.ajax({
            url: giphyUrl,
            method: 'GET'
        }).then(function (gifData) {
            var results = gifData.data;
    
            for (let i = 0; i < results.length; i++) {
                var resultsDiv = $('<div>');
    
                var titleP = $('<p>').text(results[i].title);
    
                var ratingP = $('<p>').text("Rating: " + results[i].rating);
    
                var gifImage = $('<img id = gif data-state = still>');
                gifImage.attr('src', results[i].images.fixed_height_still.url);
                console.log(gifImage.attr('src', results[i].images.fixed_height_still.url));
                resultsDiv.append(titleP);
                resultsDiv.append(ratingP);
                resultsDiv.append(gifImage);
    
                $('#gifs-position').prepend(resultsDiv);
    
                $('#gif').on('click', function () {
                    var state = $(this).attr('data-state');
                    if (state === 'still') {
                        $(this).attr('src', results[i].images.fixed_height.url);
                        $(this).attr('data-state', 'animate');
                    }
                    else {
                        $(this).attr('src', results[i].images.fixed_height_still.url);
                        $(this).attr('data-state', 'still');
                    }
                })
            }
        })
    })
});
