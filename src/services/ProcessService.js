import axios from 'axios';
import { urlStr } from '../common/constants';

const baseUrl = `${urlStr}/processes`

const ProcessService = {
    getAll: async (deep = false) => {
        const res = await axios.get(`${baseUrl}/getall?shouldFilterSystemProcesses=${deep}`);

        return res.data.data;
    },

    getAllControls: async (pid) => {
        const res = await axios.get(`${baseUrl}/process/getallcontrols?pid=${pid}`);

        return res.data.data;
    },

    bringToFront: async (pid) => {
        const res = await axios.put(`${baseUrl}/process/front?pid=${pid}`);

        return res.data.data;
    },

    checkExists: async (pid) => {
        const res = await axios.put(`${baseUrl}/process/exists?pid=${pid}`);

        return res.data.data;
    },

    getAllControlsByName: async (processName) => {
        try {
            const res = await axios.get(`${baseUrl}/process/getallcontrolsbyname?name=${processName}`);

            return res.data.data;
        } catch (error) {
            return null
        }
    }
};

export default ProcessService;