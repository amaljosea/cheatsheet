(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    239: function(e, t, a) {
      'use strict';
      a.r(t);
      var i = a(0),
        n = a.n(i),
        r = a(16),
        s = a(234),
        o = a(233),
        l = (a(290), a(235), a(355)),
        c = a(34),
        d = a(356),
        u = a.n(d),
        f = a(68),
        g = a(357),
        p = a.n(g);
      function m() {
        var e = w(['\n    order: 1;\n  ']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = w(['\n    order: 2;\n  ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = w([
          '\n    flex-direction: column;\n    text-align: center;\n  ',
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function w(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var M = r.c.div.withConfig({
          displayName: 'bio__Container',
          componentId: 'sc-16moc3v-0',
        })(
          [
            'display:flex;align-items:center;justify-content:space-between;margin:5rem 0;',
            '',
          ],
          f.a.tablet(y())
        ),
        L = r.c.div.withConfig({
          displayName: 'bio__TextContainer',
          componentId: 'sc-16moc3v-1',
        })(['', ''], f.a.phone(h())),
        N = r.c.div.withConfig({
          displayName: 'bio__ImageContainer',
          componentId: 'sc-16moc3v-2',
        })(['', ''], f.a.phone(m())),
        b = r.c.h3.withConfig({
          displayName: 'bio__Name',
          componentId: 'sc-16moc3v-3',
        })([
          "font-size:2.4rem;letter-spacing:0.1rem;font-weight:800;margin-bottom:1rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-family:'Roboto';",
        ]),
        E = r.c.sub.withConfig({
          displayName: 'bio__TagLine',
          componentId: 'sc-16moc3v-4',
        })(['font-weight:normal;font-size:1.6rem;margin:0;display:block;']),
        j = r.c.img.withConfig({
          displayName: 'bio__TwitterIcon',
          componentId: 'sc-16moc3v-5',
        })([
          'height:1.5rem;width:1.5rem;padding:2.5rem 0rem;box-sizing:unset;',
        ]),
        I = '1626496875',
        T = function() {
          return n.a.createElement(c.StaticQuery, {
            query: I,
            render: function(e) {
              var t = e.site.siteMetadata,
                a = t.author,
                i = t.authorTagline,
                r = t.social;
              return n.a.createElement(
                M,
                null,
                n.a.createElement(
                  L,
                  null,
                  n.a.createElement(b, null, a),
                  n.a.createElement(E, null, i),
                  n.a.createElement(
                    'a',
                    {
                      href: 'https://twitter.com/' + r.twitter,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                    n.a.createElement(j, { src: p.a, alt: 'twitter' })
                  )
                ),
                n.a.createElement(
                  N,
                  null,
                  n.a.createElement(u.a, {
                    fixed: e.avatar.childImageSharp.fixed,
                    alt: a,
                  })
                )
              );
            },
            data: l,
          });
        },
        S = a(143);
      function D() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })(['\n    margin: 0.5rem 0;\n    padding: 0.4rem 0;\n  ']);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      var v = r.c.div.withConfig({
          displayName: 'post__Container',
          componentId: 'airrv5-0',
        })(
          ['padding:1rem 0;margin:1rem 0;&:first-child{margin-top:0;}', ''],
          f.a.phone(D())
        ),
        z = r.c.h4.withConfig({
          displayName: 'post__Title',
          componentId: 'airrv5-1',
        })(['margin-bottom:0.2rem;font-size:2.2rem;']),
        C = function(e) {
          var t = e.node;
          return n.a.createElement(
            S.a,
            { to: t.fields.slug },
            n.a.createElement(
              v,
              null,
              n.a.createElement(z, null, t.frontmatter.title),
              n.a.createElement(
                'sub',
                null,
                n.a.createElement('span', null, 'on ', t.frontmatter.date),
                n.a.createElement('span', null, '  -  '),
                n.a.createElement('span', null, t.fields.readingTime.text)
              ),
              n.a.createElement('p', {
                dangerouslySetInnerHTML: { __html: t.excerpt },
              })
            )
          );
        };
      function A() {
        var e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })(['\n    margin: 3rem 0 0;\n  ']);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }
      a.d(t, 'pageQuery', function() {
        return Q;
      });
      var x = r.c.h3.withConfig({
          displayName: 'pages__Title',
          componentId: 'sc-8fp4vw-0',
        })(
          ['font-weight:800;font-size:2.6rem;margin:6rem 0 0;', ''],
          f.a.phone(A())
        ),
        k = (function(e) {
          var t, a;
          function i() {
            return e.apply(this, arguments) || this;
          }
          return (
            (a = e),
            ((t = i).prototype = Object.create(a.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = a),
            (i.prototype.render = function() {
              var e = this.props.data.allMarkdownRemark.edges;
              return n.a.createElement(
                s.a,
                null,
                n.a.createElement(o.a, {
                  title: 'All Posts',
                  keywords: ['gatsby', 'blog', 'react'],
                }),
                n.a.createElement(T, null),
                n.a.createElement(
                  'main',
                  null,
                  n.a.createElement(x, null, 'Latest Posts'),
                  e.map(function(e) {
                    var t = e.node;
                    return n.a.createElement(C, { key: t.id, node: t });
                  })
                )
              );
            }),
            i
          );
        })(i.Component),
        Q = ((t.default = k), '2436808889');
    },
    290: function(e, t, a) {
      'use strict';
      a(159)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '');
        };
      });
    },
    355: function(e) {
      e.exports = JSON.parse(
        '{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVQ4y2NgoDNggmJkwAzFJBvEgMUgsl0FA8FAPAGIZwLxDiC+BMRrgDgRiFmgahiJMUwOiE8D8T4gNgdiGSBWBeKpQPwfilcTchnMJikg/gDE13GoS4Ma+BCIWYkxcD1UgzWUz4bkepgaPyA2wedlmFf1oYbdAGJOEiIMZwzmQg3cSEAzEyGDYQZOhho4H8pnITepwAycDTVwIbUM7IAaeIDSLAYzMBBq4DcgViOQQ5iISTLcQHwHaugcJI3MUDWMpGRBmMJwpNxQgEd9PhCLEJuPi5AM3QDELkAsAcSSQOwGxMeB+BhSoicqC9oC8U4kg/8B8Scgvg/EzVjUE13iyAKxIxB7AbExWhgyklqMMRIIb7IAI1IpTTAfAwCC4DAdniMaHAAAAABJRU5ErkJggg==","width":70,"height":70,"src":"/static/2bb7f720ada06cc3fd592031fef08260/fdfd8/gatsby-icon.png","srcSet":"/static/2bb7f720ada06cc3fd592031fef08260/fdfd8/gatsby-icon.png 1x,\\n/static/2bb7f720ada06cc3fd592031fef08260/d1b91/gatsby-icon.png 1.5x,\\n/static/2bb7f720ada06cc3fd592031fef08260/a8479/gatsby-icon.png 2x,\\n/static/2bb7f720ada06cc3fd592031fef08260/38a8f/gatsby-icon.png 3x"}}},"site":{"siteMetadata":{"author":"Amal Jose A","authorTagline":"Passionate in creating digital experiences","social":{"twitter":"howareyouami"}}}}}'
      );
    },
    356: function(e, t, a) {
      'use strict';
      a(290);
      var i = a(20);
      (t.__esModule = !0), (t.default = void 0);
      var n,
        r = i(a(85)),
        s = i(a(91)),
        o = i(a(162)),
        l = i(a(163)),
        c = i(a(0)),
        d = i(a(52)),
        u = function(e) {
          var t = (0, l.default)({}, e);
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          );
        },
        f = {},
        g = function(e) {
          var t = u(e),
            a = t.fluid ? t.fluid.src : t.fixed.src;
          return f[a] || !1;
        },
        p = [];
      var m = function(e, t) {
          (void 0 === n &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            (n = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  p.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (n.unobserve(t[0]), t[1]());
                  });
                });
              },
              { rootMargin: '200px' }
            )),
          n).observe(e),
            p.push([e, t]);
        },
        h = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            i = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                '/>'
              : '',
            n = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : '',
            l = e.height ? 'height="' + e.height + '" ' : '',
            c = e.opacity ? e.opacity : '1';
          return (
            '<picture>' +
            i +
            n +
            '<img ' +
            o +
            l +
            t +
            s +
            r +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : '0.5s') +
            ';opacity:' +
            c +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        y = c.default.forwardRef(function(e, t) {
          var a = e.style,
            i = e.onLoad,
            n = e.onError,
            r = (0, o.default)(e, ['style', 'onLoad', 'onError']);
          return c.default.createElement(
            'img',
            (0, l.default)({}, r, {
              onLoad: i,
              onError: n,
              ref: t,
              style: (0, l.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                a
              ),
            })
          );
        });
      y.propTypes = {
        style: d.default.object,
        onError: d.default.func,
        onLoad: d.default.func,
      };
      var w = (function(e) {
        function t(t) {
          var a;
          a = e.call(this, t) || this;
          var i = !0,
            n = !1,
            r = t.fadeIn,
            o = g(t);
          !o &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            ((i = !1), (n = !0)),
            'undefined' == typeof window && (i = !1),
            t.critical && ((i = !0), (n = !1));
          var l = !(a.props.critical && !a.props.fadeIn);
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: !1,
              IOSupported: n,
              fadeIn: r,
              hasNoScript: l,
              seenBefore: o,
            }),
            (a.imageRef = c.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind(
              (0, s.default)((0, s.default)(a))
            )),
            (a.handleRef = a.handleRef.bind((0, s.default)((0, s.default)(a)))),
            a
          );
        }
        (0, r.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.props.critical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.handleRef = function(e) {
            var t = this;
            this.state.IOSupported &&
              e &&
              m(e, function() {
                t.state.isVisible ||
                  'function' != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: g(t.props) }),
                  t.setState({ isVisible: !0, imgLoaded: !1 });
              });
          }),
          (a.handleImageLoaded = function() {
            var e, t, a;
            (e = this.props),
              (t = u(e)),
              (a = t.fluid ? t.fluid.src : t.fixed.src),
              (f[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              n = e.style,
              r = void 0 === n ? {} : n,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              d = e.placeholderStyle,
              f = void 0 === d ? {} : d,
              g = e.placeholderClassName,
              p = e.fluid,
              m = e.fixed,
              w = e.backgroundColor,
              M = e.Tag,
              L = 'boolean' == typeof w ? 'lightgray' : w,
              N = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s',
                },
                o,
                f
              ),
              b = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none',
                },
                o
              ),
              E = {
                title: t,
                alt: this.state.isVisible ? '' : a,
                style: N,
                className: g,
              };
            if (p) {
              var j = p;
              return c.default.createElement(
                M,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, l.default)(
                    { position: 'relative', overflow: 'hidden' },
                    r
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(j.srcSet),
                },
                c.default.createElement(M, {
                  style: {
                    width: '100%',
                    paddingBottom: 100 / j.aspectRatio + '%',
                  },
                }),
                j.base64 &&
                  c.default.createElement(
                    y,
                    (0, l.default)({ src: j.base64 }, E)
                  ),
                j.tracedSVG &&
                  c.default.createElement(
                    y,
                    (0, l.default)({ src: j.tracedSVG }, E)
                  ),
                L &&
                  c.default.createElement(M, {
                    title: t,
                    style: {
                      backgroundColor: L,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: '0.35s',
                      right: 0,
                      left: 0,
                    },
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    'picture',
                    null,
                    j.srcSetWebp &&
                      c.default.createElement('source', {
                        type: 'image/webp',
                        srcSet: j.srcSetWebp,
                        sizes: j.sizes,
                      }),
                    c.default.createElement('source', {
                      srcSet: j.srcSet,
                      sizes: j.sizes,
                    }),
                    c.default.createElement(y, {
                      alt: a,
                      title: t,
                      src: j.src,
                      style: b,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                    })
                  ),
                this.state.hasNoScript &&
                  c.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: h((0, l.default)({ alt: a, title: t }, j)),
                    },
                  })
              );
            }
            if (m) {
              var I = m,
                T = (0, l.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: I.width,
                    height: I.height,
                  },
                  r
                );
              return (
                'inherit' === r.display && delete T.display,
                c.default.createElement(
                  M,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: T,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(I.srcSet),
                  },
                  I.base64 &&
                    c.default.createElement(
                      y,
                      (0, l.default)({ src: I.base64 }, E)
                    ),
                  I.tracedSVG &&
                    c.default.createElement(
                      y,
                      (0, l.default)({ src: I.tracedSVG }, E)
                    ),
                  L &&
                    c.default.createElement(M, {
                      title: t,
                      style: {
                        backgroundColor: L,
                        width: I.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: '0.25s',
                        height: I.height,
                      },
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      'picture',
                      null,
                      I.srcSetWebp &&
                        c.default.createElement('source', {
                          type: 'image/webp',
                          srcSet: I.srcSetWebp,
                          sizes: I.sizes,
                        }),
                      c.default.createElement('source', {
                        srcSet: I.srcSet,
                        sizes: I.sizes,
                      }),
                      c.default.createElement(y, {
                        alt: a,
                        title: t,
                        width: I.width,
                        height: I.height,
                        src: I.src,
                        style: b,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                      })
                    ),
                  this.state.hasNoScript &&
                    c.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: h(
                          (0, l.default)(
                            {
                              alt: a,
                              title: t,
                              width: I.width,
                              height: I.height,
                            },
                            I
                          )
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      w.defaultProps = { critical: !1, fadeIn: !0, alt: '', Tag: 'div' };
      var M = d.default.shape({
          width: d.default.number.isRequired,
          height: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string,
        }),
        L = d.default.shape({
          aspectRatio: d.default.number.isRequired,
          src: d.default.string.isRequired,
          srcSet: d.default.string.isRequired,
          sizes: d.default.string.isRequired,
          base64: d.default.string,
          tracedSVG: d.default.string,
          srcWebp: d.default.string,
          srcSetWebp: d.default.string,
        });
      w.propTypes = {
        resolutions: M,
        sizes: L,
        fixed: M,
        fluid: L,
        fadeIn: d.default.bool,
        title: d.default.string,
        alt: d.default.string,
        className: d.default.oneOfType([d.default.string, d.default.object]),
        critical: d.default.bool,
        style: d.default.object,
        imgStyle: d.default.object,
        placeholderStyle: d.default.object,
        placeholderClassName: d.default.string,
        backgroundColor: d.default.oneOfType([
          d.default.string,
          d.default.bool,
        ]),
        onLoad: d.default.func,
        onError: d.default.func,
        onStartLoad: d.default.func,
        Tag: d.default.string,
      };
      var N = w;
      t.default = N;
    },
    357: function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMzOWExZjI7IiBkPSJNNjEyLDExNi4yNThjLTIyLjUyNSw5Ljk4MS00Ni42OTQsMTYuNzUtNzIuMDg4LDE5Ljc3MmMyNS45MjktMTUuNTI3LDQ1Ljc3Ny00MC4xNTUsNTUuMTg0LTY5LjQxMQ0KCQkJYy0yNC4zMjIsMTQuMzc5LTUxLjE2OSwyNC44Mi03OS43NzUsMzAuNDhjLTIyLjkwNy0yNC40MzctNTUuNDktMzkuNjU4LTkxLjYzLTM5LjY1OGMtNjkuMzM0LDAtMTI1LjU1MSw1Ni4yMTctMTI1LjU1MSwxMjUuNTEzDQoJCQljMCw5LjgyOCwxLjEwOSwxOS40MjcsMy4yNTEsMjguNjA2QzE5Ny4wNjUsMjA2LjMyLDEwNC41NTYsMTU2LjMzNyw0Mi42NDEsODAuMzg2Yy0xMC44MjMsMTguNTEtMTYuOTgsNDAuMDc4LTE2Ljk4LDYzLjEwMQ0KCQkJYzAsNDMuNTU5LDIyLjE4MSw4MS45OTMsNTUuODM1LDEwNC40NzljLTIwLjU3NS0wLjY4OC0zOS45MjYtNi4zNDgtNTYuODY3LTE1Ljc1NnYxLjU2OGMwLDYwLjgwNiw0My4yOTEsMTExLjU1NCwxMDAuNjkzLDEyMy4xMDQNCgkJCWMtMTAuNTE3LDIuODMtMjEuNjA3LDQuMzk4LTMzLjA4LDQuMzk4Yy04LjEwNywwLTE1Ljk0Ny0wLjgwMy0yMy42MzQtMi4zMzNjMTUuOTg1LDQ5LjkwNyw2Mi4zMzYsODYuMTk5LDExNy4yNTMsODcuMTk0DQoJCQljLTQyLjk0NywzMy42NTQtOTcuMDk5LDUzLjY1NS0xNTUuOTE2LDUzLjY1NWMtMTAuMTM0LDAtMjAuMTE2LTAuNjEyLTI5Ljk0NC0xLjcyMWM1NS41NjcsMzUuNjgxLDEyMS41MzYsNTYuNDg1LDE5Mi40MzgsNTYuNDg1DQoJCQljMjMwLjk0OCwwLDM1Ny4xODgtMTkxLjI5MSwzNTcuMTg4LTM1Ny4xODhsLTAuNDIxLTE2LjI1M0M1NzMuODcyLDE2My41MjYsNTk1LjIxMSwxNDEuNDIyLDYxMiwxMTYuMjU4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-29af019ca772e0e8b0d8.js.map
