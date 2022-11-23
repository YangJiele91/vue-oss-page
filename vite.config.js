import vue from '@vitejs/plugin-vue'

export default {
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    },
    host:'0.0.0.0',
    server:{
        proxy:{
            '/api':{
                target:'http://127.0.0.1:9000',
                changeOrigin:true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
}