const axios = require('axios');
const FormData = require('form-data');
const cheerio = require('cheerio');
const fs = require('fs');

const chappterId = '16116';
const fileName = 'netwerk_mechelen.json';

/*const chappterId = '19255';
const fileName = 'maneblussers.json';*/

const form = new FormData();
form.append("parameters", "chapterName="+chappterId+"&regionIds=21136&chapterWebsite=1");
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
  url: 'https://bni-kempenmechelen.be/bnicms/v3/frontend/memberlist/display',
  headers: {
    cookie: 'PHPSESSID=08fc1340ba736719d1f38e6584303271'
  },
  data: form
};
let members = [];
  
  axios.request(options).then(async function (response) {
    const $ = cheerio.load(response.data);
    
    let i = 0;

    //loop through all rows in $('tr')
    for(let i = 0; i < $('tr').length; i++) {
        let memberData = {};
        //check if the first column is empty, if so, skip the row
        if($('tr').eq(i).find('td:nth-child(1)').text() == '') continue;
        //get the data from the row
        memberData.name = $('tr').eq(i).find('td:nth-child(1)').text();
        memberData.company = $('tr').eq(i).find('td:nth-child(2)').text();
        memberData.type = $('tr').eq(i).find('td:nth-child(3)').text();
        memberData.phone = $('tr').eq(i).find('td:nth-child(4)').text();
        //get the url from the anchor tag
        let urlElement = $('tr').eq(i).find('td:nth-child(1) > a');
        if (urlElement.length > 0) {
            let url = urlElement.attr('href');
            url = url.split('?')[1];
            memberData.url = url;
        } else {
            memberData.url = '';
        }
        //get the details from the url
        //if(i == 29){
            memberData.details = await getDetails(memberData.url);
            //push the data to the members array
            members.push(memberData);
        //}
        console.log('Getting data of: ' + memberData.name + ' (' + (i) + '/' + ($('tr').length - 1) + ')');
    }

    /*$('tr').each(async (i, el) => {

        if($(el).find('td:nth-child(1)').text() == '') return;
       memberData = {};
        memberData.name = $(el).find('td:nth-child(1)').text();
        memberData.company = $(el).find('td:nth-child(2)').text();
        memberData.type = $(el).find('td:nth-child(3)').text();
        memberData.phone = $(el).find('td:nth-child(4)').text();
        let urlElement = $(el).find('td:nth-child(1) > a');
        if (urlElement.length > 0) {
            let url = urlElement.attr('href');
            url = url.split('?')[1];
            memberData.url = url;
        } else {
            memberData.url = '';
        }
        memberData.details = await getDetails(memberData.url);
        

        members.push(memberData);

        
        i++;
    });
    */
    //console.log(members);
    // Convert data to JSON string


    //console.log(members);
    //console.log(response.data);
    await writeToFile(members);
  }).catch(function (error) {
    console.error(error);
  });


  async function getDetails(url) {
    const options = {
        method: 'POST',
        url: 'https://bni-kempenmechelen.be/bnicms/v3/frontend/memberdetail/display',
        headers: {
            cookie: 'PHPSESSID=08fc1340ba736719d1f38e6584303271',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
            parameters: url,
            'languages[availableLanguages][0][type]': 'published'
        }
    };

    let detail = await axios.request(options).then(async function (response) {
        //console.log(response.data);
        const $ = cheerio.load(response.data);
        const resp = [];

        resp.push(await $('.widgetMemberCompanyDetail h6').html().split('<br>'));
        resp.push(await $('.widgetMemberCompanyDetail a').attr('href'));
        const content = await $('.widgetProfile .holder div p');
        resp.push(content);
        const titles = await $('.widgetProfile .holder div h3');
        resp.push(titles);
        resp.push(await $('.widgetProfile .holder div').html());
        return resp;  
    }).catch(function (error) {
        console.error(error);
    });

    const extraDetails = [];
    for(let i = 0; i < detail[3].length; i++) {
        extraDetails[detail[3][i].children[0].data.trim()] = detail[2][i].children[0].data.trim()
    }

    const address = (detail[0][2] ? detail[0][2].trim() : '') +
                (detail[0][5] ? ', ' + detail[0][5].trim() : '') +
                (detail[0][3] ? ' ' + detail[0][3].trim() : '') +
                (detail[0][4] ? ', ' + detail[0][4].trim() : '');
    details = {
        address: address,
        website: detail[1],
        extraDetails: Object.assign({}, extraDetails)
    }
    //console.log('detail: ', details);
    return details;
  }

  function writeToFile(data) {
    const jsonString = JSON.stringify(data, null, 3);

// Write JSON string to file
fs.writeFile(fileName, jsonString, err => {
  if (err) {
    console.log('Error writing file', err);
  } else {
    console.log('File written successfully');
  }
});
  }