/*! Built with http://stenciljs.com */
(function (window, document, appNamespace, publicPath, appCore, appCorePolyfilled, components, x, i) {
    'use strict';
    // create global namespace if it doesn't already exist

    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" variable from the args for funzies
    x = document.createElement('style');
    x.setAttribute('data-styles', '');
    x.innerHTML = (components.map(function (c) {
        return c[0];
    }).join(',') + '{visibility:hidden}.💎{visibility:inherit}').toLowerCase();
    document.head.insertBefore(x, document.head.firstChild);
    // get this current script
    appNamespace = appNamespace.toLowerCase();
    x = document.scripts;
    for (i = x.length - 1; i >= 0; i--) {
        if (x[i].src && x[i].src.split('/').pop() === appNamespace + '.js') {
            publicPath = x[i].src.replace(appNamespace + '.js', appNamespace + '/');
            break;
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    x = document.createElement('script');
    x.src = publicPath + (window.customElements && window.fetch ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-core', appCore);
    document.head.appendChild(x);
})(window, document, "App","/build/app/","app.core.js","app.core.pf.js",[["STENCIL-ASYNC-CONTENT","stencil-async-content",{}],["STENCIL-ROUTE","stencil-async-content",{}],["STENCIL-ROUTE-LINK","stencil-async-content",{},0,0,1],["STENCIL-ROUTE-TITLE","stencil-async-content",{}],["STENCIL-ROUTER","stencil-async-content",{},0,0,1],["STENCIL-ROUTER-REDIRECT","stencil-async-content",{}],["STEREO-SCOPE","stereo-scope",{"$":"stereo-scope"},[["imageOne",1],["imageTwo",1],["showSpeedRange",1]]],["TEST-APP","test-app",{}],["TEST-DEMO-FOUR","test-app",{}],["TEST-DEMO-SIX","test-app",{}],["TEST-DEMO-THREE","test-app",{}]]);