import axios from 'axios'
import { urlStr } from "../common/constants";

const scriptService = {
   saveScript: async (items, filePath, password) => {
      const res = await axios.post(`${urlStr}/script/save`, {
         items,
         filePath,
         password
      })

      return res.data.data;
   },
   saveAsScript: async (items, password) => {

      const res = await axios.post(`${urlStr}/script/saveAs`, {
         items,
         password
      })
      return res.data.data;
   },

   getImagePath: async () => {
      const res = await axios.get(`${urlStr}/script/get_image_path`)
      return res.data.data
   },

   selectFile: async () => {
      const res = await axios.get(`${urlStr}/script/selectScriptFile`)
      return res.data.data
   },

   open: async (filePath, password) => {
      try {
         const res = await axios.get(`${urlStr}/script/open?filePath=${filePath}&password=${encodeURIComponent(password)}`)
         return res.data.data
      }
      catch (e) {
         return null
      }
   }
}

export default scriptService