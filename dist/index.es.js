import * as q from "react";
import Fe, { createContext as yo, useReducer as go, useRef as Pe, useEffect as me, useCallback as re, useContext as bo, useMemo as Se, useState as ue, forwardRef as $n, useImperativeHandle as xo } from "react";
import So from "localforage";
import { Box as Q, Alert as Je, Typography as U, List as xr, ListItem as Sr, ListItemText as vr, Button as Ee, Paper as st, Stack as Nr, Divider as Mr, TextField as Ae, FormControl as Ct, FormLabel as Pn, RadioGroup as vo, FormControlLabel as In, Radio as Eo, FormHelperText as Xe, InputLabel as Nn, Select as Mn, MenuItem as bt, FormGroup as To, Checkbox as Co, Chip as Er, OutlinedInput as wo, ListItemSecondaryAction as Oo, IconButton as lt, CircularProgress as mr, Card as jo, CardMedia as Ro, CardContent as Ao, useTheme as ko, useMediaQuery as _o, Toolbar as qt, ListItemButton as $o, AppBar as Po, Drawer as Io, Container as Ln, LinearProgress as No } from "@mui/material";
import { Visibility as Mo, ArrowBack as Lo, ArrowBackIosNew as Do, ArrowForwardIos as Vo, Error as Bo, Add as Fo, Delete as Dn, MyLocation as Uo, PhotoCamera as Lr, CameraAlt as Dr, CloudUpload as Ko, ChevronLeft as Wo, CheckCircle as zo, RadioButtonUnchecked as Go, Menu as Yo, Send as Ho } from "@mui/icons-material";
import { Global as Qo, ThemeContext as Vn } from "@emotion/react";
import "@emotion/styled";
function Jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Xo() {
  if (Vr) return ft;
  Vr = 1;
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
var Br;
function Zo() {
  return Br || (Br = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === w ? null : d.displayName || d.name || null;
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
        case j:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case f:
            return "Portal";
          case M:
            return (d.displayName || "Context") + ".Provider";
          case R:
            return (d._context.displayName || "Context") + ".Consumer";
          case C:
            var E = d.render;
            return d = d.displayName, d || (d = E.displayName || E.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case _:
            return E = d.displayName || null, E !== null ? E : e(d.type) || "Memo";
          case N:
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
        var $ = E.error, O = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return $.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(d);
      }
    }
    function n(d) {
      if (d === c) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === N)
        return "<...>";
      try {
        var E = e(d);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var d = P.A;
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
      function $() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: $,
        configurable: !0
      });
    }
    function p() {
      var d = e(this.type);
      return Y[d] || (Y[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function m(d, E, $, O, L, B, F, K) {
      return $ = B.ref, d = {
        $$typeof: b,
        type: d,
        key: E,
        props: B,
        _owner: L
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(d, "ref", {
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
    function x(d, E, $, O, L, B, F, K) {
      var W = E.children;
      if (W !== void 0)
        if (O)
          if (I(W)) {
            for (O = 0; O < W.length; O++)
              y(W[O]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(W);
      if (l.call(E, "key")) {
        W = e(d);
        var J = Object.keys(E).filter(function(ge) {
          return ge !== "key";
        });
        O = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", V[W + O] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          W,
          J,
          W
        ), V[W + O] = !0);
      }
      if (W = null, $ !== void 0 && (r($), W = "" + $), s(E) && (r(E.key), W = "" + E.key), "key" in E) {
        $ = {};
        for (var z in E)
          z !== "key" && ($[z] = E[z]);
      } else $ = E;
      return W && u(
        $,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), m(
        d,
        W,
        B,
        L,
        o(),
        $,
        F,
        K
      );
    }
    function y(d) {
      typeof d == "object" && d !== null && d.$$typeof === b && d._store && (d._store.validated = 1);
    }
    var h = Fe, b = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), P = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, l = Object.prototype.hasOwnProperty, I = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var G, Y = {}, ne = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), te = A(n(a)), V = {};
    pt.Fragment = c, pt.jsx = function(d, E, $, O, L) {
      var B = 1e4 > P.recentlyCreatedOwnerStacks++;
      return x(
        d,
        E,
        $,
        !1,
        O,
        L,
        B ? Error("react-stack-top-frame") : ne,
        B ? A(n(d)) : te
      );
    }, pt.jsxs = function(d, E, $, O, L) {
      var B = 1e4 > P.recentlyCreatedOwnerStacks++;
      return x(
        d,
        E,
        $,
        !0,
        O,
        L,
        B ? Error("react-stack-top-frame") : ne,
        B ? A(n(d)) : te
      );
    };
  })()), pt;
}
var Fr;
function qo() {
  return Fr || (Fr = 1, process.env.NODE_ENV === "production" ? At.exports = Xo() : At.exports = Zo()), At.exports;
}
var i = qo();
function Ke(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const ct = "$$material";
function ea(e) {
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
var ta = {
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
function ra(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var na = /[A-Z]|^ms/g, oa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bn = function(t) {
  return t.charCodeAt(1) === 45;
}, Ur = function(t) {
  return t != null && typeof t != "boolean";
}, er = /* @__PURE__ */ ra(function(e) {
  return Bn(e) ? e : e.replace(na, "-$&").toLowerCase();
}), Kr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(oa, function(n, o, a) {
          return Ue = {
            name: o,
            styles: a,
            next: Ue
          }, o;
        });
  }
  return ta[t] !== 1 && !Bn(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Mt(e, t, r) {
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
        return Ue = {
          name: o.name,
          styles: o.styles,
          next: Ue
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Ue = {
              name: s.name,
              styles: s.styles,
              next: Ue
            }, s = s.next;
        var u = a.styles + ";";
        return u;
      }
      return aa(e, t, r);
    }
  }
  var p = r;
  return p;
}
function aa(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Mt(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var u = s;
        Ur(u) && (n += er(a) + ":" + Kr(a, u) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var p = 0; p < s.length; p++)
          Ur(s[p]) && (n += er(a) + ":" + Kr(a, s[p]) + ";");
      else {
        var m = Mt(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += er(a) + ":" + m + ";";
            break;
          }
          default:
            n += a + "{" + m + "}";
        }
      }
    }
  return n;
}
var Wr = /label:\s*([^\s;{]+)\s*(;|$)/g, Ue;
function ia(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ue = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += Mt(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Mt(r, t, e[u]), n) {
      var p = a;
      o += p[u];
    }
  Wr.lastIndex = 0;
  for (var m = "", x; (x = Wr.exec(o)) !== null; )
    m += "-" + x[1];
  var y = ea(o) + m;
  return {
    name: y,
    styles: o,
    next: Ue
  };
}
var kt = { exports: {} }, _t = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function sa() {
  if (zr) return oe;
  zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function M(S) {
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
  function C(S) {
    return M(S) === m;
  }
  return oe.AsyncMode = p, oe.ConcurrentMode = m, oe.ContextConsumer = u, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = x, oe.Fragment = n, oe.Lazy = f, oe.Memo = b, oe.Portal = r, oe.Profiler = a, oe.StrictMode = o, oe.Suspense = y, oe.isAsyncMode = function(S) {
    return C(S) || M(S) === p;
  }, oe.isConcurrentMode = C, oe.isContextConsumer = function(S) {
    return M(S) === u;
  }, oe.isContextProvider = function(S) {
    return M(S) === s;
  }, oe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, oe.isForwardRef = function(S) {
    return M(S) === x;
  }, oe.isFragment = function(S) {
    return M(S) === n;
  }, oe.isLazy = function(S) {
    return M(S) === f;
  }, oe.isMemo = function(S) {
    return M(S) === b;
  }, oe.isPortal = function(S) {
    return M(S) === r;
  }, oe.isProfiler = function(S) {
    return M(S) === a;
  }, oe.isStrictMode = function(S) {
    return M(S) === o;
  }, oe.isSuspense = function(S) {
    return M(S) === y;
  }, oe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === m || S === a || S === o || S === y || S === h || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === b || S.$$typeof === s || S.$$typeof === u || S.$$typeof === x || S.$$typeof === g || S.$$typeof === v || S.$$typeof === R || S.$$typeof === c);
  }, oe.typeOf = M, oe;
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
var Gr;
function la() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, f = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function M(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === m || D === a || D === o || D === y || D === h || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === b || D.$$typeof === s || D.$$typeof === u || D.$$typeof === x || D.$$typeof === g || D.$$typeof === v || D.$$typeof === R || D.$$typeof === c);
    }
    function C(D) {
      if (typeof D == "object" && D !== null) {
        var fe = D.$$typeof;
        switch (fe) {
          case t:
            var ke = D.type;
            switch (ke) {
              case p:
              case m:
              case n:
              case a:
              case o:
              case y:
                return ke;
              default:
                var Re = ke && ke.$$typeof;
                switch (Re) {
                  case u:
                  case x:
                  case f:
                  case b:
                  case s:
                    return Re;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var S = p, k = m, _ = u, N = s, j = t, w = x, P = n, l = f, I = b, A = r, G = a, Y = o, ne = y, te = !1;
    function V(D) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(D) || C(D) === p;
    }
    function d(D) {
      return C(D) === m;
    }
    function E(D) {
      return C(D) === u;
    }
    function $(D) {
      return C(D) === s;
    }
    function O(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function L(D) {
      return C(D) === x;
    }
    function B(D) {
      return C(D) === n;
    }
    function F(D) {
      return C(D) === f;
    }
    function K(D) {
      return C(D) === b;
    }
    function W(D) {
      return C(D) === r;
    }
    function J(D) {
      return C(D) === a;
    }
    function z(D) {
      return C(D) === o;
    }
    function ge(D) {
      return C(D) === y;
    }
    ae.AsyncMode = S, ae.ConcurrentMode = k, ae.ContextConsumer = _, ae.ContextProvider = N, ae.Element = j, ae.ForwardRef = w, ae.Fragment = P, ae.Lazy = l, ae.Memo = I, ae.Portal = A, ae.Profiler = G, ae.StrictMode = Y, ae.Suspense = ne, ae.isAsyncMode = V, ae.isConcurrentMode = d, ae.isContextConsumer = E, ae.isContextProvider = $, ae.isElement = O, ae.isForwardRef = L, ae.isFragment = B, ae.isLazy = F, ae.isMemo = K, ae.isPortal = W, ae.isProfiler = J, ae.isStrictMode = z, ae.isSuspense = ge, ae.isValidElementType = M, ae.typeOf = C;
  })()), ae;
}
var Yr;
function Fn() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? _t.exports = sa() : _t.exports = la()), _t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tr, Hr;
function ca() {
  if (Hr) return tr;
  Hr = 1;
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
  return tr = o() ? Object.assign : function(a, s) {
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
  }, tr;
}
var rr, Qr;
function Tr() {
  if (Qr) return rr;
  Qr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rr = e, rr;
}
var nr, Jr;
function Un() {
  return Jr || (Jr = 1, nr = Function.call.bind(Object.prototype.hasOwnProperty)), nr;
}
var or, Xr;
function ua() {
  if (Xr) return or;
  Xr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Tr(), r = {}, n = /* @__PURE__ */ Un();
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
  }, or = o, or;
}
var ar, Zr;
function da() {
  if (Zr) return ar;
  Zr = 1;
  var e = Fn(), t = ca(), r = /* @__PURE__ */ Tr(), n = /* @__PURE__ */ Un(), o = /* @__PURE__ */ ua(), a = function() {
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
  return ar = function(u, p) {
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
      arrayOf: M,
      element: C(),
      elementType: S(),
      instanceOf: k,
      node: w(),
      objectOf: N,
      oneOf: _,
      oneOfType: j,
      shape: l,
      exact: I
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
        var E = {}, $ = 0;
      function O(B, F, K, W, J, z, ge) {
        if (W = W || h, z = z || K, ge !== r) {
          if (p) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = W + ":" + K;
            !E[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[fe] = !0, $++);
          }
        }
        return F[K] == null ? B ? F[K] === null ? new c("The " + J + " `" + z + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new c("The " + J + " `" + z + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : d(F, K, W, J, z);
      }
      var L = O.bind(null, !1);
      return L.isRequired = O.bind(null, !0), L;
    }
    function v(d) {
      function E($, O, L, B, F, K) {
        var W = $[O], J = Y(W);
        if (J !== d) {
          var z = ne(W);
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
    function M(d) {
      function E($, O, L, B, F) {
        if (typeof d != "function")
          return new c("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var K = $[O];
        if (!Array.isArray(K)) {
          var W = Y(K);
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected an array."));
        }
        for (var J = 0; J < K.length; J++) {
          var z = d(K, J, L, B, F + "[" + J + "]", r);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return g(E);
    }
    function C() {
      function d(E, $, O, L, B) {
        var F = E[$];
        if (!u(F)) {
          var K = Y(F);
          return new c("Invalid " + L + " `" + B + "` of type " + ("`" + K + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(d);
    }
    function S() {
      function d(E, $, O, L, B) {
        var F = E[$];
        if (!e.isValidElementType(F)) {
          var K = Y(F);
          return new c("Invalid " + L + " `" + B + "` of type " + ("`" + K + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(d);
    }
    function k(d) {
      function E($, O, L, B, F) {
        if (!($[O] instanceof d)) {
          var K = d.name || h, W = V($[O]);
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return g(E);
    }
    function _(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function E($, O, L, B, F) {
        for (var K = $[O], W = 0; W < d.length; W++)
          if (f(K, d[W]))
            return null;
        var J = JSON.stringify(d, function(ge, D) {
          var fe = ne(D);
          return fe === "symbol" ? String(D) : D;
        });
        return new c("Invalid " + B + " `" + F + "` of value `" + String(K) + "` " + ("supplied to `" + L + "`, expected one of " + J + "."));
      }
      return g(E);
    }
    function N(d) {
      function E($, O, L, B, F) {
        if (typeof d != "function")
          return new c("Property `" + F + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var K = $[O], W = Y(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type " + ("`" + W + "` supplied to `" + L + "`, expected an object."));
        for (var J in K)
          if (n(K, J)) {
            var z = d(K, J, L, B, F + "." + J, r);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return g(E);
    }
    function j(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var E = 0; E < d.length; E++) {
        var $ = d[E];
        if (typeof $ != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te($) + " at index " + E + "."
          ), s;
      }
      function O(L, B, F, K, W) {
        for (var J = [], z = 0; z < d.length; z++) {
          var ge = d[z], D = ge(L, B, F, K, W, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && J.push(D.data.expectedType);
        }
        var fe = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new c("Invalid " + K + " `" + W + "` supplied to " + ("`" + F + "`" + fe + "."));
      }
      return g(O);
    }
    function w() {
      function d(E, $, O, L, B) {
        return A(E[$]) ? null : new c("Invalid " + L + " `" + B + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return g(d);
    }
    function P(d, E, $, O, L) {
      return new c(
        (d || "React class") + ": " + E + " type `" + $ + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function l(d) {
      function E($, O, L, B, F) {
        var K = $[O], W = Y(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type `" + W + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var J in d) {
          var z = d[J];
          if (typeof z != "function")
            return P(L, B, F, J, ne(z));
          var ge = z(K, J, L, B, F + "." + J, r);
          if (ge)
            return ge;
        }
        return null;
      }
      return g(E);
    }
    function I(d) {
      function E($, O, L, B, F) {
        var K = $[O], W = Y(K);
        if (W !== "object")
          return new c("Invalid " + B + " `" + F + "` of type `" + W + "` " + ("supplied to `" + L + "`, expected `object`."));
        var J = t({}, $[O], d);
        for (var z in J) {
          var ge = d[z];
          if (n(d, z) && typeof ge != "function")
            return P(L, B, F, z, ne(ge));
          if (!ge)
            return new c(
              "Invalid " + B + " `" + F + "` key `" + z + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify($[O], null, "  ") + `
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
    function A(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(A);
          if (d === null || u(d))
            return !0;
          var E = y(d);
          if (E) {
            var $ = E.call(d), O;
            if (E !== d.entries) {
              for (; !(O = $.next()).done; )
                if (!A(O.value))
                  return !1;
            } else
              for (; !(O = $.next()).done; ) {
                var L = O.value;
                if (L && !A(L[1]))
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
    function Y(d) {
      var E = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : G(E, d) ? "symbol" : E;
    }
    function ne(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var E = Y(d);
      if (E === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function te(d) {
      var E = ne(d);
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
  }, ar;
}
var ir, qr;
function fa() {
  if (qr) return ir;
  qr = 1;
  var e = /* @__PURE__ */ Tr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ir = function() {
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
  }, ir;
}
var en;
function pa() {
  if (en) return kt.exports;
  if (en = 1, process.env.NODE_ENV !== "production") {
    var e = Fn(), t = !0;
    kt.exports = /* @__PURE__ */ da()(e.isElement, t);
  } else
    kt.exports = /* @__PURE__ */ fa()();
  return kt.exports;
}
var ma = /* @__PURE__ */ pa();
const H = /* @__PURE__ */ Jo(ma);
function ha(e) {
  return e == null || Object.keys(e).length === 0;
}
function Cr(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(ha(o) ? r : o) : t;
  return /* @__PURE__ */ i.jsx(Qo, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  defaultTheme: H.object,
  styles: H.oneOfType([H.array, H.string, H.object, H.func])
});
/**
 * @mui/styled-engine v7.3.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tn = [];
function ya(e) {
  return tn[0] = e, ia(tn);
}
var $t = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function ga() {
  if (rn) return le;
  rn = 1;
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
var nn;
function ba() {
  return nn || (nn = 1, process.env.NODE_ENV !== "production" && (function() {
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
var on;
function xa() {
  return on || (on = 1, process.env.NODE_ENV === "production" ? $t.exports = /* @__PURE__ */ ga() : $t.exports = /* @__PURE__ */ ba()), $t.exports;
}
var Kn = /* @__PURE__ */ xa();
function Be(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wn(e) {
  if (/* @__PURE__ */ q.isValidElement(e) || Kn.isValidElementType(e) || !Be(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Wn(e[r]);
  }), t;
}
function we(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Be(e) && Be(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ q.isValidElement(t[o]) || Kn.isValidElementType(t[o]) ? n[o] = t[o] : Be(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Be(e[o]) ? n[o] = we(e[o], t[o], r) : r.clone ? n[o] = Be(t[o]) ? Wn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Sa = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function va(e) {
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
  } = e, a = Sa(t), s = Object.keys(a);
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
function an(e, t) {
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
function Ea(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ta(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ke(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function Ca(e) {
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
const wa = {
  borderRadius: 4
}, ze = process.env.NODE_ENV !== "production" ? H.oneOfType([H.number, H.string, H.object, H.array]) : {};
function vt(e, t) {
  return t ? we(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Vt = {
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
}, sn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vt[e]}px)`
}, Oa = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Vt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Le(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || sn;
    return t.reduce((s, u, p) => (s[a.up(a.keys[p])] = r(t[p]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || sn;
    return Object.keys(t).reduce((s, u) => {
      if (Ea(a.keys, u)) {
        const p = Ta(n.containerQueries ? n : Oa, u);
        p && (s[p] = r(t[u], u));
      } else if (Object.keys(a.values || Vt).includes(u)) {
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
function ja(e = {}) {
  return e.keys?.reduce((r, n) => {
    const o = e.up(n);
    return r[o] = {}, r;
  }, {}) || {};
}
function ln(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function zn(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ke(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Lt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Bt(e, r) || n, t && (o = t(o, n, e)), o;
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
    const u = s[t], p = s.theme, m = Bt(p, n) || {};
    return Le(s, u, (y) => {
      let h = Lt(m, o, y);
      return y === h && typeof y == "string" && (h = Lt(m, o, `${t}${y === "default" ? "" : zn(y)}`, y)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ze
  } : {}, a.filterProps = [t], a;
}
function Ra(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Aa = {
  m: "margin",
  p: "padding"
}, ka = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, cn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, _a = Ra((e) => {
  if (e.length > 2)
    if (cn[e])
      e = cn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Aa[t], o = ka[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), Ft = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ut = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], $a = [...Ft, ...Ut];
function wt(e, t, r, n) {
  const o = Bt(e, t, !0) ?? r;
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
function wr(e) {
  return wt(e, "spacing", 8, "spacing");
}
function Ot(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Pa(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Ot(t, r), n), {});
}
function Ia(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = _a(r), a = Pa(o, n), s = e[r];
  return Le(e, s, a);
}
function Gn(e, t) {
  const r = wr(e.theme);
  return Object.keys(e).map((n) => Ia(e, t, n, r)).reduce(vt, {});
}
function he(e) {
  return Gn(e, Ft);
}
he.propTypes = process.env.NODE_ENV !== "production" ? Ft.reduce((e, t) => (e[t] = ze, e), {}) : {};
he.filterProps = Ft;
function ye(e) {
  return Gn(e, Ut);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? Ut.reduce((e, t) => (e[t] = ze, e), {}) : {};
ye.filterProps = Ut;
process.env.NODE_ENV !== "production" && $a.reduce((e, t) => (e[t] = ze, e), {});
function Yn(e = 8, t = wr({
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
function Kt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? vt(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function je(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Na = je("border", Oe), Ma = je("borderTop", Oe), La = je("borderRight", Oe), Da = je("borderBottom", Oe), Va = je("borderLeft", Oe), Ba = je("borderColor"), Fa = je("borderTopColor"), Ua = je("borderRightColor"), Ka = je("borderBottomColor"), Wa = je("borderLeftColor"), za = je("outline", Oe), Ga = je("outlineColor"), Wt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = wt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ot(t, n)
    });
    return Le(e, e.borderRadius, r);
  }
  return null;
};
Wt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ze
} : {};
Wt.filterProps = ["borderRadius"];
Kt(Na, Ma, La, Da, Va, Ba, Fa, Ua, Ka, Wa, Wt, za, Ga);
const zt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ot(t, n)
    });
    return Le(e, e.gap, r);
  }
  return null;
};
zt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ze
} : {};
zt.filterProps = ["gap"];
const Gt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ot(t, n)
    });
    return Le(e, e.columnGap, r);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ze
} : {};
Gt.filterProps = ["columnGap"];
const Yt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ot(t, n)
    });
    return Le(e, e.rowGap, r);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ze
} : {};
Yt.filterProps = ["rowGap"];
const Ya = be({
  prop: "gridColumn"
}), Ha = be({
  prop: "gridRow"
}), Qa = be({
  prop: "gridAutoFlow"
}), Ja = be({
  prop: "gridAutoColumns"
}), Xa = be({
  prop: "gridAutoRows"
}), Za = be({
  prop: "gridTemplateColumns"
}), qa = be({
  prop: "gridTemplateRows"
}), ei = be({
  prop: "gridTemplateAreas"
}), ti = be({
  prop: "gridArea"
});
Kt(zt, Gt, Yt, Ya, Ha, Qa, Ja, Xa, Za, qa, ei, ti);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const ri = be({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), ni = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), oi = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
Kt(ri, ni, oi);
function Ce(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ai = be({
  prop: "width",
  transform: Ce
}), Or = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const n = e.theme?.breakpoints?.values?.[r] || Vt[r];
      return n ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ce(r)
      };
    };
    return Le(e, e.maxWidth, t);
  }
  return null;
};
Or.filterProps = ["maxWidth"];
const ii = be({
  prop: "minWidth",
  transform: Ce
}), si = be({
  prop: "height",
  transform: Ce
}), li = be({
  prop: "maxHeight",
  transform: Ce
}), ci = be({
  prop: "minHeight",
  transform: Ce
});
be({
  prop: "size",
  cssProperty: "width",
  transform: Ce
});
be({
  prop: "size",
  cssProperty: "height",
  transform: Ce
});
const ui = be({
  prop: "boxSizing"
});
Kt(ai, Or, ii, si, li, ci, ui);
const Ht = {
  // borders
  border: {
    themeKey: "borders",
    transform: Oe
  },
  borderTop: {
    themeKey: "borders",
    transform: Oe
  },
  borderRight: {
    themeKey: "borders",
    transform: Oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Oe
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
    transform: Oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wt
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
    style: zt
  },
  rowGap: {
    style: Yt
  },
  columnGap: {
    style: Gt
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
    transform: Ce
  },
  maxWidth: {
    style: Or
  },
  minWidth: {
    transform: Ce
  },
  height: {
    transform: Ce
  },
  maxHeight: {
    transform: Ce
  },
  minHeight: {
    transform: Ce
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
function di(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function fi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pi() {
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
    const h = Bt(o, m) || {};
    return y ? y(s) : Le(s, n, (f) => {
      let c = Lt(h, x, f);
      return f === c && typeof f == "string" && (c = Lt(h, x, `${r}${f === "default" ? "" : zn(f)}`, f)), p === !1 ? c : {
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
    const s = o.unstable_sxConfig ?? Ht;
    function u(p) {
      let m = p;
      if (typeof p == "function")
        m = p(o);
      else if (typeof p != "object")
        return p;
      if (!m)
        return null;
      const x = ja(o.breakpoints), y = Object.keys(x);
      let h = x;
      return Object.keys(m).forEach((b) => {
        const f = fi(m[b], o);
        if (f != null)
          if (typeof f == "object")
            if (s[b])
              h = vt(h, e(b, f, o, s));
            else {
              const c = Le({
                theme: o
              }, f, (g) => ({
                [b]: g
              }));
              di(c, f) ? h[b] = t({
                sx: f,
                theme: o,
                nested: !0
              }) : h = vt(h, c);
            }
          else
            h = vt(h, e(b, f, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": an(o, ln(y, h))
      } : an(o, ln(y, h));
    }
    return Array.isArray(n) ? n.map(u) : u(n);
  }
  return t;
}
const jt = pi();
jt.filterProps = ["sx"];
function mi(e, t) {
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
function Hn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, u = va(r), p = Yn(o);
  let m = we({
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
      ...wa,
      ...a
    }
  }, s);
  return m = Ca(m), m.applyStyles = mi, m = t.reduce((x, y) => we(x, y), m), m.unstable_sxConfig = {
    ...Ht,
    ...s?.unstable_sxConfig
  }, m.unstable_sx = function(y) {
    return jt({
      sx: y,
      theme: this
    });
  }, m;
}
function hi(e) {
  return Object.keys(e).length === 0;
}
function jr(e = null) {
  const t = q.useContext(Vn);
  return !t || hi(t) ? e : t;
}
const yi = Hn();
function gi(e = yi) {
  return jr(e);
}
function sr(e) {
  const t = ya(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Qn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = gi(r), o = t && n[t] || n;
  let a = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => sr(typeof s == "function" ? s(o) : s)) : a = sr(a)), /* @__PURE__ */ i.jsx(Cr, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Qn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: H.object,
  /**
   * @ignore
   */
  styles: H.oneOfType([H.array, H.func, H.number, H.object, H.string, H.bool]),
  /**
   * @ignore
   */
  themeId: H.string
});
const un = (e) => e, bi = () => {
  let e = un;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = un;
    }
  };
}, xi = bi(), Si = {
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
function vi(e, t, r = "Mui") {
  const n = Si[t];
  return n ? `${r}-${n}` : `${xi.generate(e)}-${t}`;
}
const Jn = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
function Ei(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Rr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ei(e, t, r);
}
function Ti(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function We(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return We(Ti(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ke(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ke(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ci = (e) => {
  const t = We(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, xt = (e, t) => {
  try {
    return Ci(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Qt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Xn(e) {
  e = We(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (m, x = (m + r / 30) % 12) => o - a * Math.max(Math.min(x - 3, 9 - x, 1), -1);
  let u = "rgb";
  const p = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (u += "a", p.push(t[3])), Qt({
    type: u,
    values: p
  });
}
function hr(e) {
  e = We(e);
  let t = e.type === "hsl" || e.type === "hsla" ? We(Xn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function dn(e, t) {
  const r = hr(e), n = hr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Zn(e, t) {
  return e = We(e), t = Rr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qt(e);
}
function He(e, t, r) {
  try {
    return Zn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Jt(e, t) {
  if (e = We(e), t = Rr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Qt(e);
}
function ie(e, t, r) {
  try {
    return Jt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xt(e, t) {
  if (e = We(e), t = Rr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Qt(e);
}
function se(e, t, r) {
  try {
    return Xt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function wi(e, t = 0.15) {
  return hr(e) > 0.5 ? Jt(e, t) : Xt(e, t);
}
function Pt(e, t, r) {
  try {
    return wi(e, t);
  } catch {
    return e;
  }
}
const Oi = "exact-prop: ​";
function qn(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Oi]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Ar = /* @__PURE__ */ q.createContext(null);
process.env.NODE_ENV !== "production" && (Ar.displayName = "ThemeContext");
function kr() {
  const e = q.useContext(Ar);
  return process.env.NODE_ENV !== "production" && q.useDebugValue(e), e;
}
const ji = typeof Symbol == "function" && Symbol.for, Ri = ji ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ai(e, t) {
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
function Dt(e) {
  const {
    children: t,
    theme: r
  } = e, n = kr();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = q.useMemo(() => {
    const a = n === null ? {
      ...r
    } : Ai(n, r);
    return a != null && (a[Ri] = n !== null), a;
  }, [r, n]);
  return /* @__PURE__ */ i.jsx(Ar.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
  /**
   * Your component tree.
   */
  children: H.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: H.oneOfType([H.object, H.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Dt.propTypes = qn(Dt.propTypes));
const ki = /* @__PURE__ */ q.createContext();
function eo({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ i.jsx(ki.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (eo.propTypes = {
  children: H.node,
  value: H.bool
});
const _i = /* @__PURE__ */ q.createContext(void 0);
function to({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ i.jsx(_i.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (to.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: H.node,
  /**
   * @ignore
   */
  value: H.object
});
let fn = 0;
function $i(e) {
  const [t, r] = q.useState(e), n = e || t;
  return q.useEffect(() => {
    t == null && (fn += 1, r(`mui-${fn}`));
  }, [t]), n;
}
const Pi = {
  ...q
}, pn = Pi.useId;
function Ii(e) {
  return pn !== void 0 ? pn() : $i(e);
}
function Ni(e) {
  const t = jr(), r = Ii() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Jn(() => {
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
  }, [o, r]), o ? /* @__PURE__ */ i.jsx(Qn, {
    styles: o
  }) : null;
}
const mn = {};
function hn(e, t, r, n = !1) {
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
  } = e, o = jr(mn), a = kr() || mn;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = hn(n, o, r), u = hn(n, a, r, !0), p = (n ? s[n] : s).direction === "rtl", m = Ni(s);
  return /* @__PURE__ */ i.jsx(Dt, {
    theme: u,
    children: /* @__PURE__ */ i.jsx(Vn.Provider, {
      value: s,
      children: /* @__PURE__ */ i.jsx(eo, {
        value: p,
        children: /* @__PURE__ */ i.jsxs(to, {
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
  children: H.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: H.oneOfType([H.func, H.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: H.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Et.propTypes = qn(Et.propTypes));
const _r = "mode", $r = "color-scheme", Mi = "data-color-scheme";
function Li(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = _r,
    colorSchemeStorageKey: a = $r,
    attribute: s = Mi,
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
function Di() {
}
const Vi = ({
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
      return Di;
    const n = (o) => {
      const a = o.newValue;
      o.key === e && r(a);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function lr() {
}
function yn(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ro(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Bi(e) {
  return ro(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Fi(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: a = _r,
    colorSchemeStorageKey: s = $r,
    storageWindow: u = typeof window > "u" ? void 0 : window,
    storageManager: p = Vi,
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
    const N = h?.get(t) || t, j = b?.get(r) || r, w = f?.get(n) || n;
    return {
      mode: N,
      systemMode: yn(N),
      lightColorScheme: j,
      darkColorScheme: w
    };
  }), [v, R] = q.useState(m || !y);
  q.useEffect(() => {
    R(!0);
  }, []);
  const M = Bi(c), C = q.useCallback((N) => {
    g((j) => {
      if (N === j.mode)
        return j;
      const w = N ?? t;
      return h?.set(w), {
        ...j,
        mode: w,
        systemMode: yn(w)
      };
    });
  }, [h, t]), S = q.useCallback((N) => {
    N ? typeof N == "string" ? N && !x.includes(N) ? console.error(`\`${N}\` does not exist in \`theme.colorSchemes\`.`) : g((j) => {
      const w = {
        ...j
      };
      return ro(j, (P) => {
        P === "light" && (b?.set(N), w.lightColorScheme = N), P === "dark" && (f?.set(N), w.darkColorScheme = N);
      }), w;
    }) : g((j) => {
      const w = {
        ...j
      }, P = N.light === null ? r : N.light, l = N.dark === null ? n : N.dark;
      return P && (x.includes(P) ? (w.lightColorScheme = P, b?.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), l && (x.includes(l) ? (w.darkColorScheme = l, f?.set(l)) : console.error(`\`${l}\` does not exist in \`theme.colorSchemes\`.`)), w;
    }) : g((j) => (b?.set(r), f?.set(n), {
      ...j,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [x, b, f, r, n]), k = q.useCallback((N) => {
    c.mode === "system" && g((j) => {
      const w = N?.matches ? "dark" : "light";
      return j.systemMode === w ? j : {
        ...j,
        systemMode: w
      };
    });
  }, [c.mode]), _ = q.useRef(k);
  return _.current = k, q.useEffect(() => {
    if (typeof window.matchMedia != "function" || !y)
      return;
    const N = (...w) => _.current(...w), j = window.matchMedia("(prefers-color-scheme: dark)");
    return j.addListener(N), N(j), () => {
      j.removeListener(N);
    };
  }, [y]), q.useEffect(() => {
    if (y) {
      const N = h?.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && C(P || t);
      }) || lr, j = b?.subscribe((P) => {
        (!P || x.match(P)) && S({
          light: P
        });
      }) || lr, w = f?.subscribe((P) => {
        (!P || x.match(P)) && S({
          dark: P
        });
      }) || lr;
      return () => {
        N(), j(), w();
      };
    }
  }, [S, C, x, t, u, y, h, b, f]), {
    ...c,
    mode: v ? c.mode : void 0,
    systemMode: v ? c.systemMode : void 0,
    colorScheme: v ? M : void 0,
    setMode: C,
    setColorScheme: S
  };
}
const Ui = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ki(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = _r,
    colorSchemeStorageKey: o = $r,
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
      theme: M,
      modeStorageKey: C = n,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: k = a,
      storageManager: _,
      storageWindow: N = typeof window > "u" ? void 0 : window,
      documentNode: j = typeof document > "u" ? void 0 : document,
      colorSchemeNode: w = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: P = !1,
      disableStyleSheetGeneration: l = !1,
      defaultMode: I = "system",
      forceThemeRerender: A = !1,
      noSsr: G
    } = v, Y = q.useRef(!1), ne = kr(), te = q.useContext(m), V = !!te && !P, d = q.useMemo(() => M || (typeof r == "function" ? r() : r), [M]), E = d[t], $ = E || d, {
      colorSchemes: O = y,
      components: L = h,
      cssVarPrefix: B
    } = $, F = Object.keys(O).filter((de) => !!O[de]).join(","), K = q.useMemo(() => F.split(","), [F]), W = typeof s == "string" ? s : s.light, J = typeof s == "string" ? s : s.dark, z = O[W] && O[J] ? I : O[$.defaultColorScheme]?.palette?.mode || $.palette?.mode, {
      mode: ge,
      setMode: D,
      systemMode: fe,
      lightColorScheme: ke,
      darkColorScheme: Re,
      colorScheme: qe,
      setColorScheme: De
    } = Fi({
      supportedColorSchemes: K,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: J,
      modeStorageKey: C,
      colorSchemeStorageKey: S,
      defaultMode: z,
      storageManager: _,
      storageWindow: N,
      noSsr: G
    });
    let Ne = ge, ve = qe;
    V && (Ne = te.mode, ve = te.colorScheme), process.env.NODE_ENV !== "production" && A && !$.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Ge = ve || $.defaultColorScheme;
    $.vars && !A && (Ge = $.defaultColorScheme);
    const Ye = q.useMemo(() => {
      const de = $.generateThemeVars?.() || $.vars, ee = {
        ...$,
        components: L,
        colorSchemes: O,
        cssVarPrefix: B,
        vars: de
      };
      if (typeof ee.generateSpacing == "function" && (ee.spacing = ee.generateSpacing()), Ge) {
        const xe = O[Ge];
        xe && typeof xe == "object" && Object.keys(xe).forEach((Te) => {
          xe[Te] && typeof xe[Te] == "object" ? ee[Te] = {
            ...ee[Te],
            ...xe[Te]
          } : ee[Te] = xe[Te];
        });
      }
      return u ? u(ee) : ee;
    }, [$, Ge, L, O, B]), Ve = $.colorSchemeSelector;
    Jn(() => {
      if (ve && w && Ve && Ve !== "media") {
        const de = Ve;
        let ee = Ve;
        if (de === "class" && (ee = ".%s"), de === "data" && (ee = "[data-%s]"), de?.startsWith("data-") && !de.includes("%s") && (ee = `[${de}="%s"]`), ee.startsWith("."))
          w.classList.remove(...K.map((xe) => ee.substring(1).replace("%s", xe))), w.classList.add(ee.substring(1).replace("%s", ve));
        else {
          const xe = ee.replace("%s", ve).match(/\[([^\]]+)\]/);
          if (xe) {
            const [Te, Zt] = xe[1].split("=");
            Zt || K.forEach((ho) => {
              w.removeAttribute(Te.replace(ve, ho));
            }), w.setAttribute(Te, Zt ? Zt.replace(/"|'/g, "") : "");
          } else
            w.setAttribute(ee, ve);
        }
      }
    }, [ve, Ve, w, K]), q.useEffect(() => {
      let de;
      if (k && Y.current && j) {
        const ee = j.createElement("style");
        ee.appendChild(j.createTextNode(Ui)), j.head.appendChild(ee), window.getComputedStyle(j.body), de = setTimeout(() => {
          j.head.removeChild(ee);
        }, 1);
      }
      return () => {
        clearTimeout(de);
      };
    }, [ve, k, j]), q.useEffect(() => (Y.current = !0, () => {
      Y.current = !1;
    }), []);
    const et = q.useMemo(() => ({
      allColorSchemes: K,
      colorScheme: ve,
      darkColorScheme: Re,
      lightColorScheme: ke,
      mode: Ne,
      setColorScheme: De,
      setMode: process.env.NODE_ENV === "production" ? D : (de) => {
        Ye.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), D(de);
      },
      systemMode: fe
    }), [K, ve, Re, ke, Ne, De, D, fe, Ye.colorSchemeSelector]);
    let _e = !0;
    (l || $.cssVariables === !1 || V && ne?.cssVarPrefix === B) && (_e = !1);
    const X = /* @__PURE__ */ i.jsxs(q.Fragment, {
      children: [/* @__PURE__ */ i.jsx(Et, {
        themeId: E ? t : void 0,
        theme: Ye,
        children: R
      }), _e && /* @__PURE__ */ i.jsx(Cr, {
        styles: Ye.generateStyleSheets?.() || []
      })]
    });
    return V ? X : /* @__PURE__ */ i.jsx(m.Provider, {
      value: et,
      children: X
    });
  }
  process.env.NODE_ENV !== "production" && (b.propTypes = {
    /**
     * The component tree.
     */
    children: H.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: H.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: H.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: H.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: H.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: H.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: H.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: H.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: H.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: H.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: H.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: H.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: H.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: H.object
  });
  const f = typeof s == "string" ? s : s.light, c = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: b,
    useColorScheme: x,
    getInitColorSchemeScript: (v) => Li({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: f,
      defaultDarkColorScheme: c,
      modeStorageKey: n,
      ...v
    })
  };
}
function Wi(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const gn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, zi = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([u, p]) => {
      (!r || r && !r([...a, u])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? n(p, [...a, u], Array.isArray(p) ? [...s, u] : s) : t([...a, u], p, s));
    });
  }
  n(e);
}, Gi = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function cr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return zi(
    e,
    (u, p, m) => {
      if ((typeof p == "string" || typeof p == "number") && (!n || !n(u, p))) {
        const x = `--${r ? `${r}-` : ""}${u.join("-")}`, y = Gi(u, p);
        Object.assign(o, {
          [x]: y
        }), gn(a, u, `var(${x})`, m), gn(s, u, `var(${x}, ${y})`, m);
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
function Yi(e, t = {}) {
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
  } = cr(m, t);
  let b = h;
  const f = {}, {
    [p]: c,
    ...g
  } = s;
  if (Object.entries(g || {}).forEach(([C, S]) => {
    const {
      vars: k,
      css: _,
      varsWithDefaults: N
    } = cr(S, t);
    b = we(b, N), f[C] = {
      css: _,
      vars: k
    };
  }), c) {
    const {
      css: C,
      vars: S,
      varsWithDefaults: k
    } = cr(c, t);
    b = we(b, k), f[p] = {
      css: C,
      vars: S
    };
  }
  function v(C, S) {
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), C) {
      if (k === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${s[C]?.palette?.mode || C})`]: {
            ":root": S
          }
        };
      if (k)
        return e.defaultColorScheme === C ? `:root, ${k.replace("%s", String(C))}` : k.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: b,
    generateThemeVars: () => {
      let C = {
        ...x
      };
      return Object.entries(f).forEach(([, {
        vars: S
      }]) => {
        C = we(C, S);
      }), C;
    },
    generateStyleSheets: () => {
      const C = [], S = e.defaultColorScheme || "light";
      function k(j, w) {
        Object.keys(w).length && C.push(typeof j == "string" ? {
          [j]: {
            ...w
          }
        } : j);
      }
      k(r(void 0, {
        ...y
      }), y);
      const {
        [S]: _,
        ...N
      } = f;
      if (_) {
        const {
          css: j
        } = _, w = s[S]?.palette?.mode, P = !n && w ? {
          colorScheme: w,
          ...j
        } : {
          ...j
        };
        k(r(S, {
          ...P
        }), P);
      }
      return Object.entries(N).forEach(([j, {
        css: w
      }]) => {
        const P = s[j]?.palette?.mode, l = !n && P ? {
          colorScheme: P,
          ...w
        } : {
          ...w
        };
        k(r(j, {
          ...l
        }), l);
      }), a && C.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), C;
    }
  };
}
function Hi(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Tt = {
  black: "#000",
  white: "#fff"
}, Qi = {
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
function no() {
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
const oo = no();
function ao() {
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
const yr = ao();
function bn(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Xt(e.main, o) : t === "dark" && (e.dark = Jt(e.main, a)));
}
function xn(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ji(e = "light") {
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
function Xi(e = "light") {
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
function Zi(e = "light") {
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
function qi(e = "light") {
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
function es(e = "light") {
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
function ts(e = "light") {
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
function rs(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Pr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Ji(t), u = e.secondary || Xi(t), p = e.error || Zi(t), m = e.info || qi(t), x = e.success || es(t), y = e.warning || ts(t);
  function h(g) {
    if (o)
      return rs(g);
    const v = dn(g, yr.text.primary) >= r ? yr.text.primary : oo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = dn(g, v);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${v} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const b = ({
    color: g,
    name: v,
    mainShade: R = 500,
    lightShade: M = 300,
    darkShade: C = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[R] && (g.main = g[R]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : Ke(11, v ? ` (${v})` : "", R));
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
} });` : Ke(12, v ? ` (${v})` : "", JSON.stringify(g.main)));
    return o ? (xn(o, g, "light", M, n), xn(o, g, "dark", C, n)) : (bn(g, "light", M, n), bn(g, "dark", C, n)), g.contrastText || (g.contrastText = h(g.main)), g;
  };
  let f;
  return t === "light" ? f = no() : t === "dark" && (f = ao()), process.env.NODE_ENV !== "production" && (f || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), we({
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
    grey: Qi,
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
function ns(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function os(e, t) {
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
function as(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Sn = {
  textTransform: "uppercase"
}, vn = '"Roboto", "Helvetica", "Arial", sans-serif';
function io(e, t) {
  const {
    fontFamily: r = vn,
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
  const h = n / 14, b = x || ((g) => `${g / p * h}rem`), f = (g, v, R, M, C) => ({
    fontFamily: r,
    fontWeight: g,
    fontSize: b(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === vn ? {
      letterSpacing: `${as(M / v)}em`
    } : {},
    ...C,
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
    button: f(s, 14, 1.75, 0.4, Sn),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Sn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return we({
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
const is = 0.2, ss = 0.14, ls = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${is})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ss})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ls})`].join(",");
}
const cs = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], us = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ds = {
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
function En(e) {
  return `${Math.round(e)}ms`;
}
function fs(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ps(e) {
  const t = {
    ...us,
    ...e.easing
  }, r = {
    ...ds,
    ...e.duration
  };
  return {
    getAutoHeightDuration: fs,
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
      return (Array.isArray(o) ? o : [o]).map((x) => `${x} ${typeof s == "string" ? s : En(s)} ${u} ${typeof p == "string" ? p : En(p)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ms = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function hs(e) {
  return Be(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function so(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, u] = o[a];
      !hs(u) || s.startsWith("unstable_") ? delete n[s] : Be(u) && (n[s] = {
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
function Tn(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const ys = (e) => {
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
function gs(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Zn(t, ys(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Tn(r)})` : Xt(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Tn(r)})` : Jt(t, r);
    }
  });
}
function gr(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Ke(20));
  const y = Pr({
    ...a,
    colorSpace: m
  }), h = Hn(e);
  let b = we(h, {
    mixins: os(h.breakpoints, n),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: cs.slice(),
    typography: io(y, u),
    transitions: ps(s),
    zIndex: {
      ...ms
    }
  });
  if (b = we(b, x), b = t.reduce((f, c) => we(f, c), b), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], c = (g, v) => {
      let R;
      for (R in g) {
        const M = g[R];
        if (f.includes(R) && Object.keys(M).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = vi("", R);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: M
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
    ...Ht,
    ...x?.unstable_sxConfig
  }, b.unstable_sx = function(c) {
    return jt({
      sx: c,
      theme: this
    });
  }, b.toRuntimeSource = so, gs(b), b;
}
function bs(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const xs = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = bs(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function lo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function co(e) {
  return e === "dark" ? xs : [];
}
function Ss(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = Pr({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...lo(s.mode),
      ...r
    },
    overlays: n || co(s.mode),
    ...a
  };
}
function vs(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Es = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ts = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Es(e.cssVarPrefix).forEach((u) => {
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
function Cs(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function T(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function St(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Xn(e);
}
function Me(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = xt(St(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ws(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const $e = (e) => {
  try {
    return e();
  } catch {
  }
}, Os = (e = "mui") => Wi(e);
function ur(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Ss({
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
  } = gr({
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
      ...lo(a),
      ...r?.opacity
    },
    overlays: r?.overlays || co(a)
  }, u;
}
function js(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: u = vs,
    colorSchemeSelector: p = r.light && r.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...x
  } = e, y = Object.keys(r)[0], h = n || (r.light && y !== "light" ? "light" : y), b = Os(a), {
    [h]: f,
    light: c,
    dark: g,
    ...v
  } = r, R = {
    ...v
  };
  let M = f;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (M = !0), !M)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Ke(21, h));
  let C;
  s && (C = "oklch");
  const S = ur(C, R, M, x, h);
  c && !R.light && ur(C, R, c, void 0, "light"), g && !R.dark && ur(C, R, g, void 0, "dark");
  let k = {
    defaultColorScheme: h,
    ...S,
    cssVarPrefix: a,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: b,
    colorSchemes: R,
    font: {
      ...ns(S.typography),
      ...S.font
    },
    spacing: ws(x.spacing)
  };
  Object.keys(k.colorSchemes).forEach((P) => {
    const l = k.colorSchemes[P].palette, I = (G) => {
      const Y = G.split("-"), ne = Y[1], te = Y[2];
      return b(G, l[ne][te]);
    };
    l.mode === "light" && (T(l.common, "background", "#fff"), T(l.common, "onBackground", "#000")), l.mode === "dark" && (T(l.common, "background", "#000"), T(l.common, "onBackground", "#fff"));
    function A(G, Y, ne) {
      if (C) {
        let te;
        return G === He && (te = `transparent ${((1 - ne) * 100).toFixed(0)}%`), G === ie && (te = `#000 ${(ne * 100).toFixed(0)}%`), G === se && (te = `#fff ${(ne * 100).toFixed(0)}%`), `color-mix(in ${C}, ${Y}, ${te})`;
      }
      return G(Y, ne);
    }
    if (Cs(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      T(l.Alert, "errorColor", A(ie, l.error.light, 0.6)), T(l.Alert, "infoColor", A(ie, l.info.light, 0.6)), T(l.Alert, "successColor", A(ie, l.success.light, 0.6)), T(l.Alert, "warningColor", A(ie, l.warning.light, 0.6)), T(l.Alert, "errorFilledBg", I("palette-error-main")), T(l.Alert, "infoFilledBg", I("palette-info-main")), T(l.Alert, "successFilledBg", I("palette-success-main")), T(l.Alert, "warningFilledBg", I("palette-warning-main")), T(l.Alert, "errorFilledColor", $e(() => l.getContrastText(l.error.main))), T(l.Alert, "infoFilledColor", $e(() => l.getContrastText(l.info.main))), T(l.Alert, "successFilledColor", $e(() => l.getContrastText(l.success.main))), T(l.Alert, "warningFilledColor", $e(() => l.getContrastText(l.warning.main))), T(l.Alert, "errorStandardBg", A(se, l.error.light, 0.9)), T(l.Alert, "infoStandardBg", A(se, l.info.light, 0.9)), T(l.Alert, "successStandardBg", A(se, l.success.light, 0.9)), T(l.Alert, "warningStandardBg", A(se, l.warning.light, 0.9)), T(l.Alert, "errorIconColor", I("palette-error-main")), T(l.Alert, "infoIconColor", I("palette-info-main")), T(l.Alert, "successIconColor", I("palette-success-main")), T(l.Alert, "warningIconColor", I("palette-warning-main")), T(l.AppBar, "defaultBg", I("palette-grey-100")), T(l.Avatar, "defaultBg", I("palette-grey-400")), T(l.Button, "inheritContainedBg", I("palette-grey-300")), T(l.Button, "inheritContainedHoverBg", I("palette-grey-A100")), T(l.Chip, "defaultBorder", I("palette-grey-400")), T(l.Chip, "defaultAvatarColor", I("palette-grey-700")), T(l.Chip, "defaultIconColor", I("palette-grey-700")), T(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), T(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), T(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), T(l.LinearProgress, "primaryBg", A(se, l.primary.main, 0.62)), T(l.LinearProgress, "secondaryBg", A(se, l.secondary.main, 0.62)), T(l.LinearProgress, "errorBg", A(se, l.error.main, 0.62)), T(l.LinearProgress, "infoBg", A(se, l.info.main, 0.62)), T(l.LinearProgress, "successBg", A(se, l.success.main, 0.62)), T(l.LinearProgress, "warningBg", A(se, l.warning.main, 0.62)), T(l.Skeleton, "bg", C ? A(He, l.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), T(l.Slider, "primaryTrack", A(se, l.primary.main, 0.62)), T(l.Slider, "secondaryTrack", A(se, l.secondary.main, 0.62)), T(l.Slider, "errorTrack", A(se, l.error.main, 0.62)), T(l.Slider, "infoTrack", A(se, l.info.main, 0.62)), T(l.Slider, "successTrack", A(se, l.success.main, 0.62)), T(l.Slider, "warningTrack", A(se, l.warning.main, 0.62));
      const G = C ? A(ie, l.background.default, 0.6825) : Pt(l.background.default, 0.8);
      T(l.SnackbarContent, "bg", G), T(l.SnackbarContent, "color", $e(() => C ? yr.text.primary : l.getContrastText(G))), T(l.SpeedDialAction, "fabHoverBg", Pt(l.background.paper, 0.15)), T(l.StepConnector, "border", I("palette-grey-400")), T(l.StepContent, "border", I("palette-grey-400")), T(l.Switch, "defaultColor", I("palette-common-white")), T(l.Switch, "defaultDisabledColor", I("palette-grey-100")), T(l.Switch, "primaryDisabledColor", A(se, l.primary.main, 0.62)), T(l.Switch, "secondaryDisabledColor", A(se, l.secondary.main, 0.62)), T(l.Switch, "errorDisabledColor", A(se, l.error.main, 0.62)), T(l.Switch, "infoDisabledColor", A(se, l.info.main, 0.62)), T(l.Switch, "successDisabledColor", A(se, l.success.main, 0.62)), T(l.Switch, "warningDisabledColor", A(se, l.warning.main, 0.62)), T(l.TableCell, "border", A(se, A(He, l.divider, 1), 0.88)), T(l.Tooltip, "bg", A(He, l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      T(l.Alert, "errorColor", A(se, l.error.light, 0.6)), T(l.Alert, "infoColor", A(se, l.info.light, 0.6)), T(l.Alert, "successColor", A(se, l.success.light, 0.6)), T(l.Alert, "warningColor", A(se, l.warning.light, 0.6)), T(l.Alert, "errorFilledBg", I("palette-error-dark")), T(l.Alert, "infoFilledBg", I("palette-info-dark")), T(l.Alert, "successFilledBg", I("palette-success-dark")), T(l.Alert, "warningFilledBg", I("palette-warning-dark")), T(l.Alert, "errorFilledColor", $e(() => l.getContrastText(l.error.dark))), T(l.Alert, "infoFilledColor", $e(() => l.getContrastText(l.info.dark))), T(l.Alert, "successFilledColor", $e(() => l.getContrastText(l.success.dark))), T(l.Alert, "warningFilledColor", $e(() => l.getContrastText(l.warning.dark))), T(l.Alert, "errorStandardBg", A(ie, l.error.light, 0.9)), T(l.Alert, "infoStandardBg", A(ie, l.info.light, 0.9)), T(l.Alert, "successStandardBg", A(ie, l.success.light, 0.9)), T(l.Alert, "warningStandardBg", A(ie, l.warning.light, 0.9)), T(l.Alert, "errorIconColor", I("palette-error-main")), T(l.Alert, "infoIconColor", I("palette-info-main")), T(l.Alert, "successIconColor", I("palette-success-main")), T(l.Alert, "warningIconColor", I("palette-warning-main")), T(l.AppBar, "defaultBg", I("palette-grey-900")), T(l.AppBar, "darkBg", I("palette-background-paper")), T(l.AppBar, "darkColor", I("palette-text-primary")), T(l.Avatar, "defaultBg", I("palette-grey-600")), T(l.Button, "inheritContainedBg", I("palette-grey-800")), T(l.Button, "inheritContainedHoverBg", I("palette-grey-700")), T(l.Chip, "defaultBorder", I("palette-grey-700")), T(l.Chip, "defaultAvatarColor", I("palette-grey-300")), T(l.Chip, "defaultIconColor", I("palette-grey-300")), T(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), T(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), T(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), T(l.LinearProgress, "primaryBg", A(ie, l.primary.main, 0.5)), T(l.LinearProgress, "secondaryBg", A(ie, l.secondary.main, 0.5)), T(l.LinearProgress, "errorBg", A(ie, l.error.main, 0.5)), T(l.LinearProgress, "infoBg", A(ie, l.info.main, 0.5)), T(l.LinearProgress, "successBg", A(ie, l.success.main, 0.5)), T(l.LinearProgress, "warningBg", A(ie, l.warning.main, 0.5)), T(l.Skeleton, "bg", C ? A(He, l.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), T(l.Slider, "primaryTrack", A(ie, l.primary.main, 0.5)), T(l.Slider, "secondaryTrack", A(ie, l.secondary.main, 0.5)), T(l.Slider, "errorTrack", A(ie, l.error.main, 0.5)), T(l.Slider, "infoTrack", A(ie, l.info.main, 0.5)), T(l.Slider, "successTrack", A(ie, l.success.main, 0.5)), T(l.Slider, "warningTrack", A(ie, l.warning.main, 0.5));
      const G = C ? A(se, l.background.default, 0.985) : Pt(l.background.default, 0.98);
      T(l.SnackbarContent, "bg", G), T(l.SnackbarContent, "color", $e(() => C ? oo.text.primary : l.getContrastText(G))), T(l.SpeedDialAction, "fabHoverBg", Pt(l.background.paper, 0.15)), T(l.StepConnector, "border", I("palette-grey-600")), T(l.StepContent, "border", I("palette-grey-600")), T(l.Switch, "defaultColor", I("palette-grey-300")), T(l.Switch, "defaultDisabledColor", I("palette-grey-600")), T(l.Switch, "primaryDisabledColor", A(ie, l.primary.main, 0.55)), T(l.Switch, "secondaryDisabledColor", A(ie, l.secondary.main, 0.55)), T(l.Switch, "errorDisabledColor", A(ie, l.error.main, 0.55)), T(l.Switch, "infoDisabledColor", A(ie, l.info.main, 0.55)), T(l.Switch, "successDisabledColor", A(ie, l.success.main, 0.55)), T(l.Switch, "warningDisabledColor", A(ie, l.warning.main, 0.55)), T(l.TableCell, "border", A(ie, A(He, l.divider, 1), 0.68)), T(l.Tooltip, "bg", A(He, l.grey[700], 0.92));
    }
    Me(l.background, "default"), Me(l.background, "paper"), Me(l.common, "background"), Me(l.common, "onBackground"), Me(l, "divider"), Object.keys(l).forEach((G) => {
      const Y = l[G];
      G !== "tonalOffset" && Y && typeof Y == "object" && (Y.main && T(l[G], "mainChannel", xt(St(Y.main))), Y.light && T(l[G], "lightChannel", xt(St(Y.light))), Y.dark && T(l[G], "darkChannel", xt(St(Y.dark))), Y.contrastText && T(l[G], "contrastTextChannel", xt(St(Y.contrastText))), G === "text" && (Me(l[G], "primary"), Me(l[G], "secondary")), G === "action" && (Y.active && Me(l[G], "active"), Y.selected && Me(l[G], "selected")));
    });
  }), k = t.reduce((P, l) => we(P, l), k);
  const _ = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: u,
    getSelector: Ts(k),
    enableContrastVars: s
  }, {
    vars: N,
    generateThemeVars: j,
    generateStyleSheets: w
  } = Yi(k, _);
  return k.vars = N, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([P, l]) => {
    k[P] = l;
  }), k.generateThemeVars = j, k.generateStyleSheets = w, k.generateSpacing = function() {
    return Yn(x.spacing, wr(this));
  }, k.getColorSchemeSelector = Hi(p), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = u, k.unstable_sxConfig = {
    ...Ht,
    ...x?.unstable_sxConfig
  }, k.unstable_sx = function(l) {
    return jt({
      sx: l,
      theme: this
    });
  }, k.toRuntimeSource = so, k;
}
function Cn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Pr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Rs(e = {}, ...t) {
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
      return gr(e, ...t);
    let x = r;
    "palette" in e || m[u] && (m[u] !== !0 ? x = m[u].palette : u === "dark" && (x = {
      mode: "dark"
    }));
    const y = gr({
      ...e,
      palette: x
    }, ...t);
    return y.defaultColorScheme = u, y.colorSchemes = m, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...m.light !== !0 && m.light,
      palette: y.palette
    }, Cn(y, "dark", m.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...m.dark !== !0 && m.dark,
      palette: y.palette
    }, Cn(y, "light", m.light)), y;
  }
  return !r && !("light" in m) && u === "light" && (m.light = !0), js({
    ...s,
    colorSchemes: m,
    defaultColorScheme: u,
    ...typeof n != "boolean" && n
  }, ...t);
}
function As({
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
const It = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (H.string, H.string, H.string, H.string, H.string, H.oneOf(["dark", "light", "system"]), H.string, H.string);
const {
  CssVarsProvider: ks
} = Ki({
  themeId: ct,
  // @ts-ignore ignore module augmentation tests
  theme: () => Rs({
    cssVariables: !0
  }),
  colorSchemeStorageKey: It.colorSchemeStorageKey,
  modeStorageKey: It.modeStorageKey,
  defaultColorScheme: {
    light: It.defaultLightColorScheme,
    dark: It.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: io(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return jt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), _s = ks;
function $s({
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
  return r ? /* @__PURE__ */ i.jsx(As, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ i.jsx(_s, {
    theme: e,
    ...t
  });
}
const wn = "/lookup", Nt = /* @__PURE__ */ new Map();
let ht = null;
const Ps = typeof window < "u";
function uo() {
  if (!Ps)
    return null;
  if (ht)
    return ht;
  try {
    ht = So.createInstance({
      name: "react-questionnaire-renderer",
      storeName: "lookup-cache"
    });
  } catch (e) {
    console.warn("[lookup-cache] Failed to create localforage instance:", e), ht = null;
  }
  return ht;
}
function Is(e = {}) {
  if (!e || typeof e != "object")
    return "unknown::latest";
  const t = e.cacheKey || e.id || e.tableName || e.value || "lookup", r = e.version || "latest";
  return `${t}::${r}`;
}
async function Ns(e) {
  if (!e) return null;
  if (Nt.has(e))
    return Nt.get(e);
  const t = uo();
  if (!t) return null;
  try {
    const r = await t.getItem(e);
    if (r)
      return Nt.set(e, r), r;
  } catch (r) {
    console.warn("[lookup-cache] Failed to read cache:", e, r);
  }
  return null;
}
async function Ms(e, t) {
  if (e)
    try {
      Nt.set(e, t);
      const r = uo();
      r && await r.setItem(e, t);
    } catch (r) {
      console.warn("[lookup-cache] Failed to persist cache:", e, r);
    }
}
function On(e) {
  return e ? Array.isArray(e) ? e : e.data && Array.isArray(e.data) ? e.data : e.items && Array.isArray(e.items) ? e.items : [] : [];
}
function Ls(e) {
  return e ? String(e).replace(/^\/+/, "").replace(/\.json$/i, "") : "";
}
function Ds(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}
function Vs(e = {}, t = {}) {
  if (!e || typeof e != "object") return null;
  if (typeof t.resolveLookupUrl == "function") {
    const p = t.resolveLookupUrl(e, t);
    if (p) return p;
  }
  if (e.url)
    return e.url;
  const r = t.lookupBaseUrl ?? wn, n = Ds(r || wn), o = e.fileName || e.id || e.tableName || e.cacheKey;
  if (!o) return null;
  const a = Ls(o), s = e.fileName?.endsWith(".json") ? e.fileName : `${a}.json`;
  return /^https?:/i.test(s) ? s : /^https?:/i.test(n) ? `${n}/${s}` : `${n.startsWith("/") ? n : `/${n}`}/${s}`.replace(/([^:]\/)(\/+)/g, "$1");
}
async function Bs(e) {
  if (typeof fetch != "function")
    throw new Error("Global fetch is not available. Provide lookupClient or polyfill fetch.");
  const t = await fetch(e);
  if (!t.ok) {
    const r = `[lookup] Request failed: ${t.status} ${t.statusText}`;
    throw new Error(r);
  }
  return t.json();
}
async function Fs(e = {}, t = {}) {
  const r = Vs(e, t);
  if (!r)
    throw new Error("Unable to resolve lookup URL from source definition");
  if (t.lookupClient && typeof t.lookupClient.get == "function") {
    const o = await t.lookupClient.get(r, e.requestConfig || {});
    return On(o && o.data !== void 0 ? o.data : o);
  }
  const n = await Bs(r);
  return On(n);
}
function jn(e, t) {
  return e === t ? !0 : e == null || t == null ? !1 : String(e) === String(t);
}
const fo = yo(), Z = {
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
}, Rn = typeof navigator < "u" ? navigator : void 0, dr = (e) => {
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
}, Us = {
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
  isOnline: Rn ? Rn.onLine : !0,
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
function Ks(e, t) {
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
      const r = dr(t.payload || {});
      return {
        ...e,
        initialResponses: r,
        responses: dr(t.payload || {}),
        isDirty: !1
      };
    }
    case Z.RESET_RESPONSES:
      return {
        ...e,
        responses: dr(e.initialResponses || {}),
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
function Ws({ children: e }) {
  const [t, r] = go(Ks, Us), n = Pe(/* @__PURE__ */ new Map());
  me(() => {
    if (typeof window > "u")
      return;
    const S = () => r({ type: Z.SET_OFFLINE, payload: !1 }), k = () => r({ type: Z.SET_OFFLINE, payload: !0 });
    return window.addEventListener("online", S), window.addEventListener("offline", k), () => {
      window.removeEventListener("online", S), window.removeEventListener("offline", k);
    };
  }, []);
  const o = re((S) => {
    r({ type: Z.SET_QUESTIONNAIRE, payload: S });
  }, []), a = re((S) => {
    r({ type: Z.SET_VALIDATION, payload: S });
  }, []), s = re((S) => {
    r({ type: Z.SET_CURRENT_PAGE, payload: S });
  }, []), u = re((S, k, _ = null) => {
    const N = _ !== null ? `${S}#${_}` : S;
    r({
      type: Z.SET_RESPONSE,
      payload: { dataKey: N, value: k }
    });
  }, []), p = re((S, k, _ = null) => {
    const N = _ !== null ? `${S}#${_}` : S;
    r({
      type: Z.SET_VARIABLE,
      payload: { dataKey: N, value: k }
    });
  }, []), m = re((S, k) => {
    r({ type: Z.SET_ERROR, payload: { dataKey: S, error: k } });
  }, []), x = re((S) => {
    r({ type: Z.CLEAR_ERROR, payload: { dataKey: S } });
  }, []), y = re((S) => {
    r({ type: Z.SET_TOUCHED, payload: { dataKey: S } });
  }, []), h = re((S) => {
    r({ type: Z.SET_LOADING, payload: S });
  }, []), b = re((S, k) => {
    r({
      type: Z.LOAD_QUESTIONNAIRE,
      payload: { questionnaire: S, validation: k }
    });
  }, []), f = re((S) => {
    r({ type: Z.SET_INITIAL_RESPONSES, payload: S });
  }, []), c = re(() => {
    r({ type: Z.RESET_RESPONSES });
  }, []), g = re((S) => {
    r({ type: Z.SET_ERRORS, payload: S });
  }, []), v = re((S) => {
    r({ type: Z.SET_RUNTIME_METHODS, payload: S });
  }, []), R = re((S) => {
    r({ type: Z.SET_CONFIG, payload: S });
  }, []), M = re(async (S = {}) => {
    const k = Is(S), _ = t.lookupCache[k];
    if (_ && Array.isArray(_.data))
      return _.data;
    const N = n.current.get(k);
    if (N)
      return N;
    const j = (async () => {
      try {
        const w = await Ns(k);
        if (w && Array.isArray(w.data))
          return r({
            type: Z.SET_LOOKUP_ENTRY,
            payload: { key: k, entry: w }
          }), w.data;
        r({
          type: Z.SET_LOOKUP_STATUS,
          payload: { key: k, status: "loading", error: null }
        });
        const P = await Fs(S, t.config), l = {
          data: P,
          version: S.version || null,
          fetchedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        return r({
          type: Z.SET_LOOKUP_ENTRY,
          payload: { key: k, entry: l }
        }), await Ms(k, l), P;
      } catch (w) {
        const P = w && w.message ? w.message : String(w);
        throw r({
          type: Z.SET_LOOKUP_STATUS,
          payload: { key: k, status: "error", error: P }
        }), w;
      } finally {
        n.current.delete(k);
      }
    })();
    return n.current.set(k, j), j;
  }, [t.lookupCache, t.config, r]), C = {
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
    ensureLookupDataset: M
  };
  return /* @__PURE__ */ i.jsx(fo.Provider, { value: C, children: e });
}
function Ie() {
  const e = bo(fo);
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
function Qe(e, t = {}, r = {}, n = null) {
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
      Qe._lastErrors = Qe._lastErrors || /* @__PURE__ */ new Map();
      const a = Qe._lastErrors.get(e), s = o && o.message ? o.message : String(o);
      a !== s && (console.error("Error evaluating expression:", e, o), Qe._lastErrors.set(e, s));
    } catch {
      console.error("Error evaluating expression (fallback):", e, o);
    }
    return;
  }
}
function zs(e, t = {}, r = {}, n = null) {
  if (!e.enableCondition) return !0;
  try {
    return Qe(e.enableCondition, t, r, n);
  } catch (o) {
    return console.error("Error evaluating enable condition:", o), !1;
  }
}
function Gs(e, t = {}, r = {}, n = null) {
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
        !Qe(h.test, r, n) || s.push(h.message);
      } catch (b) {
        console.error("Error evaluating validation rule:", b);
      }
  return s;
}
const Ys = ({ question: e }) => /* @__PURE__ */ i.jsx(Q, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Je, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { variant: "h6", children: [
    "Section: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Section components need nested question rendering - coming soon!" })
] }) }), Hs = ({ question: e, responses: t = {}, variables: r = {}, validation: n = [] }) => {
  const { errors: o, setVariable: a } = Ie(), s = Se(() => {
    if (!e?.sourceQuestion) return [];
    const v = Rt(e.sourceQuestion, t, r) || [];
    return Array.isArray(v) ? v : [];
  }, [e, t, r]), [u, p] = ue("list"), [m, x] = ue(0), y = (v) => {
    x(v), p("detail");
  }, h = () => p("list"), b = () => x((v) => Math.max(0, v - 1)), f = () => x((v) => Math.min(s.length - 1, v + 1)), c = s[m], g = c?.value ?? m + 1;
  return me(() => {
    if (u === "detail" && c) {
      const v = e?.dataKey || "art_nested";
      a(v, c, g);
    }
  }, [u, c, g, e, a]), u === "list" ? /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(U, { variant: "subtitle1", sx: { mb: 1 }, children: e.label || e.title || "Roster" }),
    s.length > 0 && /* @__PURE__ */ i.jsx(xr, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: s.map((v, R) => /* @__PURE__ */ i.jsx(Sr, { divider: !0, secondaryAction: /* @__PURE__ */ i.jsx(Ee, { variant: "outlined", size: "small", onClick: () => y(R), "aria-label": "view-row", children: /* @__PURE__ */ i.jsx(Mo, { fontSize: "small" }) }), children: /* @__PURE__ */ i.jsx(vr, { primary: v.label ?? `Row ${v.value ?? R + 1}` }) }, v.value ?? R)) })
  ] }) : /* @__PURE__ */ i.jsxs(st, { variant: "outlined", sx: { p: 2 }, children: [
    /* @__PURE__ */ i.jsxs(Nr, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: { mb: 1 }, children: [
      /* @__PURE__ */ i.jsxs(U, { variant: "subtitle1", children: [
        e.label,
        " — ",
        c?.label
      ] }),
      /* @__PURE__ */ i.jsx(Ee, { size: "small", onClick: h, "aria-label": "back-to-list", children: /* @__PURE__ */ i.jsx(Lo, { fontSize: "small" }) })
    ] }),
    /* @__PURE__ */ i.jsx(Mr, { sx: { mb: 2 } }),
    e.components?.[0]?.map((v, R) => /* @__PURE__ */ i.jsx(Q, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Ir,
      {
        question: v,
        responses: t,
        variables: r,
        errors: o,
        validation: n,
        rowIndex: g
      }
    ) }, v.dataKey || R)),
    /* @__PURE__ */ i.jsx(Mr, { sx: { my: 2 } }),
    /* @__PURE__ */ i.jsxs(Nr, { direction: "row", spacing: 1, justifyContent: "space-between", children: [
      /* @__PURE__ */ i.jsx(
        Ee,
        {
          variant: "contained",
          disabled: m === 0,
          onClick: b,
          "aria-label": "previous-row",
          children: /* @__PURE__ */ i.jsx(Do, { fontSize: "small" })
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ee,
        {
          variant: "contained",
          disabled: m >= s.length - 1,
          onClick: f,
          "aria-label": "next-row",
          children: /* @__PURE__ */ i.jsx(Vo, { fontSize: "small" })
        }
      )
    ] })
  ] });
}, Qs = ({ question: e }) => {
  const t = e.html || e.content || e.label || e.instructions || "";
  if (t.includes("background-color") && (t.includes("#6467f2") || t.includes("grey"))) {
    const n = t.match(/>([^<]+)</), o = n ? n[1].replace(/<[^>]*>/g, "") : "", a = t.includes("background-color: grey") || t.includes("PEMUTAKHIRAN DATA TUNGGAL"), s = t.includes("#6467f2");
    return /* @__PURE__ */ i.jsx(Q, { sx: { mb: 3 }, children: /* @__PURE__ */ i.jsx(
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
  return /* @__PURE__ */ i.jsx(Q, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
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
}, Js = ({ question: e, value: t }) => {
  if (e.render === !1) return null;
  const r = t != null ? String(t) : "", n = Number(e.renderType) === 2;
  return /* @__PURE__ */ i.jsx(Q, { sx: { mb: 1 }, children: n ? /* @__PURE__ */ i.jsx(U, { variant: "body1", children: r }) : /* @__PURE__ */ i.jsx(U, { variant: "subtitle2", color: "text.primary", children: r }) });
}, Ze = ({ error: e, isRequired: t, hasValue: r, customMessage: n, isTouched: o = !1 }) => {
  if (!(e || t && !r && o)) return null;
  const s = e || n || "This field is required";
  return /* @__PURE__ */ i.jsxs(Q, { sx: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "error.main",
    mt: 1
  }, children: [
    /* @__PURE__ */ i.jsx(Bo, { fontSize: "small" }),
    /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "error", children: s })
  ] });
}, fr = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = Ie(), [y, h] = ue(t);
  me(() => {
    h(t);
  }, [t]);
  const b = (C) => {
    const S = C.target.value;
    h(S), r(S);
  }, f = () => {
    p(e.dataKey);
    const C = dt(e, y, a, s, u, m);
    C.length > 0 ? x(e.dataKey, C[0]) : x(e.dataKey, null);
  }, c = (C) => {
    if (!C) return { main: "", help: "" };
    if (C.includes('<br><small><i><font color="#007bff">')) {
      const k = C.split('<br><small><i><font color="#007bff">'), _ = k[0].replace(/<[^>]*>/g, ""), N = k[1]?.replace(/<\/font><\/i><\/small>/g, "").replace(/<[^>]*>/g, "") || "";
      return { main: _, help: N };
    }
    return { main: C.replace(/<[^>]*>/g, ""), help: "" };
  }, { main: g, help: v } = c(e.label || e.title), R = () => e.mask === "integer" || e.mask === "decimal" ? "number" : e.title?.toLowerCase().includes("email") ? "email" : e.title?.toLowerCase().includes("phone") ? "tel" : "text", M = () => {
    const C = {};
    return e.mask === "integer" ? (C.step = 1, C.inputMode = "numeric") : e.mask === "decimal" && (C.step = "any", C.inputMode = "decimal"), e.maxLength && (C.maxLength = e.maxLength), C;
  };
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
        inputProps: M(),
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
      Ze,
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
}, Xs = ({
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
  return /* @__PURE__ */ i.jsx(Q, { sx: { width: "100%", mb: 2 }, children: /* @__PURE__ */ i.jsxs(Ct, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ i.jsxs(Pn, { component: "legend", sx: { mb: 1, color: "text.primary", fontSize: "16px" }, children: [
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
      vo,
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
          In,
          {
            value: f.value,
            control: /* @__PURE__ */ i.jsx(Eo, { size: "medium" }),
            label: /* @__PURE__ */ i.jsxs(Q, { children: [
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
    n && /* @__PURE__ */ i.jsx(Xe, { children: n })
  ] }) });
}, An = "__lookup-loading__", Zs = (e) => Array.isArray(e) ? e.map((t) => t && typeof t == "object" && "value" in t ? t.value : t).filter((t) => t != null) : e && typeof e == "object" && "value" in e ? e.value !== void 0 ? [e.value] : [] : e == null ? [] : [e], qs = ({
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
  } = Ie(), [h, b] = ue([]), [f, c] = ue(!1), [g, v] = ue(null), [R, M] = ue(() => {
    const V = e.sourceSelect;
    return !Array.isArray(V) || V.length === 0;
  }), C = (V) => {
    const d = V.target.value;
    if (d === "") {
      r(null);
      return;
    }
    if (d === An)
      return;
    const E = I.find((O) => O.optionKey === d), $ = E ? [{
      value: E.value,
      label: E.label,
      meta: {
        sourceId: E.sourceId,
        row: E.row
      }
    }] : null;
    r($);
  }, S = () => {
    p(e.dataKey);
    const V = dt(e, t, a, s, u, m);
    V.length > 0 ? x(e.dataKey, V[0]) : x(e.dataKey, null);
  }, k = (V) => {
    if (!V) return { mainLabel: "", helpText: "" };
    let d = V.replace(/<[^>]*>/g, "").trim(), E = "";
    const $ = V.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return $ && (E = $[1], d = V.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: d, helpText: E };
  }, _ = Se(() => e.answers && Array.isArray(e.answers) ? e.answers : e.options && Array.isArray(e.options) ? e.options : e.categorical && Array.isArray(e.categorical) ? e.categorical.map((V) => ({
    value: V.value || V.id,
    text: V.text || V.title || V.label,
    description: V.description
  })) : [], [e.answers, e.options, e.categorical]), N = Se(
    () => Array.isArray(e.sourceSelect) ? e.sourceSelect : [],
    [e.sourceSelect]
  ), j = N.length > 0, w = Se(
    () => j ? JSON.stringify(N) : "",
    [N, j]
  );
  me(() => {
    let V = !0;
    return !j || typeof y != "function" ? (b([]), c(!1), v(null), M(!0), () => {
      V = !1;
    }) : (M(!1), (async () => {
      c(!0), v(null);
      try {
        const E = await Promise.all(
          N.map(($) => y($))
        );
        if (!V) return;
        b(E.map(($) => Array.isArray($) ? $ : [])), M(!0);
      } catch (E) {
        if (!V) return;
        const $ = E && E.message ? E.message : "Failed to load lookup data";
        v($), b([]), M(!0);
      } finally {
        V && c(!1);
      }
    })(), () => {
      V = !1;
    });
  }, [y, w, j, N]);
  const P = Se(() => j ? N.flatMap((V, d) => {
    const E = h[d] || [], $ = V.parentCondition || [], O = $.length === 0 ? E : E.filter((B) => $.every((F) => {
      const K = B?.[F.key], W = typeof F.value == "string" ? Rt(F.value, a, s) : F.value, J = Zs(W);
      return J.length ? J.some((z) => jn(K, z)) : !1;
    })), L = V.id || V.tableName || `lookup-${d}`;
    return O.map((B) => {
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
  }) : [], [N, h, a, s, j]), l = Se(() => _.map((V) => {
    const d = V.value ?? V.id ?? V.code ?? V.text ?? "";
    return {
      optionKey: `static:${d ?? ""}`,
      value: d,
      label: V.text || V.label || V.title || String(d ?? ""),
      description: V.description
    };
  }), [_]), I = Se(() => j ? P : l, [j, P, l]), A = Se(() => {
    if (!Array.isArray(t) || t.length === 0)
      return "";
    const V = t[0], d = V && typeof V == "object" ? V.value ?? V : V, E = I.find(($) => jn($.value, d));
    return E ? E.optionKey : "";
  }, [t, I]);
  me(() => {
    j && R && (!Array.isArray(t) || t.length === 0 || (I.length === 0 || !A) && r(null));
  }, [j, R, I, A, t, r]);
  const G = `select-${e.variable}-label`, Y = e.label || e.title || e.name || "", { mainLabel: ne, helpText: te } = k(Y);
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
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
      /* @__PURE__ */ i.jsx(Nn, { id: G, required: e.required, children: ne || e.title }),
      /* @__PURE__ */ i.jsxs(
        Mn,
        {
          labelId: G,
          value: A,
          onChange: C,
          onBlur: S,
          label: ne || e.title,
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
            f && /* @__PURE__ */ i.jsx(bt, { disabled: !0, value: An, children: /* @__PURE__ */ i.jsx("em", { children: "Loading options..." }) }),
            !f && I.map((V) => /* @__PURE__ */ i.jsx(bt, { value: V.optionKey, children: /* @__PURE__ */ i.jsxs(Q, { children: [
              /* @__PURE__ */ i.jsx(U, { variant: "body1", children: V.label }),
              V.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: V.description })
            ] }) }, V.optionKey)),
            !f && j && !I.length && !g && /* @__PURE__ */ i.jsx(bt, { disabled: !0, value: "__no-data__", children: /* @__PURE__ */ i.jsx("em", { children: "No options available" }) })
          ]
        }
      ),
      te && /* @__PURE__ */ i.jsx(Xe, { sx: { color: "#007bff", fontStyle: "italic" }, children: te }),
      g && /* @__PURE__ */ i.jsx(Xe, { error: !0, children: g })
    ] }),
    /* @__PURE__ */ i.jsx(
      Ze,
      {
        error: n,
        isRequired: e.required,
        hasValue: Array.isArray(t) && t.length > 0,
        isTouched: m[e.dataKey]
      }
    )
  ] });
}, el = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = Ie(), y = (v) => {
    const R = v.target.value, M = R === "" ? "" : Number(R);
    r(M);
  }, h = () => {
    p(e.dataKey);
    const v = dt(e, t, a, s, u, m);
    v.length > 0 ? x(e.dataKey, v[0]) : x(e.dataKey, null);
  }, b = (v) => {
    if (!v) return { mainLabel: "", helpText: "" };
    let R = v.replace(/<[^>]*>/g, "").trim(), M = "";
    const C = v.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return C && (M = C[1], R = v.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: R, helpText: M };
  }, f = e.label || e.title || e.name || "", { mainLabel: c, helpText: g } = b(f);
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
      Ze,
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
  return /* @__PURE__ */ i.jsx(Q, { sx: { width: "100%" }, children: /* @__PURE__ */ i.jsxs(Ct, { component: "fieldset", fullWidth: !0, error: !!n, disabled: o, children: [
    /* @__PURE__ */ i.jsxs(Pn, { component: "legend", sx: { mb: 2, color: "text.primary" }, children: [
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
      To,
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
          In,
          {
            control: /* @__PURE__ */ i.jsx(
              Co,
              {
                checked: m.some((f) => f.value == b.value),
                onChange: a(b.value),
                size: "medium"
              }
            ),
            label: /* @__PURE__ */ i.jsxs(Q, { children: [
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
    n && /* @__PURE__ */ i.jsx(Xe, { children: n }),
    e.maxSelections && /* @__PURE__ */ i.jsxs(U, { variant: "caption", color: "text.secondary", sx: { mt: 1 }, children: [
      "Maximum ",
      e.maxSelections,
      " selections allowed"
    ] })
  ] }) });
}, tl = ({
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
}, rl = ({
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
  Fe.useEffect(() => {
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
}, nl = ({
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
}, ol = ({ question: e }) => /* @__PURE__ */ i.jsx(Q, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Je, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { children: [
    "Toggle: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Toggle component coming soon" })
] }) }), al = ({ question: e }) => /* @__PURE__ */ i.jsx(Q, { sx: { p: 2, border: "1px dashed", borderColor: "divider", borderRadius: 1 }, children: /* @__PURE__ */ i.jsxs(Je, { severity: "info", children: [
  /* @__PURE__ */ i.jsxs(U, { children: [
    "Range Slider: ",
    e.label || e.title
  ] }),
  /* @__PURE__ */ i.jsx(U, { variant: "body2", children: "Range slider component coming soon" })
] }) }), il = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const a = (c) => {
    const v = c.target.value.map((R) => {
      const M = p.find((C) => C.value == R);
      return M ? {
        value: M.value,
        label: M.text || M.label
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
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
      /* @__PURE__ */ i.jsx(Nn, { id: y, required: e.required, children: b || e.title }),
      /* @__PURE__ */ i.jsx(
        Mn,
        {
          labelId: y,
          multiple: !0,
          value: x,
          onChange: a,
          input: /* @__PURE__ */ i.jsx(wo, { label: b || e.title }),
          renderValue: (c) => /* @__PURE__ */ i.jsx(Q, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: c.map((g) => {
            const v = m.find((R) => R.value == g);
            return /* @__PURE__ */ i.jsx(
              Er,
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
          children: p.map((c) => /* @__PURE__ */ i.jsx(bt, { value: c.value, children: /* @__PURE__ */ i.jsxs(Q, { children: [
            /* @__PURE__ */ i.jsx(U, { variant: "body1", children: c.text || c.label }),
            c.description && /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: c.description })
          ] }) }, c.value))
        }
      ),
      f && /* @__PURE__ */ i.jsx(Xe, { sx: { color: "#007bff", fontStyle: "italic" }, children: f }),
      n && /* @__PURE__ */ i.jsx(Xe, { error: !0, children: n })
    ] })
  ] });
}, sl = ({
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
}, ll = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = Ie(), [y, h] = ue(""), [b, f] = ue(""), c = re((_) => {
    if (!_ || _ === "")
      return "";
    const N = String(_).replace(/[^\d.]/g, ""), j = parseFloat(N) || 0;
    return new Intl.NumberFormat(e.separatorFormat, {
      style: "currency",
      currency: e.currency || "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(j);
  }, [e.separatorFormat, e.currency]), g = (_) => {
    if (!_ || _ === "")
      return "";
    const N = _.replace(/[^\d]/g, "");
    return N === "" ? "" : parseInt(N, 10);
  };
  me(() => {
    if (t !== y) {
      h(t);
      const _ = c(t);
      f(_);
    }
  }, [t, y, c]);
  const v = (_) => {
    const N = _.target.value;
    if (N === "") {
      f(""), h(""), r("");
      return;
    }
    const j = N.replace(/[^\d.]/g, ""), w = g(j);
    h(w);
    const P = c(w);
    f(P), r(w);
  }, R = () => {
    p(e.dataKey);
    const _ = dt(e, y, a, s, u, m);
    _.length > 0 ? x(e.dataKey, _[0]) : x(e.dataKey, null);
  }, M = (_) => {
    if (!_) return { mainLabel: "", helpText: "" };
    let N = _.replace(/<[^>]*>/g, "").trim(), j = "";
    const w = _.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return w && (j = w[1], N = _.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: N, helpText: j };
  }, C = e.label || e.title || e.name || "", { mainLabel: S, helpText: k } = M(C);
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%" }, children: [
    /* @__PURE__ */ i.jsx(
      Ae,
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
      Ze,
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
}, _n = ({
  question: e,
  value: t = [],
  onChange: r,
  error: n,
  disabled: o = !1,
  selectMode: a = !1
}) => {
  const [s, u] = ue(""), p = () => {
    if (s.trim()) {
      const g = Array.isArray(t) ? t : [], R = {
        value: g.length > 0 ? Math.max(...g.map((M) => M.value)) + 1 : 1,
        label: s.trim()
      };
      r([...g, R]), u("");
    }
  }, m = (g) => {
    const R = (Array.isArray(t) ? t : []).filter((M) => M.value !== g);
    r(R);
  }, x = (g) => {
    g.key === "Enter" && p();
  }, y = (g) => {
    if (!g) return { mainLabel: "", helpText: "" };
    let v = g.replace(/<[^>]*>/g, "").trim(), R = "";
    const M = g.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return M && (R = M[1], v = g.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: v, helpText: R };
  }, h = Array.isArray(t) ? t : [], b = e.label || e.title || e.name || "", { mainLabel: f, helpText: c } = y(b);
  return /* @__PURE__ */ i.jsx(Q, { sx: { width: "100%" }, children: /* @__PURE__ */ i.jsxs(Ct, { fullWidth: !0, error: !!n, disabled: o, children: [
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
    /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 1, mb: 2 }, children: [
      /* @__PURE__ */ i.jsx(
        Ae,
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
        Ee,
        {
          variant: "contained",
          onClick: p,
          disabled: !s.trim() || o,
          startIcon: /* @__PURE__ */ i.jsx(Fo, {}),
          children: "Add"
        }
      )
    ] }),
    h.length > 0 && /* @__PURE__ */ i.jsx(xr, { dense: !0, sx: { bgcolor: "background.paper", borderRadius: 1, border: "1px solid", borderColor: "divider" }, children: h.map((g) => /* @__PURE__ */ i.jsxs(Sr, { divider: !0, children: [
      /* @__PURE__ */ i.jsx(
        vr,
        {
          primary: g.label,
          secondary: `Value: ${g.value}`
        }
      ),
      /* @__PURE__ */ i.jsx(Oo, { children: /* @__PURE__ */ i.jsx(
        lt,
        {
          edge: "end",
          onClick: () => m(g.value),
          disabled: o,
          color: "error",
          size: "small",
          children: /* @__PURE__ */ i.jsx(Dn, {})
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
    n && /* @__PURE__ */ i.jsx(Xe, { error: !0, children: n })
  ] }) });
}, cl = ({
  question: e,
  value: t,
  onChange: r,
  error: n
}) => {
  const o = Pe(null), a = Pe(r), s = Pe(null), [u, p] = ue(null), [m, x] = ue(null), [y, h] = ue(!1), [b, f] = ue(""), [c, g] = ue(null), [v, R] = ue(!1), [M, C] = ue("");
  me(() => {
    a.current = r;
  }, [r]);
  const S = (j, w, P, l) => {
    const A = (P - j) * Math.PI / 180, G = (l - w) * Math.PI / 180, Y = Math.sin(A / 2) * Math.sin(A / 2) + Math.cos(j * Math.PI / 180) * Math.cos(P * Math.PI / 180) * Math.sin(G / 2) * Math.sin(G / 2);
    return 6371e3 * (2 * Math.atan2(Math.sqrt(Y), Math.sqrt(1 - Y)));
  };
  me(() => {
    if (t && typeof t == "string")
      try {
        const j = JSON.parse(t);
        j.latitude && j.longitude && (g(j), s.current || (s.current = j));
      } catch {
        const j = t.split(",");
        if (j.length === 2) {
          const w = parseFloat(j[0].trim()), P = parseFloat(j[1].trim());
          if (!isNaN(w) && !isNaN(P)) {
            const l = { latitude: w, longitude: P };
            g(l), s.current || (s.current = l);
          }
        }
      }
  }, [t]), me(() => {
    (() => {
      if (!document.getElementById("leaflet-css")) {
        const w = document.createElement("link");
        w.id = "leaflet-css", w.rel = "stylesheet", w.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(w);
      }
      if (document.getElementById("leaflet-js"))
        window.L && R(!0);
      else {
        const w = document.createElement("script");
        w.id = "leaflet-js", w.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", w.onload = () => R(!0), document.head.appendChild(w);
      }
    })();
  }, []), me(() => {
    if (!v || !window.L || u) return;
    const j = c ? [c.latitude, c.longitude] : [-7.257419, 112.752088], w = window.L.map(o.current).setView(j, 15);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap contributors"
    }).addTo(w);
    const P = window.L.divIcon({
      html: '<div style="background-color:#ff0000;width:20px;height:20px;border-radius:50%;border:3px solid #ffffff;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -10],
      className: "leaflet-div-icon custom-marker"
    }), l = window.L.marker(j, {
      draggable: !0,
      icon: P
    }).addTo(w);
    return s.current || (s.current = {
      latitude: j[0],
      longitude: j[1]
    }), l.on("drag", (I) => {
      const A = I.target.getLatLng(), G = s.current;
      if (G)
        if (S(
          G.latitude,
          G.longitude,
          A.lat,
          A.lng
        ) > 50) {
          const ne = Math.atan2(
            A.lng - G.longitude,
            A.lat - G.latitude
          ), te = 6371e3, V = 50, d = G.latitude * Math.PI / 180, E = G.longitude * Math.PI / 180, $ = Math.asin(
            Math.sin(d) * Math.cos(V / te) + Math.cos(d) * Math.sin(V / te) * Math.cos(ne)
          ), O = E + Math.atan2(
            Math.sin(ne) * Math.sin(V / te) * Math.cos(d),
            Math.cos(V / te) - Math.sin(d) * Math.sin($)
          ), L = [$ * 180 / Math.PI, O * 180 / Math.PI];
          I.target.setLatLng(L), C("Movement limited to 50 meters from initial position"), setTimeout(() => C(""), 3e3);
        } else
          C("");
    }), l.on("dragend", (I) => {
      const A = I.target.getLatLng(), G = { latitude: A.lat, longitude: A.lng };
      g(G), a.current(JSON.stringify(G));
    }), p(w), x(l), () => {
      w && (w.off(), w.remove()), x(null), p(null);
    };
  }, [v]), me(() => {
    !m || !c || !m._map || !m._icon || (m.setLatLng([c.latitude, c.longitude]), u && u.panTo([c.latitude, c.longitude]));
  }, [c, m, u]);
  const k = () => {
    if (!navigator.geolocation) {
      f("Geolocation is not supported by this browser");
      return;
    }
    h(!0), f(""), navigator.geolocation.getCurrentPosition(
      (j) => {
        const w = j.coords.latitude, P = j.coords.longitude, l = { latitude: w, longitude: P };
        if (g(l), r(JSON.stringify(l)), s.current = l, u && m && m._icon) {
          const I = [w, P];
          u.setView(I, 15), m.setLatLng(I);
        }
        h(!1);
      },
      (j) => {
        let w = "Unable to get location";
        switch (j.code) {
          case j.PERMISSION_DENIED:
            w = "Location access denied by user";
            break;
          case j.POSITION_UNAVAILABLE:
            w = "Location information unavailable";
            break;
          case j.TIMEOUT:
            w = "Location request timed out";
            break;
          default:
            w = "An unknown error occurred";
        }
        f(w), h(!1);
      },
      {
        enableHighAccuracy: !0,
        timeout: 1e4,
        maximumAge: 0
      }
    );
  }, _ = (j, w) => {
    const P = parseFloat(w);
    if (isNaN(P)) return;
    const l = c ? { ...c } : { latitude: 0, longitude: 0 };
    if (l[j] = P, g(l), r(JSON.stringify(l)), s.current || (s.current = l), u && m && m._icon) {
      const I = [l.latitude, l.longitude];
      u.setView(I, 15), m.setLatLng(I);
    }
  }, N = e.required;
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsxs(U, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      N && /* @__PURE__ */ i.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ i.jsx(st, { elevation: 2, sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Q,
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
        children: !v && /* @__PURE__ */ i.jsxs(Q, { sx: { textAlign: "center" }, children: [
          /* @__PURE__ */ i.jsx(mr, { size: 40, sx: { mb: 2 } }),
          /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "textSecondary", children: "Loading map..." })
        ] })
      }
    ) }),
    M && /* @__PURE__ */ i.jsx(Je, { severity: "warning", sx: { mb: 2 }, children: M }),
    /* @__PURE__ */ i.jsxs(Q, { sx: { mb: 2 }, children: [
      /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "textSecondary", gutterBottom: !0, children: "Manual coordinate input:" }),
      /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 2, mb: 2 }, children: [
        /* @__PURE__ */ i.jsx(
          Ae,
          {
            label: "Latitude",
            type: "number",
            value: c?.latitude || "",
            onChange: (j) => _("latitude", j.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 }
          }
        ),
        /* @__PURE__ */ i.jsx(
          Ae,
          {
            label: "Longitude",
            type: "number",
            value: c?.longitude || "",
            onChange: (j) => _("longitude", j.target.value),
            inputProps: { step: "any" },
            size: "small",
            sx: { flex: 1 }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(Q, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Ee,
      {
        variant: "contained",
        startIcon: y ? /* @__PURE__ */ i.jsx(mr, { size: 20, color: "inherit" }) : /* @__PURE__ */ i.jsx(Uo, {}),
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
    b && /* @__PURE__ */ i.jsx(Je, { severity: "error", sx: { mb: 2 }, children: b }),
    /* @__PURE__ */ i.jsx(
      Ze,
      {
        error: n,
        isRequired: N,
        hasValue: !!c
      }
    )
  ] });
}, ul = ["image/jpeg", "image/jpg", "image/png", "image/webp"], dl = 10 * 1024 * 1024, fl = ({
  question: e,
  value: t = null,
  onChange: r,
  error: n,
  disabled: o = !1,
  responses: a = {},
  variables: s = {},
  validation: u = []
}) => {
  const { setTouched: p, touched: m, setError: x } = Ie(), [y, h] = ue(!1), [b, f] = ue(null), [c, g] = ue(""), [v, R] = ue(0), [M, C] = ue(!1), [S, k] = ue(!1), _ = Pe(null), N = Pe(null);
  me(() => {
    (() => {
      const L = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      k(L && "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices);
    })();
  }, []), me(() => {
    t && typeof t == "object" && t.dataUrl ? (f(t.dataUrl), g(t.name || "Captured Image"), R(t.size || 0)) : t && typeof t == "string" ? (f(t), g("Uploaded Image")) : (f(null), g(""), R(0));
  }, [t]);
  const j = (O) => {
    if (!O) return { mainLabel: "", helpText: "" };
    let L = O.replace(/<[^>]*>/g, "").trim(), B = "";
    const F = O.match(/<br><small><i><font color="#007bff"[^>]*>([^<]+)<\/font><\/i><\/small>/);
    return F && (B = F[1], L = O.split("<br>")[0].replace(/<[^>]*>/g, "").trim()), { mainLabel: L, helpText: B };
  }, w = e.label || e.title || e.name || "", { mainLabel: P, helpText: l } = j(w), I = re((O) => ul.includes(O.type) ? O.size > dl ? "Ukuran file terlalu besar. Maksimal 10MB." : null : "Format file tidak didukung. Gunakan JPG, PNG, atau WebP.", []), A = re(async (O) => {
    const L = I(O);
    if (L) {
      x(e.dataKey, L);
      return;
    }
    C(!0);
    try {
      const B = new FileReader();
      B.onload = (F) => {
        const K = {
          dataUrl: F.target.result,
          name: O.name,
          size: O.size,
          type: O.type,
          lastModified: O.lastModified
        };
        r(K), f(F.target.result), g(O.name), R(O.size), x(e.dataKey, null), C(!1);
      }, B.onerror = (F) => {
        console.error("FileReader error:", F), x(e.dataKey, "Error membaca file."), C(!1);
      }, B.readAsDataURL(O);
    } catch (B) {
      console.error("Error processing file:", B), x(e.dataKey, "Error memproses file."), C(!1);
    }
  }, [r, e.dataKey, x, I]), G = re(async () => {
    if (S)
      try {
        const O = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }
        });
        N.current?.click();
      } catch (O) {
        console.error("Error accessing camera:", O), _.current?.click();
      }
  }, [S]), Y = re((O) => {
    O.preventDefault(), O.stopPropagation(), O.type === "dragenter" || O.type === "dragover" ? h(!0) : O.type === "dragleave" && h(!1);
  }, []), ne = re((O) => {
    if (O.preventDefault(), O.stopPropagation(), h(!1), o) return;
    const L = [...O.dataTransfer.files];
    L && L[0] && A(L[0]);
  }, [o, A]), te = re((O) => {
    const L = O.target.files[0];
    L && A(L);
  }, [A]), V = re((O) => {
    const L = O.target.files[0];
    L && A(L);
  }, [A]), d = re(() => {
    r(null), f(null), g(""), R(0), x(e.dataKey, null), _.current && (_.current.value = ""), N.current && (N.current.value = "");
  }, [r, e.dataKey, x]), E = () => {
    p(e.dataKey);
    const O = !!(t && (t.dataUrl || t)), L = dt(e, O ? "has_value" : "", a, s, u, m);
    L.length > 0 ? x(e.dataKey, L[0]) : x(e.dataKey, null);
  }, $ = (O) => {
    if (O === 0) return "0 Bytes";
    const L = 1024, B = ["Bytes", "KB", "MB", "GB"], F = Math.floor(Math.log(O) / Math.log(L));
    return parseFloat((O / Math.pow(L, F)).toFixed(2)) + " " + B[F];
  };
  return /* @__PURE__ */ i.jsxs(Q, { sx: { width: "100%", mb: 2 }, children: [
    /* @__PURE__ */ i.jsxs(
      Q,
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
        onDragEnter: Y,
        onDragLeave: Y,
        onDragOver: Y,
        onDrop: ne,
        onClick: () => !o && _.current?.click(),
        onBlur: E,
        children: [
          M && /* @__PURE__ */ i.jsx(
            Q,
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
              children: /* @__PURE__ */ i.jsx(mr, {})
            }
          ),
          b ? /* @__PURE__ */ i.jsxs(jo, { sx: { maxWidth: 400, mx: "auto" }, children: [
            /* @__PURE__ */ i.jsx(
              Ro,
              {
                component: "img",
                height: "200",
                image: b,
                alt: c,
                sx: { objectFit: "contain" }
              }
            ),
            /* @__PURE__ */ i.jsxs(Ao, { children: [
              /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
                /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", children: c }),
                /* @__PURE__ */ i.jsx(
                  Er,
                  {
                    label: $(v),
                    size: "small",
                    variant: "outlined"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 1, justifyContent: "center" }, children: [
                /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "primary",
                    onClick: (O) => {
                      O.stopPropagation(), _.current?.click();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Lr, {})
                  }
                ),
                S && /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "secondary",
                    onClick: (O) => {
                      O.stopPropagation(), G();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Dr, {})
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  lt,
                  {
                    color: "error",
                    onClick: (O) => {
                      O.stopPropagation(), d();
                    },
                    size: "small",
                    children: /* @__PURE__ */ i.jsx(Dn, {})
                  }
                )
              ] })
            ] })
          ] }) : /* @__PURE__ */ i.jsxs(Q, { children: [
            /* @__PURE__ */ i.jsx(Ko, { sx: { fontSize: 48, color: "text.secondary", mb: 2 } }),
            /* @__PURE__ */ i.jsx(U, { variant: "h6", gutterBottom: !0, children: P }),
            /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Seret dan jatuhkan foto di sini, atau klik untuk memilih file" }),
            /* @__PURE__ */ i.jsx(U, { variant: "caption", color: "text.secondary", display: "block", children: "Format yang didukung: JPG, PNG, WebP (maksimal 10MB)" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 1, mt: 2, justifyContent: "center" }, children: [
      /* @__PURE__ */ i.jsx(
        Ee,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ i.jsx(Lr, {}),
          onClick: () => _.current?.click(),
          disabled: o,
          size: "small",
          children: "Pilih File"
        }
      ),
      S && /* @__PURE__ */ i.jsx(
        Ee,
        {
          variant: "outlined",
          startIcon: /* @__PURE__ */ i.jsx(Dr, {}),
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
        ref: _,
        type: "file",
        accept: "image/*",
        onChange: te,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        ref: N,
        type: "file",
        accept: "image/*",
        capture: "environment",
        onChange: V,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ze,
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
}, pl = ({
  question: e,
  value: t = "",
  onChange: r,
  error: n,
  disabled: o = !1
}) => {
  const [a, s] = ue(t.completionTime || ""), u = () => {
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
  return /* @__PURE__ */ i.jsxs(Q, { sx: { mb: 3 }, children: [
    /* @__PURE__ */ i.jsxs(U, { variant: "body1", gutterBottom: !0, sx: { fontWeight: 500 }, children: [
      e.label,
      p && /* @__PURE__ */ i.jsx("span", { style: { color: "red" }, children: " *" })
    ] }),
    /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 2, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ i.jsx(
        Ae,
        {
          fullWidth: !0,
          value: a,
          disabled: !0,
          variant: "outlined",
          sx: { flex: 1 }
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ee,
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
      Ze,
      {
        error: n,
        isRequired: p,
        hasValue: !!a
      }
    )
  ] });
}, pr = {
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
function Ir({
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
  } = Ie(), x = !!m?.readOnly, y = !!m?.disabled, h = x || y, b = m?.locale ?? "en", f = m?.translations ?? {}, c = m?.fetchMedia, g = m?.componentsMap || {};
  if (me(() => {
    if (e.type === 4 && e.expression) {
      let w;
      try {
        w = Qe(e.expression, t, r, a);
      } catch {
        w = void 0;
      }
      const P = a !== null ? `${e.dataKey}#${a}` : e.dataKey, l = t[P] || r[P];
      l === w || JSON.stringify(l) === JSON.stringify(w) || (console.log(`Computed variable ${P} =`, w), u(e.dataKey, w, a));
    }
  }, [e.type, e.expression, JSON.stringify(t), JSON.stringify(r), a]), !zs(e, t, r, a))
    return null;
  const R = a !== null ? `${e.dataKey}#${a}` : e.dataKey, M = t[R] || r[R], C = n[R], S = (w) => {
    h || (C && p(R), e.type === 4 ? u(e.dataKey, w, a) : s(e.dataKey, w, a));
  }, k = Gs(e.label, t, r, a), _ = {
    question: {
      ...e,
      label: k
    },
    value: M,
    onChange: S,
    error: C,
    responses: t,
    variables: r,
    rowIndex: a,
    validation: o,
    readOnly: x,
    disabled: h,
    locale: b,
    translations: f,
    fetchMedia: c
  }, N = g[e.dataKey] || g[e.type] || g[String(e.type)] || (e.questionType ? g[e.questionType] : void 0) || (pr[e.type] ? g[pr[e.type]] : void 0);
  if (N) {
    if (Fe.isValidElement(N))
      return Fe.cloneElement(N, _);
    if (typeof N == "function") {
      const w = N;
      return /* @__PURE__ */ i.jsx(w, { ..._ });
    }
  }
  const j = () => {
    switch (e.type) {
      case 1:
        return /* @__PURE__ */ i.jsx(Ys, { ..._ });
      case 2:
        return /* @__PURE__ */ i.jsx(Hs, { ..._ });
      case 3:
        return /* @__PURE__ */ i.jsx(Qs, { ..._ });
      case 4:
        return /* @__PURE__ */ i.jsx(Js, { ..._ });
      case 11:
      // Date
      case 12:
      // Date Time Local
      case 14:
      // Month
      case 15:
        return /* @__PURE__ */ i.jsx(rl, { ..._ });
      case 13:
        return /* @__PURE__ */ i.jsx(nl, { ..._ });
      case 16:
        return /* @__PURE__ */ i.jsx(kn, { ..._, single: !0 });
      case 17:
        return /* @__PURE__ */ i.jsx(ol, { ..._ });
      case 18:
        return /* @__PURE__ */ i.jsx(al, { ..._ });
      case 19:
        return /* @__PURE__ */ i.jsx(fr, { ..._, inputType: "url" });
      case 20:
        return /* @__PURE__ */ i.jsx(ll, { ..._ });
      case 21:
        return /* @__PURE__ */ i.jsx(_n, { ..._ });
      case 22:
        return /* @__PURE__ */ i.jsx(_n, { ..._, selectMode: !0 });
      case 23:
        return /* @__PURE__ */ i.jsx(il, { ..._ });
      case 24:
        return /* @__PURE__ */ i.jsx(fr, { ..._, masked: !0 });
      case 25:
        return /* @__PURE__ */ i.jsx(fr, { ..._ });
      case 26:
        return /* @__PURE__ */ i.jsx(Xs, { ..._ });
      case 27:
        return /* @__PURE__ */ i.jsx(qs, { ..._ });
      case 28:
        return /* @__PURE__ */ i.jsx(el, { ..._ });
      case 29:
        return /* @__PURE__ */ i.jsx(kn, { ..._ });
      case 30:
        return /* @__PURE__ */ i.jsx(tl, { ..._ });
      case 31:
        return /* @__PURE__ */ i.jsx(sl, { ..._ });
      case 32:
        return /* @__PURE__ */ i.jsx(fl, { ..._ });
      case 33:
        return /* @__PURE__ */ i.jsx(cl, { ..._ });
      case 35:
        return /* @__PURE__ */ i.jsx(pl, { ..._ });
      default:
        return /* @__PURE__ */ i.jsxs(Q, { sx: { p: 2, bgcolor: "warning.light", borderRadius: 1 }, children: [
          /* @__PURE__ */ i.jsxs("strong", { children: [
            "Unsupported Question Type: ",
            e.type
          ] }),
          /* @__PURE__ */ i.jsx("br", {}),
          pr[e.type] || "Unknown",
          /* @__PURE__ */ i.jsx("br", {}),
          /* @__PURE__ */ i.jsx("em", { children: k })
        ] });
    }
  };
  return /* @__PURE__ */ i.jsx(Q, { sx: { width: "100%" }, children: j() });
}
const gt = 280, ml = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function po({
  template: e,
  className: t,
  style: r,
  header: n,
  footer: o
}) {
  const a = ko(), s = _o(a.breakpoints.down("md")), {
    currentPage: u,
    responses: p,
    variables: m,
    errors: x,
    validation: y,
    setCurrentPage: h,
    template: b,
    submit: f
  } = Ie(), [c, g] = ue(!1), v = e || b, R = Se(() => ml(v), [v]), M = !!f, C = re(async () => {
    if (!f) {
      console.warn("Submit handler is not available yet.");
      return;
    }
    try {
      await f();
    } catch (P) {
      console.error("Failed to submit questionnaire:", P);
    }
  }, [f]), S = () => {
    g(!c);
  }, k = (P) => {
    h(P), s && g(!1);
  }, _ = R[u], N = (P) => {
    if (!P?.components)
      return /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions in this section" });
    const l = P.components[0] || [];
    return l.length === 0 ? /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions available" }) : l.map((I, A) => /* @__PURE__ */ i.jsx(Q, { sx: { mb: 2 }, children: /* @__PURE__ */ i.jsx(
      Ir,
      {
        question: I,
        responses: p,
        variables: m,
        errors: x,
        validation: y
      }
    ) }, I.dataKey || A));
  }, j = (P) => {
    const l = R[P];
    if (!l?.components?.[0]) return "incomplete";
    const A = l.components[0].filter((Y) => Y.required);
    return A.length === 0 || A.filter(
      (Y) => p[Y.dataKey] !== void 0 && p[Y.dataKey] !== ""
    ).length === A.length ? "complete" : "incomplete";
  }, w = /* @__PURE__ */ i.jsxs(Q, { children: [
    /* @__PURE__ */ i.jsxs(qt, { children: [
      /* @__PURE__ */ i.jsx(U, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1, fontSize: "14px" }, children: "PDTSEN 2025 KOTA SURABAYA" }),
      s && /* @__PURE__ */ i.jsx(lt, { onClick: S, children: /* @__PURE__ */ i.jsx(Wo, {}) })
    ] }),
    /* @__PURE__ */ i.jsx(xr, { sx: { px: 1 }, children: R.map((P, l) => {
      const I = u === l, A = j(l);
      return /* @__PURE__ */ i.jsx(Sr, { disablePadding: !0, sx: { mb: 0.5 }, children: /* @__PURE__ */ i.jsx(
        $o,
        {
          selected: I,
          onClick: () => k(l),
          sx: {
            borderRadius: 1,
            bgcolor: I ? "primary.main" : "transparent",
            color: I ? "white" : "text.primary",
            "&:hover": {
              bgcolor: I ? "primary.dark" : "action.hover"
            },
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark"
              }
            }
          },
          children: /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", alignItems: "center", width: "100%" }, children: [
            A === "complete" ? /* @__PURE__ */ i.jsx(zo, { sx: { mr: 1, fontSize: 16, color: I ? "white" : "success.main" } }) : /* @__PURE__ */ i.jsx(Go, { sx: { mr: 1, fontSize: 16 } }),
            /* @__PURE__ */ i.jsx(
              vr,
              {
                primary: P.label || `Section ${l + 1}`,
                primaryTypographyProps: {
                  fontSize: "13px",
                  fontWeight: I ? 600 : 400
                }
              }
            )
          ] })
        }
      ) }, P.dataKey || l);
    }) })
  ] });
  return /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex" }, className: t, style: r, children: [
    /* @__PURE__ */ i.jsx(
      Po,
      {
        position: "fixed",
        sx: {
          width: { md: `calc(100% - ${gt}px)` },
          ml: { md: `${gt}px` }
        },
        children: /* @__PURE__ */ i.jsxs(qt, { children: [
          /* @__PURE__ */ i.jsx(
            lt,
            {
              color: "inherit",
              edge: "start",
              onClick: S,
              sx: { mr: 2, display: { md: "none" } },
              children: /* @__PURE__ */ i.jsx(Yo, {})
            }
          ),
          /* @__PURE__ */ i.jsx(U, { variant: "h6", noWrap: !0, component: "div", sx: { flexGrow: 1 }, children: v?.title || "Questionnaire" }),
          /* @__PURE__ */ i.jsx(
            Er,
            {
              icon: /* @__PURE__ */ i.jsx(Ho, {}),
              label: "Submit",
              color: "secondary",
              clickable: !0,
              onClick: C,
              disabled: !M,
              sx: { color: "white", fontWeight: 600 }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx(
      Q,
      {
        component: "nav",
        sx: { width: { md: gt }, flexShrink: { md: 0 } },
        children: /* @__PURE__ */ i.jsx(
          Io,
          {
            variant: s ? "temporary" : "permanent",
            open: s ? c : !0,
            onClose: S,
            ModalProps: {
              keepMounted: !0
              // Better open performance on mobile.
            },
            sx: {
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: gt
              }
            },
            children: w
          }
        )
      }
    ),
    /* @__PURE__ */ i.jsxs(
      Q,
      {
        component: "main",
        sx: {
          flexGrow: 1,
          width: { md: `calc(100% - ${gt}px)` }
        },
        children: [
          /* @__PURE__ */ i.jsx(qt, {}),
          /* @__PURE__ */ i.jsxs(Ln, { maxWidth: "lg", sx: { py: 3, pb: 12 }, children: [
            n,
            _ ? /* @__PURE__ */ i.jsx(st, { elevation: 1, sx: { p: 3, mb: 3 }, children: N(_) }) : /* @__PURE__ */ i.jsx(st, { elevation: 1, sx: { p: 3, textAlign: "center" }, children: /* @__PURE__ */ i.jsx(U, { variant: "h6", color: "text.secondary", children: "Select a section from the sidebar to begin" }) }),
            o,
            /* @__PURE__ */ i.jsx(
              st,
              {
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
                  Q,
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
                        Ee,
                        {
                          variant: "outlined",
                          onClick: () => k(Math.max(0, u - 1)),
                          disabled: u === 0,
                          sx: { minWidth: 120 },
                          children: "Previous"
                        }
                      ),
                      /* @__PURE__ */ i.jsx(U, { variant: "body2", color: "text.secondary", sx: { alignSelf: "center", mx: 2 }, children: _?.label || "No section selected" }),
                      /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", gap: 1 }, children: [
                        /* @__PURE__ */ i.jsx(
                          Ee,
                          {
                            variant: "contained",
                            onClick: () => k(Math.min(R.length - 1, u + 1)),
                            disabled: u >= R.length - 1,
                            sx: { minWidth: 120 },
                            children: "Next"
                          }
                        ),
                        R.length > 0 && /* @__PURE__ */ i.jsx(
                          Ee,
                          {
                            variant: "contained",
                            color: "secondary",
                            onClick: C,
                            disabled: !M,
                            sx: { minWidth: 120 },
                            children: "Submit"
                          }
                        )
                      ] })
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
const hl = (e) => {
  if (!e?.components)
    return [];
  const t = [];
  return e.components.forEach((r) => {
    Array.isArray(r) && r.forEach((n) => {
      n?.type === 1 && t.push(n);
    });
  }), t;
};
function yl({ template: e, className: t, style: r, footer: n }) {
  const {
    currentPage: o,
    responses: a,
    variables: s,
    errors: u,
    isOnline: p,
    validation: m,
    setCurrentPage: x,
    template: y
  } = Ie(), h = e || y, b = Se(() => hl(h), [h]), f = b[o], c = () => {
    o < b.length - 1 && x(o + 1);
  }, g = () => {
    o > 0 && x(o - 1);
  }, v = (R) => {
    if (!R?.components)
      return /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions in this section" });
    const M = R.components[0] || [];
    return M.length === 0 ? /* @__PURE__ */ i.jsx(U, { color: "text.secondary", children: "No questions available" }) : M.map((C, S) => /* @__PURE__ */ i.jsx(Q, { sx: { mb: 3 }, children: /* @__PURE__ */ i.jsx(
      Ir,
      {
        question: C,
        responses: a,
        variables: s,
        errors: u,
        validation: m
      }
    ) }, C.dataKey || S));
  };
  return /* @__PURE__ */ i.jsxs(Ln, { maxWidth: "md", sx: { py: 4 }, className: t, style: r, children: [
    /* @__PURE__ */ i.jsxs(Q, { sx: { mb: 3 }, children: [
      /* @__PURE__ */ i.jsxs(U, { variant: "h6", gutterBottom: !0, children: [
        h?.title || "Survey",
        " - Section ",
        o + 1,
        " of ",
        b.length || 1
      ] }),
      /* @__PURE__ */ i.jsx(
        No,
        {
          variant: "determinate",
          value: b.length ? (o + 1) / b.length * 100 : 0,
          sx: { height: 8, borderRadius: 4 }
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs(Je, { severity: p ? "success" : "warning", sx: { mb: 3 }, children: [
      "Status: ",
      p ? "Online" : "Offline"
    ] }),
    f ? /* @__PURE__ */ i.jsxs(st, { elevation: 2, sx: { p: 3, mb: 3 }, children: [
      /* @__PURE__ */ i.jsx(U, { variant: "h5", gutterBottom: !0, children: f.label || f.title }),
      f.description && /* @__PURE__ */ i.jsx(U, { variant: "body1", color: "text.secondary", sx: { mb: 3 }, children: f.description }),
      v(f)
    ] }) : /* @__PURE__ */ i.jsx(Je, { severity: "info", children: "No sections available" }),
    /* @__PURE__ */ i.jsxs(Q, { sx: { display: "flex", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ i.jsx(
        Ee,
        {
          variant: "outlined",
          onClick: g,
          disabled: o === 0,
          children: "Previous"
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ee,
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
function gl(e = {}) {
  const t = {
    version: 1,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    data: it(e)
  };
  return JSON.stringify(t);
}
function bl(e) {
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
const xl = (e) => e && typeof e.then == "function", br = (e, t) => {
  if (!e)
    return;
  if (Array.isArray(e)) {
    e.forEach((n) => br(n, t));
    return;
  }
  const r = e;
  !r || typeof r != "object" || (t(r), r.components && br(r.components, t));
}, Sl = (e) => {
  const t = [], r = /* @__PURE__ */ new Set();
  return br(e?.components, (n) => {
    n && n.type !== 1 && n.dataKey && !r.has(n.dataKey) && (r.add(n.dataKey), t.push(n));
  }), t;
}, vl = (e) => e ? Array.isArray(e) ? e : typeof e == "object" && Array.isArray(e.testFunctions) ? e.testFunctions : [] : [];
async function El(e, t, r = {}, n = {}) {
  if (!e || typeof e != "object")
    throw new Error("validateResponse requires a templateJson object");
  const {
    variables: o = {},
    touched: a = {},
    validators: s = {},
    asyncValidation: u = !1,
    locale: p,
    translations: m
  } = n, x = vl(t ?? e?.validation), y = Sl(e), h = {}, b = { ...a };
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
        const C = R(g, {
          question: f,
          responses: r,
          variables: o,
          locale: p,
          translations: m,
          template: e
        });
        let S = C;
        xl(C) && (u || console.warn(`Validator for ${c} returned a Promise but asyncValidation is disabled.`), S = await C), S && (h[c] = [...h[c] || [], S]);
      } catch (M) {
        console.error(`Validator for ${c} threw an error:`, M), h[c] = [
          ...h[c] || [],
          M.message || "Validation failed"
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
const Tl = (e) => !e || e === "default" ? po : e === "simple" ? yl : e, Cl = () => typeof window > "u" || !window.localStorage ? null : {
  async get(e) {
    return window.localStorage.getItem(e);
  },
  async set(e, t) {
    window.localStorage.setItem(e, t);
  },
  async remove(e) {
    window.localStorage.removeItem(e);
  }
}, mo = $n((e, t) => {
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
    asyncValidation: M = !1,
    fetchMedia: C = null,
    onError: S = null,
    lookupClient: k = null,
    lookupBaseUrl: _ = null,
    resolveLookupUrl: N = null,
    className: j,
    style: w,
    children: P,
    ...l
  } = e, {
    responses: I,
    variables: A,
    touched: G,
    validation: Y,
    setConfig: ne,
    setInitialResponses: te,
    loadQuestionnaire: V,
    setErrors: d,
    resetResponses: E,
    setRuntimeMethods: $,
    setTouched: O
  } = Ie(), [L, B] = ue({ initial: !1, draft: !1 }), F = Pe(null), K = !!v, W = v?.debounceMs ?? 300, J = Se(() => c || (K ? Cl() : null), [c, K]), z = re((X) => {
    X && (console.error("[QuestionnaireRenderer] error:", X), typeof S == "function" && S(X));
  }, [S]);
  me(() => {
    if (!r) {
      z(new Error("templateJson is required for QuestionnaireRenderer"));
      return;
    }
    try {
      V(r, n ?? Y ?? null);
    } catch (X) {
      z(X);
    }
  }, [r, n, Y, V, z]);
  const ge = Se(() => ({
    readOnly: x,
    disabled: y,
    locale: h,
    translations: b,
    fetchMedia: C,
    theme: f,
    componentsMap: p || {},
    lookupClient: k,
    lookupBaseUrl: _,
    resolveLookupUrl: N
  }), [x, y, h, b, C, f, p, k, _, N]);
  me(() => {
    try {
      ne(ge);
    } catch (X) {
      z(X);
    }
  }, [ge, ne, z]), me(() => {
    const X = it(o || {}), de = JSON.stringify(X);
    if (F.current !== de) {
      F.current = de;
      try {
        te(X);
      } catch (ee) {
        z(ee);
      }
    }
    B((ee) => ({ ...ee, initial: !0 }));
  }, [o, te, z]), me(() => {
    let X = !1;
    return !K || !J ? (B((ee) => ({ ...ee, draft: !0 })), () => {
      X = !0;
    }) : ((async () => {
      try {
        const ee = await Promise.resolve(J.get?.(g));
        if (!X && ee) {
          const xe = bl(ee), Te = {
            ...it(o || {}),
            ...it(xe)
          };
          te(Te), F.current = JSON.stringify(Te);
        }
      } catch (ee) {
        X || z(ee);
      } finally {
        X || B((ee) => ({ ...ee, draft: !0 }));
      }
    })(), () => {
      X = !0;
    });
  }, [K, J, g, o, te, z]);
  const D = L.initial && L.draft, fe = Se(() => it(I), [I]);
  me(() => {
    if (!D || typeof a != "function")
      return;
    const X = setTimeout(() => {
      try {
        a(fe);
      } catch (de) {
        z(de);
      }
    }, W);
    return () => clearTimeout(X);
  }, [fe, a, W, z, D]), me(() => {
    if (!D || !K || !J)
      return;
    const X = setTimeout(() => {
      const de = fe, xe = Object.keys(de).length > 0 ? J.set?.(g, gl(de)) : J.remove?.(g);
      Promise.resolve(xe).catch(z);
    }, W);
    return () => clearTimeout(X);
  }, [fe, K, J, g, W, z, D]);
  const ke = re(async () => El(r, n ?? Y ?? null, fe, {
    variables: A,
    touched: G,
    validators: R,
    asyncValidation: M,
    locale: h,
    translations: b
  }), [r, n, Y, fe, A, G, R, M, h, b]), Re = re(() => it(I), [I]), qe = re(() => !K || !J ? Promise.resolve() : Promise.resolve(J.remove?.(g)).catch(z), [K, J, g, z]), De = re(async () => {
    try {
      const X = await ke();
      return d(X.errors), X.valid ? (typeof s == "function" && (console.log("Submitting responses:", fe), await Promise.resolve(s(fe))), v?.clearOnSubmit && await qe(), { ok: !0, responses: fe }) : (Object.keys(X.errors).forEach((de) => O(de)), typeof u == "function" && u(X.errors), { ok: !1, errors: X.errors });
    } catch (X) {
      throw z(X), X;
    }
  }, [ke, d, O, u, s, fe, v, qe, z]), Ne = re(async () => {
    try {
      E(), d({}), await qe();
    } catch (X) {
      z(X);
    }
  }, [E, d, qe, z]);
  xo(t, () => ({
    submit: De,
    reset: Ne,
    getResponses: Re
  }), [De, Ne, Re]);
  const ve = Pe(De), Ge = Pe(Ne), Ye = Pe(Re);
  me(() => {
    ve.current = De;
  }, [De]), me(() => {
    Ge.current = Ne;
  }, [Ne]), me(() => {
    Ye.current = Re;
  }, [Re]);
  const Ve = Se(() => ({
    submit: (...X) => ve.current(...X),
    reset: (...X) => Ge.current(...X),
    getResponses: (...X) => Ye.current(...X)
  }), []);
  me(() => ($(Ve), () => {
    $(null);
  }), [$, Ve]);
  const et = Se(() => Tl(m), [m]);
  let _e = null;
  if (Fe.isValidElement(et) ? _e = Fe.cloneElement(et, { className: j, style: w, ...l }, P) : typeof et == "function" ? _e = /* @__PURE__ */ i.jsx(et, { className: j, style: w, ...l, children: P }) : _e = /* @__PURE__ */ i.jsx(po, { className: j, style: w, ...l, children: P }), f) {
    if (Fe.isValidElement(f))
      return Fe.cloneElement(f, void 0, _e);
    if (typeof f == "function") {
      const X = f;
      return /* @__PURE__ */ i.jsx(X, { children: _e });
    }
    return /* @__PURE__ */ i.jsx($s, { theme: f, children: _e });
  }
  return _e;
});
mo.displayName = "QuestionnaireRendererInner";
const wl = $n((e, t) => {
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
    asyncValidation: M,
    fetchMedia: C,
    onError: S,
    lookupClient: k,
    lookupBaseUrl: _,
    resolveLookupUrl: N,
    className: j,
    style: w,
    children: P,
    ...l
  } = e, I = Se(() => v ? typeof v == "object" ? v : {} : null, [v]);
  return /* @__PURE__ */ i.jsx(Ws, { children: /* @__PURE__ */ i.jsx(
    mo,
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
      autosaveConfig: I,
      validators: R,
      asyncValidation: M,
      fetchMedia: C,
      onError: S,
      lookupClient: k,
      lookupBaseUrl: _,
      resolveLookupUrl: N,
      className: j,
      style: w,
      ...l,
      children: P
    }
  ) });
});
wl.displayName = "QuestionnaireRenderer";
const $l = Object.freeze({
  QuestionnaireRendererProps: "QuestionnaireRendererProps",
  QuestionnaireRuntimeHandle: "QuestionnaireRuntimeHandle",
  QuestionnaireValidationErrors: "QuestionnaireValidationErrors"
});
export {
  po as QuestionnaireLayout,
  wl as QuestionnaireRenderer,
  Sl as collectQuestions,
  wl as default,
  bl as deserializeResponses,
  it as normalizeResponses,
  gl as serializeResponses,
  $l as types,
  Ie as useQuestionnaire,
  El as validateResponse
};
//# sourceMappingURL=index.es.js.map
