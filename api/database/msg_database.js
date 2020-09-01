const msg_entity = require('./../models/MSG');


exports.save = (obj) => {
    return new Promise((resolve, reject) => {
        msg_entity.create(obj).then((result) => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
};


exports.getall = () => {
    return new Promise((resolve, reject) => {
        msg_entity.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};