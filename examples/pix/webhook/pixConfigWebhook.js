'use strict';

let Gerencianet = require('gn-api-sdk-node');
let options = require('../../credentials');


let body = {
    "webhookUrl": "https://exemplo-pix/webhook"
}

let params = {
    chave: "SUACHAVEPIX"
}

let gerencianet = new Gerencianet(options);

gerencianet.pixConfigWebhook(params, body)
    .then(console.log)
    .catch(console.log)
    .done();
