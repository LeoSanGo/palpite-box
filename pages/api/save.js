import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet(
  '1fMvWK4e_FLgyASv52lo67wmWED2j3KjhJi-4DkEZi4U'
);

const genCupom = ()  => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
  return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4);
}
export default async (req, res) => {
 
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A2:B2');
  
    const mostrarPromocaoCell = sheetConfig.getCell(1, 0);
    const textoCell = sheetConfig.getCell(1, 1);

    let Cupom = '';
    let Promo = '';

    if(mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupom();
      Promo = textoCell.value;
    }
     
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      'Data Preenchimento': moment().format('MMMM Do YYYY, h:mm:ss a'),
      Cupom,
      Promo
    });
    res.end(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo,
    }));
  } catch (err) {
    console.log(err);
    res.end('error')
  }

  res.end(req.body);
};
