const msg = require("../database/msg_database");
const dataList = [{
        data: 250,
        xaxis: "2020/08/01",
    },
    {
        data: 200,
        xaxis: "2020/08/02",
    },
    {
        data: 300,
        xaxis: "2020/08/03",
    },
    {
        data: 450,
        xaxis: "2020/08/04",
    },
    {
        data: 600,
        xaxis: "2020/08/05",
    },
    {
        data: 250,
        xaxis: "2020/08/06",
    },
    {
        data: 150,
        xaxis: "2020/08/07",
    },
    {
        data: 100,
        xaxis: "2020/08/08",
    },
    {
        data: 350,
        xaxis: "2020/08/09",
    },
    {
        data: 250,
        xaxis: "2020/08/10",
    },
    {
        data: 450,
        xaxis: "2020/08/11",
    },
    {
        data: 500,
        xaxis: "2020/08/12",
    },
    {
        data: 800,
        xaxis: "2020/08/13",
    },
    {
        data: 650,
        xaxis: "2020/08/14",
    },
    {
        data: 450,
        xaxis: "2020/08/15",
    },
    {
        data: 550,
        xaxis: "2020/08/16",
    },
    {
        data: 1000,
        xaxis: "2020/08/17",
    },
    {
        data: 900,
        xaxis: "2020/08/18",
    },
    {
        data: 450,
        xaxis: "2020/08/19",
    },
    {
        data: 600,
        xaxis: "2020/08/20",
    },
];

exports.sendDummyDataToMongo = (req, res, next) => {
    var promises = [];
    dataList.forEach((data) => {
        promises.push(msg.save(data));
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
    msg
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