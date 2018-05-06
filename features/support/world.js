const { setWorldConstructor, setDefaultTimeout } = require('cucumber')

setDefaultTimeout(60 * 1000);
const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'firefox' } };

class CustomWorld {
  constructor({attach, parameters}) {
    this.browser = webdriverio.remote(options);
    this.attach = attach;
  }

  password(){ 
    return 'Hello2all';
    }

  specialty(){
    return "Dentistry";
  }
    
  specific(){
    return "Orthodontist";
  }
    
  randomString(){
      return Math.random().toString(36).substring(7);
  }
    
}


setWorldConstructor(CustomWorld)
