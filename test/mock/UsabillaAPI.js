
class UsabillaAPI {
    constructor(services){
        this.services = services
    }

    getAllButtons() {
        return {
            "items": [
                {
                    "id": "a31409d6b75c",
                    "name": "Main Button A"
                },
                {
                    "id": "dbfed44cad75",
                    "name": "Secondary Button B"
                },
                {
                    "id": "35c9aefa89f9",
                    "name": "Demo Button"
                },
                {
                    "id": "8bb61d5ee0d5",
                    "name": "SL - Testing"
                }
            ],
            "count": 4,
            "hasMore": false,
            "lastTimestamp": 0
        }
    }

    getAllFeedbackItems() {
        return {
            "items": [
                {
                    "id": "5de7b281658b765adb62cb44",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
                    "comment": "my first feedback",
                    "commentTranslated": "meu primeiro feedback",
                    "commentTranslatedFrom": "en",
                    "location": "Amsterdam, Netherlands",
                    "browser": {
                        "name": "Chrome",
                        "version": "78.0.3904.108",
                        "os": "MacOSX",
                        "devicetype": "Desktop"
                    },
                    "date": "2019-12-04T13:20:18.688Z",
                    "custom": null,
                    "email": "",
                    "image": "",
                    "labels": [],
                    "nps": 0,
                    "publicUrl": null,
                    "rating": 5,
                    "buttonId": "a31409d6b75c",
                    "tags": [],
                    "url": "https://feedback.cloudwithcoffee.com/",
                    "Bucket": "u4w-screenshots-production"
                },
                {
                    "id": "5e28b51d658b76268e21ff41",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "comment": "top",
                    "location": "Amsterdam, Netherlands",
                    "browser": {
                        "name": "Chrome",
                        "version": "79.0.3945.117",
                        "os": "MacOSX",
                        "devicetype": "Desktop"
                    },
                    "date": "2020-01-22T20:48:47.21Z",
                    "custom": {
                        "custom_question_exam": "test",
                        "my_var": "example value"
                    },
                    "email": "",
                    "image": "http://u4w-screenshots-production.s3.amazonaws.com/5e28b51d658b76268e21ff41/full_image",
                    "labels": [],
                    "nps": 0,
                    "publicUrl": null,
                    "rating": 4,
                    "buttonId": "a31409d6b75c",
                    "tags": [],
                    "url": "https://feedback.cloudwithcoffee.com/",
                    "Bucket": "u4w-screenshots-production"
                },
                {
                    "id": "5e4663a3efc5ad149e7f6e7d",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36",
                    "comment": "testing 8",
                    "commentTranslated": "",
                    "commentTranslatedFrom": "",
                    "location": "Amsterdam, Netherlands",
                    "browser": {
                        "name": "Chrome",
                        "version": "80.0.3987.87",
                        "os": "MacOSX",
                        "devicetype": "Desktop"
                    },
                    "date": "2020-02-14T09:09:19.792Z",
                    "custom": {
                        "example_question_1": null,
                        "my_var": "example value"
                    },
                    "email": "",
                    "image": "http://u4w-screenshots-production.s3.amazonaws.com/5e4663a3efc5ad149e7f6e7d/full_image",
                    "labels": [],
                    "nps": 0,
                    "publicUrl": "https://www.usabilla.com/feedback/item/331ed750631ad4743d24eea6a1fcc2587b3803fe",
                    "rating": 4,
                    "buttonId": "35c9aefa89f9",
                    "tags": [],
                    "url": "https://feedback.cloudwithcoffee.com/",
                    "Bucket": "u4w-screenshots-production"
                },
                {
                    "id": "5e8488f544952f12f7151ade",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
                    "comment": "Comment that I would like to share",
                    "commentTranslated": "Comentário que gostaria de compartilhar",
                    "commentTranslatedFrom": "en",
                    "location": "Amsterdam, Netherlands",
                    "browser": {
                        "name": "Chrome",
                        "version": "80.0.3987.149",
                        "os": "MacOSX",
                        "devicetype": "Desktop"
                    },
                    "date": "2020-04-01T12:29:01.784Z",
                    "custom": {
                        "choice_element": "opt2",
                        "please_select_a_subj": "compliment",
                        "rating_question": "10"
                    },
                    "email": "",
                    "image": "",
                    "labels": [
                        "compliment"
                    ],
                    "nps": 9,
                    "publicUrl": null,
                    "rating": 4,
                    "buttonId": "a31409d6b75c",
                    "tags": [
                        "attractive",
                        "usable",
                        "interesting"
                    ],
                    "url": "https://www.uol.com.br/",
                    "Bucket": "u4w-screenshots-production"
                }
            ],
            "count": 4,
            "hasMore": false,
            "lastTimestamp": 1585744141784
        }
    }


    getAllCampaigns(){
        return {
            "items": [
                {
                    "id": "5de67cbc658b766a6c743f54",
                    "date": "2019-12-03T15:18:20.068Z",
                    "buttonId": "a31409d6b75c",
                    "analyticsId": "8c5e7b510a5a",
                    "status": "paused",
                    "name": "Exit Survey A",
                    "type": "survey",
                    "url": "http://survey.usabilla.com/live/s/5de67cbc658b766a6c743f54"
                },
                {
                    "id": "5dfb854a43a9cb49b22d81e7",
                    "date": "2019-12-19T14:12:26.055Z",
                    "buttonId": "a31409d6b75c",
                    "analyticsId": "ec7f50c331b2",
                    "status": "paused",
                    "name": "New Slide-out Survey Campaign",
                    "type": "poll",
                    "url": ""
                },
                {
                    "id": "5e160126d3212c48876eeb59",
                    "date": "2020-01-08T16:19:50.646Z",
                    "buttonId": "35c9aefa89f9",
                    "analyticsId": "6af812165e09",
                    "status": "active",
                    "name": "Demo - Slide-out Survey Campaign",
                    "type": "poll",
                    "url": ""
                },
                {
                    "id": "5e1601f71a8e9e2e34229aa1",
                    "date": "2020-01-08T16:23:19.449Z",
                    "buttonId": "35c9aefa89f9",
                    "analyticsId": "bc5deac98d81",
                    "status": "active",
                    "name": "Demo - Exit Survey Campaign",
                    "type": "survey",
                    "url": "http://survey.usabilla.com/live/s/5e1601f71a8e9e2e34229aa1"
                },
                {
                    "id": "5e848b61a1f64a5a513cd304",
                    "date": "2020-04-01T12:38:57.987Z",
                    "buttonId": "a31409d6b75c",
                    "analyticsId": "351a670a360c",
                    "status": "active",
                    "name": "Testing fields",
                    "type": "poll",
                    "url": ""
                }
            ],
            "count": 5,
            "hasMore": false,
            "lastTimestamp": 1585744737987
        }
    }

    getAllCampaignsResponses(){

        return {
            "items": [
                {
                    "id": "5dfb856ef6580e031c004df8",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36",
                    "location": "",
                    "date": "2019-12-19T14:13:04.262Z",
                    "campaignId": "5dfb854a43a9cb49b22d81e7",
                    "customData": {},
                    "data": {
                        "Answer": "Yes",
                        "Rating_custom": 2,
                        "mood": "4",
                        "nps": 9
                    },
                    "url": "https://feedback.cloudwithcoffee.com/about.html",
                    "time": 12043
                },
                {
                    "id": "5e16ebb96f86da031b012cc6",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
                    "location": "",
                    "date": "2020-01-09T09:00:42.88Z",
                    "campaignId": "5e1601f71a8e9e2e34229aa1",
                    "customData": {},
                    "data": {
                        "answer": "Other",
                        "other": "I did not find what I was looking for"
                    },
                    "url": "https://feedback.cloudwithcoffee.com/about.html",
                    "time": 40961
                },
                {
                    "id": "5e16ebdac87d9f03170082d8",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
                    "location": "",
                    "date": "2020-01-09T09:01:15.567Z",
                    "campaignId": "5e160126d3212c48876eeb59",
                    "customData": {},
                    "data": {
                        "Answer": "No",
                        "answer": "Courses"
                    },
                    "url": "https://feedback.cloudwithcoffee.com/about.html",
                    "time": 16294
                },
                {
                    "id": "5e186dc696ccd50317000337",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "location": "",
                    "date": "2020-01-10T12:27:51.125Z",
                    "campaignId": "5e1601f71a8e9e2e34229aa1",
                    "customData": {},
                    "data": {
                        "What_would_be_a_": "100 euros",
                        "answer": "Price_is_too_hig"
                    },
                    "url": "https://feedback.cloudwithcoffee.com",
                    "time": 18023
                },
                {
                    "id": "5e186def2406bf0315004ea1",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "location": "Amsterdam, Netherlands",
                    "date": "2020-01-10T12:28:31.968Z",
                    "campaignId": "5e160126d3212c48876eeb59",
                    "customData": {
                        "example_custom_var_1": "abcd",
                        "example_custom_var_2": "1234"
                    },
                    "data": {
                        "Answer": "No",
                        "answer": "Boat"
                    },
                    "url": "https://feedback.cloudwithcoffee.com",
                    "time": 8125
                },
                {
                    "id": "5e1d9a26b11386031d00adb6",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "location": "",
                    "date": "2020-01-14T10:38:31.119Z",
                    "campaignId": "5de67cbc658b766a6c743f54",
                    "customData": {
                        "myname": "joao"
                    },
                    "data": {
                        "What_would_be_a_": "100",
                        "answer": "Price_is_too_hig"
                    },
                    "url": "",
                    "time": 5471
                },
                {
                    "id": "5e2727ad807e67031100058c",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "location": "Amsterdam, Netherlands",
                    "date": "2020-01-21T16:32:46.961Z",
                    "campaignId": "5dfb854a43a9cb49b22d81e7",
                    "customData": {
                        "my_var": "example value"
                    },
                    "data": {
                        "Answer": "Yes",
                        "Rating_custom": 6,
                        "mood": "2",
                        "nps": 9
                    },
                    "url": "https://feedback.cloudwithcoffee.com/",
                    "time": 10108
                },
                {
                    "id": "5e309ef1533470031a0182ef",
                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
                    "location": "",
                    "date": "2020-01-28T20:52:04.856Z",
                    "campaignId": "5dfb854a43a9cb49b22d81e7",
                    "customData": {
                        "email": "someone@gmail.com",
                        "first_name": "John",
                        "last_name": "Smith"
                    },
                    "data": {
                        "Would_you_like_to_receive_our_ne": "Yes"
                    },
                    "url": "https://feedback.cloudwithcoffee.com",
                    "time": 4830
                }
            ],
            "count": 8,
            "hasMore": false,
            "lastTimestamp": 1585744837218
        }

    }

    getMockUsabillaItem(){
        return {
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
            "url": "https://feedback.cloudwithcoffee.com/",
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
    }


    getMockRowsUsabilla(){
        return       [
            {
              id: '5de7b281658b765adb62cb44',
              buttonId: 'a31409d6b75c',
              buttonName: 'Main Button A',
              feedbackType: 'Feedback',
              cpName: '',
              cpAnalyticsId: '',
              date: '2020/01/20',
              date_str: '2019-12-04T13:20:18.688Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://feedback.cloudwithcoffee.com/',
              comment: 'my first feedback',
              moodScore: 5,
              nps: 0,
              customVariableKey1: '',
              customVariableKey2: '',
              customVariableKey4: '',
              customVariableVal1: '',
              customVariableVal2: '',
              customVariableVal4: ''
            },
            {
              id: '5e28b51d658b76268e21ff41',
              buttonId: 'a31409d6b75c',
              buttonName: 'Main Button A',
              feedbackType: 'Feedback',
              cpName: '',
              cpAnalyticsId: '',
              date: '2020/01/20',
              date_str: '2020-01-22T20:48:47.21Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://feedback.cloudwithcoffee.com/',
              comment: 'top',
              moodScore: 4,
              nps: 0,
              customVariableKey1: '',
              customVariableKey2: '',
              customVariableKey4: '',
              customVariableVal1: '',
              customVariableVal2: '',
              customVariableVal4: '',
              ub_question1: 'custom_question_exam',
              ub_answer1: 'test',
              ub_question2: 'my_var',
              ub_answer2: 'example value'
            },
            {
              id: '5e4663a3efc5ad149e7f6e7d',
              buttonId: '35c9aefa89f9',
              buttonName: 'Demo Button',
              feedbackType: 'Feedback',
              cpName: '',
              cpAnalyticsId: '',
              date: '2020/01/20',
              date_str: '2020-02-14T09:09:19.792Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://feedback.cloudwithcoffee.com/',
              comment: 'testing 8',
              moodScore: 4,
              nps: 0,
              customVariableKey1: '',
              customVariableKey2: '',
              customVariableKey4: '',
              customVariableVal1: '',
              customVariableVal2: '',
              customVariableVal4: '',
              ub_question1: 'example_question_1',
              ub_answer1: null,
              ub_question2: 'my_var',
              ub_answer2: 'example value'
            },
            {
              id: '5e8488f544952f12f7151ade',
              buttonId: 'a31409d6b75c',
              buttonName: 'Main Button A',
              feedbackType: 'Feedback',
              cpName: '',
              cpAnalyticsId: '',
              date: '2020/01/20',
              date_str: '2020-04-01T12:29:01.784Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://www.uol.com.br/',
              comment: 'Comment that I would like to share',
              moodScore: 4,
              nps: 9,
              customVariableKey1: '',
              customVariableKey2: '',
              customVariableKey4: '',
              customVariableVal1: '',
              customVariableVal2: '',
              customVariableVal4: '',
              ub_question1: 'choice_element',
              ub_answer1: 'opt2',
              ub_question2: 'please_select_a_subj',
              ub_answer2: 'compliment',
              ub_question3: 'rating_question',
              ub_answer3: '10'
            },
            {
              id: '5dfb856ef6580e031c004df8',
              buttonId: undefined,
              buttonName: 'Main Button A',
              feedbackType: 'Campaign',
              cpName: 'New Slide-out Survey Campaign',
              cpAnalyticsId: 'ec7f50c331b2',
              date: '2020/01/20',
              date_str: '2019-12-19T14:13:04.262Z',
              location: '',
              url: 'https://feedback.cloudwithcoffee.com/about.html',
              comment: '',
              moodScore: '4',
              nps: 9,
              ub_question1: 'Answer',
              ub_answer1: 'Yes',
              ub_question2: 'Rating_custom',
              ub_answer2: 2,
              ub_question3: 'mood',
              ub_answer3: '4',
              ub_question4: 'nps',
              ub_answer4: 9
            },
            {
              id: '5e16ebb96f86da031b012cc6',
              buttonId: undefined,
              buttonName: 'Demo Button',
              feedbackType: 'Campaign',
              cpName: 'Demo - Exit Survey Campaign',
              cpAnalyticsId: 'bc5deac98d81',
              date: '2020/01/20',
              date_str: '2020-01-09T09:00:42.88Z',
              location: '',
              url: 'https://feedback.cloudwithcoffee.com/about.html',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'answer',
              ub_answer1: 'Other',
              ub_question2: 'other',
              ub_answer2: 'I did not find what I was looking for'
            },
            {
              id: '5e16ebdac87d9f03170082d8',
              buttonId: undefined,
              buttonName: 'Demo Button',
              feedbackType: 'Campaign',
              cpName: 'Demo - Slide-out Survey Campaign',
              cpAnalyticsId: '6af812165e09',
              date: '2020/01/20',
              date_str: '2020-01-09T09:01:15.567Z',
              location: '',
              url: 'https://feedback.cloudwithcoffee.com/about.html',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'Answer',
              ub_answer1: 'No',
              ub_question2: 'answer',
              ub_answer2: 'Courses'
            },
            {
              id: '5e186dc696ccd50317000337',
              buttonId: undefined,
              buttonName: 'Demo Button',
              feedbackType: 'Campaign',
              cpName: 'Demo - Exit Survey Campaign',
              cpAnalyticsId: 'bc5deac98d81',
              date: '2020/01/20',
              date_str: '2020-01-10T12:27:51.125Z',
              location: '',
              url: 'https://feedback.cloudwithcoffee.com',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'What_would_be_a_',
              ub_answer1: '100 euros',
              ub_question2: 'answer',
              ub_answer2: 'Price_is_too_hig'
            },
            {
              id: '5e186def2406bf0315004ea1',
              buttonId: undefined,
              buttonName: 'Demo Button',
              feedbackType: 'Campaign',
              cpName: 'Demo - Slide-out Survey Campaign',
              cpAnalyticsId: '6af812165e09',
              date: '2020/01/20',
              date_str: '2020-01-10T12:28:31.968Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://feedback.cloudwithcoffee.com',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'Answer',
              ub_answer1: 'No',
              ub_question2: 'answer',
              ub_answer2: 'Boat',
              customVariableKey1: 'example_custom_var_1',
              customVariableVal1: 'abcd',
              customVariableKey2: 'example_custom_var_2',
              customVariableVal2: '1234'
            },
            {
              id: '5e1d9a26b11386031d00adb6',
              buttonId: undefined,
              buttonName: 'Main Button A',
              feedbackType: 'Campaign',
              cpName: 'Exit Survey A',
              cpAnalyticsId: '8c5e7b510a5a',
              date: '2020/01/20',
              date_str: '2020-01-14T10:38:31.119Z',
              location: '',
              url: '',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'What_would_be_a_',
              ub_answer1: '100',
              ub_question2: 'answer',
              ub_answer2: 'Price_is_too_hig',
              customVariableKey1: 'myname',
              customVariableVal1: 'joao'
            },
            {
              id: '5e2727ad807e67031100058c',
              buttonId: undefined,
              buttonName: 'Main Button A',
              feedbackType: 'Campaign',
              cpName: 'New Slide-out Survey Campaign',
              cpAnalyticsId: 'ec7f50c331b2',
              date: '2020/01/20',
              date_str: '2020-01-21T16:32:46.961Z',
              location: 'Amsterdam, Netherlands',
              url: 'https://feedback.cloudwithcoffee.com/',
              comment: '',
              moodScore: '2',
              nps: 9,
              ub_question1: 'Answer',
              ub_answer1: 'Yes',
              ub_question2: 'Rating_custom',
              ub_answer2: 6,
              ub_question3: 'mood',
              ub_answer3: '2',
              ub_question4: 'nps',
              ub_answer4: 9,
              customVariableKey1: 'my_var',
              customVariableVal1: 'example value'
            },
            {
              id: '5e309ef1533470031a0182ef',
              buttonId: undefined,
              buttonName: 'Main Button A',
              feedbackType: 'Campaign',
              cpName: 'New Slide-out Survey Campaign',
              cpAnalyticsId: 'ec7f50c331b2',
              date: '2020/01/20',
              date_str: '2020-01-28T20:52:04.856Z',
              location: '',
              url: 'https://feedback.cloudwithcoffee.com',
              comment: '',
              moodScore: '',
              nps: '',
              ub_question1: 'Would_you_like_to_receive_our_ne',
              ub_answer1: 'Yes',
              customVariableKey1: 'email',
              customVariableVal1: 'someone@gmail.com',
              customVariableKey2: 'first_name',
              customVariableVal2: 'John',
              customVariableKey3: 'last_name',
              customVariableVal3: 'Smith'
            }
          ]
    }


}



module.exports = UsabillaAPI