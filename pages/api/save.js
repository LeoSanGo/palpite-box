import { GoogleSpreadsheet } from  'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet ('1fMvWK4e_FLgyASv52lo67wmWED2j3KjhJi-4DkEZi4U')

export default async(req, res)  => {

  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: 'sadasd',
      Promo: '32423df3'
    })
    res.end(req.body)
  } catch (err) {
    console.log(err);
    res.end('error')
  }
}