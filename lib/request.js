export default function request (method, url, body) {
  method = method.toUpperCase();
  if (method === 'GET') {
    // fetch的GET不允许有body，参数只能放在url中
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/*',
      'Accept': 'application/json',
      'Access-Token': sessionStorage.getItem('access_token') || '' // 从sessionStorage中获取access token
    },
    body
  })
    .then((res) => {
      if (res.status === 404) {
          //window.location.href='/login'
        return Promise.reject('Unauthorized.');
      } else {
        const token = res.headers.get('access-token');
        if (token) {
          sessionStorage.setItem('access_token', token);
        }
        return res.json();
      }
    });
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);