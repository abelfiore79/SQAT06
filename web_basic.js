

const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'firefox' } };

const client = webdriverio.remote(options);

"use strict";

client
    .init()
    ///.catch(console.error())
    //.timeouts('pageLoad', 8000)
    .url('https://www.duckduckgo.com')
    ///.catch(console.error())
    //.setValue('.search__input', 'WebdriverIO')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    ///.catch(console.error())
   // .click('#search_button_homepage')
    ///.catch(console.error())
   // .getTitle().then(function(title) {
      //  console.log('Title is: ' + title)
   // })
    ///.catch(console.error())
    //.end();
