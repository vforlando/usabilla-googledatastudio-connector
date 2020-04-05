/* istanbul ignore next */
function isAdminUser() {
    return true 
}

/* istanbul ignore next */
function getAuthType() {
    return { type: 'NONE' }
}

/* istanbul ignore next */
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

/* istanbul ignore next */
function getFields(request) {

    const cc = DataStudioApp.createCommunityConnector();
    const fields = cc.getFields();
    const types = cc.FieldType;
    const aggregations = cc.AggregationType;

    const dataModel = new DataModel()
    const table = dataModel.getFeedbackTableMetadata();

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

/* istanbul ignore next */
function getSchema(request) {
    const fields = getFields(request).build();
    return { schema: fields };
}

/* istanbul ignore next */
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
/* istanbul ignore next */
function getData(request) {
    const requestedFieldIds = request.fields.map(function (field) {
        return field.name;
    });
    const requestedFields = getFields().forIds(requestedFieldIds);

    const usabilla = getUsabilla()
    const parsedResponse = usabilla.getDataFromUsabilla(request)

    const rows = responseToRows(requestedFields, parsedResponse, request.configParams.data_type);

    return {
        schema: requestedFields.build(),
        rows: rows
    };
}

/* istanbul ignore next */
function getUsabilla(){
    return new Usabilla({
        Utilities : Utilities,
        UrlFetchApp: UrlFetchApp
    })
}