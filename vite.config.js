import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import postcss from 'rollup-plugin-postcss';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     postcss({
//       config: {
//         path: './postcss.config.js',
//       },
//       inject: true,
//     }),
//   ],
// });
