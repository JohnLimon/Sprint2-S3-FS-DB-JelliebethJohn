const db = require("./pgdb");

// Get all computers.
const getComputers = function () {
return new Promise(function (resolve, reject) {
    const sql = `SELECT id, cpu, gpu, ram, hard_drive, ssd, motherboard, cpu_cooler FROM computers;`;
    db.query(sql, [], (err, result) => {
    if (err) {
        console.error("Error in getComputers:", err);
        reject(err);
    } else {
        resolve(result.rows);
    }
    });
});
};

// Search computers by user query.
const searchComputers = function (query) {
return new Promise(function (resolve, reject) {
    const sql = `
    SELECT id, cpu, gpu, ram, hard_drive, ssd, motherboard, cpu_cooler
    FROM computers
    WHERE
        cpu ILIKE $1 OR
        gpu ILIKE $1 OR
        ram ILIKE $1 OR
        hard_drive ILIKE $1 OR
        ssd ILIKE $1 OR
        motherboard ILIKE $1 OR
        cpu_cooler ILIKE $1;
    `;
    db.query(sql, [`%${query}%`], (err, result) => {
    if (err) {
        console.error("Error in searchComputers:", err);
        reject(err);
    } else {
        resolve(result.rows);
    }
    });
});
};

module.exports = {
    getComputers,
    searchComputers,
};
