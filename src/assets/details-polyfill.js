// https://github.com/rstacruz/details-polyfill

// The MIT License (MIT)
//
// Copyright (c) 2018 Rico Sta. Cruz
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

void (function (root, factory) {
  if (typeof define === "function" && define.amd) define(factory);
  else if (typeof exports === "object") module.exports = factory();
  else factory();
})(this, function () {
  var DETAILS = "details";
  var SUMMARY = "summary";

  var supported = checkSupport();
  if (supported) return;

  // Add a classname
  document.documentElement.className += " no-details";

  window.addEventListener("click", clickHandler);

  injectStyle(
    "details-polyfill-style",
    "html.no-details " +
      DETAILS +
      " { display: block; }\n" +
      "html.no-details " +
      DETAILS +
      ":not([open]) > :not(" +
      SUMMARY +
      ") { display: none; }\n" +
      "html.no-details " +
      DETAILS +
      " > " +
      SUMMARY +
      ':before { content: "\u25b6"; display: inline-block; font-size: .8em; width: 1.5em; }\n' +
      "html.no-details " +
      DETAILS +
      "[open] > " +
      SUMMARY +
      ':before { content: "\u25bc"; }'
  );

  /*
   * Click handler for `<summary>` tags
   */

  function clickHandler(e) {
    if (e.target.nodeName.toLowerCase() === "summary") {
      var details = e.target.parentNode;
      if (!details) return;

      if (details.getAttribute("open")) {
        details.open = false;
        details.removeAttribute("open");
      } else {
        details.open = true;
        details.setAttribute("open", "open");
      }
    }
  }

  /*
   * Checks for support for `<details>`
   */

  function checkSupport() {
    try {
      var el = document.createElement(DETAILS);
      if (!("open" in el)) return false;

      el.innerHTML = "<" + SUMMARY + ">a</" + SUMMARY + ">b";
      document.body.appendChild(el);

      var diff = el.offsetHeight;
      el.open = true;
      var result = diff != el.offsetHeight;

      document.body.removeChild(el);
      return result;
    } catch (err) {
      // browser is probably supported, just move on
      return true;
    }
  }

  /*
   * Injects styles (idempotent)
   */

  function injectStyle(id, style) {
    if (document.getElementById(id)) return;

    var el = document.createElement("style");
    el.id = id;
    el.innerHTML = style;

    document.getElementsByTagName("head")[0].appendChild(el);
  }
}); // eslint-disable-line semi
