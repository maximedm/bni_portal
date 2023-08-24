const axios = require('axios');
const FormData = require('form-data');
const cheerio = require('cheerio');
const fs = require('fs');
const { url } = require('inspector');

const chappterId = '16116';
const fileName = 'netwerk_mechelen.json';

/*const chappterId = '19255';
const fileName = 'maneblussers.json';*/

const form = new FormData();
form.append("parameters", "countryIds=10616&regionId=&chapterName=&chapterCity=&chapterArea=&chapterMeetingDay=&chapterMeetingTime=&chapterMeetingType=");
form.append("languages[availableLanguages][0][type]", "published");
form.append("languages[availableLanguages][0][url]", "http://bni-kempenmechelen.be/kempen-en-arr--mechelen-bni-maneblussers/nl/leden");
form.append("languages[availableLanguages][0][descriptionKey]", "Dutch");
form.append("languages[availableLanguages][0][id]", "22");
form.append("languages[availableLanguages][0][localeCode]", "nl");
form.append("languages[activeLanguage][id]", "22");
form.append("languages[activeLanguage][localeCode]", "nl");
form.append("languages[activeLanguage][descriptionKey]", "Dutch");
form.append("languages[activeLanguage][cookieBotCode]", "nl");
form.append("cmsv3", "true");

const options = {
  method: 'POST',
  url: 'https://bni-kempenmechelen.be/bnicms/v3/frontend/chapterlist/display',
  headers: {
    cookie: 'PHPSESSID=08fc1340ba736719d1f38e6584303271'
  },
  data: form
};
let chapters = [];
  
  axios.request(options).then(async function (response) {
    const $ = cheerio.load(response.data);
    
    let i = 0;

    console.log(response.data);
    //return;
    //loop through all rows in $('tr')
    for(let i = 0; i < $('tr').length; i++) {
        if($('tr').eq(i).find('td:nth-child(1)').text() == '') continue;
        if($('tr').eq(i).find('td:nth-child(2)').text() == 'Uw zoekcriteria geproduceerd meest overeenkomende') continue;

        let chapterData = {};
        chapterData.chapter = $('tr').eq(i).find('td:nth-child(2)').text();
        chapterData.location = $('tr').eq(i).find('td:nth-child(3)').text();
        chapterData.day = $('tr').eq(i).find('td:nth-child(5)').text();
        chapterData.time = $('tr').eq(i).find('td:nth-child(6)').text();
        chapterData.type = $('tr').eq(i).find('td:nth-child(7)').text();

        let urlElement = $('tr').eq(i).find('td:nth-child(2) > a');

        if (urlElement.length > 0) {
            let url = urlElement.attr('href');
            url = url.split('?')[1];
            chapterData.url = 'https://bni-vlaanderen.be/nl/chapterdetail?' + url;
        } else {
            chapterData.url = '';
        }

        chapters.push(chapterData);
        //console.log($('tr').eq(i).find('td:nth-child(5)').text());
    }


    let dinsdag = chapters.filter(chapter => chapter.day == 'Dinsdag');
    let woensdag = chapters.filter(chapter => chapter.day == 'Woensdag');
    let donderdag = chapters.filter(chapter => chapter.day == 'Donderdag');
    let vrijdag = chapters.filter(chapter => chapter.day == 'Vrijdag');


    fs.writeFile('../src/assets/chapters.json', JSON.stringify(chapters), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.writeFile('days/dinsdag.json', JSON.stringify(dinsdag), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('days/woensdag.json', JSON.stringify(woensdag), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('days/donderdag.json', JSON.stringify(donderdag), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('days/vrijdag.json', JSON.stringify(vrijdag), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    //console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
