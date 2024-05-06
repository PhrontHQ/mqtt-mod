const RawDataService = require("mod/data/service/raw-data-service").RawDataService,
    DataOperation = require("mod/data/service/data-operation").DataOperation;
var RawServiceClient;

/**
*
* @class
* @extends RawDataService
*/
exports.MQTTDataService = class MQTTDataService extends RawDataService {/** @lends MQTTDataService */

/*
    https://github.com/mqttjs/MQTT.js#readme
    https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/
    https://www.npmjs.com/package/mqtt#install
    https://www.emqx.com/en/blog/mqtt-js-tutorial
*/



    /***************************************************************************
     * Initializing
     */

    constructor() {
        super();

        return this;
    }

    static {

        Montage.defineProperties(this.prototype, {
            someProp: {
                value: "A prop on the prototype"
            }
        });
    }

    instantiateRawClientWithOptions(rawClientOptions) {
        return new SecretManagerServiceClient(rawClientOptions/*??*/);
    }

    rawClientPromises() {
        var promises = super();

        /*
            This lazy load allows to reduce cold-start time, but to kick-start load of code in the phase that's not billed, at least on AWS
        */

        promises.push(
            require.async("mqtt").then(function(exports) {
                //Finish Me
                //RawServiceClient = exports.SOMETHING;
            })
        );

        return promises;
    }

    handleCreateTransactionOperation(createTransactionOperation) {
    }

    handleReadOperation(readOperation) {
    }

}
