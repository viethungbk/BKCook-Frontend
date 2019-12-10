import React from 'react';
import { isArray } from 'util';

export const showListItem = (listItem, Item, isShowFull = false) => {
  if (isArray(listItem) && listItem.length > 0) {
    return listItem.map((item, index) => {
      return <Item key={index} item={item} isShowFull={isShowFull} />
    });
  }
}

export const convertToUrlKey = (str, _id) => {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
  str = str.replace(/đ/g, "d")
  str = str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, "-")
  str = str.replace(/-+-/g, "-") //thay thế 2- thành 1-
  str = str.replace(/^\-+|\-+$/g, "")//cắt bỏ ký tự - ở đầu và cuối chuỗi

  return str + '-' + _id
}