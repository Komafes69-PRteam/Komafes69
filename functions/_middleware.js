// functions/_middleware.js
export async function onRequest(context) {
  const { request, next } = context;

  const expectedUsername = 'komafes';
  const expectedPassword = '69';
  const expectedAuth = `Basic ${btoa(`${expectedUsername}:${expectedPassword}`)}`;

  const authHeader = request.headers.get('Authorization');

  // 認証が一致しない場合はポップアップを出す
  if (authHeader !== expectedAuth) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Restricted Area"',
      },
    });
  }

  // 認証成功時は通常のページを返す
  return next();
}