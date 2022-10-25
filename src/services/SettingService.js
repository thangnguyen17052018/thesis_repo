import axios from 'axios';
import { urlStr } from '../common/constants';

const baseUrl = `${urlStr}/setting`

const SettingService = {
    getAll: async () => {
        const res = await axios.get(`${baseUrl}/getAll`);

        return res.data.data;
    },

    saveHotKeys: async (hotKeyItem) => {
        const res = await axios.post(`${baseUrl}/saveHotKeys`, hotKeyItem)

        return res.data.data;
    }
};

export default SettingService;