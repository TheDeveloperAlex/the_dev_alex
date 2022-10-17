module.exports = {
    env: {
        customKey: 'my-value',
    },
    redirects: async () => {
        return [
            {
                source: '/:id', // redirect from from
                destination: '/', // redirect to
                permanent: false, // кеширование редиректа
            },
        ]
    }
}
