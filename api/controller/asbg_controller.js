const asbg = require("../database/asbg_database");
const dataList = [{
        data1: 250,
        data2: 650,
        xaxis: "2014",
    },
    {
        data1: 400,
        data2: 450,
        xaxis: "2015",
    },
    {
        data1: 300,
        data2: 250,
        xaxis: "2016",
    },
    {
        data1: 450,
        data2: 650,
        xaxis: "2017",
    },
    {
        data1: 600,
        data2: 650,
        xaxis: "2018",
    },
    {
        data1: 250,
        data2: 300,
        xaxis: "2019",
    },
    {
        data1: 150,
        data2: 450,
        xaxis: "2020",
    }
];

exports.sendDummyDataToMongo = (req, res, next) => {
    var promises = [];
    dataList.forEach((data) => {
        promises.push(asbg.save(data));
    });

    Promise.all(promises)
        .then((rslt) => {
            console.log(rslt);
            res.status(200).json({
                message: "Saving Dummy Data Success!",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: "Saving Dummy Data Failed!",
            });
        });
};

exports.receiveDummyData = (req, res, next) => {
    asbg
        .getall({})
        .then((result) => {
            console.log(result);
            res.status(200).json({
                message: result,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "Receive Dummy Data Failed!",
            });
        });
};