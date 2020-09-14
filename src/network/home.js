import {
  request,
  request1
} from './request';

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request1({
    url: '/Product/GetNewProductCategoryList',
    params: {
      MainCategory: type,
      pageIndex: page,
      cacheID: 35258
    }
  })
}
