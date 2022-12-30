const { join } = require('path');

module.exports = {
    defaultValues: {
        slug: 'block',
        title: 'block',
        dashicon: 'heart',
        version: '0.0.1',
        namespace: 'imagedirect',
        author: 'imagedirect',
        updateURI: false,
        wpEnv: true,
    },
    pluginTemplatesPath: join(__dirname, '/inc/templates/plugin'),
};