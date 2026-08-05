export async function onRequest(context) {
  const { request } = context;

  // ▼ ここで好きなユーザー名とパスワード（PIN）を設定してください
  const USERNAME = "komafes";
  const PASSWORD = "69";

  const authorization = request.headers.get("Authorization");

  // 認証情報がない場合はロック画面を出す
  if (!authorization) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Test Environment"',
      },
    });
  }

  // 入力された情報をチェックする
  const [scheme, encoded] = authorization.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new Response("Bad Request", { status: 400 });
  }

  const decoded = atob(encoded);
  const [user, pass] = decoded.split(":");

  // 一致したらそのままページを表示、間違っていたら再度ロック画面
  if (user === USERNAME && pass === PASSWORD) {
    return context.next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Test Environment"',
    },
  });
}