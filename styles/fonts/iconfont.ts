import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './iconfont.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';
import { cache } from '../../components/utils';

export const makeIconStyles = cache(function _makeIconStyles(k: string) {
    injectGlobal`
        @font-face {
          font-family: "kd-font";
          src: url('${eot}'); /* IE9 */
          src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
          url('${woff}') format('woff'),
          url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
          url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
        }

        .${k}-icon {
          font-family: "kd-font" !important;
          // font-size: 16px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .${k}-icon-heart-fill:before {
          content: "\\e9ba";
        }

        .${k}-icon-notification-fill:before {
          content: "\\e9b9";
        }

        .${k}-icon-share:before {
          content: "\\e9b8";
        }

        .${k}-icon-tag:before {
          content: "\\e9b7";
        }

        .${k}-icon-clone:before {
          content: "\\e9b6";
        }

        .${k}-icon-information-fill:before {
          content: "\\e9b1";
        }

        .${k}-icon-warning-fill:before {
          content: "\\e9b2";
        }

        .${k}-icon-success-fill:before {
          content: "\\e9b3";
        }

        .${k}-icon-error-fill:before {
          content: "\\e9b4";
        }

        .${k}-icon-question-fill:before {
          content: "\\e9b5";
        }

        .${k}-icon-information:before {
          content: "\\e9b0";
        }

        .${k}-icon-cloud:before {
          content: "\\e9ac";
        }

        .${k}-icon-pin:before {
          content: "\\e9ad";
        }

        .${k}-icon-home:before {
          content: "\\e9ae";
        }

        .${k}-icon-cut:before {
          content: "\\e9af";
        }

        .${k}-icon-server:before {
          content: "\\e99a";
        }

        .${k}-icon-internet:before {
          content: "\\e99b";
        }

        .${k}-icon-mail:before {
          content: "\\e99c";
        }

        .${k}-icon-paper:before {
          content: "\\e99d";
        }

        .${k}-icon-phone:before {
          content: "\\e99e";
        }

        .${k}-icon-panel:before {
          content: "\\e99f";
        }

        .${k}-icon-alarm:before {
          content: "\\e9a0";
        }

        .${k}-icon-notification:before {
          content: "\\e9a1";
        }

        .${k}-icon-earphone:before {
          content: "\\e9a2";
        }

        .${k}-icon-settings-horizontal:before {
          content: "\\e9a3";
        }

        .${k}-icon-message:before {
          content: "\\e9a4";
        }

        .${k}-icon-heart:before {
          content: "\\e9a5";
        }

        .${k}-icon-return-right:before {
          content: "\\e9a6";
        }

        .${k}-icon-picture:before {
          content: "\\e9a7";
        }

        .${k}-icon-logout:before {
          content: "\\e9a8";
        }

        .${k}-icon-all:before {
          content: "\\e9a9";
        }

        .${k}-icon-drag:before {
          content: "\\e9aa";
        }

        .${k}-icon-settings-vertical:before {
          content: "\\e9ab";
        }

        .${k}-icon-more:before {
          content: "\\e97d";
        }

        .${k}-icon-more-circled:before {
          content: "\\e988";
        }

        .${k}-icon-folder:before {
          content: "\\e994";
        }

        .${k}-icon-unlock:before {
          content: "\\e995";
        }

        .${k}-icon-user:before {
          content: "\\e996";
        }

        .${k}-icon-folder-open:before {
          content: "\\e997";
        }

        .${k}-icon-lock:before {
          content: "\\e998";
        }

        .${k}-icon-users:before {
          content: "\\e999";
        }

        .${k}-icon-edit:before {
          content: "\\e98e";
        }

        .${k}-icon-location:before {
          content: "\\e98f";
        }

        .${k}-icon-delete:before {
          content: "\\e990";
        }

        .${k}-icon-settings:before {
          content: "\\e992";
        }

        .${k}-icon-calendar:before {
          content: "\\e993";
        }

        .${k}-icon-search:before {
          content: "\\e97e";
        }

        .${k}-icon-alert:before {
          content: "\\e97f";
        }

        .${k}-icon-question:before {
          content: "\\e980";
        }

        .${k}-icon-zoom-in:before {
          content: "\\e981";
        }

        .${k}-icon-zoom-out:before {
          content: "\\e982";
        }

        .${k}-icon-close-outline:before {
          content: "\\e983";
        }

        .${k}-icon-check-outline:before {
          content: "\\e984";
        }

        .${k}-icon-hidden:before {
          content: "\\e985";
        }

        .${k}-icon-visible:before {
          content: "\\e986";
        }

        .${k}-icon-time:before {
          content: "\\e987";
        }

        .${k}-icon-refresh:before {
          content: "\\e989";
        }

        .${k}-icon-batchsearch:before {
          content: "\\e98a";
        }

        .${k}-icon-upload:before {
          content: "\\e98c";
        }

        .${k}-icon-download:before {
          content: "\\e98d";
        }

        .${k}-icon-left-squared:before {
          content: "\\e975";
        }

        .${k}-icon-right-squared:before {
          content: "\\e976";
        }

        .${k}-icon-down-squared:before {
          content: "\\e977";
        }

        .${k}-icon-up-squared:before {
          content: "\\e978";
        }

        .${k}-icon-right-circled:before {
          content: "\\e979";
        }

        .${k}-icon-down-circled:before {
          content: "\\e97a";
        }

        .${k}-icon-left-circled:before {
          content: "\\e97b";
        }

        .${k}-icon-up-circled:before {
          content: "\\e97c";
        }

        .${k}-icon-up-bold:before {
          content: "\\e962";
        }

        .${k}-icon-left-bold:before {
          content: "\\e963";
        }

        .${k}-icon-down:before {
          content: "\\e964";
        }

        .${k}-icon-right-bold:before {
          content: "\\e965";
        }

        .${k}-icon-right:before {
          content: "\\e966";
        }

        .${k}-icon-left:before {
          content: "\\e968";
        }

        .${k}-icon-up:before {
          content: "\\e969";
        }

        .${k}-icon-down-bold:before {
          content: "\\e96a";
        }

        .${k}-icon-sort:before {
          content: "\\e96b";
        }

        .${k}-icon-sort-bold:before {
          content: "\\e96c";
        }

        .${k}-icon-check:before {
          content: "\\e96d";
        }

        .${k}-icon-check-bold:before {
          content: "\\e96e";
        }

        .${k}-icon-close-bold:before {
          content: "\\e96f";
        }

        .${k}-icon-add:before {
          content: "\\e970";
        }

        .${k}-icon-minus-bold:before {
          content: "\\e971";
        }

        .${k}-icon-close:before {
          content: "\\e972";
        }

        .${k}-icon-minus:before {
          content: "\\e973";
        }

        .${k}-icon-add-bold:before {
          content: "\\e974";
        }

        .${k}-icon-start:before {
          content: "\\e9bb";
        }
    `;
});
