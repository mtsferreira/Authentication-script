import { Request, Response } from 'express';
import axios from 'axios';

import { toJSON} from 'flatted'
import moment from 'moment';
import {LocalStorage} from 'node-localstorage'
import crypto from 'crypto'

import { secret } from '../token/TokenJWS';

export default class ValidationAccess {

  async Access(req: Request, res: Response) {

    let localStorage = new LocalStorage('./scratch');

    let access_token = localStorage.getItem('access_token')

    const data = {"teste": "valor"}

    let nonce = Math.floor(Date.now() / 1000);

    let timestamp = moment().format('YYYY-MM-DDTHH:mm:ss-00:00')

    let request = `POST
/v1.1/jwt-service

${JSON.stringify(data)}
${access_token}
${nonce.toString()}
${timestamp}
SHA256`;

    const signer = crypto.createSign('sha256').update(request);

    let signature = signer.sign(secret)
    let dataBase64 = Buffer.from(signature).toString('base64');
    try {
      const response = await axios.post('https://proxy.api.prebanco.com.br/v1.1/jwt-service', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
          'X-Brad-Signature': dataBase64,
          'X-Brad-Nonce': nonce,
          'X-Brad-Timestamp': timestamp,
          'X-Brad-Algorithm': 'SHA256'
        }
      });

      console.log(response.data);
      return res.json(toJSON(response.data)).status(200).end()

    } catch (err) {
      console.log(err)
      return res.status(400).json({ message: err });
    }
  }
}