export default {
    name: 'ffe_component',
    title: 'FFE komponent',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Navn',
            description: 'Brukes i dokumentasjonen til å vise riktig testrapport.',
            type: 'string',
            required: true
        },
        {
            name: 'version',
            title: 'Versjon',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'package_name',
                        title: 'NPM Pakke',
                        type: 'reference',
                        to: [{type: 'npm_package'}]
                    },
                    {
                        name: 'version_number',
                        type: 'string'
                    }
                ]
            } ],
        },
    ]
}