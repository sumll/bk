import{s as r}from"./index.a625b2a2.js";import"./utils.24f6597e.js";/*
 * @author: SumO
 * @create: 2022-09-11 21:58 PM
 * @license: MIT
 * @lastAuthor: SumO
 * @lastEditTime: 2022-09-14 15:52 PM
 * @desc: 
 */const s={"content-type":"multipart/form-data"},u=e=>r({method:"POST",url:"user/username/login",headers:s,data:e}),a=e=>r({method:"POST",url:"/user/username/register",headers:s,data:e}),n=e=>r({method:"GET",url:"/user/detail",headers:s,params:e}),m=e=>r({method:"POST",url:"/user/modify",headers:s,data:e});export{n as a,u as b,a as c,m as u};
