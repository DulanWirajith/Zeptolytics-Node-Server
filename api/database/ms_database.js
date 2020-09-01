const ms_entity = require('./../models/MS');


exports.save = (obj) => {
    return new Promise((resolve, reject) => {
        ms_entity.create(obj).then((result) => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
};


exports.getall = () => {
    return new Promise((resolve, reject) => {
        ms_entity.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};