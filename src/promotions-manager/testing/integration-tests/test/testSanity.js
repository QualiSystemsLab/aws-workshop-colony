var chai = require('chai')
  , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var assert = chai.assert;

// {"blueprint_description":"Application is configured to deploy with multiple instances for load tests.\n","applications":[{"private_address":"10.0.1.6","public_address":"","internal_ports":["27017"],"external_ports":[],"shortcuts":[],"image_name":"Canonical:UbuntuServer:16.04-LTS:latest","internal_dns":"mongodb.he612eszg900z4.sandbox.com","instances":[{"status":"Done","infra_id":"mongodb","instance_type":"Basic_A1","memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.6","compute_availability":"on_demand","links":null}],"name":"mongodb","status":"Done","cloud":{"provider":"azure","cloud_account_name":"azure","compute_service":null,"region":{"id":"westeurope","name":""}}},{"private_address":"10.0.1.4","public_address":"","internal_ports":["3001"],"external_ports":[],"shortcuts":[],"image_name":"Canonical:UbuntuServer:16.04-LTS:16.04.201812230","internal_dns":"promotions-manager-api.he612eszg900z4.sandbox.com","instances":[{"status":"Done","infra_id":"promotions-manager-api_0","instance_type":null,"memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.4","compute_availability":"on_demand","links":null},{"status":"Done","infra_id":"promotions-manager-api_1","instance_type":null,"memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.4","compute_availability":"on_demand","links":null}],"name":"promotions-manager-api","status":"Done","cloud":{"provider":"azure","cloud_account_name":"azure","compute_service":null,"region":{"id":"westeurope","name":""}}},{"private_address":"10.0.1.5","public_address":"52.236.147.244","internal_ports":[],"external_ports":["3000"],"shortcuts":["http://52.236.147.244:3000"],"image_name":"Canonical:UbuntuServer:16.04-LTS:16.04.201812230","internal_dns":"promotions-manager-ui.he612eszg900z4.sandbox.com","instances":[{"status":"Done","infra_id":"promotions-manager-ui_0","instance_type":null,"memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.5","compute_availability":"on_demand","links":null},{"status":"Done","infra_id":"promotions-manager-ui_1","instance_type":null,"memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.5","compute_availability":"on_demand","links":null},{"status":"Done","infra_id":"promotions-manager-ui_2","instance_type":null,"memory_limit":null,"cpu_limit":null,"access_links":[],"private_ip":"10.0.1.5","compute_availability":"on_demand","links":null}],"name":"promotions-manager-ui","status":"Done","cloud":{"provider":"azure","cloud_account_name":"azure","compute_service":null,"region":{"id":"westeurope","name":""}}}],"artifacts":{"promotions-manager-ui":"artifacts/Release-41/promotions-manager-ui.49.tar.gz","promotions-manager-api":"artifacts/Release-41/promotions-manager-api.49.tar.gz"},"inputs":[{"name":"AZURE_VM_SIZE","value":"Standard_B1ms","display_style":null,"description":null},{"name":"API_BUILD_NUMBER","value":"20190108.1","display_style":null,"description":null},{"name":"RELEASE_NUMBER","value":"49","display_style":null,"description":null}],"scheduled_end_time":"2019-01-09T23:26:00.7735997+00:00","automation":true,"sandbox_status":"Ended","end_time":"2019-01-09 21:43:42.119471Z","id":"he612eszg900z4","name":"Release Pipeline - Load Tests - Release-41","blueprint_name":"promotions-manager-load-test","status_details":"","status_error_description":null,"deployment_start_time":"2019-01-09T21:42:41.365847+00:00","create_time":"2019-01-09T21:26:01.590659+00:00","build":null,"errors":[],"owner_id":"c4809e96-c823-4c60-a400-2ac1e76344b1","owner":{"first_name":"Alex","last_name":"Azarh","email":"alex.az@quali.com","join_date":"2018-12-11T13:32:35.983201"},"links":[{"rel":"blueprint","href":"http://colony-demo.cloudshellcolony.com/api/spaces/azure/catalog/promotions-manager-load-test","method":"GET"},{"rel":"all","href":"http://colony-demo.cloudshellcolony.com/api/spaces/azure/sandbox","method":"GET"},{"rel":"terminate sandbox","href":"http://colony-demo.cloudshellcolony.com/api/spaces/azure/sandbox/he612eszg900z4","method":"DELETE"}]}

before(function() {
    var sandboxDetailsJsonString = process.env.SANDBOX_DETAILS || process.env.COLONY_SANDBOX_DETAILS || '';
    var endpoint = null;

    if(sandboxDetailsJsonString) {
        console.log('Parsing json to get app endpoint: ' + sandboxDetailsJsonString);
        var sandboxDetails = JSON.parse(sandboxDetailsJsonString);
        endpoint = sandboxDetails.applications.map(app => app.shortcuts[0]).filter(x => x)[0];
    } else {
        endpoint = "http://localhost:3001";
    }
    console.log('Will run test with endpoint: ' + endpoint);
    global.endpoint = endpoint;
});

describe('Check website is alive', function () {
    
    it('endpoint returns http 200', function (done) {
        console.log('testing with endpoint: ' + global.endpoint);
        chai.request(global.endpoint)
            .get('/api/public/healthcheck')
            .then(function (res, err) {
                expect(err).to.be.undefined;
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('{"health":true,"message":"good"}');
                done();
             })
             .catch(function (err) {
                throw err;
             });
    });

    it('Returns correct version', function (done) {
        chai.request(global.endpoint)
            .get('/api/public/version')
            .then(function (res, err) {
                expect(err).to.be.undefined;
                expect(res).to.have.status(200);
                done();
             })
             .catch(function (err) {
                throw err;
             });
    });

});