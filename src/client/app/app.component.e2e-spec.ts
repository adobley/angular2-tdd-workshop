describe('App', () => {

  beforeEach( () => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('The First Ever ToDo App');
  });

  xit('should have <nav>', () => {
    expect(element(by.css('td-app td-navbar nav')).isPresent()).toEqual(true);
  });

  xit('should have correct nav text for Home', () => {
    expect(element(by.css('td-app td-navbar nav a:first-child')).getText()).toEqual('HOME');
  });

  xit('should have correct nav text for About', () => {
    expect(element(by.css('td-app td-navbar nav a:nth-child(2)')).getText()).toEqual('ABOUT');
  });

});
