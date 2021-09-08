import { GoogleSpreadsheet } from  'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet ('1fMvWK4e_FLgyASv52lo67wmWED2j3KjhJi-4DkEZi4U')

export default async(req, res)  => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('A2:B2');

    const mostrarPromocaoCell = sheet.getCell(1,0);
    const textoCell = sheet.getCell(1, 1)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (err) {
    console.log(err);
    res.end(JSON.stringify({
      showCoupon: false,
      message: 'erro'
    }))
  }

  
}