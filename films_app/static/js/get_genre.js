$(document).ready(function() {
    $('.filter').change(function() {
        let genres = [];
        $('.filter:checked').each(function() {
            genres.push(this.id.toLowerCase());
        });

        console.log("Зараз вибранний жанр", genres);

        $('.film').each(function() {
            let filmGenres = $(this).data('genres').split(',');
            let show = false;

            for (let genre of genres) {
                if (filmGenres.includes(genre)) {
                    show = true;
                    break;
                }
            }

            if (show) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});