
function isAdminUser() {
    return true // Debbug only 
}

function getAuthType() {
    return { type: 'NONE' }
}


function getConfig(request) {

    const cc = DataStudioApp.createCommunityConnector();
    const config = cc.getConfig();

    config.newInfo()
        .setId('instructions')
        .setText('Enter your Usabilla API information');

    config.newTextInput()
        .setId('api_key')
        .setName('Enter your API KEY')
        .setHelpText('e.g. 122345')
        .setPlaceholder('KEY');

    config.newTextInput()
        .setId('api_secret')
        .setName('Enter your API SECRET')
        .setHelpText('e.g. ABCDEF')
        .setPlaceholder('Secret');


    config.setDateRangeRequired(true);

    return config.build();
}


function getFields(request) {

    const cc = DataStudioApp.createCommunityConnector();
    const fields = cc.getFields();
    const types = cc.FieldType;
    const aggregations = cc.AggregationType;

    const table = getFeedbackTableMetadata();

    table.map(function (fbField) {
        if (fbField.type === 'dimension') {
            fields.newDimension().setId(fbField.name).setType(types[fbField.value_type])
        }
        if (fbField.type === 'metric') {
            fields.newMetric().setId(fbField.name).setType(types[fbField.value_type]).setAggregation(aggregations[fbField.agregation])
        }
    })

    return fields;
}

function getSchema(request) {
    const fields = getFields(request).build();
    return { schema: fields };
}

function responseToRows(requestedFields, response, packageName) {
    // Transform parsed data and filter for requested fields  

    return response.map(function (item) {
        const row = [];
        requestedFields.asArray().forEach(function (field) {
            return row.push(item[field.getId()])
        });
        return { values: row };
    });

}

function getData(request) {
    const requestedFieldIds = request.fields.map(function (field) {
        return field.name;
    });
    const requestedFields = getFields().forIds(requestedFieldIds);


    const parsedResponse = getDataFromUsabilla(request, requestedFields)
    const rows = responseToRows(requestedFields, parsedResponse, request.configParams.data_type);

    return {
        schema: requestedFields.build(),
        rows: rows
    };
}
