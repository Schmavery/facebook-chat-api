module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "key-spacing": [
            "error",
            { "beforeColon": false }
        ],
        "keyword-spacing": [
            "error",
            { "after": true }
        ],
        "brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ]
    }
};
