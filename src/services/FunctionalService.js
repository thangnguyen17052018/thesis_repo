import axios from 'axios'
import { urlStr } from "../common/constants";

const baseUrl = `${urlStr}/functionals`

const functionalService = {
   startRecord: async (pid) => {
      if (!pid) {
         return
      }
      const res = await axios.get(`${baseUrl}/record?pid=${pid}`)

      return res;
   },
   stopRecord: async () => {
      const res = await axios.get(`${baseUrl}/stop_record`)

      return res;
   },
   startPlayback: async (pid, item) => {
      try {
         const res = await axios.post(`${baseUrl}/playback`, {
            pid: pid,
            item: item
         })

         return res;
      } catch (error) {
         throw error
      }
   },
   startPlaybackBackground: async ({ processId, controlId }, item) => {
      try {
         const res = await axios.post(`${baseUrl}/playback/background`, {
            processId: processId,
            controlId: controlId,
            item: item
         })

         return res;
      } catch (error) {
         throw error
      }
   },
   refreshSysKey: async () => {
      const res = await axios.get(`${baseUrl}/refresh_syskey`)

      return res;
   },
   showCoordinate: async (pid) => {
      if (pid == null)
         pid = 0
      const res = await axios.put(`${baseUrl}/getcoord?pid=${pid}`);

      return res;
   },
   screenshot: async (pid) => {
      await axios.post(`${baseUrl}/screenshot`, {
         pid: pid
      })
   },
}

export default functionalService