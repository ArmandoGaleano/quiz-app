import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  target: 'node',
  entry: './src/infrastructure/http/server.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.cjs',
    clean: true,
    chunkFormat: 'module', // Define o formato de chunk para módulo
  },
  experiments: {
    outputModule: true, // Habilita suporte a ES Modules na saída
    topLevelAwait: true, // Habilita top-level await
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    fallback: {
      crypto: false,
      stream: false,
      assert: false,
      buffer: false,
      util: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
