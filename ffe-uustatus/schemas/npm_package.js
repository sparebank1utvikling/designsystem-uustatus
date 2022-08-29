export default {
    name: 'npm_package',
    title: 'NPM Pakke',
    type: 'document',
    fields: [
        {
            name: 'npm_package_name',
            title: 'Pakkenavn',
            type: 'string'
        },
        {
            name: 'npm_package_versions',
            title: 'Versjoner',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]

}