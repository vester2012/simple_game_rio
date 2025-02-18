const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname), // Указывает на корень проекта
        },
        port: 8080,
        open: true, // Открывает браузер автоматически
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // Обработка CSS
            },
        ],
    },
};
