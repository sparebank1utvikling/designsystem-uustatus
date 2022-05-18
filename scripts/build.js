#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const glob = require('glob');


glob('reports/**/*.json', (err, files) => {
    if (err) {
        throw new Error(err);
    }

    const data = files.reduce((acc, fname) => {
        const [section, ...chunks] = path.dirname(fname).split('/');
        chunks.push(path.basename(fname, '.json'));
        const key = chunks.join('_').replaceAll(/\W/g, '_');

        const d = JSON.parse(fs.readFileSync(fname, 'utf8'));

        if (!acc[section]) {
            acc[section] = {
                [key]: d
            };
        } else {
            acc[section][key] = d;
        }

        return acc;
    }, {});

    fs.mkdirSync('lib', {recursive: true});
    fs.writeFileSync('lib/index.js', `module.exports = ${JSON.stringify(data, null, 2)};`);
});
