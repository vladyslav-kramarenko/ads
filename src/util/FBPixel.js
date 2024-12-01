/* global fbq */

const insertFacebookPixel = () => {
    const fbPixelId = process.env.REACT_APP_FB_PIXEL;
    if (!fbPixelId) {
        console.error("Facebook Pixel ID is not defined");
        return;
    }

    // Ensure the script isn't loaded multiple times
    if (document.querySelector(`script[src="https://connect.facebook.net/en_US/fbevents.js"]`)) {
        console.warn("Facebook Pixel script is already loaded.");
        return;
    }

    // Dynamically load Facebook Pixel script
    (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize Facebook Pixel
    fbq('init', fbPixelId);
    fbq('track', 'PageView');
};

export default insertFacebookPixel;
