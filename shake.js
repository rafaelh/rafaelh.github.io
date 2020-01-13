(function() {
    function h() {
        var e = document.createElement("link");
        e.setAttribute("type", "text/css");
        e.setAttribute("rel", "stylesheet");
        e.setAttribute("href", l);
        e.setAttribute("class", c);
        document.body.appendChild(e)
    }

    function p() {
        var e = document.getElementsByClassName(c);
        for (var t = 0; t < e.length; t++) {
            document.body.removeChild(e[t])
        }
    }

    function d() {
        var e = document.createElement("div");
        e.setAttribute("class", f);
        document.body.appendChild(e);
        setTimeout(function() {
            document.body.removeChild(e)
        }, 100)
    }

    function v(e) {
        return {
            height: e.offsetHeight,
            width: e.offsetWidth
        }
    }

    function m(i) {
        var s = v(i);
        return s.height > e && s.height < n && s.width > t && s.width < r
    }

    function g(e) {
        var t = e;
        var n = 0;
        while (!!t) {
            n += t.offsetTop;
            t = t.offsetParent
        }
        return n
    }

    function y() {
        var e = document.documentElement;
        if (!!window.innerWidth) {
            return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
            return e.clientHeight
        }
        return 0
    }

    function b() {
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }

    function S(e) {
        var t = g(e);
        return t >= E && t <= w + E
    }

    function x() {
        var e = document.createElement("audio");
        e.setAttribute("class", c);
        e.src = i;
        e.loop = false;
        var t = false,
            n = false,
            r = false;
        e.addEventListener("timeupdate", function() {
            var i = e.currentTime,
                s = D,
                o = s.length,
                u;
            if (i >= .5 && !t) {
                t = true;
                T(_)
            }
            if (i >= 15.5 && !n) {
                n = true;
                k();
                d();
                for (u = 0; u < o; u++) {
                    N(s[u])
                }
            }
            if (e.currentTime >= 28.4 && !r) {
                r = true;
                C()
            }
        }, true);
        e.addEventListener("ended", function() {
            k();
            p()
        }, true);
        e.innerHTML = "<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>";
        document.body.appendChild(e);
        e.play()
    }

    function T(e) {
        e.className += " " + s + " " + u
    }

    function N(e) {
        e.className += " " + s + " " + a[Math.floor(Math.random() * a.length)]
    }

    function C() {
        var e = document.getElementsByClassName(s);
        for (var t = 0; t < e.length;) {
            e[t].className = e[t].className.replace(s, o)
        }
        s = o
    }

    function k() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
            e[n].className = e[n].className.replace(t, "")
        }
    }
    var e = 30;
    var t = 30;
    var n = 350;
    var r = 350;
    var i = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.ogg";
    var s = "mw-harlem_shake_me";
    var o = "mw-harlem_shake_slow";
    var u = "im_first";
    var a = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
    var f = "mw-strobe_light";
    var l = "//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";
    var c = "mw_added_css";
    var w = y();
    var E = b();
    var L = document.getElementsByTagName("*"),
        A = L.length,
        O, M;
    var _ = null;
    for (O = 0; O < A; O++) {
        M = L[O];
        if (m(M)) {
            if (S(M)) {
                _ = M;
                break
            }
        }
    }
    if (M === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
    }
    h();
    x();
    var D = [];
    for (O = 0; O < A; O++) {
        M = L[O];
        if (m(M)) {
            D.push(M)
        }
    }
})()
