export default {
    name: 'wcag_rule',
    title: 'WCAG Krav',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
            required: true
        },
        {
            title: 'Nivå',
            name: 'wcag_level',
            type: 'string',
            options: {
                list: [
                    { title: 'Nivå A', value: '1' },
                    { title: 'Nivå AA', value: '2' },
                    { title: 'Nivå AAA', value: '3' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'descriptionUrl',
            title: 'Dokumentasjon', 
            description: 'Link til uu-tilsynet sin dokumentasjon om kravet',
            type: 'url',
            required: true
        },
        {
            name: 'procedureUrl',
            title: 'Prosedyre',
            description: 'Link til uu-tilsynet sin dokumentasjon om hvordan de tester kravet',
            type: 'url',
            required: true
        }
    ]
};
