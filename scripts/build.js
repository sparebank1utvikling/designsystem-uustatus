#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const yaml = require('yaml');

function createTestReport(dir) {
    const id = dir.replace(/^reports\//, '').replaceAll(/\W+/g, '_').replace(/_$/);
    console.log(id, '<', dir);

    const testReport = {
        id,
        testCases: [],
        ikkeRelevanteKrav: []
    };

    glob.sync(`${dir}/\*.yml`).forEach(fname => {
        const d = yaml.parse(fs.readFileSync(fname, 'utf8'));

        if (path.basename(fname, '.yml') === '_ikke-relevante-krav') {
            testReport.ikkeRelevanteKrav = d;
        } else {
            testReport.testCases.push(d);
        }
    });

    return testReport;
}


glob('reports/*/*', (err, dirs) => {
    if (err) {
        throw new Error(err);
    }

    const data = {
        rules: yaml.parse(fs.readFileSync('wcag-rules.yml', 'utf8')),
        reports: dirs.map(createTestReport)
    };

    fs.mkdirSync('lib', {recursive: true});
    fs.writeFileSync('lib/index.js', `module.exports = ${JSON.stringify(data, null, 2)};`);
});
