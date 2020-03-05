$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cart.feature");
formatter.feature({
  "line": 2,
  "name": "Add the product to the cart",
  "description": "As a user who like to shop on this online store\r\nI want to select a product from this page\r\nSo that I can see the product in my cart.\r\n\r\nAcceptance Criteria\r\n-I will be able to open the webpage\r\n-I should be able to view all the options available\r\n-I should be able to select corresponding product from the store.\r\n-I should be able to view item selecting my cart.",
  "id": "add-the-product-to-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@cart"
    }
  ]
});
formatter.before({
  "duration": 36522271100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add the product to the cart",
  "description": "",
  "id": "add-the-product-to-the-cart;add-the-product-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search for a product\"Dresses\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select an sub selection of product\" \"",
  "keyword": "And "
});
formatter.match({
  "location": "CartStepDefinition.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 925214500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses",
      "offset": 23
    }
  ],
  "location": "CartStepDefinition.iSearchForAProduct(String)"
});
formatter.result({
  "duration": 5802127800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 37
    }
  ],
  "location": "CartStepDefinition.iSelectAnSubSelectionOfProduct(String)"
});
formatter.result({
  "duration": 3273966700,
  "error_message": "org.openqa.selenium.WebDriverException: element not interactable\n  (Session info: chrome\u003d80.0.3987.122)\n  (Driver info: chromedriver\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 151 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027BOYZWIDTOYZ\u0027, ip: \u0027192.168.8.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:63594}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\Pavan\\AppData\\Local\\Temp\\scoped_dir10104_1539891129}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.122, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3bbf4c34dd2e3c6c49fcf4230e467a33\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:122)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat com.maven.assignment.pageObjects.CartObjects.setSelectingProduct(CartObjects.java:31)\r\n\tat com.maven.assignment.stepDefs.CartStepDefinition.iSelectAnSubSelectionOfProduct(CartStepDefinition.java:30)\r\n\tat ✽.And I select an sub selection of product\" \"(cart.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 44400,
  "status": "passed"
});
});