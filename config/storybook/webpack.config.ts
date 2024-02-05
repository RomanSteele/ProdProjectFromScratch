import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/build-css-loader';

export default ({ config }: { config?: webpack.Configuration }) => {
    const updatedConfig: webpack.Configuration = { ...config };

    if (updatedConfig?.resolve?.extensions) {
        updatedConfig.resolve.extensions.push('.ts', '.tsx');
    }

    if (updatedConfig?.module?.rules) {
    // Use filter to eliminate undefined values
        updatedConfig.module.rules = updatedConfig.module.rules
            .filter((rule): rule is RuleSetRule => rule !== undefined)
            .map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }

                return rule;
            });
    }

    if (updatedConfig?.module?.rules) {
        updatedConfig.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        updatedConfig.module.rules.push(buildCssLoader(true));
    }

    updatedConfig.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));

    return updatedConfig;
};
