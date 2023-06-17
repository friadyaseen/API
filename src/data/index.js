const fs = require('fs');

const DATA = {
    Read: function (path) {
        let data = JSON.parse(fs.readFileSync(path, 'utf8'));
        return data
    },

    Write: function (path, file) {
        fs.writeFileSync(path, JSON.stringify(file, null, 2));
    },
    WriteR: function (path, file) {
        fs.writeFileSync(path, JSON.stringify(file, null, 2));

        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }
}
module.exports = DATA