'use strict';

let Gerencianet = require('gn-api-sdk-node');
let options = require('../../credentials');

let params = {
    e2eId: "E18236120202104191813s0326120V4K",
    id: "607dc88bb83bf"
}

let gerencianet = new Gerencianet(options);

gerencianet.pixDetailDevolution(params)
    .then(console.log)
    .catch(console.log)
    .done();
