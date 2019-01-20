const marked = require("marked");
const renderer = new marked.Renderer()

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        use: ['html-loader', {
          loader: 'markdown-loader',
          options: { renderer }
        }]
      }
    ],
  },
}
