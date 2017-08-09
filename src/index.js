/**
 * @file hexo plugin entry
 * @author mj(zoumiaojiang@gmail.com)
 */

/* global hexo */
import runSWPrecache from './run-sw-precache';
import runSWRegietr from './run-sw-register';
import injectSWRegister from './inject';

function serviceWorkerHandler() {
    return Promise.all([
        runSWPrecache.call(this),
        runSWRegietr.call(this)
    ]).then(() => injectSWRegister(this.public_dir));
}


hexo.extend.filter.register('before_exit', serviceWorkerHandler);
