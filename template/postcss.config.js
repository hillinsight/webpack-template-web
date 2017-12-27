/**
 * @file PostCSS Config
 * @author lifayu(fyli@hillinsight.com)
 * @since 26/06/2017
 */
module.exports = function ({file, options, env}) {
    if (!file) {
        return {
            plugins: []
        };
    }
    return {
        parser: false,
        plugins: {
            'postcss-import': {
                root: file.dirname
            },
            'postcss-cssnext': {
                browsers: ['last 4 versions', '> 5%']
            }
        }
    };
};
