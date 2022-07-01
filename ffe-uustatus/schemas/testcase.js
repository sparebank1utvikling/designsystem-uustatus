
export default {
    name: 'testcase',
    title: 'Test',
    type: 'document',
    groups: [
        {
            name: 'group_component',
            title: 'Komponent',
        },
        {
            name: 'group_test',
            title: 'Test',
        },
    ],
    fields: [
        {
            name: "component",
            title: 'FFE Komponent',
            description: 'Hvilken komponent testes?',
            group: 'group_component',
            type: 'reference',
            to: [{ type: 'ffe_component' }]
        },
        {
            name: 'npm_version',
            title: 'Versjon',
            description: 'Hvilke NPM-versjoner ble testet?',
            group: 'group_component',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'npm_package',
                            type: 'reference',
                            to: [{ type: 'npm_package' }]
                        },
                        {
                            type: 'string',
                            name: 'version_number',
                            title: 'Versjonsnummer',
                        }
                    ]
                }

            ]
        },
        {
            name: 'test_environment',
            title: 'Testmiljø',
            description: 'Hvilket enheter ble komponenten testet på?',
            type: 'array',
            group: 'group_test',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'device',
                            title: 'Enhet',
                        },
                        {
                            type: 'string',
                            name: 'OS',
                            title: 'Operativsystem',
                        },
                        {
                            type: 'string',
                            name: 'version',
                            title: 'Versionnummer',
                        }
                    ]
                }

            ]
        },
        {
            name: 'variants',
            title: 'Varianter',
            description: 'Varianter av komponenten som ble testet f.eks hover, focus etc',
            group: 'group_test',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Fargemodus',
            name: 'colormode',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Light', value: 'light' },
                    { title: 'Dark', value: 'dark' },
                ]
            }
        },
        {
            name: 'method',
            title: 'Metode',
            description: 'Steg-for-steg oppskrift på hvordan komponenten er testet',
            group: 'group_test',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Resultat',
            name: 'result',
            type: 'string',
            group: 'group_test',
            require: true,
            options: {
                list: [
                    { title: 'Godkjent', value: 'approved' },
                    { title: 'Ikke godkjent', value: 'not_approved' },
                    { title: 'Ikke testet', value: 'not_tested' },
                ],
                layout: 'radio' 
            }
        },
        {
            name: 'comment',
            group: 'group_test',
            title: 'Kommentar',
            type: 'text'
        }
    ]
}