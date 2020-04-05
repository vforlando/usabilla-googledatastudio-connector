const Usabilla = require('../src/Usabilla')
const buildFakeRequest = require('./helper/FakeRequest')
const Utilities = require('./mock/Utilities')
const MockUsabillaAPI = require('./mock/UsabillaAPI')

let usabilla, usabillaAPI, utilities

beforeEach(() => {
    usabilla = new Usabilla({
        Utilities : new Utilities()
    });
  });


const mockUsabillaAPI = new MockUsabillaAPI()
const usabilla_item = mockUsabillaAPI.getMockUsabillaItem()
const usabilla_parsed_rows = mockUsabillaAPI.getMockRowsUsabilla()


test('lookUpField in an object', () => {
    expect(usabilla.lookUpField(usabilla_item, ['cp', 'button', 'name'])).toBe(usabilla_item['cp']['button']['name']);
});

test('getDataFromUsabilla', () => {
    const startDate = new Date('2018-07-13T00:00:00Z');
    const endDate = new Date('2018-07-14T00:00:00Z');
    const fields = ['track_name', 'artist'];
    let request = buildFakeRequest({startDate,endDate,fields});

    expect(usabilla.getDataFromUsabilla(request)).toStrictEqual(usabilla_parsed_rows);
});


test('getButtonById', () => {
  expect(usabilla.getButtonById('dbfed44cad75', mockUsabillaAPI.getAllButtons().items)).toEqual({"id": "dbfed44cad75","name": "Secondary Button B"});
});


test('getCampaignById', () => {
  let campaign = {
    "id": "5de67cbc658b766a6c743f54",
    "date": "2019-12-03T15:18:20.068Z",
    "buttonId": "a31409d6b75c",
    "analyticsId": "8c5e7b510a5a",
    "status": "paused",
    "name": "Exit Survey A",
    "type": "survey",
    "url": "http://survey.usabilla.com/live/s/5de67cbc658b766a6c743f54"
}

  expect(usabilla.getCampaignById('5de67cbc658b766a6c743f54', mockUsabillaAPI.getAllCampaigns().items)).toEqual(campaign);
});



