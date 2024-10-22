export default defineEventHandler(async (event) => {
  return {
    statusCode: 200,
    statusMessage: 'OK',
    url: getRequestURL(event),
    path: event.path,
    method: event.node.req.method,
    query: getQuery(event),
    headers: getRequestHeaders(event),
    body: await readBody(event),
  }
})
