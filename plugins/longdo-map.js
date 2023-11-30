import Vue from 'vue' 
import LongdoMap from 'longdo-map-vue' 

Vue.use(LongdoMap, {     
       load: {         
            apiKey: process.env.LONGDO_MAP_API_KEY,     
       } 
})