$('#pe').mouseover(function() {

    $('#mn').removeClass('none');
    $('#sub').addClass('none');

    $('#pe').addClass('underline');
    $('#ts').removeClass('underline');
    $('#nw').removeClass('underline');
    $('#ed').removeClass('underline');

    $('#tsDesc').removeClass('base');
    $('#nwDesc').removeClass('base');
    $('#edDesc').removeClass('base');
    $('#tsDesc').addClass('none');
    $('#nwDesc').addClass('none');
    $('#edDesc').addClass('none');

    $('#peDesc').removeClass('none');
    $('#peDesc').addClass('base');
});

$('#ts').mouseover(function() {

    $('#mn').removeClass('none');
    $('#sub').addClass('none');

    $('#ts').addClass('underline');
    $('#pe').removeClass('underline');
    $('#nw').removeClass('underline');
    $('#ed').removeClass('underline');

    $('#peDesc').removeClass('base');
    $('#nwDesc').removeClass('base');
    $('#edDesc').removeClass('base');
    $('#peDesc').addClass('none');
    $('#nwDesc').addClass('none');
    $('#edDesc').addClass('none');

    $('#tsDesc').removeClass('none');
    $('#tsDesc').addClass('base');
});

$('#nw').mouseover(function() {

    $('#mn').removeClass('none');

    $('#nw').addClass('underline');
    $('#pe').removeClass('underline');
    $('#ts').removeClass('underline');
    $('#ed').removeClass('underline');

    $('#peDesc').removeClass('base');
    $('#tsDesc').removeClass('base');
    $('#edDesc').removeClass('base');
    $('#peDesc').addClass('none');
    $('#tsDesc').addClass('none');
    $('#edDesc').addClass('none');

    $('#nwDesc').removeClass('none');
    $('#nwDesc').addClass('base');

    $('#sub').removeClass('none');

    $('#dffa').addClass('underline');
    $('#dffaDesc').addClass('base');
});

$('#ed').mouseover(function() {

    $('#mn').removeClass('none');
    $('#sub').addClass('none');

    $('#ed').addClass('underline');
    $('#pe').removeClass('underline');
    $('#nw').removeClass('underline');
    $('#ts').removeClass('underline');

    $('#peDesc').removeClass('base');
    $('#nwDesc').removeClass('base');
    $('#tsDesc').removeClass('base');
    $('#peDesc').addClass('none');
    $('#nwDesc').addClass('none');
    $('#tsDesc').addClass('none');

    $('#edDesc').removeClass('none');
    $('#edDesc').addClass('base');
});

$('#dffa').mouseover(function() {

    $('#sub').removeClass('none');

    $('#dffa').addClass('underline');
    $('#fwpfa').removeClass('underline');
    $('#luciet').removeClass('underline');
    $('#nepfff').removeClass('underline');
    $('#quma').removeClass('underline');
    $('#tpoa').removeClass('underline');

    $('#fwpfaDesc').removeClass('base');
    $('#lucietDesc').removeClass('base');
    $('#nepfffDesc').removeClass('base');
    $('#qumaDesc').removeClass('base');
    $('#tpoaDesc').removeClass('base');
    $('#fwpfaDesc').addClass('none');
    $('#lucietDesc').addClass('none');
    $('#nepfffDesc').addClass('none');
    $('#qumaDesc').addClass('none');
    $('#tpoaDesc').addClass('none');

    $('#dffaDesc').removeClass('none');
    $('#dffaDesc').addClass('base');
});

$('#dffa').mouseleave(function() {

    $('#dffaDesc').addClass('none');
    $('#dffaDesc').removeClass('base');
    $('#dffa').removeClass('underline');

    $('#sub').addClass('none');
});

$('#fwpfa').mouseover(function() {

    $('#sub').removeClass('none');

    $('#fwpfa').addClass('underline');
    $('#dffa').removeClass('underline');
    $('#luciet').removeClass('underline');
    $('#nepfff').removeClass('underline');
    $('#quma').removeClass('underline');
    $('#tpoa').removeClass('underline');

    $('#dffaDesc').removeClass('base');
    $('#lucietDesc').removeClass('base');
    $('#nepfffDesc').removeClass('base');
    $('#qumaDesc').removeClass('base');
    $('#tpoaDesc').removeClass('base');
    $('#dffaDesc').addClass('none');
    $('#lucietDesc').addClass('none');
    $('#nepfffDesc').addClass('none');
    $('#qumaDesc').addClass('none');
    $('#tpoaDesc').addClass('none');

    $('#fwpfaDesc').removeClass('none');
    $('#fwpfaDesc').addClass('base');
});

$('#fwpfa').mouseleave(function() {

    $('#fwpfaDesc').addClass('none');
    $('#fwpfaDesc').removeClass('base');
    $('#fwpfa').removeClass('underline');

    $('#sub').addClass('none');
});

$('#luciet').mouseover(function() {

    $('#sub').removeClass('none');

    $('#luciet').addClass('underline');
    $('#dffa').removeClass('underline');
    $('#fwpfa').removeClass('underline');
    $('#nepfff').removeClass('underline');
    $('#quma').removeClass('underline');
    $('#tpoa').removeClass('underline');

    $('#dffaDesc').removeClass('base');
    $('#fwpfaDesc').removeClass('base');
    $('#nepfffDesc').removeClass('base');
    $('#qumaDesc').removeClass('base');
    $('#tpoaDesc').removeClass('base');
    $('#dffaDesc').addClass('none');
    $('#fwpfaDesc').addClass('none');
    $('#nepfffDesc').addClass('none');
    $('#qumaDesc').addClass('none');
    $('#tpoaDesc').addClass('none');

    $('#lucietDesc').removeClass('none');
    $('#lucietDesc').addClass('base');
});

$('#luciet').mouseleave(function() {

    $('#lucietDesc').addClass('none');
    $('#lucietDesc').removeClass('base');
    $('#luciet').removeClass('underline');

    $('#sub').addClass('none');
});

$('#nepfff').mouseover(function() {

    $('#sub').removeClass('none');

    $('#nepfff').addClass('underline');
    $('#dffa').removeClass('underline');
    $('#luciet').removeClass('underline');
    $('#fwpfa').removeClass('underline');
    $('#quma').removeClass('underline');
    $('#tpoa').removeClass('underline');

    $('#dffaDesc').removeClass('base');
    $('#lucietDesc').removeClass('base');
    $('#fwpfaDesc').removeClass('base');
    $('#qumaDesc').removeClass('base');
    $('#tpoaDesc').removeClass('base');
    $('#dffaDesc').addClass('none');
    $('#lucietDesc').addClass('none');
    $('#fwpfaDesc').addClass('none');
    $('#qumaDesc').addClass('none');
    $('#tpoaDesc').addClass('none');

    $('#nepfffDesc').removeClass('none');
    $('#nepfffDesc').addClass('base');
});

$('#nepfff').mouseleave(function() {

    $('#nepfffDesc').addClass('none');
    $('#nepfffDesc').removeClass('base');
    $('#nepfff').removeClass('underline');

    $('#sub').addClass('none');
});

$('#quma').mouseover(function() {

    $('#sub').removeClass('none');

    $('#quma').addClass('underline');
    $('#dffa').removeClass('underline');
    $('#luciet').removeClass('underline');
    $('#fwpfa').removeClass('underline');
    $('#nepfff').removeClass('underline');
    $('#tpoa').removeClass('underline');

    $('#dffaDesc').removeClass('base');
    $('#lucietDesc').removeClass('base');
    $('#fwpfaDesc').removeClass('base');
    $('#nepfffDesc').removeClass('base');
    $('#tpoaDesc').removeClass('base');
    $('#dffaDesc').addClass('none');
    $('#lucietDesc').addClass('none');
    $('#fwpfaDesc').addClass('none');
    $('#nepfffDesc').addClass('none');
    $('#tpoaDesc').addClass('none');

    $('#qumaDesc').removeClass('none');
    $('#qumaDesc').addClass('base');
});

$('#quma').mouseleave(function() {

    $('#qumaDesc').addClass('none');
    $('#qumaDesc').removeClass('base');
    $('#quma').removeClass('underline');

    $('#sub').addClass('none');
});

$('#tpoa').mouseover(function() {

    $('#sub').removeClass('none');

    $('#tpoa').addClass('underline');
    $('#dffa').removeClass('underline');
    $('#luciet').removeClass('underline');
    $('#fwpfa').removeClass('underline');
    $('#nepfff').removeClass('underline');
    $('#quma').removeClass('underline');

    $('#dffaDesc').removeClass('base');
    $('#lucietDesc').removeClass('base');
    $('#fwpfaDesc').removeClass('base');
    $('#nepfffDesc').removeClass('base');
    $('#qumaDesc').removeClass('base');
    $('#dffaDesc').addClass('none');
    $('#lucietDesc').addClass('none');
    $('#fwpfaDesc').addClass('none');
    $('#nepfffDesc').addClass('none');
    $('#qumaDesc').addClass('none');

    $('#tpoaDesc').removeClass('none');
    $('#tpoaDesc').addClass('base');
});

$('#tpoa').mouseleave(function() {

    $('#tpoaDesc').addClass('none');
    $('#tpoaDesc').removeClass('base');
    $('#tpoa').removeClass('underline');

    $('#sub').addClass('none');
});