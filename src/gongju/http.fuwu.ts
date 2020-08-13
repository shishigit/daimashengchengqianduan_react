import axios from 'axios';
import {httpjiekou_xitong} from "../qianhoutongyong/http.jiekou";

class HttpFuwu
{
    xitong_denglu(canshu: httpjiekou_xitong.denglu.Req)
    {
        return axios.post<httpjiekou_xitong.denglu.Res>('/xitong/denglu', canshu)
    }
}

export const httpFuwu = new HttpFuwu()