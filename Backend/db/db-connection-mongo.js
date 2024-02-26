const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb://equipopandatv:<password>@ac-rlo6lul-shard-00-00.wi750kq.mongodb.net:27017,ac-rlo6lul-shard-00-01.wi750kq.mongodb.net:27017,ac-rlo6lul-shard-00-02.wi750kq.mongodb.net:27017/?ssl=true&replicaSet=atlas-mniesx-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

        await mongoose.connect(url);
        console.log('Conexion exitosa!');
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    getConnection,
};