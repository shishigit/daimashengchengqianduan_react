import axios, {AxiosResponse} from 'axios';
import {httpjiekou_xitong} from "../qianhoutongyong/http.jiekou";
import {notification} from "antd";

axios.interceptors.response.use(value => value,
    error =>
    {
        let response = error.response as AxiosResponse

        if (response.status === 600)
        {
            notification.open({
                message: '提示',
                description: response.data,
            });
        }

        return Promise.reject(error);
    })

class HttpFuwu
{
    private static async postForJson<T>(url: string, body: any)
    {
        let ls = await axios.post<T>(url, body)
        return ls.data
    }

    xitong_denglu(canshu: httpjiekou_xitong.denglu.Req)
    {
        return HttpFuwu.postForJson<httpjiekou_xitong.denglu.Res>('/xitong/denglu', canshu)
    }
}

export const httpFuwu = new HttpFuwu()