/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/figlet@1.6.0/lib/figlet.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
'use strict';
const figlet = (() => {
  const e = {},
    t = { font: 'Standard', fontPath: './fonts' };
  function n(e, t, n) {
    return e === t && e !== n && e;
  }
  function i(e, t) {
    let n = '|/\\[]{}()<>';
    if ('_' === e) {
      if (-1 !== n.indexOf(t)) return t;
    } else if ('_' === t && -1 !== n.indexOf(e)) return e;
    return !1;
  }
  function u(e, t) {
    let n = '| /\\ [] {} () <>',
      i = n.indexOf(e),
      u = n.indexOf(t);
    if (-1 !== i && -1 !== u && i !== u && 1 !== Math.abs(i - u)) {
      const e = Math.max(i, u);
      return n.substring(e, e + 1);
    }
    return !1;
  }
  function l(e, t) {
    let n = '[] {} ()',
      i = n.indexOf(e),
      u = n.indexOf(t);
    return -1 !== i && -1 !== u && Math.abs(i - u) <= 1 && '|';
  }
  function r(e, t) {
    let n = '/\\ \\/ ><',
      i = { 0: '|', 3: 'Y', 6: 'X' },
      u = n.indexOf(e),
      l = n.indexOf(t);
    return -1 !== u && -1 !== l && l - u == 1 && i[u];
  }
  function o(e, t, n) {
    return e === n && t === n && n;
  }
  function a(e, t) {
    return e === t && e;
  }
  function h(e, t) {
    let n = '|/\\[]{}()<>';
    if ('_' === e) {
      if (-1 !== n.indexOf(t)) return t;
    } else if ('_' === t && -1 !== n.indexOf(e)) return e;
    return !1;
  }
  function s(e, t) {
    let n = '| /\\ [] {} () <>',
      i = n.indexOf(e),
      u = n.indexOf(t);
    if (-1 !== i && -1 !== u && i !== u && 1 !== Math.abs(i - u)) {
      const e = Math.max(i, u);
      return n.substring(e, e + 1);
    }
    return !1;
  }
  function f(e, t) {
    return (('-' === e && '_' === t) || ('_' === e && '-' === t)) && '=';
  }
  function c(e, t) {
    return '|' === e && '|' === t && '|';
  }
  function R(e, t, n) {
    return ' ' === t || '' === t || (t === n && ' ' !== e) ? e : t;
  }
  function g(e, t, n) {
    if (0 === n.fittingRules.vLayout) return 'invalid';
    let i,
      u,
      l,
      r,
      o = Math.min(e.length, t.length),
      R = !1;
    if (0 === o) return 'invalid';
    for (i = 0; i < o; i++)
      if (((u = e.substring(i, i + 1)), (l = t.substring(i, i + 1)), ' ' !== u && ' ' !== l)) {
        if (1 === n.fittingRules.vLayout) return 'invalid';
        if (2 === n.fittingRules.vLayout) return 'end';
        if (c(u, l)) {
          R = R || !1;
          continue;
        }
        if (
          ((r = !1),
          (r = n.fittingRules.vRule1 ? a(u, l) : r),
          (r = !r && n.fittingRules.vRule2 ? h(u, l) : r),
          (r = !r && n.fittingRules.vRule3 ? s(u, l) : r),
          (r = !r && n.fittingRules.vRule4 ? f(u, l) : r),
          (R = !0),
          !r)
        )
          return 'invalid';
      }
    return R ? 'end' : 'valid';
  }
  function v(e, t, n) {
    let i,
      u,
      l,
      r,
      o = Math.min(e.length, t.length),
      g = '';
    for (i = 0; i < o; i++)
      (u = e.substring(i, i + 1)),
        (l = t.substring(i, i + 1)),
        ' ' !== u && ' ' !== l
          ? 1 === n.fittingRules.vLayout || 2 === n.fittingRules.vLayout
            ? (g += R(u, l))
            : ((r = !1),
              (r = n.fittingRules.vRule5 ? c(u, l) : r),
              (r = !r && n.fittingRules.vRule1 ? a(u, l) : r),
              (r = !r && n.fittingRules.vRule2 ? h(u, l) : r),
              (r = !r && n.fittingRules.vRule3 ? s(u, l) : r),
              (r = !r && n.fittingRules.vRule4 ? f(u, l) : r),
              (g += r))
          : (g += R(u, l));
    return g;
  }
  function d(e, t) {
    let n,
      i = e.length,
      u = '';
    for (n = 0; n < t; n++) u += ' ';
    for (n = 0; n < i; n++) e[n] += u;
  }
  function p(e, t, n) {
    let i,
      u = e[0].length,
      l = t[0].length;
    return (
      u > l ? d(t, u - l) : l > u && d(e, l - u),
      (i = (function (e, t, n) {
        let i,
          u,
          l,
          r,
          o,
          a,
          h = e.length,
          s = e.length,
          f = (t.length, 1);
        for (; f <= h; ) {
          for (
            i = e.slice(Math.max(0, s - f), s), u = t.slice(0, Math.min(h, f)), l = u.length, a = '', r = 0;
            r < l;
            r++
          )
            if (((o = g(i[r], u[r], n)), 'end' === o)) a = o;
            else {
              if ('invalid' === o) {
                a = o;
                break;
              }
              '' === a && (a = 'valid');
            }
          if ('invalid' === a) {
            f--;
            break;
          }
          if ('end' === a) break;
          'valid' === a && f++;
        }
        return Math.min(h, f);
      })(e, t, n)),
      (function (e, t, n, i) {
        let u,
          l,
          r,
          o,
          a = e.length,
          h = t.length,
          s = e.slice(0, Math.max(0, a - n)),
          f = e.slice(Math.max(0, a - n), a),
          c = t.slice(0, Math.min(n, h)),
          R = [];
        for (l = f.length, u = 0; u < l; u++) (r = u >= h ? f[u] : v(f[u], c[u], i)), R.push(r);
        return (o = t.slice(Math.min(n, h), h)), [].concat(s, R, o);
      })(e, t, i, n)
    );
  }
  function y(e, t, a) {
    if (0 === a.fittingRules.hLayout) return 0;
    let h,
      s,
      f,
      c,
      R,
      g = e.length,
      v = t.length,
      d = g,
      p = 1,
      y = !1,
      m = !1;
    if (0 === g) return 0;
    e: for (; p <= d; ) {
      const d = g - p;
      for (s = e.substring(d, d + p), f = t.substring(0, Math.min(p, v)), h = 0; h < Math.min(p, v); h++)
        if (((c = s.substring(h, h + 1)), (R = f.substring(h, h + 1)), ' ' !== c && ' ' !== R)) {
          if (1 === a.fittingRules.hLayout) {
            p -= 1;
            break e;
          }
          if (2 === a.fittingRules.hLayout) {
            (c !== a.hardBlank && R !== a.hardBlank) || (p -= 1);
            break e;
          }
          if (
            ((y = !0),
            (m = !1),
            (m = a.fittingRules.hRule1 ? n(c, R, a.hardBlank) : m),
            (m = !m && a.fittingRules.hRule2 ? i(c, R, a.hardBlank) : m),
            (m = !m && a.fittingRules.hRule3 ? u(c, R, a.hardBlank) : m),
            (m = !m && a.fittingRules.hRule4 ? l(c, R, a.hardBlank) : m),
            (m = !m && a.fittingRules.hRule5 ? r(c, R, a.hardBlank) : m),
            (m = !m && a.fittingRules.hRule6 ? o(c, R, a.hardBlank) : m),
            !m)
          ) {
            p -= 1;
            break e;
          }
        }
      if (y) break;
      p++;
    }
    return Math.min(d, p);
  }
  function m(e, t, a, h) {
    let s,
      f,
      c,
      g,
      v,
      d,
      p,
      y,
      m,
      L,
      k = [];
    for (s = 0; s < h.height; s++) {
      (m = e[s]), (L = t[s]), (p = m.length), (y = L.length), (c = p - a), (g = m.substr(0, Math.max(0, c))), (v = '');
      const O = Math.max(0, p - a);
      var w = m.substring(O, O + a),
        b = L.substring(0, Math.min(a, y));
      for (f = 0; f < a; f++) {
        var x = f < p ? w.substring(f, f + 1) : ' ',
          B = f < y ? b.substring(f, f + 1) : ' ';
        if (' ' !== x && ' ' !== B)
          if (1 === h.fittingRules.hLayout) v += R(x, B, h.hardBlank);
          else if (2 === h.fittingRules.hLayout) v += R(x, B, h.hardBlank);
          else {
            var M = '';
            v += M =
              (M =
                !(M =
                  !(M =
                    !(M =
                      !(M =
                        !(M = !M && h.fittingRules.hRule1 ? n(x, B, h.hardBlank) : M) && h.fittingRules.hRule2
                          ? i(x, B, h.hardBlank)
                          : M) && h.fittingRules.hRule3
                        ? u(x, B, h.hardBlank)
                        : M) && h.fittingRules.hRule4
                      ? l(x, B, h.hardBlank)
                      : M) && h.fittingRules.hRule5
                    ? r(x, B, h.hardBlank)
                    : M) && h.fittingRules.hRule6
                  ? o(x, B, h.hardBlank)
                  : M) || R(x, B, h.hardBlank);
          }
        else v += R(x, B, h.hardBlank);
      }
      (d = a >= y ? '' : L.substring(a, a + Math.max(0, y - a))), (k[s] = g + v + d);
    }
    return k;
  }
  function L(e) {
    let t,
      n = [];
    for (t = 0; t < e; t++) n[t] = '';
    return n;
  }
  const k = function (e) {
    return Math.max.apply(
      Math,
      e.map(function (e, t) {
        return e.length;
      })
    );
  };
  function w(e, t, n) {
    return e.reduce(function (e, t) {
      return m(e, t.fig, t.overlap, n);
    }, L(t));
  }
  function b(e, t, n) {
    const i = {};
    for (let u = e.length; --u; ) {
      let l = w(e.slice(0, u), t, n);
      if (k(l) <= n.width) {
        (i.outputFigText = l), u < e.length ? (i.chars = e.slice(u)) : (i.chars = []);
        break;
      }
    }
    return i;
  }
  function x(e, t, n) {
    let i,
      u,
      l,
      r,
      o,
      a,
      h,
      s,
      f,
      c,
      R,
      g,
      v = 0,
      d = n.height,
      p = [],
      x = [];
    for (
      r = L(d),
        n.width > 0 && n.whitespaceBreak && (h = { chars: [], overlap: v }),
        1 === n.printDirection && (e = e.split('').reverse().join('')),
        o = e.length,
        i = 0;
      i < o;
      i++
    )
      if (((s = e.substring(i, i + 1)), (f = s.match(/\s/)), (u = t[s.charCodeAt(0)]), (R = null), u)) {
        if (0 !== n.fittingRules.hLayout) {
          for (v = 1e4, l = 0; l < n.height; l++) v = Math.min(v, y(r[l], u[l], n));
          v = 1e4 === v ? 0 : v;
        }
        if (
          (n.width > 0 &&
            (n.whitespaceBreak
              ? ((c = w(h.chars.concat([{ fig: u, overlap: v }]), d, n)),
                (R = w(x.concat([{ fig: c, overlap: h.overlap }]), d, n)),
                (a = k(R)))
              : ((R = m(r, u, v, n)), (a = k(R))),
            a >= n.width &&
              i > 0 &&
              (n.whitespaceBreak
                ? ((r = w(x.slice(0, -1), d, n)), x.length > 1 && (p.push(r), (r = L(d))), (x = []))
                : (p.push(r), (r = L(d))))),
          n.width > 0 &&
            n.whitespaceBreak &&
            ((f && i !== o - 1) || h.chars.push({ fig: u, overlap: v }), f || i === o - 1))
        ) {
          for (g = null; (R = w(h.chars, d, n)), (a = k(R)), a >= n.width; )
            (g = b(h.chars, d, n)), (h = { chars: g.chars }), p.push(g.outputFigText);
          a > 0 && (g ? x.push({ fig: R, overlap: 1 }) : x.push({ fig: R, overlap: h.overlap })),
            f && (x.push({ fig: u, overlap: v }), (r = L(d))),
            i === o - 1 && (r = w(x, d, n)),
            (h = { chars: [], overlap: v });
          continue;
        }
        r = m(r, u, v, n);
      }
    return (
      k(r) > 0 && p.push(r),
      !0 !== n.showHardBlanks &&
        p.forEach(function (e) {
          for (o = e.length, l = 0; l < o; l++) e[l] = e[l].replace(new RegExp('\\' + n.hardBlank, 'g'), ' ');
        }),
      p
    );
  }
  const B = function (t, n, i) {
    let u,
      l,
      r,
      o = (i = i.replace(/\r\n/g, '\n').replace(/\r/g, '\n')).split('\n'),
      a = [];
    for (l = o.length, u = 0; u < l; u++) a = a.concat(x(o[u], e[t], n));
    for (l = a.length, r = a[0], u = 1; u < l; u++) r = p(r, a[u], n);
    return r ? r.join('\n') : '';
  };
  function M(e, t) {
    let n,
      i,
      u = JSON.parse(JSON.stringify(e));
    if (void 0 !== t.horizontalLayout)
      for (i in ((n = (function (e, t) {
        let n,
          i = ['hLayout', 'hRule1', 'hRule2', 'hRule3', 'hRule4', 'hRule5', 'hRule6'],
          u = {};
        if ('default' === e) for (n = 0; n < i.length; n++) u[i[n]] = t.fittingRules[i[n]];
        else if ('full' === e)
          u = { hLayout: 0, hRule1: !1, hRule2: !1, hRule3: !1, hRule4: !1, hRule5: !1, hRule6: !1 };
        else if ('fitted' === e)
          u = { hLayout: 1, hRule1: !1, hRule2: !1, hRule3: !1, hRule4: !1, hRule5: !1, hRule6: !1 };
        else if ('controlled smushing' === e)
          u = { hLayout: 3, hRule1: !0, hRule2: !0, hRule3: !0, hRule4: !0, hRule5: !0, hRule6: !0 };
        else {
          if ('universal smushing' !== e) return;
          u = { hLayout: 2, hRule1: !1, hRule2: !1, hRule3: !1, hRule4: !1, hRule5: !1, hRule6: !1 };
        }
        return u;
      })(t.horizontalLayout, e)),
      n))
        n.hasOwnProperty(i) && (u.fittingRules[i] = n[i]);
    if (void 0 !== t.verticalLayout)
      for (i in ((n = (function (e, t) {
        let n,
          i = ['vLayout', 'vRule1', 'vRule2', 'vRule3', 'vRule4', 'vRule5'],
          u = {};
        if ('default' === e) for (n = 0; n < i.length; n++) u[i[n]] = t.fittingRules[i[n]];
        else if ('full' === e) u = { vLayout: 0, vRule1: !1, vRule2: !1, vRule3: !1, vRule4: !1, vRule5: !1 };
        else if ('fitted' === e) u = { vLayout: 1, vRule1: !1, vRule2: !1, vRule3: !1, vRule4: !1, vRule5: !1 };
        else if ('controlled smushing' === e)
          u = { vLayout: 3, vRule1: !0, vRule2: !0, vRule3: !0, vRule4: !0, vRule5: !0 };
        else {
          if ('universal smushing' !== e) return;
          u = { vLayout: 2, vRule1: !1, vRule2: !1, vRule3: !1, vRule4: !1, vRule5: !1 };
        }
        return u;
      })(t.verticalLayout, e)),
      n))
        n.hasOwnProperty(i) && (u.fittingRules[i] = n[i]);
    return (
      (u.printDirection = void 0 !== t.printDirection ? t.printDirection : e.printDirection),
      (u.showHardBlanks = t.showHardBlanks || !1),
      (u.width = t.width || -1),
      (u.whitespaceBreak = t.whitespaceBreak || !1),
      u
    );
  }
  const O = function (e, t, n) {
    O.text(e, t, n);
  };
  return (
    (O.text = function (e, n, i) {
      let u = '';
      (e += ''),
        'function' == typeof arguments[1] && ((i = n), ((n = {}).font = t.font)),
        'string' == typeof n ? ((u = n), (n = {})) : (u = (n = n || {}).font || t.font),
        O.loadFont(u, function (t, l) {
          if (t) return i(t);
          i(null, B(u, M(l, n), e));
        });
    }),
    (O.textSync = function (e, n) {
      let i = '';
      (e += ''), 'string' == typeof n ? ((i = n), (n = {})) : (i = (n = n || {}).font || t.font);
      var u = M(O.loadFontSync(i), n);
      return B(i, u, e);
    }),
    (O.metadata = function (t, n) {
      (t += ''),
        O.loadFont(t, function (i, u) {
          i ? n(i) : n(null, u, e[t].comment);
        });
    }),
    (O.defaults = function (e) {
      if ('object' == typeof e && null !== e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      return JSON.parse(JSON.stringify(t));
    }),
    (O.parseFont = function (t, n) {
      (n = n.replace(/\r\n/g, '\n').replace(/\r/g, '\n')), (e[t] = {});
      var i = n.split('\n'),
        u = i.splice(0, 1)[0].split(' '),
        l = e[t],
        r = {};
      if (
        ((r.hardBlank = u[0].substr(5, 1)),
        (r.height = parseInt(u[1], 10)),
        (r.baseline = parseInt(u[2], 10)),
        (r.maxLength = parseInt(u[3], 10)),
        (r.oldLayout = parseInt(u[4], 10)),
        (r.numCommentLines = parseInt(u[5], 10)),
        (r.printDirection = u.length >= 6 ? parseInt(u[6], 10) : 0),
        (r.fullLayout = u.length >= 7 ? parseInt(u[7], 10) : null),
        (r.codeTagCount = u.length >= 8 ? parseInt(u[8], 10) : null),
        (r.fittingRules = (function (e, t) {
          let n,
            i,
            u,
            l,
            r = {},
            o = [
              [16384, 'vLayout', 2],
              [8192, 'vLayout', 1],
              [4096, 'vRule5', !0],
              [2048, 'vRule4', !0],
              [1024, 'vRule3', !0],
              [512, 'vRule2', !0],
              [256, 'vRule1', !0],
              [128, 'hLayout', 2],
              [64, 'hLayout', 1],
              [32, 'hRule6', !0],
              [16, 'hRule5', !0],
              [8, 'hRule4', !0],
              [4, 'hRule3', !0],
              [2, 'hRule2', !0],
              [1, 'hRule1', !0],
            ];
          for (n = null !== t ? t : e, i = 0, u = o.length; i < u; )
            (l = o[i]),
              n >= l[0]
                ? ((n -= l[0]), (r[l[1]] = void 0 === r[l[1]] ? l[2] : r[l[1]]))
                : 'vLayout' !== l[1] && 'hLayout' !== l[1] && (r[l[1]] = !1),
              i++;
          return (
            void 0 === r.hLayout
              ? 0 === e
                ? (r.hLayout = 1)
                : -1 === e
                ? (r.hLayout = 0)
                : r.hRule1 || r.hRule2 || r.hRule3 || r.hRule4 || r.hRule5 || r.hRule6
                ? (r.hLayout = 3)
                : (r.hLayout = 2)
              : 2 === r.hLayout &&
                (r.hRule1 || r.hRule2 || r.hRule3 || r.hRule4 || r.hRule5 || r.hRule6) &&
                (r.hLayout = 3),
            void 0 === r.vLayout
              ? r.vRule1 || r.vRule2 || r.vRule3 || r.vRule4 || r.vRule5
                ? (r.vLayout = 3)
                : (r.vLayout = 0)
              : 2 === r.vLayout && (r.vRule1 || r.vRule2 || r.vRule3 || r.vRule4 || r.vRule5) && (r.vLayout = 3),
            r
          );
        })(r.oldLayout, r.fullLayout)),
        (l.options = r),
        1 !== r.hardBlank.length ||
          isNaN(r.height) ||
          isNaN(r.baseline) ||
          isNaN(r.maxLength) ||
          isNaN(r.oldLayout) ||
          isNaN(r.numCommentLines))
      )
        throw new Error('FIGlet header contains invalid values.');
      let o,
        a = [];
      for (o = 32; o <= 126; o++) a.push(o);
      if (((a = a.concat(196, 214, 220, 228, 246, 252, 223)), i.length < r.numCommentLines + r.height * a.length))
        throw new Error('FIGlet file is missing data.');
      let h,
        s,
        f = !1;
      for (
        l.comment = i.splice(0, r.numCommentLines).join('\n'), l.numChars = 0;
        i.length > 0 && l.numChars < a.length;

      ) {
        for (h = a[l.numChars], l[h] = i.splice(0, r.height), o = 0; o < r.height; o++)
          void 0 === l[h][o]
            ? (l[h][o] = '')
            : ((s = new RegExp('\\' + l[h][o].substr(l[h][o].length - 1, 1) + '+$')),
              (l[h][o] = l[h][o].replace(s, '')));
        l.numChars++;
      }
      for (; i.length > 0; ) {
        if (((h = i.splice(0, 1)[0].split(' ')[0]), /^0[xX][0-9a-fA-F]+$/.test(h))) h = parseInt(h, 16);
        else if (/^0[0-7]+$/.test(h)) h = parseInt(h, 8);
        else if (/^[0-9]+$/.test(h)) h = parseInt(h, 10);
        else {
          if (!/^-0[xX][0-9a-fA-F]+$/.test(h)) {
            if ('' === h) break;
            console.log('Invalid data:' + h), (f = !0);
            break;
          }
          h = parseInt(h, 16);
        }
        for (l[h] = i.splice(0, r.height), o = 0; o < r.height; o++)
          void 0 === l[h][o]
            ? (l[h][o] = '')
            : ((s = new RegExp('\\' + l[h][o].substr(l[h][o].length - 1, 1) + '+$')),
              (l[h][o] = l[h][o].replace(s, '')));
        l.numChars++;
      }
      if (!0 === f) throw new Error('Error parsing data.');
      return r;
    }),
    (O.loadFont = function (n, i) {
      if (e[n]) i(null, e[n].options);
      else {
        if ('function' != typeof fetch)
          throw (
            (console.error(
              'figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch'
            ),
            new Error('fetch is required for figlet.js to work.'))
          );
        fetch(t.fontPath + '/' + n + '.flf')
          .then(function (e) {
            if (e.ok) return e.text();
            throw (console.log('Unexpected response', e), new Error('Network response was not ok.'));
          })
          .then(function (e) {
            i(null, O.parseFont(n, e));
          })
          .catch(i);
      }
    }),
    (O.loadFontSync = function (t) {
      if (e[t]) return e[t].options;
      throw new Error('synchronous font loading is not implemented for the browser');
    }),
    (O.preloadFonts = function (e, n) {
      let i = [];
      e.reduce(function (e, n) {
        return e.then(function () {
          return fetch(t.fontPath + '/' + n + '.flf')
            .then((e) => e.text())
            .then(function (e) {
              i.push(e);
            });
        });
      }, Promise.resolve()).then(function (t) {
        for (var u in e) e.hasOwnProperty(u) && O.parseFont(e[u], i[u]);
        n && n();
      });
    }),
    (O.figFonts = e),
    O
  );
})();
'undefined' != typeof module && void 0 !== module.exports && (module.exports = figlet);
//# sourceMappingURL=/sm/3e1d0039007b9b337506c70e317f81ef76311598a9e7fde7072be4f35dccbe3c.map
