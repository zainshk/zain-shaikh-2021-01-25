module.exports = {
    presets: [
        [
            '@babel/preset-env', {targets: {node: 'current'}}
        ],
        [
            'next/babel',
            {
                "preset-env": {
                "targets": {
                    "chrome": "73",
                    "node": "11"
                }
                }
            }
        ]
    ],
}