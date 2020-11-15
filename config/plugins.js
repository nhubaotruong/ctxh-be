module.exports = ({ env }) => ({
    upload: {
        provider: 'dropbox',
        providerOptions: {
            accessToken: env('STORAGE_TOKEN'),
        },
    },
});