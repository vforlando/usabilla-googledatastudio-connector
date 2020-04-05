// Mapping betwhen Usabilla API response fields and Google Data Studio fields

function DataModel() {
    return this;
}

DataModel.prototype.getFeedbackTableMetadata = function () {



    return [

        { name: 'id', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'id', cp: 'id' } },
        { name: 'buttonId', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'buttonId', cp: 'cp.buttonId' } },
        { name: 'buttonName', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'r_button.name', cp: 'r_cp.button.name' } },
        { name: 'feedbackType', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'feedbackType', cp: 'feedbackType' } },
        { name: 'cpName', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'r_cp.name' } },
        { name: 'cpAnalyticsId', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'r_cp.analyticsId' } },
        { name: 'date', type: 'dimension', value_type: 'YEAR_MONTH_DAY', agregation: null, ub_api: { fb: 'date', cp: 'date' } },
        { name: 'date_str', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'date', cp: 'date' } },
        { name: 'location', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'location', cp: 'location' } },
        { name: 'url', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'url', cp: 'url' } },

        { name: 'comment', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'comment' } },
        { name: 'moodScore', type: 'metric', value_type: 'NUMBER', agregation: 'AVG', ub_api: { fb: 'rating', cp: 'e_rating' } },
        { name: 'nps', type: 'metric', value_type: 'NUMBER', agregation: 'AVG', ub_api: { fb: 'nps', cp: 'e_nps' } },

        { name: 'ub_question1', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.0', cp: 'o_.data.key.0' } },
        { name: 'ub_question2', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.1', cp: 'o_.data.key.1' } },
        { name: 'ub_question3', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.2', cp: 'o_.data.key.2' } },
        { name: 'ub_question4', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.3', cp: 'o_.data.key.3' } },
        { name: 'ub_question5', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.4', cp: 'o_.data.key.4' } },
        { name: 'ub_question6', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.5', cp: 'o_.data.key.5' } },
        { name: 'ub_question7', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.6', cp: 'o_.data.key.6' } },
        { name: 'ub_question8', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.7', cp: 'o_.data.key.7' } },
        { name: 'ub_question9', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.8', cp: 'o_.data.key.8' } },
        { name: 'ub_question10', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.key.9', cp: 'o_.data.key.9' } },
        { name: 'ub_answer1', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.0', cp: 'o_.data.val.0' } },
        { name: 'ub_answer2', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.1', cp: 'o_.data.val.1' } },
        { name: 'ub_answer3', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.2', cp: 'o_.data.val.2' } },
        { name: 'ub_answer4', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.3', cp: 'o_.data.val.3' } },
        { name: 'ub_answer5', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.4', cp: 'o_.data.val.4' } },
        { name: 'ub_answer6', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.5', cp: 'o_.data.val.5' } },
        { name: 'ub_answer7', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.6', cp: 'o_.data.val.6' } },
        { name: 'ub_answer8', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.7', cp: 'o_.data.val.7' } },
        { name: 'ub_answer9', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.8', cp: 'o_.data.val.8' } },
        { name: 'ub_answer10', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { fb: 'o_.custom.val.9', cp: 'o_.data.val.9' } },

        { name: 'customVariableKey1', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.key.0' } },
        { name: 'customVariableKey2', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.key.1' } },
        { name: 'customVariableKey4', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.key.2' } },
        { name: 'customVariableVal1', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.val.0' } },
        { name: 'customVariableVal2', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.val.1' } },
        { name: 'customVariableVal4', type: 'dimension', value_type: 'TEXT', agregation: null, ub_api: { cp: 'o_.customData.val.2' } },
    ]

}




if (typeof (exports) !== 'undefined') {
    module.exports = DataModel
}





