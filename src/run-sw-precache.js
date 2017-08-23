/**
 * @file run sw-precache
 * @author mj(zoumiaojiang@gmail.com)
 */

/* global public_dir */
/* eslint-disable fecs-camelcase */
import path from 'path';
import SWPrecache from 'sw-precache';
import {
    SW_FILE_NAME
} from './config';

export default function () {
    let {
        public_dir,
        config,
        log
    } = this;

    let {
        root,
        service_worker
    } = config;

    let hexoPublicDir = 'public';
    let rootPrefix = root.replace(/\/$/, '');
    let SWPrecacheConfig = Object.assign({
        logger: log.info.bind(log),
        ignoreUrlParametersMatching: [/./],
        replacePrefix: rootPrefix,
        staticFileGlobs: [hexoPublicDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
        stripPrefix: hexoPublicDir,
        templateFilePath: path.resolve(__dirname, 'templates', 'sw-precache.tpl')
    }, service_worker);

    return SWPrecache.write(path.join(public_dir, SW_FILE_NAME), SWPrecacheConfig);
}
