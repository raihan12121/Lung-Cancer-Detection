import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.lungcancer.detection',
    appName: 'Website: Lung Cancer Detection App',
    webDir: 'build',
    server: {
        androidScheme: 'http',
        cleartext: true,
        allowNavigation: ['*']
    }
};

export default config;
