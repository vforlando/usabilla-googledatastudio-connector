const UsabillaAPI = require('../src/UsabillaAPI')
const Utilities = require('./mock/Utilities')

let usabillaAPI, utilities

beforeEach(() => {
    utilities = new Utilities()
    usabillaAPI = new UsabillaAPI({
        Utilities : utilities
    });
    
  });


const mockApiResquest = {scriptParams:{lastRefresh:'1586082566089'}, fields:[{name:'id'}, {name:'moodScore'}], dateRange:{startDate:'2020-03-08', endDate:'2020-04-04'}, configParams:{api_secret:'c5c6f8xxxxx', api_key:'2a2e56xxxxx'}}
const mockHeaders = {"Authorization": "USBL1-HMAC-SHA256 Credential=undefined/20200405/usbl1_request, SignedHeaders=host;x-usbl-date, Signature=677b16bb588b3ce6d3040a6cbc3d9bf83a87fee1ef2b3b9c6dbbd189b3374b3e", "x-usbl-date": "20200405T103933Z"}

test('getAuthHeaders', () => {
    expect(usabillaAPI.getAuthHeader(mockApiResquest.api_key, mockApiResquest.api_secret, '', '').Authorization.slice(-53)).toBe(mockHeaders.Authorization.slice(-53));
});