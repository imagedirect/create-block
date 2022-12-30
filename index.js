const { join } = require('path');

module.exports = {
    defaultValues: {
        slug: 'block-slug',
        title: 'Block',
        dashicon: 'heart',
        version: '0.0.1',
        namespace: 'imagedirect',
        author: 'imagedirect',
        pluginURI: 'https://www.imagedirect.com.au',
        updateURI: false,
        wpEnv: true,
    },
    pluginTemplatesPath: join(__dirname, '/inc/templates/plugin'),
};