function strikeThrough() {
    const li = document.querySelector('li');
    li.style.textDecoration = 'line-through';
}
strikeThrough();

function imageSetter(id, url) {
    const starting = document.querySelector(id)
    starting.src = url;
}
imageSetter('#image-1', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg');

imageSetter('#image-2', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg');

imageSetter('#image-3', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg');

function remover() {
    document.querySelector('#arguments li').remove();
}
remover();

remover();

function textSize(id, size) {
    const catcher = document.querySelector(id).style.fontSize = size;
}

textSize('#arguments li', '50px');

textSize('#thing-1', '50px');

function appender(dom) {
    document.querySelector('#arguments').appendChild(dom);
}

const image = document.createElement('img');

image.src = 'https://static.wikia.nocookie.net/athfwiki/images/f/f6/Athfepmayhemofthemooninites.png/revision/latest?cb=20101230221207';

appender(image);

function modifier(imageElement) {
    imageElement.style.height = '30px';
}

const imagery = document.querySelector('#image-1');

modifier(imagery);

function makeInvisible(domElement) {
    domElement.className = 'invisible';
}

const magic = document.querySelector('h1');

makeInvisible(magic);

function creator(string) {
    const li = document.createElement('li');
    li.innerText = string;
    return li;
}

const tester = creator('MAYBE THIS WORKS!!!!');

appender(tester);

function headerCreater(size, string) {
    const tag = 'h' + size;
    const heading = document.createElement(tag);
    heading.innerText = string;
    return heading;
}

const final = headerCreater(1, 'IT\'S WORKING!!!! YES FINALLY!!!');
appender(final);