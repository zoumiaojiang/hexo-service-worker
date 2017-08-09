/**
 * @file run sw-precache
 * @author mj(zoumiaojiang@gmail.com)
 */

/* global public_dir */
/* eslint-disable fecs-camelcase */
import fs from 'fs';
import path from 'path';
import {
    SW_FILE_NAME
} from './config';


/**
 * 对于小于 10 的数字向左补全0
 *
 * @param  {number} value 数字
 * @return {string}       补全后的字符串
 */
function padding(value) {
    return value < 10 ? `0${value}` : value;
}

/**
 * 获取时间戳版本号
 *
 * @return {string} 版本号
 */
function versionGenerator() {
    let d = new Date();

    return ''
        + d.getFullYear()
        + padding(d.getMonth() + 1)
        + padding(d.getDate())
        + padding(d.getHours())
        + padding(d.getMinutes())
        + padding(d.getSeconds());
}

export default function () {
    let swRegisterTemplatePath = path.resolve(__dirname, 'templates', 'sw-register.tpl.js');
    let swRegisterTempleteCon = fs.readFileSync(swRegisterTemplatePath, 'utf-8');
    let swRegisterCon = swRegisterTempleteCon
        .replace('__ServiceWorkerName__', SW_FILE_NAME)
        .replace('__BuildVersion__', versionGenerator())
        ;

    let swRegisterDistPath = path.resolve(this.public_dir, 'sw-register.js');

    fs.writeFileSync(swRegisterDistPath, swRegisterCon);

    return Promise.resolve();
}
