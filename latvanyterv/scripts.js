//let imagesData = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];
let imagesData =[
data1 = {
    photo:'images/dog-6527479_640.jpg',
    title: 'Kutya',
    description: 'A szabadban eltöltött idő nagyon fontos. Jól látható mennyire élvezi ez a kutyus is.'
},
$('#photo').attr('src', data1.photo),

data2 ={
    photo: 'images/lake-6526995_640.jpg',
    title:'Tó',
    description: 'Csillogó, átlátszó vize felfedezésre hívja a túrázókat.'
},
$('#photo').attr('src', data2.photo),

data3 ={
    photo: 'images/siberian-cat-6465485_640.jpg',
    title: 'Szibériai macska',
    description: 'Az erdő is tartogat meglepetéseket. Még a macskák sem tudnak ellenálni.'
},
$('#photo').attr('src', data3.photo),

data4 ={
    photo: 'images/ural-owl-6529375_640.jpg',
    title: 'Bagoly a fák között',
    description: 'Nyugodt pihenő idejét tölti. Tudomást sem vesz az alatta zajló eseményekről.'
},
$('#photo').attr('src', data4.photo),

data5 ={
    photo: 'images/squirrel-6530649_640.jpg',
    title: 'Mókus',
    description: 'Fő az óvatosság, egy kis napozás előtt.'
},
$('#photo').attr('src', data5.photo),

data6 ={
    photo: 'images/zakynthos-6514351_640.jpg',
    title: 'Kilátás a tengerre',
    description: 'Egy csodás látvány, ahogy a horizont eggyé válik a tengerrel.'
},
$('#photo').attr('src', data6.photo)
]

/*$('#photo-title').attr('src', data1.photo-title)
$('#photo-description').attr('src', data1.photo-description)*/

let currentPhoto= 0;
$('#photo').attr('src', imagesData[0].photo);

let current = 0;

let elemek =""
for (let i in imagesData) {
    elemek +=i + ":" + imagesData[i] + "<br/>";
}

let loadcurrent=(photonumber) =>{
   $('#photo').attr('src', imagesData[0].photo)
}

$('#previous').click(() =>{
    if(current > 1) {
        current--;
    }
    loadcurrent(current);
})

$('#next').click(() =>{
    if(current < 6){
        current++;
    }
    loadcurrent(current);
})

loadcurrent(current);

let data =[
    data1 = {
        photo:'images/dog-6527479_640.jpg',
        title: 'Kutya',
        description: 'A szabadban eltöltött idő nagyon fontos. Jól látható mennyire élvezi ez a kutyus is.'
    },
    $('#elso').attr('src', data1.photo),
    
    data2 ={
        photo: 'images/lake-6526995_640.jpg',
        title:'Tó',
        description: 'Csillogó, átlátszó vize felfedezésre hívja a túrázókat.'
    },
    $('#masodik').attr('src', data2.photo),
    
    data3 ={
        photo: 'images/siberian-cat-6465485_640.jpg',
        title: 'Szibériai macska',
        description: 'Az erdő is tartogat meglepetéseket. Még a macskák sem tudnak ellenálni.'
    },
    $('#harmadik').attr('src', data3.photo),
    
    data4 ={
        photo: 'images/ural-owl-6529375_640.jpg',
        title: 'Bagoly a fák között',
        description: 'Nyugodt pihenő idejét tölti. Tudomást sem vesz az alatta zajló eseményekről.'
    },
    $('#negyedik').attr('src', data4.photo),
    
    data5 ={
        photo: 'images/squirrel-6530649_640.jpg',
        title: 'Mókus',
        description: 'Fő az óvatosság, egy kis napozás előtt.'
    },
    $('#otodik').attr('src', data5.photo),
    
    data6 ={
        photo: 'images/zakynthos-6514351_640.jpg',
        title: 'Kilátás a tengerre',
        description: 'Egy csodás látvány, ahogy a horizont eggyé válik a tengerrel.'
    },
    $('#hatodik').attr('src', data6.photo)
]

data.forEach((data1, index) =>{
   /* $('#container').append(`<div class="box" data-index = "${index}"> ${item}(data-index = "${index}"</div>)`);*/
    $('.kep').click((Event) =>{
        let indexClicked = $(Event.target).attr('data-index');
        $('#clicked').text(data[indexClicked]);
    })
})
