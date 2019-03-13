$('button').on('click', () => {
    var person = $(this).attr('data-person');

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

            var gifImage = $('<img>');
            gifImage.attr('src', results[i].images.fixed_height_still.url);
            console.log(gifImage.attr('src', results[i].images.fixed_height_still.url));
            resultsDiv.append(titleP);
            resultsDiv.append(ratingP);
            resultsDiv.append(gifImage);

            $('#gifs-position').prepend(resultsDiv);
        }
    })
});