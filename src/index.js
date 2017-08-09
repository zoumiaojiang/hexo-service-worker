/**
 * @file hexo plugin entry
 * @author mj(zoumiaojiang@gmail.com)
 */

/* global hexo */
import serviceWorkerHandler from './lib';

hexo.extend.filter.register('before_exit', serviceWorkerHandler);
