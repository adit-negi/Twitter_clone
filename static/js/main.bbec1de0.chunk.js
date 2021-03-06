(this["webpackJsonptweetme2-web"] =
  this["webpackJsonptweetme2-web"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a.p + "static/media/logo.5d5d9eef.svg";
    },
    function (e, t, a) {
      e.exports = a(13);
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(2),
        l = a.n(c),
        o = (a(11), a(5)),
        s = a.n(o),
        i = (a(12), a(3)),
        m = a(1);
      function u(e) {
        var t = r.a.createRef(),
          a = Object(n.useState)([]),
          c = Object(m.a)(a, 2),
          l = c[0],
          o = c[1];
        return r.a.createElement(
          "div",
          { className: e.className },
          r.a.createElement(
            "div",
            { className: "col-12 mb-3" },
            r.a.createElement(
              "form",
              {
                onSubmit: function (e) {
                  e.preventDefault();
                  var a = t.current.value,
                    n = Object(i.a)(l);
                  n.unshift({ content: a, likes: 0, id: 12313 }),
                    o(n),
                    (t.current.value = "");
                },
              },
              r.a.createElement("textarea", {
                ref: t,
                required: !0,
                className: "form-control",
                name: "tweet",
              }),
              r.a.createElement(
                "button",
                { type: "submit", className: "btn btn-primary my-3" },
                "Tweet"
              )
            )
          ),
          r.a.createElement(p, { newTweets: l })
        );
      }
      function p(e) {
        var t = Object(n.useState)([]),
          a = Object(m.a)(t, 2),
          c = a[0],
          l = a[1],
          o = Object(n.useState)([]),
          s = Object(m.a)(o, 2),
          u = s[0],
          p = s[1];
        return (
          Object(n.useEffect)(
            function () {
              var t = Object(i.a)(e.newTweets).concat(c);
              t.length !== u.length && p(t);
            },
            [e.newTweets, u, c]
          ),
          Object(n.useEffect)(
            function () {
              !(function (e) {
                var t = new XMLHttpRequest();
                (t.responseType = "json"),
                  t.open("GET", "http://localhost:8000/api/tweets/"),
                  (t.onload = function () {
                    e(t.response, t.status);
                  }),
                  (t.onerror = function (t) {
                    console.log(t),
                      e({ message: "The request was an error" }, 400);
                  }),
                  t.send();
              })(function (e, t) {
                200 === t ? l(e) : alert("There was an error");
              });
            },
            [c]
          ),
          u.map(function (e, t) {
            return r.a.createElement(f, {
              tweet: e,
              className: "my-5 py-5 border bg-white text-dark",
              key: "".concat(t, "-{item.id}"),
            });
          })
        );
      }
      function d(e) {
        var t = e.tweet,
          a = e.action,
          c = Object(n.useState)(t.likes ? t.likes : 0),
          l = Object(m.a)(c, 2),
          o = l[0],
          s = l[1],
          i = Object(n.useState)(!0 === t.userLike),
          u = Object(m.a)(i, 2),
          p = u[0],
          d = u[1],
          f = e.className ? e.className : "btn btn-primary btn-sm",
          b = a.display ? a.display : "Action",
          w = "like" === a.type ? "".concat(o, " ").concat(b) : b;
        return r.a.createElement(
          "button",
          {
            className: f,
            onClick: function (e) {
              e.preventDefault(),
                "like" === a.type &&
                  (!0 === p ? (s(o - 1), d(!1)) : (s(o + 1), d(!0)));
            },
          },
          w
        );
      }
      function f(e) {
        var t = e.tweet,
          a = e.className ? e.className : "col-10 mx-auto col-md-6";
        return r.a.createElement(
          "div",
          { className: a },
          r.a.createElement("p", null, t.id, " - ", t.content),
          r.a.createElement(
            "div",
            { className: "btn btn-group" },
            r.a.createElement(d, {
              tweet: t,
              action: { type: "like", display: "Likes" },
            }),
            r.a.createElement(d, {
              tweet: t,
              action: { type: "unlike", display: "Unlike" },
            }),
            r.a.createElement(d, {
              tweet: t,
              action: { type: "retweet", display: "" },
            })
          )
        );
      }
      var b = function () {
        return r.a.createElement(
          "div",
          { className: "App" },
          r.a.createElement(
            "header",
            { className: "App-header" },
            r.a.createElement("img", {
              src: s.a,
              className: "App-logo",
              alt: "logo",
            }),
            r.a.createElement(
              "p",
              null,
              "Edit ",
              r.a.createElement("code", null, "src/App.js"),
              " and save to reload."
            ),
            r.a.createElement("div", null, r.a.createElement(u, null)),
            r.a.createElement(
              "a",
              {
                className: "App-link",
                href: "https://reactjs.org",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "Learn React"
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var w = document.getElementById("root");
      w && l.a.render(r.a.createElement(b, null), w);
      var E = document.getElementById("tweetme-2");
      E && l.a.render(r.a.createElement(u, null), E),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  ],
  [[6, 1, 2]],
]);
//# sourceMappingURL=main.bbec1de0.chunk.js.map
