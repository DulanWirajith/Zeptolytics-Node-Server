const absg_entity = require('./../models/ASBG');


exports.save = (obj) => {
    return new Promise((resolve, reject) => {
        absg_entity.create(obj).then((result) => {
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
};


exports.getall = () => {
    return new Promise((resolve, reject) => {
        absg_entity.find({}).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        });
    });
};