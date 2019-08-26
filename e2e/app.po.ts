import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchAHeroe(name: string){
    element(by.id('search-box')).sendKeys(name);
    return element.all(by.css('.search-result')).filter((res)=>{
      return res.getText().then(function(value){
        console.log("Mostrar valores filtrados: ", value);
        return value === name;
      })
    }).first().getText().then(function(text){
      console.log("Heroe buscado: ", text);
      return text;
    });
  }
  eliminateAHeroe(id: string){
    element.all(by.css('.heroes li')).filter(function(list) {
      return list.element(by.css('.badge')).getText().then(function(val) {
        return val === id;
      });
    }).first().element(by.css('.delete')).click();
  }
}
