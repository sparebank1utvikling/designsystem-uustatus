const sanityClient = require('@sanity/client');
const { SanityToken } = require('../authSettings.json');


module.exports = {
    client: sanityClient({
        projectId: 'xcmwansr',
        dataset: 'production',
        apiVersion: '2021-10-21',
        token: SanityToken,
        useCdn: false,
    }),
};