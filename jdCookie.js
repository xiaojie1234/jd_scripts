/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_pin=w13232321958;pt_key=AAJfuTjHADC-_6Z9FPPsWXmUYZpz7VxIOmvfG8NNgMEjS0J71OVEK5d_cF1RhU0Yg63Zpzm5cho;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '__jdu=613192683; shshshfpa=17b89dbe-a8ca-c00b-375c-79701e8622ae-1559825070; shshshfpb=ygQe6ncDNb2dxsXxuyHo0bg%3D%3D; areaId=19; ipLoc-djd=19-1601-3633-0; PCSYCityID=CN_440000_440100_440106; pinId=f2hO0Fg-RWA98tbLw_xPaw; pin=jd_SoRjNkxDpBkO; unick=jd_SoRjNkxDpBkO; _tp=axCQkWGSxEy6IY6j68KwOQ%3D%3D; _pst=jd_SoRjNkxDpBkO; TrackID=1WPlvMAG6i5qTgSfswIRqDm_8ChyLQETNNCVqzJj0rNoIM_VjcLXMQnVhNhCG9AWk1Vlw3zt3JfY7vOAgJxgdz_7Qbj7tBKNpZNtEQ67aQFg1qu0Hr8t0RSc2J1asBym1; ceshi3.com=000; user-key=81cbe27e-88d9-4ac2-906f-631f8740e52a; cn=0; unpl=V2_ZzNtbRcEQBB8XBRcLE0IB2IDG1tKXxQSdgpDVXwRWAVvURReclRCFnQURlRnGl8UZgsZX0NcQBRFCEdkeBBVAWMDE1VGZxBFLV0CFSNGF1wjU00zQwBBQHcJFF0uSgwDYgcaDhFTQEJ2XBVQL0oMDDdRFAhyZ0AVRQhHZHwZXgVvABVUQGdzEkU4dlByGVwHbzMTbUNnAUEpC0dUehxVSGADEF1KVEQcdzhHZHg%3d; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_db248ec9fee3418799f6234069519c72|1606008632472; shshshfp=0ecd28d899684b6b788120b312701aa4; shshshsID=28bb9b4e661446aed3979c16aa73aaab_1_1606008634176; __jda=122270672.613192683.1559752782.1605950765.1606008632.17; __jdb=122270672.2.613192683|17.1606008632; __jdc=122270672; thor=53D1B262752E98B236CC81A7AEA38B6929E320BF8B565838A9861A86E5DA1C3B67BAFF53E2F6D04D32B85B45CFEE9B778A8828AA8F057B6268432CBB6B2699F9D367E3EF31EF3C561182CE77722D388BBC6E9B7C98AF1105CC00EED67A41EF43BEA18BAE89E674C21A4DEF3E3EE5E476E6B4EF770662A8B15933214991B8FEABC437428E505E99F7AD1B8199308A6511160C24F37CD4E4DD741FA16A55A47796; 3AB9D23F7A4B3C9B=NT3JTUDNKG6YHA3JV6MBDT6G57FDF34ISVQQLHTKKVNDARXICAAG5X3SAWTBG2GYEUG7BR4CZIHFZQ5DHFZJAQYSEA; ',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
