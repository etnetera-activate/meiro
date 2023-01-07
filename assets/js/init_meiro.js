var dataLayer = dataLayer || [];

(function () {
  function loadScriptAsync(url, onload) {
    var scriptTag = document.createElement("script");
    var firstScriptElement = document.getElementsByTagName("script")[0];

    scriptTag.type = "text/javascript";
    scriptTag.async = true;
    scriptTag.src = url;

    scriptTag.onload = onload;

    firstScriptElement.parentNode.insertBefore(scriptTag, firstScriptElement);
  }

  loadScriptAsync(dataLayer.digitalAnalyticsLibrary);
  loadScriptAsync("https://" + dataLayer.meiroEventsDomain + "/sdk/", function () {
    dataLayer.push({ event: "meiro_loaded" });
  });
})();
