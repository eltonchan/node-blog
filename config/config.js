//var sequelize= new Sequelize('yantubao.com', 'root', '', {host : '192.168.0.207', post:'3306', dialect : 'mysql'});
var Config = {
    db:{
        database:'qdm226204173_db',
        username:'qdm226204173',
        password:'13459960256',
        insecureAuth: true,
        options:{
            host : 'qdm226204173.my3w.com',
            dialect : 'mysql',
            post:'3306'
        }
    }
};
module.exports = Config;