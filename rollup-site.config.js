import createDefaultConfig from '@open-wc/building-rollup/modern-config';

import cssbundle from 'rollup-plugin-css-bundle';

// noinspection JSUnusedGlobalSymbols
export default createDefaultConfig(
    {
        input: 'demo/index.js',
        outputDir: 'dist/site',
        plugins: [cssbundle()]
    }
);
