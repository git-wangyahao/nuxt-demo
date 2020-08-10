import request from '@/plugins/request';
import proxy from '@/utils/proxy';

// export function repeatUserName(param){
// //用户名验重  false为不重复  true为重复  测试接口
//     return new Promise(resolve=>{
//         request({
//             url:proxy.lipeng+`/api/1/user/repeat/username?userOrgId=${param.userOrgId}&username=${param.username}`,
//             method:"GET",
//             params:null
//         }).then(res=>{
//             if(res.data.code==0){
//                 resolve(res.data.data)
//             }else{
//                 console.error(res.data.message);
//             }
//         }).catch(err=>{
//             console.error(err);
//         })
//     });
// }

// 列表
export function List() {
  return request({
    url: `/list`,
    method: 'get',
  })
}

// 详情
export function Detail(id) {
  return request({
    url: `/detail?id=${id}`,
    method: 'get',
  })
}
