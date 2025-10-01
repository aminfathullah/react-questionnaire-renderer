import * as A from "react";
import ot, { createContext as Js, useReducer as Xs, useRef as Qe, useEffect as Pe, useCallback as ye, useContext as Zs, useMemo as Ye, useState as Ne, isValidElement as hn, cloneElement as gn, Children as qs, createElement as el, forwardRef as za, useImperativeHandle as tl } from "react";
import rl from "localforage";
import { Box as te, Alert as Er, Typography as q, List as Fo, ListItem as Uo, ListItemText as zo, Button as Je, Paper as rr, Stack as Ti, Divider as Ci, TextField as ut, FormControl as Nn, FormLabel as Wa, RadioGroup as nl, FormControlLabel as Ka, Radio as ol, FormHelperText as Kr, CircularProgress as Sn, FormGroup as il, Checkbox as al, InputLabel as sl, Select as ll, MenuItem as cl, Chip as Mn, OutlinedInput as ul, ListItemSecondaryAction as dl, IconButton as xr, Card as pl, CardMedia as fl, CardContent as ml, useTheme as hl, useMediaQuery as gl, Toolbar as ao, ListItemButton as yl, AppBar as bl, Drawer as vl, Container as yn, LinearProgress as xl } from "@mui/material";
import { Visibility as Sl, ArrowBack as El, ArrowBackIosNew as Tl, ArrowForwardIos as Cl, Error as wl, Add as Ol, Delete as Ha, MyLocation as Rl, PhotoCamera as wi, CameraAlt as Oi, CloudUpload as Pl, ChevronLeft as kl, CheckCircle as $l, RadioButtonUnchecked as jl, Menu as Il, Send as Ri } from "@mui/icons-material";
import Al from "@emotion/styled";
import { Global as Nl, ThemeContext as Ga, keyframes as Xr, css as Ya } from "@emotion/react";
import * as Ml from "react-dom";
function _l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ln = { exports: {} }, Ar = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Ll() {
  if (Pi) return Ar;
  Pi = 1;
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
  return Ar.Fragment = t, Ar.jsx = r, Ar.jsxs = r, Ar;
}
var Nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ki;
function Dl() {
  return ki || (ki = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(y) {
      if (y == null) return null;
      if (typeof y == "function")
        return y.$$typeof === _ ? null : y.displayName || y.name || null;
      if (typeof y == "string") return y;
      switch (y) {
        case p:
          return "Fragment";
        case T:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof y == "object")
        switch (typeof y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), y.$$typeof) {
          case h:
            return "Portal";
          case $:
            return (y.displayName || "Context") + ".Provider";
          case w:
            return (y._context.displayName || "Context") + ".Consumer";
          case E:
            var O = y.render;
            return y = y.displayName, y || (y = O.displayName || O.name || "", y = y !== "" ? "ForwardRef(" + y + ")" : "ForwardRef"), y;
          case N:
            return O = y.displayName || null, O !== null ? O : e(y.type) || "Memo";
          case M:
            O = y._payload, y = y._init;
            try {
              return e(y(O));
            } catch {
            }
        }
      return null;
    }
    function t(y) {
      return "" + y;
    }
    function r(y) {
      try {
        t(y);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var L = O.error, I = typeof Symbol == "function" && Symbol.toStringTag && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return L.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(y);
      }
    }
    function n(y) {
      if (y === p) return "<>";
      if (typeof y == "object" && y !== null && y.$$typeof === M)
        return "<...>";
      try {
        var O = e(y);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var y = P.A;
      return y === null ? null : y.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(y) {
      if (c.call(y, "key")) {
        var O = Object.getOwnPropertyDescriptor(y, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return y.key !== void 0;
    }
    function l(y, O) {
      function L() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(y, "key", {
        get: L,
        configurable: !0
      });
    }
    function d() {
      var y = e(this.type);
      return F[y] || (F[y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), y = this.props.ref, y !== void 0 ? y : null;
    }
    function f(y, O, L, I, z, K, B, H) {
      return L = K.ref, y = {
        $$typeof: v,
        type: y,
        key: O,
        props: K,
        _owner: z
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(y, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(y, "ref", { enumerable: !1, value: null }), y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    }
    function m(y, O, L, I, z, K, B, H) {
      var Q = O.children;
      if (Q !== void 0)
        if (I)
          if (j(Q)) {
            for (I = 0; I < Q.length; I++)
              g(Q[I]);
            Object.freeze && Object.freeze(Q);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(Q);
      if (c.call(O, "key")) {
        Q = e(y);
        var Y = Object.keys(O).filter(function(ge) {
          return ge !== "key";
        });
        I = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", ie[Q + I] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          Q,
          Y,
          Q
        ), ie[Q + I] = !0);
      }
      if (Q = null, L !== void 0 && (r(L), Q = "" + L), a(O) && (r(O.key), Q = "" + O.key), "key" in O) {
        L = {};
        for (var J in O)
          J !== "key" && (L[J] = O[J]);
      } else L = O;
      return Q && l(
        L,
        typeof y == "function" ? y.displayName || y.name || "Unknown" : y
      ), f(
        y,
        Q,
        K,
        z,
        o(),
        L,
        B,
        H
      );
    }
    function g(y) {
      typeof y == "object" && y !== null && y.$$typeof === v && y._store && (y._store.validated = 1);
    }
    var b = ot, v = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), P = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, c = Object.prototype.hasOwnProperty, j = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(y) {
        return y();
      }
    };
    var W, F = {}, X = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), ee = k(n(i)), ie = {};
    Nr.Fragment = p, Nr.jsx = function(y, O, L, I, z) {
      var K = 1e4 > P.recentlyCreatedOwnerStacks++;
      return m(
        y,
        O,
        L,
        !1,
        I,
        z,
        K ? Error("react-stack-top-frame") : X,
        K ? k(n(y)) : ee
      );
    }, Nr.jsxs = function(y, O, L, I, z) {
      var K = 1e4 > P.recentlyCreatedOwnerStacks++;
      return m(
        y,
        O,
        L,
        !0,
        I,
        z,
        K ? Error("react-stack-top-frame") : X,
        K ? k(n(y)) : ee
      );
    };
  })()), Nr;
}
var $i;
function Vl() {
  return $i || ($i = 1, process.env.NODE_ENV === "production" ? ln.exports = Ll() : ln.exports = Dl()), ln.exports;
}
var u = Vl();
function Kt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const zt = "$$material";
function Bl(e) {
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
var Fl = {
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
function Ul(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var zl = /[A-Z]|^ms/g, Wl = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qa = function(t) {
  return t.charCodeAt(1) === 45;
}, ji = function(t) {
  return t != null && typeof t != "boolean";
}, so = /* @__PURE__ */ Ul(function(e) {
  return Qa(e) ? e : e.replace(zl, "-$&").toLowerCase();
}), Ii = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Wl, function(n, o, i) {
          return Bt = {
            name: o,
            styles: i,
            next: Bt
          }, o;
        });
  }
  return Fl[t] !== 1 && !Qa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function En(e, t, r) {
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
      return Kl(e, t, r);
    }
  }
  var d = r;
  return d;
}
function Kl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += En(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var l = a;
        ji(l) && (n += so(i) + ":" + Ii(i, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var d = 0; d < a.length; d++)
          ji(a[d]) && (n += so(i) + ":" + Ii(i, a[d]) + ";");
      else {
        var f = En(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += so(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Ai = /label:\s*([^\s;{]+)\s*(;|$)/g, Bt;
function Hl(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Bt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += En(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += En(r, t, e[l]), n) {
      var d = i;
      o += d[l];
    }
  Ai.lastIndex = 0;
  for (var f = "", m; (m = Ai.exec(o)) !== null; )
    f += "-" + m[1];
  var g = Bl(o) + f;
  return {
    name: g,
    styles: o,
    next: Bt
  };
}
var cn = { exports: {} }, un = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function Gl() {
  if (Ni) return ve;
  Ni = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function $(S) {
    if (typeof S == "object" && S !== null) {
      var C = S.$$typeof;
      switch (C) {
        case t:
          switch (S = S.type, S) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case l:
                case m:
                case h:
                case v:
                case a:
                  return S;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function E(S) {
    return $(S) === f;
  }
  return ve.AsyncMode = d, ve.ConcurrentMode = f, ve.ContextConsumer = l, ve.ContextProvider = a, ve.Element = t, ve.ForwardRef = m, ve.Fragment = n, ve.Lazy = h, ve.Memo = v, ve.Portal = r, ve.Profiler = i, ve.StrictMode = o, ve.Suspense = g, ve.isAsyncMode = function(S) {
    return E(S) || $(S) === d;
  }, ve.isConcurrentMode = E, ve.isContextConsumer = function(S) {
    return $(S) === l;
  }, ve.isContextProvider = function(S) {
    return $(S) === a;
  }, ve.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ve.isForwardRef = function(S) {
    return $(S) === m;
  }, ve.isFragment = function(S) {
    return $(S) === n;
  }, ve.isLazy = function(S) {
    return $(S) === h;
  }, ve.isMemo = function(S) {
    return $(S) === v;
  }, ve.isPortal = function(S) {
    return $(S) === r;
  }, ve.isProfiler = function(S) {
    return $(S) === i;
  }, ve.isStrictMode = function(S) {
    return $(S) === o;
  }, ve.isSuspense = function(S) {
    return $(S) === g;
  }, ve.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === f || S === i || S === o || S === g || S === b || typeof S == "object" && S !== null && (S.$$typeof === h || S.$$typeof === v || S.$$typeof === a || S.$$typeof === l || S.$$typeof === m || S.$$typeof === x || S.$$typeof === T || S.$$typeof === w || S.$$typeof === p);
  }, ve.typeOf = $, ve;
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
var Mi;
function Yl() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function $(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === n || G === f || G === i || G === o || G === g || G === b || typeof G == "object" && G !== null && (G.$$typeof === h || G.$$typeof === v || G.$$typeof === a || G.$$typeof === l || G.$$typeof === m || G.$$typeof === x || G.$$typeof === T || G.$$typeof === w || G.$$typeof === p);
    }
    function E(G) {
      if (typeof G == "object" && G !== null) {
        var ue = G.$$typeof;
        switch (ue) {
          case t:
            var De = G.type;
            switch (De) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case g:
                return De;
              default:
                var Ue = De && De.$$typeof;
                switch (Ue) {
                  case l:
                  case m:
                  case h:
                  case v:
                  case a:
                    return Ue;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var S = d, C = f, N = l, M = a, R = t, _ = m, P = n, c = h, j = v, k = r, W = i, F = o, X = g, ee = !1;
    function ie(G) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(G) || E(G) === d;
    }
    function y(G) {
      return E(G) === f;
    }
    function O(G) {
      return E(G) === l;
    }
    function L(G) {
      return E(G) === a;
    }
    function I(G) {
      return typeof G == "object" && G !== null && G.$$typeof === t;
    }
    function z(G) {
      return E(G) === m;
    }
    function K(G) {
      return E(G) === n;
    }
    function B(G) {
      return E(G) === h;
    }
    function H(G) {
      return E(G) === v;
    }
    function Q(G) {
      return E(G) === r;
    }
    function Y(G) {
      return E(G) === i;
    }
    function J(G) {
      return E(G) === o;
    }
    function ge(G) {
      return E(G) === g;
    }
    xe.AsyncMode = S, xe.ConcurrentMode = C, xe.ContextConsumer = N, xe.ContextProvider = M, xe.Element = R, xe.ForwardRef = _, xe.Fragment = P, xe.Lazy = c, xe.Memo = j, xe.Portal = k, xe.Profiler = W, xe.StrictMode = F, xe.Suspense = X, xe.isAsyncMode = ie, xe.isConcurrentMode = y, xe.isContextConsumer = O, xe.isContextProvider = L, xe.isElement = I, xe.isForwardRef = z, xe.isFragment = K, xe.isLazy = B, xe.isMemo = H, xe.isPortal = Q, xe.isProfiler = Y, xe.isStrictMode = J, xe.isSuspense = ge, xe.isValidElementType = $, xe.typeOf = E;
  })()), xe;
}
var _i;
function Ja() {
  return _i || (_i = 1, process.env.NODE_ENV === "production" ? un.exports = Gl() : un.exports = Yl()), un.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lo, Li;
function Ql() {
  if (Li) return lo;
  Li = 1;
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
      var d = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        f[m] = m;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lo = o() ? Object.assign : function(i, a) {
    for (var l, d = n(i), f, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var g in l)
        t.call(l, g) && (d[g] = l[g]);
      if (e) {
        f = e(l);
        for (var b = 0; b < f.length; b++)
          r.call(l, f[b]) && (d[f[b]] = l[f[b]]);
      }
    }
    return d;
  }, lo;
}
var co, Di;
function Wo() {
  if (Di) return co;
  Di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return co = e, co;
}
var uo, Vi;
function Xa() {
  return Vi || (Vi = 1, uo = Function.call.bind(Object.prototype.hasOwnProperty)), uo;
}
var po, Bi;
function Jl() {
  if (Bi) return po;
  Bi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Wo(), r = {}, n = /* @__PURE__ */ Xa();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, l, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var g;
          try {
            if (typeof i[m] != "function") {
              var b = Error(
                (d || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            g = i[m](a, m, d, l, null, t);
          } catch (h) {
            g = h;
          }
          if (g && !(g instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var v = f ? f() : "";
            e(
              "Failed " + l + " type: " + g.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, po = o, po;
}
var fo, Fi;
function Xl() {
  if (Fi) return fo;
  Fi = 1;
  var e = Ja(), t = Ql(), r = /* @__PURE__ */ Wo(), n = /* @__PURE__ */ Xa(), o = /* @__PURE__ */ Jl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return fo = function(l, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(y) {
      var O = y && (f && y[f] || y[m]);
      if (typeof O == "function")
        return O;
    }
    var b = "<<anonymous>>", v = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: w(),
      arrayOf: $,
      element: E(),
      elementType: S(),
      instanceOf: C,
      node: _(),
      objectOf: M,
      oneOf: N,
      oneOfType: R,
      shape: c,
      exact: j
    };
    function h(y, O) {
      return y === O ? y !== 0 || 1 / y === 1 / O : y !== y && O !== O;
    }
    function p(y, O) {
      this.message = y, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function x(y) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, L = 0;
      function I(K, B, H, Q, Y, J, ge) {
        if (Q = Q || b, J = J || H, ge !== r) {
          if (d) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = Q + ":" + H;
            !O[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ue] = !0, L++);
          }
        }
        return B[H] == null ? K ? B[H] === null ? new p("The " + Y + " `" + J + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new p("The " + Y + " `" + J + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : y(B, H, Q, Y, J);
      }
      var z = I.bind(null, !1);
      return z.isRequired = I.bind(null, !0), z;
    }
    function T(y) {
      function O(L, I, z, K, B, H) {
        var Q = L[I], Y = F(Q);
        if (Y !== y) {
          var J = X(Q);
          return new p(
            "Invalid " + K + " `" + B + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return x(O);
    }
    function w() {
      return x(a);
    }
    function $(y) {
      function O(L, I, z, K, B) {
        if (typeof y != "function")
          return new p("Property `" + B + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var H = L[I];
        if (!Array.isArray(H)) {
          var Q = F(H);
          return new p("Invalid " + K + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + z + "`, expected an array."));
        }
        for (var Y = 0; Y < H.length; Y++) {
          var J = y(H, Y, z, K, B + "[" + Y + "]", r);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return x(O);
    }
    function E() {
      function y(O, L, I, z, K) {
        var B = O[L];
        if (!l(B)) {
          var H = F(B);
          return new p("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(y);
    }
    function S() {
      function y(O, L, I, z, K) {
        var B = O[L];
        if (!e.isValidElementType(B)) {
          var H = F(B);
          return new p("Invalid " + z + " `" + K + "` of type " + ("`" + H + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(y);
    }
    function C(y) {
      function O(L, I, z, K, B) {
        if (!(L[I] instanceof y)) {
          var H = y.name || b, Q = ie(L[I]);
          return new p("Invalid " + K + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + z + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return x(O);
    }
    function N(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(L, I, z, K, B) {
        for (var H = L[I], Q = 0; Q < y.length; Q++)
          if (h(H, y[Q]))
            return null;
        var Y = JSON.stringify(y, function(ge, G) {
          var ue = X(G);
          return ue === "symbol" ? String(G) : G;
        });
        return new p("Invalid " + K + " `" + B + "` of value `" + String(H) + "` " + ("supplied to `" + z + "`, expected one of " + Y + "."));
      }
      return x(O);
    }
    function M(y) {
      function O(L, I, z, K, B) {
        if (typeof y != "function")
          return new p("Property `" + B + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var H = L[I], Q = F(H);
        if (Q !== "object")
          return new p("Invalid " + K + " `" + B + "` of type " + ("`" + Q + "` supplied to `" + z + "`, expected an object."));
        for (var Y in H)
          if (n(H, Y)) {
            var J = y(H, Y, z, K, B + "." + Y, r);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return x(O);
    }
    function R(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < y.length; O++) {
        var L = y[O];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(L) + " at index " + O + "."
          ), a;
      }
      function I(z, K, B, H, Q) {
        for (var Y = [], J = 0; J < y.length; J++) {
          var ge = y[J], G = ge(z, K, B, H, Q, r);
          if (G == null)
            return null;
          G.data && n(G.data, "expectedType") && Y.push(G.data.expectedType);
        }
        var ue = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new p("Invalid " + H + " `" + Q + "` supplied to " + ("`" + B + "`" + ue + "."));
      }
      return x(I);
    }
    function _() {
      function y(O, L, I, z, K) {
        return k(O[L]) ? null : new p("Invalid " + z + " `" + K + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return x(y);
    }
    function P(y, O, L, I, z) {
      return new p(
        (y || "React class") + ": " + O + " type `" + L + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function c(y) {
      function O(L, I, z, K, B) {
        var H = L[I], Q = F(H);
        if (Q !== "object")
          return new p("Invalid " + K + " `" + B + "` of type `" + Q + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var Y in y) {
          var J = y[Y];
          if (typeof J != "function")
            return P(z, K, B, Y, X(J));
          var ge = J(H, Y, z, K, B + "." + Y, r);
          if (ge)
            return ge;
        }
        return null;
      }
      return x(O);
    }
    function j(y) {
      function O(L, I, z, K, B) {
        var H = L[I], Q = F(H);
        if (Q !== "object")
          return new p("Invalid " + K + " `" + B + "` of type `" + Q + "` " + ("supplied to `" + z + "`, expected `object`."));
        var Y = t({}, L[I], y);
        for (var J in Y) {
          var ge = y[J];
          if (n(y, J) && typeof ge != "function")
            return P(z, K, B, J, X(ge));
          if (!ge)
            return new p(
              "Invalid " + K + " `" + B + "` key `" + J + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(L[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var G = ge(H, J, z, K, B + "." + J, r);
          if (G)
            return G;
        }
        return null;
      }
      return x(O);
    }
    function k(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(k);
          if (y === null || l(y))
            return !0;
          var O = g(y);
          if (O) {
            var L = O.call(y), I;
            if (O !== y.entries) {
              for (; !(I = L.next()).done; )
                if (!k(I.value))
                  return !1;
            } else
              for (; !(I = L.next()).done; ) {
                var z = I.value;
                if (z && !k(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function W(y, O) {
      return y === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function F(y) {
      var O = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : W(O, y) ? "symbol" : O;
    }
    function X(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var O = F(y);
      if (O === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function ee(y) {
      var O = X(y);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function ie(y) {
      return !y.constructor || !y.constructor.name ? b : y.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, fo;
}
var mo, Ui;
function Zl() {
  if (Ui) return mo;
  Ui = 1;
  var e = /* @__PURE__ */ Wo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, mo = function() {
    function n(a, l, d, f, m, g) {
      if (g !== e) {
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
  }, mo;
}
var zi;
function ql() {
  if (zi) return cn.exports;
  if (zi = 1, process.env.NODE_ENV !== "production") {
    var e = Ja(), t = !0;
    cn.exports = /* @__PURE__ */ Xl()(e.isElement, t);
  } else
    cn.exports = /* @__PURE__ */ Zl()();
  return cn.exports;
}
var ec = /* @__PURE__ */ ql();
const s = /* @__PURE__ */ _l(ec);
function tc(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ko(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(tc(o) ? r : o) : t;
  return /* @__PURE__ */ u.jsx(Nl, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
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
function rc(e, t) {
  const r = Al(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function nc(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Wi = [];
function Wt(e) {
  return Wi[0] = e, Hl(Wi);
}
var dn = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function oc() {
  if (Ki) return Ce;
  Ki = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
  function h(p) {
    if (typeof p == "object" && p !== null) {
      var x = p.$$typeof;
      switch (x) {
        case e:
          switch (p = p.type, p) {
            case r:
            case o:
            case n:
            case d:
            case f:
            case b:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case g:
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
  return Ce.ContextConsumer = i, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = r, Ce.Lazy = g, Ce.Memo = m, Ce.Portal = t, Ce.Profiler = o, Ce.StrictMode = n, Ce.Suspense = d, Ce.SuspenseList = f, Ce.isContextConsumer = function(p) {
    return h(p) === i;
  }, Ce.isContextProvider = function(p) {
    return h(p) === a;
  }, Ce.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ce.isForwardRef = function(p) {
    return h(p) === l;
  }, Ce.isFragment = function(p) {
    return h(p) === r;
  }, Ce.isLazy = function(p) {
    return h(p) === g;
  }, Ce.isMemo = function(p) {
    return h(p) === m;
  }, Ce.isPortal = function(p) {
    return h(p) === t;
  }, Ce.isProfiler = function(p) {
    return h(p) === o;
  }, Ce.isStrictMode = function(p) {
    return h(p) === n;
  }, Ce.isSuspense = function(p) {
    return h(p) === d;
  }, Ce.isSuspenseList = function(p) {
    return h(p) === f;
  }, Ce.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === o || p === n || p === d || p === f || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === m || p.$$typeof === a || p.$$typeof === i || p.$$typeof === l || p.$$typeof === v || p.getModuleId !== void 0);
  }, Ce.typeOf = h, Ce;
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
var Hi;
function ic() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && (function() {
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
                  case d:
                  case b:
                  case g:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
    we.ContextConsumer = a, we.ContextProvider = l, we.Element = t, we.ForwardRef = d, we.Fragment = n, we.Lazy = b, we.Memo = g, we.Portal = r, we.Profiler = i, we.StrictMode = o, we.Suspense = f, we.SuspenseList = m, we.isContextConsumer = function(p) {
      return e(p) === a;
    }, we.isContextProvider = function(p) {
      return e(p) === l;
    }, we.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }, we.isForwardRef = function(p) {
      return e(p) === d;
    }, we.isFragment = function(p) {
      return e(p) === n;
    }, we.isLazy = function(p) {
      return e(p) === b;
    }, we.isMemo = function(p) {
      return e(p) === g;
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
      return typeof p == "string" || typeof p == "function" || p === n || p === i || p === o || p === f || p === m || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === g || p.$$typeof === l || p.$$typeof === a || p.$$typeof === d || p.$$typeof === h || p.getModuleId !== void 0);
    }, we.typeOf = e;
  })()), we;
}
var Gi;
function ac() {
  return Gi || (Gi = 1, process.env.NODE_ENV === "production" ? dn.exports = /* @__PURE__ */ oc() : dn.exports = /* @__PURE__ */ ic()), dn.exports;
}
var Tn = /* @__PURE__ */ ac();
function $t(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Za(e) {
  if (/* @__PURE__ */ A.isValidElement(e) || Tn.isValidElementType(e) || !$t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Za(e[r]);
  }), t;
}
function it(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return $t(e) && $t(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ A.isValidElement(t[o]) || Tn.isValidElementType(t[o]) ? n[o] = t[o] : $t(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && $t(e[o]) ? n[o] = it(e[o], t[o], r) : r.clone ? n[o] = $t(t[o]) ? Za(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const sc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function lc(e) {
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
  } = e, i = sc(t), a = Object.keys(i);
  function l(b) {
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r})`;
  }
  function d(b) {
    return `@media (max-width:${(typeof t[b] == "number" ? t[b] : b) - n / 100}${r})`;
  }
  function f(b, v) {
    const h = a.indexOf(v);
    return `@media (min-width:${typeof t[b] == "number" ? t[b] : b}${r}) and (max-width:${(h !== -1 && typeof t[a[h]] == "number" ? t[a[h]] : v) - n / 100}${r})`;
  }
  function m(b) {
    return a.indexOf(b) + 1 < a.length ? f(b, a[a.indexOf(b) + 1]) : l(b);
  }
  function g(b) {
    const v = a.indexOf(b);
    return v === 0 ? l(a[1]) : v === a.length - 1 ? d(a[v]) : f(b, a[a.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: l,
    down: d,
    between: f,
    only: m,
    not: g,
    unit: r,
    ...o
  };
}
function Yi(e, t) {
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
function cc(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function uc(e, t) {
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
function dc(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...l) => t(e.breakpoints.up(...l), a), i.down = (...l) => t(e.breakpoints.down(...l), a), i.between = (...l) => t(e.breakpoints.between(...l), a), i.only = (...l) => t(e.breakpoints.only(...l), a), i.not = (...l) => {
      const d = t(e.breakpoints.not(...l), a);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const pc = {
  borderRadius: 4
}, Yt = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {};
function Fr(e, t) {
  return t ? it(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _n = {
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
}, Qi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${_n[e]}px)`
}, fc = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : _n[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function jt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Qi;
    return t.reduce((a, l, d) => (a[i.up(i.keys[d])] = r(t[d]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Qi;
    return Object.keys(t).reduce((a, l) => {
      if (cc(i.keys, l)) {
        const d = uc(n.containerQueries ? n : fc, l);
        d && (a[d] = r(t[l], l));
      } else if (Object.keys(i.values || _n).includes(l)) {
        const d = i.up(l);
        a[d] = r(t[l], l);
      } else {
        const d = l;
        a[d] = t[d];
      }
      return a;
    }, {});
  }
  return r(t);
}
function mc(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function Ji(e, t) {
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
function Ln(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Cn(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Ln(e, r) || n, t && (o = t(o, n, e)), o;
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
    const l = a[t], d = a.theme, f = Ln(d, n) || {};
    return jt(a, l, (g) => {
      let b = Cn(f, o, g);
      return g === b && typeof g == "string" && (b = Cn(f, o, `${t}${g === "default" ? "" : se(g)}`, g)), r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Yt
  } : {}, i.filterProps = [t], i;
}
function hc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const gc = {
  m: "margin",
  p: "padding"
}, yc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bc = hc((e) => {
  if (e.length > 2)
    if (Xi[e])
      e = Xi[e];
    else
      return [e];
  const [t, r] = e.split(""), n = gc[t], o = yc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Dn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Vn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vc = [...Dn, ...Vn];
function Zr(e, t, r, n) {
  const o = Ln(e, t, !0) ?? r;
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
function Ho(e) {
  return Zr(e, "spacing", 8, "spacing");
}
function qr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = qr(t, r), n), {});
}
function Sc(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = bc(r), i = xc(o, n), a = e[r];
  return jt(e, a, i);
}
function qa(e, t) {
  const r = Ho(e.theme);
  return Object.keys(e).map((n) => Sc(e, t, n, r)).reduce(Fr, {});
}
function _e(e) {
  return qa(e, Dn);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? Dn.reduce((e, t) => (e[t] = Yt, e), {}) : {};
_e.filterProps = Dn;
function Le(e) {
  return qa(e, Vn);
}
Le.propTypes = process.env.NODE_ENV !== "production" ? Vn.reduce((e, t) => (e[t] = Yt, e), {}) : {};
Le.filterProps = Vn;
process.env.NODE_ENV !== "production" && vc.reduce((e, t) => (e[t] = Yt, e), {});
function es(e = 8, t = Ho({
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
function Bn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Fr(o, t[i](n)) : o, {});
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
const Ec = ft("border", lt), Tc = ft("borderTop", lt), Cc = ft("borderRight", lt), wc = ft("borderBottom", lt), Oc = ft("borderLeft", lt), Rc = ft("borderColor"), Pc = ft("borderTopColor"), kc = ft("borderRightColor"), $c = ft("borderBottomColor"), jc = ft("borderLeftColor"), Ic = ft("outline", lt), Ac = ft("outlineColor"), Fn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: qr(t, n)
    });
    return jt(e, e.borderRadius, r);
  }
  return null;
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Yt
} : {};
Fn.filterProps = ["borderRadius"];
Bn(Ec, Tc, Cc, wc, Oc, Rc, Pc, kc, $c, jc, Fn, Ic, Ac);
const Un = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: qr(t, n)
    });
    return jt(e, e.gap, r);
  }
  return null;
};
Un.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Yt
} : {};
Un.filterProps = ["gap"];
const zn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: qr(t, n)
    });
    return jt(e, e.columnGap, r);
  }
  return null;
};
zn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Yt
} : {};
zn.filterProps = ["columnGap"];
const Wn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: qr(t, n)
    });
    return jt(e, e.rowGap, r);
  }
  return null;
};
Wn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Yt
} : {};
Wn.filterProps = ["rowGap"];
const Nc = Fe({
  prop: "gridColumn"
}), Mc = Fe({
  prop: "gridRow"
}), _c = Fe({
  prop: "gridAutoFlow"
}), Lc = Fe({
  prop: "gridAutoColumns"
}), Dc = Fe({
  prop: "gridAutoRows"
}), Vc = Fe({
  prop: "gridTemplateColumns"
}), Bc = Fe({
  prop: "gridTemplateRows"
}), Fc = Fe({
  prop: "gridTemplateAreas"
}), Uc = Fe({
  prop: "gridArea"
});
Bn(Un, zn, Wn, Nc, Mc, _c, Lc, Dc, Vc, Bc, Fc, Uc);
function Sr(e, t) {
  return t === "grey" ? t : e;
}
const zc = Fe({
  prop: "color",
  themeKey: "palette",
  transform: Sr
}), Wc = Fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Sr
}), Kc = Fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Sr
});
Bn(zc, Wc, Kc);
function nt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hc = Fe({
  prop: "width",
  transform: nt
}), Go = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || _n[r];
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
Go.filterProps = ["maxWidth"];
const Gc = Fe({
  prop: "minWidth",
  transform: nt
}), Yc = Fe({
  prop: "height",
  transform: nt
}), Qc = Fe({
  prop: "maxHeight",
  transform: nt
}), Jc = Fe({
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
const Xc = Fe({
  prop: "boxSizing"
});
Bn(Hc, Go, Gc, Yc, Qc, Jc, Xc);
const Kn = {
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
    style: Fn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Sr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Sr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Sr
  },
  // spacing
  p: {
    style: Le
  },
  pt: {
    style: Le
  },
  pr: {
    style: Le
  },
  pb: {
    style: Le
  },
  pl: {
    style: Le
  },
  px: {
    style: Le
  },
  py: {
    style: Le
  },
  padding: {
    style: Le
  },
  paddingTop: {
    style: Le
  },
  paddingRight: {
    style: Le
  },
  paddingBottom: {
    style: Le
  },
  paddingLeft: {
    style: Le
  },
  paddingX: {
    style: Le
  },
  paddingY: {
    style: Le
  },
  paddingInline: {
    style: Le
  },
  paddingInlineStart: {
    style: Le
  },
  paddingInlineEnd: {
    style: Le
  },
  paddingBlock: {
    style: Le
  },
  paddingBlockStart: {
    style: Le
  },
  paddingBlockEnd: {
    style: Le
  },
  m: {
    style: _e
  },
  mt: {
    style: _e
  },
  mr: {
    style: _e
  },
  mb: {
    style: _e
  },
  ml: {
    style: _e
  },
  mx: {
    style: _e
  },
  my: {
    style: _e
  },
  margin: {
    style: _e
  },
  marginTop: {
    style: _e
  },
  marginRight: {
    style: _e
  },
  marginBottom: {
    style: _e
  },
  marginLeft: {
    style: _e
  },
  marginX: {
    style: _e
  },
  marginY: {
    style: _e
  },
  marginInline: {
    style: _e
  },
  marginInlineStart: {
    style: _e
  },
  marginInlineEnd: {
    style: _e
  },
  marginBlock: {
    style: _e
  },
  marginBlockStart: {
    style: _e
  },
  marginBlockEnd: {
    style: _e
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
    style: Un
  },
  rowGap: {
    style: Wn
  },
  columnGap: {
    style: zn
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
    style: Go
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
function Zc(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function qc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function eu() {
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
      cssProperty: d = r,
      themeKey: f,
      transform: m,
      style: g
    } = l;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const b = Ln(o, f) || {};
    return g ? g(a) : jt(a, n, (h) => {
      let p = Cn(b, m, h);
      return h === p && typeof h == "string" && (p = Cn(b, m, `${r}${h === "default" ? "" : se(h)}`, h)), d === !1 ? p : {
        [d]: p
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
    const a = o.unstable_sxConfig ?? Kn;
    function l(d) {
      let f = d;
      if (typeof d == "function")
        f = d(o);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const m = mc(o.breakpoints), g = Object.keys(m);
      let b = m;
      return Object.keys(f).forEach((v) => {
        const h = qc(f[v], o);
        if (h != null)
          if (typeof h == "object")
            if (a[v])
              b = Fr(b, e(v, h, o, a));
            else {
              const p = jt({
                theme: o
              }, h, (x) => ({
                [v]: x
              }));
              Zc(p, h) ? b[v] = t({
                sx: h,
                theme: o,
                nested: !0
              }) : b = Fr(b, p);
            }
          else
            b = Fr(b, e(v, h, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Yi(o, Ji(g, b))
      } : Yi(o, Ji(g, b));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const or = eu();
or.filterProps = ["sx"];
function tu(e, t) {
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
function Yo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, l = lc(r), d = es(o);
  let f = it({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...pc,
      ...i
    }
  }, a);
  return f = dc(f), f.applyStyles = tu, f = t.reduce((m, g) => it(m, g), f), f.unstable_sxConfig = {
    ...Kn,
    ...a?.unstable_sxConfig
  }, f.unstable_sx = function(g) {
    return or({
      sx: g,
      theme: this
    });
  }, f;
}
function ru(e) {
  return Object.keys(e).length === 0;
}
function Qo(e = null) {
  const t = A.useContext(Ga);
  return !t || ru(t) ? e : t;
}
const nu = Yo();
function ts(e = nu) {
  return Qo(e);
}
function ho(e) {
  const t = Wt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function rs({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = ts(r), o = t && n[t] || n;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => ho(typeof a == "function" ? a(o) : a)) : i = ho(i)), /* @__PURE__ */ u.jsx(Ko, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (rs.propTypes = {
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
const Zi = (e) => e, ou = () => {
  let e = Zi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zi;
    }
  };
}, iu = ou();
function ns(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ns(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ke() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ns(e)) && (n && (n += " "), n += t);
  return n;
}
const au = {
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
  const n = au[t];
  return n ? `${r}-${n}` : `${iu.generate(e)}-${t}`;
}
function rt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = yt(e, o, r);
  }), n;
}
function os(e, t = "") {
  return e.displayName || e.name || t;
}
function qi(e, t, r) {
  const n = os(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function su(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return os(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Tn.ForwardRef:
          return qi(e, e.render, "ForwardRef");
        case Tn.Memo:
          return qi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function is(e) {
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
const lu = Yo();
function go(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function cu(e) {
  return e ? (t, r) => r[e] : null;
}
function uu(e, t, r) {
  e.theme = mu(e.theme) ? r : e.theme[t] || e.theme;
}
function bn(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => bn(e, o, r));
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
    return as(e, n.variants, [o], r);
  }
  return n?.isProcessed ? r ? qt(Wt(n.style), r) : n.style : r ? qt(Wt(n), r) : n;
}
function as(e, t, r = [], n = void 0) {
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
function du(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = lu,
    rootShouldForwardProp: n = go,
    slotShouldForwardProp: o = go
  } = e;
  function i(l) {
    uu(l, t, r);
  }
  return (l, d = {}) => {
    nc(l, (C) => C.filter((N) => N !== or));
    const {
      name: f,
      slot: m,
      skipVariantsResolver: g,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = cu(ss(m)),
      ...h
    } = d, p = f && f.startsWith("Mui") || m ? "components" : "custom", x = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), T = b || !1;
    let w = go;
    m === "Root" || m === "root" ? w = n : m ? w = o : hu(l) && (w = void 0);
    const $ = rc(l, {
      shouldForwardProp: w,
      label: fu(f, m),
      ...h
    }), E = (C) => {
      if (C.__emotion_real === C)
        return C;
      if (typeof C == "function")
        return function(M) {
          return bn(M, C, M.theme.modularCssLayers ? p : void 0);
        };
      if ($t(C)) {
        const N = is(C);
        return function(R) {
          return N.variants ? bn(R, N, R.theme.modularCssLayers ? p : void 0) : R.theme.modularCssLayers ? qt(N.style, p) : N.style;
        };
      }
      return C;
    }, S = (...C) => {
      const N = [], M = C.map(E), R = [];
      if (N.push(i), f && v && R.push(function(j) {
        const W = j.theme.components?.[f]?.styleOverrides;
        if (!W)
          return null;
        const F = {};
        for (const X in W)
          F[X] = bn(j, W[X], j.theme.modularCssLayers ? "theme" : void 0);
        return v(j, F);
      }), f && !x && R.push(function(j) {
        const W = j.theme?.components?.[f]?.variants;
        return W ? as(j, W, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
      }), T || R.push(or), Array.isArray(M[0])) {
        const c = M.shift(), j = new Array(N.length).fill(""), k = new Array(R.length).fill("");
        let W;
        W = [...j, ...c, ...k], W.raw = [...j, ...c.raw, ...k], N.unshift(W);
      }
      const _ = [...N, ...M, ...R], P = $(..._);
      return l.muiName && (P.muiName = l.muiName), process.env.NODE_ENV !== "production" && (P.displayName = pu(f, m, l)), P;
    };
    return $.withConfig && (S.withConfig = $.withConfig), S;
  };
}
function pu(e, t, r) {
  return e ? `${e}${se(t || "")}` : `Styled(${su(r)})`;
}
function fu(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ss(t || "Root")}`), r;
}
function mu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function hu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ss(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Oo(e, t, r = !1) {
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
          for (const d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
              const f = d;
              n[i][f] = Oo(a[f], l[f], r);
            }
        }
      } else i === "className" && r && t.className ? n.className = ke(e?.className, t?.className) : i === "style" && r && t.style ? n.style = {
        ...e?.style,
        ...t?.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const ir = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function gu(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Jo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), gu(e, t, r);
}
function yu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ht(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ht(yu(e));
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
const bu = (e) => {
  const t = Ht(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Vr = (e, t) => {
  try {
    return bu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Hn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ls(e) {
  e = Ht(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, m = (f + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let l = "rgb";
  const d = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", d.push(t[3])), Hn({
    type: l,
    values: d
  });
}
function Ro(e) {
  e = Ht(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ht(ls(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ea(e, t) {
  const r = Ro(e), n = Ro(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function wn(e, t) {
  return e = Ht(e), t = Jo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Hn(e);
}
function Zt(e, t, r) {
  try {
    return wn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Gn(e, t) {
  if (e = Ht(e), t = Jo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Hn(e);
}
function Ee(e, t, r) {
  try {
    return Gn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Yn(e, t) {
  if (e = Ht(e), t = Jo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Hn(e);
}
function Te(e, t, r) {
  try {
    return Yn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function vu(e, t = 0.15) {
  return Ro(e) > 0.5 ? Gn(e, t) : Yn(e, t);
}
function pn(e, t, r) {
  try {
    return vu(e, t);
  } catch {
    return e;
  }
}
const xu = "exact-prop: ​";
function Xo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [xu]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Zo = /* @__PURE__ */ A.createContext(null);
process.env.NODE_ENV !== "production" && (Zo.displayName = "ThemeContext");
function qo() {
  const e = A.useContext(Zo);
  return process.env.NODE_ENV !== "production" && A.useDebugValue(e), e;
}
const Su = typeof Symbol == "function" && Symbol.for, Eu = Su ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Tu(e, t) {
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
function On(e) {
  const {
    children: t,
    theme: r
  } = e, n = qo();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = A.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Tu(n, r);
    return i != null && (i[Eu] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ u.jsx(Zo.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (On.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: s.oneOfType([s.object, s.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (On.propTypes = Xo(On.propTypes));
const cs = /* @__PURE__ */ A.createContext();
function us({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(cs.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (us.propTypes = {
  children: s.node,
  value: s.bool
});
const Cu = () => A.useContext(cs) ?? !1, ds = /* @__PURE__ */ A.createContext(void 0);
function ps({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(ds.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ps.propTypes = {
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
function wu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Oo(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Oo(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Ou({
  props: e,
  name: t
}) {
  const r = A.useContext(ds);
  return wu({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let ta = 0;
function Ru(e) {
  const [t, r] = A.useState(e), n = e || t;
  return A.useEffect(() => {
    t == null && (ta += 1, r(`mui-${ta}`));
  }, [t]), n;
}
const Pu = {
  ...A
}, ra = Pu.useId;
function ei(e) {
  if (ra !== void 0) {
    const t = ra();
    return e ?? t;
  }
  return Ru(e);
}
function ku(e) {
  const t = Qo(), r = ei() || "", {
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
  }, [o, r]), o ? /* @__PURE__ */ u.jsx(rs, {
    styles: o
  }) : null;
}
const na = {};
function oa(e, t, r, n = !1) {
  return A.useMemo(() => {
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
function Hr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Qo(na), i = qo() || na;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = oa(n, o, r), l = oa(n, i, r, !0), d = (n ? a[n] : a).direction === "rtl", f = ku(a);
  return /* @__PURE__ */ u.jsx(On, {
    theme: l,
    children: /* @__PURE__ */ u.jsx(Ga.Provider, {
      value: a,
      children: /* @__PURE__ */ u.jsx(us, {
        value: d,
        children: /* @__PURE__ */ u.jsxs(ps, {
          value: n ? a[n].components : a.components,
          children: [f, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Hr.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Hr.propTypes = Xo(Hr.propTypes));
const ia = {
  theme: void 0
};
function $u(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (ia.theme = o.theme, i = is(e(ia)), t = i, r = o.theme), i;
  };
}
const ti = "mode", ri = "color-scheme", ju = "data-color-scheme";
function Iu(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = ti,
    colorSchemeStorageKey: i = ri,
    attribute: a = ju,
    colorSchemeNode: l = "document.documentElement",
    nonce: d
  } = e || {};
  let f = "", m = a;
  if (a === "class" && (m = ".%s"), a === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const b = m.substring(1);
    f += `${l}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${l}.classList.add('${b}'.replace('%s', colorScheme));`;
  }
  const g = m.match(/\[([^[\]]+)\]/);
  if (g) {
    const [b, v] = g[1].split("=");
    v || (f += `${l}.removeAttribute('${b}'.replace('%s', light));
      ${l}.removeAttribute('${b}'.replace('%s', dark));`), f += `
      ${l}.setAttribute('${b}'.replace('%s', colorScheme), ${v ? `${v}.replace('%s', colorScheme)` : '""'});`;
  } else
    f += `${l}.setAttribute('${m}', colorScheme);`;
  return /* @__PURE__ */ u.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? d : "",
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
function Au() {
}
const Nu = ({
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
      return Au;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function yo() {
}
function aa(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function fs(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Mu(e) {
  return fs(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function _u(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = ti,
    colorSchemeStorageKey: a = ri,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: d = Nu,
    noSsr: f = !1
  } = e, m = o.join(","), g = o.length > 1, b = A.useMemo(() => d?.({
    key: i,
    storageWindow: l
  }), [d, i, l]), v = A.useMemo(() => d?.({
    key: `${a}-light`,
    storageWindow: l
  }), [d, a, l]), h = A.useMemo(() => d?.({
    key: `${a}-dark`,
    storageWindow: l
  }), [d, a, l]), [p, x] = A.useState(() => {
    const M = b?.get(t) || t, R = v?.get(r) || r, _ = h?.get(n) || n;
    return {
      mode: M,
      systemMode: aa(M),
      lightColorScheme: R,
      darkColorScheme: _
    };
  }), [T, w] = A.useState(f || !g);
  A.useEffect(() => {
    w(!0);
  }, []);
  const $ = Mu(p), E = A.useCallback((M) => {
    x((R) => {
      if (M === R.mode)
        return R;
      const _ = M ?? t;
      return b?.set(_), {
        ...R,
        mode: _,
        systemMode: aa(_)
      };
    });
  }, [b, t]), S = A.useCallback((M) => {
    M ? typeof M == "string" ? M && !m.includes(M) ? console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`) : x((R) => {
      const _ = {
        ...R
      };
      return fs(R, (P) => {
        P === "light" && (v?.set(M), _.lightColorScheme = M), P === "dark" && (h?.set(M), _.darkColorScheme = M);
      }), _;
    }) : x((R) => {
      const _ = {
        ...R
      }, P = M.light === null ? r : M.light, c = M.dark === null ? n : M.dark;
      return P && (m.includes(P) ? (_.lightColorScheme = P, v?.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), c && (m.includes(c) ? (_.darkColorScheme = c, h?.set(c)) : console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`)), _;
    }) : x((R) => (v?.set(r), h?.set(n), {
      ...R,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, v, h, r, n]), C = A.useCallback((M) => {
    p.mode === "system" && x((R) => {
      const _ = M?.matches ? "dark" : "light";
      return R.systemMode === _ ? R : {
        ...R,
        systemMode: _
      };
    });
  }, [p.mode]), N = A.useRef(C);
  return N.current = C, A.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const M = (..._) => N.current(..._), R = window.matchMedia("(prefers-color-scheme: dark)");
    return R.addListener(M), M(R), () => {
      R.removeListener(M);
    };
  }, [g]), A.useEffect(() => {
    if (g) {
      const M = b?.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && E(P || t);
      }) || yo, R = v?.subscribe((P) => {
        (!P || m.match(P)) && S({
          light: P
        });
      }) || yo, _ = h?.subscribe((P) => {
        (!P || m.match(P)) && S({
          dark: P
        });
      }) || yo;
      return () => {
        M(), R(), _();
      };
    }
  }, [S, E, m, t, l, g, b, v, h]), {
    ...p,
    mode: T ? p.mode : void 0,
    systemMode: T ? p.systemMode : void 0,
    colorScheme: T ? $ : void 0,
    setMode: E,
    setColorScheme: S
  };
}
const Lu = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Du(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = ti,
    colorSchemeStorageKey: o = ri,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: a,
    resolveTheme: l
  } = e, d = {
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
  }, f = /* @__PURE__ */ A.createContext(void 0);
  process.env.NODE_ENV !== "production" && (f.displayName = "ColorSchemeContext");
  const m = () => A.useContext(f) || d, g = {}, b = {};
  function v(T) {
    const {
      children: w,
      theme: $,
      modeStorageKey: E = n,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: C = i,
      storageManager: N,
      storageWindow: M = typeof window > "u" ? void 0 : window,
      documentNode: R = typeof document > "u" ? void 0 : document,
      colorSchemeNode: _ = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: P = !1,
      disableStyleSheetGeneration: c = !1,
      defaultMode: j = "system",
      forceThemeRerender: k = !1,
      noSsr: W
    } = T, F = A.useRef(!1), X = qo(), ee = A.useContext(f), ie = !!ee && !P, y = A.useMemo(() => $ || (typeof r == "function" ? r() : r), [$]), O = y[t], L = O || y, {
      colorSchemes: I = g,
      components: z = b,
      cssVarPrefix: K
    } = L, B = Object.keys(I).filter((he) => !!I[he]).join(","), H = A.useMemo(() => B.split(","), [B]), Q = typeof a == "string" ? a : a.light, Y = typeof a == "string" ? a : a.dark, J = I[Q] && I[Y] ? j : I[L.defaultColorScheme]?.palette?.mode || L.palette?.mode, {
      mode: ge,
      setMode: G,
      systemMode: ue,
      lightColorScheme: De,
      darkColorScheme: Ue,
      colorScheme: Se,
      setColorScheme: ze
    } = _u({
      supportedColorSchemes: H,
      defaultLightColorScheme: Q,
      defaultDarkColorScheme: Y,
      modeStorageKey: E,
      colorSchemeStorageKey: S,
      defaultMode: J,
      storageManager: N,
      storageWindow: M,
      noSsr: W
    });
    let re = ge, je = Se;
    ie && (re = ee.mode, je = ee.colorScheme), process.env.NODE_ENV !== "production" && k && !L.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let ce = je || L.defaultColorScheme;
    L.vars && !k && (ce = L.defaultColorScheme);
    const Me = A.useMemo(() => {
      const he = L.generateThemeVars?.() || L.vars, de = {
        ...L,
        components: z,
        colorSchemes: I,
        cssVarPrefix: K,
        vars: he
      };
      if (typeof de.generateSpacing == "function" && (de.spacing = de.generateSpacing()), ce) {
        const Oe = I[ce];
        Oe && typeof Oe == "object" && Object.keys(Oe).forEach((Ke) => {
          Oe[Ke] && typeof Oe[Ke] == "object" ? de[Ke] = {
            ...de[Ke],
            ...Oe[Ke]
          } : de[Ke] = Oe[Ke];
        });
      }
      return l ? l(de) : de;
    }, [L, ce, z, I, K]), ne = L.colorSchemeSelector;
    ir(() => {
      if (je && _ && ne && ne !== "media") {
        const he = ne;
        let de = ne;
        if (he === "class" && (de = ".%s"), he === "data" && (de = "[data-%s]"), he?.startsWith("data-") && !he.includes("%s") && (de = `[${he}="%s"]`), de.startsWith("."))
          _.classList.remove(...H.map((Oe) => de.substring(1).replace("%s", Oe))), _.classList.add(de.substring(1).replace("%s", je));
        else {
          const Oe = de.replace("%s", je).match(/\[([^\]]+)\]/);
          if (Oe) {
            const [Ke, He] = Oe[1].split("=");
            He || H.forEach((Re) => {
              _.removeAttribute(Ke.replace(je, Re));
            }), _.setAttribute(Ke, He ? He.replace(/"|'/g, "") : "");
          } else
            _.setAttribute(de, je);
        }
      }
    }, [je, ne, _, H]), A.useEffect(() => {
      let he;
      if (C && F.current && R) {
        const de = R.createElement("style");
        de.appendChild(R.createTextNode(Lu)), R.head.appendChild(de), window.getComputedStyle(R.body), he = setTimeout(() => {
          R.head.removeChild(de);
        }, 1);
      }
      return () => {
        clearTimeout(he);
      };
    }, [je, C, R]), A.useEffect(() => (F.current = !0, () => {
      F.current = !1;
    }), []);
    const Xe = A.useMemo(() => ({
      allColorSchemes: H,
      colorScheme: je,
      darkColorScheme: Ue,
      lightColorScheme: De,
      mode: re,
      setColorScheme: ze,
      setMode: process.env.NODE_ENV === "production" ? G : (he) => {
        Me.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), G(he);
      },
      systemMode: ue
    }), [H, je, Ue, De, re, ze, G, ue, Me.colorSchemeSelector]);
    let Ve = !0;
    (c || L.cssVariables === !1 || ie && X?.cssVarPrefix === K) && (Ve = !1);
    const oe = /* @__PURE__ */ u.jsxs(A.Fragment, {
      children: [/* @__PURE__ */ u.jsx(Hr, {
        themeId: O ? t : void 0,
        theme: Me,
        children: w
      }), Ve && /* @__PURE__ */ u.jsx(Ko, {
        styles: Me.generateStyleSheets?.() || []
      })]
    });
    return ie ? oe : /* @__PURE__ */ u.jsx(f.Provider, {
      value: Xe,
      children: oe
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
  const h = typeof a == "string" ? a : a.light, p = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: v,
    useColorScheme: m,
    getInitColorSchemeScript: (T) => Iu({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: h,
      defaultDarkColorScheme: p,
      modeStorageKey: n,
      ...T
    })
  };
}
function Vu(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const sa = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Bu = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([l, d]) => {
      (!r || r && !r([...i, l])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, l], Array.isArray(d) ? [...a, l] : a) : t([...i, l], d, a));
    });
  }
  n(e);
}, Fu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function bo(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Bu(
    e,
    (l, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(l, d))) {
        const m = `--${r ? `${r}-` : ""}${l.join("-")}`, g = Fu(l, d);
        Object.assign(o, {
          [m]: g
        }), sa(i, l, `var(${m})`, f), sa(a, l, `var(${m}, ${g})`, f);
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
function Uu(e, t = {}) {
  const {
    getSelector: r = T,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: l,
    defaultColorScheme: d = "light",
    ...f
  } = e, {
    vars: m,
    css: g,
    varsWithDefaults: b
  } = bo(f, t);
  let v = b;
  const h = {}, {
    [d]: p,
    ...x
  } = a;
  if (Object.entries(x || {}).forEach(([E, S]) => {
    const {
      vars: C,
      css: N,
      varsWithDefaults: M
    } = bo(S, t);
    v = it(v, M), h[E] = {
      css: N,
      vars: C
    };
  }), p) {
    const {
      css: E,
      vars: S,
      varsWithDefaults: C
    } = bo(p, t);
    v = it(v, C), h[d] = {
      css: E,
      vars: S
    };
  }
  function T(E, S) {
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), E) {
      if (C === "media")
        return e.defaultColorScheme === E ? ":root" : {
          [`@media (prefers-color-scheme: ${a[E]?.palette?.mode || E})`]: {
            ":root": S
          }
        };
      if (C)
        return e.defaultColorScheme === E ? `:root, ${C.replace("%s", String(E))}` : C.replace("%s", String(E));
    }
    return ":root";
  }
  return {
    vars: v,
    generateThemeVars: () => {
      let E = {
        ...m
      };
      return Object.entries(h).forEach(([, {
        vars: S
      }]) => {
        E = it(E, S);
      }), E;
    },
    generateStyleSheets: () => {
      const E = [], S = e.defaultColorScheme || "light";
      function C(R, _) {
        Object.keys(_).length && E.push(typeof R == "string" ? {
          [R]: {
            ..._
          }
        } : R);
      }
      C(r(void 0, {
        ...g
      }), g);
      const {
        [S]: N,
        ...M
      } = h;
      if (N) {
        const {
          css: R
        } = N, _ = a[S]?.palette?.mode, P = !n && _ ? {
          colorScheme: _,
          ...R
        } : {
          ...R
        };
        C(r(S, {
          ...P
        }), P);
      }
      return Object.entries(M).forEach(([R, {
        css: _
      }]) => {
        const P = a[R]?.palette?.mode, c = !n && P ? {
          colorScheme: P,
          ..._
        } : {
          ..._
        };
        C(r(R, {
          ...c
        }), c);
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
function zu(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function At(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", l = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (a += (l === !0 ? "" : " ") + t(f), l = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
const Gr = {
  black: "#000",
  white: "#fff"
}, Wu = {
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
}, pr = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, fr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Mr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, mr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, hr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, gr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function ms() {
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
      paper: Gr.white,
      default: Gr.white
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
const hs = ms();
function gs() {
  return {
    text: {
      primary: Gr.white,
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
      active: Gr.white,
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
const Po = gs();
function la(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Yn(e.main, o) : t === "dark" && (e.dark = Gn(e.main, i)));
}
function ca(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function Ku(e = "light") {
  return e === "dark" ? {
    main: mr[200],
    light: mr[50],
    dark: mr[400]
  } : {
    main: mr[700],
    light: mr[400],
    dark: mr[800]
  };
}
function Hu(e = "light") {
  return e === "dark" ? {
    main: pr[200],
    light: pr[50],
    dark: pr[400]
  } : {
    main: pr[500],
    light: pr[300],
    dark: pr[700]
  };
}
function Gu(e = "light") {
  return e === "dark" ? {
    main: fr[500],
    light: fr[300],
    dark: fr[700]
  } : {
    main: fr[700],
    light: fr[400],
    dark: fr[800]
  };
}
function Yu(e = "light") {
  return e === "dark" ? {
    main: hr[400],
    light: hr[300],
    dark: hr[700]
  } : {
    main: hr[700],
    light: hr[500],
    dark: hr[900]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: gr[400],
    light: gr[300],
    dark: gr[700]
  } : {
    main: gr[800],
    light: gr[500],
    dark: gr[900]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: Mr[400],
    light: Mr[300],
    dark: Mr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mr[500],
    dark: Mr[900]
  };
}
function Xu(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function ni(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || Ku(t), l = e.secondary || Hu(t), d = e.error || Gu(t), f = e.info || Yu(t), m = e.success || Qu(t), g = e.warning || Ju(t);
  function b(x) {
    if (o)
      return Xu(x);
    const T = ea(x, Po.text.primary) >= r ? Po.text.primary : hs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = ea(x, T);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${T} on ${x}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return T;
  }
  const v = ({
    color: x,
    name: T,
    mainShade: w = 500,
    lightShade: $ = 300,
    darkShade: E = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[w] && (x.main = x[w]), !x.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Kt(11, T ? ` (${T})` : "", w));
    if (typeof x.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${T ? ` (${T})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(x.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Kt(12, T ? ` (${T})` : "", JSON.stringify(x.main)));
    return o ? (ca(o, x, "light", $, n), ca(o, x, "dark", E, n)) : (la(x, "light", $, n), la(x, "dark", E, n)), x.contrastText || (x.contrastText = b(x.main)), x;
  };
  let h;
  return t === "light" ? h = ms() : t === "dark" && (h = gs()), process.env.NODE_ENV !== "production" && (h || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), it({
    // A collection of common colors.
    common: {
      ...Gr
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
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: g,
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
    grey: Wu,
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
    ...h
  }, i);
}
function Zu(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function qu(e, t) {
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
function ed(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ua = {
  textTransform: "uppercase"
}, da = '"Roboto", "Helvetica", "Arial", sans-serif';
function ys(e, t) {
  const {
    fontFamily: r = da,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, v = m || ((x) => `${x / d * b}rem`), h = (x, T, w, $, E) => ({
    fontFamily: r,
    fontWeight: x,
    fontSize: v(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === da ? {
      letterSpacing: `${ed($ / T)}em`
    } : {},
    ...E,
    ...f
  }), p = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(a, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(a, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(a, 14, 1.75, 0.4, ua),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, ua),
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
    htmlFontSize: d,
    pxToRem: v,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...p
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const td = 0.2, rd = 0.14, nd = 0.12;
function Ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${td})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${rd})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${nd})`].join(",");
}
const od = ["none", Ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], id = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ad = {
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
function pa(e) {
  return `${Math.round(e)}ms`;
}
function sd(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ld(e) {
  const t = {
    ...id,
    ...e.easing
  }, r = {
    ...ad,
    ...e.duration
  };
  return {
    getAutoHeightDuration: sd,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: l = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (b) => typeof b == "string", g = (b) => !Number.isNaN(parseFloat(b));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(l) || console.error('MUI: Argument "easing" must be a string.'), !g(d) && !m(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : pa(a)} ${l} ${typeof d == "string" ? d : pa(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const cd = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ud(e) {
  return $t(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function bs(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, l] = o[i];
      !ud(l) || a.startsWith("unstable_") ? delete n[a] : $t(l) && (n[a] = {
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
function fa(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const dd = (e) => {
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
function pd(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : wn(t, dd(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${fa(r)})` : Yn(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${fa(r)})` : Gn(t, r);
    }
  });
}
function ko(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: l = {},
    shape: d,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Kt(20));
  const g = ni({
    ...i,
    colorSpace: f
  }), b = Yo(e);
  let v = it(b, {
    mixins: qu(b.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: od.slice(),
    typography: ys(g, l),
    transitions: ld(a),
    zIndex: {
      ...cd
    }
  });
  if (v = it(v, m), v = t.reduce((h, p) => it(h, p), v), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (x, T) => {
      let w;
      for (w in x) {
        const $ = x[w];
        if (h.includes(w) && Object.keys($).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = yt("", w);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(x, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: $
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          x[w] = {};
        }
      }
    };
    Object.keys(v.components).forEach((x) => {
      const T = v.components[x].styleOverrides;
      T && x.startsWith("Mui") && p(T, x);
    });
  }
  return v.unstable_sxConfig = {
    ...Kn,
    ...m?.unstable_sxConfig
  }, v.unstable_sx = function(p) {
    return or({
      sx: p,
      theme: this
    });
  }, v.toRuntimeSource = bs, pd(v), v;
}
function $o(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const fd = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = $o(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function vs(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function xs(e) {
  return e === "dark" ? fd : [];
}
function md(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = ni({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...vs(a.mode),
      ...r
    },
    overlays: n || xs(a.mode),
    ...i
  };
}
function hd(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const gd = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], yd = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return gd(e.cssVarPrefix).forEach((l) => {
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
function bd(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function V(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Br(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ls(e);
}
function Pt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Vr(Br(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function vd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const bt = (e) => {
  try {
    return e();
  } catch {
  }
}, xd = (e = "mui") => Vu(e);
function vo(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = md({
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
  } = ko({
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
      ...vs(i),
      ...r?.opacity
    },
    overlays: r?.overlays || xs(i)
  }, l;
}
function Sd(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: l = hd,
    colorSchemeSelector: d = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...m
  } = e, g = Object.keys(r)[0], b = n || (r.light && g !== "light" ? "light" : g), v = xd(i), {
    [b]: h,
    light: p,
    dark: x,
    ...T
  } = r, w = {
    ...T
  };
  let $ = h;
  if ((b === "dark" && !("dark" in r) || b === "light" && !("light" in r)) && ($ = !0), !$)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${b}\` option is either missing or invalid.` : Kt(21, b));
  let E;
  a && (E = "oklch");
  const S = vo(E, w, $, m, b);
  p && !w.light && vo(E, w, p, void 0, "light"), x && !w.dark && vo(E, w, x, void 0, "dark");
  let C = {
    defaultColorScheme: b,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: d,
    rootSelector: f,
    getCssVar: v,
    colorSchemes: w,
    font: {
      ...Zu(S.typography),
      ...S.font
    },
    spacing: vd(m.spacing)
  };
  Object.keys(C.colorSchemes).forEach((P) => {
    const c = C.colorSchemes[P].palette, j = (W) => {
      const F = W.split("-"), X = F[1], ee = F[2];
      return v(W, c[X][ee]);
    };
    c.mode === "light" && (V(c.common, "background", "#fff"), V(c.common, "onBackground", "#000")), c.mode === "dark" && (V(c.common, "background", "#000"), V(c.common, "onBackground", "#fff"));
    function k(W, F, X) {
      if (E) {
        let ee;
        return W === Zt && (ee = `transparent ${((1 - X) * 100).toFixed(0)}%`), W === Ee && (ee = `#000 ${(X * 100).toFixed(0)}%`), W === Te && (ee = `#fff ${(X * 100).toFixed(0)}%`), `color-mix(in ${E}, ${F}, ${ee})`;
      }
      return W(F, X);
    }
    if (bd(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      V(c.Alert, "errorColor", k(Ee, c.error.light, 0.6)), V(c.Alert, "infoColor", k(Ee, c.info.light, 0.6)), V(c.Alert, "successColor", k(Ee, c.success.light, 0.6)), V(c.Alert, "warningColor", k(Ee, c.warning.light, 0.6)), V(c.Alert, "errorFilledBg", j("palette-error-main")), V(c.Alert, "infoFilledBg", j("palette-info-main")), V(c.Alert, "successFilledBg", j("palette-success-main")), V(c.Alert, "warningFilledBg", j("palette-warning-main")), V(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.main))), V(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.main))), V(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.main))), V(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.main))), V(c.Alert, "errorStandardBg", k(Te, c.error.light, 0.9)), V(c.Alert, "infoStandardBg", k(Te, c.info.light, 0.9)), V(c.Alert, "successStandardBg", k(Te, c.success.light, 0.9)), V(c.Alert, "warningStandardBg", k(Te, c.warning.light, 0.9)), V(c.Alert, "errorIconColor", j("palette-error-main")), V(c.Alert, "infoIconColor", j("palette-info-main")), V(c.Alert, "successIconColor", j("palette-success-main")), V(c.Alert, "warningIconColor", j("palette-warning-main")), V(c.AppBar, "defaultBg", j("palette-grey-100")), V(c.Avatar, "defaultBg", j("palette-grey-400")), V(c.Button, "inheritContainedBg", j("palette-grey-300")), V(c.Button, "inheritContainedHoverBg", j("palette-grey-A100")), V(c.Chip, "defaultBorder", j("palette-grey-400")), V(c.Chip, "defaultAvatarColor", j("palette-grey-700")), V(c.Chip, "defaultIconColor", j("palette-grey-700")), V(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), V(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), V(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), V(c.LinearProgress, "primaryBg", k(Te, c.primary.main, 0.62)), V(c.LinearProgress, "secondaryBg", k(Te, c.secondary.main, 0.62)), V(c.LinearProgress, "errorBg", k(Te, c.error.main, 0.62)), V(c.LinearProgress, "infoBg", k(Te, c.info.main, 0.62)), V(c.LinearProgress, "successBg", k(Te, c.success.main, 0.62)), V(c.LinearProgress, "warningBg", k(Te, c.warning.main, 0.62)), V(c.Skeleton, "bg", E ? k(Zt, c.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), V(c.Slider, "primaryTrack", k(Te, c.primary.main, 0.62)), V(c.Slider, "secondaryTrack", k(Te, c.secondary.main, 0.62)), V(c.Slider, "errorTrack", k(Te, c.error.main, 0.62)), V(c.Slider, "infoTrack", k(Te, c.info.main, 0.62)), V(c.Slider, "successTrack", k(Te, c.success.main, 0.62)), V(c.Slider, "warningTrack", k(Te, c.warning.main, 0.62));
      const W = E ? k(Ee, c.background.default, 0.6825) : pn(c.background.default, 0.8);
      V(c.SnackbarContent, "bg", W), V(c.SnackbarContent, "color", bt(() => E ? Po.text.primary : c.getContrastText(W))), V(c.SpeedDialAction, "fabHoverBg", pn(c.background.paper, 0.15)), V(c.StepConnector, "border", j("palette-grey-400")), V(c.StepContent, "border", j("palette-grey-400")), V(c.Switch, "defaultColor", j("palette-common-white")), V(c.Switch, "defaultDisabledColor", j("palette-grey-100")), V(c.Switch, "primaryDisabledColor", k(Te, c.primary.main, 0.62)), V(c.Switch, "secondaryDisabledColor", k(Te, c.secondary.main, 0.62)), V(c.Switch, "errorDisabledColor", k(Te, c.error.main, 0.62)), V(c.Switch, "infoDisabledColor", k(Te, c.info.main, 0.62)), V(c.Switch, "successDisabledColor", k(Te, c.success.main, 0.62)), V(c.Switch, "warningDisabledColor", k(Te, c.warning.main, 0.62)), V(c.TableCell, "border", k(Te, k(Zt, c.divider, 1), 0.88)), V(c.Tooltip, "bg", k(Zt, c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      V(c.Alert, "errorColor", k(Te, c.error.light, 0.6)), V(c.Alert, "infoColor", k(Te, c.info.light, 0.6)), V(c.Alert, "successColor", k(Te, c.success.light, 0.6)), V(c.Alert, "warningColor", k(Te, c.warning.light, 0.6)), V(c.Alert, "errorFilledBg", j("palette-error-dark")), V(c.Alert, "infoFilledBg", j("palette-info-dark")), V(c.Alert, "successFilledBg", j("palette-success-dark")), V(c.Alert, "warningFilledBg", j("palette-warning-dark")), V(c.Alert, "errorFilledColor", bt(() => c.getContrastText(c.error.dark))), V(c.Alert, "infoFilledColor", bt(() => c.getContrastText(c.info.dark))), V(c.Alert, "successFilledColor", bt(() => c.getContrastText(c.success.dark))), V(c.Alert, "warningFilledColor", bt(() => c.getContrastText(c.warning.dark))), V(c.Alert, "errorStandardBg", k(Ee, c.error.light, 0.9)), V(c.Alert, "infoStandardBg", k(Ee, c.info.light, 0.9)), V(c.Alert, "successStandardBg", k(Ee, c.success.light, 0.9)), V(c.Alert, "warningStandardBg", k(Ee, c.warning.light, 0.9)), V(c.Alert, "errorIconColor", j("palette-error-main")), V(c.Alert, "infoIconColor", j("palette-info-main")), V(c.Alert, "successIconColor", j("palette-success-main")), V(c.Alert, "warningIconColor", j("palette-warning-main")), V(c.AppBar, "defaultBg", j("palette-grey-900")), V(c.AppBar, "darkBg", j("palette-background-paper")), V(c.AppBar, "darkColor", j("palette-text-primary")), V(c.Avatar, "defaultBg", j("palette-grey-600")), V(c.Button, "inheritContainedBg", j("palette-grey-800")), V(c.Button, "inheritContainedHoverBg", j("palette-grey-700")), V(c.Chip, "defaultBorder", j("palette-grey-700")), V(c.Chip, "defaultAvatarColor", j("palette-grey-300")), V(c.Chip, "defaultIconColor", j("palette-grey-300")), V(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), V(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), V(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), V(c.LinearProgress, "primaryBg", k(Ee, c.primary.main, 0.5)), V(c.LinearProgress, "secondaryBg", k(Ee, c.secondary.main, 0.5)), V(c.LinearProgress, "errorBg", k(Ee, c.error.main, 0.5)), V(c.LinearProgress, "infoBg", k(Ee, c.info.main, 0.5)), V(c.LinearProgress, "successBg", k(Ee, c.success.main, 0.5)), V(c.LinearProgress, "warningBg", k(Ee, c.warning.main, 0.5)), V(c.Skeleton, "bg", E ? k(Zt, c.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), V(c.Slider, "primaryTrack", k(Ee, c.primary.main, 0.5)), V(c.Slider, "secondaryTrack", k(Ee, c.secondary.main, 0.5)), V(c.Slider, "errorTrack", k(Ee, c.error.main, 0.5)), V(c.Slider, "infoTrack", k(Ee, c.info.main, 0.5)), V(c.Slider, "successTrack", k(Ee, c.success.main, 0.5)), V(c.Slider, "warningTrack", k(Ee, c.warning.main, 0.5));
      const W = E ? k(Te, c.background.default, 0.985) : pn(c.background.default, 0.98);
      V(c.SnackbarContent, "bg", W), V(c.SnackbarContent, "color", bt(() => E ? hs.text.primary : c.getContrastText(W))), V(c.SpeedDialAction, "fabHoverBg", pn(c.background.paper, 0.15)), V(c.StepConnector, "border", j("palette-grey-600")), V(c.StepContent, "border", j("palette-grey-600")), V(c.Switch, "defaultColor", j("palette-grey-300")), V(c.Switch, "defaultDisabledColor", j("palette-grey-600")), V(c.Switch, "primaryDisabledColor", k(Ee, c.primary.main, 0.55)), V(c.Switch, "secondaryDisabledColor", k(Ee, c.secondary.main, 0.55)), V(c.Switch, "errorDisabledColor", k(Ee, c.error.main, 0.55)), V(c.Switch, "infoDisabledColor", k(Ee, c.info.main, 0.55)), V(c.Switch, "successDisabledColor", k(Ee, c.success.main, 0.55)), V(c.Switch, "warningDisabledColor", k(Ee, c.warning.main, 0.55)), V(c.TableCell, "border", k(Ee, k(Zt, c.divider, 1), 0.68)), V(c.Tooltip, "bg", k(Zt, c.grey[700], 0.92));
    }
    Pt(c.background, "default"), Pt(c.background, "paper"), Pt(c.common, "background"), Pt(c.common, "onBackground"), Pt(c, "divider"), Object.keys(c).forEach((W) => {
      const F = c[W];
      W !== "tonalOffset" && F && typeof F == "object" && (F.main && V(c[W], "mainChannel", Vr(Br(F.main))), F.light && V(c[W], "lightChannel", Vr(Br(F.light))), F.dark && V(c[W], "darkChannel", Vr(Br(F.dark))), F.contrastText && V(c[W], "contrastTextChannel", Vr(Br(F.contrastText))), W === "text" && (Pt(c[W], "primary"), Pt(c[W], "secondary")), W === "action" && (F.active && Pt(c[W], "active"), F.selected && Pt(c[W], "selected")));
    });
  }), C = t.reduce((P, c) => it(P, c), C);
  const N = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: yd(C),
    enableContrastVars: a
  }, {
    vars: M,
    generateThemeVars: R,
    generateStyleSheets: _
  } = Uu(C, N);
  return C.vars = M, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([P, c]) => {
    C[P] = c;
  }), C.generateThemeVars = R, C.generateStyleSheets = _, C.generateSpacing = function() {
    return es(m.spacing, Ho(this));
  }, C.getColorSchemeSelector = zu(d), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = l, C.unstable_sxConfig = {
    ...Kn,
    ...m?.unstable_sxConfig
  }, C.unstable_sx = function(c) {
    return or({
      sx: c,
      theme: this
    });
  }, C.toRuntimeSource = bs, C;
}
function ma(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ni({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ss(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r?.mode,
    ...a
  } = e, l = i || "light", d = o?.[l], f = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return ko(e, ...t);
    let m = r;
    "palette" in e || f[l] && (f[l] !== !0 ? m = f[l].palette : l === "dark" && (m = {
      mode: "dark"
    }));
    const g = ko({
      ...e,
      palette: m
    }, ...t);
    return g.defaultColorScheme = l, g.colorSchemes = f, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: g.palette
    }, ma(g, "dark", f.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: g.palette
    }, ma(g, "light", f.light)), g;
  }
  return !r && !("light" in f) && l === "light" && (f.light = !0), Sd({
    ...a,
    colorSchemes: f,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Es = Ss();
function Ed() {
  const e = ts(Es);
  return process.env.NODE_ENV !== "production" && A.useDebugValue(e), e[zt] || e;
}
function Td(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Cd = (e) => Td(e) && e !== "classes", $e = du({
  themeId: zt,
  defaultTheme: Es,
  rootShouldForwardProp: Cd
});
function wd({
  theme: e,
  ...t
}) {
  const r = zt in e ? e[zt] : void 0;
  return /* @__PURE__ */ u.jsx(Hr, {
    ...t,
    themeId: r ? zt : void 0,
    theme: r || e
  });
}
const fn = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (s.string, s.string, s.string, s.string, s.string, s.oneOf(["dark", "light", "system"]), s.string, s.string);
const {
  CssVarsProvider: Od
} = Du({
  themeId: zt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ss({
    cssVariables: !0
  }),
  colorSchemeStorageKey: fn.colorSchemeStorageKey,
  modeStorageKey: fn.modeStorageKey,
  defaultColorScheme: {
    light: fn.defaultLightColorScheme,
    dark: fn.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: ys(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return or({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Rd = Od;
function Pd({
  theme: e,
  ...t
}) {
  const r = A.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = zt in e ? e[zt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ u.jsx(wd, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ u.jsx(Rd, {
    theme: e,
    ...t
  });
}
const ha = "/lookup", vn = /* @__PURE__ */ new Map();
let _r = null;
const kd = typeof window < "u";
function Ts() {
  if (!kd)
    return null;
  if (_r)
    return _r;
  try {
    _r = rl.createInstance({
      name: "react-questionnaire-renderer",
      storeName: "lookup-cache"
    });
  } catch (e) {
    console.warn("[lookup-cache] Failed to create localforage instance:", e), _r = null;
  }
  return _r;
}
function $d(e = {}) {
  if (!e || typeof e != "object")
    return "unknown::latest";
  const t = e.cacheKey || e.id || e.tableName || e.value || "lookup", r = e.version || "latest";
  return `${t}::${r}`;
}
async function jd(e) {
  if (!e) return null;
  if (vn.has(e))
    return vn.get(e);
  const t = Ts();
  if (!t) return null;
  try {
    const r = await t.getItem(e);
    if (r)
      return vn.set(e, r), r;
  } catch (r) {
    console.warn("[lookup-cache] Failed to read cache:", e, r);
  }
  return null;
}
async function Id(e, t) {
  if (e)
    try {
      vn.set(e, t);
      const r = Ts();
      r && await r.setItem(e, t);
    } catch (r) {
      console.warn("[lookup-cache] Failed to persist cache:", e, r);
    }
}
function ga(e) {
  return e ? Array.isArray(e) ? e : e.data && Array.isArray(e.data) ? e.data : e.items && Array.isArray(e.items) ? e.items : [] : [];
}
function Ad(e) {
  return e ? String(e).replace(/^\/+/, "").replace(/\.json$/i, "") : "";
}
function Nd(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Md(e = {}, t = {}) {
  if (!e || typeof e != "object") return null;
  if (typeof t.resolveLookupUrl == "function") {
    const d = t.resolveLookupUrl(e, t);
    if (d) return d;
  }
  if (e.url)
    return e.url;
  const r = t.lookupBaseUrl ?? ha, n = Nd(r || ha), o = e.fileName || e.id || e.tableName || e.cacheKey;
  if (!o) return null;
  const i = Ad(o), a = e.fileName?.endsWith(".json") ? e.fileName : `${i}.json`;
  return /^https?:/i.test(a) ? a : /^https?:/i.test(n) ? `${n}/${a}` : `${n.startsWith("/") ? n : `/${n}`}/${a}`.replace(/([^:]\/)(\/+)/g, "$1");
}
async function _d(e) {
  if (typeof fetch != "function")
    throw new Error("Global fetch is not available. Provide lookupClient or polyfill fetch.");
  const t = await fetch(e);
  if (!t.ok) {
    const r = `[lookup] Request failed: ${t.status} ${t.statusText}`;
    throw new Error(r);
  }
  return t.json();
}
async function Ld(e = {}, t = {}) {
  const r = Md(e, t);
  if (!r)
    throw new Error("Unable to resolve lookup URL from source definition");
  if (t.lookupClient && typeof t.lookupClient.get == "function") {
    const o = await t.lookupClient.get(r, e.requestConfig || {});
    return ga(o && o.data !== void 0 ? o.data : o);
  }
  const n = await _d(r);
  return ga(n);
}
function xo(e, t) {
  return e === t ? !0 : e == null || t == null ? !1 : String(e) === String(t);
}
const Cs = Js(), fe = {
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
}, ya = typeof navigator < "u" ? navigator : void 0, So = (e) => {
  if (typeof structuredClone == "function")
    return structuredClone(e);
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
    return e;
  }
}, Lr = (e, t) => {
  if (e === t) return !0;
  try {
    return JSON.stringify(e) === JSON.stringify(t);
  } catch {
    return !1;
  }
}, Dd = {
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
  isOnline: ya ? ya.onLine : !0,
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
function Vd(e, t) {
  switch (t.type) {
    case fe.SET_QUESTIONNAIRE:
      return Lr(e.template, t.payload) ? e : {
        ...e,
        questionnaire: t.payload,
        template: t.payload
      };
    case fe.SET_VALIDATION:
      return Lr(e.validation, t.payload) ? e : { ...e, validation: t.payload };
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
        isDirty: !Lr(r, e.initialResponses)
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
      const r = So(t.payload || {});
      return {
        ...e,
        initialResponses: r,
        responses: So(t.payload || {}),
        isDirty: !1
      };
    }
    case fe.RESET_RESPONSES:
      return {
        ...e,
        responses: So(e.initialResponses || {}),
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
        return Lr(e.config, r) ? e : {
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
      return o && Lr(o, n) ? {
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
function Bd({ children: e }) {
  const [t, r] = Xs(Vd, Dd), n = Qe(/* @__PURE__ */ new Map());
  Pe(() => {
    if (typeof window > "u")
      return;
    const S = () => r({ type: fe.SET_OFFLINE, payload: !1 }), C = () => r({ type: fe.SET_OFFLINE, payload: !0 });
    return window.addEventListener("online", S), window.addEventListener("offline", C), () => {
      window.removeEventListener("online", S), window.removeEventListener("offline", C);
    };
  }, []);
  const o = ye((S) => {
    r({ type: fe.SET_QUESTIONNAIRE, payload: S });
  }, []), i = ye((S) => {
    r({ type: fe.SET_VALIDATION, payload: S });
  }, []), a = ye((S) => {
    r({ type: fe.SET_CURRENT_PAGE, payload: S });
  }, []), l = ye((S, C, N = null) => {
    const M = N !== null ? `${S}#${N}` : S;
    r({
      type: fe.SET_RESPONSE,
      payload: { dataKey: M, value: C }
    });
  }, []), d = ye((S, C, N = null) => {
    const M = N !== null ? `${S}#${N}` : S;
    r({
      type: fe.SET_VARIABLE,
      payload: { dataKey: M, value: C }
    });
  }, []), f = ye((S, C) => {
    r({ type: fe.SET_ERROR, payload: { dataKey: S, error: C } });
  }, []), m = ye((S) => {
    r({ type: fe.CLEAR_ERROR, payload: { dataKey: S } });
  }, []), g = ye((S) => {
    r({ type: fe.SET_TOUCHED, payload: { dataKey: S } });
  }, []), b = ye((S) => {
    r({ type: fe.SET_LOADING, payload: S });
  }, []), v = ye((S, C) => {
    r({
      type: fe.LOAD_QUESTIONNAIRE,
      payload: { questionnaire: S, validation: C }
    });
  }, []), h = ye((S) => {
    r({ type: fe.SET_INITIAL_RESPONSES, payload: S });
  }, []), p = ye(() => {
    r({ type: fe.RESET_RESPONSES });
  }, []), x = ye((S) => {
    r({ type: fe.SET_ERRORS, payload: S });
  }, []), T = ye((S) => {
    r({ type: fe.SET_RUNTIME_METHODS, payload: S });
  }, []), w = ye((S) => {
    r({ type: fe.SET_CONFIG, payload: S });
  }, []), $ = ye(async (S = {}) => {
    const C = $d(S), N = t.lookupCache[C];
    if (N && Array.isArray(N.data))
      return N.data;
    const M = n.current.get(C);
    if (M)
      return M;
    const R = (async () => {
      try {
        const _ = await jd(C);
        if (_ && Array.isArray(_.data))
          return r({
            type: fe.SET_LOOKUP_ENTRY,
            payload: { key: C, entry: _ }
          }), _.data;
        r({
          type: fe.SET_LOOKUP_STATUS,
          payload: { key: C, status: "loading", error: null }
        });
        const P = await Ld(S, t.config), c = {
          data: P,
          version: S.version || null,
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return r({
          type: fe.SET_LOOKUP_ENTRY,
          payload: { key: C, entry: c }
        }), await Id(C, c), P;
      } catch (_) {
        const P = _ && _.message ? _.message : String(_);
        throw r({
          type: fe.SET_LOOKUP_STATUS,
          payload: { key: C, status: "error", error: P }
        }), _;
      } finally {
        n.current.delete(C);
      }
    })();
    return n.current.set(C, R), R;
  }, [t.lookupCache, t.config, r]), E = {
    ...t,
    setQuestionnaire: o,
    setValidation: i,
    setCurrentPage: a,
    setResponse: l,
    setVariable: d,
    setError: f,
    clearError: m,
    setTouched: g,
    setLoading: b,
    loadQuestionnaire: v,
    setInitialResponses: h,
    resetResponses: p,
    setErrors: x,
    setRuntimeMethods: T,
    setConfig: w,
    ensureLookupDataset: $
  };
  return /* @__PURE__ */ u.jsx(Cs.Provider, { value: E, children: e });
}
function Et() {
  const e = Zs(Cs);
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
function en(e, t = {}, r = {}, n = null) {
  let o = e;
  return o.includes("@$ROW$") && n !== null && (o = o.replace("@$ROW$", `#${n}`)), t[o] !== void 0 ? t[o] : r[o];
}
function Ft(e, t = {}, r = {}, n = null) {
  try {
    const o = (d) => en(d, t, r, n), i = (d) => n !== null && (d === 1 || d === "1") ? n : d ?? n, a = String(e ?? "").trim();
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
function Fd(e, t = {}, r = {}, n = null) {
  if (!e.enableCondition) return !0;
  try {
    return Ft(e.enableCondition, t, r, n);
  } catch (o) {
    return console.error("Error evaluating enable condition:", o), !1;
  }
}
function Ud(e, t = {}, r = {}, n = null) {
  if (typeof e != "string") return e;
  let o = e;
  if (o.includes("$NAME$") && n !== null) {
    const i = `r202_nama#${n}`, a = en(i, t, r) || "N/A";
    o = o.replace(/\$NAME\$/g, a);
  }
  return o.includes("@$ROW$") && n !== null && (o = o.replace(/@\$ROW\$/g, `#${n}`)), o;
}
function Rr(e, t, r = {}, n = {}, o = [], i = {}) {
  const a = [], l = e.dataKey, d = i[l];
  if (e.required && (!t || Array.isArray(t) && t.length === 0) && d && a.push("This field is required"), e.lengthInput && t && typeof t == "string") {
    const g = e.lengthInput[0];
    g.minlength && t.length < g.minlength && a.push(`Minimum length is ${g.minlength}`), g.maxlength && t.length > g.maxlength && a.push(`Maximum length is ${g.maxlength}`);
  }
  if (e.rangeInput && t && !isNaN(t)) {
    const g = e.rangeInput[0];
    g.min !== void 0 && Number(t) < g.min && a.push(`Minimum value is ${g.min}`), g.max !== void 0 && Number(t) > g.max && a.push(`Maximum value is ${g.max}`);
  }
  let f = o;
  if (o && typeof o == "object" && !Array.isArray(o) && (f = o.testFunctions || []), !Array.isArray(f))
    return console.error("validationRules is not an array:", o, "type:", typeof o), a;
  const m = f.filter((g) => g.dataKey === e.dataKey);
  for (const g of m)
    for (const b of g.validations)
      try {
        !Ft(b.test, r, n) || a.push(b.message);
      } catch (v) {
        console.error("Error evaluating validation rule:", v);
      }
  return a;
}
const zd = ({ question: e }) => /* @__PURE__ */ u.jsx(te, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ u.jsxs(Er, { severity: "info", children: [
  /* @__PURE__ */ u.jsxs(q, { variant: "h6", children: [
    "Section: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ u.jsx(q, { variant: "body2", children: "Section components need nested question rendering - coming soon!" })
] }) }), Wd = ({ question: e, responses: t = {}, variables: r = {}, validation: n = [] }) => {
  const { errors: o, setVariable: i } = Et(), a = Ye(() => {
    if (!e?.sourceQuestion) return [];
    const T = en(e.sourceQuestion, t, r) || [];
    return Array.isArray(T) ? T : [];
  }, [e, t, r]), [l, d] = Ne("list"), [f, m] = Ne(0), g = (T) => {
    m(T), d("detail");
  }, b = () => d("list"), v = () => m((T) => Math.max(0, T - 1)), h = () => m((T) => Math.min(a.length - 1, T + 1)), p = a[f], x = p?.value ?? f + 1;
  return Pe(() => {
    if (l === "detail" && p) {
      const T = e?.dataKey || "art_nested";
      i(T, p, x);
    }
  }, [l, p, x, e, i]), l === "list" ? /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(q, { variant: "subtitle1", sx: { mb: 1 }, children: e.label || e.title || "Roster" }),
    a.length > 0 && /* @__PURE__ */ u.jsx(Fo, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: a.map((T, w) => /* @__PURE__ */ u.jsx(Uo, { divider: !0, secondaryAction: /* @__PURE__ */ u.jsx(Je, { variant: "outlined", size: "small", onClick: () => g(w), "aria-label": "view-row", children: /* @__PURE__ */ u.jsx(Sl, { fontSize: "small" }) }), children: /* @__PURE__ */ u.jsx(zo, { primary: T.label ?? `Row ${T.value ?? w + 1}` }) }, T.value ?? w)) })
  ] }) : /* @__PURE__ */ u.jsxs(rr, { variant: "outlined", sx: { p: 2 }, children: [
    /* @__PURE__ */ u.jsxs(Ti, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 1 }, children: [
      /* @__PURE__ */ u.jsxs(q, { variant: "subtitle1", children: [
        e.label,
        " — ",
        p?.label
      ] }),
      /* @__PURE__ */ u.jsx(Je, { size: "small", onClick: b, "aria-label": "back-to-list", children: /* @__PURE__ */ u.jsx(El, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ u.jsx(Ci, { sx: { mb: 2 } }),
    e.components?.[0]?.map((T, w) => /* @__PURE__ */ u.jsx(te, { sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(
      vi,
      {
        question: T,
        responses: t,
        variables: r,
        errors: o,
        validation: n,
        rowIndex: x
      }
    ) }, T.dataKey || w)),
    /* @__PURE__ */ u.jsx(Ci, { sx: { my: 2 } }),
    /* @__PURE__ */ u.jsxs(Ti, { direction: "row", spacing: 1, justifyContent: "space-between", children: [
      /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "contained",
          disabled: f === 0,
          onClick: v,
          "aria-label": "previous-row",
          children: /* @__PURE__ */ u.jsx(Tl, { fontSize: "small" })
        }
      ),
      /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "contained",
          disabled: f >= a.length - 1,
          onClick: h,
          "aria-label": "next-row",
          children: /* @__PURE__ */ u.jsx(Cl, { fontSize: "small" })
        }
      )
    ] })
  ] });
}, Kd = ({ question: e }) => {
  const t = e.html || e.content || e.label || e.instructions || "";
  if (t.includes("background-color") && (t.includes("#6467f2") || t.includes("grey"))) {
    const n = t.match(/>([^<]+)</), o = n ? n[1].replace(/<[^>]*>/g, "") : "", i = t.includes("background-color: grey") || t.includes("PEMUTAKHIRAN DATA TUNGGAL"), a = t.includes("#6467f2");
    return /* @__PURE__ */ u.jsx(te, { sx: { mb: 3 }, children: /* @__PURE__ */ u.jsx(
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
  return /* @__PURE__ */ u.jsx(te, { sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(
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
}, Hd = ({ question: e, value: t }) => {
  if (e.render === !1) return null;
  const r = t != null ? String(t) : "", n = Number(e.renderType) === 2;
  return /* @__PURE__ */ u.jsx(te, { sx: { mb: 1 }, children: n ? /* @__PURE__ */ u.jsx(q, { variant: "body1", children: r }) : /* @__PURE__ */ u.jsx(q, { variant: "subtitle2", color: "text.primary", children: r }) });
}, lr = ({ error: e, isRequired: t, hasValue: r, customMessage: n, isTouched: o = !1 }) => {
  if (!(e || t && !r && o)) return null;
  const a = e || n || "This field is required";
  return /* @__PURE__ */ u.jsxs(te, { sx: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "error.main",
    mt: 1
  }, children: [
    /* @__PURE__ */ u.jsx(wl, { fontSize: "small" }),
    /* @__PURE__ */ u.jsx(q, { variant: "body2", color: "error", children: a })
  ] });
}, Eo = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: d, touched: f, setError: m } = Et(), [g, b] = Ne(t);
  Pe(() => {
    b(t);
  }, [t]);
  const v = (E) => {
    if (o)
      return;
    const S = E.target.value;
    b(S), r(S);
  }, h = () => {
    d(e.dataKey);
    const E = Rr(e, g, i, a, l, f);
    E.length > 0 ? m(e.dataKey, E[0]) : m(e.dataKey, null);
  }, p = (E) => {
    if (!E) return { main: "", help: "" };
    if (E.includes('<br><small><i><font color="#007bff">')) {
      const C = E.split('<br><small><i><font color="#007bff">'), N = C[0].replace(/<[^>]*>/g, ""), M = C[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: N, help: M };
    }
    return { main: E.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: x, help: T } = p(e.label || e.title), w = () => e.mask === "integer" || e.mask === "decimal" ? "number" : e.title?.toLowerCase().includes("email") ? "email" : e.title?.toLowerCase().includes("phone") ? "tel" : "text", $ = () => {
    const E = {};
    return e.mask === "integer" ? (E.step = 1, E.inputMode = "numeric") : e.mask === "decimal" && (E.step = "any", E.inputMode = "decimal"), e.maxLength && (E.maxLength = e.maxLength), E;
  };
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ u.jsx(
      ut,
      {
        fullWidth: !0,
        label: x,
        value: g,
        onChange: v,
        onBlur: h,
        error: !!n,
        helperText: T && !n ? T : void 0,
        disabled: o,
        required: e.required,
        type: w(),
        inputProps: $(),
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
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!g && g.trim() !== "",
        isTouched: f[e.dataKey]
      }
    ),
    T && n && /* @__PURE__ */ u.jsx(
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
        children: T
      }
    )
  ] });
}, Gd = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  rowIndex: l = null
}) => {
  const d = (h) => {
    if (o)
      return;
    const p = h.target.value, x = v.find((w) => w.value == p), T = x ? [{
      value: x.value,
      label: x.text || x.label
    }] : null;
    r(T);
  }, f = (h) => {
    if (!h) return { main: "", help: "" };
    if (h.includes('<br><small><i><font color="#007bff">')) {
      const x = h.split('<br><small><i><font color="#007bff">'), T = x[0].replace(/<[^>]*>/g, ""), w = x[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: T, help: w };
    }
    return { main: h.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: m, help: g } = f(e.label || e.title), v = (() => {
    if (e.answers && Array.isArray(e.answers))
      return e.answers;
    if (e.options && Array.isArray(e.options))
      return e.options;
    if (e.categorical && Array.isArray(e.categorical))
      return e.categorical.map((h) => ({
        value: h.value || h.id,
        text: h.text || h.title || h.label
      }));
    if (e.sourceOption) {
      const h = en(e.sourceOption, i, a, l) || [];
      return Array.isArray(h) ? h : h && typeof h == "object" ? [h] : [{ value: h, text: String(h) }];
    }
    return [];
  })();
  return /* @__PURE__ */ u.jsx(te, { sx: { width: "100%", mb: 2 }, children: /* @__PURE__ */ u.jsxs(Nn, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ u.jsxs(Wa, { component: "legend", sx: { mb: 1, color: "text.primary", fontSize: "16px" }, children: [
      m,
      e.required && /* @__PURE__ */ u.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    g && /* @__PURE__ */ u.jsx(
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
        children: g
      }
    ),
    /* @__PURE__ */ u.jsx(
      nl,
      {
        value: Array.isArray(t) && t.length > 0 ? t[0].value : "",
        onChange: d,
        sx: {
          "& .MuiFormControlLabel-root": {
            mb: 0.5,
            ml: 0,
            "& .MuiRadio-root": {
              p: 1
            }
          }
        },
        children: v.map((h) => /* @__PURE__ */ u.jsx(
          Ka,
          {
            value: h.value,
            control: /* @__PURE__ */ u.jsx(ol, { size: "medium" }),
            label: /* @__PURE__ */ u.jsxs(te, { children: [
              /* @__PURE__ */ u.jsx(q, { variant: "body2", children: h.text || h.label }),
              h.description && /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", children: h.description })
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
          h.value
        ))
      }
    ),
    n && /* @__PURE__ */ u.jsx(Kr, { children: n })
  ] }) });
};
function Yd(e) {
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
function ws(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Yd(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Os(e, t, r, n) {
  return e[t] === void 0 ? null : ws(e, t, r, n);
}
function jo() {
  return null;
}
Os.isRequired = ws;
jo.isRequired = jo;
const Rs = process.env.NODE_ENV === "production" ? jo : Os;
function ar(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Io(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ut(e) {
  const t = A.useRef(e);
  return ir(() => {
    t.current = e;
  }), A.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function To(e) {
  const {
    controlled: t,
    default: r,
    name: n,
    state: o = "value"
  } = e, {
    current: i
  } = A.useRef(t !== void 0), [a, l] = A.useState(r), d = i ? t : a;
  if (process.env.NODE_ENV !== "production") {
    A.useEffect(() => {
      i !== (t !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${o} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [o, n, t]);
    const {
      current: m
    } = A.useRef(r);
    A.useEffect(() => {
      !i && JSON.stringify(r) !== JSON.stringify(m) && console.error([`MUI: A component is changing the default ${o} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const f = A.useCallback((m) => {
    i || l(m);
  }, []);
  return [d, f];
}
const Qd = (e) => {
  const t = A.useRef({});
  return A.useEffect(() => {
    t.current = e;
  }), t.current;
};
function ba({
  array1: e,
  array2: t,
  parser: r = (n) => n
}) {
  return e && t && e.length === t.length && e.every((n, o) => r(n) === r(t[o]));
}
function va(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Ps(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: r = !0,
    limit: n,
    matchFrom: o = "any",
    stringify: i,
    trim: a = !1
  } = e;
  return (l, {
    inputValue: d,
    getOptionLabel: f
  }) => {
    let m = a ? d.trim() : d;
    r && (m = m.toLowerCase()), t && (m = va(m));
    const g = m ? l.filter((b) => {
      let v = (i || f)(b);
      return r && (v = v.toLowerCase()), t && (v = va(v)), o === "start" ? v.startsWith(m) : v.includes(m);
    }) : l;
    return typeof n == "number" ? g.slice(0, n) : g;
  };
}
const Jd = Ps(), xa = 5, Xd = (e) => e.current !== null && e.current.parentElement?.contains(document.activeElement), Zd = [];
function Sa(e, t, r, n) {
  if (t || e == null || n)
    return "";
  const o = r(e);
  return typeof o == "string" ? o : "";
}
function qd(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = Xd,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: r = "Mui",
    autoComplete: n = !1,
    autoHighlight: o = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: l = !e.freeSolo,
    clearOnEscape: d = !1,
    componentName: f = "useAutocomplete",
    defaultValue: m = e.multiple ? Zd : null,
    disableClearable: g = !1,
    disableCloseOnSelect: b = !1,
    disabled: v,
    disabledItemsFocusable: h = !1,
    disableListWrap: p = !1,
    filterOptions: x = Jd,
    filterSelectedOptions: T = !1,
    freeSolo: w = !1,
    getOptionDisabled: $,
    getOptionKey: E,
    getOptionLabel: S = (U) => U.label ?? U,
    groupBy: C,
    handleHomeEndKeys: N = !e.freeSolo,
    id: M,
    includeInputInList: R = !1,
    inputValue: _,
    isOptionEqualToValue: P = (U, D) => U === D,
    multiple: c = !1,
    onChange: j,
    onClose: k,
    onHighlightChange: W,
    onInputChange: F,
    onOpen: X,
    open: ee,
    openOnFocus: ie = !1,
    options: y,
    readOnly: O = !1,
    renderValue: L,
    selectOnFocus: I = !e.freeSolo,
    value: z
  } = e, K = ei(M);
  let B = S;
  B = (U) => {
    const D = S(U);
    if (typeof D != "string") {
      if (process.env.NODE_ENV !== "production") {
        const Z = D === void 0 ? "undefined" : `${typeof D} (${D})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${f} returned ${Z} instead of a string for ${JSON.stringify(U)}.`);
      }
      return String(D);
    }
    return D;
  };
  const H = A.useRef(!1), Q = A.useRef(!0), Y = A.useRef(null), J = A.useRef(null), [ge, G] = A.useState(null), [ue, De] = A.useState(-1), Ue = o ? 0 : -1, Se = A.useRef(Ue), ze = A.useRef(Sa(m ?? z, c, B)).current, [re, je] = To({
    controlled: z,
    default: m,
    name: f
  }), [ce, Me] = To({
    controlled: _,
    default: ze,
    name: f,
    state: "inputValue"
  }), [ne, Xe] = A.useState(!1), Ve = A.useCallback((U, D, Z) => {
    if (!(c ? re.length < D.length : D !== null) && !l)
      return;
    const le = Sa(D, c, B, L);
    ce !== le && (Me(le), F && F(U, le, Z));
  }, [B, ce, c, F, Me, l, re, L]), [oe, he] = To({
    controlled: ee,
    default: !1,
    name: f,
    state: "open"
  }), [de, Oe] = A.useState(!0), Ke = !c && re != null && ce === B(re), He = oe && !O, Re = He ? x(
    y.filter((U) => !(T && (c ? re : [re]).some((D) => D !== null && P(U, D)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ke && de ? "" : ce,
      getOptionLabel: B
    }
  ) : [], mt = Qd({
    filteredOptions: Re,
    value: re,
    inputValue: ce
  });
  A.useEffect(() => {
    const U = re !== mt.value;
    ne && !U || w && !U || Ve(null, re, "reset");
  }, [re, Ve, ne, mt.value, w]);
  const nn = oe && Re.length > 0 && !O, ht = Ut((U) => {
    if (U === -1)
      Y.current.focus();
    else {
      const D = L ? "data-item-index" : "data-tag-index";
      ge.querySelector(`[${D}="${U}"]`).focus();
    }
  });
  A.useEffect(() => {
    c && ue > re.length - 1 && (De(-1), ht(-1));
  }, [re, c, ue, ht]);
  function Xn(U, D) {
    if (!J.current || U < 0 || U >= Re.length)
      return -1;
    let Z = U;
    for (; ; ) {
      const ae = J.current.querySelector(`[data-option-index="${Z}"]`), le = h ? !1 : !ae || ae.disabled || ae.getAttribute("aria-disabled") === "true";
      if (ae && ae.hasAttribute("tabindex") && !le)
        return Z;
      if (D === "next" ? Z = (Z + 1) % Re.length : Z = (Z - 1 + Re.length) % Re.length, Z === U)
        return -1;
    }
  }
  const Ct = Ut(({
    event: U,
    index: D,
    reason: Z
  }) => {
    if (Se.current = D, D === -1 ? Y.current.removeAttribute("aria-activedescendant") : Y.current.setAttribute("aria-activedescendant", `${K}-option-${D}`), W && ["mouse", "keyboard", "touch"].includes(Z) && W(U, D === -1 ? null : Re[D], Z), !J.current)
      return;
    const ae = J.current.querySelector(`[role="option"].${r}-focused`);
    ae && (ae.classList.remove(`${r}-focused`), ae.classList.remove(`${r}-focusVisible`));
    let le = J.current;
    if (J.current.getAttribute("role") !== "listbox" && (le = J.current.parentElement.querySelector('[role="listbox"]')), !le)
      return;
    if (D === -1) {
      le.scrollTop = 0;
      return;
    }
    const Ie = J.current.querySelector(`[data-option-index="${D}"]`);
    if (Ie && (Ie.classList.add(`${r}-focused`), Z === "keyboard" && Ie.classList.add(`${r}-focusVisible`), le.scrollHeight > le.clientHeight && Z !== "mouse" && Z !== "touch")) {
      const Be = Ie, Ze = le.clientHeight + le.scrollTop, dr = Be.offsetTop + Be.offsetHeight;
      dr > Ze ? le.scrollTop = dr - le.clientHeight : Be.offsetTop - Be.offsetHeight * (C ? 1.3 : 0) < le.scrollTop && (le.scrollTop = Be.offsetTop - Be.offsetHeight * (C ? 1.3 : 0));
    }
  }), gt = Ut(({
    event: U,
    diff: D,
    direction: Z = "next",
    reason: ae
  }) => {
    if (!He)
      return;
    const Ie = Xn((() => {
      const Be = Re.length - 1;
      if (D === "reset")
        return Ue;
      if (D === "start")
        return 0;
      if (D === "end")
        return Be;
      const Ze = Se.current + D;
      return Ze < 0 ? Ze === -1 && R ? -1 : p && Se.current !== -1 || Math.abs(D) > 1 ? 0 : Be : Ze > Be ? Ze === Be + 1 && R ? -1 : p || Math.abs(D) > 1 ? Be : 0 : Ze;
    })(), Z);
    if (Ct({
      index: Ie,
      reason: ae,
      event: U
    }), n && D !== "reset")
      if (Ie === -1)
        Y.current.value = ce;
      else {
        const Be = B(Re[Ie]);
        Y.current.value = Be, Be.toLowerCase().indexOf(ce.toLowerCase()) === 0 && ce.length > 0 && Y.current.setSelectionRange(ce.length, Be.length);
      }
  }), on = !ba({
    array1: mt.filteredOptions,
    array2: Re,
    parser: B
  }), Zn = () => {
    const U = (D, Z) => {
      const ae = D ? B(D) : "", le = Z ? B(Z) : "";
      return ae === le;
    };
    if (Se.current !== -1 && !ba({
      array1: mt.filteredOptions,
      array2: Re,
      parser: B
    }) && mt.inputValue === ce && (c ? re.length === mt.value.length && mt.value.every((D, Z) => B(re[Z]) === B(D)) : U(mt.value, re))) {
      const D = mt.filteredOptions[Se.current];
      if (D)
        return Re.findIndex((Z) => B(Z) === B(D));
    }
    return -1;
  }, Pr = A.useCallback(() => {
    if (!He)
      return;
    const U = Zn();
    if (U !== -1) {
      Se.current = U;
      return;
    }
    const D = c ? re[0] : re;
    if (Re.length === 0 || D == null) {
      gt({
        diff: "reset"
      });
      return;
    }
    if (J.current) {
      if (D != null) {
        const Z = Re[Se.current];
        if (c && Z && re.findIndex((le) => P(Z, le)) !== -1)
          return;
        const ae = Re.findIndex((le) => P(le, D));
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
    c ? !1 : re,
    T,
    gt,
    Ct,
    He,
    ce,
    c
  ]), Nt = Ut((U) => {
    Io(J, U), U && Pr();
  });
  process.env.NODE_ENV !== "production" && A.useEffect(() => {
    (!Y.current || Y.current.nodeName !== "INPUT") && (Y.current && Y.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${f} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${Y.current} while an HTMLInputElement was expected.`, `Instead, ${f} expects an input element.`, "", f === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [f]), A.useEffect(() => {
    on && Pr();
  }, [Pr, on]);
  const wt = (U) => {
    oe || (he(!0), Oe(!0), X && X(U));
  }, Jt = (U, D) => {
    oe && (he(!1), k && k(U, D));
  }, Ot = (U, D, Z, ae) => {
    if (c) {
      if (re.length === D.length && re.every((le, Ie) => le === D[Ie]))
        return;
    } else if (re === D)
      return;
    j && j(U, D, Z, ae), je(D);
  }, Rt = A.useRef(!1), Mt = (U, D, Z = "selectOption", ae = "options") => {
    let le = Z, Ie = D;
    if (c) {
      if (Ie = Array.isArray(re) ? re.slice() : [], process.env.NODE_ENV !== "production") {
        const Ze = Ie.filter((dr) => P(D, dr));
        Ze.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${f} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${Ze.length} matches.`].join(`
`));
      }
      const Be = Ie.findIndex((Ze) => P(D, Ze));
      Be === -1 ? Ie.push(D) : ae !== "freeSolo" && (Ie.splice(Be, 1), le = "removeOption");
    }
    Ve(U, Ie, le), Ot(U, Ie, le, {
      option: D
    }), !b && (!U || !U.ctrlKey && !U.metaKey) && Jt(U, le), (a === !0 || a === "touch" && Rt.current || a === "mouse" && !Rt.current) && Y.current.blur();
  };
  function qn(U, D) {
    if (U === -1)
      return -1;
    let Z = U;
    for (; ; ) {
      if (D === "next" && Z === re.length || D === "previous" && Z === -1)
        return -1;
      const ae = L ? "data-item-index" : "data-tag-index", le = ge.querySelector(`[${ae}="${Z}"]`);
      if (!le || !le.hasAttribute("tabindex") || le.disabled || le.getAttribute("aria-disabled") === "true")
        Z += D === "next" ? 1 : -1;
      else
        return Z;
    }
  }
  const Xt = (U, D) => {
    if (!c)
      return;
    ce === "" && Jt(U, "toggleInput");
    let Z = ue;
    ue === -1 ? ce === "" && D === "previous" && (Z = re.length - 1) : (Z += D === "next" ? 1 : -1, Z < 0 && (Z = 0), Z === re.length && (Z = -1)), Z = qn(Z, D), De(Z), ht(Z);
  }, an = (U) => {
    H.current = !0, Me(""), F && F(U, "", "clear"), Ot(U, c ? [] : null, "clear");
  }, eo = (U) => (D) => {
    if (U.onKeyDown && U.onKeyDown(D), !D.defaultMuiPrevented && (ue !== -1 && !["ArrowLeft", "ArrowRight"].includes(D.key) && (De(-1), ht(-1)), D.which !== 229))
      switch (D.key) {
        case "Home":
          He && N && (D.preventDefault(), gt({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: D
          }));
          break;
        case "End":
          He && N && (D.preventDefault(), gt({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: D
          }));
          break;
        case "PageUp":
          D.preventDefault(), gt({
            diff: -xa,
            direction: "previous",
            reason: "keyboard",
            event: D
          }), wt(D);
          break;
        case "PageDown":
          D.preventDefault(), gt({
            diff: xa,
            direction: "next",
            reason: "keyboard",
            event: D
          }), wt(D);
          break;
        case "ArrowDown":
          D.preventDefault(), gt({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: D
          }), wt(D);
          break;
        case "ArrowUp":
          D.preventDefault(), gt({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: D
          }), wt(D);
          break;
        case "ArrowLeft":
          !c && L ? ht(0) : Xt(D, "previous");
          break;
        case "ArrowRight":
          !c && L ? ht(-1) : Xt(D, "next");
          break;
        case "Enter":
          if (Se.current !== -1 && He) {
            const Z = Re[Se.current], ae = $ ? $(Z) : !1;
            if (D.preventDefault(), ae)
              return;
            Mt(D, Z, "selectOption"), n && Y.current.setSelectionRange(Y.current.value.length, Y.current.value.length);
          } else w && ce !== "" && Ke === !1 && (c && D.preventDefault(), Mt(D, ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          He ? (D.preventDefault(), D.stopPropagation(), Jt(D, "escape")) : d && (ce !== "" || c && re.length > 0 || L) && (D.preventDefault(), D.stopPropagation(), an(D));
          break;
        case "Backspace":
          if (c && !O && ce === "" && re.length > 0) {
            const Z = ue === -1 ? re.length - 1 : ue, ae = re.slice();
            ae.splice(Z, 1), Ot(D, ae, "removeOption", {
              option: re[Z]
            });
          }
          !c && L && !O && (je(null), ht(-1));
          break;
        case "Delete":
          if (c && !O && ce === "" && re.length > 0 && ue !== -1) {
            const Z = ue, ae = re.slice();
            ae.splice(Z, 1), Ot(D, ae, "removeOption", {
              option: re[Z]
            });
          }
          !c && L && !O && (je(null), ht(-1));
          break;
      }
  }, cr = (U) => {
    Xe(!0), ie && !H.current && wt(U);
  }, ur = (U) => {
    if (t(J)) {
      Y.current.focus();
      return;
    }
    Xe(!1), Q.current = !0, H.current = !1, i && Se.current !== -1 && He ? Mt(U, Re[Se.current], "blur") : i && w && ce !== "" ? Mt(U, ce, "blur", "freeSolo") : l && Ve(U, re, "blur"), Jt(U, "blur");
  }, kr = (U) => {
    const D = U.target.value;
    ce !== D && (Me(D), Oe(!1), F && F(U, D, "input")), D === "" ? !g && !c && Ot(U, null, "clear") : wt(U);
  }, to = (U) => {
    const D = Number(U.currentTarget.getAttribute("data-option-index"));
    Se.current !== D && Ct({
      event: U,
      index: D,
      reason: "mouse"
    });
  }, ro = (U) => {
    Ct({
      event: U,
      index: Number(U.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Rt.current = !0;
  }, no = (U) => {
    const D = Number(U.currentTarget.getAttribute("data-option-index"));
    Mt(U, Re[D], "selectOption"), Rt.current = !1;
  }, oo = (U) => (D) => {
    const Z = re.slice();
    Z.splice(U, 1), Ot(D, Z, "removeOption", {
      option: re[U]
    });
  }, $r = (U) => {
    Ot(U, null, "removeOption", {
      option: re
    });
  }, We = (U) => {
    oe ? Jt(U, "toggleInput") : wt(U);
  }, Ge = (U) => {
    U.currentTarget.contains(U.target) && U.target.getAttribute("id") !== K && U.preventDefault();
  }, _t = (U) => {
    U.currentTarget.contains(U.target) && (Y.current.focus(), I && Q.current && Y.current.selectionEnd - Y.current.selectionStart === 0 && Y.current.select(), Q.current = !1);
  }, io = (U) => {
    !v && (ce === "" || !oe) && We(U);
  };
  let jr = w && ce.length > 0;
  jr = jr || (c ? re.length > 0 : re !== null);
  let sn = Re;
  if (C) {
    const U = /* @__PURE__ */ new Map();
    let D = !1;
    sn = Re.reduce((Z, ae, le) => {
      const Ie = C(ae);
      return Z.length > 0 && Z[Z.length - 1].group === Ie ? Z[Z.length - 1].options.push(ae) : (process.env.NODE_ENV !== "production" && (U.get(Ie) && !D && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${f} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), D = !0), U.set(Ie, !0)), Z.push({
        key: le,
        index: le,
        group: Ie,
        options: [ae]
      })), Z;
    }, []);
  }
  return v && ne && ur(), {
    getRootProps: (U = {}) => ({
      ...U,
      onKeyDown: eo(U),
      onMouseDown: Ge,
      onClick: _t
    }),
    getInputLabelProps: () => ({
      id: `${K}-label`,
      htmlFor: K
    }),
    getInputProps: () => ({
      id: K,
      value: ce,
      onBlur: ur,
      onFocus: cr,
      onChange: kr,
      onMouseDown: io,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": He ? "" : null,
      "aria-autocomplete": n ? "both" : "list",
      "aria-controls": nn ? `${K}-listbox` : void 0,
      "aria-expanded": nn,
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
      onClick: an
    }),
    getItemProps: ({
      index: U = 0
    } = {}) => ({
      ...c && {
        key: U
      },
      ...L ? {
        "data-item-index": U
      } : {
        "data-tag-index": U
      },
      tabIndex: -1,
      ...!O && {
        onDelete: c ? oo(U) : $r
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
      ...!O && {
        onDelete: oo(U)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${K}-listbox`,
      "aria-labelledby": `${K}-label`,
      ref: Nt,
      onMouseDown: (U) => {
        U.preventDefault();
      }
    }),
    getOptionProps: ({
      index: U,
      option: D
    }) => {
      const Z = (c ? re : [re]).some((le) => le != null && P(D, le)), ae = $ ? $(D) : !1;
      return {
        key: E?.(D) ?? B(D),
        tabIndex: -1,
        role: "option",
        id: `${K}-option-${U}`,
        onMouseMove: to,
        onClick: no,
        onTouchStart: ro,
        "data-option-index": U,
        "aria-disabled": ae,
        "aria-selected": Z
      };
    },
    id: K,
    inputValue: ce,
    value: re,
    dirty: jr,
    expanded: He && ge,
    popupOpen: He,
    focused: ne || ue !== -1,
    anchorEl: ge,
    setAnchorEl: G,
    focusedItem: ue,
    // deprecated
    focusedTag: ue,
    groupedOptions: sn
  };
}
const oi = s.oneOfType([s.func, s.object]);
function Yr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], a = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
function Ea(e) {
  return e && e.ownerDocument || document;
}
function Gt(...e) {
  const t = A.useRef(void 0), r = A.useCallback((n) => {
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
  return A.useMemo(() => e.every((n) => n == null) ? null : (n) => {
    t.current && (t.current(), t.current = void 0), n != null && (t.current = r(n));
  }, e);
}
var qe = "top", dt = "bottom", pt = "right", et = "left", ii = "auto", tn = [qe, dt, pt, et], Tr = "start", Qr = "end", ep = "clippingParents", ks = "viewport", Dr = "popper", tp = "reference", Ta = /* @__PURE__ */ tn.reduce(function(e, t) {
  return e.concat([t + "-" + Tr, t + "-" + Qr]);
}, []), $s = /* @__PURE__ */ [].concat(tn, [ii]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Tr, t + "-" + Qr]);
}, []), rp = "beforeRead", np = "read", op = "afterRead", ip = "beforeMain", ap = "main", sp = "afterMain", lp = "beforeWrite", cp = "write", up = "afterWrite", dp = [rp, np, op, ip, ap, sp, lp, cp, up];
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
function ai(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pp(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ct(i) || !St(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(a) {
      var l = o[a];
      l === !1 ? i.removeAttribute(a) : i.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function fp(e) {
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
      var o = t.elements[n], i = t.attributes[n] || {}, a = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), l = a.reduce(function(d, f) {
        return d[f] = "", d;
      }, {});
      !ct(o) || !St(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(d) {
        o.removeAttribute(d);
      }));
    });
  };
}
const mp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pp,
  effect: fp,
  requires: ["computeStyles"]
};
function xt(e) {
  return e.split("-")[0];
}
var nr = Math.max, Rn = Math.min, Cr = Math.round;
function Ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function js() {
  return !/^((?!chrome|android).)*safari/i.test(Ao());
}
function wr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && ct(e) && (o = e.offsetWidth > 0 && Cr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Cr(n.height) / e.offsetHeight || 1);
  var a = sr(e) ? at(e) : window, l = a.visualViewport, d = !js() && r, f = (n.left + (d && l ? l.offsetLeft : 0)) / o, m = (n.top + (d && l ? l.offsetTop : 0)) / i, g = n.width / o, b = n.height / i;
  return {
    width: g,
    height: b,
    top: m,
    right: f + g,
    bottom: m + b,
    left: f,
    x: f,
    y: m
  };
}
function si(e) {
  var t = wr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Is(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && ai(r)) {
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
function hp(e) {
  return ["table", "td", "th"].indexOf(St(e)) >= 0;
}
function Qt(e) {
  return ((sr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Qn(e) {
  return St(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ai(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Qt(e)
  );
}
function Ca(e) {
  return !ct(e) || // https://github.com/popperjs/popper-core/issues/837
  It(e).position === "fixed" ? null : e.offsetParent;
}
function gp(e) {
  var t = /firefox/i.test(Ao()), r = /Trident/i.test(Ao());
  if (r && ct(e)) {
    var n = It(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Qn(e);
  for (ai(o) && (o = o.host); ct(o) && ["html", "body"].indexOf(St(o)) < 0; ) {
    var i = It(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function rn(e) {
  for (var t = at(e), r = Ca(e); r && hp(r) && It(r).position === "static"; )
    r = Ca(r);
  return r && (St(r) === "html" || St(r) === "body" && It(r).position === "static") ? t : r || gp(e) || t;
}
function li(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ur(e, t, r) {
  return nr(e, Rn(t, r));
}
function yp(e, t, r) {
  var n = Ur(e, t, r);
  return n > r ? r : n;
}
function As() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ns(e) {
  return Object.assign({}, As(), e);
}
function Ms(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var bp = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Ns(typeof t != "number" ? t : Ms(t, tn));
};
function vp(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, l = xt(r.placement), d = li(l), f = [et, pt].indexOf(l) >= 0, m = f ? "height" : "width";
  if (!(!i || !a)) {
    var g = bp(o.padding, r), b = si(i), v = d === "y" ? qe : et, h = d === "y" ? dt : pt, p = r.rects.reference[m] + r.rects.reference[d] - a[d] - r.rects.popper[m], x = a[d] - r.rects.reference[d], T = rn(i), w = T ? d === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, $ = p / 2 - x / 2, E = g[v], S = w - b[m] - g[h], C = w / 2 - b[m] / 2 + $, N = Ur(E, C, S), M = d;
    r.modifiersData[n] = (t = {}, t[M] = N, t.centerOffset = N - C, t);
  }
}
function xp(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Is(t.elements.popper, o) && (t.elements.arrow = o));
}
const Sp = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: vp,
  effect: xp,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Or(e) {
  return e.split("-")[1];
}
var Ep = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Tp(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Cr(r * o) / o || 0,
    y: Cr(n * o) / o || 0
  };
}
function wa(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, l = e.position, d = e.gpuAcceleration, f = e.adaptive, m = e.roundOffsets, g = e.isFixed, b = a.x, v = b === void 0 ? 0 : b, h = a.y, p = h === void 0 ? 0 : h, x = typeof m == "function" ? m({
    x: v,
    y: p
  }) : {
    x: v,
    y: p
  };
  v = x.x, p = x.y;
  var T = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), $ = et, E = qe, S = window;
  if (f) {
    var C = rn(r), N = "clientHeight", M = "clientWidth";
    if (C === at(r) && (C = Qt(r), It(C).position !== "static" && l === "absolute" && (N = "scrollHeight", M = "scrollWidth")), C = C, o === qe || (o === et || o === pt) && i === Qr) {
      E = dt;
      var R = g && C === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[N]
      );
      p -= R - n.height, p *= d ? 1 : -1;
    }
    if (o === et || (o === qe || o === dt) && i === Qr) {
      $ = pt;
      var _ = g && C === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[M]
      );
      v -= _ - n.width, v *= d ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, f && Ep), c = m === !0 ? Tp({
    x: v,
    y: p
  }, at(r)) : {
    x: v,
    y: p
  };
  if (v = c.x, p = c.y, d) {
    var j;
    return Object.assign({}, P, (j = {}, j[E] = w ? "0" : "", j[$] = T ? "0" : "", j.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", j));
  }
  return Object.assign({}, P, (t = {}, t[E] = w ? p + "px" : "", t[$] = T ? v + "px" : "", t.transform = "", t));
}
function Cp(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, l = r.roundOffsets, d = l === void 0 ? !0 : l, f = {
    placement: xt(t.placement),
    variation: Or(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wa(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: d
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wa(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const wp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cp,
  data: {}
};
var mn = {
  passive: !0
};
function Op(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, l = a === void 0 ? !0 : a, d = at(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(m) {
    m.addEventListener("scroll", r.update, mn);
  }), l && d.addEventListener("resize", r.update, mn), function() {
    i && f.forEach(function(m) {
      m.removeEventListener("scroll", r.update, mn);
    }), l && d.removeEventListener("resize", r.update, mn);
  };
}
const Rp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Op,
  data: {}
};
var Pp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pp[t];
  });
}
var kp = {
  start: "end",
  end: "start"
};
function Oa(e) {
  return e.replace(/start|end/g, function(t) {
    return kp[t];
  });
}
function ci(e) {
  var t = at(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ui(e) {
  return wr(Qt(e)).left + ci(e).scrollLeft;
}
function $p(e, t) {
  var r = at(e), n = Qt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, l = 0, d = 0;
  if (o) {
    i = o.width, a = o.height;
    var f = js();
    (f || !f && t === "fixed") && (l = o.offsetLeft, d = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: l + ui(e),
    y: d
  };
}
function jp(e) {
  var t, r = Qt(e), n = ci(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = nr(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = nr(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -n.scrollLeft + ui(e), d = -n.scrollTop;
  return It(o || r).direction === "rtl" && (l += nr(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: l,
    y: d
  };
}
function di(e) {
  var t = It(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function _s(e) {
  return ["html", "body", "#document"].indexOf(St(e)) >= 0 ? e.ownerDocument.body : ct(e) && di(e) ? e : _s(Qn(e));
}
function zr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = _s(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = at(n), a = o ? [i].concat(i.visualViewport || [], di(n) ? n : []) : n, l = t.concat(a);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(zr(Qn(a)))
  );
}
function No(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ip(e, t) {
  var r = wr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ra(e, t, r) {
  return t === ks ? No($p(e, r)) : sr(t) ? Ip(t, r) : No(jp(Qt(e)));
}
function Ap(e) {
  var t = zr(Qn(e)), r = ["absolute", "fixed"].indexOf(It(e).position) >= 0, n = r && ct(e) ? rn(e) : e;
  return sr(n) ? t.filter(function(o) {
    return sr(o) && Is(o, n) && St(o) !== "body";
  }) : [];
}
function Np(e, t, r, n) {
  var o = t === "clippingParents" ? Ap(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], l = i.reduce(function(d, f) {
    var m = Ra(e, f, n);
    return d.top = nr(m.top, d.top), d.right = Rn(m.right, d.right), d.bottom = Rn(m.bottom, d.bottom), d.left = nr(m.left, d.left), d;
  }, Ra(e, a, n));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ls(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? xt(n) : null, i = n ? Or(n) : null, a = t.x + t.width / 2 - r.width / 2, l = t.y + t.height / 2 - r.height / 2, d;
  switch (o) {
    case qe:
      d = {
        x: a,
        y: t.y - r.height
      };
      break;
    case dt:
      d = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pt:
      d = {
        x: t.x + t.width,
        y: l
      };
      break;
    case et:
      d = {
        x: t.x - r.width,
        y: l
      };
      break;
    default:
      d = {
        x: t.x,
        y: t.y
      };
  }
  var f = o ? li(o) : null;
  if (f != null) {
    var m = f === "y" ? "height" : "width";
    switch (i) {
      case Tr:
        d[f] = d[f] - (t[m] / 2 - r[m] / 2);
        break;
      case Qr:
        d[f] = d[f] + (t[m] / 2 - r[m] / 2);
        break;
    }
  }
  return d;
}
function Jr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, l = r.boundary, d = l === void 0 ? ep : l, f = r.rootBoundary, m = f === void 0 ? ks : f, g = r.elementContext, b = g === void 0 ? Dr : g, v = r.altBoundary, h = v === void 0 ? !1 : v, p = r.padding, x = p === void 0 ? 0 : p, T = Ns(typeof x != "number" ? x : Ms(x, tn)), w = b === Dr ? tp : Dr, $ = e.rects.popper, E = e.elements[h ? w : b], S = Np(sr(E) ? E : E.contextElement || Qt(e.elements.popper), d, m, a), C = wr(e.elements.reference), N = Ls({
    reference: C,
    element: $,
    placement: o
  }), M = No(Object.assign({}, $, N)), R = b === Dr ? M : C, _ = {
    top: S.top - R.top + T.top,
    bottom: R.bottom - S.bottom + T.bottom,
    left: S.left - R.left + T.left,
    right: R.right - S.right + T.right
  }, P = e.modifiersData.offset;
  if (b === Dr && P) {
    var c = P[o];
    Object.keys(_).forEach(function(j) {
      var k = [pt, dt].indexOf(j) >= 0 ? 1 : -1, W = [qe, dt].indexOf(j) >= 0 ? "y" : "x";
      _[j] += c[W] * k;
    });
  }
  return _;
}
function Mp(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, l = r.flipVariations, d = r.allowedAutoPlacements, f = d === void 0 ? $s : d, m = Or(n), g = m ? l ? Ta : Ta.filter(function(h) {
    return Or(h) === m;
  }) : tn, b = g.filter(function(h) {
    return f.indexOf(h) >= 0;
  });
  b.length === 0 && (b = g);
  var v = b.reduce(function(h, p) {
    return h[p] = Jr(e, {
      placement: p,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[xt(p)], h;
  }, {});
  return Object.keys(v).sort(function(h, p) {
    return v[h] - v[p];
  });
}
function _p(e) {
  if (xt(e) === ii)
    return [];
  var t = xn(e);
  return [Oa(e), t, Oa(t)];
}
function Lp(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !0 : a, d = r.fallbackPlacements, f = r.padding, m = r.boundary, g = r.rootBoundary, b = r.altBoundary, v = r.flipVariations, h = v === void 0 ? !0 : v, p = r.allowedAutoPlacements, x = t.options.placement, T = xt(x), w = T === x, $ = d || (w || !h ? [xn(x)] : _p(x)), E = [x].concat($).reduce(function(z, K) {
      return z.concat(xt(K) === ii ? Mp(t, {
        placement: K,
        boundary: m,
        rootBoundary: g,
        padding: f,
        flipVariations: h,
        allowedAutoPlacements: p
      }) : K);
    }, []), S = t.rects.reference, C = t.rects.popper, N = /* @__PURE__ */ new Map(), M = !0, R = E[0], _ = 0; _ < E.length; _++) {
      var P = E[_], c = xt(P), j = Or(P) === Tr, k = [qe, dt].indexOf(c) >= 0, W = k ? "width" : "height", F = Jr(t, {
        placement: P,
        boundary: m,
        rootBoundary: g,
        altBoundary: b,
        padding: f
      }), X = k ? j ? pt : et : j ? dt : qe;
      S[W] > C[W] && (X = xn(X));
      var ee = xn(X), ie = [];
      if (i && ie.push(F[c] <= 0), l && ie.push(F[X] <= 0, F[ee] <= 0), ie.every(function(z) {
        return z;
      })) {
        R = P, M = !1;
        break;
      }
      N.set(P, ie);
    }
    if (M)
      for (var y = h ? 3 : 1, O = function(K) {
        var B = E.find(function(H) {
          var Q = N.get(H);
          if (Q)
            return Q.slice(0, K).every(function(Y) {
              return Y;
            });
        });
        if (B)
          return R = B, "break";
      }, L = y; L > 0; L--) {
        var I = O(L);
        if (I === "break") break;
      }
    t.placement !== R && (t.modifiersData[n]._skip = !0, t.placement = R, t.reset = !0);
  }
}
const Dp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Lp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Pa(e, t, r) {
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
function ka(e) {
  return [qe, pt, dt, et].some(function(t) {
    return e[t] >= 0;
  });
}
function Vp(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Jr(t, {
    elementContext: "reference"
  }), l = Jr(t, {
    altBoundary: !0
  }), d = Pa(a, n), f = Pa(l, o, i), m = ka(d), g = ka(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: f,
    isReferenceHidden: m,
    hasPopperEscaped: g
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": m,
    "data-popper-escaped": g
  });
}
const Bp = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Vp
};
function Fp(e, t, r) {
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
function Up(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = $s.reduce(function(m, g) {
    return m[g] = Fp(g, t.rects, i), m;
  }, {}), l = a[t.placement], d = l.x, f = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = a;
}
const zp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Up
};
function Wp(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const Kp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wp,
  data: {}
};
function Hp(e) {
  return e === "x" ? "y" : "x";
}
function Gp(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, l = a === void 0 ? !1 : a, d = r.boundary, f = r.rootBoundary, m = r.altBoundary, g = r.padding, b = r.tether, v = b === void 0 ? !0 : b, h = r.tetherOffset, p = h === void 0 ? 0 : h, x = Jr(t, {
    boundary: d,
    rootBoundary: f,
    padding: g,
    altBoundary: m
  }), T = xt(t.placement), w = Or(t.placement), $ = !w, E = li(T), S = Hp(E), C = t.modifiersData.popperOffsets, N = t.rects.reference, M = t.rects.popper, R = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, _ = typeof R == "number" ? {
    mainAxis: R,
    altAxis: R
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, R), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, c = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var j, k = E === "y" ? qe : et, W = E === "y" ? dt : pt, F = E === "y" ? "height" : "width", X = C[E], ee = X + x[k], ie = X - x[W], y = v ? -M[F] / 2 : 0, O = w === Tr ? N[F] : M[F], L = w === Tr ? -M[F] : -N[F], I = t.elements.arrow, z = v && I ? si(I) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : As(), B = K[k], H = K[W], Q = Ur(0, N[F], z[F]), Y = $ ? N[F] / 2 - y - Q - B - _.mainAxis : O - Q - B - _.mainAxis, J = $ ? -N[F] / 2 + y + Q + H + _.mainAxis : L + Q + H + _.mainAxis, ge = t.elements.arrow && rn(t.elements.arrow), G = ge ? E === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, ue = (j = P?.[E]) != null ? j : 0, De = X + Y - ue - G, Ue = X + J - ue, Se = Ur(v ? Rn(ee, De) : ee, X, v ? nr(ie, Ue) : ie);
      C[E] = Se, c[E] = Se - X;
    }
    if (l) {
      var ze, re = E === "x" ? qe : et, je = E === "x" ? dt : pt, ce = C[S], Me = S === "y" ? "height" : "width", ne = ce + x[re], Xe = ce - x[je], Ve = [qe, et].indexOf(T) !== -1, oe = (ze = P?.[S]) != null ? ze : 0, he = Ve ? ne : ce - N[Me] - M[Me] - oe + _.altAxis, de = Ve ? ce + N[Me] + M[Me] - oe - _.altAxis : Xe, Oe = v && Ve ? yp(he, ce, de) : Ur(v ? he : ne, ce, v ? de : Xe);
      C[S] = Oe, c[S] = Oe - ce;
    }
    t.modifiersData[n] = c;
  }
}
const Yp = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Gp,
  requiresIfExists: ["offset"]
};
function Qp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Jp(e) {
  return e === at(e) || !ct(e) ? ci(e) : Qp(e);
}
function Xp(e) {
  var t = e.getBoundingClientRect(), r = Cr(t.width) / e.offsetWidth || 1, n = Cr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Zp(e, t, r) {
  r === void 0 && (r = !1);
  var n = ct(t), o = ct(t) && Xp(t), i = Qt(t), a = wr(e, o, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((St(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  di(i)) && (l = Jp(t)), ct(t) ? (d = wr(t, !0), d.x += t.clientLeft, d.y += t.clientTop) : i && (d.x = ui(i))), {
    x: a.left + l.scrollLeft - d.x,
    y: a.top + l.scrollTop - d.y,
    width: a.width,
    height: a.height
  };
}
function qp(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(l) {
      if (!r.has(l)) {
        var d = t.get(l);
        d && o(d);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function ef(e) {
  var t = qp(e);
  return dp.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function tf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function rf(e) {
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
var $a = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ja() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function nf(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? $a : o;
  return function(l, d, f) {
    f === void 0 && (f = i);
    var m = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $a, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: d
      },
      attributes: {},
      styles: {}
    }, g = [], b = !1, v = {
      state: m,
      setOptions: function(T) {
        var w = typeof T == "function" ? T(m.options) : T;
        p(), m.options = Object.assign({}, i, m.options, w), m.scrollParents = {
          reference: sr(l) ? zr(l) : l.contextElement ? zr(l.contextElement) : [],
          popper: zr(d)
        };
        var $ = ef(rf([].concat(n, m.options.modifiers)));
        return m.orderedModifiers = $.filter(function(E) {
          return E.enabled;
        }), h(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var T = m.elements, w = T.reference, $ = T.popper;
          if (ja(w, $)) {
            m.rects = {
              reference: Zp(w, rn($), m.options.strategy === "fixed"),
              popper: si($)
            }, m.reset = !1, m.placement = m.options.placement, m.orderedModifiers.forEach(function(_) {
              return m.modifiersData[_.name] = Object.assign({}, _.data);
            });
            for (var E = 0; E < m.orderedModifiers.length; E++) {
              if (m.reset === !0) {
                m.reset = !1, E = -1;
                continue;
              }
              var S = m.orderedModifiers[E], C = S.fn, N = S.options, M = N === void 0 ? {} : N, R = S.name;
              typeof C == "function" && (m = C({
                state: m,
                options: M,
                name: R,
                instance: v
              }) || m);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tf(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(m);
        });
      }),
      destroy: function() {
        p(), b = !0;
      }
    };
    if (!ja(l, d))
      return v;
    v.setOptions(f).then(function(x) {
      !b && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function h() {
      m.orderedModifiers.forEach(function(x) {
        var T = x.name, w = x.options, $ = w === void 0 ? {} : w, E = x.effect;
        if (typeof E == "function") {
          var S = E({
            state: m,
            name: T,
            instance: v,
            options: $
          }), C = function() {
          };
          g.push(S || C);
        }
      });
    }
    function p() {
      g.forEach(function(x) {
        return x();
      }), g = [];
    }
    return v;
  };
}
var of = [Rp, Kp, wp, mp, zp, Dp, Yp, Sp, Bp], af = /* @__PURE__ */ nf({
  defaultModifiers: of
});
function sf(e) {
  return typeof e == "string";
}
function Ds(e, t, r) {
  return e === void 0 || sf(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function lf(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Ia(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Vs(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = ke(r?.className, i, o?.className, n?.className), h = {
      ...r?.style,
      ...o?.style,
      ...n?.style
    }, p = {
      ...r,
      ...o,
      ...n
    };
    return v.length > 0 && (p.className = v), Object.keys(h).length > 0 && (p.style = h), {
      props: p,
      internalRef: void 0
    };
  }
  const a = lf({
    ...o,
    ...n
  }), l = Ia(n), d = Ia(o), f = t(a), m = ke(f?.className, r?.className, i, o?.className, n?.className), g = {
    ...f?.style,
    ...r?.style,
    ...o?.style,
    ...n?.style
  }, b = {
    ...f,
    ...r,
    ...d,
    ...l
  };
  return m.length > 0 && (b.className = m), Object.keys(g).length > 0 && (b.style = g), {
    props: b,
    internalRef: f.ref
  };
}
function Bs(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function cf(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : Bs(r, n), {
    props: l,
    internalRef: d
  } = Vs({
    ...i,
    externalSlotProps: a
  }), f = Gt(d, a?.ref, e.additionalProps?.ref);
  return Ds(t, {
    ...l,
    ref: f
  }, n);
}
function uf(e) {
  return parseInt(A.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function df(e) {
  return typeof e == "function" ? e() : e;
}
const Pn = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = t, [a, l] = A.useState(null), d = Gt(/* @__PURE__ */ A.isValidElement(n) ? uf(n) : null, r);
  if (ir(() => {
    i || l(df(o) || document.body);
  }, [o, i]), ir(() => {
    if (a && !i)
      return Io(r, a), () => {
        Io(r, null);
      };
  }, [r, a, i]), i) {
    if (/* @__PURE__ */ A.isValidElement(n)) {
      const f = {
        ref: d
      };
      return /* @__PURE__ */ A.cloneElement(n, f);
    }
    return n;
  }
  return a && /* @__PURE__ */ Ml.createPortal(n, a);
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
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
  container: s.oneOfType([Yr, s.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: s.bool
});
process.env.NODE_ENV !== "production" && (Pn.propTypes = Xo(Pn.propTypes));
function pf(e) {
  return yt("MuiPopper", e);
}
rt("MuiPopper", ["root"]);
function ff(e, t) {
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
function kn(e) {
  return typeof e == "function" ? e() : e;
}
function Jn(e) {
  return e.nodeType !== void 0;
}
function mf(e) {
  return !Jn(e);
}
const hf = (e) => {
  const {
    classes: t
  } = e;
  return At({
    root: ["root"]
  }, pf, t);
}, gf = {}, yf = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: a,
    modifiers: l,
    open: d,
    placement: f,
    popperOptions: m,
    popperRef: g,
    slotProps: b = {},
    slots: v = {},
    TransitionProps: h,
    // @ts-ignore internal logic
    ownerState: p,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, T = A.useRef(null), w = Gt(T, r), $ = A.useRef(null), E = Gt($, g), S = A.useRef(E);
  ir(() => {
    S.current = E;
  }, [E]), A.useImperativeHandle(g, () => $.current, []);
  const C = ff(f, i), [N, M] = A.useState(C), [R, _] = A.useState(kn(n));
  A.useEffect(() => {
    $.current && $.current.forceUpdate();
  }), A.useEffect(() => {
    n && _(kn(n));
  }, [n]), ir(() => {
    if (!R || !d)
      return;
    const W = (ee) => {
      M(ee.placement);
    };
    if (process.env.NODE_ENV !== "production" && R && Jn(R) && R.nodeType === 1) {
      const ee = R.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ee.top === 0 && ee.left === 0 && ee.right === 0 && ee.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let F = [{
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
        state: ee
      }) => {
        W(ee);
      }
    }];
    l != null && (F = F.concat(l)), m && m.modifiers != null && (F = F.concat(m.modifiers));
    const X = af(R, T.current, {
      placement: C,
      ...m,
      modifiers: F
    });
    return S.current(X), () => {
      X.destroy(), S.current(null);
    };
  }, [R, a, l, d, m, C]);
  const P = {
    placement: N
  };
  h !== null && (P.TransitionProps = h);
  const c = hf(t), j = v.root ?? "div", k = cf({
    elementType: j,
    externalSlotProps: b.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: c.root
  });
  return /* @__PURE__ */ u.jsx(j, {
    ...k,
    children: typeof o == "function" ? o(P) : o
  });
}), Fs = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: a = "ltr",
    disablePortal: l = !1,
    keepMounted: d = !1,
    modifiers: f,
    open: m,
    placement: g = "bottom",
    popperOptions: b = gf,
    popperRef: v,
    style: h,
    transition: p = !1,
    slotProps: x = {},
    slots: T = {},
    ...w
  } = t, [$, E] = A.useState(!0), S = () => {
    E(!1);
  }, C = () => {
    E(!0);
  };
  if (!d && !m && (!p || $))
    return null;
  let N;
  if (i)
    N = i;
  else if (n) {
    const _ = kn(n);
    N = _ && Jn(_) ? Ea(_).body : Ea(null).body;
  }
  const M = !m && d && (!p || $) ? "none" : void 0, R = p ? {
    in: m,
    onEnter: S,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ u.jsx(Pn, {
    disablePortal: l,
    container: N,
    children: /* @__PURE__ */ u.jsx(yf, {
      anchorEl: n,
      direction: a,
      disablePortal: l,
      modifiers: f,
      ref: r,
      open: p ? !$ : m,
      placement: g,
      popperOptions: b,
      popperRef: v,
      slotProps: x,
      slots: T,
      ...w,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: M,
        ...h
      },
      TransitionProps: R,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
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
  anchorEl: ar(s.oneOfType([Yr, s.object, s.func]), (e) => {
    if (e.open) {
      const t = kn(e.anchorEl);
      if (t && Jn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || mf(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: s.oneOfType([Yr, s.func]),
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
  popperRef: oi,
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
  return Ou(e);
}
const bf = $e(Fs, {
  name: "MuiPopper",
  slot: "Root"
})({}), pi = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Cu(), o = Tt({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: a,
    components: l,
    componentsProps: d,
    container: f,
    disablePortal: m,
    keepMounted: g,
    modifiers: b,
    open: v,
    placement: h,
    popperOptions: p,
    popperRef: x,
    transition: T,
    slots: w,
    slotProps: $,
    ...E
  } = o, S = w?.root ?? l?.Root, C = {
    anchorEl: i,
    container: f,
    disablePortal: m,
    keepMounted: g,
    modifiers: b,
    open: v,
    placement: h,
    popperOptions: p,
    popperRef: x,
    transition: T,
    ...E
  };
  return /* @__PURE__ */ u.jsx(bf, {
    as: a,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: S
    },
    slotProps: $ ?? d,
    ...C,
    ref: r
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
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
  anchorEl: s.oneOfType([Yr, s.object, s.func]),
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
  container: s.oneOfType([Yr, s.func]),
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
  popperRef: oi,
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
const tt = $u;
function vf(e) {
  return yt("MuiListSubheader", e);
}
rt("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const xf = (e) => {
  const {
    classes: t,
    color: r,
    disableGutters: n,
    inset: o,
    disableSticky: i
  } = e, a = {
    root: ["root", r !== "default" && `color${se(r)}`, !n && "gutters", o && "inset", !i && "sticky"]
  };
  return At(a, vf, t);
}, Sf = $e("li", {
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
}))), $n = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: o,
    color: i = "default",
    component: a = "li",
    disableGutters: l = !1,
    disableSticky: d = !1,
    inset: f = !1,
    ...m
  } = n, g = {
    ...n,
    color: i,
    component: a,
    disableGutters: l,
    disableSticky: d,
    inset: f
  }, b = xf(g);
  return /* @__PURE__ */ u.jsx(Sf, {
    as: a,
    className: ke(b.root, o),
    ref: r,
    ownerState: g,
    ...m
  });
});
$n && ($n.muiSkipListHighlight = !0);
process.env.NODE_ENV !== "production" && ($n.propTypes = {
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
function Ef(e) {
  return yt("MuiPaper", e);
}
rt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Tf = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return At(i, Ef, o);
}, Cf = $e("div", {
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
}))), fi = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiPaper"
  }), o = Ed(), {
    className: i,
    component: a = "div",
    elevation: l = 1,
    square: d = !1,
    variant: f = "elevation",
    ...m
  } = n, g = {
    ...n,
    component: a,
    elevation: l,
    square: d,
    variant: f
  }, b = Tf(g);
  return process.env.NODE_ENV !== "production" && o.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ u.jsx(Cf, {
    as: a,
    ownerState: g,
    className: ke(b.root, i),
    ref: r,
    ...m,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${wn("#fff", $o(l))}, ${wn("#fff", $o(l))})`
        }
      },
      ...m.style
    }
  });
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
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
  elevation: ar(Rs, (e) => {
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
function wf(e) {
  return yt("MuiSvgIcon", e);
}
rt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Of = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${se(t)}`, `fontSize${se(r)}`]
  };
  return At(o, wf, n);
}, Rf = $e("svg", {
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
}))), jn = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: l = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: m = !1,
    titleAccess: g,
    viewBox: b = "0 0 24 24",
    ...v
  } = n, h = /* @__PURE__ */ A.isValidElement(o) && o.type === "svg", p = {
    ...n,
    color: a,
    component: l,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: b,
    hasSvgAsChild: h
  }, x = {};
  m || (x.viewBox = b);
  const T = Of(p);
  return /* @__PURE__ */ u.jsxs(Rf, {
    as: l,
    className: ke(T.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: r,
    ...x,
    ...v,
    ...h && o.props,
    ownerState: p,
    children: [h ? o.props.children : o, g ? /* @__PURE__ */ u.jsx("title", {
      children: g
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (jn.propTypes = {
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
jn.muiName = "SvgIcon";
function mi(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ u.jsx(jn, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = jn.muiName, /* @__PURE__ */ A.memo(/* @__PURE__ */ A.forwardRef(r));
}
function Pf(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function kf(e) {
  return typeof e.main == "string";
}
function $f(e, t = []) {
  if (!kf(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function er(e = []) {
  return ([, t]) => t && $f(t, e);
}
function jf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function If(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !jf(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Af = ar(s.elementType, If);
function Aa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Na = {};
function Us(e, t) {
  const r = A.useRef(Na);
  return r.current === Na && (r.current = e(t)), r;
}
class In {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new In();
  }
  static use() {
    const t = Us(In.create).current, [r, n] = A.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, A.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Mf(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Nf() {
  return In.use();
}
function Mf() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mo.apply(null, arguments);
}
function _f(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function _o(e, t) {
  return _o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, _o(e, t);
}
function Lf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _o(e, t);
}
const Ma = ot.createContext(null);
function Df(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hi(e, t) {
  var r = function(i) {
    return t && hn(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && qs.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Vf(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, l = {};
  for (var d in t) {
    if (n[d])
      for (a = 0; a < n[d].length; a++) {
        var f = n[d][a];
        l[n[d][a]] = r(f);
      }
    l[d] = r(d);
  }
  for (a = 0; a < o.length; a++)
    l[o[a]] = r(o[a]);
  return l;
}
function tr(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Bf(e, t) {
  return hi(e.children, function(r) {
    return gn(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: tr(r, "appear", e),
      enter: tr(r, "enter", e),
      exit: tr(r, "exit", e)
    });
  });
}
function Ff(e, t, r) {
  var n = hi(e.children), o = Vf(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (hn(a)) {
      var l = i in t, d = i in n, f = t[i], m = hn(f) && !f.props.in;
      d && (!l || m) ? o[i] = gn(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: tr(a, "exit", e),
        enter: tr(a, "enter", e)
      }) : !d && l && !m ? o[i] = gn(a, {
        in: !1
      }) : d && l && hn(f) && (o[i] = gn(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: tr(a, "exit", e),
        enter: tr(a, "enter", e)
      }));
    }
  }), o;
}
var Uf = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, zf = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gi = /* @__PURE__ */ (function(e) {
  Lf(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Df(i));
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
    var a = i.children, l = i.handleExited, d = i.firstRender;
    return {
      children: d ? Bf(o, l) : Ff(o, a, l),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = hi(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(l) {
      var d = Mo({}, l.children);
      return delete d[o.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, l = _f(o, ["component", "childFactory"]), d = this.state.contextValue, f = Uf(this.state.children).map(a);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ ot.createElement(Ma.Provider, {
      value: d
    }, f) : /* @__PURE__ */ ot.createElement(Ma.Provider, {
      value: d
    }, /* @__PURE__ */ ot.createElement(i, l, f));
  }, t;
})(ot.Component);
gi.propTypes = process.env.NODE_ENV !== "production" ? {
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
gi.defaultProps = zf;
const Wf = [];
function Kf(e) {
  A.useEffect(e, Wf);
}
class yi {
  static create() {
    return new yi();
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
function Hf() {
  const e = Us(yi.create).current;
  return Kf(e.disposeEffect), e;
}
function zs(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: l,
    onExited: d,
    timeout: f
  } = e, [m, g] = A.useState(!1), b = ke(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, h = ke(r.child, m && r.childLeaving, n && r.childPulsate);
  return !l && !m && g(!0), A.useEffect(() => {
    if (!l && d != null) {
      const p = setTimeout(d, f);
      return () => {
        clearTimeout(p);
      };
    }
  }, [d, l, f]), /* @__PURE__ */ u.jsx("span", {
    className: b,
    style: v,
    children: /* @__PURE__ */ u.jsx("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (zs.propTypes = {
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
const st = rt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Lo = 550, Gf = 80, Yf = Xr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Qf = Xr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Jf = Xr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Xf = $e("span", {
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
}), Zf = $e(zs, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${st.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Yf};
    animation-duration: ${Lo}ms;
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
    animation-name: ${Qf};
    animation-duration: ${Lo}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${st.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jf};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Ws = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...l
  } = n, [d, f] = A.useState([]), m = A.useRef(0), g = A.useRef(null);
  A.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [d]);
  const b = A.useRef(!1), v = Hf(), h = A.useRef(null), p = A.useRef(null), x = A.useCallback((E) => {
    const {
      pulsate: S,
      rippleX: C,
      rippleY: N,
      rippleSize: M,
      cb: R
    } = E;
    f((_) => [..._, /* @__PURE__ */ u.jsx(Zf, {
      classes: {
        ripple: ke(i.ripple, st.ripple),
        rippleVisible: ke(i.rippleVisible, st.rippleVisible),
        ripplePulsate: ke(i.ripplePulsate, st.ripplePulsate),
        child: ke(i.child, st.child),
        childLeaving: ke(i.childLeaving, st.childLeaving),
        childPulsate: ke(i.childPulsate, st.childPulsate)
      },
      timeout: Lo,
      pulsate: S,
      rippleX: C,
      rippleY: N,
      rippleSize: M
    }, m.current)]), m.current += 1, g.current = R;
  }, [i]), T = A.useCallback((E = {}, S = {}, C = () => {
  }) => {
    const {
      pulsate: N = !1,
      center: M = o || S.pulsate,
      fakeElement: R = !1
      // For test purposes
    } = S;
    if (E?.type === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    E?.type === "touchstart" && (b.current = !0);
    const _ = R ? null : p.current, P = _ ? _.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let c, j, k;
    if (M || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      c = Math.round(P.width / 2), j = Math.round(P.height / 2);
    else {
      const {
        clientX: W,
        clientY: F
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      c = Math.round(W - P.left), j = Math.round(F - P.top);
    }
    if (M)
      k = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), k % 2 === 0 && (k += 1);
    else {
      const W = Math.max(Math.abs((_ ? _.clientWidth : 0) - c), c) * 2 + 2, F = Math.max(Math.abs((_ ? _.clientHeight : 0) - j), j) * 2 + 2;
      k = Math.sqrt(W ** 2 + F ** 2);
    }
    E?.touches ? h.current === null && (h.current = () => {
      x({
        pulsate: N,
        rippleX: c,
        rippleY: j,
        rippleSize: k,
        cb: C
      });
    }, v.start(Gf, () => {
      h.current && (h.current(), h.current = null);
    })) : x({
      pulsate: N,
      rippleX: c,
      rippleY: j,
      rippleSize: k,
      cb: C
    });
  }, [o, x, v]), w = A.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), $ = A.useCallback((E, S) => {
    if (v.clear(), E?.type === "touchend" && h.current) {
      h.current(), h.current = null, v.start(0, () => {
        $(E, S);
      });
      return;
    }
    h.current = null, f((C) => C.length > 0 ? C.slice(1) : C), g.current = S;
  }, [v]);
  return A.useImperativeHandle(r, () => ({
    pulsate: w,
    start: T,
    stop: $
  }), [w, T, $]), /* @__PURE__ */ u.jsx(Xf, {
    className: ke(st.root, i.root, a),
    ref: p,
    ...l,
    children: /* @__PURE__ */ u.jsx(gi, {
      component: null,
      exit: !0,
      children: d
    })
  });
});
process.env.NODE_ENV !== "production" && (Ws.propTypes = {
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
function qf(e) {
  return yt("MuiButtonBase", e);
}
const em = rt("MuiButtonBase", ["root", "disabled", "focusVisible"]), tm = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = At({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, qf, o);
  return r && n && (a.root += ` ${n}`), a;
}, rm = $e("button", {
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
  [`&.${em.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), An = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: l,
    component: d = "button",
    disabled: f = !1,
    disableRipple: m = !1,
    disableTouchRipple: g = !1,
    focusRipple: b = !1,
    focusVisibleClassName: v,
    LinkComponent: h = "a",
    onBlur: p,
    onClick: x,
    onContextMenu: T,
    onDragLeave: w,
    onFocus: $,
    onFocusVisible: E,
    onKeyDown: S,
    onKeyUp: C,
    onMouseDown: N,
    onMouseLeave: M,
    onMouseUp: R,
    onTouchEnd: _,
    onTouchMove: P,
    onTouchStart: c,
    tabIndex: j = 0,
    TouchRippleProps: k,
    touchRippleRef: W,
    type: F,
    ...X
  } = n, ee = A.useRef(null), ie = Nf(), y = Gt(ie.ref, W), [O, L] = A.useState(!1);
  f && O && L(!1), A.useImperativeHandle(o, () => ({
    focusVisible: () => {
      L(!0), ee.current.focus();
    }
  }), []);
  const I = ie.shouldMount && !m && !f;
  A.useEffect(() => {
    O && b && !m && ie.pulsate();
  }, [m, b, O, ie]);
  const z = kt(ie, "start", N, g), K = kt(ie, "stop", T, g), B = kt(ie, "stop", w, g), H = kt(ie, "stop", R, g), Q = kt(ie, "stop", (ne) => {
    O && ne.preventDefault(), M && M(ne);
  }, g), Y = kt(ie, "start", c, g), J = kt(ie, "stop", _, g), ge = kt(ie, "stop", P, g), G = kt(ie, "stop", (ne) => {
    Aa(ne.target) || L(!1), p && p(ne);
  }, !1), ue = Ut((ne) => {
    ee.current || (ee.current = ne.currentTarget), Aa(ne.target) && (L(!0), E && E(ne)), $ && $(ne);
  }), De = () => {
    const ne = ee.current;
    return d && d !== "button" && !(ne.tagName === "A" && ne.href);
  }, Ue = Ut((ne) => {
    b && !ne.repeat && O && ne.key === " " && ie.stop(ne, () => {
      ie.start(ne);
    }), ne.target === ne.currentTarget && De() && ne.key === " " && ne.preventDefault(), S && S(ne), ne.target === ne.currentTarget && De() && ne.key === "Enter" && !f && (ne.preventDefault(), x && x(ne));
  }), Se = Ut((ne) => {
    b && ne.key === " " && O && !ne.defaultPrevented && ie.stop(ne, () => {
      ie.pulsate(ne);
    }), C && C(ne), x && ne.target === ne.currentTarget && De() && ne.key === " " && !ne.defaultPrevented && x(ne);
  });
  let ze = d;
  ze === "button" && (X.href || X.to) && (ze = h);
  const re = {};
  ze === "button" ? (re.type = F === void 0 ? "button" : F, re.disabled = f) : (!X.href && !X.to && (re.role = "button"), f && (re["aria-disabled"] = f));
  const je = Gt(r, ee), ce = {
    ...n,
    centerRipple: i,
    component: d,
    disabled: f,
    disableRipple: m,
    disableTouchRipple: g,
    focusRipple: b,
    tabIndex: j,
    focusVisible: O
  }, Me = tm(ce);
  return /* @__PURE__ */ u.jsxs(rm, {
    as: ze,
    className: ke(Me.root, l),
    ownerState: ce,
    onBlur: G,
    onClick: x,
    onContextMenu: K,
    onFocus: ue,
    onKeyDown: Ue,
    onKeyUp: Se,
    onMouseDown: z,
    onMouseLeave: Q,
    onMouseUp: H,
    onDragLeave: B,
    onTouchEnd: J,
    onTouchMove: ge,
    onTouchStart: Y,
    ref: je,
    tabIndex: f ? -1 : j,
    type: F,
    ...re,
    ...X,
    children: [a, I ? /* @__PURE__ */ u.jsx(Ws, {
      ref: y,
      center: i,
      ...k
    }) : null]
  });
});
function kt(e, t, r, n = !1) {
  return Ut((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (An.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: oi,
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
  component: Af,
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
function nm(e) {
  return yt("MuiCircularProgress", e);
}
rt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Vt = 44, Do = Xr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Vo = Xr`
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
`, om = typeof Do != "string" ? Ya`
        animation: ${Do} 1.4s linear infinite;
      ` : null, im = typeof Vo != "string" ? Ya`
        animation: ${Vo} 1.4s ease-in-out infinite;
      ` : null, am = (e) => {
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
  return At(i, nm, t);
}, sm = $e("span", {
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
    style: om || {
      animation: `${Do} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(er()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), lm = $e("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), cm = $e("circle", {
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
    style: im || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Vo} 1.4s ease-in-out infinite`
    }
  }]
}))), Ks = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: l = 40,
    style: d,
    thickness: f = 3.6,
    value: m = 0,
    variant: g = "indeterminate",
    ...b
  } = n, v = {
    ...n,
    color: i,
    disableShrink: a,
    size: l,
    thickness: f,
    value: m,
    variant: g
  }, h = am(v), p = {}, x = {}, T = {};
  if (g === "determinate") {
    const w = 2 * Math.PI * ((Vt - f) / 2);
    p.strokeDasharray = w.toFixed(3), T["aria-valuenow"] = Math.round(m), p.strokeDashoffset = `${((100 - m) / 100 * w).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ u.jsx(sm, {
    className: ke(h.root, o),
    style: {
      width: l,
      height: l,
      ...x,
      ...d
    },
    ownerState: v,
    ref: r,
    role: "progressbar",
    ...T,
    ...b,
    children: /* @__PURE__ */ u.jsx(lm, {
      className: h.svg,
      ownerState: v,
      viewBox: `${Vt / 2} ${Vt / 2} ${Vt} ${Vt}`,
      children: /* @__PURE__ */ u.jsx(cm, {
        className: h.circle,
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
process.env.NODE_ENV !== "production" && (Ks.propTypes = {
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
function um(e) {
  return yt("MuiIconButton", e);
}
const _a = rt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), dm = (e) => {
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
  return At(l, um, t);
}, pm = $e(An, {
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
  [`&.${_a.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${_a.loading}`]: {
    color: "transparent"
  }
}))), fm = $e("span", {
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
})), bi = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: l = "default",
    disabled: d = !1,
    disableFocusRipple: f = !1,
    size: m = "medium",
    id: g,
    loading: b = null,
    loadingIndicator: v,
    ...h
  } = n, p = ei(g), x = v ?? /* @__PURE__ */ u.jsx(Ks, {
    "aria-labelledby": p,
    color: "inherit",
    size: 16
  }), T = {
    ...n,
    edge: o,
    color: l,
    disabled: d,
    disableFocusRipple: f,
    loading: b,
    loadingIndicator: x,
    size: m
  }, w = dm(T);
  return /* @__PURE__ */ u.jsxs(pm, {
    id: b ? p : g,
    className: ke(w.root, a),
    centerRipple: !0,
    focusRipple: !f,
    disabled: d || b,
    ref: r,
    ...h,
    ownerState: T,
    children: [typeof b == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: w.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(fm, {
        className: w.loadingIndicator,
        ownerState: T,
        children: b && x
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: ar(s.node, (e) => A.Children.toArray(e.children).some((r) => /* @__PURE__ */ A.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const mm = mi(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function hm(e) {
  return yt("MuiChip", e);
}
const me = rt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
function Wr(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...d
  } = t, {
    component: f,
    slots: m = {
      [e]: void 0
    },
    slotProps: g = {
      [e]: void 0
    },
    ...b
  } = i, v = m[e] || n, h = Bs(g[e], o), {
    props: {
      component: p,
      ...x
    },
    internalRef: T
  } = Vs({
    className: r,
    ...d,
    externalForwardedProps: e === "root" ? b : void 0,
    externalSlotProps: h
  }), w = Gt(T, h?.ref, t.ref), $ = e === "root" ? p || f : p, E = Ds(v, {
    ...e === "root" && !f && !m[e] && a,
    ...e !== "root" && !m[e] && a,
    ...x,
    ...$ && !l && {
      as: $
    },
    ...$ && l && {
      component: $
    },
    ref: w
  }, o);
  return [v, E];
}
const gm = (e) => {
  const {
    classes: t,
    disabled: r,
    size: n,
    color: o,
    iconColor: i,
    onDelete: a,
    clickable: l,
    variant: d
  } = e, f = {
    root: ["root", d, r && "disabled", `size${se(n)}`, `color${se(o)}`, l && "clickable", l && `clickableColor${se(o)}`, a && "deletable", a && `deletableColor${se(o)}`, `${d}${se(o)}`],
    label: ["label", `label${se(n)}`],
    avatar: ["avatar", `avatar${se(n)}`, `avatarColor${se(o)}`],
    icon: ["icon", `icon${se(n)}`, `iconColor${se(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${se(n)}`, `deleteIconColor${se(o)}`, `deleteIcon${se(d)}Color${se(o)}`]
  };
  return At(f, hm, t);
}, ym = $e("div", {
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
      variant: d
    } = r;
    return [{
      [`& .${me.avatar}`]: t.avatar
    }, {
      [`& .${me.avatar}`]: t[`avatar${se(l)}`]
    }, {
      [`& .${me.avatar}`]: t[`avatarColor${se(n)}`]
    }, {
      [`& .${me.icon}`]: t.icon
    }, {
      [`& .${me.icon}`]: t[`icon${se(l)}`]
    }, {
      [`& .${me.icon}`]: t[`iconColor${se(o)}`]
    }, {
      [`& .${me.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIcon${se(l)}`]
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIconColor${se(n)}`]
    }, {
      [`& .${me.deleteIcon}`]: t[`deleteIcon${se(d)}Color${se(n)}`]
    }, t.root, t[`size${se(l)}`], t[`color${se(n)}`], i && t.clickable, i && n !== "default" && t[`clickableColor${se(n)})`], a && t.deletable, a && n !== "default" && t[`deletableColor${se(n)}`], t[d], t[`${d}${se(n)}`]];
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
    [`&.${me.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${me.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${me.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${me.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${me.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${me.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${me.deleteIcon}`]: {
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
        [`& .${me.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${me.deleteIcon}`]: {
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
        [`& .${me.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[r].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].contrastText
          }
        }
      }
    })), {
      props: (r) => r.iconColor === r.color,
      style: {
        [`& .${me.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (r) => r.iconColor === r.color && r.color !== "default",
      style: {
        [`& .${me.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${me.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(er(["dark"])).map(([r]) => ({
      props: {
        color: r,
        onDelete: !0
      },
      style: {
        [`&.${me.focusVisible}`]: {
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
        [`&.${me.focusVisible}`]: {
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
        [`&:hover, &.${me.focusVisible}`]: {
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
        [`&.${me.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${me.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${me.avatar}`]: {
          marginLeft: 4
        },
        [`& .${me.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${me.icon}`]: {
          marginLeft: 4
        },
        [`& .${me.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${me.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${me.deleteIconSmall}`]: {
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
        [`&.${me.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${me.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[r].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${me.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[r].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[r].main
          }
        }
      }
    }))]
  };
})), bm = $e("span", {
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
function La(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Hs = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: a,
    color: l = "default",
    component: d,
    deleteIcon: f,
    disabled: m = !1,
    icon: g,
    label: b,
    onClick: v,
    onDelete: h,
    onKeyDown: p,
    onKeyUp: x,
    size: T = "medium",
    variant: w = "filled",
    tabIndex: $,
    skipFocusWhenDisabled: E = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: S = {},
    slotProps: C = {},
    ...N
  } = n, M = A.useRef(null), R = Gt(M, r), _ = (B) => {
    B.stopPropagation(), h && h(B);
  }, P = (B) => {
    B.currentTarget === B.target && La(B) && B.preventDefault(), p && p(B);
  }, c = (B) => {
    B.currentTarget === B.target && h && La(B) && h(B), x && x(B);
  }, j = a !== !1 && v ? !0 : a, k = j || h ? An : d || "div", W = {
    ...n,
    component: k,
    disabled: m,
    size: T,
    color: l,
    iconColor: /* @__PURE__ */ A.isValidElement(g) && g.props.color || l,
    onDelete: !!h,
    clickable: j,
    variant: w
  }, F = gm(W), X = k === An ? {
    component: d || "div",
    focusVisibleClassName: F.focusVisible,
    ...h && {
      disableRipple: !0
    }
  } : {};
  let ee = null;
  h && (ee = f && /* @__PURE__ */ A.isValidElement(f) ? /* @__PURE__ */ A.cloneElement(f, {
    className: ke(f.props.className, F.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ u.jsx(mm, {
    className: F.deleteIcon,
    onClick: _
  }));
  let ie = null;
  o && /* @__PURE__ */ A.isValidElement(o) && (ie = /* @__PURE__ */ A.cloneElement(o, {
    className: ke(F.avatar, o.props.className)
  }));
  let y = null;
  g && /* @__PURE__ */ A.isValidElement(g) && (y = /* @__PURE__ */ A.cloneElement(g, {
    className: ke(F.icon, g.props.className)
  })), process.env.NODE_ENV !== "production" && ie && y && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
  const O = {
    slots: S,
    slotProps: C
  }, [L, I] = Wr("root", {
    elementType: ym,
    externalForwardedProps: {
      ...O,
      ...N
    },
    ownerState: W,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: R,
    className: ke(F.root, i),
    additionalProps: {
      disabled: j && m ? !0 : void 0,
      tabIndex: E && m ? -1 : $,
      ...X
    },
    getSlotProps: (B) => ({
      ...B,
      onClick: (H) => {
        B.onClick?.(H), v?.(H);
      },
      onKeyDown: (H) => {
        B.onKeyDown?.(H), P(H);
      },
      onKeyUp: (H) => {
        B.onKeyUp?.(H), c(H);
      }
    })
  }), [z, K] = Wr("label", {
    elementType: bm,
    externalForwardedProps: O,
    ownerState: W,
    className: F.label
  });
  return /* @__PURE__ */ u.jsxs(L, {
    as: k,
    ...I,
    children: [ie || y, /* @__PURE__ */ u.jsx(z, {
      ...K,
      children: b
    }), ee]
  });
});
process.env.NODE_ENV !== "production" && (Hs.propTypes = {
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
  children: Pf,
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
const vt = rt("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), Co = {
  ...vt,
  ...rt("MuiInput", ["root", "underline", "input"])
}, Da = {
  ...vt,
  ...rt("MuiOutlinedInput", ["root", "notchedOutline", "input"])
}, yr = {
  ...vt,
  ...rt("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, vm = mi(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), xm = mi(/* @__PURE__ */ u.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function Sm(e) {
  return yt("MuiAutocomplete", e);
}
const pe = rt("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var Va, Ba;
const Em = (e) => {
  const {
    classes: t,
    disablePortal: r,
    expanded: n,
    focused: o,
    fullWidth: i,
    hasClearIcon: a,
    hasPopupIcon: l,
    inputFocused: d,
    popupOpen: f,
    size: m
  } = e, g = {
    root: ["root", n && "expanded", o && "focused", i && "fullWidth", a && "hasClearIcon", l && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", d && "inputFocused"],
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
  return At(g, Sm, t);
}, Tm = $e("div", {
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
  [`& .${Co.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${Co.root}.${vt.sizeSmall}`]: {
    [`& .${Co.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${Da.root}`]: {
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
  [`& .${Da.root}.${vt.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${pe.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${yr.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${pe.hasPopupIcon}&, .${pe.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${pe.hasPopupIcon}.${pe.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${yr.input}`]: {
      padding: "7px 4px"
    },
    [`& .${pe.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${yr.root}.${vt.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${yr.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${vt.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${yr.root}.${vt.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${pe.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${yr.root}.${vt.hiddenLabel}.${vt.sizeSmall}`]: {
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
}), Cm = $e("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment"
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), wm = $e(bi, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator"
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), Om = $e(bi, {
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
}), Rm = $e(pi, {
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
}))), Pm = $e(fi, {
  name: "MuiAutocomplete",
  slot: "Paper"
})(tt(({
  theme: e
}) => ({
  ...e.typography.body1,
  overflow: "auto"
}))), km = $e("div", {
  name: "MuiAutocomplete",
  slot: "Loading"
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), $m = $e("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions"
})(tt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
}))), jm = $e("ul", {
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
}))), Im = $e($n, {
  name: "MuiAutocomplete",
  slot: "GroupLabel"
})(tt(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
}))), Am = $e("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl"
})({
  padding: 0,
  [`& .${pe.option}`]: {
    paddingLeft: 24
  }
}), Gs = /* @__PURE__ */ A.forwardRef(function(t, r) {
  const n = Tt({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: o = !1,
    autoHighlight: i = !1,
    autoSelect: a = !1,
    blurOnSelect: l = !1,
    ChipProps: d,
    className: f,
    clearIcon: m = Va || (Va = /* @__PURE__ */ u.jsx(vm, {
      fontSize: "small"
    })),
    clearOnBlur: g = !n.freeSolo,
    clearOnEscape: b = !1,
    clearText: v = "Clear",
    closeText: h = "Close",
    componentsProps: p,
    defaultValue: x = n.multiple ? [] : null,
    disableClearable: T = !1,
    disableCloseOnSelect: w = !1,
    disabled: $ = !1,
    disabledItemsFocusable: E = !1,
    disableListWrap: S = !1,
    disablePortal: C = !1,
    filterOptions: N,
    filterSelectedOptions: M = !1,
    forcePopupIcon: R = "auto",
    freeSolo: _ = !1,
    fullWidth: P = !1,
    getLimitTagsText: c = (be) => `+${be}`,
    getOptionDisabled: j,
    getOptionKey: k,
    getOptionLabel: W,
    isOptionEqualToValue: F,
    groupBy: X,
    handleHomeEndKeys: ee = !n.freeSolo,
    id: ie,
    includeInputInList: y = !1,
    inputValue: O,
    limitTags: L = -1,
    ListboxComponent: I,
    ListboxProps: z,
    loading: K = !1,
    loadingText: B = "Loading…",
    multiple: H = !1,
    noOptionsText: Q = "No options",
    onChange: Y,
    onClose: J,
    onHighlightChange: ge,
    onInputChange: G,
    onOpen: ue,
    open: De,
    openOnFocus: Ue = !1,
    openText: Se = "Open",
    options: ze,
    PaperComponent: re,
    PopperComponent: je,
    popupIcon: ce = Ba || (Ba = /* @__PURE__ */ u.jsx(xm, {})),
    readOnly: Me = !1,
    renderGroup: ne,
    renderInput: Xe,
    renderOption: Ve,
    renderTags: oe,
    renderValue: he,
    selectOnFocus: de = !n.freeSolo,
    size: Oe = "medium",
    slots: Ke = {},
    slotProps: He = {},
    value: Re,
    ...mt
  } = n, {
    getRootProps: nn,
    getInputProps: ht,
    getInputLabelProps: Xn,
    getPopupIndicatorProps: Ct,
    getClearProps: gt,
    getItemProps: on,
    getListboxProps: Zn,
    getOptionProps: Pr,
    value: Nt,
    dirty: wt,
    expanded: Jt,
    id: Ot,
    popupOpen: Rt,
    focused: Mt,
    focusedItem: qn,
    anchorEl: Xt,
    setAnchorEl: an,
    inputValue: eo,
    groupedOptions: cr
  } = qd({
    ...n,
    componentName: "Autocomplete"
  }), ur = !T && !$ && wt && !Me, kr = (!_ || R === !0) && R !== !1, {
    onMouseDown: to
  } = ht(), {
    ref: ro,
    ...no
  } = Zn(), $r = W || ((be) => be.label ?? be), We = {
    ...n,
    disablePortal: C,
    expanded: Jt,
    focused: Mt,
    fullWidth: P,
    getOptionLabel: $r,
    hasClearIcon: ur,
    hasPopupIcon: kr,
    inputFocused: qn === -1,
    popupOpen: Rt,
    size: Oe
  }, Ge = Em(We), _t = {
    slots: {
      paper: re,
      popper: je,
      ...Ke
    },
    slotProps: {
      chip: d,
      listbox: z,
      ...p,
      ...He
    }
  }, [io, jr] = Wr("listbox", {
    elementType: jm,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ge.listbox,
    additionalProps: no,
    ref: ro
  }), [sn, U] = Wr("paper", {
    elementType: fi,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ge.paper
  }), [D, Z] = Wr("popper", {
    elementType: pi,
    externalForwardedProps: _t,
    ownerState: We,
    className: Ge.popper,
    additionalProps: {
      disablePortal: C,
      style: {
        width: Xt ? Xt.clientWidth : null
      },
      role: "presentation",
      anchorEl: Xt,
      open: Rt
    }
  });
  let ae;
  const le = (be) => ({
    className: Ge.tag,
    disabled: $,
    ...on(be)
  });
  if (H ? Nt.length > 0 && (oe ? ae = oe(Nt, le, We) : he ? ae = he(Nt, le, We) : ae = Nt.map((be, Lt) => {
    const {
      key: Dt,
      ...Ir
    } = le({
      index: Lt
    });
    return /* @__PURE__ */ u.jsx(Hs, {
      label: $r(be),
      size: Oe,
      ...Ir,
      ..._t.slotProps.chip
    }, Dt);
  })) : he && Nt != null && (ae = he(Nt, le, We)), L > -1 && Array.isArray(ae)) {
    const be = ae.length - L;
    !Mt && be > 0 && (ae = ae.splice(0, L), ae.push(/* @__PURE__ */ u.jsx("span", {
      className: Ge.tag,
      children: c(be)
    }, ae.length)));
  }
  const Be = ne || ((be) => /* @__PURE__ */ u.jsxs("li", {
    children: [/* @__PURE__ */ u.jsx(Im, {
      className: Ge.groupLabel,
      ownerState: We,
      component: "div",
      children: be.group
    }), /* @__PURE__ */ u.jsx(Am, {
      className: Ge.groupUl,
      ownerState: We,
      children: be.children
    })]
  }, be.key)), dr = Ve || ((be, Lt) => {
    const {
      key: Dt,
      ...Ir
    } = be;
    return /* @__PURE__ */ u.jsx("li", {
      ...Ir,
      children: $r(Lt)
    }, Dt);
  }), xi = (be, Lt) => {
    const Dt = Pr({
      option: be,
      index: Lt
    });
    return dr({
      ...Dt,
      className: Ge.option
    }, be, {
      selected: Dt["aria-selected"],
      index: Lt,
      inputValue: eo
    }, We);
  }, Si = _t.slotProps.clearIndicator, Ei = _t.slotProps.popupIndicator;
  return /* @__PURE__ */ u.jsxs(A.Fragment, {
    children: [/* @__PURE__ */ u.jsx(Tm, {
      ref: r,
      className: ke(Ge.root, f),
      ownerState: We,
      ...nn(mt),
      children: Xe({
        id: Ot,
        disabled: $,
        fullWidth: !0,
        size: Oe === "small" ? "small" : void 0,
        InputLabelProps: Xn(),
        InputProps: {
          ref: an,
          className: Ge.inputRoot,
          startAdornment: ae,
          onMouseDown: (be) => {
            be.target === be.currentTarget && to(be);
          },
          ...(ur || kr) && {
            endAdornment: /* @__PURE__ */ u.jsxs(Cm, {
              className: Ge.endAdornment,
              ownerState: We,
              children: [ur ? /* @__PURE__ */ u.jsx(wm, {
                ...gt(),
                "aria-label": v,
                title: v,
                ownerState: We,
                ...Si,
                className: ke(Ge.clearIndicator, Si?.className),
                children: m
              }) : null, kr ? /* @__PURE__ */ u.jsx(Om, {
                ...Ct(),
                disabled: $,
                "aria-label": Rt ? h : Se,
                title: Rt ? h : Se,
                ownerState: We,
                ...Ei,
                className: ke(Ge.popupIndicator, Ei?.className),
                children: ce
              }) : null]
            })
          }
        },
        inputProps: {
          className: Ge.input,
          disabled: $,
          readOnly: Me,
          ...ht()
        }
      })
    }), Xt ? /* @__PURE__ */ u.jsx(Rm, {
      as: D,
      ...Z,
      children: /* @__PURE__ */ u.jsxs(Pm, {
        as: sn,
        ...U,
        children: [K && cr.length === 0 ? /* @__PURE__ */ u.jsx(km, {
          className: Ge.loading,
          ownerState: We,
          children: B
        }) : null, cr.length === 0 && !_ && !K ? /* @__PURE__ */ u.jsx($m, {
          className: Ge.noOptions,
          ownerState: We,
          role: "presentation",
          onMouseDown: (be) => {
            be.preventDefault();
          },
          children: Q
        }) : null, cr.length > 0 ? /* @__PURE__ */ u.jsx(io, {
          as: I,
          ...jr,
          children: cr.map((be, Lt) => X ? Be({
            key: be.key,
            group: be.group,
            children: be.options.map((Dt, Ir) => xi(Dt, be.index + Ir))
          }) : xi(be, Lt))
        }) : null]
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Gs.propTypes = {
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
  limitTags: Rs,
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
const Nm = (e) => Array.isArray(e) ? e.map((t) => t && typeof t == "object" && "value" in t ? t.value : t).filter((t) => t != null) : e && typeof e == "object" && "value" in e ? e.value !== void 0 ? [e.value] : [] : e == null ? [] : [e], Mm = ({
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
    setTouched: d,
    touched: f,
    setError: m,
    ensureLookupDataset: g
  } = Et(), [b, v] = Ne([]), [h, p] = Ne(!1), [x, T] = Ne(null), [w, $] = Ne(() => {
    const y = e.sourceSelect;
    return !Array.isArray(y) || y.length === 0;
  }), E = (y, O) => {
    if (!(o || h)) {
      if (!O) {
        r(null);
        return;
      }
      r([
        {
          value: O.value,
          label: O.label,
          meta: {
            sourceId: O.sourceId,
            row: O.row
          }
        }
      ]);
    }
  }, S = () => {
    d(e.dataKey);
    const y = Rr(e, t, i, a, l, f);
    y.length > 0 ? m(e.dataKey, y[0]) : m(e.dataKey, null);
  }, C = (y) => {
    if (!y) return { mainLabel: "", helpText: "" };
    let O = y.replace(/<[^>]*>/g, "").trim(), L = "";
    const I = y.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return I && (L = I[1], O = y.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: O, helpText: L };
  }, N = Ye(() => e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((y) => ({
    value: y.value || y.id,
    text: y.text || y.title || y.label,
    description: y.description
  })) : [], [e.answers, e.options, e.categorical]), M = Ye(
    () => Array.isArray(e.sourceSelect) ? e.sourceSelect : [],
    [e.sourceSelect]
  ), R = M.length > 0, _ = Ye(
    () => R ? JSON.stringify(M) : "",
    [M, R]
  );
  Pe(() => {
    let y = !0;
    return !R || typeof g != "function" ? (v([]), p(!1), T(null), $(!0), () => {
      y = !1;
    }) : ($(!1), (async () => {
      p(!0), T(null);
      try {
        const L = await Promise.all(
          M.map((I) => g(I))
        );
        if (!y) return;
        v(L.map((I) => Array.isArray(I) ? I : [])), $(!0);
      } catch (L) {
        if (!y) return;
        const I = L && L.message ? L.message : "Failed to load lookup data";
        T(I), v([]), $(!0);
      } finally {
        y && p(!1);
      }
    })(), () => {
      y = !1;
    });
  }, [g, _, R, M]);
  const P = Ye(() => R ? M.flatMap((y, O) => {
    const L = b[O] || [], I = y.parentCondition || [], z = I.length === 0 ? L : L.filter((B) => I.every((H) => {
      const Q = B?.[H.key], Y = typeof H.value == "string" ? en(H.value, i, a) : H.value, J = Nm(Y);
      return J.length ? J.some((ge) => xo(Q, ge)) : !1;
    })), K = y.id || y.tableName || `lookup-${O}`;
    return z.map((B) => {
      const H = B?.[y.value], Q = B?.[y.desc] ?? B?.label ?? B?.text ?? B?.title ?? String(H ?? ""), Y = y.fullDesc ? B?.[y.fullDesc] : B?.description;
      return {
        optionKey: `${K}:${H ?? ""}`,
        value: H,
        label: Q,
        description: Y,
        sourceId: K,
        row: B
      };
    });
  }) : [], [M, b, i, a, R]), c = Ye(() => N.map((y) => {
    const O = y.value ?? y.id ?? y.code ?? y.text ?? "";
    return {
      optionKey: `static:${O ?? ""}`,
      value: O,
      label: y.text || y.label || y.title || String(O ?? ""),
      description: y.description
    };
  }), [N]), j = Ye(() => R ? P : c, [R, P, c]), k = Ye(() => {
    if (!j.length) return [];
    const y = [...j];
    return y.sort((O, L) => {
      const I = O?.value ?? "", z = L?.value ?? "";
      return String(I).localeCompare(String(z), void 0, {
        numeric: !0,
        sensitivity: "base"
      });
    }), y;
  }, [j]), W = Ye(() => {
    if (!Array.isArray(t) || t.length === 0)
      return null;
    const y = t[0], O = y && typeof y == "object" && y.value !== void 0 ? y.value : y;
    return k.find((L) => xo(L.value, O)) || null;
  }, [t, k]), F = Ye(() => Ps({
    stringify: (y) => `${y?.label ?? ""} ${y?.value ?? ""} ${y?.description ?? ""}`.trim()
  }), []);
  Pe(() => {
    R && w && (!Array.isArray(t) || t.length === 0 || (!k.length || !W) && r(null));
  }, [R, w, k, W, t, r]);
  const X = e.label || e.title || e.name || "", { mainLabel: ee, helpText: ie } = C(X);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ u.jsx(
      Gs,
      {
        fullWidth: !0,
        disableClearable: e.required,
        options: k,
        value: W,
        onChange: E,
        onBlur: S,
        disabled: o,
        loading: h,
        filterOptions: F,
        autoHighlight: !0,
        includeInputInList: !0,
        selectOnFocus: !0,
        clearOnEscape: !0,
        handleHomeEndKeys: !0,
        getOptionLabel: (y) => y?.label ?? "",
        isOptionEqualToValue: (y, O) => xo(y.value, O?.value ?? O),
        ListboxProps: {
          style: { maxHeight: 300 }
        },
        noOptionsText: h ? "Loading options..." : x ? "Failed to load options" : "No options available",
        loadingText: "Loading options...",
        renderOption: (y, O) => /* @__PURE__ */ el("li", { ...y, key: O.optionKey }, /* @__PURE__ */ u.jsxs(te, { children: [
          /* @__PURE__ */ u.jsx(q, { variant: "body1", children: O.label }),
          O.description && /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: O.description })
        ] })),
        renderInput: (y) => /* @__PURE__ */ u.jsx(
          ut,
          {
            ...y,
            label: ee || e.title,
            required: e.required,
            error: !!n,
            placeholder: e.required ? void 0 : "Select an option...",
            InputProps: {
              ...y.InputProps,
              endAdornment: /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                h ? /* @__PURE__ */ u.jsx(Sn, { color: "inherit", size: 20 }) : null,
                y.InputProps.endAdornment
              ] })
            }
          }
        )
      }
    ),
    ie && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: { color: "#007bff", fontStyle: "italic", display: "block", mt: 1 },
        children: ie
      }
    ),
    x && /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "error", sx: { display: "block", mt: 1 }, children: x }),
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: Array.isArray(t) && t.length > 0,
        isTouched: f[e.dataKey]
      }
    )
  ] });
}, _m = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: d, touched: f, setError: m } = Et(), g = (T) => {
    if (o)
      return;
    const w = T.target.value, $ = w === "" ? "" : Number(w);
    r($);
  }, b = () => {
    d(e.dataKey);
    const T = Rr(e, t, i, a, l, f);
    T.length > 0 ? m(e.dataKey, T[0]) : m(e.dataKey, null);
  }, v = (T) => {
    if (!T) return { mainLabel: "", helpText: "" };
    let w = T.replace(/<[^>]*>/g, "").trim(), $ = "";
    const E = T.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return E && ($ = E[1], w = T.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: w, helpText: $ };
  }, h = e.label || e.title || e.name || "", { mainLabel: p, helpText: x } = v(h);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
      ut,
      {
        fullWidth: !0,
        label: p || e.title,
        value: t,
        onChange: g,
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
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!t,
        isTouched: f[e.dataKey]
      }
    ),
    x && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: x
      }
    ),
    e.instructions && !n && !x && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Fa = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (v) => (h) => {
    if (o)
      return;
    const p = h.target.checked, x = d.find((w) => w.value == v);
    let T = Array.isArray(t) ? [...t] : [];
    p ? x && !T.find((w) => w.value == v) && T.push({
      value: x.value,
      label: x.text || x.label
    }) : T = T.filter((w) => w.value != v), r(T);
  }, a = (v) => {
    if (!v) return { mainLabel: "", helpText: "" };
    let h = v.replace(/<[^>]*>/g, "").trim(), p = "";
    const x = v.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return x && (p = x[1], h = v.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: h, helpText: p };
  }, d = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((v) => ({
    value: v.value || v.id,
    text: v.text || v.title || v.label
  })) : [], f = Array.isArray(t) ? t : [], m = e.label || e.title || e.name || "", { mainLabel: g, helpText: b } = a(m);
  return /* @__PURE__ */ u.jsx(te, { sx: { width: "100%" }, children: /* @__PURE__ */ u.jsxs(Nn, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ u.jsxs(Wa, { component: "legend", sx: { mb: 2, color: "text.primary" }, children: [
      g || e.title,
      e.required && /* @__PURE__ */ u.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    b && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: b
      }
    ),
    e.instructions && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ u.jsx(
      il,
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
        children: d.map((v) => /* @__PURE__ */ u.jsx(
          Ka,
          {
            control: /* @__PURE__ */ u.jsx(
              al,
              {
                checked: f.some((h) => h.value == v.value),
                onChange: i(v.value),
                size: "medium",
                disabled: o
              }
            ),
            label: /* @__PURE__ */ u.jsxs(te, { children: [
              /* @__PURE__ */ u.jsx(q, { variant: "body1", children: v.text || v.label }),
              v.description && /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", children: v.description })
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
    n && /* @__PURE__ */ u.jsx(Kr, { children: n }),
    e.maxSelections && /* @__PURE__ */ u.jsxs(q, { variant: "caption", color: "text.secondary", sx: { mt: 1 }, children: [
      "Maximum ",
      e.maxSelections,
      " selections allowed"
    ] })
  ] }) });
}, Lm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (m) => {
    if (o)
      return;
    const g = m.target.value;
    r(g);
  }, a = (m) => {
    if (!m) return { mainLabel: "", helpText: "" };
    let g = m.replace(/<[^>]*>/g, "").trim(), b = "";
    const v = m.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return v && (b = v[1], g = m.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: g, helpText: b };
  }, l = e.label || e.title || e.name || "", { mainLabel: d, helpText: f } = a(l);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
      ut,
      {
        fullWidth: !0,
        multiline: !0,
        rows: e.rows || 4,
        label: d || e.title,
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
    f && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: f
      }
    ),
    e.instructions && !n && !f && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Dm = ({
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
    let v = b.replace(/<[^>]*>/g, "").trim(), h = "";
    const p = b.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return p && (h = p[1], v = b.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: v, helpText: h };
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
  const d = () => {
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
  }, f = e.label || e.title || e.name || "", { mainLabel: m, helpText: g } = l(f);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
      ut,
      {
        fullWidth: !0,
        label: m || e.title,
        value: t,
        onChange: a,
        error: !!n,
        helperText: g ? void 0 : e.instructions,
        disabled: o,
        required: e.required,
        type: d(),
        variant: "outlined",
        InputLabelProps: {
          shrink: !0
        }
      }
    ),
    g && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: g
      }
    ),
    e.instructions && !n && !g && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    ),
    i && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "info.main",
        sx: { mt: 0.5, display: "block" },
        children: "Automatically set to current date/time"
      }
    )
  ] });
}, Vm = ({
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
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
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
    e.instructions && !n && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Bm = ({ question: e }) => /* @__PURE__ */ u.jsx(te, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ u.jsxs(Er, { severity: "info", children: [
  /* @__PURE__ */ u.jsxs(q, { children: [
    "Toggle: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ u.jsx(q, { variant: "body2", children: "Toggle component coming soon" })
] }) }), Fm = ({ question: e }) => /* @__PURE__ */ u.jsx(te, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ u.jsxs(Er, { severity: "info", children: [
  /* @__PURE__ */ u.jsxs(q, { children: [
    "Range Slider: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ u.jsx(q, { variant: "body2", children: "Range slider component coming soon" })
] }) }), Um = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (p) => {
    if (o)
      return;
    const T = p.target.value.map((w) => {
      const $ = d.find((E) => E.value == w);
      return $ ? {
        value: $.value,
        label: $.text || $.label
      } : { value: w, label: w };
    });
    r(T);
  }, a = (p) => {
    if (!p) return { mainLabel: "", helpText: "" };
    let x = p.replace(/<[^>]*>/g, "").trim(), T = "";
    const w = p.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return w && (T = w[1], x = p.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: x, helpText: T };
  }, d = e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((p) => ({
    value: p.value || p.id,
    text: p.text || p.title || p.label
  })) : [], f = Array.isArray(t) ? t : [], m = f.map((p) => p.value), g = `multiple-select-${e.variable}-label`, b = e.label || e.title || e.name || "", { mainLabel: v, helpText: h } = a(b);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    e.instructions && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ u.jsxs(Nn, { fullWidth: !0, error: !!n, disabled: o, children: [
      /* @__PURE__ */ u.jsx(sl, { id: g, required: e.required, children: v || e.title }),
      /* @__PURE__ */ u.jsx(
        ll,
        {
          labelId: g,
          multiple: !0,
          value: m,
          onChange: i,
          disabled: o,
          input: /* @__PURE__ */ u.jsx(ul, { label: v || e.title }),
          renderValue: (p) => /* @__PURE__ */ u.jsx(te, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: p.map((x) => {
            const T = f.find((w) => w.value == x);
            return /* @__PURE__ */ u.jsx(
              Mn,
              {
                label: T?.label || x,
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
          children: d.map((p) => /* @__PURE__ */ u.jsx(cl, { value: p.value, children: /* @__PURE__ */ u.jsxs(te, { children: [
            /* @__PURE__ */ u.jsx(q, { variant: "body1", children: p.text || p.label }),
            p.description && /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: p.description })
          ] }) }, p.value))
        }
      ),
      h && /* @__PURE__ */ u.jsx(Kr, { sx: { color: "#007bff", fontStyle: "italic" }, children: h }),
      n && /* @__PURE__ */ u.jsx(Kr, { error: !0, children: n })
    ] })
  ] });
}, zm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = (d) => {
    if (o)
      return;
    const f = d.target.value;
    r(f);
  }, l = n || (t && !((d) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d))(t) ? "Please enter a valid email address" : "");
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
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
    e.instructions && !l && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Wm = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: d, touched: f, setError: m } = Et(), [g, b] = Ne(""), [v, h] = Ne(""), p = ye((N) => {
    if (!N || N === "")
      return "";
    const M = String(N).replace(/[^\d.]/g, ""), R = parseFloat(M) || 0;
    return new Intl.NumberFormat(e.separatorFormat, {
      style: "currency",
      currency: e.currency || "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(R);
  }, [e.separatorFormat, e.currency]), x = (N) => {
    if (!N || N === "")
      return "";
    const M = N.replace(/[^\d]/g, "");
    return M === "" ? "" : parseInt(M, 10);
  };
  Pe(() => {
    if (t !== g) {
      b(t);
      const N = p(t);
      h(N);
    }
  }, [t, g, p]);
  const T = (N) => {
    if (o)
      return;
    const M = N.target.value;
    if (M === "") {
      h(""), b(""), r("");
      return;
    }
    const R = M.replace(/[^\d.]/g, ""), _ = x(R);
    b(_);
    const P = p(_);
    h(P), r(_);
  }, w = () => {
    d(e.dataKey);
    const N = Rr(e, g, i, a, l, f);
    N.length > 0 ? m(e.dataKey, N[0]) : m(e.dataKey, null);
  }, $ = (N) => {
    if (!N) return { mainLabel: "", helpText: "" };
    let M = N.replace(/<[^>]*>/g, "").trim(), R = "";
    const _ = N.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return _ && (R = _[1], M = N.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: M, helpText: R };
  }, E = e.label || e.title || e.name || "", { mainLabel: S, helpText: C } = $(E);
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ u.jsx(
      ut,
      {
        fullWidth: !0,
        label: S || e.title,
        value: v,
        onChange: T,
        onBlur: w,
        error: !!n,
        helperText: C ? void 0 : e.instructions,
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
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!g && g !== "",
        isTouched: f[e.dataKey]
      }
    ),
    C && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: { mt: 0.5, display: "block", color: "#007bff", fontStyle: "italic" },
        children: C
      }
    ),
    e.instructions && !n && !C && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        color: "text.secondary",
        sx: { mt: 0.5, display: "block" },
        children: e.instructions
      }
    )
  ] });
}, Ua = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1,
  selectMode: i = !1
}) => {
  const [a, l] = Ne(""), d = () => {
    if (!o && a.trim()) {
      const x = Array.isArray(t) ? t : [], w = {
        value: x.length > 0 ? Math.max(...x.map(($) => $.value)) + 1 : 1,
        label: a.trim()
      };
      r([...x, w]), l("");
    }
  }, f = (x) => {
    if (o)
      return;
    const w = (Array.isArray(t) ? t : []).filter(($) => $.value !== x);
    r(w);
  }, m = (x) => {
    o || x.key === "Enter" && d();
  }, g = (x) => {
    if (!x) return { mainLabel: "", helpText: "" };
    let T = x.replace(/<[^>]*>/g, "").trim(), w = "";
    const $ = x.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return $ && (w = $[1], T = x.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: T, helpText: w };
  }, b = Array.isArray(t) ? t : [], v = e.label || e.title || e.name || "", { mainLabel: h, helpText: p } = g(v);
  return /* @__PURE__ */ u.jsx(te, { sx: { width: "100%" }, children: /* @__PURE__ */ u.jsxs(Nn, { fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ u.jsxs(q, { variant: "subtitle1", sx: { mb: 1, fontWeight: "medium" }, children: [
      h || e.title,
      e.required && /* @__PURE__ */ u.jsx(q, { component: "span", color: "error", sx: { ml: 0.5 }, children: "*" })
    ] }),
    p && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        sx: { mb: 2, color: "#007bff", fontStyle: "italic" },
        children: p
      }
    ),
    e.instructions && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "body2",
        color: "text.secondary",
        sx: { mb: 2 },
        children: e.instructions
      }
    ),
    /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", gap: 1, mb: 2 }, children: [
      /* @__PURE__ */ u.jsx(
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
      /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "contained",
          onClick: d,
          disabled: !a.trim() || o,
          startIcon: /* @__PURE__ */ u.jsx(Ol, {}),
          children: "Add"
        }
      )
    ] }),
    b.length > 0 && /* @__PURE__ */ u.jsx(Fo, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: b.map((x) => /* @__PURE__ */ u.jsxs(Uo, { divider: !0, children: [
      /* @__PURE__ */ u.jsx(
        zo,
        {
          primary: x.label,
          secondary: `Value: ${x.value}`
        }
      ),
      /* @__PURE__ */ u.jsx(dl, { children: /* @__PURE__ */ u.jsx(
        xr,
        {
          edge: "end",
          onClick: () => f(x.value),
          disabled: o,
          color: "error",
          size: "small",
          children: /* @__PURE__ */ u.jsx(Ha, {})
        }
      ) })
    ] }, x.value)) }),
    b.length === 0 && /* @__PURE__ */ u.jsxs(
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
    n && /* @__PURE__ */ u.jsx(Kr, { error: !0, children: n })
  ] }) });
}, Km = ({
  question: e,
  value: t,
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const i = Qe(null), a = Qe(r), l = Qe(null), d = Qe(null), f = Qe(null), [m, g] = Ne(!1), [b, v] = Ne(""), [h, p] = Ne(null), [x, T] = Ne(!1), [w, $] = Ne(""), E = Qe(o), S = Qe(null), C = Qe(50);
  Pe(() => {
    a.current = r;
  }, [r]), Pe(() => {
    E.current = o;
    const P = f.current;
    P && (o ? P.dragging?.disable() : P.dragging?.enable());
  }, [o]);
  const N = (P, c, j, k) => {
    const F = (j - P) * Math.PI / 180, X = (k - c) * Math.PI / 180, ee = Math.sin(F / 2) * Math.sin(F / 2) + Math.cos(P * Math.PI / 180) * Math.cos(j * Math.PI / 180) * Math.sin(X / 2) * Math.sin(X / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(ee), Math.sqrt(1 - ee)));
  };
  Pe(() => {
    if (t && typeof t == "string")
      try {
        const P = JSON.parse(t);
        P.latitude && P.longitude && (p(P), l.current || (l.current = P));
      } catch {
        const P = t.split(",");
        if (P.length === 2) {
          const c = parseFloat(P[0].trim()), j = parseFloat(P[1].trim());
          if (!isNaN(c) && !isNaN(j)) {
            const k = { latitude: c, longitude: j };
            p(k), l.current || (l.current = k);
          }
        }
      }
  }, [t]), Pe(() => {
    S.current = h;
  }, [h]), Pe(() => {
    (() => {
      if (!document.getElementById("leaflet-css")) {
        const c = document.createElement("link");
        c.id = "leaflet-css", c.rel = "stylesheet", c.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(c);
      }
      if (document.getElementById("leaflet-js"))
        window.L && T(!0);
      else {
        const c = document.createElement("script");
        c.id = "leaflet-js", c.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", c.onload = () => T(!0), document.head.appendChild(c);
      }
    })();
  }, []), Pe(() => {
    if (!x || !window.L || d.current || !i.current) return;
    const P = l.current || S.current || {
      latitude: -7.257419,
      longitude: 112.752088
    }, c = [P.latitude, P.longitude];
    l.current || (l.current = { ...P });
    const j = window.L.map(i.current).setView(c, 15);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(j);
    const k = window.L.divIcon({
      html: '<div style="background-color:#ff0000;width:20px;height:20px;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
      className: "leaflet-div-icon custom-marker"
    }), W = window.L.marker(c, {
      draggable: !E.current,
      icon: k
    }).addTo(j);
    return f.current = W, d.current = j, W.on("drag", (F) => {
      if (E.current) {
        F.target.setLatLng(l.current || F.target.getLatLng());
        return;
      }
      const X = F.target.getLatLng(), ee = l.current;
      if (ee) {
        const ie = N(
          ee.latitude,
          ee.longitude,
          X.lat,
          X.lng
        ), y = C.current || 50;
        if (ie > y) {
          const O = Math.atan2(
            X.lng - ee.longitude,
            X.lat - ee.latitude
          ), L = 6371e3, I = y, z = ee.latitude * Math.PI / 180, K = ee.longitude * Math.PI / 180, B = Math.asin(
            Math.sin(z) * Math.cos(I / L) + Math.cos(z) * Math.sin(I / L) * Math.cos(O)
          ), H = K + Math.atan2(
            Math.sin(O) * Math.sin(I / L) * Math.cos(z),
            Math.cos(I / L) - Math.sin(z) * Math.sin(B)
          ), Q = [B * 180 / Math.PI, H * 180 / Math.PI];
          F.target.setLatLng(Q), $(`Movement limited to ${Math.round(y)} meters from initial position (GPS accuracy)`), setTimeout(() => $(""), 3e3);
        } else
          $("");
      }
    }), W.on("dragend", (F) => {
      if (E.current) {
        F.target.setLatLng(l.current || F.target.getLatLng());
        return;
      }
      const X = F.target.getLatLng(), ee = { latitude: X.lat, longitude: X.lng };
      p(ee), a.current(JSON.stringify(ee));
    }), () => {
      f.current = null, d.current = null, j && (j.off(), j.remove());
    };
  }, [x]), Pe(() => {
    const P = f.current, c = d.current;
    !P || !h || !P._map || !P._icon || (P.setLatLng([h.latitude, h.longitude]), c && c.panTo([h.latitude, h.longitude]));
  }, [h]);
  const M = () => {
    if (!o) {
      if (!navigator.geolocation) {
        v("Geolocation is not supported by this browser");
        return;
      }
      g(!0), v(""), navigator.geolocation.getCurrentPosition(
        (P) => {
          const c = P.coords.latitude, j = P.coords.longitude, k = P.coords.accuracy || 50, W = { latitude: c, longitude: j };
          p(W), r(JSON.stringify(W)), l.current = W, C.current = k;
          const F = d.current, X = f.current;
          if (F && X && X._icon) {
            const ee = [c, j];
            F.setView(ee, 15), X.setLatLng(ee);
          }
          g(!1);
        },
        (P) => {
          let c = "Unable to get location";
          switch (P.code) {
            case P.PERMISSION_DENIED:
              c = "Location access denied by user";
              break;
            case P.POSITION_UNAVAILABLE:
              c = "Location information unavailable";
              break;
            case P.TIMEOUT:
              c = "Location request timed out";
              break;
            default:
              c = "An unknown error occurred";
          }
          v(c), g(!1);
        },
        {
          enableHighAccuracy: !0,
          timeout: 1e4,
          maximumAge: 0
        }
      );
    }
  }, R = (P, c) => {
    if (o)
      return;
    const j = parseFloat(c);
    if (isNaN(j)) return;
    const k = h ? { ...h } : { latitude: 0, longitude: 0 };
    k[P] = j, p(k), r(JSON.stringify(k)), l.current || (l.current = k);
    const W = d.current, F = f.current;
    if (W && F && F._icon) {
      const X = [k.latitude, k.longitude];
      W.setView(X, 15), F.setLatLng(X);
    }
  }, _ = e.required;
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ u.jsxs(q, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      _ && /* @__PURE__ */ u.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ u.jsx(rr, { elevation: 2, sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(
      te,
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
        children: !x && /* @__PURE__ */ u.jsxs(te, { sx: { textAlign: "center" }, children: [
          /* @__PURE__ */ u.jsx(Sn, { size: 40, sx: { mb: 2 } }),
          /* @__PURE__ */ u.jsx(q, { variant: "body2", color: "textSecondary", children: "Loading map..." })
        ] })
      }
    ) }),
    w && /* @__PURE__ */ u.jsx(Er, { severity: "warning", sx: { mb: 2 }, children: w }),
    /* @__PURE__ */ u.jsxs(te, { sx: { mb: 2 }, children: [
      /* @__PURE__ */ u.jsx(q, { variant: "body2", color: "textSecondary", gutterBottom: !0, children: "Manual coordinate input:" }),
      /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", gap: 2, mb: 2 }, children: [
        /* @__PURE__ */ u.jsx(
          ut,
          {
            label: "Latitude",
            type: "number",
            value: h?.latitude || "",
            onChange: (P) => R("latitude", P.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 },
            disabled: !0
          }
        ),
        /* @__PURE__ */ u.jsx(
          ut,
          {
            label: "Longitude",
            type: "number",
            value: h?.longitude || "",
            onChange: (P) => R("longitude", P.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 },
            disabled: !0
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(te, { sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(
      Je,
      {
        variant: "contained",
        startIcon: m ? /* @__PURE__ */ u.jsx(Sn, { size: 20, color: "inherit" }) : /* @__PURE__ */ u.jsx(Rl, {}),
        onClick: M,
        disabled: m || o,
        sx: {
          bgcolor: "#6b46c1",
          "&:hover": { bgcolor: "#553c9a" },
          textTransform: "none"
        },
        children: m ? "Getting Location..." : "Get Location"
      }
    ) }),
    b && /* @__PURE__ */ u.jsx(Er, { severity: "error", sx: { mb: 2 }, children: b }),
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: _,
        hasValue: !!h
      }
    )
  ] });
}, Hm = ["image/jpeg", "image/jpg", "image/png", "image/webp"], Gm = 10 * 1024 * 1024, Ym = ({
  question: e,
  value: t = null,
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: i = {},
  variables: a = {},
  validation: l = []
}) => {
  const { setTouched: d, touched: f, setError: m } = Et(), [g, b] = Ne(!1), [v, h] = Ne(null), [p, x] = Ne(""), [T, w] = Ne(0), [$, E] = Ne(!1), [S, C] = Ne(!1), N = Qe(null), M = Qe(null);
  Pe(() => {
    (() => {
      const z = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      C(z && "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices);
    })();
  }, []), Pe(() => {
    t && typeof t == "object" && t.dataUrl ? (h(t.dataUrl), x(t.name || "Captured Image"), w(t.size || 0)) : t && typeof t == "string" ? (h(t), x("Uploaded Image")) : (h(null), x(""), w(0));
  }, [t]);
  const R = (I) => {
    if (!I) return { mainLabel: "", helpText: "" };
    let z = I.replace(/<[^>]*>/g, "").trim(), K = "";
    const B = I.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return B && (K = B[1], z = I.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: z, helpText: K };
  }, _ = e.label || e.title || e.name || "", { mainLabel: P, helpText: c } = R(_), j = ye((I) => Hm.includes(I.type) ? I.size > Gm ? "Ukuran file terlalu besar. Maksimal 10MB." : null : "Format file tidak didukung. Gunakan JPG, PNG, atau WebP.", []), k = ye(async (I) => {
    if (o)
      return;
    const z = j(I);
    if (z) {
      m(e.dataKey, z);
      return;
    }
    E(!0);
    try {
      const K = new FileReader();
      K.onload = (B) => {
        const H = {
          dataUrl: B.target.result,
          name: I.name,
          size: I.size,
          type: I.type,
          lastModified: I.lastModified
        };
        r(H), h(B.target.result), x(I.name), w(I.size), m(e.dataKey, null), E(!1);
      }, K.onerror = (B) => {
        console.error("FileReader error:", B), m(e.dataKey, "Error membaca file."), E(!1);
      }, K.readAsDataURL(I);
    } catch (K) {
      console.error("Error processing file:", K), m(e.dataKey, "Error memproses file."), E(!1);
    }
  }, [o, r, e.dataKey, m, j]), W = ye(async () => {
    if (!o && S)
      try {
        const I = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        M.current?.click();
      } catch (I) {
        console.error("Error accessing camera:", I), N.current?.click();
      }
  }, [S, o]), F = ye((I) => {
    I.preventDefault(), I.stopPropagation(), I.type === "dragenter" || I.type === "dragover" ? b(!0) : I.type === "dragleave" && b(!1);
  }, []), X = ye((I) => {
    if (I.preventDefault(), I.stopPropagation(), b(!1), o) return;
    const z = [...I.dataTransfer.files];
    z && z[0] && k(z[0]);
  }, [o, k]), ee = ye((I) => {
    if (o)
      return;
    const z = I.target.files[0];
    z && k(z);
  }, [o, k]), ie = ye((I) => {
    if (o)
      return;
    const z = I.target.files[0];
    z && k(z);
  }, [o, k]), y = ye(() => {
    o || (r(null), h(null), x(""), w(0), m(e.dataKey, null), N.current && (N.current.value = ""), M.current && (M.current.value = ""));
  }, [o, r, e.dataKey, m]), O = () => {
    d(e.dataKey);
    const I = !!(t && (t.dataUrl || t)), z = Rr(e, I ? "has_value" : "", i, a, l, f);
    z.length > 0 ? m(e.dataKey, z[0]) : m(e.dataKey, null);
  }, L = (I) => {
    if (I === 0) return "0 Bytes";
    const z = 1024, K = ["Bytes", "KB", "MB", "GB"], B = Math.floor(Math.log(I) / Math.log(z));
    return parseFloat((I / Math.pow(z, B)).toFixed(2)) + " " + K[B];
  };
  return /* @__PURE__ */ u.jsxs(te, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ u.jsxs(
      te,
      {
        sx: {
          border: "2px dashed",
          borderColor: g ? "primary.main" : n ? "error.main" : "grey.300",
          borderRadius: 2,
          p: 3,
          textAlign: "center",
          backgroundColor: g ? "action.hover" : "background.paper",
          transition: "all 0.2s ease-in-out",
          cursor: o ? "not-allowed" : "pointer",
          opacity: o ? 0.6 : 1,
          position: "relative"
        },
        onDragEnter: F,
        onDragLeave: F,
        onDragOver: F,
        onDrop: X,
        onClick: () => !o && N.current?.click(),
        onBlur: O,
        children: [
          $ && /* @__PURE__ */ u.jsx(
            te,
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
              children: /* @__PURE__ */ u.jsx(Sn, {})
            }
          ),
          v ? /* @__PURE__ */ u.jsxs(pl, { sx: { maxWidth: 400, mx: "auto" }, children: [
            /* @__PURE__ */ u.jsx(
              fl,
              {
                component: "img",
                height: "200",
                image: v,
                alt: p,
                sx: { objectFit: "contain" }
              }
            ),
            /* @__PURE__ */ u.jsxs(ml, { children: [
              /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
                /* @__PURE__ */ u.jsx(q, { variant: "body2", color: "text.secondary", children: p }),
                /* @__PURE__ */ u.jsx(
                  Mn,
                  {
                    label: L(T),
                    size: "small",
                    variant: "outlined"
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", gap: 1, justifyContent: "center" }, children: [
                /* @__PURE__ */ u.jsx(
                  xr,
                  {
                    color: "primary",
                    onClick: (I) => {
                      I.stopPropagation(), N.current?.click();
                    },
                    size: "small",
                    children: /* @__PURE__ */ u.jsx(wi, {})
                  }
                ),
                S && /* @__PURE__ */ u.jsx(
                  xr,
                  {
                    color: "secondary",
                    onClick: (I) => {
                      I.stopPropagation(), W();
                    },
                    size: "small",
                    children: /* @__PURE__ */ u.jsx(Oi, {})
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  xr,
                  {
                    color: "error",
                    onClick: (I) => {
                      I.stopPropagation(), y();
                    },
                    size: "small",
                    children: /* @__PURE__ */ u.jsx(Ha, {})
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ u.jsxs(te, { children: [
            /* @__PURE__ */ u.jsx(Pl, { sx: { fontSize: 48, color: "text.secondary", mb: 2 } }),
            /* @__PURE__ */ u.jsx(q, { variant: "h6", gutterBottom: !0, children: P }),
            /* @__PURE__ */ u.jsx(q, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Seret dan jatuhkan foto di sini, atau klik untuk memilih file" }),
            /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", display: "block", children: "Format yang didukung: JPG, PNG, WebP (maksimal 10MB)" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", gap: 1, mt: 2, justifyContent: "center" }, children: [
      /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ u.jsx(wi, {}),
          onClick: () => N.current?.click(),
          disabled: o,
          size: "small",
          children: "Pilih File"
        }
      ),
      S && /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ u.jsx(Oi, {}),
          onClick: W,
          disabled: o,
          size: "small",
          children: "Kamera"
        }
      )
    ] }),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: N,
        type: "file",
        accept: "image/*",
        onChange: ee,
        style: { display: "none" },
        disabled: o
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: M,
        type: "file",
        accept: "image/*",
        capture: "environment",
        onChange: ie,
        style: { display: "none" },
        disabled: o
      }
    ),
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: e.required,
        hasValue: !!(t && (t.dataUrl || t)),
        isTouched: f[e.dataKey]
      }
    ),
    c && /* @__PURE__ */ u.jsx(
      q,
      {
        variant: "caption",
        sx: {
          mt: 0.5,
          display: "block",
          color: "#007bff",
          fontStyle: "italic"
        },
        children: c
      }
    ),
    e.instructions && !n && !c && /* @__PURE__ */ u.jsx(
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
  disabled: o = !1
}) => {
  const i = t && typeof t == "object" && t.completionTime || "", [a, l] = Ne(i), d = () => {
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
  return /* @__PURE__ */ u.jsxs(te, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ u.jsxs(q, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      f && /* @__PURE__ */ u.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", gap: 2, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ u.jsx(
        ut,
        {
          fullWidth: !0,
          value: a,
          disabled: !0,
          variant: "outlined",
          sx: { flex: 1 }
        }
      ),
      /* @__PURE__ */ u.jsx(
        Je,
        {
          variant: "contained",
          onClick: d,
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
    /* @__PURE__ */ u.jsx(
      lr,
      {
        error: n,
        isRequired: f,
        hasValue: !!a
      }
    )
  ] });
}, wo = {
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
function vi({
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
    clearError: d,
    config: f
  } = Et(), m = !!f?.readOnly, g = !!f?.disabled, b = e?.disableInput, v = (() => {
    if (typeof b == "boolean")
      return b;
    if (typeof b == "number")
      return b !== 0;
    if (typeof b == "string") {
      const c = b.trim().toLowerCase();
      if (c === "true") return !0;
      if (c === "false") return !1;
      try {
        return !!Ft(b, t, r, i);
      } catch {
        return !1;
      }
    }
    return !1;
  })(), h = m || g || v, p = f?.locale ?? "en", x = f?.translations ?? {}, T = f?.fetchMedia, w = f?.componentsMap || {};
  if (Pe(() => {
    if (e.type === 4 && e.expression) {
      let c;
      try {
        c = Ft(e.expression, t, r, i);
      } catch {
        c = void 0;
      }
      const j = i !== null ? `${e.dataKey}#${i}` : e.dataKey, k = t[j] || r[j];
      k === c || JSON.stringify(k) === JSON.stringify(c) || (console.log(`Computed variable ${j} =`, c), l(e.dataKey, c, i));
    }
  }, [e.type, e.expression, JSON.stringify(t), JSON.stringify(r), i]), !Fd(e, t, r, i))
    return null;
  const E = i !== null ? `${e.dataKey}#${i}` : e.dataKey, S = t[E] || r[E], C = n[E], N = (c) => {
    h || (C && d(E), e.type === 4 ? l(e.dataKey, c, i) : a(e.dataKey, c, i));
  }, M = Ud(e.label, t, r, i), R = {
    question: {
      ...e,
      label: M
    },
    value: S,
    onChange: N,
    error: C,
    responses: t,
    variables: r,
    rowIndex: i,
    validation: o,
    readOnly: m,
    disabled: h,
    locale: p,
    translations: x,
    fetchMedia: T
  }, _ = w[e.dataKey] || w[e.type] || w[String(e.type)] || (e.questionType ? w[e.questionType] : void 0) || (wo[e.type] ? w[wo[e.type]] : void 0);
  if (_) {
    if (ot.isValidElement(_))
      return ot.cloneElement(_, R);
    if (typeof _ == "function") {
      const c = _;
      return /* @__PURE__ */ u.jsx(c, { ...R });
    }
  }
  const P = () => {
    switch (e.type) {
      case 1:
        return /* @__PURE__ */ u.jsx(zd, { ...R });
      case 2:
        return /* @__PURE__ */ u.jsx(Wd, { ...R });
      case 3:
        return /* @__PURE__ */ u.jsx(Kd, { ...R });
      case 4:
        return /* @__PURE__ */ u.jsx(Hd, { ...R });
      case 11:
      // Date
      case 12:
      // Date Time Local
      case 14:
      // Month
      case 15:
        return /* @__PURE__ */ u.jsx(Dm, { ...R });
      case 13:
        return /* @__PURE__ */ u.jsx(Vm, { ...R });
      case 16:
        return /* @__PURE__ */ u.jsx(Fa, { ...R, single: !0 });
      case 17:
        return /* @__PURE__ */ u.jsx(Bm, { ...R });
      case 18:
        return /* @__PURE__ */ u.jsx(Fm, { ...R });
      case 19:
        return /* @__PURE__ */ u.jsx(Eo, { ...R, inputType: "url" });
      case 20:
        return /* @__PURE__ */ u.jsx(Wm, { ...R });
      case 21:
        return /* @__PURE__ */ u.jsx(Ua, { ...R });
      case 22:
        return /* @__PURE__ */ u.jsx(Ua, { ...R, selectMode: !0 });
      case 23:
        return /* @__PURE__ */ u.jsx(Um, { ...R });
      case 24:
        return /* @__PURE__ */ u.jsx(Eo, { ...R, masked: !0 });
      case 25:
        return /* @__PURE__ */ u.jsx(Eo, { ...R });
      case 26:
        return /* @__PURE__ */ u.jsx(Gd, { ...R });
      case 27:
        return /* @__PURE__ */ u.jsx(Mm, { ...R });
      case 28:
        return /* @__PURE__ */ u.jsx(_m, { ...R });
      case 29:
        return /* @__PURE__ */ u.jsx(Fa, { ...R });
      case 30:
        return /* @__PURE__ */ u.jsx(Lm, { ...R });
      case 31:
        return /* @__PURE__ */ u.jsx(zm, { ...R });
      case 32:
        return /* @__PURE__ */ u.jsx(Ym, { ...R });
      case 33:
        return /* @__PURE__ */ u.jsx(Km, { ...R });
      case 35:
        return /* @__PURE__ */ u.jsx(Qm, { ...R });
      default:
        return /* @__PURE__ */ u.jsxs(te, { sx: { p: 2, bgcolor: "warning.light", borderRadius: 1 }, children: [
          /* @__PURE__ */ u.jsxs("strong", { children: [
            "Unsupported Question Type: ",
            e.type
          ] }),
          /* @__PURE__ */ u.jsx("br", {}),
          wo[e.type] || "Unknown",
          /* @__PURE__ */ u.jsx("br", {}),
          /* @__PURE__ */ u.jsx("em", { children: M })
        ] });
    }
  };
  return /* @__PURE__ */ u.jsx(te, { sx: { width: "100%" }, children: P() });
}
const br = 280, Jm = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function Ys({
  template: e,
  className: t,
  style: r,
  header: n,
  footer: o
}) {
  const i = hl(), a = gl(i.breakpoints.down("md")), {
    currentPage: l,
    responses: d,
    variables: f,
    errors: m,
    validation: g,
    setCurrentPage: b,
    template: v,
    submit: h
  } = Et(), [p, x] = Ne(!1), T = e || v, w = Ye(() => Jm(T), [T]), $ = !!h, E = ye(async () => {
    if (!h) {
      console.warn("Submit handler is not available yet.");
      return;
    }
    try {
      await h();
    } catch (P) {
      console.error("Failed to submit questionnaire:", P);
    }
  }, [h]), S = () => {
    x(!p);
  }, C = (P) => {
    b(P), a && x(!1);
  }, N = w[l], M = (P) => {
    if (!P?.components)
      return /* @__PURE__ */ u.jsx(q, { color: "text.secondary", children: "No questions in this section" });
    const c = P.components[0] || [];
    return c.length === 0 ? /* @__PURE__ */ u.jsx(q, { color: "text.secondary", children: "No questions available" }) : c.map((j, k) => /* @__PURE__ */ u.jsx(te, { sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(
      vi,
      {
        question: j,
        responses: d,
        variables: f,
        errors: m,
        validation: g
      }
    ) }, j.dataKey || k));
  }, R = (P) => {
    const c = w[P];
    if (!c?.components?.[0]) return "incomplete";
    const k = c.components[0].filter((F) => F.required);
    return k.length === 0 || k.filter(
      (F) => d[F.dataKey] !== void 0 && d[F.dataKey] !== ""
    ).length === k.length ? "complete" : "incomplete";
  }, _ = /* @__PURE__ */ u.jsxs(te, { sx: { height: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ u.jsxs(ao, { sx: { minHeight: { xs: 56, sm: 64 }, borderBottom: 1, borderColor: "divider", bgcolor: "primary.main" }, children: [
      /* @__PURE__ */ u.jsx(q, { variant: "subtitle1", component: "div", sx: { flexGrow: 1, fontSize: "13px", fontWeight: 600, color: "white", lineHeight: 1.3 }, children: T?.title || "Survey Sections" }),
      a && /* @__PURE__ */ u.jsx(xr, { onClick: S, sx: { color: "white" }, children: /* @__PURE__ */ u.jsx(kl, {}) })
    ] }),
    /* @__PURE__ */ u.jsx(Fo, { sx: { px: 2, py: 2, flex: 1, overflow: "auto" }, children: w.map((P, c) => {
      const j = l === c, k = R(c);
      return /* @__PURE__ */ u.jsx(Uo, { disablePadding: !0, sx: { mb: 1 }, children: /* @__PURE__ */ u.jsx(
        yl,
        {
          selected: j,
          onClick: () => C(c),
          sx: {
            borderRadius: 2,
            bgcolor: j ? "primary.main" : "transparent",
            color: j ? "white" : "text.primary",
            py: 1.5,
            px: 2,
            transition: "all 0.2s ease",
            border: 1,
            borderColor: j ? "primary.main" : "transparent",
            "&:hover": {
              bgcolor: j ? "primary.dark" : "action.hover",
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
          children: /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", alignItems: "center", width: "100%", gap: 1.5 }, children: [
            k === "complete" ? /* @__PURE__ */ u.jsx($l, { sx: { fontSize: 20, color: j ? "white" : "success.main", flexShrink: 0 } }) : /* @__PURE__ */ u.jsx(jl, { sx: { fontSize: 20, opacity: 0.6, flexShrink: 0 } }),
            /* @__PURE__ */ u.jsx(
              zo,
              {
                primary: P.label || `Section ${c + 1}`,
                primaryTypographyProps: {
                  fontSize: "14px",
                  fontWeight: j ? 600 : 500,
                  lineHeight: 1.4
                }
              }
            )
          ] })
        }
      ) }, P.dataKey || c);
    }) })
  ] });
  return /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", minHeight: "100vh" }, className: t, style: r, children: [
    /* @__PURE__ */ u.jsx(
      bl,
      {
        position: "fixed",
        elevation: 1,
        sx: {
          width: { xs: "100%", md: `calc(100% - ${br}px)` },
          ml: { md: `${br}px` },
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: 1,
          borderColor: "divider"
        },
        children: /* @__PURE__ */ u.jsxs(ao, { sx: { minHeight: { xs: 56, sm: 64 } }, children: [
          /* @__PURE__ */ u.jsx(
            xr,
            {
              color: "inherit",
              edge: "start",
              onClick: S,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ u.jsx(Il, {})
            }
          ),
          /* @__PURE__ */ u.jsx(q, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, fontWeight: 600 }, children: T?.title || "Questionnaire" }),
          /* @__PURE__ */ u.jsx(
            Mn,
            {
              icon: /* @__PURE__ */ u.jsx(Ri, {}),
              label: "Submit",
              color: "success",
              clickable: !0,
              onClick: E,
              disabled: !$,
              sx: { fontWeight: 600, display: { xs: "none", sm: "flex" } }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ u.jsx(
      te,
      {
        component: "nav",
        sx: { width: { md: br }, flexShrink: { md: 0 } },
        children: /* @__PURE__ */ u.jsx(
          vl,
          {
            variant: a ? "temporary" : "permanent",
            open: a ? p : !0,
            onClose: S,
            ModalProps: {
              keepMounted: !0
              // Better open performance on mobile.
            },
            sx: {
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: br,
                borderRight: 1,
                borderColor: "divider",
                bgcolor: "background.default"
              }
            },
            children: _
          }
        )
      }
    ),
    /* @__PURE__ */ u.jsxs(
      te,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          width: { xs: "100%", md: `calc(100% - ${br}px)` },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ u.jsx(ao, { sx: { minHeight: { xs: 56, sm: 64 } } }),
          /* @__PURE__ */ u.jsxs(
            yn,
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
                n && /* @__PURE__ */ u.jsx(te, { sx: { mb: 2 }, children: n }),
                N ? /* @__PURE__ */ u.jsxs(
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
                      /* @__PURE__ */ u.jsx(
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
                          children: N.label || `Section ${l + 1}`
                        }
                      ),
                      M(N)
                    ]
                  }
                ) : /* @__PURE__ */ u.jsx(
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
                    children: /* @__PURE__ */ u.jsx(q, { variant: "h6", color: "text.secondary", children: "Select a section from the sidebar to begin" })
                  }
                ),
                o && /* @__PURE__ */ u.jsx(te, { sx: { mt: 2 }, children: o }),
                /* @__PURE__ */ u.jsx(
                  rr,
                  {
                    elevation: 8,
                    sx: {
                      position: "fixed",
                      bottom: 0,
                      left: { xs: 0, md: `${br}px` },
                      right: 0,
                      py: { xs: 1.5, sm: 2 },
                      px: { xs: 2, sm: 3 },
                      zIndex: 1100,
                      borderRadius: 0,
                      borderTop: 2,
                      borderColor: "divider",
                      bgcolor: "background.paper"
                    },
                    children: /* @__PURE__ */ u.jsxs(
                      te,
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
                          /* @__PURE__ */ u.jsx(
                            Je,
                            {
                              variant: "outlined",
                              onClick: () => C(Math.max(0, l - 1)),
                              disabled: l === 0,
                              sx: {
                                minWidth: { xs: 80, sm: 100 },
                                fontWeight: 600
                              },
                              children: "Previous"
                            }
                          ),
                          /* @__PURE__ */ u.jsxs(te, { sx: { flex: 1, textAlign: "center", display: { xs: "none", sm: "block" } }, children: [
                            /* @__PURE__ */ u.jsxs(q, { variant: "body2", color: "text.secondary", fontWeight: 500, children: [
                              "Section ",
                              l + 1,
                              " of ",
                              w.length
                            ] }),
                            /* @__PURE__ */ u.jsx(q, { variant: "caption", color: "text.secondary", noWrap: !0, children: N?.label || "No section selected" })
                          ] }),
                          /* @__PURE__ */ u.jsx(te, { sx: { display: "flex", gap: 1 }, children: l < w.length - 1 ? /* @__PURE__ */ u.jsx(
                            Je,
                            {
                              variant: "contained",
                              onClick: () => C(Math.min(w.length - 1, l + 1)),
                              disabled: l >= w.length - 1,
                              sx: {
                                minWidth: { xs: 80, sm: 100 },
                                fontWeight: 600
                              },
                              children: "Next"
                            }
                          ) : /* @__PURE__ */ u.jsx(
                            Je,
                            {
                              variant: "contained",
                              color: "success",
                              onClick: E,
                              disabled: !$,
                              startIcon: /* @__PURE__ */ u.jsx(Ri, {}),
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
    )
  ] });
}
const Xm = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function Zm({ template: e, className: t, style: r, footer: n }) {
  const {
    currentPage: o,
    responses: i,
    variables: a,
    errors: l,
    isOnline: d,
    validation: f,
    setCurrentPage: m,
    template: g,
    submit: b
  } = Et(), v = e || g, h = Ye(() => Xm(v), [v]), p = h[o], x = !!b, T = () => {
    o < h.length - 1 && m(o + 1);
  }, w = () => {
    o > 0 && m(o - 1);
  }, $ = ye(async () => {
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
      return /* @__PURE__ */ u.jsx(q, { color: "text.secondary", children: "No questions in this section" });
    const C = S.components[0] || [];
    return C.length === 0 ? /* @__PURE__ */ u.jsx(q, { color: "text.secondary", children: "No questions available" }) : C.map((N, M) => /* @__PURE__ */ u.jsx(te, { sx: { mb: 3 }, children: /* @__PURE__ */ u.jsx(
      vi,
      {
        question: N,
        responses: i,
        variables: a,
        errors: l,
        validation: f
      }
    ) }, N.dataKey || M));
  };
  return /* @__PURE__ */ u.jsxs(te, { sx: { minHeight: "100vh", bgcolor: "background.default", pb: 10 }, className: t, style: r, children: [
    /* @__PURE__ */ u.jsx(
      te,
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
        children: /* @__PURE__ */ u.jsx(yn, { maxWidth: "md", sx: { py: 2 }, children: /* @__PURE__ */ u.jsxs(te, { sx: { mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(q, { variant: "h5", gutterBottom: !0, fontWeight: 600, color: "primary.main", children: v?.title || "Survey" }),
          /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
            /* @__PURE__ */ u.jsxs(q, { variant: "body2", color: "text.secondary", fontWeight: 500, children: [
              "Section ",
              o + 1,
              " of ",
              h.length || 1
            ] }),
            /* @__PURE__ */ u.jsx(
              Mn,
              {
                label: d ? "Online" : "Offline",
                size: "small",
                color: d ? "success" : "warning",
                sx: { fontWeight: 600 }
              }
            )
          ] }),
          /* @__PURE__ */ u.jsx(
            xl,
            {
              variant: "determinate",
              value: h.length ? (o + 1) / h.length * 100 : 0,
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
    /* @__PURE__ */ u.jsxs(yn, { maxWidth: "md", sx: { py: { xs: 2, sm: 3 } }, children: [
      p ? /* @__PURE__ */ u.jsxs(
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
            /* @__PURE__ */ u.jsxs(te, { sx: { mb: 3, pb: 2, borderBottom: 2, borderColor: "primary.main" }, children: [
              /* @__PURE__ */ u.jsx(q, { variant: "h4", gutterBottom: !0, fontWeight: 600, color: "text.primary", children: p.label || p.title }),
              p.description && /* @__PURE__ */ u.jsx(q, { variant: "body1", color: "text.secondary", sx: { mt: 1, lineHeight: 1.7 }, children: p.description })
            ] }),
            E(p)
          ]
        }
      ) : /* @__PURE__ */ u.jsx(Er, { severity: "info", sx: { borderRadius: 2 }, children: "No sections available. Please check the questionnaire configuration." }),
      n && /* @__PURE__ */ u.jsx(te, { sx: { mt: 3 }, children: n })
    ] }),
    /* @__PURE__ */ u.jsx(
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
        children: /* @__PURE__ */ u.jsx(yn, { maxWidth: "md", children: /* @__PURE__ */ u.jsxs(te, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ u.jsx(
            Je,
            {
              variant: "outlined",
              onClick: w,
              disabled: o === 0,
              sx: {
                minWidth: { xs: 80, sm: 100 },
                fontWeight: 600
              },
              children: "Previous"
            }
          ),
          /* @__PURE__ */ u.jsx(te, { sx: { display: { xs: "none", sm: "block" }, textAlign: "center" }, children: /* @__PURE__ */ u.jsxs(q, { variant: "caption", color: "text.secondary", display: "block", children: [
            "Progress: ",
            Math.round((o + 1) / h.length * 100),
            "%"
          ] }) }),
          /* @__PURE__ */ u.jsx(te, { sx: { display: "flex", gap: 1 }, children: o < h.length - 1 ? /* @__PURE__ */ u.jsx(
            Je,
            {
              variant: "contained",
              onClick: T,
              disabled: o >= h.length - 1,
              sx: {
                minWidth: { xs: 80, sm: 100 },
                fontWeight: 600
              },
              children: "Next"
            }
          ) : /* @__PURE__ */ u.jsx(
            Je,
            {
              variant: "contained",
              color: "success",
              onClick: $,
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
function vr(e = {}) {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.keys(e).filter((r) => r != null && r !== "").sort().forEach((r) => {
    const n = e[r];
    n !== void 0 && (t[r] = n);
  }), t;
}
function qm(e = {}) {
  const t = {
    version: 1,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    data: vr(e)
  };
  return JSON.stringify(t);
}
function eh(e) {
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
const th = (e) => e && typeof e.then == "function", Bo = (e, t) => {
  if (!e)
    return;
  if (Array.isArray(e)) {
    e.forEach((n) => Bo(n, t));
    return;
  }
  const r = e;
  !r || typeof r != "object" || (t(r), r.components && Bo(r.components, t));
}, rh = (e) => {
  const t = [], r = /* @__PURE__ */ new Set();
  return Bo(e?.components, (n) => {
    n && n.type !== 1 && n.dataKey && !r.has(n.dataKey) && (r.add(n.dataKey), t.push(n));
  }), t;
}, nh = (e) => e ? Array.isArray(e) ? e : typeof e == "object" && Array.isArray(e.testFunctions) ? e.testFunctions : [] : [];
async function oh(e, t, r = {}, n = {}) {
  if (!e || typeof e != "object")
    throw new Error("validateResponse requires a templateJson object");
  const {
    variables: o = {},
    touched: i = {},
    validators: a = {},
    asyncValidation: l = !1,
    locale: d,
    translations: f
  } = n, m = nh(t ?? e?.validation), g = rh(e), b = {}, v = { ...i };
  g.forEach((h) => {
    h?.dataKey && (v[h.dataKey] = !0);
  });
  for (const h of g) {
    if (!h?.dataKey)
      continue;
    const p = h.dataKey, x = r[p], T = Rr(
      h,
      x,
      r,
      o,
      m,
      v
    );
    T.length && (b[p] = [...b[p] || [], ...T]);
    const w = a[p];
    if (typeof w == "function")
      try {
        const E = w(x, {
          question: h,
          responses: r,
          variables: o,
          locale: d,
          translations: f,
          template: e
        });
        let S = E;
        th(E) && (l || console.warn(`Validator for ${p} returned a Promise but asyncValidation is disabled.`), S = await E), S && (b[p] = [...b[p] || [], S]);
      } catch ($) {
        console.error(`Validator for ${p} threw an error:`, $), b[p] = [
          ...b[p] || [],
          $.message || "Validation failed"
        ];
      }
  }
  return Object.keys(b).forEach((h) => {
    (!b[h] || b[h].length === 0) && delete b[h];
  }), {
    valid: Object.keys(b).length === 0,
    errors: b
  };
}
const ih = (e) => !e || e === "default" ? Ys : e === "simple" ? Zm : e, ah = () => typeof window > "u" || !window.localStorage ? null : {
  async get(e) {
    return window.localStorage.getItem(e);
  },
  async set(e, t) {
    window.localStorage.setItem(e, t);
  },
  async remove(e) {
    window.localStorage.removeItem(e);
  }
}, Qs = za((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: i,
    onSubmit: a,
    onValidationError: l,
    componentsMap: d,
    layout: f = "default",
    readOnly: m = !1,
    disabled: g = !1,
    locale: b = "en",
    translations: v = {},
    theme: h = null,
    persistentStore: p = null,
    storageKey: x = "questionnaire-draft",
    autosaveConfig: T = null,
    validators: w = {},
    asyncValidation: $ = !1,
    fetchMedia: E = null,
    onError: S = null,
    lookupClient: C = null,
    lookupBaseUrl: N = null,
    resolveLookupUrl: M = null,
    className: R,
    style: _,
    children: P,
    ...c
  } = e, {
    responses: j,
    variables: k,
    touched: W,
    validation: F,
    setConfig: X,
    setInitialResponses: ee,
    loadQuestionnaire: ie,
    setErrors: y,
    resetResponses: O,
    setRuntimeMethods: L,
    setTouched: I
  } = Et(), [z, K] = Ne({ initial: !1, draft: !1 }), B = Qe(null), H = !!T, Q = T?.debounceMs ?? 300, Y = Ye(() => p || (H ? ah() : null), [p, H]), J = ye((oe) => {
    oe && (console.error("[QuestionnaireRenderer] error:", oe), typeof S == "function" && S(oe));
  }, [S]);
  Pe(() => {
    if (!r) {
      J(new Error("templateJson is required for QuestionnaireRenderer"));
      return;
    }
    try {
      ie(r, n ?? F ?? null);
    } catch (oe) {
      J(oe);
    }
  }, [r, n, F, ie, J]);
  const ge = Ye(() => ({
    readOnly: m,
    disabled: g,
    locale: b,
    translations: v,
    fetchMedia: E,
    theme: h,
    componentsMap: d || {},
    lookupClient: C,
    lookupBaseUrl: N,
    resolveLookupUrl: M
  }), [m, g, b, v, E, h, d, C, N, M]);
  Pe(() => {
    try {
      X(ge);
    } catch (oe) {
      J(oe);
    }
  }, [ge, X, J]), Pe(() => {
    const oe = vr(o || {}), he = JSON.stringify(oe);
    if (B.current !== he) {
      B.current = he;
      try {
        ee(oe);
      } catch (de) {
        J(de);
      }
    }
    K((de) => ({ ...de, initial: !0 }));
  }, [o, ee, J]), Pe(() => {
    let oe = !1;
    return !H || !Y ? (K((de) => ({ ...de, draft: !0 })), () => {
      oe = !0;
    }) : ((async () => {
      try {
        const de = await Promise.resolve(Y.get?.(x));
        if (!oe && de) {
          const Oe = eh(de), Ke = {
            ...vr(o || {}),
            ...vr(Oe)
          };
          ee(Ke), B.current = JSON.stringify(Ke);
        }
      } catch (de) {
        oe || J(de);
      } finally {
        oe || K((de) => ({ ...de, draft: !0 }));
      }
    })(), () => {
      oe = !0;
    });
  }, [H, Y, x, o, ee, J]);
  const G = z.initial && z.draft, ue = Ye(() => vr(j), [j]);
  Pe(() => {
    if (!G || typeof i != "function")
      return;
    const oe = setTimeout(() => {
      try {
        i(ue);
      } catch (he) {
        J(he);
      }
    }, Q);
    return () => clearTimeout(oe);
  }, [ue, i, Q, J, G]), Pe(() => {
    if (!G || !H || !Y)
      return;
    const oe = setTimeout(() => {
      const he = ue, Oe = Object.keys(he).length > 0 ? Y.set?.(x, qm(he)) : Y.remove?.(x);
      Promise.resolve(Oe).catch(J);
    }, Q);
    return () => clearTimeout(oe);
  }, [ue, H, Y, x, Q, J, G]);
  const De = ye(async () => oh(r, n ?? F ?? null, ue, {
    variables: k,
    touched: W,
    validators: w,
    asyncValidation: $,
    locale: b,
    translations: v
  }), [r, n, F, ue, k, W, w, $, b, v]), Ue = ye(() => vr(j), [j]), Se = ye(() => !H || !Y ? Promise.resolve() : Promise.resolve(Y.remove?.(x)).catch(J), [H, Y, x, J]), ze = ye(async () => {
    try {
      const oe = await De();
      return y(oe.errors), oe.valid ? (typeof a == "function" && (console.log("Submitting responses:", ue), await Promise.resolve(a(ue))), T?.clearOnSubmit && await Se(), { ok: !0, responses: ue }) : (Object.keys(oe.errors).forEach((he) => I(he)), typeof l == "function" && l(oe.errors), { ok: !1, errors: oe.errors });
    } catch (oe) {
      throw J(oe), oe;
    }
  }, [De, y, I, l, a, ue, T, Se, J]), re = ye(async () => {
    try {
      O(), y({}), await Se();
    } catch (oe) {
      J(oe);
    }
  }, [O, y, Se, J]);
  tl(t, () => ({
    submit: ze,
    reset: re,
    getResponses: Ue
  }), [ze, re, Ue]);
  const je = Qe(ze), ce = Qe(re), Me = Qe(Ue);
  Pe(() => {
    je.current = ze;
  }, [ze]), Pe(() => {
    ce.current = re;
  }, [re]), Pe(() => {
    Me.current = Ue;
  }, [Ue]);
  const ne = Ye(() => ({
    submit: (...oe) => je.current(...oe),
    reset: (...oe) => ce.current(...oe),
    getResponses: (...oe) => Me.current(...oe)
  }), []);
  Pe(() => (L(ne), () => {
    L(null);
  }), [L, ne]);
  const Xe = Ye(() => ih(f), [f]);
  let Ve = null;
  if (ot.isValidElement(Xe) ? Ve = ot.cloneElement(Xe, { className: R, style: _, ...c }, P) : typeof Xe == "function" ? Ve = /* @__PURE__ */ u.jsx(Xe, { className: R, style: _, ...c, children: P }) : Ve = /* @__PURE__ */ u.jsx(Ys, { className: R, style: _, ...c, children: P }), h) {
    if (ot.isValidElement(h))
      return ot.cloneElement(h, void 0, Ve);
    if (typeof h == "function") {
      const oe = h;
      return /* @__PURE__ */ u.jsx(oe, { children: Ve });
    }
    return /* @__PURE__ */ u.jsx(Pd, { theme: h, children: Ve });
  }
  return Ve;
});
Qs.displayName = "QuestionnaireRendererInner";
const sh = za((e, t) => {
  const {
    templateJson: r,
    validationJson: n,
    initialData: o,
    onChange: i,
    onSubmit: a,
    onValidationError: l,
    componentsMap: d,
    layout: f,
    readOnly: m,
    disabled: g,
    locale: b,
    translations: v,
    theme: h,
    persistentStore: p,
    storageKey: x,
    enableAutosave: T,
    validators: w,
    asyncValidation: $,
    fetchMedia: E,
    onError: S,
    lookupClient: C,
    lookupBaseUrl: N,
    resolveLookupUrl: M,
    className: R,
    style: _,
    children: P,
    ...c
  } = e, j = Ye(() => T ? typeof T == "object" ? T : {} : null, [T]);
  return /* @__PURE__ */ u.jsx(Bd, { children: /* @__PURE__ */ u.jsx(
    Qs,
    {
      ref: t,
      templateJson: r,
      validationJson: n,
      initialData: o,
      onChange: i,
      onSubmit: a,
      onValidationError: l,
      componentsMap: d,
      layout: f,
      readOnly: m,
      disabled: g,
      locale: b,
      translations: v,
      theme: h,
      persistentStore: p,
      storageKey: x,
      autosaveConfig: j,
      validators: w,
      asyncValidation: $,
      fetchMedia: E,
      onError: S,
      lookupClient: C,
      lookupBaseUrl: N,
      resolveLookupUrl: M,
      className: R,
      style: _,
      ...c,
      children: P
    }
  ) });
});
sh.displayName = "QuestionnaireRenderer";
const mh = Object.freeze({
  QuestionnaireRendererProps: "QuestionnaireRendererProps",
  QuestionnaireRuntimeHandle: "QuestionnaireRuntimeHandle",
  QuestionnaireValidationErrors: "QuestionnaireValidationErrors"
});
export {
  Ys as QuestionnaireLayout,
  sh as QuestionnaireRenderer,
  rh as collectQuestions,
  sh as default,
  eh as deserializeResponses,
  vr as normalizeResponses,
  qm as serializeResponses,
  mh as types,
  Et as useQuestionnaire,
  oh as validateResponse
};
//# sourceMappingURL=index.es.js.map
