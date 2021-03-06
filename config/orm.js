const connection = require('./connection.js');

const orm = {
}

orm.insertOne = (name) => {
    const query = "insert into burgers (burger_name, devoured) values (?, 0)";
    return new Promise((resolve, reject) => {
        connection.query(query, [name], (error, results, fields) => {
            if (error) throw error;
            resolve(`${name} added`);;
        });
    });
};

orm.selectAll = () => {
    const query = 'select * from burgers';
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) throw error;
            resolve(results);
        });
    });
};

orm.updateOne = (id, devoured) => {
    const query = "update burgers set devoured = ? where id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [devoured, id], (error, results, fields) => {
            if (error) throw error;
            resolve(`Burger ID: ${id} devoured`);
        });
    });
}
module.exports = orm;