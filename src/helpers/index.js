// export const API = 'http://localhost:4200';
//export const API = 'http://localhost:5001';
export const API = 'http://localhost:5001';
export const getHeader = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const convertFromDate = value => {
  let year = value.getFullYear();
  let month = `${value.getMonth() + 1}`;
  if (month.length === 1) {
    month = `0${month}`;
  }
  let date = `${value.getDate()}`;
  if (date.length === 1) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const change_alias = alias => {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  str = str.replace(/ + /g, ' ');
  str = str.replace(/\s/g, '');
  str = str.trim();
  return str;
};

export const statusShipmentLst = [
  { code: 'F', name: 'Finished' },
  { code: 'C', name: 'Cancelled' },
  { code: 'P', name: 'Pending' }
];

export const statusPaymentLst = [{ code: 'P', name: 'Paid' }];
