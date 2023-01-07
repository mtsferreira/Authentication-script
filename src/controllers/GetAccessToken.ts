import { Request, Response } from 'express';
import axios from 'axios'
import {LocalStorage} from 'node-localStorage'

import { toJSON } from 'flatted'

import { jws } from '../token/TokenJWS';

export default class GetAccessToken {

  async index(req: Request, res: Response) {

    let localStorage = new LocalStorage('./scratch');

    const params = new URLSearchParams();
    params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
    params.append('assertion', jws);

    try {
      const response = await axios.post('https://proxy.api.prebanco.com.br/auth/server/v1.1/token', params);

      let access_token = toJSON(response.data.access_token);
      localStorage.setItem('access_token', access_token);
      console.log(access_token);
      return res.json(toJSON(response.data)).status(200);

    } catch (err) {
      console.log(err)
      return res.status(400).json({
        message: err
      })
    }

  }

}