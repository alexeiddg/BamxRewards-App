const withFlagSecure = require('./gatekeeper/plugin/withFlagSecure');

module.exports = {
    expo: {
        name: 'bamx',
        slug: 'bamx',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#ffffff',
            },
            compileSdkVersion: 31,
            targetSdkVersion: 31,
            minSdkVersion: 21,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        plugins: [withFlagSecure],
    },
};
