/**
 * @file template for inject to *.html
 * @author mj(zoumiaojiang@gmail.com)
 */


var script = document.createElement('script');
var firstScript = document.getElementsByTagName('script')[0];
script.type = 'text/javascript';
script.async = true;
script.src = '/sw-register.js?v=' + Date.now();
firstScript.parentNode.insertBefore(script, firstScript);

