'use strict';

let Gerencianet = require('gn-api-sdk-node');
let options = require('../../credentials');

let params = {
    id: "95"
}

let gerencianet = new Gerencianet(options);

gerencianet.pixUnsetTxid(params)
    .then(console.log)
    .catch(console.log)
    .done();
