export default url => {
  return new Promise((succes, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400 ? succes(requst.responseText) : fail(new Error(`Requst Failed: ${requst.statusText}`));
    });

    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });

    request.send();
  });
};
