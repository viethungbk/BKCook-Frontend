import React from 'react';
import { isArray } from 'util';

export const showListItem = (listItem, Item, isShowFull = false) => {
  if (isArray(listItem) && listItem.length > 0) {
    return listItem.map((item, index) => {
      return <Item key={index} item={item} isShowFull={isShowFull} />
    });
  }
}