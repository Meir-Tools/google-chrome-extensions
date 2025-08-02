function getFilteredParams(url) {
  let params = {};
  try {
    let searchParams = new URL(url).searchParams;
    for (let [key, value] of searchParams.entries()) {
      if (key.startsWith("me_")) {
        params[key] = value;
      }
    }
  } catch (e) {
    console.error("Invalid URL", e);
  }
  return params;
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let url = tabs[0].url;
  let params = getFilteredParams(url);
  let output = document.getElementById("output");

  if (Object.keys(params).length === 0) {
    output.textContent = "No GET parameters starting with 'me_' found.";
  } else {
    output.textContent = JSON.stringify(params, null, 2);
  }
});
