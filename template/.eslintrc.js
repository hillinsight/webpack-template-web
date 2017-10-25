module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "standard",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.conf.js"
            }
        }
    },
    "globals": {
        "$": true,
        "UE": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-new": ["off"],
        "camelcase": ["warn", {
            "properties": "never"
        }],
        "brace-style": ["error", "stroustrup"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "never"
        }],
        "spaced-comment": ["warn", "always", {
            "line": {
                "markers": ["/"],
                "exceptions": ["-", "+"]
            },
            "block": {
                "markers": ["!", "*!"],
                "exceptions": ["*"],
                "balanced": true
            }
        }]
    }
};