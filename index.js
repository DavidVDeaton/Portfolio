function changeTheme () {
    
    var options = Math.floor(Math.random()*3)

    switch (options) {
        case 0:
            colordark = 'black';
            colorlight = 'white';
        break;
        case 1:
            colordark = 'purple';
            colorlight = 'orange';
        break;
        case 2:
            colordark = 'maroon';
            colorlight = 'gold';
        break;
    }

    $('#body').css('background-color', colordark);
    $('.navbar').css({'color': colordark, 'background-color': colorlight});
    $('.btn').css({'color': colordark, 'border-color': colordark});
    $('.content').css({'color': colorlight, 'background-color': colorlight});
    $('.dark').css('color', colordark);
    $('.card').css('background-color', colordark);
    $('#resume').css('color', colordark);
    $('.gold-border').css('border', colordark);
    $('.gold').css('color', colordark);
    $('.gold-contact').css('color', colordark);
    $('.footer').css({'background-color': colordark, 'color': colorlight});
    $('.light').css('color', colorlight);

}

$('#david').click(function() {
    changeTheme();
});