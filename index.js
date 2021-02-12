// let projectNum = 0;

// function changeProject () {
    
//     let options = projectNum;

//     switch (options) {
//         case 0:
//             background = 'url(images/3.0screenshot.PNG)';
//             project1 = 'block';
//             project2 = 'none';
//             project3 = 'none';
//             project4 = 'none';
//         break;
//         case 1:
//             background = 'url(images/weatherdashboard.PNG)';
//             project1 = 'none';
//             project2 = 'block';
//             project3 = 'none';
//             project4 = 'none';
//         break;
//         case 2:
//             background = 'url(images/WorkDayScheduler.png)';
//             project1 = 'none';
//             project2 = 'none';
//             project3 = 'block';
//             project4 = 'none';
//         break;
//         case 3:
//             background = 'url(images/questions.PNG)';
//             project1 = 'none';
//             project2 = 'none';
//             project3 = 'none';
//             project4 = 'block';
//         break;
//         default: 
//             background = 'url(images/3.0screenshot.PNG)';
//             project1 = 'block';
//             project2 = 'none';
//             project3 = 'none';
//             project4 = 'none';
//     }

//     $('#body').css('background-image', background);
    
//     $('#project1').css('display', project1);
//     $('#project2').css('display', project2);
//     $('#project3').css('display', project3);
//     $('#project4').css('display', project4);


// }

// $('#next').click(function() {

//     if (projectNum===4) {
//         projectNum = 0;
//         changeProject();
//     }
//     else {
//         projectNum++
//         changeProject();
//     }

//     console.log(projectNum);
// });

// $('#previous').click(function() {

//     if (projectNum===0) {
//         projectNum = 3;
//         changeProject();
//     }
//     else {
//         projectNum--
//         changeProject();
//     }

//     console.log(projectNum);
// });

$('#quma').mouseover(function() {


    $('#initial').removeClass('base');
    $('#initial').addClass('none');

    $('#qumaDesc').removeClass('none');
    $('#qumaDesc').addClass('base');
});

$('#quma').mouseleave(function() {


    $('#initial').addClass('base');
    $('#initial').removeClass('none');

    $('#qumaDesc').addClass('none');
    $('#qumaDesc').removeClass('base');
});

$('#rpg').mouseover(function() {


    $('#initial').removeClass('base');
    $('#initial').addClass('none');

    $('#rpgDesc').removeClass('none');
    $('#rpgDesc').addClass('base');
});

$('#rpg').mouseleave(function() {


    $('#initial').addClass('base');
    $('#initial').removeClass('none');

    $('#rpgDesc').addClass('none');
    $('#rpgDesc').removeClass('base');
});

$('#ws').mouseover(function() {


    $('#initial').removeClass('base');
    $('#initial').addClass('none');

    $('#wsDesc').removeClass('none');
    $('#wsDesc').addClass('base');
});

$('#ws').mouseleave(function() {


    $('#initial').addClass('base');
    $('#initial').removeClass('none');

    $('#wsDesc').addClass('none');
    $('#wsDesc').removeClass('base');
});

$('#wd').mouseover(function() {


    $('#initial').removeClass('base');
    $('#initial').addClass('none');

    $('#wdDesc').removeClass('none');
    $('#wdDesc').addClass('base');
});

$('#wd').mouseleave(function() {


    $('#initial').addClass('base');
    $('#initial').removeClass('none');

    $('#wdDesc').addClass('none');
    $('#wdDesc').removeClass('base');
});

$('#jsquiz').mouseover(function() {


    $('#initial').removeClass('base');
    $('#initial').addClass('none');

    $('#jsquizDesc').removeClass('none');
    $('#jsquizDesc').addClass('base');
});

$('#jsquiz').mouseleave(function() {


    $('#initial').addClass('base');
    $('#initial').removeClass('none');

    $('#jsquizDesc').addClass('none');
    $('#jsquizDesc').removeClass('base');
});


