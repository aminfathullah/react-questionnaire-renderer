import * as M from "react";
import ot, { createContext as tl, useReducer as rl, useRef as Xe, useEffect as Pe, useCallback as ye, useContext as nl, useMemo as Ke, useState as ke, isValidElement as yn, cloneElement as bn, Children as ol, createElement as il, forwardRef as Ga, useImperativeHandle as al } from "react";
import sl from "localforage";
import { Box as re, Alert as Tr, Typography as q, List as Wo, ListItem as Ko, ListItemText as Ho, Button as Qe, Paper as rr, Stack as Oi, Divider as Ri, TextField as ut, FormControl as Ln, ListItemSecondaryAction as ll, IconButton as Sr, FormHelperText as Hr, FormLabel as Ya, RadioGroup as cl, FormControlLabel as Qa, Radio as ul, CircularProgress as Cn, FormGroup as dl, Checkbox as pl, InputLabel as fl, Select as ml, MenuItem as hl, Chip as Dn, OutlinedInput as gl, Card as yl, CardMedia as bl, CardContent as vl, useTheme as xl, useMediaQuery as Sl, Toolbar as co, ListItemButton as El, AppBar as Tl, Drawer as Cl, Container as vn, Dialog as wl, DialogTitle as Ol, DialogContent as Rl, Table as Pl, TableHead as kl, TableRow as Pi, TableCell as pr, TableBody as $l, DialogActions as jl, LinearProgress as Il } from "@mui/material";
import { Visibility as Al, ArrowBack as Nl, ArrowBackIosNew as Ml, ArrowForwardIos as _l, Error as Ll, Add as Dl, Delete as Xa, MyLocation as Vl, PhotoCamera as ki, CameraAlt as $i, CloudUpload as Bl, ChevronLeft as Fl, CheckCircle as Ul, RadioButtonUnchecked as zl, Menu as Wl, Send as ji } from "@mui/icons-material";
import Kl from "@emotion/styled";
import { Global as Hl, ThemeContext as Ja, keyframes as Zr, css as Za } from "@emotion/react";
import * as Gl from "react-dom";
function Yl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cn = { exports: {} }, Nr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ii;
function Ql() {
  if (Ii) return Nr;
  Ii = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var l in o)
        l !== "key" && (i[l] = o[l]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Nr.Fragment = t, Nr.jsx = r, Nr.jsxs = r, Nr;
}
var Mr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Xl() {
  return Ai || (Ai = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === k ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case p:
          return "Fragment";
        case C:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case w:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case g:
            return "Portal";
          case j:
            return (h.displayName || "Context") + ".Provider";
          case O:
            return (h._context.displayName || "Context") + ".Consumer";
          case E:
            var T = h.render;
            return h = h.displayName, h || (h = T.displayName || T.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case L:
            return T = h.displayName || null, T !== null ? T : e(h.type) || "Memo";
          case _:
            T = h._payload, h = h._init;
            try {
              return e(h(T));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function r(h) {
      try {
        t(h);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var $ = T.error, R = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return $.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(h);
      }
    }
    function n(h) {
      if (h === p) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === _)
        return "<...>";
      try {
        var T = e(h);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var h = P.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (d.call(h, "key")) {
        var T = Object.getOwnPropertyDescriptor(h, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function l(h, T) {
      function $() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: $,
        configurable: !0
      });
    }
    function u() {
      var h = e(this.type);
      return z[h] || (z[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function f(h, T, $, R, V, W, D, H) {
      return $ = W.ref, h = {
        $$typeof: v,
        type: h,
        key: T,
        props: W,
        _owner: V
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function m(h, T, $, R, V, W, D, H) {
      var X = T.children;
      if (X !== void 0)
        if (R)
          if (I(X)) {
            for (R = 0; R < X.length; R++)
              y(X[R]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(X);
      if (d.call(T, "key")) {
        X = e(h);
        var Y = Object.keys(T).filter(function(me) {
          return me !== "key";
        });
        R = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", G[X + R] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          X,
          Y,
          X
        ), G[X + R] = !0);
      }
      if (X = null, $ !== void 0 && (r($), X = "" + $), a(T) && (r(T.key), X = "" + T.key), "key" in T) {
        $ = {};
        for (var J in T)
          J !== "key" && ($[J] = T[J]);
      } else $ = T;
      return X && l(
        $,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), f(
        h,
        X,
        W,
        V,
        o(),
        $,
        D,
        H
      );
    }
    function y(h) {
      typeof h == "object" && h !== null && h.$$typeof === v && h._store && (h._store.validated = 1);
    }
    var b = ot, v = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), j = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), P = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, d = Object.prototype.hasOwnProperty, I = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var K, z = {}, Z = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), te = A(n(i)), G = {};
    Mr.Fragment = p, Mr.jsx = function(h, T, $, R, V) {
      var W = 1e4 > P.recentlyCreatedOwnerStacks++;
      return m(
        h,
        T,
        $,
        !1,
        R,
        V,
        W ? Error("react-stack-top-frame") : Z,
        W ? A(n(h)) : te
      );
    }, Mr.jsxs = function(h, T, $, R, V) {
      var W = 1e4 > P.recentlyCreatedOwnerStacks++;
      return m(
        h,
        T,
        $,
        !0,
        R,
        V,
        W ? Error("react-stack-top-frame") : Z,
        W ? A(n(h)) : te
      );
    };
  })()), Mr;
}
var Ni;
function Jl() {
  return Ni || (Ni = 1, process.env.NODE_ENV === "production" ? cn.exports = Ql() : cn.exports = Xl()), cn.exports;
}
var c = Jl();
function Kt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const zt = "$$material";
function Zl(e) {
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
var ql = {
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
function ec(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var tc = /[A-Z]|^ms/g, rc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qa = function(t) {
  return t.charCodeAt(1) === 45;
}, Mi = function(t) {
  return t != null && typeof t != "boolean";
}, uo = /* @__PURE__ */ ec(function(e) {
  return qa(e) ? e : e.replace(tc, "-$&").toLowerCase();
}), _i = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(rc, function(n, o, i) {
          return Bt = {
            name: o,
            styles: i,
            next: Bt
          }, o;
        });
  }
  return ql[t] !== 1 && !qa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function wn(e, t, r) {
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
        return Bt = {
          name: o.name,
          styles: o.styles,
          next: Bt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Bt = {
              name: a.name,
              styles: a.styles,
              next: Bt
            }, a = a.next;
        var l = i.styles + ";";
        return l;
      }
      return nc(e, t, r);
    }
  }
  var u = r;
  return u;
}
function nc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += wn(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var l = a;
        Mi(l) && (n += uo(i) + ":" + _i(i, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var u = 0; u < a.length; u++)
          Mi(a[u]) && (n += uo(i) + ":" + _i(i, a[u]) + ";");
      else {
        var f = wn(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += uo(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Li = /label:\s*([^\s;{]+)\s*(;|$)/g, Bt;
function oc(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += wn(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += wn(r, t, e[l]), n) {
      var u = i;
      o += u[l];
    }
  Li.lastIndex = 0;
  for (var f = "", m; (m = Li.exec(o)) !== null; )
    f += "-" + m[1];
  var y = Zl(o) + f;
  return {
    name: y,
    styles: o,
    next: Bt
  };
}
var un = { exports: {} }, dn = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function ic() {
  if (Di) return ve;
  Di = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function j(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case t:
          switch (S = S.type, S) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case y:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case m:
                case g:
                case v:
                case a:
                  return S;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function E(S) {
    return j(S) === f;
  }
  return ve.AsyncMode = u, ve.ConcurrentMode = f, ve.ContextConsumer = l, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = m, ve.Fragment = n, ve.Lazy = g, ve.Memo = v, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = y, ve.isAsyncMode = function(S) {
    return E(S) || j(S) === u;
  }, ve.isConcurrentMode = E, ve.isContextConsumer = function(S) {
    return j(S) === l;
  }, ve.isContextProvider = function(S) {
    return j(S) === a;
  }, ve.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ve.isForwardRef = function(S) {
    return j(S) === m;
  }, ve.isFragment = function(S) {
    return j(S) === n;
  }, ve.isLazy = function(S) {
    return j(S) === g;
  }, ve.isMemo = function(S) {
    return j(S) === v;
  }, ve.isPortal = function(S) {
    return j(S) === r;
  }, ve.isProfiler = function(S) {
    return j(S) === i;
  }, ve.isStrictMode = function(S) {
    return j(S) === o;
  }, ve.isSuspense = function(S) {
    return j(S) === y;
  }, ve.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === i || S === o || S === y || S === b || typeof S == "object" && S !== null && (S.$$typeof === g || S.$$typeof === v || S.$$typeof === a || S.$$typeof === l || S.$$typeof === m || S.$$typeof === x || S.$$typeof === C || S.$$typeof === O || S.$$typeof === p);
  }, ve.typeOf = j, ve;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function ac() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function j(Q) {
      return typeof Q == "string" || typeof Q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Q === n || Q === f || Q === i || Q === o || Q === y || Q === b || typeof Q == "object" && Q !== null && (Q.$$typeof === g || Q.$$typeof === v || Q.$$typeof === a || Q.$$typeof === l || Q.$$typeof === m || Q.$$typeof === x || Q.$$typeof === C || Q.$$typeof === O || Q.$$typeof === p);
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var le = Q.$$typeof;
        switch (le) {
          case t:
            var Me = Q.type;
            switch (Me) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case y:
                return Me;
              default:
                var Ue = Me && Me.$$typeof;
                switch (Ue) {
                  case l:
                  case m:
                  case g:
                  case v:
                  case a:
                    return Ue;
                  default:
                    return le;
                }
            }
          case r:
            return le;
        }
      }
    }
    var S = u, w = f, L = l, _ = a, N = t, k = m, P = n, d = g, I = v, A = r, K = i, z = o, Z = y, te = !1;
    function G(Q) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(Q) || E(Q) === u;
    }
    function h(Q) {
      return E(Q) === f;
    }
    function T(Q) {
      return E(Q) === l;
    }
    function $(Q) {
      return E(Q) === a;
    }
    function R(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === t;
    }
    function V(Q) {
      return E(Q) === m;
    }
    function W(Q) {
      return E(Q) === n;
    }
    function D(Q) {
      return E(Q) === g;
    }
    function H(Q) {
      return E(Q) === v;
    }
    function X(Q) {
      return E(Q) === r;
    }
    function Y(Q) {
      return E(Q) === i;
    }
    function J(Q) {
      return E(Q) === o;
    }
    function me(Q) {
      return E(Q) === y;
    }
    xe.AsyncMode = S, xe.ConcurrentMode = w, xe.ContextConsumer = L, xe.ContextProvider = _, xe.Element = N, xe.ForwardRef = k, xe.Fragment = P, xe.Lazy = d, xe.Memo = I, xe.Portal = A, xe.Profiler = K, xe.StrictMode = z, xe.Suspense = Z, xe.isAsyncMode = G, xe.isConcurrentMode = h, xe.isContextConsumer = T, xe.isContextProvider = $, xe.isElement = R, xe.isForwardRef = V, xe.isFragment = W, xe.isLazy = D, xe.isMemo = H, xe.isPortal = X, xe.isProfiler = Y, xe.isStrictMode = J, xe.isSuspense = me, xe.isValidElementType = j, xe.typeOf = E;
  })()), xe;
}
var Bi;
function es() {
  return Bi || (Bi = 1, process.env.NODE_ENV === "production" ? dn.exports = ic() : dn.exports = ac()), dn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var po, Fi;
function sc() {
  if (Fi) return po;
  Fi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return po = o() ? Object.assign : function(i, a) {
    for (var l, u = n(i), f, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var y in l)
        t.call(l, y) && (u[y] = l[y]);
      if (e) {
        f = e(l);
        for (var b = 0; b < f.length; b++)
          r.call(l, f[b]) && (u[f[b]] = l[f[b]]);
      }
    }
    return u;
  }, po;
}
var fo, Ui;
function Go() {
  if (Ui) return fo;
  Ui = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fo = e, fo;
}
var mo, zi;
function ts() {
  return zi || (zi = 1, mo = Function.call.bind(Object.prototype.hasOwnProperty)), mo;
}
var ho, Wi;
function lc() {
  if (Wi) return ho;
  Wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Go(), r = {}, n = /* @__PURE__ */ ts();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, l, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var y;
          try {
            if (typeof i[m] != "function") {
              var b = Error(
                (u || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = i[m](a, m, u, l, null, t);
          } catch (g) {
            y = g;
          }
          if (y && !(y instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in r)) {
            r[y.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + l + " type: " + y.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ho = o, ho;
}
var go, Ki;
function cc() {
  if (Ki) return go;
  Ki = 1;
  var e = es(), t = sc(), r = /* @__PURE__ */ Go(), n = /* @__PURE__ */ ts(), o = /* @__PURE__ */ lc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return go = function(l, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function y(h) {
      var T = h && (f && h[f] || h[m]);
      if (typeof T == "function")
        return T;
    }
    var b = "<<anonymous>>", v = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: O(),
      arrayOf: j,
      element: E(),
      elementType: S(),
      instanceOf: w,
      node: k(),
      objectOf: _,
      oneOf: L,
      oneOfType: N,
      shape: d,
      exact: I
    };
    function g(h, T) {
      return h === T ? h !== 0 || 1 / h === 1 / T : h !== h && T !== T;
    }
    function p(h, T) {
      this.message = h, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(h) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, $ = 0;
      function R(W, D, H, X, Y, J, me) {
        if (X = X || b, J = J || H, me !== r) {
          if (u) {
            var Q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Q.name = "Invariant Violation", Q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = X + ":" + H;
            !T[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[le] = !0, $++);
          }
        }
        return D[H] == null ? W ? D[H] === null ? new p("The " + Y + " `" + J + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new p("The " + Y + " `" + J + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : h(D, H, X, Y, J);
      }
      var V = R.bind(null, !1);
      return V.isRequired = R.bind(null, !0), V;
    }
    function C(h) {
      function T($, R, V, W, D, H) {
        var X = $[R], Y = z(X);
        if (Y !== h) {
          var J = Z(X);
          return new p(
            "Invalid " + W + " `" + D + "` of type " + ("`" + J + "` supplied to `" + V + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return x(T);
    }
    function O() {
      return x(a);
    }
    function j(h) {
      function T($, R, V, W, D) {
        if (typeof h != "function")
          return new p("Property `" + D + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var H = $[R];
        if (!Array.isArray(H)) {
          var X = z(H);
          return new p("Invalid " + W + " `" + D + "` of type " + ("`" + X + "` supplied to `" + V + "`, expected an array."));
        }
        for (var Y = 0; Y < H.length; Y++) {
          var J = h(H, Y, V, W, D + "[" + Y + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return x(T);
    }
    function E() {
      function h(T, $, R, V, W) {
        var D = T[$];
        if (!l(D)) {
          var H = z(D);
          return new p("Invalid " + V + " `" + W + "` of type " + ("`" + H + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(h);
    }
    function S() {
      function h(T, $, R, V, W) {
        var D = T[$];
        if (!e.isValidElementType(D)) {
          var H = z(D);
          return new p("Invalid " + V + " `" + W + "` of type " + ("`" + H + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(h);
    }
    function w(h) {
      function T($, R, V, W, D) {
        if (!($[R] instanceof h)) {
          var H = h.name || b, X = G($[R]);
          return new p("Invalid " + W + " `" + D + "` of type " + ("`" + X + "` supplied to `" + V + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return x(T);
    }
    function L(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function T($, R, V, W, D) {
        for (var H = $[R], X = 0; X < h.length; X++)
          if (g(H, h[X]))
            return null;
        var Y = JSON.stringify(h, function(me, Q) {
          var le = Z(Q);
          return le === "symbol" ? String(Q) : Q;
        });
        return new p("Invalid " + W + " `" + D + "` of value `" + String(H) + "` " + ("supplied to `" + V + "`, expected one of " + Y + "."));
      }
      return x(T);
    }
    function _(h) {
      function T($, R, V, W, D) {
        if (typeof h != "function")
          return new p("Property `" + D + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var H = $[R], X = z(H);
        if (X !== "object")
          return new p("Invalid " + W + " `" + D + "` of type " + ("`" + X + "` supplied to `" + V + "`, expected an object."));
        for (var Y in H)
          if (n(H, Y)) {
            var J = h(H, Y, V, W, D + "." + Y, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return x(T);
    }
    function N(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var T = 0; T < h.length; T++) {
        var $ = h[T];
        if (typeof $ != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te($) + " at index " + T + "."
          ), a;
      }
      function R(V, W, D, H, X) {
        for (var Y = [], J = 0; J < h.length; J++) {
          var me = h[J], Q = me(V, W, D, H, X, r);
          if (Q == null)
            return null;
          Q.data && n(Q.data, "expectedType") && Y.push(Q.data.expectedType);
        }
        var le = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new p("Invalid " + H + " `" + X + "` supplied to " + ("`" + D + "`" + le + "."));
      }
      return x(R);
    }
    function k() {
      function h(T, $, R, V, W) {
        return A(T[$]) ? null : new p("Invalid " + V + " `" + W + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return x(h);
    }
    function P(h, T, $, R, V) {
      return new p(
        (h || "React class") + ": " + T + " type `" + $ + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function d(h) {
      function T($, R, V, W, D) {
        var H = $[R], X = z(H);
        if (X !== "object")
          return new p("Invalid " + W + " `" + D + "` of type `" + X + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var Y in h) {
          var J = h[Y];
          if (typeof J != "function")
            return P(V, W, D, Y, Z(J));
          var me = J(H, Y, V, W, D + "." + Y, r);
          if (me)
            return me;
        }
        return null;
      }
      return x(T);
    }
    function I(h) {
      function T($, R, V, W, D) {
        var H = $[R], X = z(H);
        if (X !== "object")
          return new p("Invalid " + W + " `" + D + "` of type `" + X + "` " + ("supplied to `" + V + "`, expected `object`."));
        var Y = t({}, $[R], h);
        for (var J in Y) {
          var me = h[J];
          if (n(h, J) && typeof me != "function")
            return P(V, W, D, J, Z(me));
          if (!me)
            return new p(
              "Invalid " + W + " `" + D + "` key `" + J + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify($[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var Q = me(H, J, V, W, D + "." + J, r);
          if (Q)
            return Q;
        }
        return null;
      }
      return x(T);
    }
    function A(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(A);
          if (h === null || l(h))
            return !0;
          var T = y(h);
          if (T) {
            var $ = T.call(h), R;
            if (T !== h.entries) {
              for (; !(R = $.next()).done; )
                if (!A(R.value))
                  return !1;
            } else
              for (; !(R = $.next()).done; ) {
                var V = R.value;
                if (V && !A(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(h, T) {
      return h === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function z(h) {
      var T = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : K(T, h) ? "symbol" : T;
    }
    function Z(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var T = z(h);
      if (T === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function te(h) {
      var T = Z(h);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function G(h) {
      return !h.constructor || !h.constructor.name ? b : h.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, go;
}
var yo, Hi;
function uc() {
  if (Hi) return yo;
  Hi = 1;
  var e = /* @__PURE__ */ Go();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, yo = function() {
    function n(a, l, u, f, m, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
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
    return i.PropTypes = i, i;
  }, yo;
}
var Gi;
function dc() {
  if (Gi) return un.exports;
  if (Gi = 1, process.env.NODE_ENV !== "production") {
    var e = es(), t = !0;
    un.exports = /* @__PURE__ */ cc()(e.isElement, t);
  } else
    un.exports = /* @__PURE__ */ uc()();
  return un.exports;
}
var pc = /* @__PURE__ */ dc();
const s = /* @__PURE__ */ Yl(pc);
function fc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Yo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(fc(o) ? r : o) : t;
  return /* @__PURE__ */ c.jsx(Hl, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  defaultTheme: s.object,
  styles: s.oneOfType([s.array, s.string, s.object, s.func])
});
/**
 * @mui/styled-engine v7.3.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function mc(e, t) {
  const r = Kl(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function hc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Yi = [];
function Wt(e) {
  return Yi[0] = e, oc(Yi);
}
var pn = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function gc() {
  if (Qi) return Ce;
  Qi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function g(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case b:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case y:
                case m:
                  return p;
                case i:
                  return p;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return Ce.ContextConsumer = i, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = r, Ce.Lazy = y, Ce.Memo = m, Ce.Portal = t, Ce.Profiler = o, Ce.StrictMode = n, Ce.Suspense = u, Ce.SuspenseList = f, Ce.isContextConsumer = function(p) {
    return g(p) === i;
  }, Ce.isContextProvider = function(p) {
    return g(p) === a;
  }, Ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ce.isForwardRef = function(p) {
    return g(p) === l;
  }, Ce.isFragment = function(p) {
    return g(p) === r;
  }, Ce.isLazy = function(p) {
    return g(p) === y;
  }, Ce.isMemo = function(p) {
    return g(p) === m;
  }, Ce.isPortal = function(p) {
    return g(p) === t;
  }, Ce.isProfiler = function(p) {
    return g(p) === o;
  }, Ce.isStrictMode = function(p) {
    return g(p) === n;
  }, Ce.isSuspense = function(p) {
    return g(p) === u;
  }, Ce.isSuspenseList = function(p) {
    return g(p) === f;
  }, Ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === u || p === f || typeof p == "object" && p !== null && (p.$$typeof === y || p.$$typeof === m || p.$$typeof === a || p.$$typeof === i || p.$$typeof === l || p.$$typeof === v || p.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function yc() {
  return Xi || (Xi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p) {
      if (typeof p == "object" && p !== null) {
        var x = p.$$typeof;
        switch (x) {
          case t:
            switch (p = p.type, p) {
              case n:
              case i:
              case o:
              case f:
              case m:
              case v:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case l:
                  case u:
                  case b:
                  case y:
                    return p;
                  case a:
                    return p;
                  default:
                    return x;
                }
            }
          case r:
            return x;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    we.ContextConsumer = a, we.ContextProvider = l, we.Element = t, we.ForwardRef = u, we.Fragment = n, we.Lazy = b, we.Memo = y, we.Portal = r, we.Profiler = i, we.StrictMode = o, we.Suspense = f, we.SuspenseList = m, we.isContextConsumer = function(p) {
      return e(p) === a;
    }, we.isContextProvider = function(p) {
      return e(p) === l;
    }, we.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, we.isForwardRef = function(p) {
      return e(p) === u;
    }, we.isFragment = function(p) {
      return e(p) === n;
    }, we.isLazy = function(p) {
      return e(p) === b;
    }, we.isMemo = function(p) {
      return e(p) === y;
    }, we.isPortal = function(p) {
      return e(p) === r;
    }, we.isProfiler = function(p) {
      return e(p) === i;
    }, we.isStrictMode = function(p) {
      return e(p) === o;
    }, we.isSuspense = function(p) {
      return e(p) === f;
    }, we.isSuspenseList = function(p) {
      return e(p) === m;
    }, we.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === n || p === i || p === o || p === f || p === m || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === y || p.$$typeof === l || p.$$typeof === a || p.$$typeof === u || p.$$typeof === g || p.getModuleId !== void 0);
    }, we.typeOf = e;
  })()), we;
}
var Ji;
function bc() {
  return Ji || (Ji = 1, process.env.NODE_ENV === "production" ? pn.exports = /* @__PURE__ */ gc() : pn.exports = /* @__PURE__ */ yc()), pn.exports;
}
var On = /* @__PURE__ */ bc();
function $t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function rs(e) {
  if (/* @__PURE__ */ M.isValidElement(e) || On.isValidElementType(e) || !$t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = rs(e[r]);
  }), t;
}
function it(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return $t(e) && $t(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ M.isValidElement(t[o]) || On.isValidElementType(t[o]) ? n[o] = t[o] : $t(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && $t(e[o]) ? n[o] = it(e[o], t[o], r) : r.clone ? n[o] = $t(t[o]) ? rs(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const vc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function xc(e) {
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
  } = e, i = vc(t), a = Object.keys(i);
  function l(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function u(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function f(b, v) {
    const g = a.indexOf(v);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : v) - n / 100}${r})`;
  }
  function m(b) {
    return a.indexOf(b) + 1 < a.length ? f(b, a[a.indexOf(b) + 1]) : l(b);
  }
  function y(b) {
    const v = a.indexOf(b);
    return v === 0 ? l(a[1]) : v === a.length - 1 ? u(a[v]) : f(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: l,
    down: u,
    between: f,
    only: m,
    not: y,
    unit: r,
    ...o
  };
}
function Zi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    const i = /min-width:\s*([0-9.]+)/;
    return +(n.match(i)?.[1] || 0) - +(o.match(i)?.[1] || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Sc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ec(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Kt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Tc(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...l) => t(e.breakpoints.up(...l), a), i.down = (...l) => t(e.breakpoints.down(...l), a), i.between = (...l) => t(e.breakpoints.between(...l), a), i.only = (...l) => t(e.breakpoints.only(...l), a), i.not = (...l) => {
      const u = t(e.breakpoints.not(...l), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Cc = {
  borderRadius: 4
}, Yt = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {};
function Ur(e, t) {
  return t ? it(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Vn = {
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
}, qi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vn[e]}px)`
}, wc = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Vn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function jt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || qi;
    return t.reduce((a, l, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || qi;
    return Object.keys(t).reduce((a, l) => {
      if (Sc(i.keys, l)) {
        const u = Ec(n.containerQueries ? n : wc, l);
        u && (a[u] = r(t[l], l));
      } else if (Object.keys(i.values || Vn).includes(l)) {
        const u = i.up(l);
        a[u] = r(t[l], l);
      } else {
        const u = l;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Oc(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function ea(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function se(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Kt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Rn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Bn(e, r) || n, t && (o = t(o, n, e)), o;
}
function Fe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], u = a.theme, f = Bn(u, n) || {};
    return jt(a, l, (y) => {
      let b = Rn(f, o, y);
      return y === b && typeof y == "string" && (b = Rn(f, o, `${t}${y === "default" ? "" : se(y)}`, y)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Yt
  } : {}, i.filterProps = [t], i;
}
function Rc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Pc = {
  m: "margin",
  p: "padding"
}, kc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ta = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $c = Rc((e) => {
  if (e.length > 2)
    if (ta[e])
      e = ta[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Pc[t], o = kc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Fn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Un = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], jc = [...Fn, ...Un];
function qr(e, t, r, n) {
  const o = Bn(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[a];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Qo(e) {
  return qr(e, "spacing", 8, "spacing");
}
function en(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ic(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = en(t, r), n), {});
}
function Ac(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = $c(r), i = Ic(o, n), a = e[r];
  return jt(e, a, i);
}
function ns(e, t) {
  const r = Qo(e.theme);
  return Object.keys(e).map((n) => Ac(e, t, n, r)).reduce(Ur, {});
}
function Le(e) {
  return ns(e, Fn);
}
Le.propTypes = process.env.NODE_ENV !== "production" ? Fn.reduce((e, t) => (e[t] = Yt, e), {}) : {};
Le.filterProps = Fn;
function De(e) {
  return ns(e, Un);
}
De.propTypes = process.env.NODE_ENV !== "production" ? Un.reduce((e, t) => (e[t] = Yt, e), {}) : {};
De.filterProps = Un;
process.env.NODE_ENV !== "production" && jc.reduce((e, t) => (e[t] = Yt, e), {});
function os(e = 8, t = Qo({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function zn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ur(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function lt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ft(e, t) {
  return Fe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Nc = ft("border", lt), Mc = ft("borderTop", lt), _c = ft("borderRight", lt), Lc = ft("borderBottom", lt), Dc = ft("borderLeft", lt), Vc = ft("borderColor"), Bc = ft("borderTopColor"), Fc = ft("borderRightColor"), Uc = ft("borderBottomColor"), zc = ft("borderLeftColor"), Wc = ft("outline", lt), Kc = ft("outlineColor"), Wn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = qr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: en(t, n)
    });
    return jt(e, e.borderRadius, r);
  }
  return null;
};
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Yt
} : {};
Wn.filterProps = ["borderRadius"];
zn(Nc, Mc, _c, Lc, Dc, Vc, Bc, Fc, Uc, zc, Wn, Wc, Kc);
const Kn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: en(t, n)
    });
    return jt(e, e.gap, r);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Yt
} : {};
Kn.filterProps = ["gap"];
const Hn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: en(t, n)
    });
    return jt(e, e.columnGap, r);
  }
  return null;
};
Hn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Yt
} : {};
Hn.filterProps = ["columnGap"];
const Gn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: en(t, n)
    });
    return jt(e, e.rowGap, r);
  }
  return null;
};
Gn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Yt
} : {};
Gn.filterProps = ["rowGap"];
const Hc = Fe({
  prop: "gridColumn"
}), Gc = Fe({
  prop: "gridRow"
}), Yc = Fe({
  prop: "gridAutoFlow"
}), Qc = Fe({
  prop: "gridAutoColumns"
}), Xc = Fe({
  prop: "gridAutoRows"
}), Jc = Fe({
  prop: "gridTemplateColumns"
}), Zc = Fe({
  prop: "gridTemplateRows"
}), qc = Fe({
  prop: "gridTemplateAreas"
}), eu = Fe({
  prop: "gridArea"
});
zn(Kn, Hn, Gn, Hc, Gc, Yc, Qc, Xc, Jc, Zc, qc, eu);
function Er(e, t) {
  return t === "grey" ? t : e;
}
const tu = Fe({
  prop: "color",
  themeKey: "palette",
  transform: Er
}), ru = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Er
}), nu = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Er
});
zn(tu, ru, nu);
function nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ou = Fe({
  prop: "width",
  transform: nt
}), Xo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Vn[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: nt(r)
      };
    };
    return jt(e, e.maxWidth, t);
  }
  return null;
};
Xo.filterProps = ["maxWidth"];
const iu = Fe({
  prop: "minWidth",
  transform: nt
}), au = Fe({
  prop: "height",
  transform: nt
}), su = Fe({
  prop: "maxHeight",
  transform: nt
}), lu = Fe({
  prop: "minHeight",
  transform: nt
});
Fe({
  prop: "size",
  cssProperty: "width",
  transform: nt
});
Fe({
  prop: "size",
  cssProperty: "height",
  transform: nt
});
const cu = Fe({
  prop: "boxSizing"
});
zn(ou, Xo, iu, au, su, lu, cu);
const Yn = {
  // borders
  border: {
    themeKey: "borders",
    transform: lt
  },
  borderTop: {
    themeKey: "borders",
    transform: lt
  },
  borderRight: {
    themeKey: "borders",
    transform: lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: lt
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
    transform: lt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Er
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Er
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Er
  },
  // spacing
  p: {
    style: De
  },
  pt: {
    style: De
  },
  pr: {
    style: De
  },
  pb: {
    style: De
  },
  pl: {
    style: De
  },
  px: {
    style: De
  },
  py: {
    style: De
  },
  padding: {
    style: De
  },
  paddingTop: {
    style: De
  },
  paddingRight: {
    style: De
  },
  paddingBottom: {
    style: De
  },
  paddingLeft: {
    style: De
  },
  paddingX: {
    style: De
  },
  paddingY: {
    style: De
  },
  paddingInline: {
    style: De
  },
  paddingInlineStart: {
    style: De
  },
  paddingInlineEnd: {
    style: De
  },
  paddingBlock: {
    style: De
  },
  paddingBlockStart: {
    style: De
  },
  paddingBlockEnd: {
    style: De
  },
  m: {
    style: Le
  },
  mt: {
    style: Le
  },
  mr: {
    style: Le
  },
  mb: {
    style: Le
  },
  ml: {
    style: Le
  },
  mx: {
    style: Le
  },
  my: {
    style: Le
  },
  margin: {
    style: Le
  },
  marginTop: {
    style: Le
  },
  marginRight: {
    style: Le
  },
  marginBottom: {
    style: Le
  },
  marginLeft: {
    style: Le
  },
  marginX: {
    style: Le
  },
  marginY: {
    style: Le
  },
  marginInline: {
    style: Le
  },
  marginInlineStart: {
    style: Le
  },
  marginInlineEnd: {
    style: Le
  },
  marginBlock: {
    style: Le
  },
  marginBlockStart: {
    style: Le
  },
  marginBlockEnd: {
    style: Le
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
    style: Kn
  },
  rowGap: {
    style: Gn
  },
  columnGap: {
    style: Hn
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
    transform: nt
  },
  maxWidth: {
    style: Xo
  },
  minWidth: {
    transform: nt
  },
  height: {
    transform: nt
  },
  maxHeight: {
    transform: nt
  },
  minHeight: {
    transform: nt
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
function uu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function du(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pu() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, l = i[r];
    if (!l)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: m,
      style: y
    } = l;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = Bn(o, f) || {};
    return y ? y(a) : jt(a, n, (g) => {
      let p = Rn(b, m, g);
      return g === p && typeof g == "string" && (p = Rn(b, m, `${r}${g === "default" ? "" : se(g)}`, g)), u === !1 ? p : {
        [u]: p
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? Yn;
    function l(u) {
      let f = u;
      if (typeof u == "function")
        f = u(o);
      else if (typeof u != "object")
        return u;
      if (!f)
        return null;
      const m = Oc(o.breakpoints), y = Object.keys(m);
      let b = m;
      return Object.keys(f).forEach((v) => {
        const g = du(f[v], o);
        if (g != null)
          if (typeof g == "object")
            if (a[v])
              b = Ur(b, e(v, g, o, a));
            else {
              const p = jt({
                theme: o
              }, g, (x) => ({
                [v]: x
              }));
              uu(p, g) ? b[v] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : b = Ur(b, p);
            }
          else
            b = Ur(b, e(v, g, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Zi(o, ea(y, b))
      } : Zi(o, ea(y, b));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const or = pu();
or.filterProps = ["sx"];
function fu(e, t) {
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
function Jo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, l = xc(r), u = os(o);
  let f = it({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Cc,
      ...i
    }
  }, a);
  return f = Tc(f), f.applyStyles = fu, f = t.reduce((m, y) => it(m, y), f), f.unstable_sxConfig = {
    ...Yn,
    ...a?.unstable_sxConfig
  }, f.unstable_sx = function(y) {
    return or({
      sx: y,
      theme: this
    });
  }, f;
}
function mu(e) {
  return Object.keys(e).length === 0;
}
function Zo(e = null) {
  const t = M.useContext(Ja);
  return !t || mu(t) ? e : t;
}
const hu = Jo();
function is(e = hu) {
  return Zo(e);
}
function bo(e) {
  const t = Wt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function as({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = is(r), o = t && n[t] || n;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => bo(typeof a == "function" ? a(o) : a)) : i = bo(i)), /* @__PURE__ */ c.jsx(Yo, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (as.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: s.object,
  /**
   * @ignore
   */
  styles: s.oneOfType([s.array, s.func, s.number, s.object, s.string, s.bool]),
  /**
   * @ignore
   */
  themeId: s.string
});
const ra = (e) => e, gu = () => {
  let e = ra;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ra;
    }
  };
}, yu = gu();
function ss(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ss(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $e() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ss(e)) && (n && (n += " "), n += t);
  return n;
}
const bu = {
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
function yt(e, t, r = "Mui") {
  const n = bu[t];
  return n ? `${r}-${n}` : `${yu.generate(e)}-${t}`;
}
function rt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = yt(e, o, r);
  }), n;
}
function ls(e, t = "") {
  return e.displayName || e.name || t;
}
function na(e, t, r) {
  const n = ls(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function vu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ls(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case On.ForwardRef:
          return na(e, e.render, "ForwardRef");
        case On.Memo:
          return na(e, e.type, "memo");
        default:
          return;
      }
  }
}
function cs(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Wt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Wt(o.style));
  }), n;
}
const xu = Jo();
function vo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Su(e) {
  return e ? (t, r) => r[e] : null;
}
function Eu(e, t, r) {
  e.theme = Ou(e.theme) ? r : e.theme[t] || e.theme;
}
function xn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => xn(e, o, r));
  if (Array.isArray(n?.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? qt(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? qt(Wt(a), r) : a;
    }
    return us(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? qt(Wt(n.style), r) : n.style : r ? qt(Wt(n), r) : n;
}
function us(e, t, r = [], n = void 0) {
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !a.props(o))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && e.ownerState?.[l] !== a.props[l])
          continue e;
    typeof a.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(n ? qt(Wt(a.style(o)), n) : a.style(o))) : r.push(n ? qt(Wt(a.style), n) : a.style);
  }
  return r;
}
function Tu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xu,
    rootShouldForwardProp: n = vo,
    slotShouldForwardProp: o = vo
  } = e;
  function i(l) {
    Eu(l, t, r);
  }
  return (l, u = {}) => {
    hc(l, (w) => w.filter((L) => L !== or));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: y,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Su(ds(m)),
      ...g
    } = u, p = f && f.startsWith("Mui") || m ? "components" : "custom", x = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), C = b || !1;
    let O = vo;
    m === "Root" || m === "root" ? O = n : m ? O = o : Ru(l) && (O = void 0);
    const j = mc(l, {
      shouldForwardProp: O,
      label: wu(f, m),
      ...g
    }), E = (w) => {
      if (w.__emotion_real === w)
        return w;
      if (typeof w == "function")
        return function(_) {
          return xn(_, w, _.theme.modularCssLayers ? p : void 0);
        };
      if ($t(w)) {
        const L = cs(w);
        return function(N) {
          return L.variants ? xn(N, L, N.theme.modularCssLayers ? p : void 0) : N.theme.modularCssLayers ? qt(L.style, p) : L.style;
        };
      }
      return w;
    }, S = (...w) => {
      const L = [], _ = w.map(E), N = [];
      if (L.push(i), f && v && N.push(function(I) {
        const K = I.theme.components?.[f]?.styleOverrides;
        if (!K)
          return null;
        const z = {};
        for (const Z in K)
          z[Z] = xn(I, K[Z], I.theme.modularCssLayers ? "theme" : void 0);
        return v(I, z);
      }), f && !x && N.push(function(I) {
        const K = I.theme?.components?.[f]?.variants;
        return K ? us(I, K, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || N.push(or), Array.isArray(_[0])) {
        const d = _.shift(), I = new Array(L.length).fill(""), A = new Array(N.length).fill("");
        let K;
        K = [...I, ...d, ...A], K.raw = [...I, ...d.raw, ...A], L.unshift(K);
      }
      const k = [...L, ..._, ...N], P = j(...k);
      return l.muiName && (P.muiName = l.muiName), process.env.NODE_ENV !== "production" && (P.displayName = Cu(f, m, l)), P;
    };
    return j.withConfig && (S.withConfig = j.withConfig), S;
  };
}
function Cu(e, t, r) {
  return e ? `${e}${se(t || "")}` : `Styled(${vu(r)})`;
}
function wu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ds(t || "Root")}`), r;
}
function Ou(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ru(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ds(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Po(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], l = t[i];
        if (!l)
          n[i] = a || {};
        else if (!a)
          n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const u in a)
            if (Object.prototype.hasOwnProperty.call(a, u)) {
              const f = u;
              n[i][f] = Po(a[f], l[f], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = $e(e?.className, t?.className) : i === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const ir = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function Pu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function qo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Pu(e, t, r);
}
function ku(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ht(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ht(ku(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Kt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Kt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const $u = (e) => {
  const t = Ht(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Br = (e, t) => {
  try {
    return $u(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Qn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ps(e) {
  e = Ht(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, m = (f + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let l = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", u.push(t[3])), Qn({
    type: l,
    values: u
  });
}
function ko(e) {
  e = Ht(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ht(ps(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oa(e, t) {
  const r = ko(e), n = ko(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Pn(e, t) {
  return e = Ht(e), t = qo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qn(e);
}
function Zt(e, t, r) {
  try {
    return Pn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xn(e, t) {
  if (e = Ht(e), t = qo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Qn(e);
}
function Ee(e, t, r) {
  try {
    return Xn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Jn(e, t) {
  if (e = Ht(e), t = qo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Qn(e);
}
function Te(e, t, r) {
  try {
    return Jn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ju(e, t = 0.15) {
  return ko(e) > 0.5 ? Xn(e, t) : Jn(e, t);
}
function fn(e, t, r) {
  try {
    return ju(e, t);
  } catch {
    return e;
  }
}
const Iu = "exact-prop: ​";
function ei(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Iu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const ti = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (ti.displayName = "ThemeContext");
function ri() {
  const e = M.useContext(ti);
  return process.env.NODE_ENV !== "production" && M.useDebugValue(e), e;
}
const Au = typeof Symbol == "function" && Symbol.for, Nu = Au ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Mu(e, t) {
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
function kn(e) {
  const {
    children: t,
    theme: r
  } = e, n = ri();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = M.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Mu(n, r);
    return i != null && (i[Nu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ c.jsx(ti.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (kn.propTypes = ei(kn.propTypes));
const fs = /* @__PURE__ */ M.createContext();
function ms({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(fs.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  children: s.node,
  value: s.bool
});
const _u = () => M.useContext(fs) ?? !1, hs = /* @__PURE__ */ M.createContext(void 0);
function gs({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(hs.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: s.node,
  /**
   * @ignore
   */
  value: s.object
});
function Lu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Po(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Po(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Du({
  props: e,
  name: t
}) {
  const r = M.useContext(hs);
  return Lu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let ia = 0;
function Vu(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (ia += 1, r(`mui-${ia}`));
  }, [t]), n;
}
const Bu = {
  ...M
}, aa = Bu.useId;
function ni(e) {
  if (aa !== void 0) {
    const t = aa();
    return e ?? t;
  }
  return Vu(e);
}
function Fu(e) {
  const t = Zo(), r = ni() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ir(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const a = i.firstChild;
    if (o) {
      if (a && a.hasAttribute?.("data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === r)
        return;
      const l = document.createElement("style");
      l.setAttribute("data-mui-layer-order", r), l.textContent = o, i.prepend(l);
    } else
      i.querySelector(`style[data-mui-layer-order="${r}"]`)?.remove();
  }, [o, r]), o ? /* @__PURE__ */ c.jsx(as, {
    styles: o
  }) : null;
}
const sa = {};
function la(e, t, r, n = !1) {
  return M.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => a : a;
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
function Gr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Zo(sa), i = ri() || sa;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = la(n, o, r), l = la(n, i, r, !0), u = (n ? a[n] : a).direction === "rtl", f = Fu(a);
  return /* @__PURE__ */ c.jsx(kn, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(Ja.Provider, {
      value: a,
      children: /* @__PURE__ */ c.jsx(ms, {
        value: u,
        children: /* @__PURE__ */ c.jsxs(gs, {
          value: n ? a[n].components : a.components,
          children: [f, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.func, s.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: s.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Gr.propTypes = ei(Gr.propTypes));
const ca = {
  theme: void 0
};
function Uu(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (ca.theme = o.theme, i = cs(e(ca)), t = i, r = o.theme), i;
  };
}
const oi = "mode", ii = "color-scheme", zu = "data-color-scheme";
function Wu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = oi,
    colorSchemeStorageKey: i = ii,
    attribute: a = zu,
    colorSchemeNode: l = "document.documentElement",
    nonce: u
  } = e || {};
  let f = "", m = a;
  if (a === "class" && (m = ".%s"), a === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const b = m.substring(1);
    f += `${l}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${l}.classList.add('${b}'.replace('%s', colorScheme));`;
  }
  const y = m.match(/\[([^[\]]+)\]/);
  if (y) {
    const [b, v] = y[1].split("=");
    v || (f += `${l}.removeAttribute('${b}'.replace('%s', light));
      ${l}.removeAttribute('${b}'.replace('%s', dark));`), f += `
      ${l}.setAttribute('${b}'.replace('%s', colorScheme), ${v ? `${v}.replace('%s', colorScheme)` : '""'});`;
  } else
    f += `${l}.setAttribute('${m}', colorScheme);`;
  return /* @__PURE__ */ c.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? u : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
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
    ${f}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Ku() {
}
const Hu = ({
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
      return Ku;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function xo() {
}
function ua(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ys(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Gu(e) {
  return ys(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Yu(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = oi,
    colorSchemeStorageKey: a = ii,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: u = Hu,
    noSsr: f = !1
  } = e, m = o.join(","), y = o.length > 1, b = M.useMemo(() => u?.({
    key: i,
    storageWindow: l
  }), [u, i, l]), v = M.useMemo(() => u?.({
    key: `${a}-light`,
    storageWindow: l
  }), [u, a, l]), g = M.useMemo(() => u?.({
    key: `${a}-dark`,
    storageWindow: l
  }), [u, a, l]), [p, x] = M.useState(() => {
    const _ = b?.get(t) || t, N = v?.get(r) || r, k = g?.get(n) || n;
    return {
      mode: _,
      systemMode: ua(_),
      lightColorScheme: N,
      darkColorScheme: k
    };
  }), [C, O] = M.useState(f || !y);
  M.useEffect(() => {
    O(!0);
  }, []);
  const j = Gu(p), E = M.useCallback((_) => {
    x((N) => {
      if (_ === N.mode)
        return N;
      const k = _ ?? t;
      return b?.set(k), {
        ...N,
        mode: k,
        systemMode: ua(k)
      };
    });
  }, [b, t]), S = M.useCallback((_) => {
    _ ? typeof _ == "string" ? _ && !m.includes(_) ? console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`) : x((N) => {
      const k = {
        ...N
      };
      return ys(N, (P) => {
        P === "light" && (v?.set(_), k.lightColorScheme = _), P === "dark" && (g?.set(_), k.darkColorScheme = _);
      }), k;
    }) : x((N) => {
      const k = {
        ...N
      }, P = _.light === null ? r : _.light, d = _.dark === null ? n : _.dark;
      return P && (m.includes(P) ? (k.lightColorScheme = P, v?.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), d && (m.includes(d) ? (k.darkColorScheme = d, g?.set(d)) : console.error(`\`${d}\` does not exist in \`theme.colorSchemes\`.`)), k;
    }) : x((N) => (v?.set(r), g?.set(n), {
      ...N,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, v, g, r, n]), w = M.useCallback((_) => {
    p.mode === "system" && x((N) => {
      const k = _?.matches ? "dark" : "light";
      return N.systemMode === k ? N : {
        ...N,
        systemMode: k
      };
    });
  }, [p.mode]), L = M.useRef(w);
  return L.current = w, M.useEffect(() => {
    if (typeof window.matchMedia != "function" || !y)
      return;
    const _ = (...k) => L.current(...k), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(_), _(N), () => {
      N.removeListener(_);
    };
  }, [y]), M.useEffect(() => {
    if (y) {
      const _ = b?.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && E(P || t);
      }) || xo, N = v?.subscribe((P) => {
        (!P || m.match(P)) && S({
          light: P
        });
      }) || xo, k = g?.subscribe((P) => {
        (!P || m.match(P)) && S({
          dark: P
        });
      }) || xo;
      return () => {
        _(), N(), k();
      };
    }
  }, [S, E, m, t, l, y, b, v, g]), {
    ...p,
    mode: C ? p.mode : void 0,
    systemMode: C ? p.systemMode : void 0,
    colorScheme: C ? j : void 0,
    setMode: E,
    setColorScheme: S
  };
}
const Qu = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Xu(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = oi,
    colorSchemeStorageKey: o = ii,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: a,
    resolveTheme: l
  } = e, u = {
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
  }, f = /* @__PURE__ */ M.createContext(void 0);
  process.env.NODE_ENV !== "production" && (f.displayName = "ColorSchemeContext");
  const m = () => M.useContext(f) || u, y = {}, b = {};
  function v(C) {
    const {
      children: O,
      theme: j,
      modeStorageKey: E = n,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: w = i,
      storageManager: L,
      storageWindow: _ = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: k = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: P = !1,
      disableStyleSheetGeneration: d = !1,
      defaultMode: I = "system",
      forceThemeRerender: A = !1,
      noSsr: K
    } = C, z = M.useRef(!1), Z = ri(), te = M.useContext(f), G = !!te && !P, h = M.useMemo(() => j || (typeof r == "function" ? r() : r), [j]), T = h[t], $ = T || h, {
      colorSchemes: R = y,
      components: V = b,
      cssVarPrefix: W
    } = $, D = Object.keys(R).filter((ge) => !!R[ge]).join(","), H = M.useMemo(() => D.split(","), [D]), X = typeof a == "string" ? a : a.light, Y = typeof a == "string" ? a : a.dark, J = R[X] && R[Y] ? I : R[$.defaultColorScheme]?.palette?.mode || $.palette?.mode, {
      mode: me,
      setMode: Q,
      systemMode: le,
      lightColorScheme: Me,
      darkColorScheme: Ue,
      colorScheme: Se,
      setColorScheme: ze
    } = Yu({
      supportedColorSchemes: H,
      defaultLightColorScheme: X,
      defaultDarkColorScheme: Y,
      modeStorageKey: E,
      colorSchemeStorageKey: S,
      defaultMode: J,
      storageManager: L,
      storageWindow: _,
      noSsr: K
    });
    let ne = me, Ie = Se;
    G && (ne = te.mode, Ie = te.colorScheme), process.env.NODE_ENV !== "production" && A && !$.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let ue = Ie || $.defaultColorScheme;
    $.vars && !A && (ue = $.defaultColorScheme);
    const _e = M.useMemo(() => {
      const ge = $.generateThemeVars?.() || $.vars, de = {
        ...$,
        components: V,
        colorSchemes: R,
        cssVarPrefix: W,
        vars: ge
      };
      if (typeof de.generateSpacing == "function" && (de.spacing = de.generateSpacing()), ue) {
        const Oe = R[ue];
        Oe && typeof Oe == "object" && Object.keys(Oe).forEach((He) => {
          Oe[He] && typeof Oe[He] == "object" ? de[He] = {
            ...de[He],
            ...Oe[He]
          } : de[He] = Oe[He];
        });
      }
      return l ? l(de) : de;
    }, [$, ue, V, R, W]), oe = $.colorSchemeSelector;
    ir(() => {
      if (Ie && k && oe && oe !== "media") {
        const ge = oe;
        let de = oe;
        if (ge === "class" && (de = ".%s"), ge === "data" && (de = "[data-%s]"), ge?.startsWith("data-") && !ge.includes("%s") && (de = `[${ge}="%s"]`), de.startsWith("."))
          k.classList.remove(...H.map((Oe) => de.substring(1).replace("%s", Oe))), k.classList.add(de.substring(1).replace("%s", Ie));
        else {
          const Oe = de.replace("%s", Ie).match(/\[([^\]]+)\]/);
          if (Oe) {
            const [He, Ge] = Oe[1].split("=");
            Ge || H.forEach((Re) => {
              k.removeAttribute(He.replace(Ie, Re));
            }), k.setAttribute(He, Ge ? Ge.replace(/"|'/g, "") : "");
          } else
            k.setAttribute(de, Ie);
        }
      }
    }, [Ie, oe, k, H]), M.useEffect(() => {
      let ge;
      if (w && z.current && N) {
        const de = N.createElement("style");
        de.appendChild(N.createTextNode(Qu)), N.head.appendChild(de), window.getComputedStyle(N.body), ge = setTimeout(() => {
          N.head.removeChild(de);
        }, 1);
      }
      return () => {
        clearTimeout(ge);
      };
    }, [Ie, w, N]), M.useEffect(() => (z.current = !0, () => {
      z.current = !1;
    }), []);
    const Je = M.useMemo(() => ({
      allColorSchemes: H,
      colorScheme: Ie,
      darkColorScheme: Ue,
      lightColorScheme: Me,
      mode: ne,
      setColorScheme: ze,
      setMode: process.env.NODE_ENV === "production" ? Q : (ge) => {
        _e.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), Q(ge);
      },
      systemMode: le
    }), [H, Ie, Ue, Me, ne, ze, Q, le, _e.colorSchemeSelector]);
    let Ve = !0;
    (d || $.cssVariables === !1 || G && Z?.cssVarPrefix === W) && (Ve = !1);
    const ie = /* @__PURE__ */ c.jsxs(M.Fragment, {
      children: [/* @__PURE__ */ c.jsx(Gr, {
        themeId: T ? t : void 0,
        theme: _e,
        children: O
      }), Ve && /* @__PURE__ */ c.jsx(Yo, {
        styles: _e.generateStyleSheets?.() || []
      })]
    });
    return G ? ie : /* @__PURE__ */ c.jsx(f.Provider, {
      value: Je,
      children: ie
    });
  }
  process.env.NODE_ENV !== "production" && (v.propTypes = {
    /**
     * The component tree.
     */
    children: s.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: s.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: s.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: s.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: s.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: s.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: s.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: s.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: s.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: s.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: s.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: s.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: s.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: s.object
  });
  const g = typeof a == "string" ? a : a.light, p = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: v,
    useColorScheme: m,
    getInitColorSchemeScript: (C) => Wu({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: p,
      modeStorageKey: n,
      ...C
    })
  };
}
function Ju(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const da = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Zu = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([l, u]) => {
      (!r || r && !r([...i, l])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, l], Array.isArray(u) ? [...a, l] : a) : t([...i, l], u, a));
    });
  }
  n(e);
}, qu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function So(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Zu(
    e,
    (l, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(l, u))) {
        const m = `--${r ? `${r}-` : ""}${l.join("-")}`, y = qu(l, u);
        Object.assign(o, {
          [m]: y
        }), da(i, l, `var(${m})`, f), da(a, l, `var(${m}, ${y})`, f);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function ed(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: u = "light",
    ...f
  } = e, {
    vars: m,
    css: y,
    varsWithDefaults: b
  } = So(f, t);
  let v = b;
  const g = {}, {
    [u]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([E, S]) => {
    const {
      vars: w,
      css: L,
      varsWithDefaults: _
    } = So(S, t);
    v = it(v, _), g[E] = {
      css: L,
      vars: w
    };
  }), p) {
    const {
      css: E,
      vars: S,
      varsWithDefaults: w
    } = So(p, t);
    v = it(v, w), g[u] = {
      css: E,
      vars: S
    };
  }
  function C(E, S) {
    let w = o;
    if (o === "class" && (w = ".%s"), o === "data" && (w = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (w = `[${o}="%s"]`), E) {
      if (w === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${a[E]?.palette?.mode || E})`]: {
            ":root": S
          }
        };
      if (w)
        return e.defaultColorScheme === E ? `:root, ${w.replace("%s", String(E))}` : w.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let E = {
        ...m
      };
      return Object.entries(g).forEach(([, {
        vars: S
      }]) => {
        E = it(E, S);
      }), E;
    },
    generateStyleSheets: () => {
      const E = [], S = e.defaultColorScheme || "light";
      function w(N, k) {
        Object.keys(k).length && E.push(typeof N == "string" ? {
          [N]: {
            ...k
          }
        } : N);
      }
      w(r(void 0, {
        ...y
      }), y);
      const {
        [S]: L,
        ..._
      } = g;
      if (L) {
        const {
          css: N
        } = L, k = a[S]?.palette?.mode, P = !n && k ? {
          colorScheme: k,
          ...N
        } : {
          ...N
        };
        w(r(S, {
          ...P
        }), P);
      }
      return Object.entries(_).forEach(([N, {
        css: k
      }]) => {
        const P = a[N]?.palette?.mode, d = !n && P ? {
          colorScheme: P,
          ...k
        } : {
          ...k
        };
        w(r(N, {
          ...d
        }), d);
      }), i && E.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), E;
    }
  };
}
function td(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function At(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", l = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (l === !0 ? "" : " ") + t(f), l = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
const Yr = {
  black: "#000",
  white: "#fff"
}, rd = {
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
}, fr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, mr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, _r = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, hr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, gr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, yr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function bs() {
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
      paper: Yr.white,
      default: Yr.white
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
const vs = bs();
function xs() {
  return {
    text: {
      primary: Yr.white,
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
      active: Yr.white,
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
const $o = xs();
function pa(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Jn(e.main, o) : t === "dark" && (e.dark = Xn(e.main, i)));
}
function fa(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function nd(e = "light") {
  return e === "dark" ? {
    main: hr[200],
    light: hr[50],
    dark: hr[400]
  } : {
    main: hr[700],
    light: hr[400],
    dark: hr[800]
  };
}
function od(e = "light") {
  return e === "dark" ? {
    main: fr[200],
    light: fr[50],
    dark: fr[400]
  } : {
    main: fr[500],
    light: fr[300],
    dark: fr[700]
  };
}
function id(e = "light") {
  return e === "dark" ? {
    main: mr[500],
    light: mr[300],
    dark: mr[700]
  } : {
    main: mr[700],
    light: mr[400],
    dark: mr[800]
  };
}
function ad(e = "light") {
  return e === "dark" ? {
    main: gr[400],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[700],
    light: gr[500],
    dark: gr[900]
  };
}
function sd(e = "light") {
  return e === "dark" ? {
    main: yr[400],
    light: yr[300],
    dark: yr[700]
  } : {
    main: yr[800],
    light: yr[500],
    dark: yr[900]
  };
}
function ld(e = "light") {
  return e === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _r[500],
    dark: _r[900]
  };
}
function cd(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ai(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || nd(t), l = e.secondary || od(t), u = e.error || id(t), f = e.info || ad(t), m = e.success || sd(t), y = e.warning || ld(t);
  function b(x) {
    if (o)
      return cd(x);
    const C = oa(x, $o.text.primary) >= r ? $o.text.primary : vs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = oa(x, C);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${C} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const v = ({
    color: x,
    name: C,
    mainShade: O = 500,
    lightShade: j = 300,
    darkShade: E = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[O] && (x.main = x[O]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : Kt(11, C ? ` (${C})` : "", O));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Kt(12, C ? ` (${C})` : "", JSON.stringify(x.main)));
    return o ? (fa(o, x, "light", j, n), fa(o, x, "dark", E, n)) : (pa(x, "light", j, n), pa(x, "dark", E, n)), x.contrastText || (x.contrastText = b(x.main)), x;
  };
  let g;
  return t === "light" ? g = bs() : t === "dark" && (g = xs()), process.env.NODE_ENV !== "production" && (g || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), it({
    // A collection of common colors.
    common: {
      ...Yr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: u,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: rd,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...g
  }, i);
}
function ud(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function dd(e, t) {
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
function pd(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ma = {
  textTransform: "uppercase"
}, ha = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ss(e, t) {
  const {
    fontFamily: r = ha,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...y
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, v = m || ((x) => `${x / u * b}rem`), g = (x, C, O, j, E) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: v(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ha ? {
      letterSpacing: `${pd(j / C)}em`
    } : {},
    ...E,
    ...f
  }), p = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, ma),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, ma),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return it({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...p
  }, y, {
    clone: !1
    // No need to clone deep
  });
}
const fd = 0.2, md = 0.14, hd = 0.12;
function Ne(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fd})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${md})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${hd})`].join(",");
}
const gd = ["none", Ne(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ne(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ne(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ne(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ne(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ne(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ne(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ne(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ne(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ne(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ne(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ne(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ne(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ne(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ne(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ne(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ne(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ne(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ne(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ne(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ne(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ne(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ne(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ne(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], yd = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, bd = {
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
function ga(e) {
  return `${Math.round(e)}ms`;
}
function vd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function xd(e) {
  const t = {
    ...yd,
    ...e.easing
  }, r = {
    ...bd,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vd,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (b) => typeof b == "string", y = (b) => !Number.isNaN(parseFloat(b));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !y(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(l) || console.error('MUI: Argument "easing" must be a string.'), !y(u) && !m(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : ga(a)} ${l} ${typeof u == "string" ? u : ga(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Sd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ed(e) {
  return $t(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Es(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, l] = o[i];
      !Ed(l) || a.startsWith("unstable_") ? delete n[a] : $t(l) && (n[a] = {
        ...l
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ya(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Td = (e) => {
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
function Cd(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Pn(t, Td(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${ya(r)})` : Jn(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${ya(r)})` : Xn(t, r);
    }
  });
}
function jo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: l = {},
    shape: u,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Kt(20));
  const y = ai({
    ...i,
    colorSpace: f
  }), b = Jo(e);
  let v = it(b, {
    mixins: dd(b.breakpoints, n),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: gd.slice(),
    typography: Ss(y, l),
    transitions: xd(a),
    zIndex: {
      ...Sd
    }
  });
  if (v = it(v, m), v = t.reduce((g, p) => it(g, p), v), process.env.NODE_ENV !== "production") {
    const g = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, C) => {
      let O;
      for (O in x) {
        const j = x[O];
        if (g.includes(O) && Object.keys(j).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = yt("", O);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: j
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[O] = {};
        }
      }
    };
    Object.keys(v.components).forEach((x) => {
      const C = v.components[x].styleOverrides;
      C && x.startsWith("Mui") && p(C, x);
    });
  }
  return v.unstable_sxConfig = {
    ...Yn,
    ...m?.unstable_sxConfig
  }, v.unstable_sx = function(p) {
    return or({
      sx: p,
      theme: this
    });
  }, v.toRuntimeSource = Es, Cd(v), v;
}
function Io(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Io(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ts(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Cs(e) {
  return e === "dark" ? wd : [];
}
function Od(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = ai({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...Ts(a.mode),
      ...r
    },
    overlays: n || Cs(a.mode),
    ...i
  };
}
function Rd(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Pd = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], kd = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Pd(e.cssVarPrefix).forEach((l) => {
        a[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function $d(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function F(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Fr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ps(e);
}
function Pt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Br(Fr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function jd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const bt = (e) => {
  try {
    return e();
  } catch {
  }
}, Id = (e = "mui") => Ju(e);
function Eo(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Od({
      ...r,
      palette: {
        mode: i,
        ...r?.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...l
  } = jo({
    ...n,
    palette: {
      mode: i,
      ...r?.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...Ts(i),
      ...r?.opacity
    },
    overlays: r?.overlays || Cs(i)
  }, l;
}
function Ad(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = Rd,
    colorSchemeSelector: u = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...m
  } = e, y = Object.keys(r)[0], b = n || (r.light && y !== "light" ? "light" : y), v = Id(i), {
    [b]: g,
    light: p,
    dark: x,
    ...C
  } = r, O = {
    ...C
  };
  let j = g;
  if ((b === "dark" && !("dark" in r) || b === "light" && !("light" in r)) && (j = !0), !j)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${b}\` option is either missing or invalid.` : Kt(21, b));
  let E;
  a && (E = "oklch");
  const S = Eo(E, O, j, m, b);
  p && !O.light && Eo(E, O, p, void 0, "light"), x && !O.dark && Eo(E, O, x, void 0, "dark");
  let w = {
    defaultColorScheme: b,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: u,
    rootSelector: f,
    getCssVar: v,
    colorSchemes: O,
    font: {
      ...ud(S.typography),
      ...S.font
    },
    spacing: jd(m.spacing)
  };
  Object.keys(w.colorSchemes).forEach((P) => {
    const d = w.colorSchemes[P].palette, I = (K) => {
      const z = K.split("-"), Z = z[1], te = z[2];
      return v(K, d[Z][te]);
    };
    d.mode === "light" && (F(d.common, "background", "#fff"), F(d.common, "onBackground", "#000")), d.mode === "dark" && (F(d.common, "background", "#000"), F(d.common, "onBackground", "#fff"));
    function A(K, z, Z) {
      if (E) {
        let te;
        return K === Zt && (te = `transparent ${((1 - Z) * 100).toFixed(0)}%`), K === Ee && (te = `#000 ${(Z * 100).toFixed(0)}%`), K === Te && (te = `#fff ${(Z * 100).toFixed(0)}%`), `color-mix(in ${E}, ${z}, ${te})`;
      }
      return K(z, Z);
    }
    if ($d(d, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), d.mode === "light") {
      F(d.Alert, "errorColor", A(Ee, d.error.light, 0.6)), F(d.Alert, "infoColor", A(Ee, d.info.light, 0.6)), F(d.Alert, "successColor", A(Ee, d.success.light, 0.6)), F(d.Alert, "warningColor", A(Ee, d.warning.light, 0.6)), F(d.Alert, "errorFilledBg", I("palette-error-main")), F(d.Alert, "infoFilledBg", I("palette-info-main")), F(d.Alert, "successFilledBg", I("palette-success-main")), F(d.Alert, "warningFilledBg", I("palette-warning-main")), F(d.Alert, "errorFilledColor", bt(() => d.getContrastText(d.error.main))), F(d.Alert, "infoFilledColor", bt(() => d.getContrastText(d.info.main))), F(d.Alert, "successFilledColor", bt(() => d.getContrastText(d.success.main))), F(d.Alert, "warningFilledColor", bt(() => d.getContrastText(d.warning.main))), F(d.Alert, "errorStandardBg", A(Te, d.error.light, 0.9)), F(d.Alert, "infoStandardBg", A(Te, d.info.light, 0.9)), F(d.Alert, "successStandardBg", A(Te, d.success.light, 0.9)), F(d.Alert, "warningStandardBg", A(Te, d.warning.light, 0.9)), F(d.Alert, "errorIconColor", I("palette-error-main")), F(d.Alert, "infoIconColor", I("palette-info-main")), F(d.Alert, "successIconColor", I("palette-success-main")), F(d.Alert, "warningIconColor", I("palette-warning-main")), F(d.AppBar, "defaultBg", I("palette-grey-100")), F(d.Avatar, "defaultBg", I("palette-grey-400")), F(d.Button, "inheritContainedBg", I("palette-grey-300")), F(d.Button, "inheritContainedHoverBg", I("palette-grey-A100")), F(d.Chip, "defaultBorder", I("palette-grey-400")), F(d.Chip, "defaultAvatarColor", I("palette-grey-700")), F(d.Chip, "defaultIconColor", I("palette-grey-700")), F(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(d.LinearProgress, "primaryBg", A(Te, d.primary.main, 0.62)), F(d.LinearProgress, "secondaryBg", A(Te, d.secondary.main, 0.62)), F(d.LinearProgress, "errorBg", A(Te, d.error.main, 0.62)), F(d.LinearProgress, "infoBg", A(Te, d.info.main, 0.62)), F(d.LinearProgress, "successBg", A(Te, d.success.main, 0.62)), F(d.LinearProgress, "warningBg", A(Te, d.warning.main, 0.62)), F(d.Skeleton, "bg", E ? A(Zt, d.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), F(d.Slider, "primaryTrack", A(Te, d.primary.main, 0.62)), F(d.Slider, "secondaryTrack", A(Te, d.secondary.main, 0.62)), F(d.Slider, "errorTrack", A(Te, d.error.main, 0.62)), F(d.Slider, "infoTrack", A(Te, d.info.main, 0.62)), F(d.Slider, "successTrack", A(Te, d.success.main, 0.62)), F(d.Slider, "warningTrack", A(Te, d.warning.main, 0.62));
      const K = E ? A(Ee, d.background.default, 0.6825) : fn(d.background.default, 0.8);
      F(d.SnackbarContent, "bg", K), F(d.SnackbarContent, "color", bt(() => E ? $o.text.primary : d.getContrastText(K))), F(d.SpeedDialAction, "fabHoverBg", fn(d.background.paper, 0.15)), F(d.StepConnector, "border", I("palette-grey-400")), F(d.StepContent, "border", I("palette-grey-400")), F(d.Switch, "defaultColor", I("palette-common-white")), F(d.Switch, "defaultDisabledColor", I("palette-grey-100")), F(d.Switch, "primaryDisabledColor", A(Te, d.primary.main, 0.62)), F(d.Switch, "secondaryDisabledColor", A(Te, d.secondary.main, 0.62)), F(d.Switch, "errorDisabledColor", A(Te, d.error.main, 0.62)), F(d.Switch, "infoDisabledColor", A(Te, d.info.main, 0.62)), F(d.Switch, "successDisabledColor", A(Te, d.success.main, 0.62)), F(d.Switch, "warningDisabledColor", A(Te, d.warning.main, 0.62)), F(d.TableCell, "border", A(Te, A(Zt, d.divider, 1), 0.88)), F(d.Tooltip, "bg", A(Zt, d.grey[700], 0.92));
    }
    if (d.mode === "dark") {
      F(d.Alert, "errorColor", A(Te, d.error.light, 0.6)), F(d.Alert, "infoColor", A(Te, d.info.light, 0.6)), F(d.Alert, "successColor", A(Te, d.success.light, 0.6)), F(d.Alert, "warningColor", A(Te, d.warning.light, 0.6)), F(d.Alert, "errorFilledBg", I("palette-error-dark")), F(d.Alert, "infoFilledBg", I("palette-info-dark")), F(d.Alert, "successFilledBg", I("palette-success-dark")), F(d.Alert, "warningFilledBg", I("palette-warning-dark")), F(d.Alert, "errorFilledColor", bt(() => d.getContrastText(d.error.dark))), F(d.Alert, "infoFilledColor", bt(() => d.getContrastText(d.info.dark))), F(d.Alert, "successFilledColor", bt(() => d.getContrastText(d.success.dark))), F(d.Alert, "warningFilledColor", bt(() => d.getContrastText(d.warning.dark))), F(d.Alert, "errorStandardBg", A(Ee, d.error.light, 0.9)), F(d.Alert, "infoStandardBg", A(Ee, d.info.light, 0.9)), F(d.Alert, "successStandardBg", A(Ee, d.success.light, 0.9)), F(d.Alert, "warningStandardBg", A(Ee, d.warning.light, 0.9)), F(d.Alert, "errorIconColor", I("palette-error-main")), F(d.Alert, "infoIconColor", I("palette-info-main")), F(d.Alert, "successIconColor", I("palette-success-main")), F(d.Alert, "warningIconColor", I("palette-warning-main")), F(d.AppBar, "defaultBg", I("palette-grey-900")), F(d.AppBar, "darkBg", I("palette-background-paper")), F(d.AppBar, "darkColor", I("palette-text-primary")), F(d.Avatar, "defaultBg", I("palette-grey-600")), F(d.Button, "inheritContainedBg", I("palette-grey-800")), F(d.Button, "inheritContainedHoverBg", I("palette-grey-700")), F(d.Chip, "defaultBorder", I("palette-grey-700")), F(d.Chip, "defaultAvatarColor", I("palette-grey-300")), F(d.Chip, "defaultIconColor", I("palette-grey-300")), F(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(d.LinearProgress, "primaryBg", A(Ee, d.primary.main, 0.5)), F(d.LinearProgress, "secondaryBg", A(Ee, d.secondary.main, 0.5)), F(d.LinearProgress, "errorBg", A(Ee, d.error.main, 0.5)), F(d.LinearProgress, "infoBg", A(Ee, d.info.main, 0.5)), F(d.LinearProgress, "successBg", A(Ee, d.success.main, 0.5)), F(d.LinearProgress, "warningBg", A(Ee, d.warning.main, 0.5)), F(d.Skeleton, "bg", E ? A(Zt, d.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), F(d.Slider, "primaryTrack", A(Ee, d.primary.main, 0.5)), F(d.Slider, "secondaryTrack", A(Ee, d.secondary.main, 0.5)), F(d.Slider, "errorTrack", A(Ee, d.error.main, 0.5)), F(d.Slider, "infoTrack", A(Ee, d.info.main, 0.5)), F(d.Slider, "successTrack", A(Ee, d.success.main, 0.5)), F(d.Slider, "warningTrack", A(Ee, d.warning.main, 0.5));
      const K = E ? A(Te, d.background.default, 0.985) : fn(d.background.default, 0.98);
      F(d.SnackbarContent, "bg", K), F(d.SnackbarContent, "color", bt(() => E ? vs.text.primary : d.getContrastText(K))), F(d.SpeedDialAction, "fabHoverBg", fn(d.background.paper, 0.15)), F(d.StepConnector, "border", I("palette-grey-600")), F(d.StepContent, "border", I("palette-grey-600")), F(d.Switch, "defaultColor", I("palette-grey-300")), F(d.Switch, "defaultDisabledColor", I("palette-grey-600")), F(d.Switch, "primaryDisabledColor", A(Ee, d.primary.main, 0.55)), F(d.Switch, "secondaryDisabledColor", A(Ee, d.secondary.main, 0.55)), F(d.Switch, "errorDisabledColor", A(Ee, d.error.main, 0.55)), F(d.Switch, "infoDisabledColor", A(Ee, d.info.main, 0.55)), F(d.Switch, "successDisabledColor", A(Ee, d.success.main, 0.55)), F(d.Switch, "warningDisabledColor", A(Ee, d.warning.main, 0.55)), F(d.TableCell, "border", A(Ee, A(Zt, d.divider, 1), 0.68)), F(d.Tooltip, "bg", A(Zt, d.grey[700], 0.92));
    }
    Pt(d.background, "default"), Pt(d.background, "paper"), Pt(d.common, "background"), Pt(d.common, "onBackground"), Pt(d, "divider"), Object.keys(d).forEach((K) => {
      const z = d[K];
      K !== "tonalOffset" && z && typeof z == "object" && (z.main && F(d[K], "mainChannel", Br(Fr(z.main))), z.light && F(d[K], "lightChannel", Br(Fr(z.light))), z.dark && F(d[K], "darkChannel", Br(Fr(z.dark))), z.contrastText && F(d[K], "contrastTextChannel", Br(Fr(z.contrastText))), K === "text" && (Pt(d[K], "primary"), Pt(d[K], "secondary")), K === "action" && (z.active && Pt(d[K], "active"), z.selected && Pt(d[K], "selected")));
    });
  }), w = t.reduce((P, d) => it(P, d), w);
  const L = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: kd(w),
    enableContrastVars: a
  }, {
    vars: _,
    generateThemeVars: N,
    generateStyleSheets: k
  } = ed(w, L);
  return w.vars = _, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([P, d]) => {
    w[P] = d;
  }), w.generateThemeVars = N, w.generateStyleSheets = k, w.generateSpacing = function() {
    return os(m.spacing, Qo(this));
  }, w.getColorSchemeSelector = td(u), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = l, w.unstable_sxConfig = {
    ...Yn,
    ...m?.unstable_sxConfig
  }, w.unstable_sx = function(d) {
    return or({
      sx: d,
      theme: this
    });
  }, w.toRuntimeSource = Es, w;
}
function ba(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ai({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ws(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...a
  } = e, l = i || "light", u = o?.[l], f = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return jo(e, ...t);
    let m = r;
    "palette" in e || f[l] && (f[l] !== !0 ? m = f[l].palette : l === "dark" && (m = {
      mode: "dark"
    }));
    const y = jo({
      ...e,
      palette: m
    }, ...t);
    return y.defaultColorScheme = l, y.colorSchemes = f, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: y.palette
    }, ba(y, "dark", f.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: y.palette
    }, ba(y, "light", f.light)), y;
  }
  return !r && !("light" in f) && l === "light" && (f.light = !0), Ad({
    ...a,
    colorSchemes: f,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Os = ws();
function Nd() {
  const e = is(Os);
  return process.env.NODE_ENV !== "production" && M.useDebugValue(e), e[zt] || e;
}
function Md(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const _d = (e) => Md(e) && e !== "classes", je = Tu({
  themeId: zt,
  defaultTheme: Os,
  rootShouldForwardProp: _d
});
function Ld({
  theme: e,
  ...t
}) {
  const r = zt in e ? e[zt] : void 0;
  return /* @__PURE__ */ c.jsx(Gr, {
    ...t,
    themeId: r ? zt : void 0,
    theme: r || e
  });
}
const mn = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (s.string, s.string, s.string, s.string, s.string, s.oneOf(["dark", "light", "system"]), s.string, s.string);
const {
  CssVarsProvider: Dd
} = Xu({
  themeId: zt,
  // @ts-ignore ignore module augmentation tests
  theme: () => ws({
    cssVariables: !0
  }),
  colorSchemeStorageKey: mn.colorSchemeStorageKey,
  modeStorageKey: mn.modeStorageKey,
  defaultColorScheme: {
    light: mn.defaultLightColorScheme,
    dark: mn.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Ss(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return or({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Vd = Dd;
function Bd({
  theme: e,
  ...t
}) {
  const r = M.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = zt in e ? e[zt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ c.jsx(Ld, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ c.jsx(Vd, {
    theme: e,
    ...t
  });
}
const va = "/lookup", Sn = /* @__PURE__ */ new Map();
let Lr = null;
const Fd = typeof window < "u";
function Rs() {
  if (!Fd)
    return null;
  if (Lr)
    return Lr;
  try {
    Lr = sl.createInstance({
      name: "react-questionnaire-renderer",
      storeName: "lookup-cache"
    });
  } catch (e) {
    console.warn("[lookup-cache] Failed to create localforage instance:", e), Lr = null;
  }
  return Lr;
}
function Ud(e = {}) {
  if (!e || typeof e != "object")
    return "unknown::latest";
  const t = e.cacheKey || e.id || e.tableName || e.value || "lookup", r = e.version || "latest";
  return `${t}::${r}`;
}
async function zd(e) {
  if (!e) return null;
  if (Sn.has(e))
    return Sn.get(e);
  const t = Rs();
  if (!t) return null;
  try {
    const r = await t.getItem(e);
    if (r)
      return Sn.set(e, r), r;
  } catch (r) {
    console.warn("[lookup-cache] Failed to read cache:", e, r);
  }
  return null;
}
async function Wd(e, t) {
  if (e)
    try {
      Sn.set(e, t);
      const r = Rs();
      r && await r.setItem(e, t);
    } catch (r) {
      console.warn("[lookup-cache] Failed to persist cache:", e, r);
    }
}
function xa(e) {
  return e ? Array.isArray(e) ? e : e.data && Array.isArray(e.data) ? e.data : e.items && Array.isArray(e.items) ? e.items : [] : [];
}
function Kd(e) {
  return e ? String(e).replace(/^\/+/, "").replace(/\.json$/i, "") : "";
}
function Hd(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Gd(e = {}, t = {}) {
  if (!e || typeof e != "object") return null;
  if (typeof t.resolveLookupUrl == "function") {
    const u = t.resolveLookupUrl(e, t);
    if (u) return u;
  }
  if (e.url)
    return e.url;
  const r = t.lookupBaseUrl ?? va, n = Hd(r || va), o = e.fileName || e.id || e.tableName || e.cacheKey;
  if (!o) return null;
  const i = Kd(o), a = e.fileName?.endsWith(".json") ? e.fileName : `${i}.json`;
  return /^https?:/i.test(a) ? a : /^https?:/i.test(n) ? `${n}/${a}` : `${n.startsWith("/") ? n : `/${n}`}/${a}`.replace(/([^:]\/)(\/+)/g, "$1");
}
async function Yd(e) {
  if (typeof fetch != "function")
    throw new Error("Global fetch is not available. Provide lookupClient or polyfill fetch.");
  const t = await fetch(e);
  if (!t.ok) {
    const r = `[lookup] Request failed: ${t.status} ${t.statusText}`;
    throw new Error(r);
  }
  return t.json();
}
async function Qd(e = {}, t = {}) {
  const r = Gd(e, t);
  if (!r)
    throw new Error("Unable to resolve lookup URL from source definition");
  if (t.lookupClient && typeof t.lookupClient.get == "function") {
    const o = await t.lookupClient.get(r, e.requestConfig || {});
    return xa(o && o.data !== void 0 ? o.data : o);
  }
  const n = await Yd(r);
  return xa(n);
}
function To(e, t) {
  return e === t ? !0 : e == null || t == null ? !1 : String(e) === String(t);
}
const Ps = tl(), fe = {
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
}, Sa = typeof navigator < "u" ? navigator : void 0, Co = (e) => {
  if (typeof structuredClone == "function")
    return structuredClone(e);
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
    return e;
  }
}, Dr = (e, t) => {
  if (e === t) return !0;
  try {
    return JSON.stringify(e) === JSON.stringify(t);
  } catch {
    return !1;
  }
}, Xd = {
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
  isOnline: Sa ? Sa.onLine : !0,
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
function Jd(e, t) {
  switch (t.type) {
    case fe.SET_QUESTIONNAIRE:
      return Dr(e.template, t.payload) ? e : {
        ...e,
        questionnaire: t.payload,
        template: t.payload
      };
    case fe.SET_VALIDATION:
      return Dr(e.validation, t.payload) ? e : { ...e, validation: t.payload };
    case fe.SET_CURRENT_PAGE:
      return { ...e, currentPage: t.payload };
    case fe.SET_RESPONSE: {
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
        isDirty: !Dr(r, e.initialResponses)
      };
    }
    case fe.SET_VARIABLE: {
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
    case fe.SET_ERROR:
      return {
        ...e,
        errors: { ...e.errors, [t.payload.dataKey]: t.payload.error },
        validationState: "invalid"
      };
    case fe.CLEAR_ERROR: {
      const r = { ...e.errors };
      return delete r[t.payload.dataKey], {
        ...e,
        errors: r,
        validationState: Object.keys(r).length ? "invalid" : "valid"
      };
    }
    case fe.SET_TOUCHED:
      return {
        ...e,
        touched: { ...e.touched, [t.payload.dataKey]: !0 }
      };
    case fe.SET_LOADING:
      return { ...e, isLoading: t.payload };
    case fe.SET_OFFLINE:
      return { ...e, isOnline: !t.payload };
    case fe.LOAD_QUESTIONNAIRE:
      return {
        ...e,
        questionnaire: t.payload.questionnaire,
        template: t.payload.questionnaire,
        validation: t.payload.validation
      };
    case fe.SET_INITIAL_RESPONSES: {
      const r = Co(t.payload || {});
      return {
        ...e,
        initialResponses: r,
        responses: Co(t.payload || {}),
        isDirty: !1
      };
    }
    case fe.RESET_RESPONSES:
      return {
        ...e,
        responses: Co(e.initialResponses || {}),
        isDirty: !1
      };
    case fe.SET_ERRORS:
      return {
        ...e,
        errors: t.payload || {},
        validationState: t.payload && Object.keys(t.payload).length ? "invalid" : "valid"
      };
    case fe.SET_RUNTIME_METHODS:
      try {
        const r = e.runtime || null, n = t.payload || null;
        if (r === n) return e;
        if (r && n && typeof r == "object" && typeof n == "object") {
          const o = Object.keys(r), i = Object.keys(n);
          if (o.length === i.length && o.every((a) => i.includes(a)) && o.every((l) => r[l] === n[l]))
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
    case fe.SET_CONFIG:
      try {
        const r = { ...e.config, ...t.payload || {} };
        return Dr(e.config, r) ? e : {
          ...e,
          config: r
        };
      } catch {
        return {
          ...e,
          config: { ...e.config, ...t.payload || {} }
        };
      }
    case fe.SET_LOOKUP_ENTRY: {
      const { key: r, entry: n } = t.payload || {};
      if (!r || !n) return e;
      const o = e.lookupCache[r];
      return o && Dr(o, n) ? {
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
    case fe.SET_LOOKUP_STATUS: {
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
function Zd({ children: e }) {
  const [t, r] = rl(Jd, Xd), n = Xe(/* @__PURE__ */ new Map());
  Pe(() => {
    if (typeof window > "u")
      return;
    const S = () => r({ type: fe.SET_OFFLINE, payload: !1 }), w = () => r({ type: fe.SET_OFFLINE, payload: !0 });
    return window.addEventListener("online", S), window.addEventListener("offline", w), () => {
      window.removeEventListener("online", S), window.removeEventListener("offline", w);
    };
  }, []);
  const o = ye((S) => {
    r({ type: fe.SET_QUESTIONNAIRE, payload: S });
  }, []), i = ye((S) => {
    r({ type: fe.SET_VALIDATION, payload: S });
  }, []), a = ye((S) => {
    r({ type: fe.SET_CURRENT_PAGE, payload: S });
  }, []), l = ye((S, w, L = null) => {
    const _ = L !== null ? `${S}#${L}` : S;
    r({
      type: fe.SET_RESPONSE,
      payload: { dataKey: _, value: w }
    });
  }, []), u = ye((S, w, L = null) => {
    const _ = L !== null ? `${S}#${L}` : S;
    r({
      type: fe.SET_VARIABLE,
      payload: { dataKey: _, value: w }
    });
  }, []), f = ye((S, w) => {
    r({ type: fe.SET_ERROR, payload: { dataKey: S, error: w } });
  }, []), m = ye((S) => {
    r({ type: fe.CLEAR_ERROR, payload: { dataKey: S } });
  }, []), y = ye((S) => {
    r({ type: fe.SET_TOUCHED, payload: { dataKey: S } });
  }, []), b = ye((S) => {
    r({ type: fe.SET_LOADING, payload: S });
  }, []), v = ye((S, w) => {
    r({
      type: fe.LOAD_QUESTIONNAIRE,
      payload: { questionnaire: S, validation: w }
    });
  }, []), g = ye((S) => {
    r({ type: fe.SET_INITIAL_RESPONSES, payload: S });
  }, []), p = ye(() => {
    r({ type: fe.RESET_RESPONSES });
  }, []), x = ye((S) => {
    r({ type: fe.SET_ERRORS, payload: S });
  }, []), C = ye((S) => {
    r({ type: fe.SET_RUNTIME_METHODS, payload: S });
  }, []), O = ye((S) => {
    r({ type: fe.SET_CONFIG, payload: S });
  }, []), j = ye(async (S = {}) => {
    const w = Ud(S), L = t.lookupCache[w];
    if (L && Array.isArray(L.data))
      return L.data;
    const _ = n.current.get(w);
    if (_)
      return _;
    const N = (async () => {
      try {
        const k = await zd(w);
        if (k && Array.isArray(k.data))
          return r({
            type: fe.SET_LOOKUP_ENTRY,
            payload: { key: w, entry: k }
          }), k.data;
        r({
          type: fe.SET_LOOKUP_STATUS,
          payload: { key: w, status: "loading", error: null }
        });
        const P = await Qd(S, t.config), d = {
          data: P,
          version: S.version || null,
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return r({
          type: fe.SET_LOOKUP_ENTRY,
          payload: { key: w, entry: d }
        }), await Wd(w, d), P;
      } catch (k) {
        const P = k && k.message ? k.message : String(k);
        throw r({
          type: fe.SET_LOOKUP_STATUS,
          payload: { key: w, status: "error", error: P }
        }), k;
      } finally {
        n.current.delete(w);
      }
    })();
    return n.current.set(w, N), N;
  }, [t.lookupCache, t.config, r]), E = {
    ...t,
    setQuestionnaire: o,
    setValidation: i,
    setCurrentPage: a,
    setResponse: l,
    setVariable: u,
    setError: f,
    clearError: m,
    setTouched: y,
    setLoading: b,
    loadQuestionnaire: v,
    setInitialResponses: g,
    resetResponses: p,
    setErrors: x,
    setRuntimeMethods: C,
    setConfig: O,
    ensureLookupDataset: j
  };
  return /* @__PURE__ */ c.jsx(Ps.Provider, { value: E, children: e });
}
function Et() {
  const e = nl(Ps);
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
function tn(e, t = {}, r = {}, n = null) {
  let o = e;
  return o.includes("@$ROW$") && n !== null && (o = o.replace("@$ROW$", `#${n}`)), t[o] !== void 0 ? t[o] : r[o];
}
function Ft(e, t = {}, r = {}, n = null) {
  try {
    const o = (u) => tn(u, t, r, n), i = (u) => n !== null && (u === 1 || u === "1") ? n : u ?? n, a = String(e ?? "").trim();
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
    )(o, i, t, r, n, a);
  } catch (o) {
    try {
      Ft._lastErrors = Ft._lastErrors || /* @__PURE__ */ new Map();
      const i = Ft._lastErrors.get(e), a = o && o.message ? o.message : String(o);
      i !== a && (console.error("Error evaluating expression:", e, o), Ft._lastErrors.set(e, a));
    } catch {
      console.error("Error evaluating expression (fallback):", e, o);
    }
    return;
  }
}
function qd(e, t = {}, r = {}, n = null) {
  if (!e.enableCondition) return !0;
  try {
    return Ft(e.enableCondition, t, r, n);
  } catch (o) {
    return console.error("Error evaluating enable condition:", o), !1;
  }
}
function ep(e, t = {}, r = {}, n = null) {
  if (typeof e != "string") return e;
  let o = e;
  if (o.includes("$NAME$") && n !== null) {
    const i = `r202_nama#${n}`, a = tn(i, t, r) || "N/A";
    o = o.replace(/\$NAME\$/g, a);
  }
  return o.includes("@$ROW$") && n !== null && (o = o.replace(/@\$ROW\$/g, `#${n}`)), o;
}
function Pr(e, t, r = {}, n = {}, o = [], i = {}) {
  const a = [], l = e.dataKey, u = i[l];
  if (e.required && (!t || Array.isArray(t) && t.length === 0) && u && a.push("This field is required"), e.lengthInput && t && typeof t == "string") {
    const y = e.lengthInput[0];
    y.minlength && t.length < y.minlength && a.push(`Minimum length is ${y.minlength}`), y.maxlength && t.length > y.maxlength && a.push(`Maximum length is ${y.maxlength}`);
  }
  if (e.rangeInput && t && !isNaN(t)) {
    const y = e.rangeInput[0];
    y.min !== void 0 && Number(t) < y.min && a.push(`Minimum value is ${y.min}`), y.max !== void 0 && Number(t) > y.max && a.push(`Maximum value is ${y.max}`);
  }
  let f = o;
  if (o && typeof o == "object" && !Array.isArray(o) && (f = o.testFunctions || []), !Array.isArray(f))
    return console.error("validationRules is not an array:", o, "type:", typeof o), a;
  const m = f.filter((y) => y.dataKey === e.dataKey);
  for (const y of m)
    for (const b of y.validations)
      try {
        !Ft(b.test, r, n) || a.push(b.message);
      } catch (v) {
        console.error("Error evaluating validation rule:", v);
      }
  return a;
}
const tp = ({ question: e }) => /* @__PURE__ */ c.jsx(re, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ c.jsxs(Tr, { severity: "info", children: [
  /* @__PURE__ */ c.jsxs(q, { variant: "h6", children: [
    "Section: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ c.jsx(q, { variant: "body2", children: "Section components need nested question rendering - coming soon!" })
] }) }), rp = ({ question: e, responses: t = {}, variables: r = {}, validation: n = [] }) => {
  const { errors: o, setVariable: i } = Et(), a = Ke(() => {
    if (!e?.sourceQuestion) return [];
    const C = tn(e.sourceQuestion, t, r) || [];
    return Array.isArray(C) ? C : [];
  }, [e, t, r]), [l, u] = ke("list"), [f, m] = ke(0), y = (C) => {
    m(C), u("detail");
  }, b = () => u("list"), v = () => m((C) => Math.max(0, C - 1)), g = () => m((C) => Math.min(a.length - 1, C + 1)), p = a[f], x = p?.value ?? f + 1;
  return Pe(() => {
    if (l === "detail" && p) {
      const C = e?.dataKey || "art_nested";
      i(C, p, x);
    }
  }, [l, p, x, e, i]), l === "list" ? /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(q, { variant: "subtitle1", sx: { mb: 1 }, children: e.label || e.title || "Roster" }),
    a.length > 0 && /* @__PURE__ */ c.jsx(Wo, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: a.map((C, O) => /* @__PURE__ */ c.jsx(Ko, { divider: !0, secondaryAction: /* @__PURE__ */ c.jsx(Qe, { variant: "outlined", size: "small", onClick: () => y(O), "aria-label": "view-row", children: /* @__PURE__ */ c.jsx(Al, { fontSize: "small" }) }), children: /* @__PURE__ */ c.jsx(Ho, { primary: C.label ?? `Row ${C.value ?? O + 1}` }) }, C.value ?? O)) })
  ] }) : /* @__PURE__ */ c.jsxs(rr, { variant: "outlined", sx: { p: 2 }, children: [
    /* @__PURE__ */ c.jsxs(Oi, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 1 }, children: [
      /* @__PURE__ */ c.jsxs(q, { variant: "subtitle1", children: [
        e.label,
        " — ",
        p?.label
      ] }),
      /* @__PURE__ */ c.jsx(Qe, { size: "small", onClick: b, "aria-label": "back-to-list", children: /* @__PURE__ */ c.jsx(Nl, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ c.jsx(Ri, { sx: { mb: 2 } }),
    e.components?.[0]?.map((C, O) => /* @__PURE__ */ c.jsx(re, { sx: { mb: 2 }, children: /* @__PURE__ */ c.jsx(
      Ei,
      {
        question: C,
        responses: t,
        variables: r,
        errors: o,
        validation: n,
        rowIndex: x
      }
    ) }, C.dataKey || O)),
    /* @__PURE__ */ c.jsx(Ri, { sx: { my: 2 } }),
    /* @__PURE__ */ c.jsxs(Oi, { direction: "row", spacing: 1, justifyContent: "space-between", children: [
      /* @__PURE__ */ c.jsx(
        Qe,
        {
          variant: "contained",
          disabled: f === 0,
          onClick: v,
          "aria-label": "previous-row",
          children: /* @__PURE__ */ c.jsx(Ml, { fontSize: "small" })
        }
      ),
      /* @__PURE__ */ c.jsx(
        Qe,
        {
          variant: "contained",
          disabled: f >= a.length - 1,
          onClick: g,
          "aria-label": "next-row",
          children: /* @__PURE__ */ c.jsx(_l, { fontSize: "small" })
        }
      )
    ] })
  ] });
}, ks = ({ question: e }) => {
  const t = e.html || e.content || e.label || e.instructions || "";
  if (t.includes("background-color") && (t.includes("#6467f2") || t.includes("grey"))) {
    const n = t.match(/>([^<]+)</), o = n ? n[1].replace(/<[^>]*>/g, "") : "", i = t.includes("background-color: grey") || t.includes("PEMUTAKHIRAN DATA TUNGGAL"), a = t.includes("#6467f2");
    return /* @__PURE__ */ c.jsx(re, { sx: { mb: 3 }, children: /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "h6",
        component: "div",
        sx: {
          bgcolor: i ? "grey.600" : a ? "#6467f2" : "primary.main",
          color: "white",
          p: 2,
          borderRadius: "13px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: i ? "16px" : "14px",
          border: "2px solid white"
        },
        children: o
      }
    ) });
  }
  return /* @__PURE__ */ c.jsx(re, { sx: { mb: 2 }, children: /* @__PURE__ */ c.jsx(
    q,
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
}, lr = ({ error: e, isRequired: t, hasValue: r, customMessage: n, isTouched: o = !1 }) => {
  if (!(e || t && !r && o)) return null;
  const a = e || n || "This field is required";
  return /* @__PURE__ */ c.jsxs(re, { sx: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "error.main",
    mt: 1
  }, children: [
    /* @__PURE__ */ c.jsx(Ll, { fontSize: "small" }),
    /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "error", children: a })
  ] });
}, En = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: u, touched: f, setError: m } = Et(), [y, b] = ke(t);
  Pe(() => {
    b(t);
  }, [t]);
  const v = (E) => {
    if (o)
      return;
    const S = E.target.value;
    b(S), r(S);
  }, g = () => {
    u(e.dataKey);
    const E = Pr(e, y, i, a, l, f);
    E.length > 0 ? m(e.dataKey, E[0]) : m(e.dataKey, null);
  }, p = (E) => {
    if (!E) return { main: "", help: "" };
    if (E.includes('<br><small><i><font color="#007bff">')) {
      const w = E.split('<br><small><i><font color="#007bff">'), L = w[0].replace(/<[^>]*>/g, ""), _ = w[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: L, help: _ };
    }
    return { main: E.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: x, help: C } = p(e.label || e.title), O = () => e.mask === "integer" || e.mask === "decimal" ? "number" : e.title?.toLowerCase().includes("email") ? "email" : e.title?.toLowerCase().includes("phone") ? "tel" : "text", j = () => {
    const E = {};
    return e.mask === "integer" ? (E.step = 1, E.inputMode = "numeric") : e.mask === "decimal" && (E.step = "any", E.inputMode = "decimal"), e.maxLength && (E.maxLength = e.maxLength), E;
  };
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: x,
        value: y,
        onChange: v,
        onBlur: g,
        error: !!n,
        helperText: C && !n ? C : void 0,
        disabled: o,
        required: e.required,
        type: O(),
        inputProps: j(),
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
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!y && y.trim() !== "",
        isTouched: f[e.dataKey]
      }
    ),
    C && n && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: {
          mt: 0.5,
          display: "block",
          color: "#007bff",
          fontStyle: "italic",
          fontSize: "12px"
        },
        children: C
      }
    )
  ] });
}, Ao = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1,
  selectMode: i = !1
}) => {
  const [a, l] = ke(""), u = () => {
    if (!o && a.trim()) {
      const x = Array.isArray(t) ? t : [], O = {
        value: x.length > 0 ? Math.max(...x.map((j) => j.value)) + 1 : 1,
        label: a.trim()
      };
      r([...x, O]), l("");
    }
  }, f = (x) => {
    if (o)
      return;
    const O = (Array.isArray(t) ? t : []).filter((j) => j.value !== x);
    r(O);
  }, m = (x) => {
    o || x.key === "Enter" && u();
  }, y = (x) => {
    if (!x) return { mainLabel: "", helpText: "" };
    let C = x.replace(/<[^>]*>/g, "").trim(), O = "";
    const j = x.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return j && (O = j[1], C = x.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: C, helpText: O };
  }, b = Array.isArray(t) ? t : [], v = e.label || e.title || e.name || "", { mainLabel: g, helpText: p } = y(v);
  return /* @__PURE__ */ c.jsx(re, { sx: { width: "100%" }, children: /* @__PURE__ */ c.jsxs(Ln, { fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ c.jsxs(q, { variant: "subtitle1", sx: { mb: 1, fontWeight: "medium" }, children: [
      g || e.title,
      e.required && /* @__PURE__ */ c.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    p && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: p
      }
    ),
    e.instructions && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", gap: 1, mb: 2 }, children: [
      /* @__PURE__ */ c.jsx(
        ut,
        {
          value: a,
          onChange: (x) => l(x.target.value),
          onKeyPress: m,
          placeholder: `Add new ${i ? "option" : "item"}...`,
          fullWidth: !0,
          size: "small",
          disabled: o
        }
      ),
      /* @__PURE__ */ c.jsx(
        Qe,
        {
          variant: "contained",
          onClick: u,
          disabled: !a.trim() || o,
          startIcon: /* @__PURE__ */ c.jsx(Dl, {}),
          children: "Add"
        }
      )
    ] }),
    b.length > 0 && /* @__PURE__ */ c.jsx(Wo, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: b.map((x) => /* @__PURE__ */ c.jsxs(Ko, { divider: !0, children: [
      /* @__PURE__ */ c.jsx(
        Ho,
        {
          primary: x.label,
          secondary: `Value: ${x.value}`
        }
      ),
      /* @__PURE__ */ c.jsx(ll, { children: /* @__PURE__ */ c.jsx(
        Sr,
        {
          edge: "end",
          onClick: () => f(x.value),
          disabled: o,
          color: "error",
          size: "small",
          children: /* @__PURE__ */ c.jsx(Xa, {})
        }
      ) })
    ] }, x.value)) }),
    b.length === 0 && /* @__PURE__ */ c.jsxs(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1, textAlign: "center" },
        children: [
          "No ",
          i ? "options" : "items",
          " added yet. Use the input above to add ",
          i ? "options" : "items",
          "."
        ]
      }
    ),
    n && /* @__PURE__ */ c.jsx(Hr, { error: !0, children: n })
  ] }) });
}, np = ({ question: e, value: t, onChange: r, ...n }) => {
  const o = typeof e.render == "string" ? e.render.trim().toLowerCase() === "true" : e.render;
  if (o === !1)
    return null;
  const i = Number(e.renderType);
  if (o === !0) {
    const u = {
      ...n,
      question: {
        ...e,
        disableInput: !0
      },
      value: t,
      onChange: r,
      disabled: !0
    };
    switch (i) {
      case 1:
        return /* @__PURE__ */ c.jsx(
          En,
          {
            ...u,
            value: t != null ? String(t) : ""
          }
        );
      case 2: {
        const f = Array.isArray(t) ? t : t ? [t] : [];
        return /* @__PURE__ */ c.jsx(
          Ao,
          {
            ...u,
            value: f
          }
        );
      }
      case 3: {
        const f = {
          ...e,
          html: typeof t == "string" && t.length > 0 ? t : e.label
        };
        return /* @__PURE__ */ c.jsx(
          ks,
          {
            ...n,
            question: f
          }
        );
      }
    }
  }
  const a = t != null ? String(t) : "", l = Number(e.renderType) === 2;
  return /* @__PURE__ */ c.jsx(re, { sx: { mb: 1 }, children: l ? /* @__PURE__ */ c.jsx(q, { variant: "body1", children: a }) : /* @__PURE__ */ c.jsx(q, { variant: "subtitle2", color: "text.primary", children: a }) });
}, op = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  rowIndex: l = null
}) => {
  const u = (g) => {
    if (o)
      return;
    const p = g.target.value, x = v.find((O) => O.value == p), C = x ? [{
      value: x.value,
      label: x.text || x.label
    }] : null;
    r(C);
  }, f = (g) => {
    if (!g) return { main: "", help: "" };
    if (g.includes('<br><small><i><font color="#007bff">')) {
      const x = g.split('<br><small><i><font color="#007bff">'), C = x[0].replace(/<[^>]*>/g, ""), O = x[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: C, help: O };
    }
    return { main: g.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: m, help: y } = f(e.label || e.title), v = (() => {
    if (e.answers && Array.isArray(e.answers))
      return e.answers;
    if (e.options && Array.isArray(e.options))
      return e.options;
    if (e.categorical && Array.isArray(e.categorical))
      return e.categorical.map((g) => ({
        value: g.value || g.id,
        text: g.text || g.title || g.label
      }));
    if (e.sourceOption) {
      const g = tn(e.sourceOption, i, a, l) || [];
      return Array.isArray(g) ? g : g && typeof g == "object" ? [g] : [{ value: g, text: String(g) }];
    }
    return [];
  })();
  return /* @__PURE__ */ c.jsx(re, { sx: { width: "100%", mb: 2 }, children: /* @__PURE__ */ c.jsxs(Ln, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ c.jsxs(Ya, { component: "legend", sx: { mb: 1, color: "text.primary", fontSize: "16px" }, children: [
      m,
      e.required && /* @__PURE__ */ c.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    y && /* @__PURE__ */ c.jsx(
      q,
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
    /* @__PURE__ */ c.jsx(
      cl,
      {
        value: Array.isArray(t) && t.length > 0 ? t[0].value : "",
        onChange: u,
        sx: {
          "& .MuiFormControlLabel-root": {
            mb: 0.5,
            ml: 0,
            "& .MuiRadio-root": {
              p: 1
            }
          }
        },
        children: v.map((g) => /* @__PURE__ */ c.jsx(
          Qa,
          {
            value: g.value,
            control: /* @__PURE__ */ c.jsx(ul, { size: "medium" }),
            label: /* @__PURE__ */ c.jsxs(re, { children: [
              /* @__PURE__ */ c.jsx(q, { variant: "body2", children: g.text || g.label }),
              g.description && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", children: g.description })
            ] }),
            disabled: o,
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
          g.value
        ))
      }
    ),
    n && /* @__PURE__ */ c.jsx(Hr, { children: n })
  ] }) });
};
function ip(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function $s(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ip(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function js(e, t, r, n) {
  return e[t] === void 0 ? null : $s(e, t, r, n);
}
function No() {
  return null;
}
js.isRequired = $s;
No.isRequired = No;
const Is = process.env.NODE_ENV === "production" ? No : js;
function ar(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Mo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ut(e) {
  const t = M.useRef(e);
  return ir(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function wo(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: o = "value"
  } = e, {
    current: i
  } = M.useRef(t !== void 0), [a, l] = M.useState(r), u = i ? t : a;
  if (process.env.NODE_ENV !== "production") {
    M.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, t]);
    const {
      current: m
    } = M.useRef(r);
    M.useEffect(() => {
      !i && JSON.stringify(r) !== JSON.stringify(m) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const f = M.useCallback((m) => {
    i || l(m);
  }, []);
  return [u, f];
}
const ap = (e) => {
  const t = M.useRef({});
  return M.useEffect(() => {
    t.current = e;
  }), t.current;
};
function Ea({
  array1: e,
  array2: t,
  parser: r = (n) => n
}) {
  return e && t && e.length === t.length && e.every((n, o) => r(n) === r(t[o]));
}
function Ta(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function As(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: r = !0,
    limit: n,
    matchFrom: o = "any",
    stringify: i,
    trim: a = !1
  } = e;
  return (l, {
    inputValue: u,
    getOptionLabel: f
  }) => {
    let m = a ? u.trim() : u;
    r && (m = m.toLowerCase()), t && (m = Ta(m));
    const y = m ? l.filter((b) => {
      let v = (i || f)(b);
      return r && (v = v.toLowerCase()), t && (v = Ta(v)), o === "start" ? v.startsWith(m) : v.includes(m);
    }) : l;
    return typeof n == "number" ? y.slice(0, n) : y;
  };
}
const sp = As(), Ca = 5, lp = (e) => e.current !== null && e.current.parentElement?.contains(document.activeElement), cp = [];
function wa(e, t, r, n) {
  if (t || e == null || n)
    return "";
  const o = r(e);
  return typeof o == "string" ? o : "";
}
function up(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = lp,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: r = "Mui",
    autoComplete: n = !1,
    autoHighlight: o = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: u = !1,
    componentName: f = "useAutocomplete",
    defaultValue: m = e.multiple ? cp : null,
    disableClearable: y = !1,
    disableCloseOnSelect: b = !1,
    disabled: v,
    disabledItemsFocusable: g = !1,
    disableListWrap: p = !1,
    filterOptions: x = sp,
    filterSelectedOptions: C = !1,
    freeSolo: O = !1,
    getOptionDisabled: j,
    getOptionKey: E,
    getOptionLabel: S = (U) => U.label ?? U,
    groupBy: w,
    handleHomeEndKeys: L = !e.freeSolo,
    id: _,
    includeInputInList: N = !1,
    inputValue: k,
    isOptionEqualToValue: P = (U, B) => U === B,
    multiple: d = !1,
    onChange: I,
    onClose: A,
    onHighlightChange: K,
    onInputChange: z,
    onOpen: Z,
    open: te,
    openOnFocus: G = !1,
    options: h,
    readOnly: T = !1,
    renderValue: $,
    selectOnFocus: R = !e.freeSolo,
    value: V
  } = e, W = ni(_);
  let D = S;
  D = (U) => {
    const B = S(U);
    if (typeof B != "string") {
      if (process.env.NODE_ENV !== "production") {
        const ee = B === void 0 ? "undefined" : `${typeof B} (${B})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${f} returned ${ee} instead of a string for ${JSON.stringify(U)}.`);
      }
      return String(B);
    }
    return B;
  };
  const H = M.useRef(!1), X = M.useRef(!0), Y = M.useRef(null), J = M.useRef(null), [me, Q] = M.useState(null), [le, Me] = M.useState(-1), Ue = o ? 0 : -1, Se = M.useRef(Ue), ze = M.useRef(wa(m ?? V, d, D)).current, [ne, Ie] = wo({
    controlled: V,
    default: m,
    name: f
  }), [ue, _e] = wo({
    controlled: k,
    default: ze,
    name: f,
    state: "inputValue"
  }), [oe, Je] = M.useState(!1), Ve = M.useCallback((U, B, ee) => {
    if (!(d ? ne.length < B.length : B !== null) && !l)
      return;
    const ce = wa(B, d, D, $);
    ue !== ce && (_e(ce), z && z(U, ce, ee));
  }, [D, ue, d, z, _e, l, ne, $]), [ie, ge] = wo({
    controlled: te,
    default: !1,
    name: f,
    state: "open"
  }), [de, Oe] = M.useState(!0), He = !d && ne != null && ue === D(ne), Ge = ie && !T, Re = Ge ? x(
    h.filter((U) => !(C && (d ? ne : [ne]).some((B) => B !== null && P(U, B)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: He && de ? "" : ue,
      getOptionLabel: D
    }
  ) : [], mt = ap({
    filteredOptions: Re,
    value: ne,
    inputValue: ue
  });
  M.useEffect(() => {
    const U = ne !== mt.value;
    oe && !U || O && !U || Ve(null, ne, "reset");
  }, [ne, Ve, oe, mt.value, O]);
  const on = ie && Re.length > 0 && !T, ht = Ut((U) => {
    if (U === -1)
      Y.current.focus();
    else {
      const B = $ ? "data-item-index" : "data-tag-index";
      me.querySelector(`[${B}="${U}"]`).focus();
    }
  });
  M.useEffect(() => {
    d && le > ne.length - 1 && (Me(-1), ht(-1));
  }, [ne, d, le, ht]);
  function eo(U, B) {
    if (!J.current || U < 0 || U >= Re.length)
      return -1;
    let ee = U;
    for (; ; ) {
      const ae = J.current.querySelector(`[data-option-index="${ee}"]`), ce = g ? !1 : !ae || ae.disabled || ae.getAttribute("aria-disabled") === "true";
      if (ae && ae.hasAttribute("tabindex") && !ce)
        return ee;
      if (B === "next" ? ee = (ee + 1) % Re.length : ee = (ee - 1 + Re.length) % Re.length, ee === U)
        return -1;
    }
  }
  const Ct = Ut(({
    event: U,
    index: B,
    reason: ee
  }) => {
    if (Se.current = B, B === -1 ? Y.current.removeAttribute("aria-activedescendant") : Y.current.setAttribute("aria-activedescendant", `${W}-option-${B}`), K && ["mouse", "keyboard", "touch"].includes(ee) && K(U, B === -1 ? null : Re[B], ee), !J.current)
      return;
    const ae = J.current.querySelector(`[role="option"].${r}-focused`);
    ae && (ae.classList.remove(`${r}-focused`), ae.classList.remove(`${r}-focusVisible`));
    let ce = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (ce = J.current.parentElement.querySelector('[role="listbox"]')), !ce)
      return;
    if (B === -1) {
      ce.scrollTop = 0;
      return;
    }
    const Ae = J.current.querySelector(`[data-option-index="${B}"]`);
    if (Ae && (Ae.classList.add(`${r}-focused`), ee === "keyboard" && Ae.classList.add(`${r}-focusVisible`), ce.scrollHeight > ce.clientHeight && ee !== "mouse" && ee !== "touch")) {
      const Be = Ae, Ze = ce.clientHeight + ce.scrollTop, dr = Be.offsetTop + Be.offsetHeight;
      dr > Ze ? ce.scrollTop = dr - ce.clientHeight : Be.offsetTop - Be.offsetHeight * (w ? 1.3 : 0) < ce.scrollTop && (ce.scrollTop = Be.offsetTop - Be.offsetHeight * (w ? 1.3 : 0));
    }
  }), gt = Ut(({
    event: U,
    diff: B,
    direction: ee = "next",
    reason: ae
  }) => {
    if (!Ge)
      return;
    const Ae = eo((() => {
      const Be = Re.length - 1;
      if (B === "reset")
        return Ue;
      if (B === "start")
        return 0;
      if (B === "end")
        return Be;
      const Ze = Se.current + B;
      return Ze < 0 ? Ze === -1 && N ? -1 : p && Se.current !== -1 || Math.abs(B) > 1 ? 0 : Be : Ze > Be ? Ze === Be + 1 && N ? -1 : p || Math.abs(B) > 1 ? Be : 0 : Ze;
    })(), ee);
    if (Ct({
      index: Ae,
      reason: ae,
      event: U
    }), n && B !== "reset")
      if (Ae === -1)
        Y.current.value = ue;
      else {
        const Be = D(Re[Ae]);
        Y.current.value = Be, Be.toLowerCase().indexOf(ue.toLowerCase()) === 0 && ue.length > 0 && Y.current.setSelectionRange(ue.length, Be.length);
      }
  }), an = !Ea({
    array1: mt.filteredOptions,
    array2: Re,
    parser: D
  }), to = () => {
    const U = (B, ee) => {
      const ae = B ? D(B) : "", ce = ee ? D(ee) : "";
      return ae === ce;
    };
    if (Se.current !== -1 && !Ea({
      array1: mt.filteredOptions,
      array2: Re,
      parser: D
    }) && mt.inputValue === ue && (d ? ne.length === mt.value.length && mt.value.every((B, ee) => D(ne[ee]) === D(B)) : U(mt.value, ne))) {
      const B = mt.filteredOptions[Se.current];
      if (B)
        return Re.findIndex((ee) => D(ee) === D(B));
    }
    return -1;
  }, kr = M.useCallback(() => {
    if (!Ge)
      return;
    const U = to();
    if (U !== -1) {
      Se.current = U;
      return;
    }
    const B = d ? ne[0] : ne;
    if (Re.length === 0 || B == null) {
      gt({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (B != null) {
        const ee = Re[Se.current];
        if (d && ee && ne.findIndex((ce) => P(ee, ce)) !== -1)
          return;
        const ae = Re.findIndex((ce) => P(ce, B));
        ae === -1 ? gt({
          diff: "reset"
        }) : Ct({
          index: ae
        });
        return;
      }
      if (Se.current >= Re.length - 1) {
        Ct({
          index: Re.length - 1
        });
        return;
      }
      Ct({
        index: Se.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Re.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    d ? !1 : ne,
    C,
    gt,
    Ct,
    Ge,
    ue,
    d
  ]), Nt = Ut((U) => {
    Mo(J, U), U && kr();
  });
  process.env.NODE_ENV !== "production" && M.useEffect(() => {
    (!Y.current || Y.current.nodeName !== "INPUT") && (Y.current && Y.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${f} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${Y.current} while an HTMLInputElement was expected.`, `Instead, ${f} expects an input element.`, "", f === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [f]), M.useEffect(() => {
    an && kr();
  }, [kr, an]);
  const wt = (U) => {
    ie || (ge(!0), Oe(!0), Z && Z(U));
  }, Xt = (U, B) => {
    ie && (ge(!1), A && A(U, B));
  }, Ot = (U, B, ee, ae) => {
    if (d) {
      if (ne.length === B.length && ne.every((ce, Ae) => ce === B[Ae]))
        return;
    } else if (ne === B)
      return;
    I && I(U, B, ee, ae), Ie(B);
  }, Rt = M.useRef(!1), Mt = (U, B, ee = "selectOption", ae = "options") => {
    let ce = ee, Ae = B;
    if (d) {
      if (Ae = Array.isArray(ne) ? ne.slice() : [], process.env.NODE_ENV !== "production") {
        const Ze = Ae.filter((dr) => P(B, dr));
        Ze.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${f} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ze.length} matches.`].join(`
`));
      }
      const Be = Ae.findIndex((Ze) => P(B, Ze));
      Be === -1 ? Ae.push(B) : ae !== "freeSolo" && (Ae.splice(Be, 1), ce = "removeOption");
    }
    Ve(U, Ae, ce), Ot(U, Ae, ce, {
      option: B
    }), !b && (!U || !U.ctrlKey && !U.metaKey) && Xt(U, ce), (a === !0 || a === "touch" && Rt.current || a === "mouse" && !Rt.current) && Y.current.blur();
  };
  function ro(U, B) {
    if (U === -1)
      return -1;
    let ee = U;
    for (; ; ) {
      if (B === "next" && ee === ne.length || B === "previous" && ee === -1)
        return -1;
      const ae = $ ? "data-item-index" : "data-tag-index", ce = me.querySelector(`[${ae}="${ee}"]`);
      if (!ce || !ce.hasAttribute("tabindex") || ce.disabled || ce.getAttribute("aria-disabled") === "true")
        ee += B === "next" ? 1 : -1;
      else
        return ee;
    }
  }
  const Jt = (U, B) => {
    if (!d)
      return;
    ue === "" && Xt(U, "toggleInput");
    let ee = le;
    le === -1 ? ue === "" && B === "previous" && (ee = ne.length - 1) : (ee += B === "next" ? 1 : -1, ee < 0 && (ee = 0), ee === ne.length && (ee = -1)), ee = ro(ee, B), Me(ee), ht(ee);
  }, sn = (U) => {
    H.current = !0, _e(""), z && z(U, "", "clear"), Ot(U, d ? [] : null, "clear");
  }, no = (U) => (B) => {
    if (U.onKeyDown && U.onKeyDown(B), !B.defaultMuiPrevented && (le !== -1 && !["ArrowLeft", "ArrowRight"].includes(B.key) && (Me(-1), ht(-1)), B.which !== 229))
      switch (B.key) {
        case "Home":
          Ge && L && (B.preventDefault(), gt({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: B
          }));
          break;
        case "End":
          Ge && L && (B.preventDefault(), gt({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: B
          }));
          break;
        case "PageUp":
          B.preventDefault(), gt({
            diff: -Ca,
            direction: "previous",
            reason: "keyboard",
            event: B
          }), wt(B);
          break;
        case "PageDown":
          B.preventDefault(), gt({
            diff: Ca,
            direction: "next",
            reason: "keyboard",
            event: B
          }), wt(B);
          break;
        case "ArrowDown":
          B.preventDefault(), gt({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: B
          }), wt(B);
          break;
        case "ArrowUp":
          B.preventDefault(), gt({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: B
          }), wt(B);
          break;
        case "ArrowLeft":
          !d && $ ? ht(0) : Jt(B, "previous");
          break;
        case "ArrowRight":
          !d && $ ? ht(-1) : Jt(B, "next");
          break;
        case "Enter":
          if (Se.current !== -1 && Ge) {
            const ee = Re[Se.current], ae = j ? j(ee) : !1;
            if (B.preventDefault(), ae)
              return;
            Mt(B, ee, "selectOption"), n && Y.current.setSelectionRange(Y.current.value.length, Y.current.value.length);
          } else O && ue !== "" && He === !1 && (d && B.preventDefault(), Mt(B, ue, "createOption", "freeSolo"));
          break;
        case "Escape":
          Ge ? (B.preventDefault(), B.stopPropagation(), Xt(B, "escape")) : u && (ue !== "" || d && ne.length > 0 || $) && (B.preventDefault(), B.stopPropagation(), sn(B));
          break;
        case "Backspace":
          if (d && !T && ue === "" && ne.length > 0) {
            const ee = le === -1 ? ne.length - 1 : le, ae = ne.slice();
            ae.splice(ee, 1), Ot(B, ae, "removeOption", {
              option: ne[ee]
            });
          }
          !d && $ && !T && (Ie(null), ht(-1));
          break;
        case "Delete":
          if (d && !T && ue === "" && ne.length > 0 && le !== -1) {
            const ee = le, ae = ne.slice();
            ae.splice(ee, 1), Ot(B, ae, "removeOption", {
              option: ne[ee]
            });
          }
          !d && $ && !T && (Ie(null), ht(-1));
          break;
      }
  }, cr = (U) => {
    Je(!0), G && !H.current && wt(U);
  }, ur = (U) => {
    if (t(J)) {
      Y.current.focus();
      return;
    }
    Je(!1), X.current = !0, H.current = !1, i && Se.current !== -1 && Ge ? Mt(U, Re[Se.current], "blur") : i && O && ue !== "" ? Mt(U, ue, "blur", "freeSolo") : l && Ve(U, ne, "blur"), Xt(U, "blur");
  }, $r = (U) => {
    const B = U.target.value;
    ue !== B && (_e(B), Oe(!1), z && z(U, B, "input")), B === "" ? !y && !d && Ot(U, null, "clear") : wt(U);
  }, oo = (U) => {
    const B = Number(U.currentTarget.getAttribute("data-option-index"));
    Se.current !== B && Ct({
      event: U,
      index: B,
      reason: "mouse"
    });
  }, io = (U) => {
    Ct({
      event: U,
      index: Number(U.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Rt.current = !0;
  }, ao = (U) => {
    const B = Number(U.currentTarget.getAttribute("data-option-index"));
    Mt(U, Re[B], "selectOption"), Rt.current = !1;
  }, so = (U) => (B) => {
    const ee = ne.slice();
    ee.splice(U, 1), Ot(B, ee, "removeOption", {
      option: ne[U]
    });
  }, jr = (U) => {
    Ot(U, null, "removeOption", {
      option: ne
    });
  }, We = (U) => {
    ie ? Xt(U, "toggleInput") : wt(U);
  }, Ye = (U) => {
    U.currentTarget.contains(U.target) && U.target.getAttribute("id") !== W && U.preventDefault();
  }, _t = (U) => {
    U.currentTarget.contains(U.target) && (Y.current.focus(), R && X.current && Y.current.selectionEnd - Y.current.selectionStart === 0 && Y.current.select(), X.current = !1);
  }, lo = (U) => {
    !v && (ue === "" || !ie) && We(U);
  };
  let Ir = O && ue.length > 0;
  Ir = Ir || (d ? ne.length > 0 : ne !== null);
  let ln = Re;
  if (w) {
    const U = /* @__PURE__ */ new Map();
    let B = !1;
    ln = Re.reduce((ee, ae, ce) => {
      const Ae = w(ae);
      return ee.length > 0 && ee[ee.length - 1].group === Ae ? ee[ee.length - 1].options.push(ae) : (process.env.NODE_ENV !== "production" && (U.get(Ae) && !B && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${f} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), B = !0), U.set(Ae, !0)), ee.push({
        key: ce,
        index: ce,
        group: Ae,
        options: [ae]
      })), ee;
    }, []);
  }
  return v && oe && ur(), {
    getRootProps: (U = {}) => ({
      ...U,
      onKeyDown: no(U),
      onMouseDown: Ye,
      onClick: _t
    }),
    getInputLabelProps: () => ({
      id: `${W}-label`,
      htmlFor: W
    }),
    getInputProps: () => ({
      id: W,
      value: ue,
      onBlur: ur,
      onFocus: cr,
      onChange: $r,
      onMouseDown: lo,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": Ge ? "" : null,
      "aria-autocomplete": n ? "both" : "list",
      "aria-controls": on ? `${W}-listbox` : void 0,
      "aria-expanded": on,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: Y,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: v
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: sn
    }),
    getItemProps: ({
      index: U = 0
    } = {}) => ({
      ...d && {
        key: U
      },
      ...$ ? {
        "data-item-index": U
      } : {
        "data-tag-index": U
      },
      tabIndex: -1,
      ...!T && {
        onDelete: d ? so(U) : jr
      }
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: We
    }),
    // deprecated
    getTagProps: ({
      index: U
    }) => ({
      key: U,
      "data-tag-index": U,
      tabIndex: -1,
      ...!T && {
        onDelete: so(U)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${W}-listbox`,
      "aria-labelledby": `${W}-label`,
      ref: Nt,
      onMouseDown: (U) => {
        U.preventDefault();
      }
    }),
    getOptionProps: ({
      index: U,
      option: B
    }) => {
      const ee = (d ? ne : [ne]).some((ce) => ce != null && P(B, ce)), ae = j ? j(B) : !1;
      return {
        key: E?.(B) ?? D(B),
        tabIndex: -1,
        role: "option",
        id: `${W}-option-${U}`,
        onMouseMove: oo,
        onClick: ao,
        onTouchStart: io,
        "data-option-index": U,
        "aria-disabled": ae,
        "aria-selected": ee
      };
    },
    id: W,
    inputValue: ue,
    value: ne,
    dirty: Ir,
    expanded: Ge && me,
    popupOpen: Ge,
    focused: oe || le !== -1,
    anchorEl: me,
    setAnchorEl: Q,
    focusedItem: le,
    // deprecated
    focusedTag: le,
    groupedOptions: ln
  };
}
const si = s.oneOfType([s.func, s.object]);
function Qr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function Oa(e) {
  return e && e.ownerDocument || document;
}
function Gt(...e) {
  const t = M.useRef(void 0), r = M.useCallback((n) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const a = i, l = a(n);
        return typeof l == "function" ? l : () => {
          a(null);
        };
      }
      return i.current = n, () => {
        i.current = null;
      };
    });
    return () => {
      o.forEach((i) => i?.());
    };
  }, e);
  return M.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
var qe = "top", dt = "bottom", pt = "right", et = "left", li = "auto", rn = [qe, dt, pt, et], Cr = "start", Xr = "end", dp = "clippingParents", Ns = "viewport", Vr = "popper", pp = "reference", Ra = /* @__PURE__ */ rn.reduce(function(e, t) {
  return e.concat([t + "-" + Cr, t + "-" + Xr]);
}, []), Ms = /* @__PURE__ */ [].concat(rn, [li]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Cr, t + "-" + Xr]);
}, []), fp = "beforeRead", mp = "read", hp = "afterRead", gp = "beforeMain", yp = "main", bp = "afterMain", vp = "beforeWrite", xp = "write", Sp = "afterWrite", Ep = [fp, mp, hp, gp, yp, bp, vp, xp, Sp];
function St(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function at(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function sr(e) {
  var t = at(e).Element;
  return e instanceof t || e instanceof Element;
}
function ct(e) {
  var t = at(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ci(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Tp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ct(i) || !St(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function Cp(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = a.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !ct(o) || !St(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
const wp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Tp,
  effect: Cp,
  requires: ["computeStyles"]
};
function xt(e) {
  return e.split("-")[0];
}
var nr = Math.max, $n = Math.min, wr = Math.round;
function _o() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function _s() {
  return !/^((?!chrome|android).)*safari/i.test(_o());
}
function Or(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && ct(e) && (o = e.offsetWidth > 0 && wr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && wr(n.height) / e.offsetHeight || 1);
  var a = sr(e) ? at(e) : window, l = a.visualViewport, u = !_s() && r, f = (n.left + (u && l ? l.offsetLeft : 0)) / o, m = (n.top + (u && l ? l.offsetTop : 0)) / i, y = n.width / o, b = n.height / i;
  return {
    width: y,
    height: b,
    top: m,
    right: f + y,
    bottom: m + b,
    left: f,
    x: f,
    y: m
  };
}
function ui(e) {
  var t = Or(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Ls(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ci(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function It(e) {
  return at(e).getComputedStyle(e);
}
function Op(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Qt(e) {
  return ((sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zn(e) {
  return St(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ci(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Qt(e)
  );
}
function Pa(e) {
  return !ct(e) || // https://github.com/popperjs/popper-core/issues/837
  It(e).position === "fixed" ? null : e.offsetParent;
}
function Rp(e) {
  var t = /firefox/i.test(_o()), r = /Trident/i.test(_o());
  if (r && ct(e)) {
    var n = It(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Zn(e);
  for (ci(o) && (o = o.host); ct(o) && ["html", "body"].indexOf(St(o)) < 0; ) {
    var i = It(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function nn(e) {
  for (var t = at(e), r = Pa(e); r && Op(r) && It(r).position === "static"; )
    r = Pa(r);
  return r && (St(r) === "html" || St(r) === "body" && It(r).position === "static") ? t : r || Rp(e) || t;
}
function di(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function zr(e, t, r) {
  return nr(e, $n(t, r));
}
function Pp(e, t, r) {
  var n = zr(e, t, r);
  return n > r ? r : n;
}
function Ds() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vs(e) {
  return Object.assign({}, Ds(), e);
}
function Bs(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var kp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Vs(typeof t != "number" ? t : Bs(t, rn));
};
function $p(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, l = xt(r.placement), u = di(l), f = [et, pt].indexOf(l) >= 0, m = f ? "height" : "width";
  if (!(!i || !a)) {
    var y = kp(o.padding, r), b = ui(i), v = u === "y" ? qe : et, g = u === "y" ? dt : pt, p = r.rects.reference[m] + r.rects.reference[u] - a[u] - r.rects.popper[m], x = a[u] - r.rects.reference[u], C = nn(i), O = C ? u === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, j = p / 2 - x / 2, E = y[v], S = O - b[m] - y[g], w = O / 2 - b[m] / 2 + j, L = zr(E, w, S), _ = u;
    r.modifiersData[n] = (t = {}, t[_] = L, t.centerOffset = L - w, t);
  }
}
function jp(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ls(t.elements.popper, o) && (t.elements.arrow = o));
}
const Ip = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: $p,
  effect: jp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Rr(e) {
  return e.split("-")[1];
}
var Ap = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Np(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: wr(r * o) / o || 0,
    y: wr(n * o) / o || 0
  };
}
function ka(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, u = e.gpuAcceleration, f = e.adaptive, m = e.roundOffsets, y = e.isFixed, b = a.x, v = b === void 0 ? 0 : b, g = a.y, p = g === void 0 ? 0 : g, x = typeof m == "function" ? m({
    x: v,
    y: p
  }) : {
    x: v,
    y: p
  };
  v = x.x, p = x.y;
  var C = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), j = et, E = qe, S = window;
  if (f) {
    var w = nn(r), L = "clientHeight", _ = "clientWidth";
    if (w === at(r) && (w = Qt(r), It(w).position !== "static" && l === "absolute" && (L = "scrollHeight", _ = "scrollWidth")), w = w, o === qe || (o === et || o === pt) && i === Xr) {
      E = dt;
      var N = y && w === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[L]
      );
      p -= N - n.height, p *= u ? 1 : -1;
    }
    if (o === et || (o === qe || o === dt) && i === Xr) {
      j = pt;
      var k = y && w === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[_]
      );
      v -= k - n.width, v *= u ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, f && Ap), d = m === !0 ? Np({
    x: v,
    y: p
  }, at(r)) : {
    x: v,
    y: p
  };
  if (v = d.x, p = d.y, u) {
    var I;
    return Object.assign({}, P, (I = {}, I[E] = O ? "0" : "", I[j] = C ? "0" : "", I.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", I));
  }
  return Object.assign({}, P, (t = {}, t[E] = O ? p + "px" : "", t[j] = C ? v + "px" : "", t.transform = "", t));
}
function Mp(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, l = r.roundOffsets, u = l === void 0 ? !0 : l, f = {
    placement: xt(t.placement),
    variation: Rr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ka(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ka(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const _p = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mp,
  data: {}
};
var hn = {
  passive: !0
};
function Lp(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, l = a === void 0 ? !0 : a, u = at(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(m) {
    m.addEventListener("scroll", r.update, hn);
  }), l && u.addEventListener("resize", r.update, hn), function() {
    i && f.forEach(function(m) {
      m.removeEventListener("scroll", r.update, hn);
    }), l && u.removeEventListener("resize", r.update, hn);
  };
}
const Dp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Lp,
  data: {}
};
var Vp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vp[t];
  });
}
var Bp = {
  start: "end",
  end: "start"
};
function $a(e) {
  return e.replace(/start|end/g, function(t) {
    return Bp[t];
  });
}
function pi(e) {
  var t = at(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function fi(e) {
  return Or(Qt(e)).left + pi(e).scrollLeft;
}
function Fp(e, t) {
  var r = at(e), n = Qt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, l = 0, u = 0;
  if (o) {
    i = o.width, a = o.height;
    var f = _s();
    (f || !f && t === "fixed") && (l = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + fi(e),
    y: u
  };
}
function Up(e) {
  var t, r = Qt(e), n = pi(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = nr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = nr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + fi(e), u = -n.scrollTop;
  return It(o || r).direction === "rtl" && (l += nr(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function mi(e) {
  var t = It(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Fs(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0 ? e.ownerDocument.body : ct(e) && mi(e) ? e : Fs(Zn(e));
}
function Wr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Fs(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = at(n), a = o ? [i].concat(i.visualViewport || [], mi(n) ? n : []) : n, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Wr(Zn(a)))
  );
}
function Lo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zp(e, t) {
  var r = Or(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ja(e, t, r) {
  return t === Ns ? Lo(Fp(e, r)) : sr(t) ? zp(t, r) : Lo(Up(Qt(e)));
}
function Wp(e) {
  var t = Wr(Zn(e)), r = ["absolute", "fixed"].indexOf(It(e).position) >= 0, n = r && ct(e) ? nn(e) : e;
  return sr(n) ? t.filter(function(o) {
    return sr(o) && Ls(o, n) && St(o) !== "body";
  }) : [];
}
function Kp(e, t, r, n) {
  var o = t === "clippingParents" ? Wp(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], l = i.reduce(function(u, f) {
    var m = ja(e, f, n);
    return u.top = nr(m.top, u.top), u.right = $n(m.right, u.right), u.bottom = $n(m.bottom, u.bottom), u.left = nr(m.left, u.left), u;
  }, ja(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Us(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? xt(n) : null, i = n ? Rr(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, u;
  switch (o) {
    case qe:
      u = {
        x: a,
        y: t.y - r.height
      };
      break;
    case dt:
      u = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pt:
      u = {
        x: t.x + t.width,
        y: l
      };
      break;
    case et:
      u = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = o ? di(o) : null;
  if (f != null) {
    var m = f === "y" ? "height" : "width";
    switch (i) {
      case Cr:
        u[f] = u[f] - (t[m] / 2 - r[m] / 2);
        break;
      case Xr:
        u[f] = u[f] + (t[m] / 2 - r[m] / 2);
        break;
    }
  }
  return u;
}
function Jr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, l = r.boundary, u = l === void 0 ? dp : l, f = r.rootBoundary, m = f === void 0 ? Ns : f, y = r.elementContext, b = y === void 0 ? Vr : y, v = r.altBoundary, g = v === void 0 ? !1 : v, p = r.padding, x = p === void 0 ? 0 : p, C = Vs(typeof x != "number" ? x : Bs(x, rn)), O = b === Vr ? pp : Vr, j = e.rects.popper, E = e.elements[g ? O : b], S = Kp(sr(E) ? E : E.contextElement || Qt(e.elements.popper), u, m, a), w = Or(e.elements.reference), L = Us({
    reference: w,
    element: j,
    placement: o
  }), _ = Lo(Object.assign({}, j, L)), N = b === Vr ? _ : w, k = {
    top: S.top - N.top + C.top,
    bottom: N.bottom - S.bottom + C.bottom,
    left: S.left - N.left + C.left,
    right: N.right - S.right + C.right
  }, P = e.modifiersData.offset;
  if (b === Vr && P) {
    var d = P[o];
    Object.keys(k).forEach(function(I) {
      var A = [pt, dt].indexOf(I) >= 0 ? 1 : -1, K = [qe, dt].indexOf(I) >= 0 ? "y" : "x";
      k[I] += d[K] * A;
    });
  }
  return k;
}
function Hp(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, l = r.flipVariations, u = r.allowedAutoPlacements, f = u === void 0 ? Ms : u, m = Rr(n), y = m ? l ? Ra : Ra.filter(function(g) {
    return Rr(g) === m;
  }) : rn, b = y.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  b.length === 0 && (b = y);
  var v = b.reduce(function(g, p) {
    return g[p] = Jr(e, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[xt(p)], g;
  }, {});
  return Object.keys(v).sort(function(g, p) {
    return v[g] - v[p];
  });
}
function Gp(e) {
  if (xt(e) === li)
    return [];
  var t = Tn(e);
  return [$a(e), t, $a(t)];
}
function Yp(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, u = r.fallbackPlacements, f = r.padding, m = r.boundary, y = r.rootBoundary, b = r.altBoundary, v = r.flipVariations, g = v === void 0 ? !0 : v, p = r.allowedAutoPlacements, x = t.options.placement, C = xt(x), O = C === x, j = u || (O || !g ? [Tn(x)] : Gp(x)), E = [x].concat(j).reduce(function(V, W) {
      return V.concat(xt(W) === li ? Hp(t, {
        placement: W,
        boundary: m,
        rootBoundary: y,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : W);
    }, []), S = t.rects.reference, w = t.rects.popper, L = /* @__PURE__ */ new Map(), _ = !0, N = E[0], k = 0; k < E.length; k++) {
      var P = E[k], d = xt(P), I = Rr(P) === Cr, A = [qe, dt].indexOf(d) >= 0, K = A ? "width" : "height", z = Jr(t, {
        placement: P,
        boundary: m,
        rootBoundary: y,
        altBoundary: b,
        padding: f
      }), Z = A ? I ? pt : et : I ? dt : qe;
      S[K] > w[K] && (Z = Tn(Z));
      var te = Tn(Z), G = [];
      if (i && G.push(z[d] <= 0), l && G.push(z[Z] <= 0, z[te] <= 0), G.every(function(V) {
        return V;
      })) {
        N = P, _ = !1;
        break;
      }
      L.set(P, G);
    }
    if (_)
      for (var h = g ? 3 : 1, T = function(W) {
        var D = E.find(function(H) {
          var X = L.get(H);
          if (X)
            return X.slice(0, W).every(function(Y) {
              return Y;
            });
        });
        if (D)
          return N = D, "break";
      }, $ = h; $ > 0; $--) {
        var R = T($);
        if (R === "break") break;
      }
    t.placement !== N && (t.modifiersData[n]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const Qp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ia(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Aa(e) {
  return [qe, pt, dt, et].some(function(t) {
    return e[t] >= 0;
  });
}
function Xp(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Jr(t, {
    elementContext: "reference"
  }), l = Jr(t, {
    altBoundary: !0
  }), u = Ia(a, n), f = Ia(l, o, i), m = Aa(u), y = Aa(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: m,
    hasPopperEscaped: y
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": m,
    "data-popper-escaped": y
  });
}
const Jp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Xp
};
function Zp(e, t, r) {
  var n = xt(e), o = [et, qe].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], l = i[1];
  return a = a || 0, l = (l || 0) * o, [et, pt].indexOf(n) >= 0 ? {
    x: l,
    y: a
  } : {
    x: a,
    y: l
  };
}
function qp(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = Ms.reduce(function(m, y) {
    return m[y] = Zp(y, t.rects, i), m;
  }, {}), l = a[t.placement], u = l.x, f = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = a;
}
const ef = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qp
};
function tf(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Us({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const rf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: tf,
  data: {}
};
function nf(e) {
  return e === "x" ? "y" : "x";
}
function of(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, u = r.boundary, f = r.rootBoundary, m = r.altBoundary, y = r.padding, b = r.tether, v = b === void 0 ? !0 : b, g = r.tetherOffset, p = g === void 0 ? 0 : g, x = Jr(t, {
    boundary: u,
    rootBoundary: f,
    padding: y,
    altBoundary: m
  }), C = xt(t.placement), O = Rr(t.placement), j = !O, E = di(C), S = nf(E), w = t.modifiersData.popperOffsets, L = t.rects.reference, _ = t.rects.popper, N = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, k = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, d = {
    x: 0,
    y: 0
  };
  if (w) {
    if (i) {
      var I, A = E === "y" ? qe : et, K = E === "y" ? dt : pt, z = E === "y" ? "height" : "width", Z = w[E], te = Z + x[A], G = Z - x[K], h = v ? -_[z] / 2 : 0, T = O === Cr ? L[z] : _[z], $ = O === Cr ? -_[z] : -L[z], R = t.elements.arrow, V = v && R ? ui(R) : {
        width: 0,
        height: 0
      }, W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ds(), D = W[A], H = W[K], X = zr(0, L[z], V[z]), Y = j ? L[z] / 2 - h - X - D - k.mainAxis : T - X - D - k.mainAxis, J = j ? -L[z] / 2 + h + X + H + k.mainAxis : $ + X + H + k.mainAxis, me = t.elements.arrow && nn(t.elements.arrow), Q = me ? E === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, le = (I = P?.[E]) != null ? I : 0, Me = Z + Y - le - Q, Ue = Z + J - le, Se = zr(v ? $n(te, Me) : te, Z, v ? nr(G, Ue) : G);
      w[E] = Se, d[E] = Se - Z;
    }
    if (l) {
      var ze, ne = E === "x" ? qe : et, Ie = E === "x" ? dt : pt, ue = w[S], _e = S === "y" ? "height" : "width", oe = ue + x[ne], Je = ue - x[Ie], Ve = [qe, et].indexOf(C) !== -1, ie = (ze = P?.[S]) != null ? ze : 0, ge = Ve ? oe : ue - L[_e] - _[_e] - ie + k.altAxis, de = Ve ? ue + L[_e] + _[_e] - ie - k.altAxis : Je, Oe = v && Ve ? Pp(ge, ue, de) : zr(v ? ge : oe, ue, v ? de : Je);
      w[S] = Oe, d[S] = Oe - ue;
    }
    t.modifiersData[n] = d;
  }
}
const af = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: of,
  requiresIfExists: ["offset"]
};
function sf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lf(e) {
  return e === at(e) || !ct(e) ? pi(e) : sf(e);
}
function cf(e) {
  var t = e.getBoundingClientRect(), r = wr(t.width) / e.offsetWidth || 1, n = wr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function uf(e, t, r) {
  r === void 0 && (r = !1);
  var n = ct(t), o = ct(t) && cf(t), i = Qt(t), a = Or(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((St(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  mi(i)) && (l = lf(t)), ct(t) ? (u = Or(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : i && (u.x = fi(i))), {
    x: a.left + l.scrollLeft - u.x,
    y: a.top + l.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function df(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var u = t.get(l);
        u && o(u);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function pf(e) {
  var t = df(e);
  return Ep.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function ff(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function mf(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Na = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ma() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function hf(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? Na : o;
  return function(l, u, f) {
    f === void 0 && (f = i);
    var m = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Na, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, y = [], b = !1, v = {
      state: m,
      setOptions: function(C) {
        var O = typeof C == "function" ? C(m.options) : C;
        p(), m.options = Object.assign({}, i, m.options, O), m.scrollParents = {
          reference: sr(l) ? Wr(l) : l.contextElement ? Wr(l.contextElement) : [],
          popper: Wr(u)
        };
        var j = pf(mf([].concat(n, m.options.modifiers)));
        return m.orderedModifiers = j.filter(function(E) {
          return E.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var C = m.elements, O = C.reference, j = C.popper;
          if (Ma(O, j)) {
            m.rects = {
              reference: uf(O, nn(j), m.options.strategy === "fixed"),
              popper: ui(j)
            }, m.reset = !1, m.placement = m.options.placement, m.orderedModifiers.forEach(function(k) {
              return m.modifiersData[k.name] = Object.assign({}, k.data);
            });
            for (var E = 0; E < m.orderedModifiers.length; E++) {
              if (m.reset === !0) {
                m.reset = !1, E = -1;
                continue;
              }
              var S = m.orderedModifiers[E], w = S.fn, L = S.options, _ = L === void 0 ? {} : L, N = S.name;
              typeof w == "function" && (m = w({
                state: m,
                options: _,
                name: N,
                instance: v
              }) || m);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ff(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(m);
        });
      }),
      destroy: function() {
        p(), b = !0;
      }
    };
    if (!Ma(l, u))
      return v;
    v.setOptions(f).then(function(x) {
      !b && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function g() {
      m.orderedModifiers.forEach(function(x) {
        var C = x.name, O = x.options, j = O === void 0 ? {} : O, E = x.effect;
        if (typeof E == "function") {
          var S = E({
            state: m,
            name: C,
            instance: v,
            options: j
          }), w = function() {
          };
          y.push(S || w);
        }
      });
    }
    function p() {
      y.forEach(function(x) {
        return x();
      }), y = [];
    }
    return v;
  };
}
var gf = [Dp, rf, _p, wp, ef, Qp, af, Ip, Jp], yf = /* @__PURE__ */ hf({
  defaultModifiers: gf
});
function bf(e) {
  return typeof e == "string";
}
function zs(e, t, r) {
  return e === void 0 || bf(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function vf(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function _a(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ws(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = $e(r?.className, i, o?.className, n?.className), g = {
      ...r?.style,
      ...o?.style,
      ...n?.style
    }, p = {
      ...r,
      ...o,
      ...n
    };
    return v.length > 0 && (p.className = v), Object.keys(g).length > 0 && (p.style = g), {
      props: p,
      internalRef: void 0
    };
  }
  const a = vf({
    ...o,
    ...n
  }), l = _a(n), u = _a(o), f = t(a), m = $e(f?.className, r?.className, i, o?.className, n?.className), y = {
    ...f?.style,
    ...r?.style,
    ...o?.style,
    ...n?.style
  }, b = {
    ...f,
    ...r,
    ...u,
    ...l
  };
  return m.length > 0 && (b.className = m), Object.keys(y).length > 0 && (b.style = y), {
    props: b,
    internalRef: f.ref
  };
}
function Ks(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function xf(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : Ks(r, n), {
    props: l,
    internalRef: u
  } = Ws({
    ...i,
    externalSlotProps: a
  }), f = Gt(u, a?.ref, e.additionalProps?.ref);
  return zs(t, {
    ...l,
    ref: f
  }, n);
}
function Sf(e) {
  return parseInt(M.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function Ef(e) {
  return typeof e == "function" ? e() : e;
}
const jn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, l] = M.useState(null), u = Gt(/* @__PURE__ */ M.isValidElement(n) ? Sf(n) : null, r);
  if (ir(() => {
    i || l(Ef(o) || document.body);
  }, [o, i]), ir(() => {
    if (a && !i)
      return Mo(r, a), () => {
        Mo(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ M.isValidElement(n)) {
      const f = {
        ref: u
      };
      return /* @__PURE__ */ M.cloneElement(n, f);
    }
    return n;
  }
  return a && /* @__PURE__ */ Gl.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (jn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: s.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Qr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (jn.propTypes = ei(jn.propTypes));
function Tf(e) {
  return yt("MuiPopper", e);
}
rt("MuiPopper", ["root"]);
function Cf(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function In(e) {
  return typeof e == "function" ? e() : e;
}
function qn(e) {
  return e.nodeType !== void 0;
}
function wf(e) {
  return !qn(e);
}
const Of = (e) => {
  const {
    classes: t
  } = e;
  return At({
    root: ["root"]
  }, Tf, t);
}, Rf = {}, Pf = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: a,
    modifiers: l,
    open: u,
    placement: f,
    popperOptions: m,
    popperRef: y,
    slotProps: b = {},
    slots: v = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, C = M.useRef(null), O = Gt(C, r), j = M.useRef(null), E = Gt(j, y), S = M.useRef(E);
  ir(() => {
    S.current = E;
  }, [E]), M.useImperativeHandle(y, () => j.current, []);
  const w = Cf(f, i), [L, _] = M.useState(w), [N, k] = M.useState(In(n));
  M.useEffect(() => {
    j.current && j.current.forceUpdate();
  }), M.useEffect(() => {
    n && k(In(n));
  }, [n]), ir(() => {
    if (!N || !u)
      return;
    const K = (te) => {
      _(te.placement);
    };
    if (process.env.NODE_ENV !== "production" && N && qn(N) && N.nodeType === 1) {
      const te = N.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && te.top === 0 && te.left === 0 && te.right === 0 && te.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let z = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: te
      }) => {
        K(te);
      }
    }];
    l != null && (z = z.concat(l)), m && m.modifiers != null && (z = z.concat(m.modifiers));
    const Z = yf(N, C.current, {
      placement: w,
      ...m,
      modifiers: z
    });
    return S.current(Z), () => {
      Z.destroy(), S.current(null);
    };
  }, [N, a, l, u, m, w]);
  const P = {
    placement: L
  };
  g !== null && (P.TransitionProps = g);
  const d = Of(t), I = v.root ?? "div", A = xf({
    elementType: I,
    externalSlotProps: b.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: O
    },
    ownerState: t,
    className: d.root
  });
  return /* @__PURE__ */ c.jsx(I, {
    ...A,
    children: typeof o == "function" ? o(P) : o
  });
}), Hs = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: u = !1,
    modifiers: f,
    open: m,
    placement: y = "bottom",
    popperOptions: b = Rf,
    popperRef: v,
    style: g,
    transition: p = !1,
    slotProps: x = {},
    slots: C = {},
    ...O
  } = t, [j, E] = M.useState(!0), S = () => {
    E(!1);
  }, w = () => {
    E(!0);
  };
  if (!u && !m && (!p || j))
    return null;
  let L;
  if (i)
    L = i;
  else if (n) {
    const k = In(n);
    L = k && qn(k) ? Oa(k).body : Oa(null).body;
  }
  const _ = !m && u && (!p || j) ? "none" : void 0, N = p ? {
    in: m,
    onEnter: S,
    onExited: w
  } : void 0;
  return /* @__PURE__ */ c.jsx(jn, {
    disablePortal: l,
    container: L,
    children: /* @__PURE__ */ c.jsx(Pf, {
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: f,
      ref: r,
      open: p ? !j : m,
      placement: y,
      popperOptions: b,
      popperRef: v,
      slotProps: x,
      slots: C,
      ...O,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: _,
        ...g
      },
      TransitionProps: N,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: ar(s.oneOfType([Qr, s.object, s.func]), (e) => {
    if (e.open) {
      const t = In(e.anchorEl);
      if (t && qn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || wf(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Qr, s.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: s.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: si,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
process.env.NODE_ENV !== "production" && (s.node, s.object.isRequired);
function Tt(e) {
  return Du(e);
}
const kf = je(Hs, {
  name: "MuiPopper",
  slot: "Root"
})({}), hi = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = _u(), o = Tt({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: a,
    components: l,
    componentsProps: u,
    container: f,
    disablePortal: m,
    keepMounted: y,
    modifiers: b,
    open: v,
    placement: g,
    popperOptions: p,
    popperRef: x,
    transition: C,
    slots: O,
    slotProps: j,
    ...E
  } = o, S = O?.root ?? l?.Root, w = {
    anchorEl: i,
    container: f,
    disablePortal: m,
    keepMounted: y,
    modifiers: b,
    open: v,
    placement: g,
    popperOptions: p,
    popperRef: x,
    transition: C,
    ...E
  };
  return /* @__PURE__ */ c.jsx(kf, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: S
    },
    slotProps: j ?? u,
    ...w,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: s.oneOfType([Qr, s.object, s.func]),
  /**
   * Popper render function or node.
   */
  children: s.oneOfType([s.node, s.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: s.shape({
    Root: s.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: s.oneOfType([Qr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: s.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: s.arrayOf(s.shape({
    data: s.object,
    effect: s.func,
    enabled: s.bool,
    fn: s.func,
    name: s.any,
    options: s.object,
    phase: s.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: s.arrayOf(s.string),
    requiresIfExists: s.arrayOf(s.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: s.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: s.shape({
    modifiers: s.array,
    onFirstUpdate: s.func,
    placement: s.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: s.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: si,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: s.shape({
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: s.shape({
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: s.bool
});
const tt = Uu;
function $f(e) {
  return yt("MuiListSubheader", e);
}
rt("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const jf = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, a = {
    root: ["root", r !== "default" && `color${se(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return At(a, $f, t);
}, If = je("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${se(r.color)}`], !r.disableGutters && t.gutters, r.inset && t.inset, !r.disableSticky && t.sticky];
  }
})(tt(({
  theme: e
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (e.vars || e).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (e.vars || e).palette.background.paper
    }
  }]
}))), An = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: u = !1,
    inset: f = !1,
    ...m
  } = n, y = {
    ...n,
    color: i,
    component: a,
    disableGutters: l,
    disableSticky: u,
    inset: f
  }, b = jf(y);
  return /* @__PURE__ */ c.jsx(If, {
    as: a,
    className: $e(b.root, o),
    ref: r,
    ownerState: y,
    ...m
  });
});
An && (An.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: s.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: s.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: s.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
function Af(e) {
  return yt("MuiPaper", e);
}
rt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Nf = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return At(i, Af, o);
}, Mf = je("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(tt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), gi = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiPaper"
  }), o = Nd(), {
    className: i,
    component: a = "div",
    elevation: l = 1,
    square: u = !1,
    variant: f = "elevation",
    ...m
  } = n, y = {
    ...n,
    component: a,
    elevation: l,
    square: u,
    variant: f
  }, b = Nf(y);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ c.jsx(Mf, {
    as: a,
    ownerState: y,
    className: $e(b.root, i),
    ref: r,
    ...m,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Pn("#fff", Io(l))}, ${Pn("#fff", Io(l))})`
        }
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: ar(Is, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: s.bool,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: s.oneOfType([s.oneOf(["elevation", "outlined"]), s.string])
});
function _f(e) {
  return yt("MuiSvgIcon", e);
}
rt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Lf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${se(t)}`, `fontSize${se(r)}`]
  };
  return At(o, _f, n);
}, Df = je("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${se(r.color)}`], t[`fontSize${se(r.fontSize)}`]];
  }
})(tt(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (t) => !t.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), Nn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: m = !1,
    titleAccess: y,
    viewBox: b = "0 0 24 24",
    ...v
  } = n, g = /* @__PURE__ */ M.isValidElement(o) && o.type === "svg", p = {
    ...n,
    color: a,
    component: l,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: b,
    hasSvgAsChild: g
  }, x = {};
  m || (x.viewBox = b);
  const C = Lf(p);
  return /* @__PURE__ */ c.jsxs(Df, {
    as: l,
    className: $e(C.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": y ? void 0 : !0,
    role: y ? "img" : void 0,
    ref: r,
    ...x,
    ...v,
    ...g && o.props,
    ownerState: p,
    children: [g ? o.props.children : o, y ? /* @__PURE__ */ c.jsx("title", {
      children: y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Nn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: s.oneOfType([s.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: s.oneOfType([s.oneOf(["inherit", "large", "medium", "small"]), s.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: s.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: s.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: s.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: s.string
});
Nn.muiName = "SvgIcon";
function yi(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ c.jsx(Nn, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Nn.muiName, /* @__PURE__ */ M.memo(/* @__PURE__ */ M.forwardRef(r));
}
function Vf(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function Bf(e) {
  return typeof e.main == "string";
}
function Ff(e, t = []) {
  if (!Bf(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function er(e = []) {
  return ([, t]) => t && Ff(t, e);
}
function Uf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function zf(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !Uf(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Wf = ar(s.elementType, zf);
function La(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Da = {};
function Gs(e, t) {
  const r = M.useRef(Da);
  return r.current === Da && (r.current = e(t)), r;
}
class Mn {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Mn();
  }
  static use() {
    const t = Gs(Mn.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Hf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function Kf() {
  return Mn.use();
}
function Hf() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Do.apply(null, arguments);
}
function Gf(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Vo(e, t) {
  return Vo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Vo(e, t);
}
function Yf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Vo(e, t);
}
const Va = ot.createContext(null);
function Qf(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bi(e, t) {
  var r = function(i) {
    return t && yn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ol.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Xf(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, l = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var f = n[u][a];
        l[n[u][a]] = r(f);
      }
    l[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function tr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Jf(e, t) {
  return bi(e.children, function(r) {
    return bn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: tr(r, "appear", e),
      enter: tr(r, "enter", e),
      exit: tr(r, "exit", e)
    });
  });
}
function Zf(e, t, r) {
  var n = bi(e.children), o = Xf(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (yn(a)) {
      var l = i in t, u = i in n, f = t[i], m = yn(f) && !f.props.in;
      u && (!l || m) ? o[i] = bn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: tr(a, "exit", e),
        enter: tr(a, "enter", e)
      }) : !u && l && !m ? o[i] = bn(a, {
        in: !1
      }) : u && l && yn(f) && (o[i] = bn(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: tr(a, "exit", e),
        enter: tr(a, "enter", e)
      }));
    }
  }), o;
}
var qf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, em = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, vi = /* @__PURE__ */ (function(e) {
  Yf(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Qf(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, l = i.handleExited, u = i.firstRender;
    return {
      children: u ? Jf(o, l) : Zf(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = bi(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var u = Do({}, l.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, l = Gf(o, ["component", "childFactory"]), u = this.state.contextValue, f = qf(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ot.createElement(Va.Provider, {
      value: u
    }, f) : /* @__PURE__ */ ot.createElement(Va.Provider, {
      value: u
    }, /* @__PURE__ */ ot.createElement(i, l, f));
  }, t;
})(ot.Component);
vi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: s.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: s.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: s.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: s.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: s.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: s.func
} : {};
vi.defaultProps = em;
const tm = [];
function rm(e) {
  M.useEffect(e, tm);
}
class xi {
  static create() {
    return new xi();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function nm() {
  const e = Gs(xi.create).current;
  return rm(e.disposeEffect), e;
}
function Ys(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: u,
    timeout: f
  } = e, [m, y] = M.useState(!1), b = $e(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = $e(r.child, m && r.childLeaving, n && r.childPulsate);
  return !l && !m && y(!0), M.useEffect(() => {
    if (!l && u != null) {
      const p = setTimeout(u, f);
      return () => {
        clearTimeout(p);
      };
    }
  }, [u, l, f]), /* @__PURE__ */ c.jsx("span", {
    className: b,
    style: v,
    children: /* @__PURE__ */ c.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Ys.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object.isRequired,
  className: s.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: s.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: s.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: s.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: s.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: s.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: s.number,
  /**
   * exit delay
   */
  timeout: s.number.isRequired
});
const st = rt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Bo = 550, om = 80, im = Zr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, am = Zr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, sm = Zr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, lm = je("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), cm = je(Ys, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${st.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${im};
    animation-duration: ${Bo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${st.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${st.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${st.childLeaving} {
    opacity: 0;
    animation-name: ${am};
    animation-duration: ${Bo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${st.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${sm};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Qs = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...l
  } = n, [u, f] = M.useState([]), m = M.useRef(0), y = M.useRef(null);
  M.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [u]);
  const b = M.useRef(!1), v = nm(), g = M.useRef(null), p = M.useRef(null), x = M.useCallback((E) => {
    const {
      pulsate: S,
      rippleX: w,
      rippleY: L,
      rippleSize: _,
      cb: N
    } = E;
    f((k) => [...k, /* @__PURE__ */ c.jsx(cm, {
      classes: {
        ripple: $e(i.ripple, st.ripple),
        rippleVisible: $e(i.rippleVisible, st.rippleVisible),
        ripplePulsate: $e(i.ripplePulsate, st.ripplePulsate),
        child: $e(i.child, st.child),
        childLeaving: $e(i.childLeaving, st.childLeaving),
        childPulsate: $e(i.childPulsate, st.childPulsate)
      },
      timeout: Bo,
      pulsate: S,
      rippleX: w,
      rippleY: L,
      rippleSize: _
    }, m.current)]), m.current += 1, y.current = N;
  }, [i]), C = M.useCallback((E = {}, S = {}, w = () => {
  }) => {
    const {
      pulsate: L = !1,
      center: _ = o || S.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = S;
    if (E?.type === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    E?.type === "touchstart" && (b.current = !0);
    const k = N ? null : p.current, P = k ? k.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let d, I, A;
    if (_ || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      d = Math.round(P.width / 2), I = Math.round(P.height / 2);
    else {
      const {
        clientX: K,
        clientY: z
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      d = Math.round(K - P.left), I = Math.round(z - P.top);
    }
    if (_)
      A = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const K = Math.max(Math.abs((k ? k.clientWidth : 0) - d), d) * 2 + 2, z = Math.max(Math.abs((k ? k.clientHeight : 0) - I), I) * 2 + 2;
      A = Math.sqrt(K ** 2 + z ** 2);
    }
    E?.touches ? g.current === null && (g.current = () => {
      x({
        pulsate: L,
        rippleX: d,
        rippleY: I,
        rippleSize: A,
        cb: w
      });
    }, v.start(om, () => {
      g.current && (g.current(), g.current = null);
    })) : x({
      pulsate: L,
      rippleX: d,
      rippleY: I,
      rippleSize: A,
      cb: w
    });
  }, [o, x, v]), O = M.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), j = M.useCallback((E, S) => {
    if (v.clear(), E?.type === "touchend" && g.current) {
      g.current(), g.current = null, v.start(0, () => {
        j(E, S);
      });
      return;
    }
    g.current = null, f((w) => w.length > 0 ? w.slice(1) : w), y.current = S;
  }, [v]);
  return M.useImperativeHandle(r, () => ({
    pulsate: O,
    start: C,
    stop: j
  }), [O, C, j]), /* @__PURE__ */ c.jsx(lm, {
    className: $e(st.root, i.root, a),
    ref: p,
    ...l,
    children: /* @__PURE__ */ c.jsx(vi, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Qs.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: s.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string
});
function um(e) {
  return yt("MuiButtonBase", e);
}
const dm = rt("MuiButtonBase", ["root", "disabled", "focusVisible"]), pm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = At({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, um, o);
  return r && n && (a.root += ` ${n}`), a;
}, fm = je("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${dm.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), _n = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: u = "button",
    disabled: f = !1,
    disableRipple: m = !1,
    disableTouchRipple: y = !1,
    focusRipple: b = !1,
    focusVisibleClassName: v,
    LinkComponent: g = "a",
    onBlur: p,
    onClick: x,
    onContextMenu: C,
    onDragLeave: O,
    onFocus: j,
    onFocusVisible: E,
    onKeyDown: S,
    onKeyUp: w,
    onMouseDown: L,
    onMouseLeave: _,
    onMouseUp: N,
    onTouchEnd: k,
    onTouchMove: P,
    onTouchStart: d,
    tabIndex: I = 0,
    TouchRippleProps: A,
    touchRippleRef: K,
    type: z,
    ...Z
  } = n, te = M.useRef(null), G = Kf(), h = Gt(G.ref, K), [T, $] = M.useState(!1);
  f && T && $(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      $(!0), te.current.focus();
    }
  }), []);
  const R = G.shouldMount && !m && !f;
  M.useEffect(() => {
    T && b && !m && G.pulsate();
  }, [m, b, T, G]);
  const V = kt(G, "start", L, y), W = kt(G, "stop", C, y), D = kt(G, "stop", O, y), H = kt(G, "stop", N, y), X = kt(G, "stop", (oe) => {
    T && oe.preventDefault(), _ && _(oe);
  }, y), Y = kt(G, "start", d, y), J = kt(G, "stop", k, y), me = kt(G, "stop", P, y), Q = kt(G, "stop", (oe) => {
    La(oe.target) || $(!1), p && p(oe);
  }, !1), le = Ut((oe) => {
    te.current || (te.current = oe.currentTarget), La(oe.target) && ($(!0), E && E(oe)), j && j(oe);
  }), Me = () => {
    const oe = te.current;
    return u && u !== "button" && !(oe.tagName === "A" && oe.href);
  }, Ue = Ut((oe) => {
    b && !oe.repeat && T && oe.key === " " && G.stop(oe, () => {
      G.start(oe);
    }), oe.target === oe.currentTarget && Me() && oe.key === " " && oe.preventDefault(), S && S(oe), oe.target === oe.currentTarget && Me() && oe.key === "Enter" && !f && (oe.preventDefault(), x && x(oe));
  }), Se = Ut((oe) => {
    b && oe.key === " " && T && !oe.defaultPrevented && G.stop(oe, () => {
      G.pulsate(oe);
    }), w && w(oe), x && oe.target === oe.currentTarget && Me() && oe.key === " " && !oe.defaultPrevented && x(oe);
  });
  let ze = u;
  ze === "button" && (Z.href || Z.to) && (ze = g);
  const ne = {};
  ze === "button" ? (ne.type = z === void 0 ? "button" : z, ne.disabled = f) : (!Z.href && !Z.to && (ne.role = "button"), f && (ne["aria-disabled"] = f));
  const Ie = Gt(r, te), ue = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: m,
    disableTouchRipple: y,
    focusRipple: b,
    tabIndex: I,
    focusVisible: T
  }, _e = pm(ue);
  return /* @__PURE__ */ c.jsxs(fm, {
    as: ze,
    className: $e(_e.root, l),
    ownerState: ue,
    onBlur: Q,
    onClick: x,
    onContextMenu: W,
    onFocus: le,
    onKeyDown: Ue,
    onKeyUp: Se,
    onMouseDown: V,
    onMouseLeave: X,
    onMouseUp: H,
    onDragLeave: D,
    onTouchEnd: J,
    onTouchMove: me,
    onTouchStart: Y,
    ref: Ie,
    tabIndex: f ? -1 : I,
    type: z,
    ...ne,
    ...Z,
    children: [a, R ? /* @__PURE__ */ c.jsx(Qs, {
      ref: h,
      center: i,
      ...A
    }) : null]
  });
});
function kt(e, t, r, n = !1) {
  return Ut((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (_n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: si,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: s.bool,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Wf,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: s.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: s.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: s.string,
  /**
   * @ignore
   */
  href: s.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: s.elementType,
  /**
   * @ignore
   */
  onBlur: s.func,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * @ignore
   */
  onContextMenu: s.func,
  /**
   * @ignore
   */
  onDragLeave: s.func,
  /**
   * @ignore
   */
  onFocus: s.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * @ignore
   */
  onMouseDown: s.func,
  /**
   * @ignore
   */
  onMouseLeave: s.func,
  /**
   * @ignore
   */
  onMouseUp: s.func,
  /**
   * @ignore
   */
  onTouchEnd: s.func,
  /**
   * @ignore
   */
  onTouchMove: s.func,
  /**
   * @ignore
   */
  onTouchStart: s.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @default 0
   */
  tabIndex: s.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: s.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: s.oneOfType([s.func, s.shape({
    current: s.shape({
      pulsate: s.func.isRequired,
      start: s.func.isRequired,
      stop: s.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: s.oneOfType([s.oneOf(["button", "reset", "submit"]), s.string])
});
function mm(e) {
  return yt("MuiCircularProgress", e);
}
rt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Vt = 44, Fo = Zr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Uo = Zr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, hm = typeof Fo != "string" ? Za`
        animation: ${Fo} 1.4s linear infinite;
      ` : null, gm = typeof Uo != "string" ? Za`
        animation: ${Uo} 1.4s ease-in-out infinite;
      ` : null, ym = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${se(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${se(r)}`, o && "circleDisableShrink"]
  };
  return At(i, mm, t);
}, bm = je("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${se(r.color)}`]];
  }
})(tt(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: hm || {
      animation: `${Fo} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(er()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), vm = je("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), xm = je("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${se(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(tt(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: gm || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Uo} 1.4s ease-in-out infinite`
    }
  }]
}))), Xs = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: u,
    thickness: f = 3.6,
    value: m = 0,
    variant: y = "indeterminate",
    ...b
  } = n, v = {
    ...n,
    color: i,
    disableShrink: a,
    size: l,
    thickness: f,
    value: m,
    variant: y
  }, g = ym(v), p = {}, x = {}, C = {};
  if (y === "determinate") {
    const O = 2 * Math.PI * ((Vt - f) / 2);
    p.strokeDasharray = O.toFixed(3), C["aria-valuenow"] = Math.round(m), p.strokeDashoffset = `${((100 - m) / 100 * O).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ c.jsx(bm, {
    className: $e(g.root, o),
    style: {
      width: l,
      height: l,
      ...x,
      ...u
    },
    ownerState: v,
    ref: r,
    role: "progressbar",
    ...C,
    ...b,
    children: /* @__PURE__ */ c.jsx(vm, {
      className: g.svg,
      ownerState: v,
      viewBox: `${Vt / 2} ${Vt / 2} ${Vt} ${Vt}`,
      children: /* @__PURE__ */ c.jsx(xm, {
        className: g.circle,
        style: p,
        ownerState: v,
        cx: Vt,
        cy: Vt,
        r: (Vt - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Xs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: s.oneOfType([s.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: ar(s.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: s.oneOfType([s.number, s.string]),
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: s.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: s.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: s.oneOf(["determinate", "indeterminate"])
});
function Sm(e) {
  return yt("MuiIconButton", e);
}
const Ba = rt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Em = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: a
  } = e, l = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${se(n)}`, o && `edge${se(o)}`, `size${se(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return At(l, Sm, t);
}, Tm = je(_n, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${se(r.color)}`], r.edge && t[`edge${se(r.edge)}`], t[`size${se(r.size)}`]];
  }
})(tt(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), tt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(er()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(er()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Ba.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Ba.loading}`]: {
    color: "transparent"
  }
}))), Cm = je("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Si = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: l = "default",
    disabled: u = !1,
    disableFocusRipple: f = !1,
    size: m = "medium",
    id: y,
    loading: b = null,
    loadingIndicator: v,
    ...g
  } = n, p = ni(y), x = v ?? /* @__PURE__ */ c.jsx(Xs, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), C = {
    ...n,
    edge: o,
    color: l,
    disabled: u,
    disableFocusRipple: f,
    loading: b,
    loadingIndicator: x,
    size: m
  }, O = Em(C);
  return /* @__PURE__ */ c.jsxs(Tm, {
    id: b ? p : y,
    className: $e(O.root, a),
    centerRipple: !0,
    focusRipple: !f,
    disabled: u || b,
    ref: r,
    ...g,
    ownerState: C,
    children: [typeof b == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ c.jsx(Cm, {
        className: O.loadingIndicator,
        ownerState: C,
        children: b && x
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (Si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ar(s.node, (e) => M.Children.toArray(e.children).some((r) => /* @__PURE__ */ M.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: s.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: s.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: s.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: s.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium", "large"]), s.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const wm = yi(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function Om(e) {
  return yt("MuiChip", e);
}
const he = rt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
function Kr(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...u
  } = t, {
    component: f,
    slots: m = {
      [e]: void 0
    },
    slotProps: y = {
      [e]: void 0
    },
    ...b
  } = i, v = m[e] || n, g = Ks(y[e], o), {
    props: {
      component: p,
      ...x
    },
    internalRef: C
  } = Ws({
    className: r,
    ...u,
    externalForwardedProps: e === "root" ? b : void 0,
    externalSlotProps: g
  }), O = Gt(C, g?.ref, t.ref), j = e === "root" ? p || f : p, E = zs(v, {
    ...e === "root" && !f && !m[e] && a,
    ...e !== "root" && !m[e] && a,
    ...x,
    ...j && !l && {
      as: j
    },
    ...j && l && {
      component: j
    },
    ref: O
  }, o);
  return [v, E];
}
const Rm = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: u
  } = e, f = {
    root: ["root", u, r && "disabled", `size${se(n)}`, `color${se(o)}`, l && "clickable", l && `clickableColor${se(o)}`, a && "deletable", a && `deletableColor${se(o)}`, `${u}${se(o)}`],
    label: ["label", `label${se(n)}`],
    avatar: ["avatar", `avatar${se(n)}`, `avatarColor${se(o)}`],
    icon: ["icon", `icon${se(n)}`, `iconColor${se(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${se(n)}`, `deleteIconColor${se(o)}`, `deleteIcon${se(u)}Color${se(o)}`]
  };
  return At(f, Om, t);
}, Pm = je("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      color: n,
      iconColor: o,
      clickable: i,
      onDelete: a,
      size: l,
      variant: u
    } = r;
    return [{
      [`& .${he.avatar}`]: t.avatar
    }, {
      [`& .${he.avatar}`]: t[`avatar${se(l)}`]
    }, {
      [`& .${he.avatar}`]: t[`avatarColor${se(n)}`]
    }, {
      [`& .${he.icon}`]: t.icon
    }, {
      [`& .${he.icon}`]: t[`icon${se(l)}`]
    }, {
      [`& .${he.icon}`]: t[`iconColor${se(o)}`]
    }, {
      [`& .${he.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${se(l)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIconColor${se(n)}`]
    }, {
      [`& .${he.deleteIcon}`]: t[`deleteIcon${se(u)}Color${se(n)}`]
    }, t.root, t[`size${se(l)}`], t[`color${se(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${se(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${se(n)}`], t[u], t[`${u}${se(n)}`]];
  }
})(tt(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${he.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${he.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${he.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${he.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${he.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${he.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${he.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: e.alpha((e.vars || e).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.alpha((e.vars || e).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${he.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${he.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(er(["contrastText"])).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        backgroundColor: (e.vars || e).palette[r].main,
        color: (e.vars || e).palette[r].contrastText,
        [`& .${he.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${he.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${he.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(er(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${he.focusVisible}`]: {
          background: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(er(["dark"])).map(([r]) => ({
      props: {
        color: r,
        clickable: !0
      },
      style: {
        [`&:hover, &.${he.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette[r].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
        [`&.${he.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${he.avatar}`]: {
          marginLeft: 4
        },
        [`& .${he.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${he.icon}`]: {
          marginLeft: 4
        },
        [`& .${he.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${he.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${he.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(er()).map(([r]) => ({
      props: {
        variant: "outlined",
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[r].main, 0.7)}`,
        [`&.${he.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${he.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${he.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), km = je("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      size: n
    } = r;
    return [t.label, t[`label${se(n)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function Fa(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Js = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: a,
    color: l = "default",
    component: u,
    deleteIcon: f,
    disabled: m = !1,
    icon: y,
    label: b,
    onClick: v,
    onDelete: g,
    onKeyDown: p,
    onKeyUp: x,
    size: C = "medium",
    variant: O = "filled",
    tabIndex: j,
    skipFocusWhenDisabled: E = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: S = {},
    slotProps: w = {},
    ...L
  } = n, _ = M.useRef(null), N = Gt(_, r), k = (D) => {
    D.stopPropagation(), g && g(D);
  }, P = (D) => {
    D.currentTarget === D.target && Fa(D) && D.preventDefault(), p && p(D);
  }, d = (D) => {
    D.currentTarget === D.target && g && Fa(D) && g(D), x && x(D);
  }, I = a !== !1 && v ? !0 : a, A = I || g ? _n : u || "div", K = {
    ...n,
    component: A,
    disabled: m,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ M.isValidElement(y) && y.props.color || l,
    onDelete: !!g,
    clickable: I,
    variant: O
  }, z = Rm(K), Z = A === _n ? {
    component: u || "div",
    focusVisibleClassName: z.focusVisible,
    ...g && {
      disableRipple: !0
    }
  } : {};
  let te = null;
  g && (te = f && /* @__PURE__ */ M.isValidElement(f) ? /* @__PURE__ */ M.cloneElement(f, {
    className: $e(f.props.className, z.deleteIcon),
    onClick: k
  }) : /* @__PURE__ */ c.jsx(wm, {
    className: z.deleteIcon,
    onClick: k
  }));
  let G = null;
  o && /* @__PURE__ */ M.isValidElement(o) && (G = /* @__PURE__ */ M.cloneElement(o, {
    className: $e(z.avatar, o.props.className)
  }));
  let h = null;
  y && /* @__PURE__ */ M.isValidElement(y) && (h = /* @__PURE__ */ M.cloneElement(y, {
    className: $e(z.icon, y.props.className)
  })), process.env.NODE_ENV !== "production" && G && h && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
  const T = {
    slots: S,
    slotProps: w
  }, [$, R] = Kr("root", {
    elementType: Pm,
    externalForwardedProps: {
      ...T,
      ...L
    },
    ownerState: K,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: N,
    className: $e(z.root, i),
    additionalProps: {
      disabled: I && m ? !0 : void 0,
      tabIndex: E && m ? -1 : j,
      ...Z
    },
    getSlotProps: (D) => ({
      ...D,
      onClick: (H) => {
        D.onClick?.(H), v?.(H);
      },
      onKeyDown: (H) => {
        D.onKeyDown?.(H), P(H);
      },
      onKeyUp: (H) => {
        D.onKeyUp?.(H), d(H);
      }
    })
  }), [V, W] = Kr("label", {
    elementType: km,
    externalForwardedProps: T,
    ownerState: K,
    className: z.label
  });
  return /* @__PURE__ */ c.jsxs($, {
    as: A,
    ...R,
    children: [G || h, /* @__PURE__ */ c.jsx(V, {
      ...W,
      children: b
    }), te]
  });
});
process.env.NODE_ENV !== "production" && (Js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: s.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Vf,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: s.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: s.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * Icon element.
   */
  icon: s.element,
  /**
   * The content of the component.
   */
  label: s.node,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["medium", "small"]), s.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: s.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: s.shape({
    label: s.oneOfType([s.func, s.object]),
    root: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: s.shape({
    label: s.elementType,
    root: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @ignore
   */
  tabIndex: s.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: s.oneOfType([s.oneOf(["filled", "outlined"]), s.string])
});
const vt = rt("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Oo = {
  ...vt,
  ...rt("MuiInput", ["root", "underline", "input"])
}, Ua = {
  ...vt,
  ...rt("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, br = {
  ...vt,
  ...rt("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, $m = yi(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), jm = yi(/* @__PURE__ */ c.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function Im(e) {
  return yt("MuiAutocomplete", e);
}
const pe = rt("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var za, Wa;
const Am = (e) => {
  const {
    classes: t,
    disablePortal: r,
    expanded: n,
    focused: o,
    fullWidth: i,
    hasClearIcon: a,
    hasPopupIcon: l,
    inputFocused: u,
    popupOpen: f,
    size: m
  } = e, y = {
    root: ["root", n && "expanded", o && "focused", i && "fullWidth", a && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", u && "inputFocused"],
    tag: ["tag", `tagSize${se(m)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", f && "popupIndicatorOpen"],
    popper: ["popper", r && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return At(y, Im, t);
}, Nm = je("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e, {
      fullWidth: n,
      hasClearIcon: o,
      hasPopupIcon: i,
      inputFocused: a,
      size: l
    } = r;
    return [{
      [`& .${pe.tag}`]: t.tag
    }, {
      [`& .${pe.tag}`]: t[`tagSize${se(l)}`]
    }, {
      [`& .${pe.inputRoot}`]: t.inputRoot
    }, {
      [`& .${pe.input}`]: t.input
    }, {
      [`& .${pe.input}`]: a && t.inputFocused
    }, t.root, n && t.fullWidth, i && t.hasPopupIcon, o && t.hasClearIcon];
  }
})({
  [`&.${pe.focused} .${pe.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${pe.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${pe.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${pe.inputRoot}`]: {
    [`.${pe.hasPopupIcon}&, .${pe.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${pe.hasPopupIcon}.${pe.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${pe.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${Oo.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Oo.root}.${vt.sizeSmall}`]: {
    [`& .${Oo.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Ua.root}`]: {
    padding: 9,
    [`.${pe.hasPopupIcon}&, .${pe.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${pe.hasPopupIcon}.${pe.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${pe.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${pe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${Ua.root}.${vt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${pe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${br.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${pe.hasPopupIcon}&, .${pe.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${pe.hasPopupIcon}.${pe.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${br.input}`]: {
      padding: "7px 4px"
    },
    [`& .${pe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${br.root}.${vt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${br.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${vt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${br.root}.${vt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${pe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${br.root}.${vt.hiddenLabel}.${vt.sizeSmall}`]: {
    [`& .${pe.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${pe.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${pe.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${pe.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${pe.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), Mm = je("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment"
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), _m = je(Si, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator"
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Lm = je(Si, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.popupIndicator, r.popupOpen && t.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), Dm = je(hi, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [{
      [`& .${pe.option}`]: t.option
    }, t.popper, r.disablePortal && t.popperDisablePortal];
  }
})(tt(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), Vm = je(gi, {
  name: "MuiAutocomplete",
  slot: "Paper"
})(tt(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), Bm = je("div", {
  name: "MuiAutocomplete",
  slot: "Loading"
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Fm = je("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions"
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), Um = je("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox"
})(tt(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${pe.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${pe.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${pe.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
      [`&.${pe.focused}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${pe.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  }
}))), zm = je(An, {
  name: "MuiAutocomplete",
  slot: "GroupLabel"
})(tt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Wm = je("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl"
})({
  padding: 0,
  [`& .${pe.option}`]: {
    paddingLeft: 24
  }
}), Zs = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: o = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: l = !1,
    ChipProps: u,
    className: f,
    clearIcon: m = za || (za = /* @__PURE__ */ c.jsx($m, {
      fontSize: "small"
    })),
    clearOnBlur: y = !n.freeSolo,
    clearOnEscape: b = !1,
    clearText: v = "Clear",
    closeText: g = "Close",
    componentsProps: p,
    defaultValue: x = n.multiple ? [] : null,
    disableClearable: C = !1,
    disableCloseOnSelect: O = !1,
    disabled: j = !1,
    disabledItemsFocusable: E = !1,
    disableListWrap: S = !1,
    disablePortal: w = !1,
    filterOptions: L,
    filterSelectedOptions: _ = !1,
    forcePopupIcon: N = "auto",
    freeSolo: k = !1,
    fullWidth: P = !1,
    getLimitTagsText: d = (be) => `+${be}`,
    getOptionDisabled: I,
    getOptionKey: A,
    getOptionLabel: K,
    isOptionEqualToValue: z,
    groupBy: Z,
    handleHomeEndKeys: te = !n.freeSolo,
    id: G,
    includeInputInList: h = !1,
    inputValue: T,
    limitTags: $ = -1,
    ListboxComponent: R,
    ListboxProps: V,
    loading: W = !1,
    loadingText: D = "Loading…",
    multiple: H = !1,
    noOptionsText: X = "No options",
    onChange: Y,
    onClose: J,
    onHighlightChange: me,
    onInputChange: Q,
    onOpen: le,
    open: Me,
    openOnFocus: Ue = !1,
    openText: Se = "Open",
    options: ze,
    PaperComponent: ne,
    PopperComponent: Ie,
    popupIcon: ue = Wa || (Wa = /* @__PURE__ */ c.jsx(jm, {})),
    readOnly: _e = !1,
    renderGroup: oe,
    renderInput: Je,
    renderOption: Ve,
    renderTags: ie,
    renderValue: ge,
    selectOnFocus: de = !n.freeSolo,
    size: Oe = "medium",
    slots: He = {},
    slotProps: Ge = {},
    value: Re,
    ...mt
  } = n, {
    getRootProps: on,
    getInputProps: ht,
    getInputLabelProps: eo,
    getPopupIndicatorProps: Ct,
    getClearProps: gt,
    getItemProps: an,
    getListboxProps: to,
    getOptionProps: kr,
    value: Nt,
    dirty: wt,
    expanded: Xt,
    id: Ot,
    popupOpen: Rt,
    focused: Mt,
    focusedItem: ro,
    anchorEl: Jt,
    setAnchorEl: sn,
    inputValue: no,
    groupedOptions: cr
  } = up({
    ...n,
    componentName: "Autocomplete"
  }), ur = !C && !j && wt && !_e, $r = (!k || N === !0) && N !== !1, {
    onMouseDown: oo
  } = ht(), {
    ref: io,
    ...ao
  } = to(), jr = K || ((be) => be.label ?? be), We = {
    ...n,
    disablePortal: w,
    expanded: Xt,
    focused: Mt,
    fullWidth: P,
    getOptionLabel: jr,
    hasClearIcon: ur,
    hasPopupIcon: $r,
    inputFocused: ro === -1,
    popupOpen: Rt,
    size: Oe
  }, Ye = Am(We), _t = {
    slots: {
      paper: ne,
      popper: Ie,
      ...He
    },
    slotProps: {
      chip: u,
      listbox: V,
      ...p,
      ...Ge
    }
  }, [lo, Ir] = Kr("listbox", {
    elementType: Um,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ye.listbox,
    additionalProps: ao,
    ref: io
  }), [ln, U] = Kr("paper", {
    elementType: gi,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ye.paper
  }), [B, ee] = Kr("popper", {
    elementType: hi,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ye.popper,
    additionalProps: {
      disablePortal: w,
      style: {
        width: Jt ? Jt.clientWidth : null
      },
      role: "presentation",
      anchorEl: Jt,
      open: Rt
    }
  });
  let ae;
  const ce = (be) => ({
    className: Ye.tag,
    disabled: j,
    ...an(be)
  });
  if (H ? Nt.length > 0 && (ie ? ae = ie(Nt, ce, We) : ge ? ae = ge(Nt, ce, We) : ae = Nt.map((be, Lt) => {
    const {
      key: Dt,
      ...Ar
    } = ce({
      index: Lt
    });
    return /* @__PURE__ */ c.jsx(Js, {
      label: jr(be),
      size: Oe,
      ...Ar,
      ..._t.slotProps.chip
    }, Dt);
  })) : ge && Nt != null && (ae = ge(Nt, ce, We)), $ > -1 && Array.isArray(ae)) {
    const be = ae.length - $;
    !Mt && be > 0 && (ae = ae.splice(0, $), ae.push(/* @__PURE__ */ c.jsx("span", {
      className: Ye.tag,
      children: d(be)
    }, ae.length)));
  }
  const Be = oe || ((be) => /* @__PURE__ */ c.jsxs("li", {
    children: [/* @__PURE__ */ c.jsx(zm, {
      className: Ye.groupLabel,
      ownerState: We,
      component: "div",
      children: be.group
    }), /* @__PURE__ */ c.jsx(Wm, {
      className: Ye.groupUl,
      ownerState: We,
      children: be.children
    })]
  }, be.key)), dr = Ve || ((be, Lt) => {
    const {
      key: Dt,
      ...Ar
    } = be;
    return /* @__PURE__ */ c.jsx("li", {
      ...Ar,
      children: jr(Lt)
    }, Dt);
  }), Ti = (be, Lt) => {
    const Dt = kr({
      option: be,
      index: Lt
    });
    return dr({
      ...Dt,
      className: Ye.option
    }, be, {
      selected: Dt["aria-selected"],
      index: Lt,
      inputValue: no
    }, We);
  }, Ci = _t.slotProps.clearIndicator, wi = _t.slotProps.popupIndicator;
  return /* @__PURE__ */ c.jsxs(M.Fragment, {
    children: [/* @__PURE__ */ c.jsx(Nm, {
      ref: r,
      className: $e(Ye.root, f),
      ownerState: We,
      ...on(mt),
      children: Je({
        id: Ot,
        disabled: j,
        fullWidth: !0,
        size: Oe === "small" ? "small" : void 0,
        InputLabelProps: eo(),
        InputProps: {
          ref: sn,
          className: Ye.inputRoot,
          startAdornment: ae,
          onMouseDown: (be) => {
            be.target === be.currentTarget && oo(be);
          },
          ...(ur || $r) && {
            endAdornment: /* @__PURE__ */ c.jsxs(Mm, {
              className: Ye.endAdornment,
              ownerState: We,
              children: [ur ? /* @__PURE__ */ c.jsx(_m, {
                ...gt(),
                "aria-label": v,
                title: v,
                ownerState: We,
                ...Ci,
                className: $e(Ye.clearIndicator, Ci?.className),
                children: m
              }) : null, $r ? /* @__PURE__ */ c.jsx(Lm, {
                ...Ct(),
                disabled: j,
                "aria-label": Rt ? g : Se,
                title: Rt ? g : Se,
                ownerState: We,
                ...wi,
                className: $e(Ye.popupIndicator, wi?.className),
                children: ue
              }) : null]
            })
          }
        },
        inputProps: {
          className: Ye.input,
          disabled: j,
          readOnly: _e,
          ...ht()
        }
      })
    }), Jt ? /* @__PURE__ */ c.jsx(Dm, {
      as: B,
      ...ee,
      children: /* @__PURE__ */ c.jsxs(Vm, {
        as: ln,
        ...U,
        children: [W && cr.length === 0 ? /* @__PURE__ */ c.jsx(Bm, {
          className: Ye.loading,
          ownerState: We,
          children: D
        }) : null, cr.length === 0 && !k && !W ? /* @__PURE__ */ c.jsx(Fm, {
          className: Ye.noOptions,
          ownerState: We,
          role: "presentation",
          onMouseDown: (be) => {
            be.preventDefault();
          },
          children: X
        }) : null, cr.length > 0 ? /* @__PURE__ */ c.jsx(lo, {
          as: R,
          ...Ir,
          children: cr.map((be, Lt) => Z ? Be({
            key: be.key,
            group: be.group,
            children: be.options.map((Dt, Ar) => Ti(Dt, be.index + Ar))
          }) : Ti(be, Lt))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Zs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: s.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: s.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: s.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: s.oneOfType([s.oneOf(["mouse", "touch"]), s.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ChipProps: s.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: s.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: s.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: s.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: s.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: s.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: s.shape({
    clearIndicator: s.object,
    paper: s.object,
    popper: s.object,
    popupIndicator: s.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: ar(s.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: s.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: s.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: s.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: s.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: s.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: s.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: s.oneOfType([s.oneOf(["auto"]), s.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: s.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: s.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: s.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @template Value The option shape. Will be the same shape as an item of the options.
   * @returns {boolean}
   */
  getOptionDisabled: s.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: s.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: s.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */
  groupBy: s.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: s.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: s.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: s.bool,
  /**
   * The input value.
   */
  inputValue: s.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: s.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Is,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxComponent: s.elementType,
  /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxProps: s.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: s.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: s.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: s.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: s.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: s.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: s.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: s.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: s.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: s.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: s.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperComponent: s.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: s.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: s.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: s.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: s.func,
  /**
   * Render the input.
   *
   * **Note:** The `renderInput` prop must return a `TextField` component or a compatible custom component
   * that correctly forwards `InputProps.ref` and spreads `inputProps`. This ensures proper integration
   * with the Autocomplete's internal logic (e.g., focus management and keyboard navigation).
   *
   * Avoid using components like `DatePicker` or `Select` directly, as they may not forward the required props,
   * leading to runtime errors or unexpected behavior.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: s.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: s.func,
  /**
   * Render the selected value when doing multiple selections.
   *
   * @deprecated Use `renderValue` prop instead
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: s.func,
  /**
   * Renders the selected value(s) as rich content in the input for both single and multiple selections.
   *
   * @param {AutocompleteRenderValue<Value, Multiple, FreeSolo>} value The `value` provided to the component.
   * @param {function} getItemProps The value item props.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderValue: s.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: s.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium"]), s.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: s.shape({
    chip: s.oneOfType([s.func, s.object]),
    clearIndicator: s.oneOfType([s.func, s.object]),
    listbox: s.oneOfType([s.func, s.object]),
    paper: s.oneOfType([s.func, s.object]),
    popper: s.oneOfType([s.func, s.object]),
    popupIndicator: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: s.shape({
    listbox: s.elementType,
    paper: s.elementType,
    popper: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: ar(s.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Km = (e) => Array.isArray(e) ? e.map((t) => t && typeof t == "object" && "value" in t ? t.value : t).filter((t) => t != null) : e && typeof e == "object" && "value" in e ? e.value !== void 0 ? [e.value] : [] : e == null ? [] : [e], Hm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const {
    setTouched: u,
    touched: f,
    setError: m,
    ensureLookupDataset: y
  } = Et(), [b, v] = ke([]), [g, p] = ke(!1), [x, C] = ke(null), [O, j] = ke(() => {
    const h = e.sourceSelect;
    return !Array.isArray(h) || h.length === 0;
  }), E = (h, T) => {
    if (!(o || g)) {
      if (!T) {
        r(null);
        return;
      }
      r([
        {
          value: T.value,
          label: T.label,
          meta: {
            sourceId: T.sourceId,
            row: T.row
          }
        }
      ]);
    }
  }, S = () => {
    u(e.dataKey);
    const h = Pr(e, t, i, a, l, f);
    h.length > 0 ? m(e.dataKey, h[0]) : m(e.dataKey, null);
  }, w = (h) => {
    if (!h) return { mainLabel: "", helpText: "" };
    let T = h.replace(/<[^>]*>/g, "").trim(), $ = "";
    const R = h.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return R && ($ = R[1], T = h.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: T, helpText: $ };
  }, L = Ke(() => e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((h) => ({
    value: h.value || h.id,
    text: h.text || h.title || h.label,
    description: h.description
  })) : [], [e.answers, e.options, e.categorical]), _ = Ke(
    () => Array.isArray(e.sourceSelect) ? e.sourceSelect : [],
    [e.sourceSelect]
  ), N = _.length > 0, k = Ke(
    () => N ? JSON.stringify(_) : "",
    [_, N]
  );
  Pe(() => {
    let h = !0;
    return !N || typeof y != "function" ? (v([]), p(!1), C(null), j(!0), () => {
      h = !1;
    }) : (j(!1), (async () => {
      p(!0), C(null);
      try {
        const $ = await Promise.all(
          _.map((R) => y(R))
        );
        if (!h) return;
        v($.map((R) => Array.isArray(R) ? R : [])), j(!0);
      } catch ($) {
        if (!h) return;
        const R = $ && $.message ? $.message : "Failed to load lookup data";
        C(R), v([]), j(!0);
      } finally {
        h && p(!1);
      }
    })(), () => {
      h = !1;
    });
  }, [y, k, N, _]);
  const P = Ke(() => N ? _.flatMap((h, T) => {
    const $ = b[T] || [], R = h.parentCondition || [], V = R.length === 0 ? $ : $.filter((D) => R.every((H) => {
      const X = D?.[H.key], Y = typeof H.value == "string" ? tn(H.value, i, a) : H.value, J = Km(Y);
      return J.length ? J.some((me) => To(X, me)) : !1;
    })), W = h.id || h.tableName || `lookup-${T}`;
    return V.map((D) => {
      const H = D?.[h.value], X = D?.[h.desc] ?? D?.label ?? D?.text ?? D?.title ?? String(H ?? ""), Y = h.fullDesc ? D?.[h.fullDesc] : D?.description;
      return {
        optionKey: `${W}:${H ?? ""}`,
        value: H,
        label: X,
        description: Y,
        sourceId: W,
        row: D
      };
    });
  }) : [], [_, b, i, a, N]), d = Ke(() => L.map((h) => {
    const T = h.value ?? h.id ?? h.code ?? h.text ?? "";
    return {
      optionKey: `static:${T ?? ""}`,
      value: T,
      label: h.text || h.label || h.title || String(T ?? ""),
      description: h.description
    };
  }), [L]), I = Ke(() => N ? P : d, [N, P, d]), A = Ke(() => {
    if (!I.length) return [];
    const h = [...I];
    return h.sort((T, $) => {
      const R = T?.value ?? "", V = $?.value ?? "";
      return String(R).localeCompare(String(V), void 0, {
        numeric: !0,
        sensitivity: "base"
      });
    }), h;
  }, [I]), K = Ke(() => {
    if (!Array.isArray(t) || t.length === 0)
      return null;
    const h = t[0], T = h && typeof h == "object" && h.value !== void 0 ? h.value : h;
    return A.find(($) => To($.value, T)) || null;
  }, [t, A]), z = Ke(() => As({
    stringify: (h) => `${h?.label ?? ""} ${h?.value ?? ""} ${h?.description ?? ""}`.trim()
  }), []);
  Pe(() => {
    N && O && (!Array.isArray(t) || t.length === 0 || (!A.length || !K) && r(null));
  }, [N, O, A, K, t, r]);
  const Z = e.label || e.title || e.name || "", { mainLabel: te, helpText: G } = w(Z);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ c.jsx(
      Zs,
      {
        fullWidth: !0,
        disableClearable: e.required,
        options: A,
        value: K,
        onChange: E,
        onBlur: S,
        disabled: o,
        loading: g,
        filterOptions: z,
        autoHighlight: !0,
        includeInputInList: !0,
        selectOnFocus: !0,
        clearOnEscape: !0,
        handleHomeEndKeys: !0,
        getOptionLabel: (h) => h?.label ?? "",
        isOptionEqualToValue: (h, T) => To(h.value, T?.value ?? T),
        ListboxProps: {
          style: { maxHeight: 300 }
        },
        noOptionsText: g ? "Loading options..." : x ? "Failed to load options" : "No options available",
        loadingText: "Loading options...",
        renderOption: (h, T) => /* @__PURE__ */ il("li", { ...h, key: T.optionKey }, /* @__PURE__ */ c.jsxs(re, { children: [
          /* @__PURE__ */ c.jsx(q, { variant: "body1", children: T.label }),
          T.description && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: T.description })
        ] })),
        renderInput: (h) => /* @__PURE__ */ c.jsx(
          ut,
          {
            ...h,
            label: te || e.title,
            required: e.required,
            error: !!n,
            placeholder: e.required ? void 0 : "Select an option...",
            InputProps: {
              ...h.InputProps,
              endAdornment: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                g ? /* @__PURE__ */ c.jsx(Cn, { color: "inherit", size: 20 }) : null,
                h.InputProps.endAdornment
              ] })
            }
          }
        )
      }
    ),
    G && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: { color: "#007bff", fontStyle: "italic", display: "block", mt: 1 },
        children: G
      }
    ),
    x && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "error", sx: { display: "block", mt: 1 }, children: x }),
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: Array.isArray(t) && t.length > 0,
        isTouched: f[e.dataKey]
      }
    )
  ] });
}, Gm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: u, touched: f, setError: m } = Et(), y = (C) => {
    if (o)
      return;
    const O = C.target.value, j = O === "" ? "" : Number(O);
    r(j);
  }, b = () => {
    u(e.dataKey);
    const C = Pr(e, t, i, a, l, f);
    C.length > 0 ? m(e.dataKey, C[0]) : m(e.dataKey, null);
  }, v = (C) => {
    if (!C) return { mainLabel: "", helpText: "" };
    let O = C.replace(/<[^>]*>/g, "").trim(), j = "";
    const E = C.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return E && (j = E[1], O = C.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: O, helpText: j };
  }, g = e.label || e.title || e.name || "", { mainLabel: p, helpText: x } = v(g);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: p || e.title,
        value: t,
        onChange: y,
        onBlur: b,
        error: !!n,
        helperText: x ? void 0 : e.instructions,
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
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!t,
        isTouched: f[e.dataKey]
      }
    ),
    x && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: x
      }
    ),
    e.instructions && !n && !x && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Ka = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (v) => (g) => {
    if (o)
      return;
    const p = g.target.checked, x = u.find((O) => O.value == v);
    let C = Array.isArray(t) ? [...t] : [];
    p ? x && !C.find((O) => O.value == v) && C.push({
      value: x.value,
      label: x.text || x.label
    }) : C = C.filter((O) => O.value != v), r(C);
  }, a = (v) => {
    if (!v) return { mainLabel: "", helpText: "" };
    let g = v.replace(/<[^>]*>/g, "").trim(), p = "";
    const x = v.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return x && (p = x[1], g = v.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: g, helpText: p };
  }, u = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((v) => ({
    value: v.value || v.id,
    text: v.text || v.title || v.label
  })) : [], f = Array.isArray(t) ? t : [], m = e.label || e.title || e.name || "", { mainLabel: y, helpText: b } = a(m);
  return /* @__PURE__ */ c.jsx(re, { sx: { width: "100%" }, children: /* @__PURE__ */ c.jsxs(Ln, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ c.jsxs(Ya, { component: "legend", sx: { mb: 2, color: "text.primary" }, children: [
      y || e.title,
      e.required && /* @__PURE__ */ c.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    b && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: b
      }
    ),
    e.instructions && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ c.jsx(
      dl,
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
        children: u.map((v) => /* @__PURE__ */ c.jsx(
          Qa,
          {
            control: /* @__PURE__ */ c.jsx(
              pl,
              {
                checked: f.some((g) => g.value == v.value),
                onChange: i(v.value),
                size: "medium",
                disabled: o
              }
            ),
            label: /* @__PURE__ */ c.jsxs(re, { children: [
              /* @__PURE__ */ c.jsx(q, { variant: "body1", children: v.text || v.label }),
              v.description && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", children: v.description })
            ] }),
            disabled: o,
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
          v.value
        ))
      }
    ),
    n && /* @__PURE__ */ c.jsx(Hr, { children: n }),
    e.maxSelections && /* @__PURE__ */ c.jsxs(q, { variant: "caption", color: "text.secondary", sx: { mt: 1 }, children: [
      "Maximum ",
      e.maxSelections,
      " selections allowed"
    ] })
  ] }) });
}, Ym = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (m) => {
    if (o)
      return;
    const y = m.target.value;
    r(y);
  }, a = (m) => {
    if (!m) return { mainLabel: "", helpText: "" };
    let y = m.replace(/<[^>]*>/g, "").trim(), b = "";
    const v = m.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return v && (b = v[1], y = m.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: y, helpText: b };
  }, l = e.label || e.title || e.name || "", { mainLabel: u, helpText: f } = a(l);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        multiline: !0,
        rows: e.rows || 4,
        label: u || e.title,
        value: t,
        onChange: i,
        error: !!n,
        helperText: f ? void 0 : e.instructions,
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
    f && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: f
      }
    ),
    e.instructions && !n && !f && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Qm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  nowInput: i = !1
}) => {
  const a = (b) => {
    if (o)
      return;
    const v = b.target.value;
    r(v);
  }, l = (b) => {
    if (!b) return { mainLabel: "", helpText: "" };
    let v = b.replace(/<[^>]*>/g, "").trim(), g = "";
    const p = b.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return p && (g = p[1], v = b.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: v, helpText: g };
  };
  ot.useEffect(() => {
    if (i && !t) {
      const b = /* @__PURE__ */ new Date(), v = e.type === 11 ? (
        // Date only
        b.toISOString().split("T")[0]
      ) : (
        // YYYY-MM-DD
        b.toISOString().slice(0, 16)
      );
      r(v);
    }
  }, [i, t, r, e.type]);
  const u = () => {
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
  }, f = e.label || e.title || e.name || "", { mainLabel: m, helpText: y } = l(f);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: m || e.title,
        value: t,
        onChange: a,
        error: !!n,
        helperText: y ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        type: u(),
        variant: "outlined",
        InputLabelProps: {
          shrink: !0
        }
      }
    ),
    y && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: y
      }
    ),
    e.instructions && !n && !y && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    ),
    i && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "info.main",
        sx: { mt: 0.5, display: "block" },
        children: "Automatically set to current date/time"
      }
    )
  ] });
}, Xm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (a) => {
    if (o)
      return;
    const l = a.target.value;
    r(l);
  };
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: e.label || e.title,
        value: t,
        onChange: i,
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
    e.instructions && !n && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Jm = ({ question: e }) => /* @__PURE__ */ c.jsx(re, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ c.jsxs(Tr, { severity: "info", children: [
  /* @__PURE__ */ c.jsxs(q, { children: [
    "Toggle: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ c.jsx(q, { variant: "body2", children: "Toggle component coming soon" })
] }) }), Zm = ({ question: e }) => /* @__PURE__ */ c.jsx(re, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ c.jsxs(Tr, { severity: "info", children: [
  /* @__PURE__ */ c.jsxs(q, { children: [
    "Range Slider: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ c.jsx(q, { variant: "body2", children: "Range slider component coming soon" })
] }) }), qm = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (p) => {
    if (o)
      return;
    const C = p.target.value.map((O) => {
      const j = u.find((E) => E.value == O);
      return j ? {
        value: j.value,
        label: j.text || j.label
      } : { value: O, label: O };
    });
    r(C);
  }, a = (p) => {
    if (!p) return { mainLabel: "", helpText: "" };
    let x = p.replace(/<[^>]*>/g, "").trim(), C = "";
    const O = p.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return O && (C = O[1], x = p.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: x, helpText: C };
  }, u = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((p) => ({
    value: p.value || p.id,
    text: p.text || p.title || p.label
  })) : [], f = Array.isArray(t) ? t : [], m = f.map((p) => p.value), y = `multiple-select-${e.variable}-label`, b = e.label || e.title || e.name || "", { mainLabel: v, helpText: g } = a(b);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ c.jsxs(Ln, { fullWidth: !0, error: !!n, disabled: o, children: [
      /* @__PURE__ */ c.jsx(fl, { id: y, required: e.required, children: v || e.title }),
      /* @__PURE__ */ c.jsx(
        ml,
        {
          labelId: y,
          multiple: !0,
          value: m,
          onChange: i,
          disabled: o,
          input: /* @__PURE__ */ c.jsx(gl, { label: v || e.title }),
          renderValue: (p) => /* @__PURE__ */ c.jsx(re, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: p.map((x) => {
            const C = f.find((O) => O.value == x);
            return /* @__PURE__ */ c.jsx(
              Dn,
              {
                label: C?.label || x,
                size: "small"
              },
              x
            );
          }) }),
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: 300
              }
            }
          },
          children: u.map((p) => /* @__PURE__ */ c.jsx(hl, { value: p.value, children: /* @__PURE__ */ c.jsxs(re, { children: [
            /* @__PURE__ */ c.jsx(q, { variant: "body1", children: p.text || p.label }),
            p.description && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: p.description })
          ] }) }, p.value))
        }
      ),
      g && /* @__PURE__ */ c.jsx(Hr, { sx: { color: "#007bff", fontStyle: "italic" }, children: g }),
      n && /* @__PURE__ */ c.jsx(Hr, { error: !0, children: n })
    ] })
  ] });
}, eh = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (u) => {
    if (o)
      return;
    const f = u.target.value;
    r(f);
  }, l = n || (t && !((u) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u))(t) ? "Please enter a valid email address" : "");
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: e.label || e.title,
        value: t,
        onChange: i,
        error: !!l,
        helperText: l || e.instructions,
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
    e.instructions && !l && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, th = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: u, touched: f, setError: m } = Et(), [y, b] = ke(""), [v, g] = ke(""), p = ye((L) => {
    if (!L || L === "")
      return "";
    const _ = String(L).replace(/[^\d.]/g, ""), N = parseFloat(_) || 0;
    return new Intl.NumberFormat(e.separatorFormat, {
      style: "currency",
      currency: e.currency || "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(N);
  }, [e.separatorFormat, e.currency]), x = (L) => {
    if (!L || L === "")
      return "";
    const _ = L.replace(/[^\d]/g, "");
    return _ === "" ? "" : parseInt(_, 10);
  };
  Pe(() => {
    if (t !== y) {
      b(t);
      const L = p(t);
      g(L);
    }
  }, [t, y, p]);
  const C = (L) => {
    if (o)
      return;
    const _ = L.target.value;
    if (_ === "") {
      g(""), b(""), r("");
      return;
    }
    const N = _.replace(/[^\d.]/g, ""), k = x(N);
    b(k);
    const P = p(k);
    g(P), r(k);
  }, O = () => {
    u(e.dataKey);
    const L = Pr(e, y, i, a, l, f);
    L.length > 0 ? m(e.dataKey, L[0]) : m(e.dataKey, null);
  }, j = (L) => {
    if (!L) return { mainLabel: "", helpText: "" };
    let _ = L.replace(/<[^>]*>/g, "").trim(), N = "";
    const k = L.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return k && (N = k[1], _ = L.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: _, helpText: N };
  }, E = e.label || e.title || e.name || "", { mainLabel: S, helpText: w } = j(E);
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ c.jsx(
      ut,
      {
        fullWidth: !0,
        label: S || e.title,
        value: v,
        onChange: C,
        onBlur: O,
        error: !!n,
        helperText: w ? void 0 : e.instructions,
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
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!y && y !== "",
        isTouched: f[e.dataKey]
      }
    ),
    w && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: w
      }
    ),
    e.instructions && !n && !w && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, rh = ({
  question: e,
  value: t,
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = Xe(null), a = Xe(r), l = Xe(null), u = Xe(null), f = Xe(null), [m, y] = ke(!1), [b, v] = ke(""), [g, p] = ke(null), [x, C] = ke(!1), [O, j] = ke(""), E = Xe(o), S = Xe(null), w = Xe(50);
  Pe(() => {
    a.current = r;
  }, [r]), Pe(() => {
    E.current = o;
    const P = f.current;
    P && (o ? P.dragging?.disable() : P.dragging?.enable());
  }, [o]);
  const L = (P, d, I, A) => {
    const z = (I - P) * Math.PI / 180, Z = (A - d) * Math.PI / 180, te = Math.sin(z / 2) * Math.sin(z / 2) + Math.cos(P * Math.PI / 180) * Math.cos(I * Math.PI / 180) * Math.sin(Z / 2) * Math.sin(Z / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(te), Math.sqrt(1 - te)));
  };
  Pe(() => {
    if (t && typeof t == "string")
      try {
        const P = JSON.parse(t);
        P.latitude && P.longitude && (p(P), l.current || (l.current = P));
      } catch {
        const P = t.split(",");
        if (P.length === 2) {
          const d = parseFloat(P[0].trim()), I = parseFloat(P[1].trim());
          if (!isNaN(d) && !isNaN(I)) {
            const A = { latitude: d, longitude: I };
            p(A), l.current || (l.current = A);
          }
        }
      }
  }, [t]), Pe(() => {
    S.current = g;
  }, [g]), Pe(() => {
    (() => {
      if (!document.getElementById("leaflet-css")) {
        const d = document.createElement("link");
        d.id = "leaflet-css", d.rel = "stylesheet", d.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(d);
      }
      if (document.getElementById("leaflet-js"))
        window.L && C(!0);
      else {
        const d = document.createElement("script");
        d.id = "leaflet-js", d.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", d.onload = () => C(!0), document.head.appendChild(d);
      }
    })();
  }, []), Pe(() => {
    if (!x || !window.L || u.current || !i.current) return;
    const P = l.current || S.current || {
      latitude: -7.257419,
      longitude: 112.752088
    }, d = [P.latitude, P.longitude];
    l.current || (l.current = { ...P });
    const I = window.L.map(i.current).setView(d, 15);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(I);
    const A = window.L.divIcon({
      html: '<div style="background-color:#ff0000;width:20px;height:20px;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
      className: "leaflet-div-icon custom-marker"
    }), K = window.L.marker(d, {
      draggable: !E.current,
      icon: A
    }).addTo(I);
    return f.current = K, u.current = I, K.on("drag", (z) => {
      if (E.current) {
        z.target.setLatLng(l.current || z.target.getLatLng());
        return;
      }
      const Z = z.target.getLatLng(), te = l.current;
      if (te) {
        const G = L(
          te.latitude,
          te.longitude,
          Z.lat,
          Z.lng
        ), h = w.current || 50;
        if (G > h) {
          const T = Math.atan2(
            Z.lng - te.longitude,
            Z.lat - te.latitude
          ), $ = 6371e3, R = h, V = te.latitude * Math.PI / 180, W = te.longitude * Math.PI / 180, D = Math.asin(
            Math.sin(V) * Math.cos(R / $) + Math.cos(V) * Math.sin(R / $) * Math.cos(T)
          ), H = W + Math.atan2(
            Math.sin(T) * Math.sin(R / $) * Math.cos(V),
            Math.cos(R / $) - Math.sin(V) * Math.sin(D)
          ), X = [D * 180 / Math.PI, H * 180 / Math.PI];
          z.target.setLatLng(X), j(`Movement limited to ${Math.round(h)} meters from initial position (GPS accuracy)`), setTimeout(() => j(""), 3e3);
        } else
          j("");
      }
    }), K.on("dragend", (z) => {
      if (E.current) {
        z.target.setLatLng(l.current || z.target.getLatLng());
        return;
      }
      const Z = z.target.getLatLng(), te = { latitude: Z.lat, longitude: Z.lng };
      p(te), a.current(JSON.stringify(te));
    }), () => {
      f.current = null, u.current = null, I && (I.off(), I.remove());
    };
  }, [x]), Pe(() => {
    const P = f.current, d = u.current;
    !P || !g || !P._map || !P._icon || (P.setLatLng([g.latitude, g.longitude]), d && d.panTo([g.latitude, g.longitude]));
  }, [g]);
  const _ = () => {
    if (!o) {
      if (!navigator.geolocation) {
        v("Geolocation is not supported by this browser");
        return;
      }
      y(!0), v(""), navigator.geolocation.getCurrentPosition(
        (P) => {
          const d = P.coords.latitude, I = P.coords.longitude, A = P.coords.accuracy || 50, K = { latitude: d, longitude: I };
          p(K), r(JSON.stringify(K)), l.current = K, w.current = A;
          const z = u.current, Z = f.current;
          if (z && Z && Z._icon) {
            const te = [d, I];
            z.setView(te, 15), Z.setLatLng(te);
          }
          y(!1);
        },
        (P) => {
          let d = "Unable to get location";
          switch (P.code) {
            case P.PERMISSION_DENIED:
              d = "Location access denied by user";
              break;
            case P.POSITION_UNAVAILABLE:
              d = "Location information unavailable";
              break;
            case P.TIMEOUT:
              d = "Location request timed out";
              break;
            default:
              d = "An unknown error occurred";
          }
          v(d), y(!1);
        },
        {
          enableHighAccuracy: !0,
          timeout: 1e4,
          maximumAge: 0
        }
      );
    }
  }, N = (P, d) => {
    if (o)
      return;
    const I = parseFloat(d);
    if (isNaN(I)) return;
    const A = g ? { ...g } : { latitude: 0, longitude: 0 };
    A[P] = I, p(A), r(JSON.stringify(A)), l.current || (l.current = A);
    const K = u.current, z = f.current;
    if (K && z && z._icon) {
      const Z = [A.latitude, A.longitude];
      K.setView(Z, 15), z.setLatLng(Z);
    }
  }, k = e.required;
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ c.jsxs(q, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      k && /* @__PURE__ */ c.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ c.jsx(rr, { elevation: 2, sx: { mb: 2 }, children: /* @__PURE__ */ c.jsx(
      re,
      {
        ref: i,
        sx: {
          width: "100%",
          height: 300,
          borderRadius: 1,
          overflow: "hidden",
          display: x ? "block" : "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5"
        },
        children: !x && /* @__PURE__ */ c.jsxs(re, { sx: { textAlign: "center" }, children: [
          /* @__PURE__ */ c.jsx(Cn, { size: 40, sx: { mb: 2 } }),
          /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "textSecondary", children: "Loading map..." })
        ] })
      }
    ) }),
    O && /* @__PURE__ */ c.jsx(Tr, { severity: "warning", sx: { mb: 2 }, children: O }),
    /* @__PURE__ */ c.jsxs(re, { sx: { mb: 2 }, children: [
      /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "textSecondary", gutterBottom: !0, children: "Manual coordinate input:" }),
      /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", gap: 2, mb: 2 }, children: [
        /* @__PURE__ */ c.jsx(
          ut,
          {
            label: "Latitude",
            type: "number",
            value: g?.latitude || "",
            onChange: (P) => N("latitude", P.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 },
            disabled: !0
          }
        ),
        /* @__PURE__ */ c.jsx(
          ut,
          {
            label: "Longitude",
            type: "number",
            value: g?.longitude || "",
            onChange: (P) => N("longitude", P.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 },
            disabled: !0
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(re, { sx: { mb: 2 }, children: /* @__PURE__ */ c.jsx(
      Qe,
      {
        variant: "contained",
        startIcon: m ? /* @__PURE__ */ c.jsx(Cn, { size: 20, color: "inherit" }) : /* @__PURE__ */ c.jsx(Vl, {}),
        onClick: _,
        disabled: m || o,
        sx: {
          bgcolor: "#6b46c1",
          "&:hover": { bgcolor: "#553c9a" },
          textTransform: "none"
        },
        children: m ? "Getting Location..." : "Get Location"
      }
    ) }),
    b && /* @__PURE__ */ c.jsx(Tr, { severity: "error", sx: { mb: 2 }, children: b }),
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: k,
        hasValue: !!g
      }
    )
  ] });
}, nh = ["image/jpeg", "image/jpg", "image/png", "image/webp"], oh = 10 * 1024 * 1024, ih = ({
  question: e,
  value: t = null,
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: u, touched: f, setError: m } = Et(), [y, b] = ke(!1), [v, g] = ke(null), [p, x] = ke(""), [C, O] = ke(0), [j, E] = ke(!1), [S, w] = ke(!1), L = Xe(null), _ = Xe(null);
  Pe(() => {
    (() => {
      const V = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      w(V && "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices);
    })();
  }, []), Pe(() => {
    t && typeof t == "object" && t.dataUrl ? (g(t.dataUrl), x(t.name || "Captured Image"), O(t.size || 0)) : t && typeof t == "string" ? (g(t), x("Uploaded Image")) : (g(null), x(""), O(0));
  }, [t]);
  const N = (R) => {
    if (!R) return { mainLabel: "", helpText: "" };
    let V = R.replace(/<[^>]*>/g, "").trim(), W = "";
    const D = R.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return D && (W = D[1], V = R.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: V, helpText: W };
  }, k = e.label || e.title || e.name || "", { mainLabel: P, helpText: d } = N(k), I = ye((R) => nh.includes(R.type) ? R.size > oh ? "Ukuran file terlalu besar. Maksimal 10MB." : null : "Format file tidak didukung. Gunakan JPG, PNG, atau WebP.", []), A = ye(async (R) => {
    if (o)
      return;
    const V = I(R);
    if (V) {
      m(e.dataKey, V);
      return;
    }
    E(!0);
    try {
      const W = new FileReader();
      W.onload = (D) => {
        const H = {
          dataUrl: D.target.result,
          name: R.name,
          size: R.size,
          type: R.type,
          lastModified: R.lastModified
        };
        r(H), g(D.target.result), x(R.name), O(R.size), m(e.dataKey, null), E(!1);
      }, W.onerror = (D) => {
        console.error("FileReader error:", D), m(e.dataKey, "Error membaca file."), E(!1);
      }, W.readAsDataURL(R);
    } catch (W) {
      console.error("Error processing file:", W), m(e.dataKey, "Error memproses file."), E(!1);
    }
  }, [o, r, e.dataKey, m, I]), K = ye(async () => {
    if (!o && S)
      try {
        const R = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        _.current?.click();
      } catch (R) {
        console.error("Error accessing camera:", R), L.current?.click();
      }
  }, [S, o]), z = ye((R) => {
    R.preventDefault(), R.stopPropagation(), R.type === "dragenter" || R.type === "dragover" ? b(!0) : R.type === "dragleave" && b(!1);
  }, []), Z = ye((R) => {
    if (R.preventDefault(), R.stopPropagation(), b(!1), o) return;
    const V = [...R.dataTransfer.files];
    V && V[0] && A(V[0]);
  }, [o, A]), te = ye((R) => {
    if (o)
      return;
    const V = R.target.files[0];
    V && A(V);
  }, [o, A]), G = ye((R) => {
    if (o)
      return;
    const V = R.target.files[0];
    V && A(V);
  }, [o, A]), h = ye(() => {
    o || (r(null), g(null), x(""), O(0), m(e.dataKey, null), L.current && (L.current.value = ""), _.current && (_.current.value = ""));
  }, [o, r, e.dataKey, m]), T = () => {
    u(e.dataKey);
    const R = !!(t && (t.dataUrl || t)), V = Pr(e, R ? "has_value" : "", i, a, l, f);
    V.length > 0 ? m(e.dataKey, V[0]) : m(e.dataKey, null);
  }, $ = (R) => {
    if (R === 0) return "0 Bytes";
    const V = 1024, W = ["Bytes", "KB", "MB", "GB"], D = Math.floor(Math.log(R) / Math.log(V));
    return parseFloat((R / Math.pow(V, D)).toFixed(2)) + " " + W[D];
  };
  return /* @__PURE__ */ c.jsxs(re, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      re,
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
        onDragEnter: z,
        onDragLeave: z,
        onDragOver: z,
        onDrop: Z,
        onClick: () => !o && L.current?.click(),
        onBlur: T,
        children: [
          j && /* @__PURE__ */ c.jsx(
            re,
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
              children: /* @__PURE__ */ c.jsx(Cn, {})
            }
          ),
          v ? /* @__PURE__ */ c.jsxs(yl, { sx: { maxWidth: 400, mx: "auto" }, children: [
            /* @__PURE__ */ c.jsx(
              bl,
              {
                component: "img",
                height: "200",
                image: v,
                alt: p,
                sx: { objectFit: "contain" }
              }
            ),
            /* @__PURE__ */ c.jsxs(vl, { children: [
              /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
                /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "text.secondary", children: p }),
                /* @__PURE__ */ c.jsx(
                  Dn,
                  {
                    label: $(C),
                    size: "small",
                    variant: "outlined"
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", gap: 1, justifyContent: "center" }, children: [
                /* @__PURE__ */ c.jsx(
                  Sr,
                  {
                    color: "primary",
                    onClick: (R) => {
                      R.stopPropagation(), L.current?.click();
                    },
                    size: "small",
                    children: /* @__PURE__ */ c.jsx(ki, {})
                  }
                ),
                S && /* @__PURE__ */ c.jsx(
                  Sr,
                  {
                    color: "secondary",
                    onClick: (R) => {
                      R.stopPropagation(), K();
                    },
                    size: "small",
                    children: /* @__PURE__ */ c.jsx($i, {})
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  Sr,
                  {
                    color: "error",
                    onClick: (R) => {
                      R.stopPropagation(), h();
                    },
                    size: "small",
                    children: /* @__PURE__ */ c.jsx(Xa, {})
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ c.jsxs(re, { children: [
            /* @__PURE__ */ c.jsx(Bl, { sx: { fontSize: 48, color: "text.secondary", mb: 2 } }),
            /* @__PURE__ */ c.jsx(q, { variant: "h6", gutterBottom: !0, children: P }),
            /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Seret dan jatuhkan foto di sini, atau klik untuk memilih file" }),
            /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: "Format yang didukung: JPG, PNG, WebP (maksimal 10MB)" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", gap: 1, mt: 2, justifyContent: "center" }, children: [
      /* @__PURE__ */ c.jsx(
        Qe,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ c.jsx(ki, {}),
          onClick: () => L.current?.click(),
          disabled: o,
          size: "small",
          children: "Pilih File"
        }
      ),
      S && /* @__PURE__ */ c.jsx(
        Qe,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ c.jsx($i, {}),
          onClick: K,
          disabled: o,
          size: "small",
          children: "Kamera"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        ref: L,
        type: "file",
        accept: "image/*",
        onChange: te,
        style: { display: "none" },
        disabled: o
      }
    ),
    /* @__PURE__ */ c.jsx(
      "input",
      {
        ref: _,
        type: "file",
        accept: "image/*",
        capture: "environment",
        onChange: G,
        style: { display: "none" },
        disabled: o
      }
    ),
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!(t && (t.dataUrl || t)),
        isTouched: f[e.dataKey]
      }
    ),
    d && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        sx: {
          mt: 0.5,
          display: "block",
          color: "#007bff",
          fontStyle: "italic"
        },
        children: d
      }
    ),
    e.instructions && !n && !d && /* @__PURE__ */ c.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, ah = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = t && typeof t == "object" && t.completionTime || "", [a, l] = ke(i), u = () => {
    if (o)
      return;
    const m = (/* @__PURE__ */ new Date()).toLocaleString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    l(m), r({
      completionTime: m
    });
  }, f = e.required;
  return /* @__PURE__ */ c.jsxs(re, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ c.jsxs(q, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      f && /* @__PURE__ */ c.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", gap: 2, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ c.jsx(
        ut,
        {
          fullWidth: !0,
          value: a,
          disabled: !0,
          variant: "outlined",
          sx: { flex: 1 }
        }
      ),
      /* @__PURE__ */ c.jsx(
        Qe,
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
    /* @__PURE__ */ c.jsx(
      lr,
      {
        error: n,
        isRequired: f,
        hasValue: !!a
      }
    )
  ] });
}, Ro = {
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
function Ei({
  question: e,
  responses: t = {},
  variables: r = {},
  errors: n = {},
  validation: o = [],
  rowIndex: i = null
}) {
  const {
    setResponse: a,
    setVariable: l,
    clearError: u,
    config: f
  } = Et(), m = !!f?.readOnly, y = !!f?.disabled, b = e?.disableInput, v = (() => {
    if (typeof b == "boolean")
      return b;
    if (typeof b == "number")
      return b !== 0;
    if (typeof b == "string") {
      const I = b.trim().toLowerCase();
      if (I === "true") return !0;
      if (I === "false") return !1;
      try {
        return !!Ft(b, t, r, i);
      } catch {
        return !1;
      }
    }
    return !1;
  })(), g = m || y || v, p = f?.locale ?? "en", x = f?.translations ?? {}, C = f?.fetchMedia, O = f?.componentsMap || {};
  if (Pe(() => {
    if (e.type === 4 && e.expression) {
      let I;
      try {
        I = Ft(e.expression, t, r, i);
      } catch {
        I = void 0;
      }
      const A = i !== null ? `${e.dataKey}#${i}` : e.dataKey, K = t[A] || r[A];
      K === I || JSON.stringify(K) === JSON.stringify(I) || (console.log(`Computed variable ${A} =`, I), l(e.dataKey, I, i));
    }
  }, [e.type, e.expression, JSON.stringify(t), JSON.stringify(r), i]), !qd(e, t, r, i))
    return null;
  const E = i !== null ? `${e.dataKey}#${i}` : e.dataKey, S = e?.dataKey, w = t[E] || r[E], L = n[E], _ = (I) => {
    g || (L && u(E), e.type === 4 ? l(e.dataKey, I, i) : a(e.dataKey, I, i));
  }, N = ep(e.label, t, r, i), k = {
    question: {
      ...e,
      label: N
    },
    value: w,
    onChange: _,
    error: L,
    responses: t,
    variables: r,
    rowIndex: i,
    validation: o,
    readOnly: m,
    disabled: g,
    locale: p,
    translations: x,
    fetchMedia: C
  }, P = O[e.dataKey] || O[e.type] || O[String(e.type)] || (e.questionType ? O[e.questionType] : void 0) || (Ro[e.type] ? O[Ro[e.type]] : void 0);
  if (P) {
    if (ot.isValidElement(P))
      return ot.cloneElement(P, k);
    if (typeof P == "function") {
      const I = P;
      return /* @__PURE__ */ c.jsx(I, { ...k });
    }
  }
  const d = () => {
    switch (e.type) {
      case 1:
        return /* @__PURE__ */ c.jsx(tp, { ...k });
      case 2:
        return /* @__PURE__ */ c.jsx(rp, { ...k });
      case 3:
        return /* @__PURE__ */ c.jsx(ks, { ...k });
      case 4:
        return /* @__PURE__ */ c.jsx(np, { ...k });
      case 11:
      // Date
      case 12:
      // Date Time Local
      case 14:
      // Month
      case 15:
        return /* @__PURE__ */ c.jsx(Qm, { ...k });
      case 13:
        return /* @__PURE__ */ c.jsx(Xm, { ...k });
      case 16:
        return /* @__PURE__ */ c.jsx(Ka, { ...k, single: !0 });
      case 17:
        return /* @__PURE__ */ c.jsx(Jm, { ...k });
      case 18:
        return /* @__PURE__ */ c.jsx(Zm, { ...k });
      case 19:
        return /* @__PURE__ */ c.jsx(En, { ...k, inputType: "url" });
      case 20:
        return /* @__PURE__ */ c.jsx(th, { ...k });
      case 21:
        return /* @__PURE__ */ c.jsx(Ao, { ...k });
      case 22:
        return /* @__PURE__ */ c.jsx(Ao, { ...k, selectMode: !0 });
      case 23:
        return /* @__PURE__ */ c.jsx(qm, { ...k });
      case 24:
        return /* @__PURE__ */ c.jsx(En, { ...k, masked: !0 });
      case 25:
        return /* @__PURE__ */ c.jsx(En, { ...k });
      case 26:
        return /* @__PURE__ */ c.jsx(op, { ...k });
      case 27:
        return /* @__PURE__ */ c.jsx(Hm, { ...k });
      case 28:
        return /* @__PURE__ */ c.jsx(Gm, { ...k });
      case 29:
        return /* @__PURE__ */ c.jsx(Ka, { ...k });
      case 30:
        return /* @__PURE__ */ c.jsx(Ym, { ...k });
      case 31:
        return /* @__PURE__ */ c.jsx(eh, { ...k });
      case 32:
        return /* @__PURE__ */ c.jsx(ih, { ...k });
      case 33:
        return /* @__PURE__ */ c.jsx(rh, { ...k });
      case 35:
        return /* @__PURE__ */ c.jsx(ah, { ...k });
      default:
        return /* @__PURE__ */ c.jsxs(re, { sx: { p: 2, bgcolor: "warning.light", borderRadius: 1 }, children: [
          /* @__PURE__ */ c.jsxs("strong", { children: [
            "Unsupported Question Type: ",
            e.type
          ] }),
          /* @__PURE__ */ c.jsx("br", {}),
          Ro[e.type] || "Unknown",
          /* @__PURE__ */ c.jsx("br", {}),
          /* @__PURE__ */ c.jsx("em", { children: N })
        ] });
    }
  };
  return /* @__PURE__ */ c.jsx(
    re,
    {
      sx: { width: "100%" },
      "data-question-id": typeof E == "string" ? E : void 0,
      "data-question-base": typeof S == "string" ? S : void 0,
      tabIndex: -1,
      children: d()
    }
  );
}
const vr = 280, gn = (e) => typeof e != "string" ? e ? String(e) : "" : e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(), Ha = (e) => typeof e == "string" ? e.replace(/"/g, '\\"') : "", sh = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function qs({
  template: e,
  className: t,
  style: r,
  header: n,
  footer: o
}) {
  const i = xl(), a = Sl(i.breakpoints.down("md")), {
    currentPage: l,
    responses: u,
    variables: f,
    errors: m,
    validation: y,
    setCurrentPage: b,
    template: v,
    submit: g
  } = Et(), [p, x] = ke(!1), [C, O] = ke(!1), [j, E] = ke([]), S = e || v, w = Ke(() => sh(S), [S]), L = !!g, _ = Ke(() => {
    const G = /* @__PURE__ */ new Map(), h = (T, $, R) => {
      if (!T) return;
      if (Array.isArray(T)) {
        T.forEach((W) => h(W, $, R));
        return;
      }
      const V = T;
      V?.dataKey && !G.has(V.dataKey) && G.set(V.dataKey, {
        sectionIndex: $,
        sectionLabel: R,
        question: V
      }), V?.components && h(V.components, $, R);
    };
    return w.forEach((T, $) => {
      const R = gn(T?.label) || `Section ${$ + 1}`;
      h(T?.components, $, R);
    }), G;
  }, [w]), N = ye((G) => {
    if (!G || typeof G != "object")
      return [];
    const h = Object.entries(G).map(([T, $]) => {
      const R = Array.isArray($) ? $ : $ ? [$] : [];
      if (!R.length)
        return null;
      const V = T.includes("#") ? T.split("#")[0] : T, W = _.get(T) || _.get(V), D = W?.sectionIndex ?? null, H = W?.sectionLabel || (D !== null && w[D] ? gn(w[D]?.label) || `Section ${D + 1}` : null), X = W?.question?.label || W?.question?.title || V, Y = gn(X) || V, J = T.includes("#") ? T.split("#")[1] : null, me = J ? `${Y} (Row ${J})` : Y, Q = R.map((le) => typeof le == "string" ? gn(le) || le : String(le));
      return {
        dataKey: T,
        baseKey: V,
        messages: Q,
        sectionIndex: D,
        sectionLabel: H,
        displayLabel: me
      };
    }).filter(Boolean);
    return h.sort((T, $) => {
      const R = T.sectionIndex ?? Number.MAX_SAFE_INTEGER, V = $.sectionIndex ?? Number.MAX_SAFE_INTEGER;
      return R !== V ? R - V : T.displayLabel.localeCompare($.displayLabel, void 0, { sensitivity: "base" });
    }), h;
  }, [_, w]), k = ye(async () => {
    if (!g) {
      console.warn("Submit handler is not available yet.");
      return;
    }
    try {
      const G = await g();
      if (G?.ok)
        E([]), O(!1);
      else {
        const h = N(G?.errors ?? m);
        E(h), O(h.length > 0);
      }
    } catch (G) {
      console.error("Failed to submit questionnaire:", G);
    }
  }, [g, N, m]), P = () => {
    x(!p);
  }, d = (G) => {
    b(G), a && x(!1);
  }, I = ye(() => {
    O(!1);
  }, []), A = ye((G) => {
    if (!G || (typeof G.sectionIndex == "number" && G.sectionIndex >= 0 && b(G.sectionIndex), O(!1), typeof window > "u"))
      return;
    const h = Ha(G.dataKey), T = Ha(G.baseKey);
    let $ = 0;
    const R = 12, V = () => {
      if ($ >= R)
        return;
      $ += 1;
      const W = h ? `[data-question-id="${h}"]` : null, D = T ? `[data-question-base="${T}"]` : null, H = W && document.querySelector(W) || D && document.querySelector(D);
      if (H) {
        H.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        const X = H.querySelector('input, textarea, select, button, [tabindex]:not([tabindex="-1"])');
        X && typeof X.focus == "function" ? X.focus({ preventScroll: !0 }) : typeof H.focus == "function" && H.focus({ preventScroll: !0 }), H.classList.add("question-jump-highlight"), window.setTimeout(() => H.classList.remove("question-jump-highlight"), 2e3);
      } else
        window.setTimeout(V, 150);
    };
    window.setTimeout(V, 120);
  }, [b]), K = w[l], z = (G) => {
    if (!G?.components)
      return /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No questions in this section" });
    const h = G.components[0] || [];
    return h.length === 0 ? /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No questions available" }) : h.map((T, $) => /* @__PURE__ */ c.jsx(re, { sx: { mb: 2 }, children: /* @__PURE__ */ c.jsx(
      Ei,
      {
        question: T,
        responses: u,
        variables: f,
        errors: m,
        validation: y
      }
    ) }, T.dataKey || $));
  }, Z = (G) => {
    const h = w[G];
    if (!h?.components?.[0]) return "incomplete";
    const $ = h.components[0].filter((V) => V.required);
    return $.length === 0 || $.filter(
      (V) => u[V.dataKey] !== void 0 && u[V.dataKey] !== ""
    ).length === $.length ? "complete" : "incomplete";
  }, te = /* @__PURE__ */ c.jsxs(re, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ c.jsxs(co, { sx: { minHeight: { xs: 56, sm: 64 }, borderBottom: 1, borderColor: "divider", bgcolor: "primary.main" }, children: [
      /* @__PURE__ */ c.jsx(q, { variant: "subtitle1", component: "div", sx: { flexGrow: 1, fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1.3 }, children: S?.title || "Survey Sections" }),
      a && /* @__PURE__ */ c.jsx(Sr, { onClick: P, sx: { color: "white" }, children: /* @__PURE__ */ c.jsx(Fl, {}) })
    ] }),
    /* @__PURE__ */ c.jsx(Wo, { sx: { px: 2, py: 2, flex: 1, overflow: "auto" }, children: w.map((G, h) => {
      const T = l === h, $ = Z(h);
      return /* @__PURE__ */ c.jsx(Ko, { disablePadding: !0, sx: { mb: 1 }, children: /* @__PURE__ */ c.jsx(
        El,
        {
          selected: T,
          onClick: () => d(h),
          sx: {
            borderRadius: 2,
            bgcolor: T ? "primary.main" : "transparent",
            color: T ? "white" : "text.primary",
            py: 1.5,
            px: 2,
            transition: "all 0.2s ease",
            border: 1,
            borderColor: T ? "primary.main" : "transparent",
            "&:hover": {
              bgcolor: T ? "primary.dark" : "action.hover",
              transform: "translateX(4px)"
            },
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark"
              }
            }
          },
          children: /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", alignItems: "center", width: "100%", gap: 1.5 }, children: [
            $ === "complete" ? /* @__PURE__ */ c.jsx(Ul, { sx: { fontSize: 20, color: T ? "white" : "success.main", flexShrink: 0 } }) : /* @__PURE__ */ c.jsx(zl, { sx: { fontSize: 20, opacity: 0.6, flexShrink: 0 } }),
            /* @__PURE__ */ c.jsx(
              Ho,
              {
                primary: G.label || `Section ${h + 1}`,
                primaryTypographyProps: {
                  fontSize: "14px",
                  fontWeight: T ? 600 : 500,
                  lineHeight: 1.4
                }
              }
            )
          ] })
        }
      ) }, G.dataKey || h);
    }) })
  ] });
  return /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", minHeight: "100vh" }, className: t, style: r, children: [
    /* @__PURE__ */ c.jsx(
      Tl,
      {
        position: "fixed",
        elevation: 1,
        sx: {
          width: { xs: "100%", md: `calc(100% - ${vr}px)` },
          ml: { md: `${vr}px` },
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: 1,
          borderColor: "divider"
        },
        children: /* @__PURE__ */ c.jsxs(co, { sx: { minHeight: { xs: 56, sm: 64 } }, children: [
          /* @__PURE__ */ c.jsx(
            Sr,
            {
              color: "inherit",
              edge: "start",
              onClick: P,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ c.jsx(Wl, {})
            }
          ),
          /* @__PURE__ */ c.jsx(q, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, fontWeight: 600 }, children: S?.title || "Questionnaire" }),
          /* @__PURE__ */ c.jsx(
            Dn,
            {
              icon: /* @__PURE__ */ c.jsx(ji, {}),
              label: "Submit",
              color: "success",
              clickable: !0,
              onClick: k,
              disabled: !L,
              sx: { fontWeight: 600, display: { xs: "none", sm: "flex" } }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ c.jsx(
      re,
      {
        component: "nav",
        sx: { width: { md: vr }, flexShrink: { md: 0 } },
        children: /* @__PURE__ */ c.jsx(
          Cl,
          {
            variant: a ? "temporary" : "permanent",
            open: a ? p : !0,
            onClose: P,
            ModalProps: {
              keepMounted: !0
              // Better open performance on mobile.
            },
            sx: {
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: vr,
                borderRight: 1,
                borderColor: "divider",
                bgcolor: "background.default"
              }
            },
            children: te
          }
        )
      }
    ),
    /* @__PURE__ */ c.jsxs(
      re,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          width: { xs: "100%", md: `calc(100% - ${vr}px)` },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ c.jsx(co, { sx: { minHeight: { xs: 56, sm: 64 } } }),
          /* @__PURE__ */ c.jsxs(
            vn,
            {
              maxWidth: "lg",
              sx: {
                py: { xs: 2, sm: 3 },
                pb: { xs: 12, sm: 14 },
                flex: 1,
                display: "flex",
                flexDirection: "column"
              },
              children: [
                n && /* @__PURE__ */ c.jsx(re, { sx: { mb: 2 }, children: n }),
                K ? /* @__PURE__ */ c.jsxs(
                  rr,
                  {
                    elevation: 0,
                    sx: {
                      p: { xs: 2, sm: 3, md: 4 },
                      mb: 2,
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 2,
                      bgcolor: "background.paper"
                    },
                    children: [
                      /* @__PURE__ */ c.jsx(
                        q,
                        {
                          variant: "h5",
                          component: "h2",
                          gutterBottom: !0,
                          sx: {
                            mb: 3,
                            fontWeight: 600,
                            color: "primary.main",
                            borderBottom: 2,
                            borderColor: "primary.main",
                            pb: 1
                          },
                          children: K.label || `Section ${l + 1}`
                        }
                      ),
                      z(K)
                    ]
                  }
                ) : /* @__PURE__ */ c.jsx(
                  rr,
                  {
                    elevation: 0,
                    sx: {
                      p: 4,
                      textAlign: "center",
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 2
                    },
                    children: /* @__PURE__ */ c.jsx(q, { variant: "h6", color: "text.secondary", children: "Select a section from the sidebar to begin" })
                  }
                ),
                o && /* @__PURE__ */ c.jsx(re, { sx: { mt: 2 }, children: o }),
                /* @__PURE__ */ c.jsx(
                  rr,
                  {
                    elevation: 8,
                    sx: {
                      position: "fixed",
                      bottom: 0,
                      left: { xs: 0, md: `${vr}px` },
                      right: 0,
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 2, sm: 3 },
                      zIndex: 1100,
                      borderRadius: 0,
                      borderTop: 2,
                      borderColor: "divider",
                      bgcolor: "background.paper"
                    },
                    children: /* @__PURE__ */ c.jsxs(
                      re,
                      {
                        sx: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          maxWidth: "lg",
                          mx: "auto",
                          gap: { xs: 1, sm: 2 }
                        },
                        children: [
                          /* @__PURE__ */ c.jsx(
                            Qe,
                            {
                              variant: "outlined",
                              onClick: () => d(Math.max(0, l - 1)),
                              disabled: l === 0,
                              sx: {
                                minWidth: { xs: 80, sm: 100 },
                                fontWeight: 600
                              },
                              children: "Previous"
                            }
                          ),
                          /* @__PURE__ */ c.jsxs(re, { sx: { flex: 1, textAlign: "center", display: { xs: "none", sm: "block" } }, children: [
                            /* @__PURE__ */ c.jsxs(q, { variant: "body2", color: "text.secondary", fontWeight: 500, children: [
                              "Section ",
                              l + 1,
                              " of ",
                              w.length
                            ] }),
                            /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", noWrap: !0, children: K?.label || "No section selected" })
                          ] }),
                          /* @__PURE__ */ c.jsx(re, { sx: { display: "flex", gap: 1 }, children: l < w.length - 1 ? /* @__PURE__ */ c.jsx(
                            Qe,
                            {
                              variant: "contained",
                              onClick: () => d(Math.min(w.length - 1, l + 1)),
                              disabled: l >= w.length - 1,
                              sx: {
                                minWidth: { xs: 80, sm: 100 },
                                fontWeight: 600
                              },
                              children: "Next"
                            }
                          ) : /* @__PURE__ */ c.jsx(
                            Qe,
                            {
                              variant: "contained",
                              color: "success",
                              onClick: k,
                              disabled: !L,
                              startIcon: /* @__PURE__ */ c.jsx(ji, {}),
                              sx: {
                                minWidth: { xs: 100, sm: 120 },
                                fontWeight: 600
                              },
                              children: "Submit"
                            }
                          ) })
                        ]
                      }
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(
      wl,
      {
        open: C,
        onClose: I,
        fullWidth: !0,
        maxWidth: "md",
        children: [
          /* @__PURE__ */ c.jsxs(Ol, { children: [
            "Validation Errors",
            j.length ? ` (${j.length})` : ""
          ] }),
          /* @__PURE__ */ c.jsx(Rl, { dividers: !0, children: j.length === 0 ? /* @__PURE__ */ c.jsx(q, { variant: "body2", color: "text.secondary", children: "All caught up! No validation issues were found." }) : /* @__PURE__ */ c.jsxs(Pl, { size: "small", children: [
            /* @__PURE__ */ c.jsx(kl, { children: /* @__PURE__ */ c.jsxs(Pi, { children: [
              /* @__PURE__ */ c.jsx(pr, { sx: { fontWeight: 600 }, children: "Question" }),
              /* @__PURE__ */ c.jsx(pr, { sx: { fontWeight: 600 }, children: "Issue" }),
              /* @__PURE__ */ c.jsx(pr, { align: "right", sx: { fontWeight: 600 }, children: "Action" })
            ] }) }),
            /* @__PURE__ */ c.jsx($l, { children: j.map((G) => /* @__PURE__ */ c.jsxs(Pi, { hover: !0, children: [
              /* @__PURE__ */ c.jsxs(pr, { sx: { minWidth: 220 }, children: [
                /* @__PURE__ */ c.jsx(q, { variant: "subtitle2", component: "div", gutterBottom: !0, children: G.displayLabel }),
                G.sectionLabel && /* @__PURE__ */ c.jsx(q, { variant: "caption", color: "text.secondary", children: G.sectionLabel })
              ] }),
              /* @__PURE__ */ c.jsx(pr, { children: G.messages.map((h, T) => /* @__PURE__ */ c.jsxs(
                q,
                {
                  variant: "body2",
                  color: "error",
                  children: [
                    "• ",
                    h
                  ]
                },
                `${G.dataKey}-msg-${T}`
              )) }),
              /* @__PURE__ */ c.jsx(pr, { align: "right", children: /* @__PURE__ */ c.jsx(
                Qe,
                {
                  variant: "outlined",
                  size: "small",
                  onClick: () => A(G),
                  children: "Go to"
                }
              ) })
            ] }, G.dataKey)) })
          ] }) }),
          /* @__PURE__ */ c.jsx(jl, { children: /* @__PURE__ */ c.jsx(Qe, { onClick: I, children: "Close" }) })
        ]
      }
    )
  ] });
}
const lh = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function ch({ template: e, className: t, style: r, footer: n }) {
  const {
    currentPage: o,
    responses: i,
    variables: a,
    errors: l,
    isOnline: u,
    validation: f,
    setCurrentPage: m,
    template: y,
    submit: b
  } = Et(), v = e || y, g = Ke(() => lh(v), [v]), p = g[o], x = !!b, C = () => {
    o < g.length - 1 && m(o + 1);
  }, O = () => {
    o > 0 && m(o - 1);
  }, j = ye(async () => {
    if (!b) {
      console.warn("Submit handler is not available yet.");
      return;
    }
    try {
      await b();
    } catch (S) {
      console.error("Failed to submit questionnaire:", S);
    }
  }, [b]), E = (S) => {
    if (!S?.components)
      return /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No questions in this section" });
    const w = S.components[0] || [];
    return w.length === 0 ? /* @__PURE__ */ c.jsx(q, { color: "text.secondary", children: "No questions available" }) : w.map((L, _) => /* @__PURE__ */ c.jsx(re, { sx: { mb: 3 }, children: /* @__PURE__ */ c.jsx(
      Ei,
      {
        question: L,
        responses: i,
        variables: a,
        errors: l,
        validation: f
      }
    ) }, L.dataKey || _));
  };
  return /* @__PURE__ */ c.jsxs(re, { sx: { minHeight: "100vh", bgcolor: "background.default", pb: 10 }, className: t, style: r, children: [
    /* @__PURE__ */ c.jsx(
      re,
      {
        sx: {
          position: "sticky",
          top: 0,
          zIndex: 1e3,
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: 1
        },
        children: /* @__PURE__ */ c.jsx(vn, { maxWidth: "md", sx: { py: 2 }, children: /* @__PURE__ */ c.jsxs(re, { sx: { mb: 2 }, children: [
          /* @__PURE__ */ c.jsx(q, { variant: "h5", gutterBottom: !0, fontWeight: 600, color: "primary.main", children: v?.title || "Survey" }),
          /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
            /* @__PURE__ */ c.jsxs(q, { variant: "body2", color: "text.secondary", fontWeight: 500, children: [
              "Section ",
              o + 1,
              " of ",
              g.length || 1
            ] }),
            /* @__PURE__ */ c.jsx(
              Dn,
              {
                label: u ? "Online" : "Offline",
                size: "small",
                color: u ? "success" : "warning",
                sx: { fontWeight: 600 }
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(
            Il,
            {
              variant: "determinate",
              value: g.length ? (o + 1) / g.length * 100 : 0,
              sx: {
                height: 10,
                borderRadius: 5,
                bgcolor: "action.hover",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5
                }
              }
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ c.jsxs(vn, { maxWidth: "md", sx: { py: { xs: 2, sm: 3 } }, children: [
      p ? /* @__PURE__ */ c.jsxs(
        rr,
        {
          elevation: 0,
          sx: {
            p: { xs: 2, sm: 3, md: 4 },
            mb: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper"
          },
          children: [
            /* @__PURE__ */ c.jsxs(re, { sx: { mb: 3, pb: 2, borderBottom: 2, borderColor: "primary.main" }, children: [
              /* @__PURE__ */ c.jsx(q, { variant: "h4", gutterBottom: !0, fontWeight: 600, color: "text.primary", children: p.label || p.title }),
              p.description && /* @__PURE__ */ c.jsx(q, { variant: "body1", color: "text.secondary", sx: { mt: 1, lineHeight: 1.7 }, children: p.description })
            ] }),
            E(p)
          ]
        }
      ) : /* @__PURE__ */ c.jsx(Tr, { severity: "info", sx: { borderRadius: 2 }, children: "No sections available. Please check the questionnaire configuration." }),
      n && /* @__PURE__ */ c.jsx(re, { sx: { mt: 3 }, children: n })
    ] }),
    /* @__PURE__ */ c.jsx(
      rr,
      {
        elevation: 8,
        sx: {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          py: { xs: 1.5, sm: 2 },
          px: { xs: 2, sm: 3 },
          zIndex: 1100,
          borderRadius: 0,
          borderTop: 2,
          borderColor: "divider",
          bgcolor: "background.paper"
        },
        children: /* @__PURE__ */ c.jsx(vn, { maxWidth: "md", children: /* @__PURE__ */ c.jsxs(re, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(
            Qe,
            {
              variant: "outlined",
              onClick: O,
              disabled: o === 0,
              sx: {
                minWidth: { xs: 80, sm: 100 },
                fontWeight: 600
              },
              children: "Previous"
            }
          ),
          /* @__PURE__ */ c.jsx(re, { sx: { display: { xs: "none", sm: "block" }, textAlign: "center" }, children: /* @__PURE__ */ c.jsxs(q, { variant: "caption", color: "text.secondary", display: "block", children: [
            "Progress: ",
            Math.round((o + 1) / g.length * 100),
            "%"
          ] }) }),
          /* @__PURE__ */ c.jsx(re, { sx: { display: "flex", gap: 1 }, children: o < g.length - 1 ? /* @__PURE__ */ c.jsx(
            Qe,
            {
              variant: "contained",
              onClick: C,
              disabled: o >= g.length - 1,
              sx: {
                minWidth: { xs: 80, sm: 100 },
                fontWeight: 600
              },
              children: "Next"
            }
          ) : /* @__PURE__ */ c.jsx(
            Qe,
            {
              variant: "contained",
              color: "success",
              onClick: j,
              disabled: !x,
              sx: {
                minWidth: { xs: 100, sm: 120 },
                fontWeight: 600
              },
              children: "Submit"
            }
          ) })
        ] }) })
      }
    )
  ] });
}
function xr(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.keys(e).filter((r) => r != null && r !== "").sort().forEach((r) => {
    const n = e[r];
    n !== void 0 && (t[r] = n);
  }), t;
}
function uh(e = {}) {
  const t = {
    version: 1,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    data: xr(e)
  };
  return JSON.stringify(t);
}
function dh(e) {
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
const ph = (e) => e && typeof e.then == "function", zo = (e, t) => {
  if (!e)
    return;
  if (Array.isArray(e)) {
    e.forEach((n) => zo(n, t));
    return;
  }
  const r = e;
  !r || typeof r != "object" || (t(r), r.components && zo(r.components, t));
}, fh = (e) => {
  const t = [], r = /* @__PURE__ */ new Set();
  return zo(e?.components, (n) => {
    n && n.type !== 1 && n.dataKey && !r.has(n.dataKey) && (r.add(n.dataKey), t.push(n));
  }), t;
}, mh = (e) => e ? Array.isArray(e) ? e : typeof e == "object" && Array.isArray(e.testFunctions) ? e.testFunctions : [] : [];
async function hh(e, t, r = {}, n = {}) {
  if (!e || typeof e != "object")
    throw new Error("validateResponse requires a templateJson object");
  const {
    variables: o = {},
    touched: i = {},
    validators: a = {},
    asyncValidation: l = !1,
    locale: u,
    translations: f
  } = n, m = mh(t ?? e?.validation), y = fh(e), b = {}, v = { ...i };
  y.forEach((g) => {
    g?.dataKey && (v[g.dataKey] = !0);
  });
  for (const g of y) {
    if (!g?.dataKey)
      continue;
    const p = g.dataKey, x = r[p], C = Pr(
      g,
      x,
      r,
      o,
      m,
      v
    );
    C.length && (b[p] = [...b[p] || [], ...C]);
    const O = a[p];
    if (typeof O == "function")
      try {
        const E = O(x, {
          question: g,
          responses: r,
          variables: o,
          locale: u,
          translations: f,
          template: e
        });
        let S = E;
        ph(E) && (l || console.warn(`Validator for ${p} returned a Promise but asyncValidation is disabled.`), S = await E), S && (b[p] = [...b[p] || [], S]);
      } catch (j) {
        console.error(`Validator for ${p} threw an error:`, j), b[p] = [
          ...b[p] || [],
          j.message || "Validation failed"
        ];
      }
  }
  return Object.keys(b).forEach((g) => {
    (!b[g] || b[g].length === 0) && delete b[g];
  }), {
    valid: Object.keys(b).length === 0,
    errors: b
  };
}
const gh = (e) => !e || e === "default" ? qs : e === "simple" ? ch : e, yh = () => typeof window > "u" || !window.localStorage ? null : {
  async get(e) {
    return window.localStorage.getItem(e);
  },
  async set(e, t) {
    window.localStorage.setItem(e, t);
  },
  async remove(e) {
    window.localStorage.removeItem(e);
  }
}, el = Ga((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: i,
    onSubmit: a,
    onValidationError: l,
    componentsMap: u,
    layout: f = "default",
    readOnly: m = !1,
    disabled: y = !1,
    locale: b = "en",
    translations: v = {},
    theme: g = null,
    persistentStore: p = null,
    storageKey: x = "questionnaire-draft",
    autosaveConfig: C = null,
    validators: O = {},
    asyncValidation: j = !1,
    fetchMedia: E = null,
    onError: S = null,
    lookupClient: w = null,
    lookupBaseUrl: L = null,
    resolveLookupUrl: _ = null,
    className: N,
    style: k,
    children: P,
    ...d
  } = e, {
    responses: I,
    variables: A,
    touched: K,
    validation: z,
    setConfig: Z,
    setInitialResponses: te,
    loadQuestionnaire: G,
    setErrors: h,
    resetResponses: T,
    setRuntimeMethods: $,
    setTouched: R
  } = Et(), [V, W] = ke({ initial: !1, draft: !1 }), D = Xe(null), H = !!C, X = C?.debounceMs ?? 300, Y = Ke(() => p || (H ? yh() : null), [p, H]), J = ye((ie) => {
    ie && (console.error("[QuestionnaireRenderer] error:", ie), typeof S == "function" && S(ie));
  }, [S]);
  Pe(() => {
    if (!r) {
      J(new Error("templateJson is required for QuestionnaireRenderer"));
      return;
    }
    try {
      G(r, n ?? z ?? null);
    } catch (ie) {
      J(ie);
    }
  }, [r, n, z, G, J]);
  const me = Ke(() => ({
    readOnly: m,
    disabled: y,
    locale: b,
    translations: v,
    fetchMedia: E,
    theme: g,
    componentsMap: u || {},
    lookupClient: w,
    lookupBaseUrl: L,
    resolveLookupUrl: _
  }), [m, y, b, v, E, g, u, w, L, _]);
  Pe(() => {
    try {
      Z(me);
    } catch (ie) {
      J(ie);
    }
  }, [me, Z, J]), Pe(() => {
    const ie = xr(o || {}), ge = JSON.stringify(ie);
    if (D.current !== ge) {
      D.current = ge;
      try {
        te(ie);
      } catch (de) {
        J(de);
      }
    }
    W((de) => ({ ...de, initial: !0 }));
  }, [o, te, J]), Pe(() => {
    let ie = !1;
    return !H || !Y ? (W((de) => ({ ...de, draft: !0 })), () => {
      ie = !0;
    }) : ((async () => {
      try {
        const de = await Promise.resolve(Y.get?.(x));
        if (!ie && de) {
          const Oe = dh(de), He = {
            ...xr(o || {}),
            ...xr(Oe)
          };
          te(He), D.current = JSON.stringify(He);
        }
      } catch (de) {
        ie || J(de);
      } finally {
        ie || W((de) => ({ ...de, draft: !0 }));
      }
    })(), () => {
      ie = !0;
    });
  }, [H, Y, x, o, te, J]);
  const Q = V.initial && V.draft, le = Ke(() => xr(I), [I]);
  Pe(() => {
    if (!Q || typeof i != "function")
      return;
    const ie = setTimeout(() => {
      try {
        i(le);
      } catch (ge) {
        J(ge);
      }
    }, X);
    return () => clearTimeout(ie);
  }, [le, i, X, J, Q]), Pe(() => {
    if (!Q || !H || !Y)
      return;
    const ie = setTimeout(() => {
      const ge = le, Oe = Object.keys(ge).length > 0 ? Y.set?.(x, uh(ge)) : Y.remove?.(x);
      Promise.resolve(Oe).catch(J);
    }, X);
    return () => clearTimeout(ie);
  }, [le, H, Y, x, X, J, Q]);
  const Me = ye(async () => hh(r, n ?? z ?? null, le, {
    variables: A,
    touched: K,
    validators: O,
    asyncValidation: j,
    locale: b,
    translations: v
  }), [r, n, z, le, A, K, O, j, b, v]), Ue = ye(() => xr(I), [I]), Se = ye(() => !H || !Y ? Promise.resolve() : Promise.resolve(Y.remove?.(x)).catch(J), [H, Y, x, J]), ze = ye(async () => {
    try {
      const ie = await Me();
      return h(ie.errors), ie.valid ? (typeof a == "function" && (console.log("Submitting responses:", le), await Promise.resolve(a(le))), C?.clearOnSubmit && await Se(), { ok: !0, responses: le }) : (Object.keys(ie.errors).forEach((ge) => R(ge)), typeof l == "function" && l(ie.errors), { ok: !1, errors: ie.errors });
    } catch (ie) {
      throw J(ie), ie;
    }
  }, [Me, h, R, l, a, le, C, Se, J]), ne = ye(async () => {
    try {
      T(), h({}), await Se();
    } catch (ie) {
      J(ie);
    }
  }, [T, h, Se, J]);
  al(t, () => ({
    submit: ze,
    reset: ne,
    getResponses: Ue
  }), [ze, ne, Ue]);
  const Ie = Xe(ze), ue = Xe(ne), _e = Xe(Ue);
  Pe(() => {
    Ie.current = ze;
  }, [ze]), Pe(() => {
    ue.current = ne;
  }, [ne]), Pe(() => {
    _e.current = Ue;
  }, [Ue]);
  const oe = Ke(() => ({
    submit: (...ie) => Ie.current(...ie),
    reset: (...ie) => ue.current(...ie),
    getResponses: (...ie) => _e.current(...ie)
  }), []);
  Pe(() => ($(oe), () => {
    $(null);
  }), [$, oe]);
  const Je = Ke(() => gh(f), [f]);
  let Ve = null;
  if (ot.isValidElement(Je) ? Ve = ot.cloneElement(Je, { className: N, style: k, ...d }, P) : typeof Je == "function" ? Ve = /* @__PURE__ */ c.jsx(Je, { className: N, style: k, ...d, children: P }) : Ve = /* @__PURE__ */ c.jsx(qs, { className: N, style: k, ...d, children: P }), g) {
    if (ot.isValidElement(g))
      return ot.cloneElement(g, void 0, Ve);
    if (typeof g == "function") {
      const ie = g;
      return /* @__PURE__ */ c.jsx(ie, { children: Ve });
    }
    return /* @__PURE__ */ c.jsx(Bd, { theme: g, children: Ve });
  }
  return Ve;
});
el.displayName = "QuestionnaireRendererInner";
const bh = Ga((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: i,
    onSubmit: a,
    onValidationError: l,
    componentsMap: u,
    layout: f,
    readOnly: m,
    disabled: y,
    locale: b,
    translations: v,
    theme: g,
    persistentStore: p,
    storageKey: x,
    enableAutosave: C,
    validators: O,
    asyncValidation: j,
    fetchMedia: E,
    onError: S,
    lookupClient: w,
    lookupBaseUrl: L,
    resolveLookupUrl: _,
    className: N,
    style: k,
    children: P,
    ...d
  } = e, I = Ke(() => C ? typeof C == "object" ? C : {} : null, [C]);
  return /* @__PURE__ */ c.jsx(Zd, { children: /* @__PURE__ */ c.jsx(
    el,
    {
      ref: t,
      templateJson: r,
      validationJson: n,
      initialData: o,
      onChange: i,
      onSubmit: a,
      onValidationError: l,
      componentsMap: u,
      layout: f,
      readOnly: m,
      disabled: y,
      locale: b,
      translations: v,
      theme: g,
      persistentStore: p,
      storageKey: x,
      autosaveConfig: I,
      validators: O,
      asyncValidation: j,
      fetchMedia: E,
      onError: S,
      lookupClient: w,
      lookupBaseUrl: L,
      resolveLookupUrl: _,
      className: N,
      style: k,
      ...d,
      children: P
    }
  ) });
});
bh.displayName = "QuestionnaireRenderer";
const wh = Object.freeze({
  QuestionnaireRendererProps: "QuestionnaireRendererProps",
  QuestionnaireRuntimeHandle: "QuestionnaireRuntimeHandle",
  QuestionnaireValidationErrors: "QuestionnaireValidationErrors"
});
export {
  qs as QuestionnaireLayout,
  bh as QuestionnaireRenderer,
  fh as collectQuestions,
  bh as default,
  dh as deserializeResponses,
  xr as normalizeResponses,
  uh as serializeResponses,
  wh as types,
  Et as useQuestionnaire,
  hh as validateResponse
};
//# sourceMappingURL=index.es.js.map
