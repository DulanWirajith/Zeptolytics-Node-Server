const ms = require("../database/ms_database");
const dataList = [{
        data1: 250,
        data2: 650,
        data3: 450,
        xaxis: "Jan",
    },
    {
        data1: 400,
        data2: 450,
        data3: 150,
        xaxis: "Feb",
    },
    {
        data1: 300,
        data2: 250,
        data3: 450,
        xaxis: "Mar",
    },
    {
        data1: 450,
        data2: 650,
        data3: 200,
        xaxis: "Apr",
    },
    {
        data1: 600,
        data2: 650,
        data3: 300,
        xaxis: "May",
    },
    {
        data1: 250,
        data2: 300,
        data3: 550,
        xaxis: "Jun",
    }
];

exports.sendDummyDataToMongo = (req, res, next) => {
    var promises = [];
    dataList.forEach((data) => {
        promises.push(ms.save(data));
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
    ms
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