import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'

// // '/api':"https://heliustimebackend.onrender.com"
// https://vitejs.dev/config/ 
export default defineConfig({
  // server: {
  //   proxy:{
  //     // '/api':"http://localhost:5000"
  //     // '/api':"http://localhost:3000"
  //     '/api':"https://heliustimebackend.onrender.com"
     
  //   }

  // },

  plugins: [react()],
})
