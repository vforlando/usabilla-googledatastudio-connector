/**
 *  This script adapts the Usabilla API responses to be used in Google Data Studio
 */

const getDataFromUsabilla = function (request, fields) {

    const response = []

    // Google Scripts HTTP Requests are synchronous function (no callback or promisses needed)
    const ub_buttons = usabillaAPI.getAllButtons(request);
    const ub_feedbacks = usabillaAPI.getAllFeedbackItems(request);

    const ub_campaigns = usabillaAPI.getAllCampaigns(request);
    const ub_reponses = usabillaAPI.getAllCampaignsResponses(request);

    // Data Transformation
    apiReponseToUniqueFeedback('fb', ub_feedbacks.items, ub_buttons.items, ub_campaigns.items).map(function (item) { response.push(item) });
    apiReponseToUniqueFeedback('cp', ub_reponses.items, ub_buttons.items, ub_campaigns.items).map(function (item) { response.push(item) });

    return response;
}


function lookUpField(r, k) {
    if (k.length === 0) { return r }
    if (r === undefined || r == null) { return undefined }
    r = r[k[0]];
    k.splice(0, 1);
    return lookUpField(r, k)
}

function getButtonById(id, buttons) {
    for (let i = 0; i < buttons.length; i++) {
        if (id === buttons[i].id)
            return buttons[i]
    }
    return {}
}

function getCampaignById(id, cp) {
    for (let i = 0; i < cp.length; i++) {
        if (id === cp[i].id)
            return cp[i]
    }
    return {}
}

function apiReponseToUniqueFeedback(type, response, buttons, campaigns) {
    const rows = []
    for (let i = 0; i < response.length; i++) {
        const usabilla_item = response[i];
        let row = mappingFields(type, usabilla_item, buttons, campaigns)
        row = mappingCustomFields(type, usabilla_item, row)
        rows.push(row)
    }
    return rows
}

function mappingFields(type, usabilla_item, buttons, campaigns) {

    const uniqueFormat = getFeedbackTableMetadata()
    const row = {};

    for (let i = 0; i < uniqueFormat.length; i++) {

        const fieldUniqueFormat = uniqueFormat[i]
        const api_field = fieldUniqueFormat.ub_api[type]

        // No mapping Usabilla API <> Field
        if (api_field === undefined || api_field === '' || api_field === null) {
            row[fieldUniqueFormat.name] = ''
            continue;
        }

        // Custom data is handled later
        if (api_field.indexOf('o_') !== -1)
            continue;

        // Date field
        if (api_field === 'date') {
            if (fieldUniqueFormat.value_type === 'TEXT')
                row[fieldUniqueFormat.name] = usabilla_item.date
            else
                row[fieldUniqueFormat.name] = Utilities.formatDate(new Date(usabilla_item.date), "CET", "yyyyMMdd");
            continue;
        }

        // NPS and mood score are inside an object on Campaigns
        if ((api_field.indexOf('e_') !== -1) && (type === 'cp')) {
            const kpi = api_field.replace('e_', '')

            if (kpi === 'nps' && usabilla_item.data !== null) {
                row[fieldUniqueFormat.name] = usabilla_item.data['nps'] || ''
            }

            if (kpi === 'rating' && usabilla_item.data !== null) {
                row[fieldUniqueFormat.name] = usabilla_item.data['mood'] || ''
            }

            continue;
        }


        // It is lookup field to a parent object
        if (api_field.indexOf('r_') !== -1) {

            if (type === 'cp') {
                usabilla_item.cp = getCampaignById(usabilla_item.campaignId, campaigns)
                usabilla_item.cp.button = getButtonById(usabilla_item.cp.buttonId, buttons)

            }

            if (type === 'fb') {
                usabilla_item.button = getButtonById(usabilla_item.buttonId, buttons)

            }
            // keys should be an array with the object path. Ex: ['cp', 'button', 'name']
            const keys = api_field.replace('r_', '').split('.');
            row[fieldUniqueFormat.name] = lookUpField(usabilla_item, keys);
            continue;
        }

        if (api_field === 'feedbackType') {
            row[fieldUniqueFormat.name] = (type === 'fb' ? 'Feedback' : 'Campaign')
            continue;
        }

        // If it gets here, it should be a field available on the Usabilla API item 
        row[fieldUniqueFormat.name] = usabilla_item[api_field]
    }

    return row
}


function mappingCustomFields(type, usabilla_item, row) {

    switch (type) {
        case 'cp':
            if (typeof usabilla_item.data === 'object' && usabilla_item.data !== null) {
                let index = 1;
                const keys = Object.keys(usabilla_item.data)
                for (let i = 0; i < keys.length; i++) {
                    row['ub_question' + index] = keys[i];
                    row['ub_answer' + index] = usabilla_item.data[keys[i]];
                    index = index + 1;
                }
            }
            if (typeof usabilla_item.customData === 'object' && usabilla_item.customData !== null) {
                let index = 1;
                const keys = Object.keys(usabilla_item.customData)
                for (let i = 0; i < keys.length; i++) {
                    row['customVariableKey' + index] = keys[i];
                    row['customVariableVal' + index] = usabilla_item.customData[keys[i]];
                    index = index + 1;
                }

            }
            break;

        case 'fb':
            if (typeof usabilla_item.custom === 'object' && usabilla_item.custom !== null) {
                let index = 1;
                const keys = Object.keys(usabilla_item.custom)
                for (let i = 0; i < keys.length; i++) {
                    row['ub_question' + index] = keys[i];
                    row['ub_answer' + index] = usabilla_item.custom[keys[i]];
                    index = index + 1;
                }

            }
            break;
        default:
        // nothing
    }

    return row

}

if (typeof(exports) !== 'undefined') {
    module.exports.lookUpField = lookUpField;
}