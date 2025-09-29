import * as q from "react";
import Be, { createContext as bo, useReducer as xo, useRef as ke, useEffect as pe, useCallback as ne, useContext as So, useMemo as xe, useState as de, forwardRef as Pn, useImperativeHandle as vo } from "react";
import { Box as J, Alert as Qe, Typography as U, List as Sr, ListItem as vr, ListItemText as Er, Button as Te, Paper as st, Stack as Mr, Divider as Lr, TextField as Re, FormControl as Ct, FormLabel as In, RadioGroup as Eo, FormControlLabel as Nn, Radio as To, FormHelperText as Je, InputLabel as Mn, Select as Ln, MenuItem as bt, FormGroup as Co, Checkbox as wo, Chip as Tr, OutlinedInput as Oo, ListItemSecondaryAction as jo, IconButton as lt, CircularProgress as hr, Card as Ro, CardMedia as Ao, CardContent as _o, useTheme as ko, useMediaQuery as $o, Toolbar as qt, ListItemButton as Po, AppBar as Io, Drawer as No, Container as Dn, LinearProgress as Mo, CssBaseline as er } from "@mui/material";
import Lo from "localforage";
import { Visibility as Do, ArrowBack as Vo, ArrowBackIosNew as Bo, ArrowForwardIos as Fo, Error as Uo, Add as Ko, Delete as Vn, MyLocation as Wo, PhotoCamera as Dr, CameraAlt as Vr, CloudUpload as zo, ChevronLeft as Go, CheckCircle as Yo, RadioButtonUnchecked as Ho, Menu as Qo, Send as Jo } from "@mui/icons-material";
import { Global as Xo, ThemeContext as Bn } from "@emotion/react";
import "@emotion/styled";
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _t = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function qo() {
  if (Br) return ft;
  Br = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var u in o)
        u !== "key" && (a[u] = o[u]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: n,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return ft.Fragment = t, ft.jsx = r, ft.jsxs = r, ft;
}
var pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function ea() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === T ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case c:
          return "Fragment";
        case v:
          return "Profiler";
        case g:
          return "StrictMode";
        case S:
          return "Suspense";
        case k:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case f:
            return "Portal";
          case I:
            return (d.displayName || "Context") + ".Provider";
          case R:
            return (d._context.displayName || "Context") + ".Consumer";
          case O:
            var E = d.render;
            return d = d.displayName, d || (d = E.displayName || E.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case $:
            return E = d.displayName || null, E !== null ? E : e(d.type) || "Memo";
          case A:
            E = d._payload, d = d._init;
            try {
              return e(d(E));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var P = E.error, j = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return P.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(d);
      }
    }
    function n(d) {
      if (d === c) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === A)
        return "<...>";
      try {
        var E = e(d);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = N.A;
      return d === null ? null : d.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(d) {
      if (l.call(d, "key")) {
        var E = Object.getOwnPropertyDescriptor(d, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, E) {
      function P() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: P,
        configurable: !0
      });
    }
    function p() {
      var d = e(this.type);
      return X[d] || (X[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function m(d, E, P, j, L, B, F, K) {
      return P = B.ref, d = {
        $$typeof: b,
        type: d,
        key: E,
        props: B,
        _owner: L
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function x(d, E, P, j, L, B, F, K) {
      var W = E.children;
      if (W !== void 0)
        if (j)
          if (M(W)) {
            for (j = 0; j < W.length; j++)
              y(W[j]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(W);
      if (l.call(E, "key")) {
        W = e(d);
        var H = Object.keys(E).filter(function(ge) {
          return ge !== "key";
        });
        j = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", V[W + j] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          W,
          H,
          W
        ), V[W + j] = !0);
      }
      if (W = null, P !== void 0 && (r(P), W = "" + P), s(E) && (r(E.key), W = "" + E.key), "key" in E) {
        P = {};
        for (var z in E)
          z !== "key" && (P[z] = E[z]);
      } else P = E;
      return W && u(
        P,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), m(
        d,
        W,
        B,
        L,
        o(),
        P,
        F,
        K
      );
    }
    function y(d) {
      typeof d == "object" && d !== null && d.$$typeof === b && d._store && (d._store.validated = 1);
    }
    var h = Be, b = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), I = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), N = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, l = Object.prototype.hasOwnProperty, M = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var G, X = {}, re = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), ee = _(n(a)), V = {};
    pt.Fragment = c, pt.jsx = function(d, E, P, j, L) {
      var B = 1e4 > N.recentlyCreatedOwnerStacks++;
      return x(
        d,
        E,
        P,
        !1,
        j,
        L,
        B ? Error("react-stack-top-frame") : re,
        B ? _(n(d)) : ee
      );
    }, pt.jsxs = function(d, E, P, j, L) {
      var B = 1e4 > N.recentlyCreatedOwnerStacks++;
      return x(
        d,
        E,
        P,
        !0,
        j,
        L,
        B ? Error("react-stack-top-frame") : re,
        B ? _(n(d)) : ee
      );
    };
  })()), pt;
}
var Ur;
function ta() {
  return Ur || (Ur = 1, process.env.NODE_ENV === "production" ? _t.exports = qo() : _t.exports = ea()), _t.exports;
}
var i = ta();
function Ue(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const ct = "$$material";
function ra(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var na = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function oa(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var aa = /[A-Z]|^ms/g, ia = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Fn = function(t) {
  return t.charCodeAt(1) === 45;
}, Kr = function(t) {
  return t != null && typeof t != "boolean";
}, tr = /* @__PURE__ */ oa(function(e) {
  return Fn(e) ? e : e.replace(aa, "-$&").toLowerCase();
}), Wr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ia, function(n, o, a) {
          return Fe = {
            name: o,
            styles: a,
            next: Fe
          }, o;
        });
  }
  return na[t] !== 1 && !Fn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Lt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Fe = {
          name: o.name,
          styles: o.styles,
          next: Fe
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Fe = {
              name: s.name,
              styles: s.styles,
              next: Fe
            }, s = s.next;
        var u = a.styles + ";";
        return u;
      }
      return sa(e, t, r);
    }
  }
  var p = r;
  return p;
}
function sa(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Lt(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var u = s;
        Kr(u) && (n += tr(a) + ":" + Wr(a, u) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var p = 0; p < s.length; p++)
          Kr(s[p]) && (n += tr(a) + ":" + Wr(a, s[p]) + ";");
      else {
        var m = Lt(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += tr(a) + ":" + m + ";";
            break;
          }
          default:
            n += a + "{" + m + "}";
        }
      }
    }
  return n;
}
var zr = /label:\s*([^\s;{]+)\s*(;|$)/g, Fe;
function la(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Fe = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += Lt(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Lt(r, t, e[u]), n) {
      var p = a;
      o += p[u];
    }
  zr.lastIndex = 0;
  for (var m = "", x; (x = zr.exec(o)) !== null; )
    m += "-" + x[1];
  var y = ra(o) + m;
  return {
    name: y,
    styles: o,
    next: Fe
  };
}
var kt = { exports: {} }, $t = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function ca() {
  if (Gr) return oe;
  Gr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function I(S) {
    if (typeof S == "object" && S !== null) {
      var k = S.$$typeof;
      switch (k) {
        case t:
          switch (S = S.type, S) {
            case p:
            case m:
            case n:
            case a:
            case o:
            case y:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case x:
                case f:
                case b:
                case s:
                  return S;
                default:
                  return k;
              }
          }
        case r:
          return k;
      }
    }
  }
  function O(S) {
    return I(S) === m;
  }
  return oe.AsyncMode = p, oe.ConcurrentMode = m, oe.ContextConsumer = u, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = x, oe.Fragment = n, oe.Lazy = f, oe.Memo = b, oe.Portal = r, oe.Profiler = a, oe.StrictMode = o, oe.Suspense = y, oe.isAsyncMode = function(S) {
    return O(S) || I(S) === p;
  }, oe.isConcurrentMode = O, oe.isContextConsumer = function(S) {
    return I(S) === u;
  }, oe.isContextProvider = function(S) {
    return I(S) === s;
  }, oe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, oe.isForwardRef = function(S) {
    return I(S) === x;
  }, oe.isFragment = function(S) {
    return I(S) === n;
  }, oe.isLazy = function(S) {
    return I(S) === f;
  }, oe.isMemo = function(S) {
    return I(S) === b;
  }, oe.isPortal = function(S) {
    return I(S) === r;
  }, oe.isProfiler = function(S) {
    return I(S) === a;
  }, oe.isStrictMode = function(S) {
    return I(S) === o;
  }, oe.isSuspense = function(S) {
    return I(S) === y;
  }, oe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === m || S === a || S === o || S === y || S === h || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === b || S.$$typeof === s || S.$$typeof === u || S.$$typeof === x || S.$$typeof === g || S.$$typeof === v || S.$$typeof === R || S.$$typeof === c);
  }, oe.typeOf = I, oe;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function ua() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function I(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === m || D === a || D === o || D === y || D === h || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === b || D.$$typeof === s || D.$$typeof === u || D.$$typeof === x || D.$$typeof === g || D.$$typeof === v || D.$$typeof === R || D.$$typeof === c);
    }
    function O(D) {
      if (typeof D == "object" && D !== null) {
        var me = D.$$typeof;
        switch (me) {
          case t:
            var Ae = D.type;
            switch (Ae) {
              case p:
              case m:
              case n:
              case a:
              case o:
              case y:
                return Ae;
              default:
                var je = Ae && Ae.$$typeof;
                switch (je) {
                  case u:
                  case x:
                  case f:
                  case b:
                  case s:
                    return je;
                  default:
                    return me;
                }
            }
          case r:
            return me;
        }
      }
    }
    var S = p, k = m, $ = u, A = s, w = t, T = x, N = n, l = f, M = b, _ = r, G = a, X = o, re = y, ee = !1;
    function V(D) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(D) || O(D) === p;
    }
    function d(D) {
      return O(D) === m;
    }
    function E(D) {
      return O(D) === u;
    }
    function P(D) {
      return O(D) === s;
    }
    function j(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function L(D) {
      return O(D) === x;
    }
    function B(D) {
      return O(D) === n;
    }
    function F(D) {
      return O(D) === f;
    }
    function K(D) {
      return O(D) === b;
    }
    function W(D) {
      return O(D) === r;
    }
    function H(D) {
      return O(D) === a;
    }
    function z(D) {
      return O(D) === o;
    }
    function ge(D) {
      return O(D) === y;
    }
    ae.AsyncMode = S, ae.ConcurrentMode = k, ae.ContextConsumer = $, ae.ContextProvider = A, ae.Element = w, ae.ForwardRef = T, ae.Fragment = N, ae.Lazy = l, ae.Memo = M, ae.Portal = _, ae.Profiler = G, ae.StrictMode = X, ae.Suspense = re, ae.isAsyncMode = V, ae.isConcurrentMode = d, ae.isContextConsumer = E, ae.isContextProvider = P, ae.isElement = j, ae.isForwardRef = L, ae.isFragment = B, ae.isLazy = F, ae.isMemo = K, ae.isPortal = W, ae.isProfiler = H, ae.isStrictMode = z, ae.isSuspense = ge, ae.isValidElementType = I, ae.typeOf = O;
  })()), ae;
}
var Hr;
function Un() {
  return Hr || (Hr = 1, process.env.NODE_ENV === "production" ? $t.exports = ca() : $t.exports = ua()), $t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rr, Qr;
function da() {
  if (Qr) return rr;
  Qr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var p = Object.getOwnPropertyNames(s).map(function(x) {
        return s[x];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(x) {
        m[x] = x;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rr = o() ? Object.assign : function(a, s) {
    for (var u, p = n(a), m, x = 1; x < arguments.length; x++) {
      u = Object(arguments[x]);
      for (var y in u)
        t.call(u, y) && (p[y] = u[y]);
      if (e) {
        m = e(u);
        for (var h = 0; h < m.length; h++)
          r.call(u, m[h]) && (p[m[h]] = u[m[h]]);
      }
    }
    return p;
  }, rr;
}
var nr, Jr;
function Cr() {
  if (Jr) return nr;
  Jr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return nr = e, nr;
}
var or, Xr;
function Kn() {
  return Xr || (Xr = 1, or = Function.call.bind(Object.prototype.hasOwnProperty)), or;
}
var ar, Zr;
function fa() {
  if (Zr) return ar;
  Zr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Cr(), r = {}, n = /* @__PURE__ */ Kn();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, u, p, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var x in a)
        if (n(a, x)) {
          var y;
          try {
            if (typeof a[x] != "function") {
              var h = Error(
                (p || "React class") + ": " + u + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            y = a[x](s, x, p, u, null, t);
          } catch (f) {
            y = f;
          }
          if (y && !(y instanceof Error) && e(
            (p || "React class") + ": type specification of " + u + " `" + x + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var b = m ? m() : "";
            e(
              "Failed " + u + " type: " + y.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ar = o, ar;
}
var ir, qr;
function pa() {
  if (qr) return ir;
  qr = 1;
  var e = Un(), t = da(), r = /* @__PURE__ */ Cr(), n = /* @__PURE__ */ Kn(), o = /* @__PURE__ */ fa(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var p = "Warning: " + u;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ir = function(u, p) {
    var m = typeof Symbol == "function" && Symbol.iterator, x = "@@iterator";
    function y(d) {
      var E = d && (m && d[m] || d[x]);
      if (typeof E == "function")
        return E;
    }
    var h = "<<anonymous>>", b = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: R(),
      arrayOf: I,
      element: O(),
      elementType: S(),
      instanceOf: k,
      node: T(),
      objectOf: A,
      oneOf: $,
      oneOfType: w,
      shape: l,
      exact: M
    };
    function f(d, E) {
      return d === E ? d !== 0 || 1 / d === 1 / E : d !== d && E !== E;
    }
    function c(d, E) {
      this.message = d, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function g(d) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, P = 0;
      function j(B, F, K, W, H, z, ge) {
        if (W = W || h, z = z || K, ge !== r) {
          if (p) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var me = W + ":" + K;
            !E[me] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[me] = !0, P++);
          }
        }
        return F[K] == null ? B ? F[K] === null ? new c("The " + H + " `" + z + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new c("The " + H + " `" + z + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : d(F, K, W, H, z);
      }
      var L = j.bind(null, !1);
      return L.isRequired = j.bind(null, !0), L;
    }
    function v(d) {
      function E(P, j, L, B, F, K) {
        var W = P[j], H = X(W);
        if (H !== d) {
          var z = re(W);
          return new c(
            "Invalid " + B + " `" + F + "` of type " + ("`" + z + "` supplied to `" + L + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return g(E);
    }
    function R() {
      return g(s);
    }
    function I(d) {
      function E(P, j, L, B, F) {
        if (typeof d != "function")
          return new c("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var K = P[j];
        if (!Array.isArray(K)) {
          var W = X(K);
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected an array."));
        }
        for (var H = 0; H < K.length; H++) {
          var z = d(K, H, L, B, F + "[" + H + "]", r);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return g(E);
    }
    function O() {
      function d(E, P, j, L, B) {
        var F = E[P];
        if (!u(F)) {
          var K = X(F);
          return new c("Invalid " + L + " `" + B + "` of type " + ("`" + K + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(d);
    }
    function S() {
      function d(E, P, j, L, B) {
        var F = E[P];
        if (!e.isValidElementType(F)) {
          var K = X(F);
          return new c("Invalid " + L + " `" + B + "` of type " + ("`" + K + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(d);
    }
    function k(d) {
      function E(P, j, L, B, F) {
        if (!(P[j] instanceof d)) {
          var K = d.name || h, W = V(P[j]);
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return g(E);
    }
    function $(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function E(P, j, L, B, F) {
        for (var K = P[j], W = 0; W < d.length; W++)
          if (f(K, d[W]))
            return null;
        var H = JSON.stringify(d, function(ge, D) {
          var me = re(D);
          return me === "symbol" ? String(D) : D;
        });
        return new c("Invalid " + B + " `" + F + "` of value `" + String(K) + "` " + ("supplied to `" + L + "`, expected one of " + H + "."));
      }
      return g(E);
    }
    function A(d) {
      function E(P, j, L, B, F) {
        if (typeof d != "function")
          return new c("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var K = P[j], W = X(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected an object."));
        for (var H in K)
          if (n(K, H)) {
            var z = d(K, H, L, B, F + "." + H, r);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return g(E);
    }
    function w(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var E = 0; E < d.length; E++) {
        var P = d[E];
        if (typeof P != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(P) + " at index " + E + "."
          ), s;
      }
      function j(L, B, F, K, W) {
        for (var H = [], z = 0; z < d.length; z++) {
          var ge = d[z], D = ge(L, B, F, K, W, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && H.push(D.data.expectedType);
        }
        var me = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new c("Invalid " + K + " `" + W + "` supplied to " + ("`" + F + "`" + me + "."));
      }
      return g(j);
    }
    function T() {
      function d(E, P, j, L, B) {
        return _(E[P]) ? null : new c("Invalid " + L + " `" + B + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return g(d);
    }
    function N(d, E, P, j, L) {
      return new c(
        (d || "React class") + ": " + E + " type `" + P + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function l(d) {
      function E(P, j, L, B, F) {
        var K = P[j], W = X(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type `" + W + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var H in d) {
          var z = d[H];
          if (typeof z != "function")
            return N(L, B, F, H, re(z));
          var ge = z(K, H, L, B, F + "." + H, r);
          if (ge)
            return ge;
        }
        return null;
      }
      return g(E);
    }
    function M(d) {
      function E(P, j, L, B, F) {
        var K = P[j], W = X(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type `" + W + "` " + ("supplied to `" + L + "`, expected `object`."));
        var H = t({}, P[j], d);
        for (var z in H) {
          var ge = d[z];
          if (n(d, z) && typeof ge != "function")
            return N(L, B, F, z, re(ge));
          if (!ge)
            return new c(
              "Invalid " + B + " `" + F + "` key `" + z + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(P[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var D = ge(K, z, L, B, F + "." + z, r);
          if (D)
            return D;
        }
        return null;
      }
      return g(E);
    }
    function _(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(_);
          if (d === null || u(d))
            return !0;
          var E = y(d);
          if (E) {
            var P = E.call(d), j;
            if (E !== d.entries) {
              for (; !(j = P.next()).done; )
                if (!_(j.value))
                  return !1;
            } else
              for (; !(j = P.next()).done; ) {
                var L = j.value;
                if (L && !_(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(d, E) {
      return d === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function X(d) {
      var E = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : G(E, d) ? "symbol" : E;
    }
    function re(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var E = X(d);
      if (E === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function ee(d) {
      var E = re(d);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function V(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, ir;
}
var sr, en;
function ma() {
  if (en) return sr;
  en = 1;
  var e = /* @__PURE__ */ Cr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, sr = function() {
    function n(s, u, p, m, x, y) {
      if (y !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, sr;
}
var tn;
function ha() {
  if (tn) return kt.exports;
  if (tn = 1, process.env.NODE_ENV !== "production") {
    var e = Un(), t = !0;
    kt.exports = /* @__PURE__ */ pa()(e.isElement, t);
  } else
    kt.exports = /* @__PURE__ */ ma()();
  return kt.exports;
}
var ya = /* @__PURE__ */ ha();
const Y = /* @__PURE__ */ Zo(ya);
function ga(e) {
  return e == null || Object.keys(e).length === 0;
}
function wr(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(ga(o) ? r : o) : t;
  return /* @__PURE__ */ i.jsx(Xo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (wr.propTypes = {
  defaultTheme: Y.object,
  styles: Y.oneOfType([Y.array, Y.string, Y.object, Y.func])
});
/**
 * @mui/styled-engine v7.3.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const rn = [];
function ba(e) {
  return rn[0] = e, la(rn);
}
var Pt = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function xa() {
  if (nn) return le;
  nn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
  function f(c) {
    if (typeof c == "object" && c !== null) {
      var g = c.$$typeof;
      switch (g) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case p:
            case m:
            case h:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case s:
                case u:
                case y:
                case x:
                  return c;
                case a:
                  return c;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return le.ContextConsumer = a, le.ContextProvider = s, le.Element = e, le.ForwardRef = u, le.Fragment = r, le.Lazy = y, le.Memo = x, le.Portal = t, le.Profiler = o, le.StrictMode = n, le.Suspense = p, le.SuspenseList = m, le.isContextConsumer = function(c) {
    return f(c) === a;
  }, le.isContextProvider = function(c) {
    return f(c) === s;
  }, le.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, le.isForwardRef = function(c) {
    return f(c) === u;
  }, le.isFragment = function(c) {
    return f(c) === r;
  }, le.isLazy = function(c) {
    return f(c) === y;
  }, le.isMemo = function(c) {
    return f(c) === x;
  }, le.isPortal = function(c) {
    return f(c) === t;
  }, le.isProfiler = function(c) {
    return f(c) === o;
  }, le.isStrictMode = function(c) {
    return f(c) === n;
  }, le.isSuspense = function(c) {
    return f(c) === p;
  }, le.isSuspenseList = function(c) {
    return f(c) === m;
  }, le.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === p || c === m || typeof c == "object" && c !== null && (c.$$typeof === y || c.$$typeof === x || c.$$typeof === s || c.$$typeof === a || c.$$typeof === u || c.$$typeof === b || c.getModuleId !== void 0);
  }, le.typeOf = f, le;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Sa() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var g = c.$$typeof;
        switch (g) {
          case t:
            switch (c = c.type, c) {
              case n:
              case a:
              case o:
              case m:
              case x:
              case b:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case u:
                  case p:
                  case h:
                  case y:
                    return c;
                  case s:
                    return c;
                  default:
                    return g;
                }
            }
          case r:
            return g;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), f = Symbol.for("react.client.reference");
    ce.ContextConsumer = s, ce.ContextProvider = u, ce.Element = t, ce.ForwardRef = p, ce.Fragment = n, ce.Lazy = h, ce.Memo = y, ce.Portal = r, ce.Profiler = a, ce.StrictMode = o, ce.Suspense = m, ce.SuspenseList = x, ce.isContextConsumer = function(c) {
      return e(c) === s;
    }, ce.isContextProvider = function(c) {
      return e(c) === u;
    }, ce.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, ce.isForwardRef = function(c) {
      return e(c) === p;
    }, ce.isFragment = function(c) {
      return e(c) === n;
    }, ce.isLazy = function(c) {
      return e(c) === h;
    }, ce.isMemo = function(c) {
      return e(c) === y;
    }, ce.isPortal = function(c) {
      return e(c) === r;
    }, ce.isProfiler = function(c) {
      return e(c) === a;
    }, ce.isStrictMode = function(c) {
      return e(c) === o;
    }, ce.isSuspense = function(c) {
      return e(c) === m;
    }, ce.isSuspenseList = function(c) {
      return e(c) === x;
    }, ce.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === a || c === o || c === m || c === x || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === y || c.$$typeof === u || c.$$typeof === s || c.$$typeof === p || c.$$typeof === f || c.getModuleId !== void 0);
    }, ce.typeOf = e;
  })()), ce;
}
var an;
function va() {
  return an || (an = 1, process.env.NODE_ENV === "production" ? Pt.exports = /* @__PURE__ */ xa() : Pt.exports = /* @__PURE__ */ Sa()), Pt.exports;
}
var Wn = /* @__PURE__ */ va();
function Ve(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function zn(e) {
  if (/* @__PURE__ */ q.isValidElement(e) || Wn.isValidElementType(e) || !Ve(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = zn(e[r]);
  }), t;
}
function Ce(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ve(e) && Ve(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ q.isValidElement(t[o]) || Wn.isValidElementType(t[o]) ? n[o] = t[o] : Ve(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ve(e[o]) ? n[o] = Ce(e[o], t[o], r) : r.clone ? n[o] = Ve(t[o]) ? zn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Ea = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Ta(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, a = Ea(t), s = Object.keys(a);
  function u(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function p(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function m(h, b) {
    const f = s.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(f !== -1 && typeof t[s[f]] == "number" ? t[s[f]] : b) - n / 100}${r})`;
  }
  function x(h) {
    return s.indexOf(h) + 1 < s.length ? m(h, s[s.indexOf(h) + 1]) : u(h);
  }
  function y(h) {
    const b = s.indexOf(h);
    return b === 0 ? u(s[1]) : b === s.length - 1 ? p(s[b]) : m(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: a,
    up: u,
    down: p,
    between: m,
    only: x,
    not: y,
    unit: r,
    ...o
  };
}
function sn(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const a = /min-width:\s*([0-9.]+)/;
    return +(n.match(a)?.[1] || 0) - +(o.match(a)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const a = t[o];
    return delete n[o], n[o] = a, n;
  }, {
    ...t
  }) : t;
}
function Ca(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function wa(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ue(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function Oa(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...u) => t(e.breakpoints.up(...u), s), a.down = (...u) => t(e.breakpoints.down(...u), s), a.between = (...u) => t(e.breakpoints.between(...u), s), a.only = (...u) => t(e.breakpoints.only(...u), s), a.not = (...u) => {
      const p = t(e.breakpoints.not(...u), s);
      return p.includes("not all and") ? p.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : p;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const ja = {
  borderRadius: 4
}, We = process.env.NODE_ENV !== "production" ? Y.oneOfType([Y.number, Y.string, Y.object, Y.array]) : {};
function vt(e, t) {
  return t ? Ce(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Bt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ln = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Bt[e]}px)`
}, Ra = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Bt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Me(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || ln;
    return t.reduce((s, u, p) => (s[a.up(a.keys[p])] = r(t[p]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || ln;
    return Object.keys(t).reduce((s, u) => {
      if (Ca(a.keys, u)) {
        const p = wa(n.containerQueries ? n : Ra, u);
        p && (s[p] = r(t[u], u));
      } else if (Object.keys(a.values || Bt).includes(u)) {
        const p = a.up(u);
        s[p] = r(t[u], u);
      } else {
        const p = u;
        s[p] = t[p];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Aa(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function cn(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Gn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ue(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ft(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Dt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ft(e, r) || n, t && (o = t(o, n, e)), o;
}
function be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const u = s[t], p = s.theme, m = Ft(p, n) || {};
    return Me(s, u, (y) => {
      let h = Dt(m, o, y);
      return y === h && typeof y == "string" && (h = Dt(m, o, `${t}${y === "default" ? "" : Gn(y)}`, y)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: We
  } : {}, a.filterProps = [t], a;
}
function _a(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ka = {
  m: "margin",
  p: "padding"
}, $a = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, un = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Pa = _a((e) => {
  if (e.length > 2)
    if (un[e])
      e = un[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ka[t], o = $a[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Ut = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Kt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ia = [...Ut, ...Kt];
function wt(e, t, r, n) {
  const o = Ft(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? o.startsWith("var(") && a === 0 ? 0 : o.startsWith("var(") && a === 1 ? o : `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const u = o[s];
    return a >= 0 ? u : typeof u == "number" ? -u : typeof u == "string" && u.startsWith("var(") ? `calc(-1 * ${u})` : `-${u}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Or(e) {
  return wt(e, "spacing", 8, "spacing");
}
function Ot(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Na(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ot(t, r), n), {});
}
function Ma(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Pa(r), a = Na(o, n), s = e[r];
  return Me(e, s, a);
}
function Yn(e, t) {
  const r = Or(e.theme);
  return Object.keys(e).map((n) => Ma(e, t, n, r)).reduce(vt, {});
}
function he(e) {
  return Yn(e, Ut);
}
he.propTypes = process.env.NODE_ENV !== "production" ? Ut.reduce((e, t) => (e[t] = We, e), {}) : {};
he.filterProps = Ut;
function ye(e) {
  return Yn(e, Kt);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? Kt.reduce((e, t) => (e[t] = We, e), {}) : {};
ye.filterProps = Kt;
process.env.NODE_ENV !== "production" && Ia.reduce((e, t) => (e[t] = We, e), {});
function Hn(e = 8, t = Or({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Wt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? vt(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function we(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Oe(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const La = Oe("border", we), Da = Oe("borderTop", we), Va = Oe("borderRight", we), Ba = Oe("borderBottom", we), Fa = Oe("borderLeft", we), Ua = Oe("borderColor"), Ka = Oe("borderTopColor"), Wa = Oe("borderRightColor"), za = Oe("borderBottomColor"), Ga = Oe("borderLeftColor"), Ya = Oe("outline", we), Ha = Oe("outlineColor"), zt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = wt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ot(t, n)
    });
    return Me(e, e.borderRadius, r);
  }
  return null;
};
zt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: We
} : {};
zt.filterProps = ["borderRadius"];
Wt(La, Da, Va, Ba, Fa, Ua, Ka, Wa, za, Ga, zt, Ya, Ha);
const Gt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ot(t, n)
    });
    return Me(e, e.gap, r);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: We
} : {};
Gt.filterProps = ["gap"];
const Yt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ot(t, n)
    });
    return Me(e, e.columnGap, r);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: We
} : {};
Yt.filterProps = ["columnGap"];
const Ht = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ot(t, n)
    });
    return Me(e, e.rowGap, r);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: We
} : {};
Ht.filterProps = ["rowGap"];
const Qa = be({
  prop: "gridColumn"
}), Ja = be({
  prop: "gridRow"
}), Xa = be({
  prop: "gridAutoFlow"
}), Za = be({
  prop: "gridAutoColumns"
}), qa = be({
  prop: "gridAutoRows"
}), ei = be({
  prop: "gridTemplateColumns"
}), ti = be({
  prop: "gridTemplateRows"
}), ri = be({
  prop: "gridTemplateAreas"
}), ni = be({
  prop: "gridArea"
});
Wt(Gt, Yt, Ht, Qa, Ja, Xa, Za, qa, ei, ti, ri, ni);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const oi = be({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), ai = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), ii = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
Wt(oi, ai, ii);
function Ee(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const si = be({
  prop: "width",
  transform: Ee
}), jr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Bt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ee(r)
      };
    };
    return Me(e, e.maxWidth, t);
  }
  return null;
};
jr.filterProps = ["maxWidth"];
const li = be({
  prop: "minWidth",
  transform: Ee
}), ci = be({
  prop: "height",
  transform: Ee
}), ui = be({
  prop: "maxHeight",
  transform: Ee
}), di = be({
  prop: "minHeight",
  transform: Ee
});
be({
  prop: "size",
  cssProperty: "width",
  transform: Ee
});
be({
  prop: "size",
  cssProperty: "height",
  transform: Ee
});
const fi = be({
  prop: "boxSizing"
});
Wt(si, jr, li, ci, ui, di, fi);
const Qt = {
  // borders
  border: {
    themeKey: "borders",
    transform: we
  },
  borderTop: {
    themeKey: "borders",
    transform: we
  },
  borderRight: {
    themeKey: "borders",
    transform: we
  },
  borderBottom: {
    themeKey: "borders",
    transform: we
  },
  borderLeft: {
    themeKey: "borders",
    transform: we
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: we
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: zt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ut
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Gt
  },
  rowGap: {
    style: Ht
  },
  columnGap: {
    style: Yt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ee
  },
  maxWidth: {
    style: jr
  },
  minWidth: {
    transform: Ee
  },
  height: {
    transform: Ee
  },
  maxHeight: {
    transform: Ee
  },
  minHeight: {
    transform: Ee
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function pi(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function mi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hi() {
  function e(r, n, o, a) {
    const s = {
      [r]: n,
      theme: o
    }, u = a[r];
    if (!u)
      return {
        [r]: n
      };
    const {
      cssProperty: p = r,
      themeKey: m,
      transform: x,
      style: y
    } = u;
    if (n == null)
      return null;
    if (m === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Ft(o, m) || {};
    return y ? y(s) : Me(s, n, (f) => {
      let c = Dt(h, x, f);
      return f === c && typeof f == "string" && (c = Dt(h, x, `${r}${f === "default" ? "" : Gn(f)}`, f)), p === !1 ? c : {
        [p]: c
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: a
    } = r || {};
    if (!n)
      return null;
    const s = o.unstable_sxConfig ?? Qt;
    function u(p) {
      let m = p;
      if (typeof p == "function")
        m = p(o);
      else if (typeof p != "object")
        return p;
      if (!m)
        return null;
      const x = Aa(o.breakpoints), y = Object.keys(x);
      let h = x;
      return Object.keys(m).forEach((b) => {
        const f = mi(m[b], o);
        if (f != null)
          if (typeof f == "object")
            if (s[b])
              h = vt(h, e(b, f, o, s));
            else {
              const c = Me({
                theme: o
              }, f, (g) => ({
                [b]: g
              }));
              pi(c, f) ? h[b] = t({
                sx: f,
                theme: o,
                nested: !0
              }) : h = vt(h, c);
            }
          else
            h = vt(h, e(b, f, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": sn(o, cn(y, h))
      } : sn(o, cn(y, h));
    }
    return Array.isArray(n) ? n.map(u) : u(n);
  }
  return t;
}
const jt = hi();
jt.filterProps = ["sx"];
function yi(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let n = r.getColorSchemeSelector(e);
    return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
      [n]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function Qn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, u = Ta(r), p = Hn(o);
  let m = Ce({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: p,
    shape: {
      ...ja,
      ...a
    }
  }, s);
  return m = Oa(m), m.applyStyles = yi, m = t.reduce((x, y) => Ce(x, y), m), m.unstable_sxConfig = {
    ...Qt,
    ...s?.unstable_sxConfig
  }, m.unstable_sx = function(y) {
    return jt({
      sx: y,
      theme: this
    });
  }, m;
}
function gi(e) {
  return Object.keys(e).length === 0;
}
function Rr(e = null) {
  const t = q.useContext(Bn);
  return !t || gi(t) ? e : t;
}
const bi = Qn();
function xi(e = bi) {
  return Rr(e);
}
function lr(e) {
  const t = ba(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Jn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = xi(r), o = t && n[t] || n;
  let a = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => lr(typeof s == "function" ? s(o) : s)) : a = lr(a)), /* @__PURE__ */ i.jsx(wr, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: Y.object,
  /**
   * @ignore
   */
  styles: Y.oneOfType([Y.array, Y.func, Y.number, Y.object, Y.string, Y.bool]),
  /**
   * @ignore
   */
  themeId: Y.string
});
const dn = (e) => e, Si = () => {
  let e = dn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = dn;
    }
  };
}, vi = Si(), Ei = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ti(e, t, r = "Mui") {
  const n = Ei[t];
  return n ? `${r}-${n}` : `${vi.generate(e)}-${t}`;
}
const Xn = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
function Ci(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ar(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ci(e, t, r);
}
function wi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ke(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ke(wi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ue(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ue(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Oi = (e) => {
  const t = Ke(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, xt = (e, t) => {
  try {
    return Oi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Jt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Zn(e) {
  e = Ke(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (m, x = (m + r / 30) % 12) => o - a * Math.max(Math.min(x - 3, 9 - x, 1), -1);
  let u = "rgb";
  const p = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (u += "a", p.push(t[3])), Jt({
    type: u,
    values: p
  });
}
function yr(e) {
  e = Ke(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ke(Zn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function fn(e, t) {
  const r = yr(e), n = yr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function qn(e, t) {
  return e = Ke(e), t = Ar(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Jt(e);
}
function Ye(e, t, r) {
  try {
    return qn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xt(e, t) {
  if (e = Ke(e), t = Ar(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Jt(e);
}
function ie(e, t, r) {
  try {
    return Xt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Zt(e, t) {
  if (e = Ke(e), t = Ar(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Jt(e);
}
function se(e, t, r) {
  try {
    return Zt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ji(e, t = 0.15) {
  return yr(e) > 0.5 ? Xt(e, t) : Zt(e, t);
}
function It(e, t, r) {
  try {
    return ji(e, t);
  } catch {
    return e;
  }
}
const Ri = "exact-prop: ​";
function eo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ri]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const _r = /* @__PURE__ */ q.createContext(null);
process.env.NODE_ENV !== "production" && (_r.displayName = "ThemeContext");
function kr() {
  const e = q.useContext(_r);
  return process.env.NODE_ENV !== "production" && q.useDebugValue(e), e;
}
const Ai = typeof Symbol == "function" && Symbol.for, _i = Ai ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ki(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function Vt(e) {
  const {
    children: t,
    theme: r
  } = e, n = kr();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = q.useMemo(() => {
    const a = n === null ? {
      ...r
    } : ki(n, r);
    return a != null && (a[_i] = n !== null), a;
  }, [r, n]);
  return /* @__PURE__ */ i.jsx(_r.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  /**
   * Your component tree.
   */
  children: Y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: Y.oneOfType([Y.object, Y.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Vt.propTypes = eo(Vt.propTypes));
const $i = /* @__PURE__ */ q.createContext();
function to({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ i.jsx($i.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (to.propTypes = {
  children: Y.node,
  value: Y.bool
});
const Pi = /* @__PURE__ */ q.createContext(void 0);
function ro({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ i.jsx(Pi.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ro.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: Y.node,
  /**
   * @ignore
   */
  value: Y.object
});
let pn = 0;
function Ii(e) {
  const [t, r] = q.useState(e), n = e || t;
  return q.useEffect(() => {
    t == null && (pn += 1, r(`mui-${pn}`));
  }, [t]), n;
}
const Ni = {
  ...q
}, mn = Ni.useId;
function Mi(e) {
  return mn !== void 0 ? mn() : Ii(e);
}
function Li(e) {
  const t = Rr(), r = Mi() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Xn(() => {
    const a = document.querySelector("head");
    if (!a)
      return;
    const s = a.firstChild;
    if (o) {
      if (s && s.hasAttribute?.("data-mui-layer-order") && s.getAttribute("data-mui-layer-order") === r)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", r), u.textContent = o, a.prepend(u);
    } else
      a.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove();
  }, [o, r]), o ? /* @__PURE__ */ i.jsx(Jn, {
    styles: o
  }) : null;
}
const hn = {};
function yn(e, t, r, n = !1) {
  return q.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const a = r(o), s = e ? {
        ...t,
        [e]: a
      } : a;
      return n ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Et(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Rr(hn), a = kr() || hn;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = yn(n, o, r), u = yn(n, a, r, !0), p = (n ? s[n] : s).direction === "rtl", m = Li(s);
  return /* @__PURE__ */ i.jsx(Vt, {
    theme: u,
    children: /* @__PURE__ */ i.jsx(Bn.Provider, {
      value: s,
      children: /* @__PURE__ */ i.jsx(to, {
        value: p,
        children: /* @__PURE__ */ i.jsxs(ro, {
          value: n ? s[n].components : s.components,
          children: [m, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Et.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: Y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: Y.oneOfType([Y.func, Y.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: Y.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Et.propTypes = eo(Et.propTypes));
const $r = "mode", Pr = "color-scheme", Di = "data-color-scheme";
function Vi(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = $r,
    colorSchemeStorageKey: a = Pr,
    attribute: s = Di,
    colorSchemeNode: u = "document.documentElement",
    nonce: p
  } = e || {};
  let m = "", x = s;
  if (s === "class" && (x = ".%s"), s === "data" && (x = "[data-%s]"), x.startsWith(".")) {
    const h = x.substring(1);
    m += `${u}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${u}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const y = x.match(/\[([^[\]]+)\]/);
  if (y) {
    const [h, b] = y[1].split("=");
    b || (m += `${u}.removeAttribute('${h}'.replace('%s', light));
      ${u}.removeAttribute('${h}'.replace('%s', dark));`), m += `
      ${u}.setAttribute('${h}'.replace('%s', colorScheme), ${b ? `${b}.replace('%s', colorScheme)` : '""'});`;
  } else
    m += `${u}.setAttribute('${x}', colorScheme);`;
  return /* @__PURE__ */ i.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? p : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${n}';
  const light = localStorage.getItem('${a}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Bi() {
}
const Fi = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return Bi;
    const n = (o) => {
      const a = o.newValue;
      o.key === e && r(a);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function cr() {
}
function gn(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function no(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Ui(e) {
  return no(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Ki(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: a = $r,
    colorSchemeStorageKey: s = Pr,
    storageWindow: u = typeof window > "u" ? void 0 : window,
    storageManager: p = Fi,
    noSsr: m = !1
  } = e, x = o.join(","), y = o.length > 1, h = q.useMemo(() => p?.({
    key: a,
    storageWindow: u
  }), [p, a, u]), b = q.useMemo(() => p?.({
    key: `${s}-light`,
    storageWindow: u
  }), [p, s, u]), f = q.useMemo(() => p?.({
    key: `${s}-dark`,
    storageWindow: u
  }), [p, s, u]), [c, g] = q.useState(() => {
    const A = h?.get(t) || t, w = b?.get(r) || r, T = f?.get(n) || n;
    return {
      mode: A,
      systemMode: gn(A),
      lightColorScheme: w,
      darkColorScheme: T
    };
  }), [v, R] = q.useState(m || !y);
  q.useEffect(() => {
    R(!0);
  }, []);
  const I = Ui(c), O = q.useCallback((A) => {
    g((w) => {
      if (A === w.mode)
        return w;
      const T = A ?? t;
      return h?.set(T), {
        ...w,
        mode: T,
        systemMode: gn(T)
      };
    });
  }, [h, t]), S = q.useCallback((A) => {
    A ? typeof A == "string" ? A && !x.includes(A) ? console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`) : g((w) => {
      const T = {
        ...w
      };
      return no(w, (N) => {
        N === "light" && (b?.set(A), T.lightColorScheme = A), N === "dark" && (f?.set(A), T.darkColorScheme = A);
      }), T;
    }) : g((w) => {
      const T = {
        ...w
      }, N = A.light === null ? r : A.light, l = A.dark === null ? n : A.dark;
      return N && (x.includes(N) ? (T.lightColorScheme = N, b?.set(N)) : console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`)), l && (x.includes(l) ? (T.darkColorScheme = l, f?.set(l)) : console.error(`\`${l}\` does not exist in \`theme.colorSchemes\`.`)), T;
    }) : g((w) => (b?.set(r), f?.set(n), {
      ...w,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [x, b, f, r, n]), k = q.useCallback((A) => {
    c.mode === "system" && g((w) => {
      const T = A?.matches ? "dark" : "light";
      return w.systemMode === T ? w : {
        ...w,
        systemMode: T
      };
    });
  }, [c.mode]), $ = q.useRef(k);
  return $.current = k, q.useEffect(() => {
    if (typeof window.matchMedia != "function" || !y)
      return;
    const A = (...T) => $.current(...T), w = window.matchMedia("(prefers-color-scheme: dark)");
    return w.addListener(A), A(w), () => {
      w.removeListener(A);
    };
  }, [y]), q.useEffect(() => {
    if (y) {
      const A = h?.subscribe((N) => {
        (!N || ["light", "dark", "system"].includes(N)) && O(N || t);
      }) || cr, w = b?.subscribe((N) => {
        (!N || x.match(N)) && S({
          light: N
        });
      }) || cr, T = f?.subscribe((N) => {
        (!N || x.match(N)) && S({
          dark: N
        });
      }) || cr;
      return () => {
        A(), w(), T();
      };
    }
  }, [S, O, x, t, u, y, h, b, f]), {
    ...c,
    mode: v ? c.mode : void 0,
    systemMode: v ? c.systemMode : void 0,
    colorScheme: v ? I : void 0,
    setMode: O,
    setColorScheme: S
  };
}
const Wi = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function zi(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = $r,
    colorSchemeStorageKey: o = Pr,
    disableTransitionOnChange: a = !1,
    defaultColorScheme: s,
    resolveTheme: u
  } = e, p = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, m = /* @__PURE__ */ q.createContext(void 0);
  process.env.NODE_ENV !== "production" && (m.displayName = "ColorSchemeContext");
  const x = () => q.useContext(m) || p, y = {}, h = {};
  function b(v) {
    const {
      children: R,
      theme: I,
      modeStorageKey: O = n,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: k = a,
      storageManager: $,
      storageWindow: A = typeof window > "u" ? void 0 : window,
      documentNode: w = typeof document > "u" ? void 0 : document,
      colorSchemeNode: T = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: N = !1,
      disableStyleSheetGeneration: l = !1,
      defaultMode: M = "system",
      forceThemeRerender: _ = !1,
      noSsr: G
    } = v, X = q.useRef(!1), re = kr(), ee = q.useContext(m), V = !!ee && !N, d = q.useMemo(() => I || (typeof r == "function" ? r() : r), [I]), E = d[t], P = E || d, {
      colorSchemes: j = y,
      components: L = h,
      cssVarPrefix: B
    } = P, F = Object.keys(j).filter((Q) => !!j[Q]).join(","), K = q.useMemo(() => F.split(","), [F]), W = typeof s == "string" ? s : s.light, H = typeof s == "string" ? s : s.dark, z = j[W] && j[H] ? M : j[P.defaultColorScheme]?.palette?.mode || P.palette?.mode, {
      mode: ge,
      setMode: D,
      systemMode: me,
      lightColorScheme: Ae,
      darkColorScheme: je,
      colorScheme: Ze,
      setColorScheme: Le
    } = Ki({
      supportedColorSchemes: K,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: H,
      modeStorageKey: O,
      colorSchemeStorageKey: S,
      defaultMode: z,
      storageManager: $,
      storageWindow: A,
      noSsr: G
    });
    let Pe = ge, Se = Ze;
    V && (Pe = ee.mode, Se = ee.colorScheme), process.env.NODE_ENV !== "production" && _ && !P.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let ze = Se || P.defaultColorScheme;
    P.vars && !_ && (ze = P.defaultColorScheme);
    const Ge = q.useMemo(() => {
      const Q = P.generateThemeVars?.() || P.vars, te = {
        ...P,
        components: L,
        colorSchemes: j,
        cssVarPrefix: B,
        vars: Q
      };
      if (typeof te.generateSpacing == "function" && (te.spacing = te.generateSpacing()), ze) {
        const ue = j[ze];
        ue && typeof ue == "object" && Object.keys(ue).forEach((ve) => {
          ue[ve] && typeof ue[ve] == "object" ? te[ve] = {
            ...te[ve],
            ...ue[ve]
          } : te[ve] = ue[ve];
        });
      }
      return u ? u(te) : te;
    }, [P, ze, L, j, B]), De = P.colorSchemeSelector;
    Xn(() => {
      if (Se && T && De && De !== "media") {
        const Q = De;
        let te = De;
        if (Q === "class" && (te = ".%s"), Q === "data" && (te = "[data-%s]"), Q?.startsWith("data-") && !Q.includes("%s") && (te = `[${Q}="%s"]`), te.startsWith("."))
          T.classList.remove(...K.map((ue) => te.substring(1).replace("%s", ue))), T.classList.add(te.substring(1).replace("%s", Se));
        else {
          const ue = te.replace("%s", Se).match(/\[([^\]]+)\]/);
          if (ue) {
            const [ve, et] = ue[1].split("=");
            et || K.forEach((go) => {
              T.removeAttribute(ve.replace(Se, go));
            }), T.setAttribute(ve, et ? et.replace(/"|'/g, "") : "");
          } else
            T.setAttribute(te, Se);
        }
      }
    }, [Se, De, T, K]), q.useEffect(() => {
      let Q;
      if (k && X.current && w) {
        const te = w.createElement("style");
        te.appendChild(w.createTextNode(Wi)), w.head.appendChild(te), window.getComputedStyle(w.body), Q = setTimeout(() => {
          w.head.removeChild(te);
        }, 1);
      }
      return () => {
        clearTimeout(Q);
      };
    }, [Se, k, w]), q.useEffect(() => (X.current = !0, () => {
      X.current = !1;
    }), []);
    const qe = q.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: Se,
      darkColorScheme: je,
      lightColorScheme: Ae,
      mode: Pe,
      setColorScheme: Le,
      setMode: process.env.NODE_ENV === "production" ? D : (Q) => {
        Ge.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), D(Q);
      },
      systemMode: me
    }), [K, Se, je, Ae, Pe, Le, D, me, Ge.colorSchemeSelector]);
    let Ie = !0;
    (l || P.cssVariables === !1 || V && re?.cssVarPrefix === B) && (Ie = !1);
    const At = /* @__PURE__ */ i.jsxs(q.Fragment, {
      children: [/* @__PURE__ */ i.jsx(Et, {
        themeId: E ? t : void 0,
        theme: Ge,
        children: R
      }), Ie && /* @__PURE__ */ i.jsx(wr, {
        styles: Ge.generateStyleSheets?.() || []
      })]
    });
    return V ? At : /* @__PURE__ */ i.jsx(m.Provider, {
      value: qe,
      children: At
    });
  }
  process.env.NODE_ENV !== "production" && (b.propTypes = {
    /**
     * The component tree.
     */
    children: Y.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: Y.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: Y.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: Y.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: Y.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: Y.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: Y.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: Y.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: Y.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: Y.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: Y.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: Y.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: Y.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: Y.object
  });
  const f = typeof s == "string" ? s : s.light, c = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: b,
    useColorScheme: x,
    getInitColorSchemeScript: (v) => Vi({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: f,
      defaultDarkColorScheme: c,
      modeStorageKey: n,
      ...v
    })
  };
}
function Gi(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const bn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, Yi = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([u, p]) => {
      (!r || r && !r([...a, u])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? n(p, [...a, u], Array.isArray(p) ? [...s, u] : s) : t([...a, u], p, s));
    });
  }
  n(e);
}, Hi = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ur(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return Yi(
    e,
    (u, p, m) => {
      if ((typeof p == "string" || typeof p == "number") && (!n || !n(u, p))) {
        const x = `--${r ? `${r}-` : ""}${u.join("-")}`, y = Hi(u, p);
        Object.assign(o, {
          [x]: y
        }), bn(a, u, `var(${x})`, m), bn(s, u, `var(${x}, ${y})`, m);
      }
    },
    (u) => u[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: s
  };
}
function Qi(e, t = {}) {
  const {
    getSelector: r = v,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: u,
    defaultColorScheme: p = "light",
    ...m
  } = e, {
    vars: x,
    css: y,
    varsWithDefaults: h
  } = ur(m, t);
  let b = h;
  const f = {}, {
    [p]: c,
    ...g
  } = s;
  if (Object.entries(g || {}).forEach(([O, S]) => {
    const {
      vars: k,
      css: $,
      varsWithDefaults: A
    } = ur(S, t);
    b = Ce(b, A), f[O] = {
      css: $,
      vars: k
    };
  }), c) {
    const {
      css: O,
      vars: S,
      varsWithDefaults: k
    } = ur(c, t);
    b = Ce(b, k), f[p] = {
      css: O,
      vars: S
    };
  }
  function v(O, S) {
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), O) {
      if (k === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${s[O]?.palette?.mode || O})`]: {
            ":root": S
          }
        };
      if (k)
        return e.defaultColorScheme === O ? `:root, ${k.replace("%s", String(O))}` : k.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let O = {
        ...x
      };
      return Object.entries(f).forEach(([, {
        vars: S
      }]) => {
        O = Ce(O, S);
      }), O;
    },
    generateStyleSheets: () => {
      const O = [], S = e.defaultColorScheme || "light";
      function k(w, T) {
        Object.keys(T).length && O.push(typeof w == "string" ? {
          [w]: {
            ...T
          }
        } : w);
      }
      k(r(void 0, {
        ...y
      }), y);
      const {
        [S]: $,
        ...A
      } = f;
      if ($) {
        const {
          css: w
        } = $, T = s[S]?.palette?.mode, N = !n && T ? {
          colorScheme: T,
          ...w
        } : {
          ...w
        };
        k(r(S, {
          ...N
        }), N);
      }
      return Object.entries(A).forEach(([w, {
        css: T
      }]) => {
        const N = s[w]?.palette?.mode, l = !n && N ? {
          colorScheme: N,
          ...T
        } : {
          ...T
        };
        k(r(w, {
          ...l
        }), l);
      }), a && O.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), O;
    }
  };
}
function Ji(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Tt = {
  black: "#000",
  white: "#fff"
}, Xi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, tt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, rt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, mt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, nt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ot = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, at = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function oo() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Tt.white,
      default: Tt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const ao = oo();
function io() {
  return {
    text: {
      primary: Tt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Tt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const gr = io();
function xn(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Zt(e.main, o) : t === "dark" && (e.dark = Xt(e.main, a)));
}
function Sn(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Zi(e = "light") {
  return e === "dark" ? {
    main: nt[200],
    light: nt[50],
    dark: nt[400]
  } : {
    main: nt[700],
    light: nt[400],
    dark: nt[800]
  };
}
function qi(e = "light") {
  return e === "dark" ? {
    main: tt[200],
    light: tt[50],
    dark: tt[400]
  } : {
    main: tt[500],
    light: tt[300],
    dark: tt[700]
  };
}
function es(e = "light") {
  return e === "dark" ? {
    main: rt[500],
    light: rt[300],
    dark: rt[700]
  } : {
    main: rt[700],
    light: rt[400],
    dark: rt[800]
  };
}
function ts(e = "light") {
  return e === "dark" ? {
    main: ot[400],
    light: ot[300],
    dark: ot[700]
  } : {
    main: ot[700],
    light: ot[500],
    dark: ot[900]
  };
}
function rs(e = "light") {
  return e === "dark" ? {
    main: at[400],
    light: at[300],
    dark: at[700]
  } : {
    main: at[800],
    light: at[500],
    dark: at[900]
  };
}
function ns(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mt[500],
    dark: mt[900]
  };
}
function os(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ir(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Zi(t), u = e.secondary || qi(t), p = e.error || es(t), m = e.info || ts(t), x = e.success || rs(t), y = e.warning || ns(t);
  function h(g) {
    if (o)
      return os(g);
    const v = fn(g, gr.text.primary) >= r ? gr.text.primary : ao.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = fn(g, v);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${v} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const b = ({
    color: g,
    name: v,
    mainShade: R = 500,
    lightShade: I = 300,
    darkShade: O = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[R] && (g.main = g[R]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ue(11, v ? ` (${v})` : "", R));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ue(12, v ? ` (${v})` : "", JSON.stringify(g.main)));
    return o ? (Sn(o, g, "light", I, n), Sn(o, g, "dark", O, n)) : (xn(g, "light", I, n), xn(g, "dark", O, n)), g.contrastText || (g.contrastText = h(g.main)), g;
  };
  let f;
  return t === "light" ? f = oo() : t === "dark" && (f = io()), process.env.NODE_ENV !== "production" && (f || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ce({
    // A collection of common colors.
    common: {
      ...Tt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: u,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: x,
      name: "success"
    }),
    // The grey colors.
    grey: Xi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...f
  }, a);
}
function as(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function is(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function ss(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vn = {
  textTransform: "uppercase"
}, En = '"Roboto", "Helvetica", "Arial", sans-serif';
function so(e, t) {
  const {
    fontFamily: r = En,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: p = 16,
    // Apply the CSS properties to all the variants.
    allVariants: m,
    pxToRem: x,
    ...y
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof p != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, b = x || ((g) => `${g / p * h}rem`), f = (g, v, R, I, O) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: b(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === En ? {
      letterSpacing: `${ss(I / v)}em`
    } : {},
    ...O,
    ...m
  }), c = {
    h1: f(o, 96, 1.167, -1.5),
    h2: f(o, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(s, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(s, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(s, 14, 1.75, 0.4, vn),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, vn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ce({
    htmlFontSize: p,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: u,
    ...c
  }, y, {
    clone: !1
    // No need to clone deep
  });
}
const ls = 0.2, cs = 0.14, us = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ls})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${cs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${us})`].join(",");
}
const ds = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], fs = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ps = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Tn(e) {
  return `${Math.round(e)}ms`;
}
function ms(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function hs(e) {
  const t = {
    ...fs,
    ...e.easing
  }, r = {
    ...ps,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ms,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: u = t.easeInOut,
        delay: p = 0,
        ...m
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const x = (h) => typeof h == "string", y = (h) => !Number.isNaN(parseFloat(h));
        !x(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !y(s) && !x(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), x(u) || console.error('MUI: Argument "easing" must be a string.'), !y(p) && !x(p) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(m).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(m).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((x) => `${x} ${typeof s == "string" ? s : Tn(s)} ${u} ${typeof p == "string" ? p : Tn(p)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ys = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function gs(e) {
  return Ve(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function lo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, u] = o[a];
      !gs(u) || s.startsWith("unstable_") ? delete n[s] : Ve(u) && (n[s] = {
        ...u
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Cn(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const bs = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function xs(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : qn(t, bs(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Cn(r)})` : Zt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Cn(r)})` : Xt(t, r);
    }
  });
}
function br(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: u = {},
    shape: p,
    colorSpace: m,
    ...x
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ue(20));
  const y = Ir({
    ...a,
    colorSpace: m
  }), h = Qn(e);
  let b = Ce(h, {
    mixins: is(h.breakpoints, n),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ds.slice(),
    typography: so(y, u),
    transitions: hs(s),
    zIndex: {
      ...ys
    }
  });
  if (b = Ce(b, x), b = t.reduce((f, c) => Ce(f, c), b), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (g, v) => {
      let R;
      for (R in g) {
        const I = g[R];
        if (f.includes(R) && Object.keys(I).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = Ti("", R);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: I
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[R] = {};
        }
      }
    };
    Object.keys(b.components).forEach((g) => {
      const v = b.components[g].styleOverrides;
      v && g.startsWith("Mui") && c(v, g);
    });
  }
  return b.unstable_sxConfig = {
    ...Qt,
    ...x?.unstable_sxConfig
  }, b.unstable_sx = function(c) {
    return jt({
      sx: c,
      theme: this
    });
  }, b.toRuntimeSource = lo, xs(b), b;
}
function Ss(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const vs = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Ss(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function co(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function uo(e) {
  return e === "dark" ? vs : [];
}
function Es(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = Ir({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...co(s.mode),
      ...r
    },
    overlays: n || uo(s.mode),
    ...a
  };
}
function Ts(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Cs = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ws = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Cs(e.cssVarPrefix).forEach((u) => {
        s[u] = r[u], delete r[u];
      }), a === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${n}, ${a.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${n}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return n;
};
function Os(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function C(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function St(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Zn(e);
}
function Ne(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = xt(St(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function js(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const _e = (e) => {
  try {
    return e();
  } catch {
  }
}, Rs = (e = "mui") => Gi(e);
function dr(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Es({
      ...r,
      palette: {
        mode: a,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...u
  } = br({
    ...n,
    palette: {
      mode: a,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...co(a),
      ...r?.opacity
    },
    overlays: r?.overlays || uo(a)
  }, u;
}
function As(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: u = Ts,
    colorSchemeSelector: p = r.light && r.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...x
  } = e, y = Object.keys(r)[0], h = n || (r.light && y !== "light" ? "light" : y), b = Rs(a), {
    [h]: f,
    light: c,
    dark: g,
    ...v
  } = r, R = {
    ...v
  };
  let I = f;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (I = !0), !I)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Ue(21, h));
  let O;
  s && (O = "oklch");
  const S = dr(O, R, I, x, h);
  c && !R.light && dr(O, R, c, void 0, "light"), g && !R.dark && dr(O, R, g, void 0, "dark");
  let k = {
    defaultColorScheme: h,
    ...S,
    cssVarPrefix: a,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: b,
    colorSchemes: R,
    font: {
      ...as(S.typography),
      ...S.font
    },
    spacing: js(x.spacing)
  };
  Object.keys(k.colorSchemes).forEach((N) => {
    const l = k.colorSchemes[N].palette, M = (G) => {
      const X = G.split("-"), re = X[1], ee = X[2];
      return b(G, l[re][ee]);
    };
    l.mode === "light" && (C(l.common, "background", "#fff"), C(l.common, "onBackground", "#000")), l.mode === "dark" && (C(l.common, "background", "#000"), C(l.common, "onBackground", "#fff"));
    function _(G, X, re) {
      if (O) {
        let ee;
        return G === Ye && (ee = `transparent ${((1 - re) * 100).toFixed(0)}%`), G === ie && (ee = `#000 ${(re * 100).toFixed(0)}%`), G === se && (ee = `#fff ${(re * 100).toFixed(0)}%`), `color-mix(in ${O}, ${X}, ${ee})`;
      }
      return G(X, re);
    }
    if (Os(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      C(l.Alert, "errorColor", _(ie, l.error.light, 0.6)), C(l.Alert, "infoColor", _(ie, l.info.light, 0.6)), C(l.Alert, "successColor", _(ie, l.success.light, 0.6)), C(l.Alert, "warningColor", _(ie, l.warning.light, 0.6)), C(l.Alert, "errorFilledBg", M("palette-error-main")), C(l.Alert, "infoFilledBg", M("palette-info-main")), C(l.Alert, "successFilledBg", M("palette-success-main")), C(l.Alert, "warningFilledBg", M("palette-warning-main")), C(l.Alert, "errorFilledColor", _e(() => l.getContrastText(l.error.main))), C(l.Alert, "infoFilledColor", _e(() => l.getContrastText(l.info.main))), C(l.Alert, "successFilledColor", _e(() => l.getContrastText(l.success.main))), C(l.Alert, "warningFilledColor", _e(() => l.getContrastText(l.warning.main))), C(l.Alert, "errorStandardBg", _(se, l.error.light, 0.9)), C(l.Alert, "infoStandardBg", _(se, l.info.light, 0.9)), C(l.Alert, "successStandardBg", _(se, l.success.light, 0.9)), C(l.Alert, "warningStandardBg", _(se, l.warning.light, 0.9)), C(l.Alert, "errorIconColor", M("palette-error-main")), C(l.Alert, "infoIconColor", M("palette-info-main")), C(l.Alert, "successIconColor", M("palette-success-main")), C(l.Alert, "warningIconColor", M("palette-warning-main")), C(l.AppBar, "defaultBg", M("palette-grey-100")), C(l.Avatar, "defaultBg", M("palette-grey-400")), C(l.Button, "inheritContainedBg", M("palette-grey-300")), C(l.Button, "inheritContainedHoverBg", M("palette-grey-A100")), C(l.Chip, "defaultBorder", M("palette-grey-400")), C(l.Chip, "defaultAvatarColor", M("palette-grey-700")), C(l.Chip, "defaultIconColor", M("palette-grey-700")), C(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), C(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), C(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), C(l.LinearProgress, "primaryBg", _(se, l.primary.main, 0.62)), C(l.LinearProgress, "secondaryBg", _(se, l.secondary.main, 0.62)), C(l.LinearProgress, "errorBg", _(se, l.error.main, 0.62)), C(l.LinearProgress, "infoBg", _(se, l.info.main, 0.62)), C(l.LinearProgress, "successBg", _(se, l.success.main, 0.62)), C(l.LinearProgress, "warningBg", _(se, l.warning.main, 0.62)), C(l.Skeleton, "bg", O ? _(Ye, l.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), C(l.Slider, "primaryTrack", _(se, l.primary.main, 0.62)), C(l.Slider, "secondaryTrack", _(se, l.secondary.main, 0.62)), C(l.Slider, "errorTrack", _(se, l.error.main, 0.62)), C(l.Slider, "infoTrack", _(se, l.info.main, 0.62)), C(l.Slider, "successTrack", _(se, l.success.main, 0.62)), C(l.Slider, "warningTrack", _(se, l.warning.main, 0.62));
      const G = O ? _(ie, l.background.default, 0.6825) : It(l.background.default, 0.8);
      C(l.SnackbarContent, "bg", G), C(l.SnackbarContent, "color", _e(() => O ? gr.text.primary : l.getContrastText(G))), C(l.SpeedDialAction, "fabHoverBg", It(l.background.paper, 0.15)), C(l.StepConnector, "border", M("palette-grey-400")), C(l.StepContent, "border", M("palette-grey-400")), C(l.Switch, "defaultColor", M("palette-common-white")), C(l.Switch, "defaultDisabledColor", M("palette-grey-100")), C(l.Switch, "primaryDisabledColor", _(se, l.primary.main, 0.62)), C(l.Switch, "secondaryDisabledColor", _(se, l.secondary.main, 0.62)), C(l.Switch, "errorDisabledColor", _(se, l.error.main, 0.62)), C(l.Switch, "infoDisabledColor", _(se, l.info.main, 0.62)), C(l.Switch, "successDisabledColor", _(se, l.success.main, 0.62)), C(l.Switch, "warningDisabledColor", _(se, l.warning.main, 0.62)), C(l.TableCell, "border", _(se, _(Ye, l.divider, 1), 0.88)), C(l.Tooltip, "bg", _(Ye, l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      C(l.Alert, "errorColor", _(se, l.error.light, 0.6)), C(l.Alert, "infoColor", _(se, l.info.light, 0.6)), C(l.Alert, "successColor", _(se, l.success.light, 0.6)), C(l.Alert, "warningColor", _(se, l.warning.light, 0.6)), C(l.Alert, "errorFilledBg", M("palette-error-dark")), C(l.Alert, "infoFilledBg", M("palette-info-dark")), C(l.Alert, "successFilledBg", M("palette-success-dark")), C(l.Alert, "warningFilledBg", M("palette-warning-dark")), C(l.Alert, "errorFilledColor", _e(() => l.getContrastText(l.error.dark))), C(l.Alert, "infoFilledColor", _e(() => l.getContrastText(l.info.dark))), C(l.Alert, "successFilledColor", _e(() => l.getContrastText(l.success.dark))), C(l.Alert, "warningFilledColor", _e(() => l.getContrastText(l.warning.dark))), C(l.Alert, "errorStandardBg", _(ie, l.error.light, 0.9)), C(l.Alert, "infoStandardBg", _(ie, l.info.light, 0.9)), C(l.Alert, "successStandardBg", _(ie, l.success.light, 0.9)), C(l.Alert, "warningStandardBg", _(ie, l.warning.light, 0.9)), C(l.Alert, "errorIconColor", M("palette-error-main")), C(l.Alert, "infoIconColor", M("palette-info-main")), C(l.Alert, "successIconColor", M("palette-success-main")), C(l.Alert, "warningIconColor", M("palette-warning-main")), C(l.AppBar, "defaultBg", M("palette-grey-900")), C(l.AppBar, "darkBg", M("palette-background-paper")), C(l.AppBar, "darkColor", M("palette-text-primary")), C(l.Avatar, "defaultBg", M("palette-grey-600")), C(l.Button, "inheritContainedBg", M("palette-grey-800")), C(l.Button, "inheritContainedHoverBg", M("palette-grey-700")), C(l.Chip, "defaultBorder", M("palette-grey-700")), C(l.Chip, "defaultAvatarColor", M("palette-grey-300")), C(l.Chip, "defaultIconColor", M("palette-grey-300")), C(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), C(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), C(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), C(l.LinearProgress, "primaryBg", _(ie, l.primary.main, 0.5)), C(l.LinearProgress, "secondaryBg", _(ie, l.secondary.main, 0.5)), C(l.LinearProgress, "errorBg", _(ie, l.error.main, 0.5)), C(l.LinearProgress, "infoBg", _(ie, l.info.main, 0.5)), C(l.LinearProgress, "successBg", _(ie, l.success.main, 0.5)), C(l.LinearProgress, "warningBg", _(ie, l.warning.main, 0.5)), C(l.Skeleton, "bg", O ? _(Ye, l.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), C(l.Slider, "primaryTrack", _(ie, l.primary.main, 0.5)), C(l.Slider, "secondaryTrack", _(ie, l.secondary.main, 0.5)), C(l.Slider, "errorTrack", _(ie, l.error.main, 0.5)), C(l.Slider, "infoTrack", _(ie, l.info.main, 0.5)), C(l.Slider, "successTrack", _(ie, l.success.main, 0.5)), C(l.Slider, "warningTrack", _(ie, l.warning.main, 0.5));
      const G = O ? _(se, l.background.default, 0.985) : It(l.background.default, 0.98);
      C(l.SnackbarContent, "bg", G), C(l.SnackbarContent, "color", _e(() => O ? ao.text.primary : l.getContrastText(G))), C(l.SpeedDialAction, "fabHoverBg", It(l.background.paper, 0.15)), C(l.StepConnector, "border", M("palette-grey-600")), C(l.StepContent, "border", M("palette-grey-600")), C(l.Switch, "defaultColor", M("palette-grey-300")), C(l.Switch, "defaultDisabledColor", M("palette-grey-600")), C(l.Switch, "primaryDisabledColor", _(ie, l.primary.main, 0.55)), C(l.Switch, "secondaryDisabledColor", _(ie, l.secondary.main, 0.55)), C(l.Switch, "errorDisabledColor", _(ie, l.error.main, 0.55)), C(l.Switch, "infoDisabledColor", _(ie, l.info.main, 0.55)), C(l.Switch, "successDisabledColor", _(ie, l.success.main, 0.55)), C(l.Switch, "warningDisabledColor", _(ie, l.warning.main, 0.55)), C(l.TableCell, "border", _(ie, _(Ye, l.divider, 1), 0.68)), C(l.Tooltip, "bg", _(Ye, l.grey[700], 0.92));
    }
    Ne(l.background, "default"), Ne(l.background, "paper"), Ne(l.common, "background"), Ne(l.common, "onBackground"), Ne(l, "divider"), Object.keys(l).forEach((G) => {
      const X = l[G];
      G !== "tonalOffset" && X && typeof X == "object" && (X.main && C(l[G], "mainChannel", xt(St(X.main))), X.light && C(l[G], "lightChannel", xt(St(X.light))), X.dark && C(l[G], "darkChannel", xt(St(X.dark))), X.contrastText && C(l[G], "contrastTextChannel", xt(St(X.contrastText))), G === "text" && (Ne(l[G], "primary"), Ne(l[G], "secondary")), G === "action" && (X.active && Ne(l[G], "active"), X.selected && Ne(l[G], "selected")));
    });
  }), k = t.reduce((N, l) => Ce(N, l), k);
  const $ = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: u,
    getSelector: ws(k),
    enableContrastVars: s
  }, {
    vars: A,
    generateThemeVars: w,
    generateStyleSheets: T
  } = Qi(k, $);
  return k.vars = A, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([N, l]) => {
    k[N] = l;
  }), k.generateThemeVars = w, k.generateStyleSheets = T, k.generateSpacing = function() {
    return Hn(x.spacing, Or(this));
  }, k.getColorSchemeSelector = Ji(p), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = u, k.unstable_sxConfig = {
    ...Qt,
    ...x?.unstable_sxConfig
  }, k.unstable_sx = function(l) {
    return jt({
      sx: l,
      theme: this
    });
  }, k.toRuntimeSource = lo, k;
}
function wn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Ir({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function fo(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r?.mode,
    ...s
  } = e, u = a || "light", p = o?.[u], m = {
    ...o,
    ...r ? {
      [u]: {
        ...typeof p != "boolean" && p,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return br(e, ...t);
    let x = r;
    "palette" in e || m[u] && (m[u] !== !0 ? x = m[u].palette : u === "dark" && (x = {
      mode: "dark"
    }));
    const y = br({
      ...e,
      palette: x
    }, ...t);
    return y.defaultColorScheme = u, y.colorSchemes = m, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...m.light !== !0 && m.light,
      palette: y.palette
    }, wn(y, "dark", m.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...m.dark !== !0 && m.dark,
      palette: y.palette
    }, wn(y, "light", m.light)), y;
  }
  return !r && !("light" in m) && u === "light" && (m.light = !0), As({
    ...s,
    colorSchemes: m,
    defaultColorScheme: u,
    ...typeof n != "boolean" && n
  }, ...t);
}
function _s({
  theme: e,
  ...t
}) {
  const r = ct in e ? e[ct] : void 0;
  return /* @__PURE__ */ i.jsx(Et, {
    ...t,
    themeId: r ? ct : void 0,
    theme: r || e
  });
}
const Nt = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (Y.string, Y.string, Y.string, Y.string, Y.string, Y.oneOf(["dark", "light", "system"]), Y.string, Y.string);
const {
  CssVarsProvider: ks
} = zi({
  themeId: ct,
  // @ts-ignore ignore module augmentation tests
  theme: () => fo({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Nt.colorSchemeStorageKey,
  modeStorageKey: Nt.modeStorageKey,
  defaultColorScheme: {
    light: Nt.defaultLightColorScheme,
    dark: Nt.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: so(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return jt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), $s = ks;
function Ps({
  theme: e,
  ...t
}) {
  const r = q.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = ct in e ? e[ct] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ i.jsx(_s, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ i.jsx($s, {
    theme: e,
    ...t
  });
}
const On = "/lookup", Mt = /* @__PURE__ */ new Map();
let ht = null;
const Is = typeof window < "u";
function po() {
  if (!Is)
    return null;
  if (ht)
    return ht;
  try {
    ht = Lo.createInstance({
      name: "react-questionnaire-renderer",
      storeName: "lookup-cache"
    });
  } catch (e) {
    console.warn("[lookup-cache] Failed to create localforage instance:", e), ht = null;
  }
  return ht;
}
function Ns(e = {}) {
  if (!e || typeof e != "object")
    return "unknown::latest";
  const t = e.cacheKey || e.id || e.tableName || e.value || "lookup", r = e.version || "latest";
  return `${t}::${r}`;
}
async function Ms(e) {
  if (!e) return null;
  if (Mt.has(e))
    return Mt.get(e);
  const t = po();
  if (!t) return null;
  try {
    const r = await t.getItem(e);
    if (r)
      return Mt.set(e, r), r;
  } catch (r) {
    console.warn("[lookup-cache] Failed to read cache:", e, r);
  }
  return null;
}
async function Ls(e, t) {
  if (e)
    try {
      Mt.set(e, t);
      const r = po();
      r && await r.setItem(e, t);
    } catch (r) {
      console.warn("[lookup-cache] Failed to persist cache:", e, r);
    }
}
function jn(e) {
  return e ? Array.isArray(e) ? e : e.data && Array.isArray(e.data) ? e.data : e.items && Array.isArray(e.items) ? e.items : [] : [];
}
function Ds(e) {
  return e ? String(e).replace(/^\/+/, "").replace(/\.json$/i, "") : "";
}
function Vs(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Bs(e = {}, t = {}) {
  if (!e || typeof e != "object") return null;
  if (typeof t.resolveLookupUrl == "function") {
    const p = t.resolveLookupUrl(e, t);
    if (p) return p;
  }
  if (e.url)
    return e.url;
  const r = t.lookupBaseUrl ?? On, n = Vs(r || On), o = e.fileName || e.id || e.tableName || e.cacheKey;
  if (!o) return null;
  const a = Ds(o), s = e.fileName?.endsWith(".json") ? e.fileName : `${a}.json`;
  return /^https?:/i.test(s) ? s : /^https?:/i.test(n) ? `${n}/${s}` : `${n.startsWith("/") ? n : `/${n}`}/${s}`.replace(/([^:]\/)(\/+)/g, "$1");
}
async function Fs(e) {
  if (typeof fetch != "function")
    throw new Error("Global fetch is not available. Provide lookupClient or polyfill fetch.");
  const t = await fetch(e);
  if (!t.ok) {
    const r = `[lookup] Request failed: ${t.status} ${t.statusText}`;
    throw new Error(r);
  }
  return t.json();
}
async function Us(e = {}, t = {}) {
  const r = Bs(e, t);
  if (!r)
    throw new Error("Unable to resolve lookup URL from source definition");
  if (t.lookupClient && typeof t.lookupClient.get == "function") {
    const o = await t.lookupClient.get(r, e.requestConfig || {});
    return jn(o && o.data !== void 0 ? o.data : o);
  }
  const n = await Fs(r);
  return jn(n);
}
function Rn(e, t) {
  return e === t ? !0 : e == null || t == null ? !1 : String(e) === String(t);
}
const mo = bo(), Z = {
  SET_QUESTIONNAIRE: "SET_QUESTIONNAIRE",
  SET_VALIDATION: "SET_VALIDATION",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_RESPONSE: "SET_RESPONSE",
  SET_VARIABLE: "SET_VARIABLE",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  SET_LOADING: "SET_LOADING",
  SET_OFFLINE: "SET_OFFLINE",
  LOAD_QUESTIONNAIRE: "LOAD_QUESTIONNAIRE",
  SET_TOUCHED: "SET_TOUCHED",
  SET_INITIAL_RESPONSES: "SET_INITIAL_RESPONSES",
  RESET_RESPONSES: "RESET_RESPONSES",
  SET_ERRORS: "SET_ERRORS",
  SET_RUNTIME_METHODS: "SET_RUNTIME_METHODS",
  SET_CONFIG: "SET_CONFIG",
  SET_LOOKUP_ENTRY: "SET_LOOKUP_ENTRY",
  SET_LOOKUP_STATUS: "SET_LOOKUP_STATUS"
}, An = typeof navigator < "u" ? navigator : void 0, fr = (e) => {
  if (typeof structuredClone == "function")
    return structuredClone(e);
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
    return e;
  }
}, yt = (e, t) => {
  if (e === t) return !0;
  try {
    return JSON.stringify(e) === JSON.stringify(t);
  } catch {
    return !1;
  }
}, Ks = {
  questionnaire: null,
  template: null,
  validation: null,
  currentPage: 0,
  responses: {},
  initialResponses: {},
  variables: {},
  errors: {},
  touched: {},
  isLoading: !1,
  isOnline: An ? An.onLine : !0,
  isDirty: !1,
  validationState: "unknown",
  runtime: null,
  config: {
    readOnly: !1,
    disabled: !1,
    locale: "en",
    translations: {},
    fetchMedia: null,
    theme: null,
    componentsMap: {},
    lookupClient: null,
    lookupBaseUrl: null,
    resolveLookupUrl: null
  },
  lookupCache: {},
  lookupStatus: {},
  lookupErrors: {}
};
function Ws(e, t) {
  switch (t.type) {
    case Z.SET_QUESTIONNAIRE:
      return yt(e.template, t.payload) ? e : {
        ...e,
        questionnaire: t.payload,
        template: t.payload
      };
    case Z.SET_VALIDATION:
      return yt(e.validation, t.payload) ? e : { ...e, validation: t.payload };
    case Z.SET_CURRENT_PAGE:
      return { ...e, currentPage: t.payload };
    case Z.SET_RESPONSE: {
      const r = { ...e.responses };
      if (t.payload.value === null || t.payload.value === void 0) {
        if (!(t.payload.dataKey in r)) return e;
        delete r[t.payload.dataKey];
      } else {
        const n = e.responses[t.payload.dataKey];
        if (n === t.payload.value || JSON.stringify(n) === JSON.stringify(t.payload.value)) return e;
        r[t.payload.dataKey] = t.payload.value;
      }
      return {
        ...e,
        responses: r,
        isDirty: !yt(r, e.initialResponses)
      };
    }
    case Z.SET_VARIABLE: {
      const r = { ...e.variables };
      if (t.payload.value === null || t.payload.value === void 0) {
        if (!(t.payload.dataKey in r)) return e;
        delete r[t.payload.dataKey];
      } else {
        const n = e.variables[t.payload.dataKey];
        if (n === t.payload.value || JSON.stringify(n) === JSON.stringify(t.payload.value)) return e;
        r[t.payload.dataKey] = t.payload.value;
      }
      return { ...e, variables: r };
    }
    case Z.SET_ERROR:
      return {
        ...e,
        errors: { ...e.errors, [t.payload.dataKey]: t.payload.error },
        validationState: "invalid"
      };
    case Z.CLEAR_ERROR: {
      const r = { ...e.errors };
      return delete r[t.payload.dataKey], {
        ...e,
        errors: r,
        validationState: Object.keys(r).length ? "invalid" : "valid"
      };
    }
    case Z.SET_TOUCHED:
      return {
        ...e,
        touched: { ...e.touched, [t.payload.dataKey]: !0 }
      };
    case Z.SET_LOADING:
      return { ...e, isLoading: t.payload };
    case Z.SET_OFFLINE:
      return { ...e, isOnline: !t.payload };
    case Z.LOAD_QUESTIONNAIRE:
      return {
        ...e,
        questionnaire: t.payload.questionnaire,
        template: t.payload.questionnaire,
        validation: t.payload.validation
      };
    case Z.SET_INITIAL_RESPONSES: {
      const r = fr(t.payload || {});
      return {
        ...e,
        initialResponses: r,
        responses: fr(t.payload || {}),
        isDirty: !1
      };
    }
    case Z.RESET_RESPONSES:
      return {
        ...e,
        responses: fr(e.initialResponses || {}),
        isDirty: !1
      };
    case Z.SET_ERRORS:
      return {
        ...e,
        errors: t.payload || {},
        validationState: t.payload && Object.keys(t.payload).length ? "invalid" : "valid"
      };
    case Z.SET_RUNTIME_METHODS:
      try {
        const r = e.runtime || null, n = t.payload || null;
        if (r === n) return e;
        if (r && n && typeof r == "object" && typeof n == "object") {
          const o = Object.keys(r), a = Object.keys(n);
          if (o.length === a.length && o.every((s) => a.includes(s)) && o.every((u) => r[u] === n[u]))
            return e;
        }
        return {
          ...e,
          runtime: t.payload
        };
      } catch {
        return {
          ...e,
          runtime: t.payload
        };
      }
    case Z.SET_CONFIG:
      try {
        const r = { ...e.config, ...t.payload || {} };
        return yt(e.config, r) ? e : {
          ...e,
          config: r
        };
      } catch {
        return {
          ...e,
          config: { ...e.config, ...t.payload || {} }
        };
      }
    case Z.SET_LOOKUP_ENTRY: {
      const { key: r, entry: n } = t.payload || {};
      if (!r || !n) return e;
      const o = e.lookupCache[r];
      return o && yt(o, n) ? {
        ...e,
        lookupStatus: { ...e.lookupStatus, [r]: "loaded" },
        lookupErrors: { ...e.lookupErrors, [r]: null }
      } : {
        ...e,
        lookupCache: { ...e.lookupCache, [r]: n },
        lookupStatus: { ...e.lookupStatus, [r]: "loaded" },
        lookupErrors: { ...e.lookupErrors, [r]: null }
      };
    }
    case Z.SET_LOOKUP_STATUS: {
      const { key: r, status: n, error: o = null } = t.payload || {};
      return r ? {
        ...e,
        lookupStatus: { ...e.lookupStatus, [r]: n },
        lookupErrors: { ...e.lookupErrors, [r]: o }
      } : e;
    }
    default:
      return e;
  }
}
function zs({ children: e }) {
  const [t, r] = xo(Ws, Ks), n = ke(/* @__PURE__ */ new Map());
  pe(() => {
    if (typeof window > "u")
      return;
    const S = () => r({ type: Z.SET_OFFLINE, payload: !1 }), k = () => r({ type: Z.SET_OFFLINE, payload: !0 });
    return window.addEventListener("online", S), window.addEventListener("offline", k), () => {
      window.removeEventListener("online", S), window.removeEventListener("offline", k);
    };
  }, []);
  const o = ne((S) => {
    r({ type: Z.SET_QUESTIONNAIRE, payload: S });
  }, []), a = ne((S) => {
    r({ type: Z.SET_VALIDATION, payload: S });
  }, []), s = ne((S) => {
    r({ type: Z.SET_CURRENT_PAGE, payload: S });
  }, []), u = ne((S, k, $ = null) => {
    const A = $ !== null ? `${S}#${$}` : S;
    r({
      type: Z.SET_RESPONSE,
      payload: { dataKey: A, value: k }
    });
  }, []), p = ne((S, k, $ = null) => {
    const A = $ !== null ? `${S}#${$}` : S;
    r({
      type: Z.SET_VARIABLE,
      payload: { dataKey: A, value: k }
    });
  }, []), m = ne((S, k) => {
    r({ type: Z.SET_ERROR, payload: { dataKey: S, error: k } });
  }, []), x = ne((S) => {
    r({ type: Z.CLEAR_ERROR, payload: { dataKey: S } });
  }, []), y = ne((S) => {
    r({ type: Z.SET_TOUCHED, payload: { dataKey: S } });
  }, []), h = ne((S) => {
    r({ type: Z.SET_LOADING, payload: S });
  }, []), b = ne((S, k) => {
    r({
      type: Z.LOAD_QUESTIONNAIRE,
      payload: { questionnaire: S, validation: k }
    });
  }, []), f = ne((S) => {
    r({ type: Z.SET_INITIAL_RESPONSES, payload: S });
  }, []), c = ne(() => {
    r({ type: Z.RESET_RESPONSES });
  }, []), g = ne((S) => {
    r({ type: Z.SET_ERRORS, payload: S });
  }, []), v = ne((S) => {
    r({ type: Z.SET_RUNTIME_METHODS, payload: S });
  }, []), R = ne((S) => {
    r({ type: Z.SET_CONFIG, payload: S });
  }, []), I = ne(async (S = {}) => {
    const k = Ns(S), $ = t.lookupCache[k];
    if ($ && Array.isArray($.data))
      return $.data;
    const A = n.current.get(k);
    if (A)
      return A;
    const w = (async () => {
      try {
        const T = await Ms(k);
        if (T && Array.isArray(T.data))
          return r({
            type: Z.SET_LOOKUP_ENTRY,
            payload: { key: k, entry: T }
          }), T.data;
        r({
          type: Z.SET_LOOKUP_STATUS,
          payload: { key: k, status: "loading", error: null }
        });
        const N = await Us(S, t.config), l = {
          data: N,
          version: S.version || null,
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return r({
          type: Z.SET_LOOKUP_ENTRY,
          payload: { key: k, entry: l }
        }), await Ls(k, l), N;
      } catch (T) {
        const N = T && T.message ? T.message : String(T);
        throw r({
          type: Z.SET_LOOKUP_STATUS,
          payload: { key: k, status: "error", error: N }
        }), T;
      } finally {
        n.current.delete(k);
      }
    })();
    return n.current.set(k, w), w;
  }, [t.lookupCache, t.config, r]), O = {
    ...t,
    setQuestionnaire: o,
    setValidation: a,
    setCurrentPage: s,
    setResponse: u,
    setVariable: p,
    setError: m,
    clearError: x,
    setTouched: y,
    setLoading: h,
    loadQuestionnaire: b,
    setInitialResponses: f,
    resetResponses: c,
    setErrors: g,
    setRuntimeMethods: v,
    setConfig: R,
    ensureLookupDataset: I
  };
  return /* @__PURE__ */ i.jsx(mo.Provider, { value: O, children: e });
}
function $e() {
  const e = So(mo);
  if (!e)
    throw new Error("useQuestionnaire must be used within a QuestionnaireProvider");
  const { runtime: t, ...r } = e;
  return {
    ...r,
    submit: t?.submit || null,
    reset: t?.reset || null,
    getResponses: t?.getResponses || null
  };
}
function Rt(e, t = {}, r = {}, n = null) {
  let o = e;
  return o.includes("@$ROW$") && n !== null && (o = o.replace("@$ROW$", `#${n}`)), t[o] !== void 0 ? t[o] : r[o];
}
function He(e, t = {}, r = {}, n = null) {
  try {
    const o = (p) => Rt(p, t, r, n), a = (p) => n !== null && (p === 1 || p === "1") ? n : p ?? n, s = String(e ?? "").trim();
    return new Function(
      "getValue",
      "getRowIndex",
      "responses",
      "variables",
      "currentRowIndex",
      "code",
      `
      "use strict";
      // Short aliases if users prefer them in expressions
      const $getValue = getValue;
      const $getRowIndex = getRowIndex;
      const $responses = responses;
      const $variables = variables;
      const $row = currentRowIndex;

      // Shadow some globals to avoid accidental/dangerous access
      const window = undefined, document = undefined, globalThis = undefined;
      const Function = undefined, require = undefined, module = undefined, exports = undefined;

      // IMPORTANT: direct eval returns the last completion value
      return eval(code);
    `
    )(o, a, t, r, n, s);
  } catch (o) {
    try {
      He._lastErrors = He._lastErrors || /* @__PURE__ */ new Map();
      const a = He._lastErrors.get(e), s = o && o.message ? o.message : String(o);
      a !== s && (console.error("Error evaluating expression:", e, o), He._lastErrors.set(e, s));
    } catch {
      console.error("Error evaluating expression (fallback):", e, o);
    }
    return;
  }
}
function Gs(e, t = {}, r = {}, n = null) {
  if (!e.enableCondition) return !0;
  try {
    return He(e.enableCondition, t, r, n);
  } catch (o) {
    return console.error("Error evaluating enable condition:", o), !1;
  }
}
function Ys(e, t = {}, r = {}, n = null) {
  if (typeof e != "string") return e;
  let o = e;
  if (o.includes("$NAME$") && n !== null) {
    const a = `r202_nama#${n}`, s = Rt(a, t, r) || "N/A";
    o = o.replace(/\$NAME\$/g, s);
  }
  return o.includes("@$ROW$") && n !== null && (o = o.replace(/@\$ROW\$/g, `#${n}`)), o;
}
function dt(e, t, r = {}, n = {}, o = [], a = {}) {
  const s = [], u = e.dataKey, p = a[u];
  if (e.required && (!t || Array.isArray(t) && t.length === 0) && p && s.push("This field is required"), e.lengthInput && t && typeof t == "string") {
    const y = e.lengthInput[0];
    y.minlength && t.length < y.minlength && s.push(`Minimum length is ${y.minlength}`), y.maxlength && t.length > y.maxlength && s.push(`Maximum length is ${y.maxlength}`);
  }
  if (e.rangeInput && t && !isNaN(t)) {
    const y = e.rangeInput[0];
    y.min !== void 0 && Number(t) < y.min && s.push(`Minimum value is ${y.min}`), y.max !== void 0 && Number(t) > y.max && s.push(`Maximum value is ${y.max}`);
  }
  let m = o;
  if (o && typeof o == "object" && !Array.isArray(o) && (m = o.testFunctions || []), !Array.isArray(m))
    return console.error("validationRules is not an array:", o, "type:", typeof o), s;
  const x = m.filter((y) => y.dataKey === e.dataKey);
  for (const y of x)
    for (const h of y.validations)
      try {
        !He(h.test, r, n) || s.push(h.message);
      } catch (b) {
        console.error("Error evaluating validation rule:", b);
      }
  return s;
}
const Hs = ({ question: e }) => /* @__PURE__ */ i.jsx(J, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Qe, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { variant: "h6", children: [
    "Section: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Section components need nested question rendering - coming soon!" })
] }) }), Qs = ({ question: e, responses: t = {}, variables: r = {}, validation: n = [] }) => {
  const { errors: o, setVariable: a } = $e(), s = xe(() => {
    if (!e?.sourceQuestion) return [];
    const v = Rt(e.sourceQuestion, t, r) || [];
    return Array.isArray(v) ? v : [];
  }, [e, t, r]), [u, p] = de("list"), [m, x] = de(0), y = (v) => {
    x(v), p("detail");
  }, h = () => p("list"), b = () => x((v) => Math.max(0, v - 1)), f = () => x((v) => Math.min(s.length - 1, v + 1)), c = s[m], g = c?.value ?? m + 1;
  return pe(() => {
    if (u === "detail" && c) {
      const v = e?.dataKey || "art_nested";
      a(v, c, g);
    }
  }, [u, c, g, e, a]), u === "list" ? /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(U, { variant: "subtitle1", sx: { mb: 1 }, children: e.label || e.title || "Roster" }),
    s.length > 0 && /* @__PURE__ */ i.jsx(Sr, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: s.map((v, R) => /* @__PURE__ */ i.jsx(vr, { divider: !0, secondaryAction: /* @__PURE__ */ i.jsx(Te, { variant: "outlined", size: "small", onClick: () => y(R), "aria-label": "view-row", children: /* @__PURE__ */ i.jsx(Do, { fontSize: "small" }) }), children: /* @__PURE__ */ i.jsx(Er, { primary: v.label ?? `Row ${v.value ?? R + 1}` }) }, v.value ?? R)) })
  ] }) : /* @__PURE__ */ i.jsxs(st, { variant: "outlined", sx: { p: 2 }, children: [
    /* @__PURE__ */ i.jsxs(Mr, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 1 }, children: [
      /* @__PURE__ */ i.jsxs(U, { variant: "subtitle1", children: [
        e.label,
        " — ",
        c?.label
      ] }),
      /* @__PURE__ */ i.jsx(Te, { size: "small", onClick: h, "aria-label": "back-to-list", children: /* @__PURE__ */ i.jsx(Vo, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ i.jsx(Lr, { sx: { mb: 2 } }),
    e.components?.[0]?.map((v, R) => /* @__PURE__ */ i.jsx(J, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Nr,
      {
        question: v,
        responses: t,
        variables: r,
        errors: o,
        validation: n,
        rowIndex: g
      }
    ) }, v.dataKey || R)),
    /* @__PURE__ */ i.jsx(Lr, { sx: { my: 2 } }),
    /* @__PURE__ */ i.jsxs(Mr, { direction: "row", spacing: 1, justifyContent: "space-between", children: [
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "contained",
          disabled: m === 0,
          onClick: b,
          "aria-label": "previous-row",
          children: /* @__PURE__ */ i.jsx(Bo, { fontSize: "small" })
        }
      ),
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "contained",
          disabled: m >= s.length - 1,
          onClick: f,
          "aria-label": "next-row",
          children: /* @__PURE__ */ i.jsx(Fo, { fontSize: "small" })
        }
      )
    ] })
  ] });
}, Js = ({ question: e }) => {
  const t = e.html || e.content || e.label || e.instructions || "";
  if (t.includes("background-color") && (t.includes("#6467f2") || t.includes("grey"))) {
    const n = t.match(/>([^<]+)</), o = n ? n[1].replace(/<[^>]*>/g, "") : "", a = t.includes("background-color: grey") || t.includes("PEMUTAKHIRAN DATA TUNGGAL"), s = t.includes("#6467f2");
    return /* @__PURE__ */ i.jsx(J, { sx: { mb: 3 }, children: /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "h6",
        component: "div",
        sx: {
          bgcolor: a ? "grey.600" : s ? "#6467f2" : "primary.main",
          color: "white",
          p: 2,
          borderRadius: "13px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: a ? "16px" : "14px",
          border: "2px solid white"
        },
        children: o
      }
    ) });
  }
  return /* @__PURE__ */ i.jsx(J, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
    U,
    {
      component: "div",
      sx: {
        "& p": { mb: 1 },
        "& ul, & ol": { pl: 2, mb: 1 },
        "& li": { mb: 0.5 }
      },
      dangerouslySetInnerHTML: { __html: t }
    }
  ) });
}, Xs = ({ question: e, value: t }) => {
  if (e.render === !1) return null;
  const r = t != null ? String(t) : "", n = Number(e.renderType) === 2;
  return /* @__PURE__ */ i.jsx(J, { sx: { mb: 1 }, children: n ? /* @__PURE__ */ i.jsx(U, { variant: "body1", children: r }) : /* @__PURE__ */ i.jsx(U, { variant: "subtitle2", color: "text.primary", children: r }) });
}, Xe = ({ error: e, isRequired: t, hasValue: r, customMessage: n, isTouched: o = !1 }) => {
  if (!(e || t && !r && o)) return null;
  const s = e || n || "This field is required";
  return /* @__PURE__ */ i.jsxs(J, { sx: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "error.main",
    mt: 1
  }, children: [
    /* @__PURE__ */ i.jsx(Uo, { fontSize: "small" }),
    /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "error", children: s })
  ] });
}, pr = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = $e(), [y, h] = de(t);
  pe(() => {
    h(t);
  }, [t]);
  const b = (O) => {
    const S = O.target.value;
    h(S), r(S);
  }, f = () => {
    p(e.dataKey);
    const O = dt(e, y, a, s, u, m);
    O.length > 0 ? x(e.dataKey, O[0]) : x(e.dataKey, null);
  }, c = (O) => {
    if (!O) return { main: "", help: "" };
    if (O.includes('<br><small><i><font color="#007bff">')) {
      const k = O.split('<br><small><i><font color="#007bff">'), $ = k[0].replace(/<[^>]*>/g, ""), A = k[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: $, help: A };
    }
    return { main: O.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: g, help: v } = c(e.label || e.title), R = () => e.mask === "integer" || e.mask === "decimal" ? "number" : e.title?.toLowerCase().includes("email") ? "email" : e.title?.toLowerCase().includes("phone") ? "tel" : "text", I = () => {
    const O = {};
    return e.mask === "integer" ? (O.step = 1, O.inputMode = "numeric") : e.mask === "decimal" && (O.step = "any", O.inputMode = "decimal"), e.maxLength && (O.maxLength = e.maxLength), O;
  };
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: g,
        value: y,
        onChange: b,
        onBlur: f,
        error: !!n,
        helperText: v && !n ? v : void 0,
        disabled: o,
        required: e.required,
        type: R(),
        inputProps: I(),
        multiline: e.questionType === "TEXT_LONG",
        rows: e.questionType === "TEXT_LONG" ? 4 : 1,
        variant: "outlined",
        sx: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "primary.main"
            }
          }
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!y && y.trim() !== "",
        isTouched: m[e.dataKey]
      }
    ),
    v && n && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: {
          mt: 0.5,
          display: "block",
          color: "#007bff",
          fontStyle: "italic",
          fontSize: "12px"
        },
        children: v
      }
    )
  ] });
}, Zs = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  rowIndex: u = null
}) => {
  const p = (f) => {
    const c = f.target.value, g = b.find((R) => R.value == c), v = g ? [{
      value: g.value,
      label: g.text || g.label
    }] : null;
    r(v);
  }, m = (f) => {
    if (!f) return { main: "", help: "" };
    if (f.includes('<br><small><i><font color="#007bff">')) {
      const g = f.split('<br><small><i><font color="#007bff">'), v = g[0].replace(/<[^>]*>/g, ""), R = g[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: v, help: R };
    }
    return { main: f.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: x, help: y } = m(e.label || e.title), b = (() => {
    if (e.answers && Array.isArray(e.answers))
      return e.answers;
    if (e.options && Array.isArray(e.options))
      return e.options;
    if (e.categorical && Array.isArray(e.categorical))
      return e.categorical.map((f) => ({
        value: f.value || f.id,
        text: f.text || f.title || f.label
      }));
    if (e.sourceOption) {
      const f = Rt(e.sourceOption, a, s, u) || [];
      return Array.isArray(f) ? f : f && typeof f == "object" ? [f] : [{ value: f, text: String(f) }];
    }
    return [];
  })();
  return /* @__PURE__ */ i.jsx(J, { sx: { width: "100%", mb: 2 }, children: /* @__PURE__ */ i.jsxs(Ct, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ i.jsxs(In, { component: "legend", sx: { mb: 1, color: "text.primary", fontSize: "16px" }, children: [
      x,
      e.required && /* @__PURE__ */ i.jsx(U, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    y && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: {
          mb: 2,
          color: "#007bff",
          fontStyle: "italic",
          fontSize: "12px",
          display: "block"
        },
        children: y
      }
    ),
    /* @__PURE__ */ i.jsx(
      Eo,
      {
        value: Array.isArray(t) && t.length > 0 ? t[0].value : "",
        onChange: p,
        sx: {
          "& .MuiFormControlLabel-root": {
            mb: 0.5,
            ml: 0,
            "& .MuiRadio-root": {
              p: 1
            }
          }
        },
        children: b.map((f) => /* @__PURE__ */ i.jsx(
          Nn,
          {
            value: f.value,
            control: /* @__PURE__ */ i.jsx(To, { size: "medium" }),
            label: /* @__PURE__ */ i.jsxs(J, { children: [
              /* @__PURE__ */ i.jsx(U, { variant: "body2", children: f.text || f.label }),
              f.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", children: f.description })
            ] }),
            sx: {
              "&:hover": {
                backgroundColor: "action.hover",
                borderRadius: 1
              },
              "& .Mui-checked + .MuiFormControlLabel-label": {
                fontWeight: "medium"
              }
            }
          },
          f.value
        ))
      }
    ),
    n && /* @__PURE__ */ i.jsx(Je, { children: n })
  ] }) });
}, _n = "__lookup-loading__", qs = (e) => Array.isArray(e) ? e.map((t) => t && typeof t == "object" && "value" in t ? t.value : t).filter((t) => t != null) : e && typeof e == "object" && "value" in e ? e.value !== void 0 ? [e.value] : [] : e == null ? [] : [e], el = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const {
    setTouched: p,
    touched: m,
    setError: x,
    ensureLookupDataset: y
  } = $e(), [h, b] = de([]), [f, c] = de(!1), [g, v] = de(null), [R, I] = de(() => {
    const V = e.sourceSelect;
    return !Array.isArray(V) || V.length === 0;
  }), O = (V) => {
    const d = V.target.value;
    if (d === "") {
      r(null);
      return;
    }
    if (d === _n)
      return;
    const E = M.find((j) => j.optionKey === d), P = E ? [{
      value: E.value,
      label: E.label,
      meta: {
        sourceId: E.sourceId,
        row: E.row
      }
    }] : null;
    r(P);
  }, S = () => {
    p(e.dataKey);
    const V = dt(e, t, a, s, u, m);
    V.length > 0 ? x(e.dataKey, V[0]) : x(e.dataKey, null);
  }, k = (V) => {
    if (!V) return { mainLabel: "", helpText: "" };
    let d = V.replace(/<[^>]*>/g, "").trim(), E = "";
    const P = V.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return P && (E = P[1], d = V.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: d, helpText: E };
  }, $ = xe(() => e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((V) => ({
    value: V.value || V.id,
    text: V.text || V.title || V.label,
    description: V.description
  })) : [], [e.answers, e.options, e.categorical]), A = xe(
    () => Array.isArray(e.sourceSelect) ? e.sourceSelect : [],
    [e.sourceSelect]
  ), w = A.length > 0, T = xe(
    () => w ? JSON.stringify(A) : "",
    [A, w]
  );
  pe(() => {
    let V = !0;
    return !w || typeof y != "function" ? (b([]), c(!1), v(null), I(!0), () => {
      V = !1;
    }) : (I(!1), (async () => {
      c(!0), v(null);
      try {
        const E = await Promise.all(
          A.map((P) => y(P))
        );
        if (!V) return;
        b(E.map((P) => Array.isArray(P) ? P : [])), I(!0);
      } catch (E) {
        if (!V) return;
        const P = E && E.message ? E.message : "Failed to load lookup data";
        v(P), b([]), I(!0);
      } finally {
        V && c(!1);
      }
    })(), () => {
      V = !1;
    });
  }, [y, T, w, A]);
  const N = xe(() => w ? A.flatMap((V, d) => {
    const E = h[d] || [], P = V.parentCondition || [], j = P.length === 0 ? E : E.filter((B) => P.every((F) => {
      const K = B?.[F.key], W = typeof F.value == "string" ? Rt(F.value, a, s) : F.value, H = qs(W);
      return H.length ? H.some((z) => Rn(K, z)) : !1;
    })), L = V.id || V.tableName || `lookup-${d}`;
    return j.map((B) => {
      const F = B?.[V.value], K = B?.[V.desc] ?? B?.label ?? B?.text ?? B?.title ?? String(F ?? ""), W = V.fullDesc ? B?.[V.fullDesc] : B?.description;
      return {
        optionKey: `${L}:${F ?? ""}`,
        value: F,
        label: K,
        description: W,
        sourceId: L,
        row: B
      };
    });
  }) : [], [A, h, a, s, w]), l = xe(() => $.map((V) => {
    const d = V.value ?? V.id ?? V.code ?? V.text ?? "";
    return {
      optionKey: `static:${d ?? ""}`,
      value: d,
      label: V.text || V.label || V.title || String(d ?? ""),
      description: V.description
    };
  }), [$]), M = xe(() => w ? N : l, [w, N, l]), _ = xe(() => {
    if (!Array.isArray(t) || t.length === 0)
      return "";
    const V = t[0], d = V && typeof V == "object" ? V.value ?? V : V, E = M.find((P) => Rn(P.value, d));
    return E ? E.optionKey : "";
  }, [t, M]);
  pe(() => {
    w && R && (!Array.isArray(t) || t.length === 0 || (M.length === 0 || !_) && r(null));
  }, [w, R, M, _, t, r]);
  const G = `select-${e.variable}-label`, X = e.label || e.title || e.name || "", { mainLabel: re, helpText: ee } = k(X);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ i.jsxs(Ct, { fullWidth: !0, error: !!n, disabled: o || f, children: [
      /* @__PURE__ */ i.jsx(Mn, { id: G, required: e.required, children: re || e.title }),
      /* @__PURE__ */ i.jsxs(
        Ln,
        {
          labelId: G,
          value: _,
          onChange: O,
          onBlur: S,
          label: re || e.title,
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: 300
              }
            }
          },
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "divider"
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main"
            }
          },
          children: [
            !e.required && /* @__PURE__ */ i.jsx(bt, { value: "", children: /* @__PURE__ */ i.jsx("em", { children: "Select an option..." }) }),
            f && /* @__PURE__ */ i.jsx(bt, { disabled: !0, value: _n, children: /* @__PURE__ */ i.jsx("em", { children: "Loading options..." }) }),
            !f && M.map((V) => /* @__PURE__ */ i.jsx(bt, { value: V.optionKey, children: /* @__PURE__ */ i.jsxs(J, { children: [
              /* @__PURE__ */ i.jsx(U, { variant: "body1", children: V.label }),
              V.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: V.description })
            ] }) }, V.optionKey)),
            !f && w && !M.length && !g && /* @__PURE__ */ i.jsx(bt, { disabled: !0, value: "__no-data__", children: /* @__PURE__ */ i.jsx("em", { children: "No options available" }) })
          ]
        }
      ),
      ee && /* @__PURE__ */ i.jsx(Je, { sx: { color: "#007bff", fontStyle: "italic" }, children: ee }),
      g && /* @__PURE__ */ i.jsx(Je, { error: !0, children: g })
    ] }),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: e.required,
        hasValue: Array.isArray(t) && t.length > 0,
        isTouched: m[e.dataKey]
      }
    )
  ] });
}, tl = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = $e(), y = (v) => {
    const R = v.target.value, I = R === "" ? "" : Number(R);
    r(I);
  }, h = () => {
    p(e.dataKey);
    const v = dt(e, t, a, s, u, m);
    v.length > 0 ? x(e.dataKey, v[0]) : x(e.dataKey, null);
  }, b = (v) => {
    if (!v) return { mainLabel: "", helpText: "" };
    let R = v.replace(/<[^>]*>/g, "").trim(), I = "";
    const O = v.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return O && (I = O[1], R = v.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: R, helpText: I };
  }, f = e.label || e.title || e.name || "", { mainLabel: c, helpText: g } = b(f);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: c || e.title,
        value: t,
        onChange: y,
        onBlur: h,
        error: !!n,
        helperText: g ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        type: "number",
        inputProps: {
          min: e.min,
          max: e.max,
          step: e.step || 1,
          inputMode: "numeric"
        },
        variant: "outlined"
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!t,
        isTouched: m[e.dataKey]
      }
    ),
    g && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: g
      }
    ),
    e.instructions && !n && !g && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, kn = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (b) => (f) => {
    const c = f.target.checked, g = p.find((R) => R.value == b);
    let v = Array.isArray(t) ? [...t] : [];
    c ? g && !v.find((R) => R.value == b) && v.push({
      value: g.value,
      label: g.text || g.label
    }) : v = v.filter((R) => R.value != b), r(v);
  }, s = (b) => {
    if (!b) return { mainLabel: "", helpText: "" };
    let f = b.replace(/<[^>]*>/g, "").trim(), c = "";
    const g = b.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return g && (c = g[1], f = b.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: f, helpText: c };
  }, p = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((b) => ({
    value: b.value || b.id,
    text: b.text || b.title || b.label
  })) : [], m = Array.isArray(t) ? t : [], x = e.label || e.title || e.name || "", { mainLabel: y, helpText: h } = s(x);
  return /* @__PURE__ */ i.jsx(J, { sx: { width: "100%" }, children: /* @__PURE__ */ i.jsxs(Ct, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ i.jsxs(In, { component: "legend", sx: { mb: 2, color: "text.primary" }, children: [
      y || e.title,
      e.required && /* @__PURE__ */ i.jsx(U, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    h && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: h
      }
    ),
    e.instructions && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ i.jsx(
      Co,
      {
        sx: {
          "& .MuiFormControlLabel-root": {
            mb: 1,
            ml: 0,
            "& .MuiCheckbox-root": {
              p: 1
            }
          }
        },
        children: p.map((b) => /* @__PURE__ */ i.jsx(
          Nn,
          {
            control: /* @__PURE__ */ i.jsx(
              wo,
              {
                checked: m.some((f) => f.value == b.value),
                onChange: a(b.value),
                size: "medium"
              }
            ),
            label: /* @__PURE__ */ i.jsxs(J, { children: [
              /* @__PURE__ */ i.jsx(U, { variant: "body1", children: b.text || b.label }),
              b.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", children: b.description })
            ] }),
            sx: {
              borderRadius: 1,
              m: 0,
              mb: 1,
              p: 1,
              "&:hover": {
                backgroundColor: "action.hover"
              },
              "& .Mui-checked + .MuiFormControlLabel-label": {
                fontWeight: "medium"
              }
            }
          },
          b.value
        ))
      }
    ),
    n && /* @__PURE__ */ i.jsx(Je, { children: n }),
    e.maxSelections && /* @__PURE__ */ i.jsxs(U, { variant: "caption", color: "text.secondary", sx: { mt: 1 }, children: [
      "Maximum ",
      e.maxSelections,
      " selections allowed"
    ] })
  ] }) });
}, rl = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (x) => {
    const y = x.target.value;
    r(y);
  }, s = (x) => {
    if (!x) return { mainLabel: "", helpText: "" };
    let y = x.replace(/<[^>]*>/g, "").trim(), h = "";
    const b = x.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return b && (h = b[1], y = x.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: y, helpText: h };
  }, u = e.label || e.title || e.name || "", { mainLabel: p, helpText: m } = s(u);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        multiline: !0,
        rows: e.rows || 4,
        label: p || e.title,
        value: t,
        onChange: a,
        error: !!n,
        helperText: m ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        inputProps: {
          maxLength: e.maxLength
        },
        variant: "outlined",
        sx: {
          "& .MuiOutlinedInput-root": {
            alignItems: "flex-start"
          }
        }
      }
    ),
    m && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: m
      }
    ),
    e.instructions && !n && !m && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, nl = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  nowInput: a = !1
}) => {
  const s = (h) => {
    const b = h.target.value;
    r(b);
  }, u = (h) => {
    if (!h) return { mainLabel: "", helpText: "" };
    let b = h.replace(/<[^>]*>/g, "").trim(), f = "";
    const c = h.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return c && (f = c[1], b = h.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: b, helpText: f };
  };
  Be.useEffect(() => {
    if (a && !t) {
      const h = /* @__PURE__ */ new Date(), b = e.type === 11 ? (
        // Date only
        h.toISOString().split("T")[0]
      ) : (
        // YYYY-MM-DD
        h.toISOString().slice(0, 16)
      );
      r(b);
    }
  }, [a, t, r, e.type]);
  const p = () => {
    switch (e.type) {
      case 11:
        return "date";
      case 12:
        return "datetime-local";
      case 14:
        return "month";
      case 15:
        return "week";
      default:
        return "date";
    }
  }, m = e.label || e.title || e.name || "", { mainLabel: x, helpText: y } = u(m);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: x || e.title,
        value: t,
        onChange: s,
        error: !!n,
        helperText: y ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        type: p(),
        variant: "outlined",
        InputLabelProps: {
          shrink: !0
        }
      }
    ),
    y && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: y
      }
    ),
    e.instructions && !n && !y && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    ),
    a && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "info.main",
        sx: { mt: 0.5, display: "block" },
        children: "Automatically set to current date/time"
      }
    )
  ] });
}, ol = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (s) => {
    const u = s.target.value;
    r(u);
  };
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: e.label || e.title,
        value: t,
        onChange: a,
        error: !!n,
        helperText: e.instructions,
        disabled: o,
        required: e.required,
        type: "time",
        variant: "outlined",
        InputLabelProps: {
          shrink: !0
        }
      }
    ),
    e.instructions && !n && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, al = ({ question: e }) => /* @__PURE__ */ i.jsx(J, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Qe, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { children: [
    "Toggle: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Toggle component coming soon" })
] }) }), il = ({ question: e }) => /* @__PURE__ */ i.jsx(J, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Qe, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { children: [
    "Range Slider: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Range slider component coming soon" })
] }) }), sl = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (c) => {
    const v = c.target.value.map((R) => {
      const I = p.find((O) => O.value == R);
      return I ? {
        value: I.value,
        label: I.text || I.label
      } : { value: R, label: R };
    });
    r(v);
  }, s = (c) => {
    if (!c) return { mainLabel: "", helpText: "" };
    let g = c.replace(/<[^>]*>/g, "").trim(), v = "";
    const R = c.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return R && (v = R[1], g = c.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: g, helpText: v };
  }, p = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((c) => ({
    value: c.value || c.id,
    text: c.text || c.title || c.label
  })) : [], m = Array.isArray(t) ? t : [], x = m.map((c) => c.value), y = `multiple-select-${e.variable}-label`, h = e.label || e.title || e.name || "", { mainLabel: b, helpText: f } = s(h);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ i.jsxs(Ct, { fullWidth: !0, error: !!n, disabled: o, children: [
      /* @__PURE__ */ i.jsx(Mn, { id: y, required: e.required, children: b || e.title }),
      /* @__PURE__ */ i.jsx(
        Ln,
        {
          labelId: y,
          multiple: !0,
          value: x,
          onChange: a,
          input: /* @__PURE__ */ i.jsx(Oo, { label: b || e.title }),
          renderValue: (c) => /* @__PURE__ */ i.jsx(J, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: c.map((g) => {
            const v = m.find((R) => R.value == g);
            return /* @__PURE__ */ i.jsx(
              Tr,
              {
                label: v?.label || g,
                size: "small"
              },
              g
            );
          }) }),
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: 300
              }
            }
          },
          children: p.map((c) => /* @__PURE__ */ i.jsx(bt, { value: c.value, children: /* @__PURE__ */ i.jsxs(J, { children: [
            /* @__PURE__ */ i.jsx(U, { variant: "body1", children: c.text || c.label }),
            c.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: c.description })
          ] }) }, c.value))
        }
      ),
      f && /* @__PURE__ */ i.jsx(Je, { sx: { color: "#007bff", fontStyle: "italic" }, children: f }),
      n && /* @__PURE__ */ i.jsx(Je, { error: !0, children: n })
    ] })
  ] });
}, ll = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (p) => {
    const m = p.target.value;
    r(m);
  }, u = n || (t && !((p) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p))(t) ? "Please enter a valid email address" : "");
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: e.label || e.title,
        value: t,
        onChange: a,
        error: !!u,
        helperText: u || e.instructions,
        disabled: o,
        required: e.required,
        type: "email",
        inputProps: {
          inputMode: "email",
          autoComplete: "email"
        },
        variant: "outlined"
      }
    ),
    e.instructions && !u && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, cl = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = $e(), [y, h] = de(""), [b, f] = de(""), c = ne(($) => {
    if (!$ || $ === "")
      return "";
    const A = String($).replace(/[^\d.]/g, ""), w = parseFloat(A) || 0;
    return new Intl.NumberFormat(e.separatorFormat, {
      style: "currency",
      currency: e.currency || "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(w);
  }, [e.separatorFormat, e.currency]), g = ($) => {
    if (!$ || $ === "")
      return "";
    const A = $.replace(/[^\d]/g, "");
    return A === "" ? "" : parseInt(A, 10);
  };
  pe(() => {
    if (t !== y) {
      h(t);
      const $ = c(t);
      f($);
    }
  }, [t, y, c]);
  const v = ($) => {
    const A = $.target.value;
    if (A === "") {
      f(""), h(""), r("");
      return;
    }
    const w = A.replace(/[^\d.]/g, ""), T = g(w);
    h(T);
    const N = c(T);
    f(N), r(T);
  }, R = () => {
    p(e.dataKey);
    const $ = dt(e, y, a, s, u, m);
    $.length > 0 ? x(e.dataKey, $[0]) : x(e.dataKey, null);
  }, I = ($) => {
    if (!$) return { mainLabel: "", helpText: "" };
    let A = $.replace(/<[^>]*>/g, "").trim(), w = "";
    const T = $.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return T && (w = T[1], A = $.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: A, helpText: w };
  }, O = e.label || e.title || e.name || "", { mainLabel: S, helpText: k } = I(O);
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Re,
      {
        fullWidth: !0,
        label: S || e.title,
        value: b,
        onChange: v,
        onBlur: R,
        error: !!n,
        helperText: k ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        type: "text",
        inputProps: {
          inputMode: "numeric",
          "aria-label": `Currency input for ${S || e.title}`,
          "aria-describedby": n ? `${e.dataKey}-error` : void 0
        },
        variant: "outlined",
        sx: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "primary.main"
            }
          }
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!y && y !== "",
        isTouched: m[e.dataKey]
      }
    ),
    k && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: k
      }
    ),
    e.instructions && !n && !k && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, $n = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1,
  selectMode: a = !1
}) => {
  const [s, u] = de(""), p = () => {
    if (s.trim()) {
      const g = Array.isArray(t) ? t : [], R = {
        value: g.length > 0 ? Math.max(...g.map((I) => I.value)) + 1 : 1,
        label: s.trim()
      };
      r([...g, R]), u("");
    }
  }, m = (g) => {
    const R = (Array.isArray(t) ? t : []).filter((I) => I.value !== g);
    r(R);
  }, x = (g) => {
    g.key === "Enter" && p();
  }, y = (g) => {
    if (!g) return { mainLabel: "", helpText: "" };
    let v = g.replace(/<[^>]*>/g, "").trim(), R = "";
    const I = g.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return I && (R = I[1], v = g.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: v, helpText: R };
  }, h = Array.isArray(t) ? t : [], b = e.label || e.title || e.name || "", { mainLabel: f, helpText: c } = y(b);
  return /* @__PURE__ */ i.jsx(J, { sx: { width: "100%" }, children: /* @__PURE__ */ i.jsxs(Ct, { fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ i.jsxs(U, { variant: "subtitle1", sx: { mb: 1, fontWeight: "medium" }, children: [
      f || e.title,
      e.required && /* @__PURE__ */ i.jsx(U, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    c && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: c
      }
    ),
    e.instructions && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", gap: 1, mb: 2 }, children: [
      /* @__PURE__ */ i.jsx(
        Re,
        {
          value: s,
          onChange: (g) => u(g.target.value),
          onKeyPress: x,
          placeholder: `Add new ${a ? "option" : "item"}...`,
          fullWidth: !0,
          size: "small",
          disabled: o
        }
      ),
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "contained",
          onClick: p,
          disabled: !s.trim() || o,
          startIcon: /* @__PURE__ */ i.jsx(Ko, {}),
          children: "Add"
        }
      )
    ] }),
    h.length > 0 && /* @__PURE__ */ i.jsx(Sr, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: h.map((g) => /* @__PURE__ */ i.jsxs(vr, { divider: !0, children: [
      /* @__PURE__ */ i.jsx(
        Er,
        {
          primary: g.label,
          secondary: `Value: ${g.value}`
        }
      ),
      /* @__PURE__ */ i.jsx(jo, { children: /* @__PURE__ */ i.jsx(
        lt,
        {
          edge: "end",
          onClick: () => m(g.value),
          disabled: o,
          color: "error",
          size: "small",
          children: /* @__PURE__ */ i.jsx(Vn, {})
        }
      ) })
    ] }, g.value)) }),
    h.length === 0 && /* @__PURE__ */ i.jsxs(
      U,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1, textAlign: "center" },
        children: [
          "No ",
          a ? "options" : "items",
          " added yet. Use the input above to add ",
          a ? "options" : "items",
          "."
        ]
      }
    ),
    n && /* @__PURE__ */ i.jsx(Je, { error: !0, children: n })
  ] }) });
}, ul = ({
  question: e,
  value: t,
  onChange: r,
  error: n
}) => {
  const o = ke(null), a = ke(r), s = ke(null), [u, p] = de(null), [m, x] = de(null), [y, h] = de(!1), [b, f] = de(""), [c, g] = de(null), [v, R] = de(!1), [I, O] = de("");
  pe(() => {
    a.current = r;
  }, [r]);
  const S = (w, T, N, l) => {
    const _ = (N - w) * Math.PI / 180, G = (l - T) * Math.PI / 180, X = Math.sin(_ / 2) * Math.sin(_ / 2) + Math.cos(w * Math.PI / 180) * Math.cos(N * Math.PI / 180) * Math.sin(G / 2) * Math.sin(G / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(X), Math.sqrt(1 - X)));
  };
  pe(() => {
    if (t && typeof t == "string")
      try {
        const w = JSON.parse(t);
        w.latitude && w.longitude && (g(w), s.current || (s.current = w));
      } catch {
        const w = t.split(",");
        if (w.length === 2) {
          const T = parseFloat(w[0].trim()), N = parseFloat(w[1].trim());
          if (!isNaN(T) && !isNaN(N)) {
            const l = { latitude: T, longitude: N };
            g(l), s.current || (s.current = l);
          }
        }
      }
  }, [t]), pe(() => {
    (() => {
      if (!document.getElementById("leaflet-css")) {
        const T = document.createElement("link");
        T.id = "leaflet-css", T.rel = "stylesheet", T.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(T);
      }
      if (document.getElementById("leaflet-js"))
        window.L && R(!0);
      else {
        const T = document.createElement("script");
        T.id = "leaflet-js", T.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", T.onload = () => R(!0), document.head.appendChild(T);
      }
    })();
  }, []), pe(() => {
    if (!v || !window.L || u) return;
    const w = c ? [c.latitude, c.longitude] : [-7.257419, 112.752088], T = window.L.map(o.current).setView(w, 15);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(T);
    const N = window.L.divIcon({
      html: '<div style="background-color:#ff0000;width:20px;height:20px;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
      className: "leaflet-div-icon custom-marker"
    }), l = window.L.marker(w, {
      draggable: !0,
      icon: N
    }).addTo(T);
    return s.current || (s.current = {
      latitude: w[0],
      longitude: w[1]
    }), l.on("drag", (M) => {
      const _ = M.target.getLatLng(), G = s.current;
      if (G)
        if (S(
          G.latitude,
          G.longitude,
          _.lat,
          _.lng
        ) > 50) {
          const re = Math.atan2(
            _.lng - G.longitude,
            _.lat - G.latitude
          ), ee = 6371e3, V = 50, d = G.latitude * Math.PI / 180, E = G.longitude * Math.PI / 180, P = Math.asin(
            Math.sin(d) * Math.cos(V / ee) + Math.cos(d) * Math.sin(V / ee) * Math.cos(re)
          ), j = E + Math.atan2(
            Math.sin(re) * Math.sin(V / ee) * Math.cos(d),
            Math.cos(V / ee) - Math.sin(d) * Math.sin(P)
          ), L = [P * 180 / Math.PI, j * 180 / Math.PI];
          M.target.setLatLng(L), O("Movement limited to 50 meters from initial position"), setTimeout(() => O(""), 3e3);
        } else
          O("");
    }), l.on("dragend", (M) => {
      const _ = M.target.getLatLng(), G = { latitude: _.lat, longitude: _.lng };
      g(G), a.current(JSON.stringify(G));
    }), p(T), x(l), () => {
      T && (T.off(), T.remove()), x(null), p(null);
    };
  }, [v]), pe(() => {
    !m || !c || !m._map || !m._icon || (m.setLatLng([c.latitude, c.longitude]), u && u.panTo([c.latitude, c.longitude]));
  }, [c, m, u]);
  const k = () => {
    if (!navigator.geolocation) {
      f("Geolocation is not supported by this browser");
      return;
    }
    h(!0), f(""), navigator.geolocation.getCurrentPosition(
      (w) => {
        const T = w.coords.latitude, N = w.coords.longitude, l = { latitude: T, longitude: N };
        if (g(l), r(JSON.stringify(l)), s.current = l, u && m && m._icon) {
          const M = [T, N];
          u.setView(M, 15), m.setLatLng(M);
        }
        h(!1);
      },
      (w) => {
        let T = "Unable to get location";
        switch (w.code) {
          case w.PERMISSION_DENIED:
            T = "Location access denied by user";
            break;
          case w.POSITION_UNAVAILABLE:
            T = "Location information unavailable";
            break;
          case w.TIMEOUT:
            T = "Location request timed out";
            break;
          default:
            T = "An unknown error occurred";
        }
        f(T), h(!1);
      },
      {
        enableHighAccuracy: !0,
        timeout: 1e4,
        maximumAge: 0
      }
    );
  }, $ = (w, T) => {
    const N = parseFloat(T);
    if (isNaN(N)) return;
    const l = c ? { ...c } : { latitude: 0, longitude: 0 };
    if (l[w] = N, g(l), r(JSON.stringify(l)), s.current || (s.current = l), u && m && m._icon) {
      const M = [l.latitude, l.longitude];
      u.setView(M, 15), m.setLatLng(M);
    }
  }, A = e.required;
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsxs(U, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      A && /* @__PURE__ */ i.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ i.jsx(st, { elevation: 2, sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      J,
      {
        ref: o,
        sx: {
          width: "100%",
          height: 300,
          borderRadius: 1,
          overflow: "hidden",
          display: v ? "block" : "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5"
        },
        children: !v && /* @__PURE__ */ i.jsxs(J, { sx: { textAlign: "center" }, children: [
          /* @__PURE__ */ i.jsx(hr, { size: 40, sx: { mb: 2 } }),
          /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "textSecondary", children: "Loading map..." })
        ] })
      }
    ) }),
    I && /* @__PURE__ */ i.jsx(Qe, { severity: "warning", sx: { mb: 2 }, children: I }),
    /* @__PURE__ */ i.jsxs(J, { sx: { mb: 2 }, children: [
      /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "textSecondary", gutterBottom: !0, children: "Manual coordinate input:" }),
      /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", gap: 2, mb: 2 }, children: [
        /* @__PURE__ */ i.jsx(
          Re,
          {
            label: "Latitude",
            type: "number",
            value: c?.latitude || "",
            onChange: (w) => $("latitude", w.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 }
          }
        ),
        /* @__PURE__ */ i.jsx(
          Re,
          {
            label: "Longitude",
            type: "number",
            value: c?.longitude || "",
            onChange: (w) => $("longitude", w.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(J, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Te,
      {
        variant: "contained",
        startIcon: y ? /* @__PURE__ */ i.jsx(hr, { size: 20, color: "inherit" }) : /* @__PURE__ */ i.jsx(Wo, {}),
        onClick: k,
        disabled: y,
        sx: {
          bgcolor: "#6b46c1",
          "&:hover": { bgcolor: "#553c9a" },
          textTransform: "none"
        },
        children: y ? "Getting Location..." : "Get Location"
      }
    ) }),
    b && /* @__PURE__ */ i.jsx(Qe, { severity: "error", sx: { mb: 2 }, children: b }),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: A,
        hasValue: !!c
      }
    )
  ] });
}, dl = ["image/jpeg", "image/jpg", "image/png", "image/webp"], fl = 10 * 1024 * 1024, pl = ({
  question: e,
  value: t = null,
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = $e(), [y, h] = de(!1), [b, f] = de(null), [c, g] = de(""), [v, R] = de(0), [I, O] = de(!1), [S, k] = de(!1), $ = ke(null), A = ke(null);
  pe(() => {
    (() => {
      const L = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      k(L && "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices);
    })();
  }, []), pe(() => {
    t && typeof t == "object" && t.dataUrl ? (f(t.dataUrl), g(t.name || "Captured Image"), R(t.size || 0)) : t && typeof t == "string" ? (f(t), g("Uploaded Image")) : (f(null), g(""), R(0));
  }, [t]);
  const w = (j) => {
    if (!j) return { mainLabel: "", helpText: "" };
    let L = j.replace(/<[^>]*>/g, "").trim(), B = "";
    const F = j.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return F && (B = F[1], L = j.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: L, helpText: B };
  }, T = e.label || e.title || e.name || "", { mainLabel: N, helpText: l } = w(T), M = ne((j) => dl.includes(j.type) ? j.size > fl ? "Ukuran file terlalu besar. Maksimal 10MB." : null : "Format file tidak didukung. Gunakan JPG, PNG, atau WebP.", []), _ = ne(async (j) => {
    const L = M(j);
    if (L) {
      x(e.dataKey, L);
      return;
    }
    O(!0);
    try {
      const B = new FileReader();
      B.onload = (F) => {
        const K = {
          dataUrl: F.target.result,
          name: j.name,
          size: j.size,
          type: j.type,
          lastModified: j.lastModified
        };
        r(K), f(F.target.result), g(j.name), R(j.size), x(e.dataKey, null), O(!1);
      }, B.onerror = (F) => {
        console.error("FileReader error:", F), x(e.dataKey, "Error membaca file."), O(!1);
      }, B.readAsDataURL(j);
    } catch (B) {
      console.error("Error processing file:", B), x(e.dataKey, "Error memproses file."), O(!1);
    }
  }, [r, e.dataKey, x, M]), G = ne(async () => {
    if (S)
      try {
        const j = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        A.current?.click();
      } catch (j) {
        console.error("Error accessing camera:", j), $.current?.click();
      }
  }, [S]), X = ne((j) => {
    j.preventDefault(), j.stopPropagation(), j.type === "dragenter" || j.type === "dragover" ? h(!0) : j.type === "dragleave" && h(!1);
  }, []), re = ne((j) => {
    if (j.preventDefault(), j.stopPropagation(), h(!1), o) return;
    const L = [...j.dataTransfer.files];
    L && L[0] && _(L[0]);
  }, [o, _]), ee = ne((j) => {
    const L = j.target.files[0];
    L && _(L);
  }, [_]), V = ne((j) => {
    const L = j.target.files[0];
    L && _(L);
  }, [_]), d = ne(() => {
    r(null), f(null), g(""), R(0), x(e.dataKey, null), $.current && ($.current.value = ""), A.current && (A.current.value = "");
  }, [r, e.dataKey, x]), E = () => {
    p(e.dataKey);
    const j = !!(t && (t.dataUrl || t)), L = dt(e, j ? "has_value" : "", a, s, u, m);
    L.length > 0 ? x(e.dataKey, L[0]) : x(e.dataKey, null);
  }, P = (j) => {
    if (j === 0) return "0 Bytes";
    const L = 1024, B = ["Bytes", "KB", "MB", "GB"], F = Math.floor(Math.log(j) / Math.log(L));
    return parseFloat((j / Math.pow(L, F)).toFixed(2)) + " " + B[F];
  };
  return /* @__PURE__ */ i.jsxs(J, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsxs(
      J,
      {
        sx: {
          border: "2px dashed",
          borderColor: y ? "primary.main" : n ? "error.main" : "grey.300",
          borderRadius: 2,
          p: 3,
          textAlign: "center",
          backgroundColor: y ? "action.hover" : "background.paper",
          transition: "all 0.2s ease-in-out",
          cursor: o ? "not-allowed" : "pointer",
          opacity: o ? 0.6 : 1,
          position: "relative"
        },
        onDragEnter: X,
        onDragLeave: X,
        onDragOver: X,
        onDrop: re,
        onClick: () => !o && $.current?.click(),
        onBlur: E,
        children: [
          I && /* @__PURE__ */ i.jsx(
            J,
            {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10
              },
              children: /* @__PURE__ */ i.jsx(hr, {})
            }
          ),
          b ? /* @__PURE__ */ i.jsxs(Ro, { sx: { maxWidth: 400, mx: "auto" }, children: [
            /* @__PURE__ */ i.jsx(
              Ao,
              {
                component: "img",
                height: "200",
                image: b,
                alt: c,
                sx: { objectFit: "contain" }
              }
            ),
            /* @__PURE__ */ i.jsxs(_o, { children: [
              /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
                /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", children: c }),
                /* @__PURE__ */ i.jsx(
                  Tr,
                  {
                    label: P(v),
                    size: "small",
                    variant: "outlined"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", gap: 1, justifyContent: "center" }, children: [
                /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "primary",
                    onClick: (j) => {
                      j.stopPropagation(), $.current?.click();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Dr, {})
                  }
                ),
                S && /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "secondary",
                    onClick: (j) => {
                      j.stopPropagation(), G();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Vr, {})
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "error",
                    onClick: (j) => {
                      j.stopPropagation(), d();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Vn, {})
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ i.jsxs(J, { children: [
            /* @__PURE__ */ i.jsx(zo, { sx: { fontSize: 48, color: "text.secondary", mb: 2 } }),
            /* @__PURE__ */ i.jsx(U, { variant: "h6", gutterBottom: !0, children: N }),
            /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Seret dan jatuhkan foto di sini, atau klik untuk memilih file" }),
            /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: "Format yang didukung: JPG, PNG, WebP (maksimal 10MB)" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", gap: 1, mt: 2, justifyContent: "center" }, children: [
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ i.jsx(Dr, {}),
          onClick: () => $.current?.click(),
          disabled: o,
          size: "small",
          children: "Pilih File"
        }
      ),
      S && /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ i.jsx(Vr, {}),
          onClick: G,
          disabled: o,
          size: "small",
          children: "Kamera"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        ref: $,
        type: "file",
        accept: "image/*",
        onChange: ee,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        ref: A,
        type: "file",
        accept: "image/*",
        capture: "environment",
        onChange: V,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!(t && (t.dataUrl || t)),
        isTouched: m[e.dataKey]
      }
    ),
    l && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        sx: {
          mt: 0.5,
          display: "block",
          color: "#007bff",
          fontStyle: "italic"
        },
        children: l
      }
    ),
    e.instructions && !n && !l && /* @__PURE__ */ i.jsx(
      U,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, ml = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const [a, s] = de(t.completionTime || ""), u = () => {
    const m = (/* @__PURE__ */ new Date()).toLocaleString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    s(m), r({
      completionTime: m
    });
  }, p = e.required;
  return /* @__PURE__ */ i.jsxs(J, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ i.jsxs(U, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      p && /* @__PURE__ */ i.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", gap: 2, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ i.jsx(
        Re,
        {
          fullWidth: !0,
          value: a,
          disabled: !0,
          variant: "outlined",
          sx: { flex: 1 }
        }
      ),
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "contained",
          onClick: u,
          disabled: o,
          sx: {
            bgcolor: "#6b46c1",
            "&:hover": { bgcolor: "#553c9a" },
            textTransform: "none",
            minWidth: "120px"
          },
          children: "Get Time"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(
      Xe,
      {
        error: n,
        isRequired: p,
        hasValue: !!a
      }
    )
  ] });
}, mr = {
  1: "Section",
  2: "Nested/Roster",
  3: "Inner HTML",
  4: "Variable",
  6: "Action",
  11: "Date",
  12: "Date Time Local",
  13: "Time",
  14: "Month",
  15: "Week",
  16: "Single Check",
  17: "Toggle",
  18: "Range Slider",
  19: "Url Input",
  20: "Currency",
  21: "List Text Repeat",
  22: "List Select Repeat",
  23: "Multiple Select",
  24: "Masking",
  25: "Text Input",
  26: "Radio Group",
  27: "Select",
  28: "Number",
  29: "Checkbox",
  30: "Text Area",
  31: "Email",
  32: "PhotoInput",
  33: "GpsInput",
  34: "CsvInput",
  35: "NowInput",
  36: "SignatureInput",
  37: "UnitInput",
  38: "DecimalInput",
  39: "FileInput",
  40: "RatingInput"
};
function Nr({
  question: e,
  responses: t = {},
  variables: r = {},
  errors: n = {},
  validation: o = [],
  rowIndex: a = null
}) {
  const {
    setResponse: s,
    setVariable: u,
    clearError: p,
    config: m
  } = $e(), x = !!m?.readOnly, y = !!m?.disabled, h = x || y, b = m?.locale ?? "en", f = m?.translations ?? {}, c = m?.fetchMedia, g = m?.componentsMap || {};
  if (pe(() => {
    if (e.type === 4 && e.expression) {
      let T;
      try {
        T = He(e.expression, t, r, a);
      } catch {
        T = void 0;
      }
      const N = a !== null ? `${e.dataKey}#${a}` : e.dataKey, l = t[N] || r[N];
      l === T || JSON.stringify(l) === JSON.stringify(T) || (console.log(`Computed variable ${N} =`, T), u(e.dataKey, T, a));
    }
  }, [e.type, e.expression, JSON.stringify(t), JSON.stringify(r), a]), !Gs(e, t, r, a))
    return null;
  const R = a !== null ? `${e.dataKey}#${a}` : e.dataKey, I = t[R] || r[R], O = n[R], S = (T) => {
    h || (O && p(R), e.type === 4 ? u(e.dataKey, T, a) : s(e.dataKey, T, a));
  }, k = Ys(e.label, t, r, a), $ = {
    question: {
      ...e,
      label: k
    },
    value: I,
    onChange: S,
    error: O,
    responses: t,
    variables: r,
    rowIndex: a,
    validation: o,
    readOnly: x,
    disabled: h,
    locale: b,
    translations: f,
    fetchMedia: c
  }, A = g[e.dataKey] || g[e.type] || g[String(e.type)] || (e.questionType ? g[e.questionType] : void 0) || (mr[e.type] ? g[mr[e.type]] : void 0);
  if (A) {
    if (Be.isValidElement(A))
      return Be.cloneElement(A, $);
    if (typeof A == "function") {
      const T = A;
      return /* @__PURE__ */ i.jsx(T, { ...$ });
    }
  }
  const w = () => {
    switch (e.type) {
      case 1:
        return /* @__PURE__ */ i.jsx(Hs, { ...$ });
      case 2:
        return /* @__PURE__ */ i.jsx(Qs, { ...$ });
      case 3:
        return /* @__PURE__ */ i.jsx(Js, { ...$ });
      case 4:
        return /* @__PURE__ */ i.jsx(Xs, { ...$ });
      case 11:
      // Date
      case 12:
      // Date Time Local
      case 14:
      // Month
      case 15:
        return /* @__PURE__ */ i.jsx(nl, { ...$ });
      case 13:
        return /* @__PURE__ */ i.jsx(ol, { ...$ });
      case 16:
        return /* @__PURE__ */ i.jsx(kn, { ...$, single: !0 });
      case 17:
        return /* @__PURE__ */ i.jsx(al, { ...$ });
      case 18:
        return /* @__PURE__ */ i.jsx(il, { ...$ });
      case 19:
        return /* @__PURE__ */ i.jsx(pr, { ...$, inputType: "url" });
      case 20:
        return /* @__PURE__ */ i.jsx(cl, { ...$ });
      case 21:
        return /* @__PURE__ */ i.jsx($n, { ...$ });
      case 22:
        return /* @__PURE__ */ i.jsx($n, { ...$, selectMode: !0 });
      case 23:
        return /* @__PURE__ */ i.jsx(sl, { ...$ });
      case 24:
        return /* @__PURE__ */ i.jsx(pr, { ...$, masked: !0 });
      case 25:
        return /* @__PURE__ */ i.jsx(pr, { ...$ });
      case 26:
        return /* @__PURE__ */ i.jsx(Zs, { ...$ });
      case 27:
        return /* @__PURE__ */ i.jsx(el, { ...$ });
      case 28:
        return /* @__PURE__ */ i.jsx(tl, { ...$ });
      case 29:
        return /* @__PURE__ */ i.jsx(kn, { ...$ });
      case 30:
        return /* @__PURE__ */ i.jsx(rl, { ...$ });
      case 31:
        return /* @__PURE__ */ i.jsx(ll, { ...$ });
      case 32:
        return /* @__PURE__ */ i.jsx(pl, { ...$ });
      case 33:
        return /* @__PURE__ */ i.jsx(ul, { ...$ });
      case 35:
        return /* @__PURE__ */ i.jsx(ml, { ...$ });
      default:
        return /* @__PURE__ */ i.jsxs(J, { sx: { p: 2, bgcolor: "warning.light", borderRadius: 1 }, children: [
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "Unsupported Question Type: ",
            e.type
          ] }),
          /* @__PURE__ */ i.jsx("br", {}),
          mr[e.type] || "Unknown",
          /* @__PURE__ */ i.jsx("br", {}),
          /* @__PURE__ */ i.jsx("em", { children: k })
        ] });
    }
  };
  return /* @__PURE__ */ i.jsx(J, { sx: { width: "100%" }, children: w() });
}
const gt = 280, hl = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function ho({
  template: e,
  className: t,
  style: r,
  header: n,
  footer: o
}) {
  const a = ko(), s = $o(a.breakpoints.down("md")), {
    currentPage: u,
    responses: p,
    variables: m,
    errors: x,
    validation: y,
    setCurrentPage: h,
    template: b
  } = $e(), [f, c] = de(!1), g = e || b, v = xe(() => hl(g), [g]), R = () => {
    c(!f);
  }, I = (A) => {
    h(A), s && c(!1);
  }, O = v[u], S = (A) => {
    if (!A?.components)
      return /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions in this section" });
    const w = A.components[0] || [];
    return w.length === 0 ? /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions available" }) : w.map((T, N) => /* @__PURE__ */ i.jsx(J, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Nr,
      {
        question: T,
        responses: p,
        variables: m,
        errors: x,
        validation: y
      }
    ) }, T.dataKey || N));
  }, k = (A) => {
    const w = v[A];
    if (!w?.components?.[0]) return "incomplete";
    const N = w.components[0].filter((M) => M.required);
    return N.length === 0 || N.filter(
      (M) => p[M.dataKey] !== void 0 && p[M.dataKey] !== ""
    ).length === N.length ? "complete" : "incomplete";
  }, $ = /* @__PURE__ */ i.jsxs(J, { children: [
    /* @__PURE__ */ i.jsxs(qt, { children: [
      /* @__PURE__ */ i.jsx(U, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, fontSize: "14px" }, children: "PDTSEN 2025 KOTA SURABAYA" }),
      s && /* @__PURE__ */ i.jsx(lt, { onClick: R, children: /* @__PURE__ */ i.jsx(Go, {}) })
    ] }),
    /* @__PURE__ */ i.jsx(Sr, { sx: { px: 1 }, children: v.map((A, w) => {
      const T = u === w, N = k(w);
      return /* @__PURE__ */ i.jsx(vr, { disablePadding: !0, sx: { mb: 0.5 }, children: /* @__PURE__ */ i.jsx(
        Po,
        {
          selected: T,
          onClick: () => I(w),
          sx: {
            borderRadius: 1,
            bgcolor: T ? "primary.main" : "transparent",
            color: T ? "white" : "text.primary",
            "&:hover": {
              bgcolor: T ? "primary.dark" : "action.hover"
            },
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark"
              }
            }
          },
          children: /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", alignItems: "center", width: "100%" }, children: [
            N === "complete" ? /* @__PURE__ */ i.jsx(Yo, { sx: { mr: 1, fontSize: 16, color: T ? "white" : "success.main" } }) : /* @__PURE__ */ i.jsx(Ho, { sx: { mr: 1, fontSize: 16 } }),
            /* @__PURE__ */ i.jsx(
              Er,
              {
                primary: A.label || `Section ${w + 1}`,
                primaryTypographyProps: {
                  fontSize: "13px",
                  fontWeight: T ? 600 : 400
                }
              }
            )
          ] })
        }
      ) }, A.dataKey || w);
    }) })
  ] });
  return /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex" }, className: `questionnaire-layout ${t || ""}`, style: r, children: [
    /* @__PURE__ */ i.jsx(
      Io,
      {
        position: "fixed",
        sx: {
          width: { md: `calc(100% - ${gt}px)` },
          ml: { md: `${gt}px` },
          zIndex: (A) => A.zIndex.drawer + 1
        },
        children: /* @__PURE__ */ i.jsxs(qt, { children: [
          /* @__PURE__ */ i.jsx(
            lt,
            {
              color: "inherit",
              edge: "start",
              onClick: R,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ i.jsx(Qo, {})
            }
          ),
          /* @__PURE__ */ i.jsx(U, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, children: g?.title || "Questionnaire" }),
          /* @__PURE__ */ i.jsx(
            Tr,
            {
              icon: /* @__PURE__ */ i.jsx(Jo, {}),
              label: "Submit",
              color: "secondary",
              clickable: !0,
              sx: { color: "white", fontWeight: 600 }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      J,
      {
        component: "nav",
        sx: { width: { md: gt }, flexShrink: { md: 0 } },
        children: /* @__PURE__ */ i.jsx(
          No,
          {
            variant: s ? "temporary" : "permanent",
            open: s ? f : !0,
            onClose: R,
            ModalProps: {
              keepMounted: !0
              // Better open performance on mobile.
            },
            sx: {
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: gt,
                position: s ? "absolute" : "fixed",
                height: "100vh",
                top: 0
              }
            },
            children: $
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsxs(
      J,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          width: { md: `calc(100% - ${gt}px)` }
        },
        children: [
          /* @__PURE__ */ i.jsx(qt, {}),
          /* @__PURE__ */ i.jsxs(Dn, { maxWidth: "lg", sx: { py: 3, pb: 12 }, children: [
            n,
            O ? /* @__PURE__ */ i.jsx(st, { elevation: 1, sx: { p: 3, mb: 3 }, children: S(O) }) : /* @__PURE__ */ i.jsx(st, { elevation: 1, sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ i.jsx(U, { variant: "h6", color: "text.secondary", children: "Select a section from the sidebar to begin" }) }),
            o,
            /* @__PURE__ */ i.jsx(
              st,
              {
                className: "questionnaire-bottom-nav",
                elevation: 3,
                sx: {
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  zIndex: 1e3,
                  borderRadius: 0,
                  borderTop: 1,
                  borderColor: "divider"
                },
                children: /* @__PURE__ */ i.jsxs(
                  J,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      maxWidth: "lg",
                      mx: "auto"
                    },
                    children: [
                      /* @__PURE__ */ i.jsx(
                        Te,
                        {
                          variant: "outlined",
                          onClick: () => I(Math.max(0, u - 1)),
                          disabled: u === 0,
                          sx: { minWidth: 120 },
                          children: "Previous"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", sx: { alignSelf: "center", mx: 2 }, children: O?.label || "No section selected" }),
                      /* @__PURE__ */ i.jsx(
                        Te,
                        {
                          variant: "contained",
                          onClick: () => I(Math.min(v.length - 1, u + 1)),
                          disabled: u >= v.length - 1,
                          sx: { minWidth: 120 },
                          children: "Next"
                        }
                      )
                    ]
                  }
                )
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const yl = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function gl({ template: e, className: t, style: r, footer: n }) {
  const {
    currentPage: o,
    responses: a,
    variables: s,
    errors: u,
    isOnline: p,
    validation: m,
    setCurrentPage: x,
    template: y
  } = $e(), h = e || y, b = xe(() => yl(h), [h]), f = b[o], c = () => {
    o < b.length - 1 && x(o + 1);
  }, g = () => {
    o > 0 && x(o - 1);
  }, v = (R) => {
    if (!R?.components)
      return /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions in this section" });
    const I = R.components[0] || [];
    return I.length === 0 ? /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions available" }) : I.map((O, S) => /* @__PURE__ */ i.jsx(J, { sx: { mb: 3 }, children: /* @__PURE__ */ i.jsx(
      Nr,
      {
        question: O,
        responses: a,
        variables: s,
        errors: u,
        validation: m
      }
    ) }, O.dataKey || S));
  };
  return /* @__PURE__ */ i.jsxs(Dn, { maxWidth: "md", sx: { py: 4 }, className: t, style: r, children: [
    /* @__PURE__ */ i.jsxs(J, { sx: { mb: 3 }, children: [
      /* @__PURE__ */ i.jsxs(U, { variant: "h6", gutterBottom: !0, children: [
        h?.title || "Survey",
        " - Section ",
        o + 1,
        " of ",
        b.length || 1
      ] }),
      /* @__PURE__ */ i.jsx(
        Mo,
        {
          variant: "determinate",
          value: b.length ? (o + 1) / b.length * 100 : 0,
          sx: { height: 8, borderRadius: 4 }
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs(Qe, { severity: p ? "success" : "warning", sx: { mb: 3 }, children: [
      "Status: ",
      p ? "Online" : "Offline"
    ] }),
    f ? /* @__PURE__ */ i.jsxs(st, { elevation: 2, sx: { p: 3, mb: 3 }, children: [
      /* @__PURE__ */ i.jsx(U, { variant: "h5", gutterBottom: !0, children: f.label || f.title }),
      f.description && /* @__PURE__ */ i.jsx(U, { variant: "body1", color: "text.secondary", sx: { mb: 3 }, children: f.description }),
      v(f)
    ] }) : /* @__PURE__ */ i.jsx(Qe, { severity: "info", children: "No sections available" }),
    /* @__PURE__ */ i.jsxs(J, { sx: { display: "flex", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "outlined",
          onClick: g,
          disabled: o === 0,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ i.jsx(
        Te,
        {
          variant: "contained",
          onClick: c,
          disabled: o >= b.length - 1,
          children: "Next"
        }
      )
    ] }),
    n
  ] });
}
function it(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.keys(e).filter((r) => r != null && r !== "").sort().forEach((r) => {
    const n = e[r];
    n !== void 0 && (t[r] = n);
  }), t;
}
function bl(e = {}) {
  const t = {
    version: 1,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    data: it(e)
  };
  return JSON.stringify(t);
}
function xl(e) {
  if (!e)
    return {};
  if (typeof e == "string")
    try {
      const t = JSON.parse(e);
      return t && typeof t == "object" ? "data" in t && "version" in t ? t.data || {} : t : {};
    } catch (t) {
      return console.error("Failed to deserialize responses:", t), {};
    }
  return typeof e == "object" ? "data" in e && "version" in e ? e.data || {} : e : {};
}
const Sl = (e) => e && typeof e.then == "function", xr = (e, t) => {
  if (!e)
    return;
  if (Array.isArray(e)) {
    e.forEach((n) => xr(n, t));
    return;
  }
  const r = e;
  !r || typeof r != "object" || (t(r), r.components && xr(r.components, t));
}, vl = (e) => {
  const t = [], r = /* @__PURE__ */ new Set();
  return xr(e?.components, (n) => {
    n && n.type !== 1 && n.dataKey && !r.has(n.dataKey) && (r.add(n.dataKey), t.push(n));
  }), t;
}, El = (e) => e ? Array.isArray(e) ? e : typeof e == "object" && Array.isArray(e.testFunctions) ? e.testFunctions : [] : [];
async function Tl(e, t, r = {}, n = {}) {
  if (!e || typeof e != "object")
    throw new Error("validateResponse requires a templateJson object");
  const {
    variables: o = {},
    touched: a = {},
    validators: s = {},
    asyncValidation: u = !1,
    locale: p,
    translations: m
  } = n, x = El(t ?? e?.validation), y = vl(e), h = {}, b = { ...a };
  y.forEach((f) => {
    f?.dataKey && (b[f.dataKey] = !0);
  });
  for (const f of y) {
    if (!f?.dataKey)
      continue;
    const c = f.dataKey, g = r[c], v = dt(
      f,
      g,
      r,
      o,
      x,
      b
    );
    v.length && (h[c] = [...h[c] || [], ...v]);
    const R = s[c];
    if (typeof R == "function")
      try {
        const O = R(g, {
          question: f,
          responses: r,
          variables: o,
          locale: p,
          translations: m,
          template: e
        });
        let S = O;
        Sl(O) && (u || console.warn(`Validator for ${c} returned a Promise but asyncValidation is disabled.`), S = await O), S && (h[c] = [...h[c] || [], S]);
      } catch (I) {
        console.error(`Validator for ${c} threw an error:`, I), h[c] = [
          ...h[c] || [],
          I.message || "Validation failed"
        ];
      }
  }
  return Object.keys(h).forEach((f) => {
    (!h[f] || h[f].length === 0) && delete h[f];
  }), {
    valid: Object.keys(h).length === 0,
    errors: h
  };
}
const Cl = (e) => !e || e === "default" ? ho : e === "simple" ? gl : e, wl = () => typeof window > "u" || !window.localStorage ? null : {
  async get(e) {
    return window.localStorage.getItem(e);
  },
  async set(e, t) {
    window.localStorage.setItem(e, t);
  },
  async remove(e) {
    window.localStorage.removeItem(e);
  }
}, Ol = () => fo({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      }
    }
  }
}), yo = Pn((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: a,
    onSubmit: s,
    onValidationError: u,
    componentsMap: p,
    layout: m = "default",
    readOnly: x = !1,
    disabled: y = !1,
    locale: h = "en",
    translations: b = {},
    theme: f = null,
    persistentStore: c = null,
    storageKey: g = "questionnaire-draft",
    autosaveConfig: v = null,
    validators: R = {},
    asyncValidation: I = !1,
    fetchMedia: O = null,
    onError: S = null,
    lookupClient: k = null,
    lookupBaseUrl: $ = null,
    resolveLookupUrl: A = null,
    className: w,
    style: T,
    children: N,
    ...l
  } = e, {
    responses: M,
    variables: _,
    touched: G,
    validation: X,
    setConfig: re,
    setInitialResponses: ee,
    loadQuestionnaire: V,
    setErrors: d,
    resetResponses: E,
    setRuntimeMethods: P,
    setTouched: j
  } = $e(), [L, B] = de({ initial: !1, draft: !1 }), F = ke(null), K = !!v, W = v?.debounceMs ?? 300, H = xe(() => c || (K ? wl() : null), [c, K]), z = ne((Q) => {
    Q && (console.error("[QuestionnaireRenderer] error:", Q), typeof S == "function" && S(Q));
  }, [S]);
  pe(() => {
    if (!r) {
      z(new Error("templateJson is required for QuestionnaireRenderer"));
      return;
    }
    try {
      V(r, n ?? X ?? null);
    } catch (Q) {
      z(Q);
    }
  }, [r, n, X, V, z]);
  const ge = xe(() => ({
    readOnly: x,
    disabled: y,
    locale: h,
    translations: b,
    fetchMedia: O,
    theme: f,
    componentsMap: p || {},
    lookupClient: k,
    lookupBaseUrl: $,
    resolveLookupUrl: A
  }), [x, y, h, b, O, f, p, k, $, A]);
  pe(() => {
    try {
      re(ge);
    } catch (Q) {
      z(Q);
    }
  }, [ge, re, z]), pe(() => {
    const Q = it(o || {}), te = JSON.stringify(Q);
    if (F.current !== te) {
      F.current = te;
      try {
        ee(Q);
      } catch (ue) {
        z(ue);
      }
    }
    B((ue) => ({ ...ue, initial: !0 }));
  }, [o, ee, z]), pe(() => {
    let Q = !1;
    return !K || !H ? (B((ue) => ({ ...ue, draft: !0 })), () => {
      Q = !0;
    }) : ((async () => {
      try {
        const ue = await Promise.resolve(H.get?.(g));
        if (!Q && ue) {
          const ve = xl(ue), et = {
            ...it(o || {}),
            ...it(ve)
          };
          ee(et), F.current = JSON.stringify(et);
        }
      } catch (ue) {
        Q || z(ue);
      } finally {
        Q || B((ue) => ({ ...ue, draft: !0 }));
      }
    })(), () => {
      Q = !0;
    });
  }, [K, H, g, o, ee, z]);
  const D = L.initial && L.draft, me = xe(() => it(M), [M]);
  pe(() => {
    if (!D || typeof a != "function")
      return;
    const Q = setTimeout(() => {
      try {
        a(me);
      } catch (te) {
        z(te);
      }
    }, W);
    return () => clearTimeout(Q);
  }, [me, a, W, z, D]), pe(() => {
    if (!D || !K || !H)
      return;
    const Q = setTimeout(() => {
      const te = me, ve = Object.keys(te).length > 0 ? H.set?.(g, bl(te)) : H.remove?.(g);
      Promise.resolve(ve).catch(z);
    }, W);
    return () => clearTimeout(Q);
  }, [me, K, H, g, W, z, D]);
  const Ae = ne(async () => Tl(r, n ?? X ?? null, me, {
    variables: _,
    touched: G,
    validators: R,
    asyncValidation: I,
    locale: h,
    translations: b
  }), [r, n, X, me, _, G, R, I, h, b]), je = ne(() => it(M), [M]), Ze = ne(() => !K || !H ? Promise.resolve() : Promise.resolve(H.remove?.(g)).catch(z), [K, H, g, z]), Le = ne(async () => {
    try {
      const Q = await Ae();
      return d(Q.errors), Q.valid ? (typeof s == "function" && await Promise.resolve(s(me)), v?.clearOnSubmit && await Ze(), { ok: !0, responses: me }) : (Object.keys(Q.errors).forEach((te) => j(te)), typeof u == "function" && u(Q.errors), { ok: !1, errors: Q.errors });
    } catch (Q) {
      throw z(Q), Q;
    }
  }, [Ae, d, j, u, s, me, v, Ze, z]), Pe = ne(async () => {
    try {
      E(), d({}), await Ze();
    } catch (Q) {
      z(Q);
    }
  }, [E, d, Ze, z]);
  vo(t, () => ({
    submit: Le,
    reset: Pe,
    getResponses: je
  }), [Le, Pe, je]);
  const Se = ke(Le), ze = ke(Pe), Ge = ke(je);
  pe(() => {
    Se.current = Le;
  }, [Le]), pe(() => {
    ze.current = Pe;
  }, [Pe]), pe(() => {
    Ge.current = je;
  }, [je]);
  const De = xe(() => ({
    submit: (...Q) => Se.current(...Q),
    reset: (...Q) => ze.current(...Q),
    getResponses: (...Q) => Ge.current(...Q)
  }), []);
  pe(() => (P(De), () => {
    P(null);
  }), [P, De]);
  const qe = xe(() => Cl(m), [m]);
  let Ie = null;
  Be.isValidElement(qe) ? Ie = Be.cloneElement(qe, { className: w, style: T, ...l }, N) : typeof qe == "function" ? Ie = /* @__PURE__ */ i.jsx(qe, { className: w, style: T, ...l, children: N }) : Ie = /* @__PURE__ */ i.jsx(ho, { className: w, style: T, ...l, children: N });
  const At = f || Ol();
  if (f && Be.isValidElement(f))
    return Be.cloneElement(f, void 0, /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(er, {}),
      Ie
    ] }));
  if (f && typeof f == "function") {
    const Q = f;
    return /* @__PURE__ */ i.jsxs(Q, { children: [
      /* @__PURE__ */ i.jsx(er, {}),
      Ie
    ] });
  }
  return /* @__PURE__ */ i.jsxs(Ps, { theme: At, children: [
    /* @__PURE__ */ i.jsx(er, {}),
    /* @__PURE__ */ i.jsx("div", { className: "questionnaire-renderer", children: Ie })
  ] });
});
yo.displayName = "QuestionnaireRendererInner";
const jl = Pn((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: a,
    onSubmit: s,
    onValidationError: u,
    componentsMap: p,
    layout: m,
    readOnly: x,
    disabled: y,
    locale: h,
    translations: b,
    theme: f,
    persistentStore: c,
    storageKey: g,
    enableAutosave: v,
    validators: R,
    asyncValidation: I,
    fetchMedia: O,
    onError: S,
    lookupClient: k,
    lookupBaseUrl: $,
    resolveLookupUrl: A,
    className: w,
    style: T,
    children: N,
    ...l
  } = e, M = xe(() => v ? typeof v == "object" ? v : {} : null, [v]);
  return /* @__PURE__ */ i.jsx(zs, { children: /* @__PURE__ */ i.jsx(
    yo,
    {
      ref: t,
      templateJson: r,
      validationJson: n,
      initialData: o,
      onChange: a,
      onSubmit: s,
      onValidationError: u,
      componentsMap: p,
      layout: m,
      readOnly: x,
      disabled: y,
      locale: h,
      translations: b,
      theme: f,
      persistentStore: c,
      storageKey: g,
      autosaveConfig: M,
      validators: R,
      asyncValidation: I,
      fetchMedia: O,
      onError: S,
      lookupClient: k,
      lookupBaseUrl: $,
      resolveLookupUrl: A,
      className: w,
      style: T,
      ...l,
      children: N
    }
  ) });
});
jl.displayName = "QuestionnaireRenderer";
const Il = Object.freeze({
  QuestionnaireRendererProps: "QuestionnaireRendererProps",
  QuestionnaireRuntimeHandle: "QuestionnaireRuntimeHandle",
  QuestionnaireValidationErrors: "QuestionnaireValidationErrors"
});
export {
  ho as QuestionnaireLayout,
  jl as QuestionnaireRenderer,
  vl as collectQuestions,
  jl as default,
  xl as deserializeResponses,
  it as normalizeResponses,
  bl as serializeResponses,
  Il as types,
  $e as useQuestionnaire,
  Tl as validateResponse
};
//# sourceMappingURL=index.es.js.map
