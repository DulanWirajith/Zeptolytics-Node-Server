const sbl_entity = require('./../models/SBL');


exports.save = (obj) => {
    return new Promise((resolve, reject) => {
        sbl_entity.create(obj).then((result) => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
};


exports.getall = () => {
    return new Promise((resolve, reject) => {
        sbl_entity.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};