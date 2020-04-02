const lookUpField = require('../src/usabilla').lookUpField

const usabilla_item = {
    "id": "5e848bc30af8b90316022d7f",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
    "location": "",
    "date": "2020-04-01T12:40:37.218Z",
    "campaignId": "5e848b61a1f64a5a513cd304",
    "customData": {},
    "data": {
        "Text_area_question": "text area reponse",
        "checkbox_question": [
            "Option_2",
            "Option_3"
        ],
        "drop_down_question": "Option_2",
        "matrix_question": {
            "Question_1": 5,
            "Question_2": 4
        },
        "mood": "2",
        "nps": 9,
        "radio_question": "Option_1",
        "rating_question": 5
    },
    "url": "https://www.uol.com.br/",
    "time": 65003, 
    "cp" : {
        "id": "5e160126d3212c48876eeb59",
        "date": "2020-01-08T16:19:50.646Z",
        "buttonId": "35c9aefa89f9",
        "analyticsId": "6af812165e09",
        "status": "active",
        "name": "Demo - Slide-out Survey Campaign",
        "type": "poll",
        "url": "",
        "button" : {
            "id": "35c9aefa89f9",
            "name": "Demo Button"
        }
    }
}

test('lookUpField in an object (unknown how deep)', () => {
    expect(lookUpField(usabilla_item, ['cp', 'button', 'name'])).toBe(usabilla_item['cp']['button']['name']);
});


