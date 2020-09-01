const sbl = require('../database/sbl_database');
const dataList = [{
        label: 'Sri Lanka',
        series: 250
    },
    {
        label: 'USA',
        series: 3000
    },
    {
        label: 'UK',
        series: 2000
    },
    {
        label: 'Canada',
        series: 2300
    },
    {
        label: 'Australia',
        series: 2300
    },
];

// {
//     label: 'Sri Lanka',
//     series: 250
// },
// {
//     label: 'USA',
//     series: 3000
// },
// {
//     label: 'UK',
//     series: 2000
// },
// {
//     label: 'Canada',
//     series: 2300
// },

exports.sendDummyDataToMongo = (req, res, next) => {
    var promises = [];
    dataList.forEach(data => {
        promises.push(sbl.save(data));
    });

    Promise.all(promises).then(rslt => {
        console.log(rslt);
        res.status(200).json({
            message: 'Saving Dummy Data Success!'
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: 'Saving Dummy Data Failed!'
        });
    })

};

exports.receiveDummyData = (req, res, next) => {
    sbl.getall({}).then((result) => {
        console.log(result);
        res.status(200).json({
            message: result
        });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({
            message: 'Receive Dummy Data Failed!'
        });
    });
};