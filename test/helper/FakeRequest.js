
const buildFakeRequest = (params) => {
    var {
      startDate = '2018-03-19',
      endDate = '2018-04-15',
      fields = []
    } = params || {};
    const request = {};
  
    request.configParams = {};
  
    request.fields = buildFields(...fields);
  
    request.dateRange = {
      startDate: startDate,
      endDate: endDate
    };
  
    return request;
  };
  
 
  const buildFields = (...fieldNames) => {
    return fieldNames.map((name) => ({ name }));
  };
  
 module.exports = buildFakeRequest