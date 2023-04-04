import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './ionicons.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';

injectGlobal`
    @font-face {
      font-family: "kpc-font";
      src: url('${eot}'); /* IE9 */
      src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
     url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('${woff}') format('woff'),
      url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
    }

    .k-icon {
      font-family: "kpc-font";
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .k-icon-calendar:before {
      content: "\\e618";
    }
    
    .k-icon-down-squared:before {
      content: "\\e619";
    }
    
    .k-icon-check:before {
      content: "\\e61a";
    }
    
    .k-icon-arrow-up-circled:before {
      content: "\\e61b";
    }
    
    .k-icon-edit:before {
      content: "\\e61c";
    }
    
    .k-icon-arrow-right-circled:before {
      content: "\\e61d";
    }
    
    .k-icon-earphone:before {
      content: "\\e61e";
    }
    
    .k-icon-copy:before {
      content: "\\e61f";
    }
    
    .k-icon-cut:before {
      content: "\\e620";
    }
    
    .k-icon-folder:before {
      content: "\\e621";
    }
    
    .k-icon-download:before {
      content: "\\e622";
    }
    
    .k-icon-folder-open:before {
      content: "\\e623";
    }
    
    .k-icon-edit2:before {
      content: "\\e624";
    }
    
    .k-icon-drag:before {
      content: "\\e625";
    }
    
    .k-icon-delete:before {
      content: "\\e626";
    }
    
    .k-icon-heart-outline:before {
      content: "\\e627";
    }
    
    .k-icon-fault-outline:before {
      content: "\\e628";
    }
    
    .k-icon-hide:before {
      content: "\\e629";
    }
    
    .k-icon-home:before {
      content: "\\e62a";
    }
    
    .k-icon-left-squared:before {
      content: "\\e62b";
    }
    
    .k-icon-internet:before {
      content: "\\e62c";
    }
    
    .k-icon-mail:before {
      content: "\\e62d";
    }
    
    .k-icon-lock:before {
      content: "\\e62e";
    }
    
    .k-icon-logout:before {
      content: "\\e62f";
    }
    
    .k-icon-location:before {
      content: "\\e630";
    }
    
    .k-icon-message:before {
      content: "\\e631";
    }
    
    .k-icon-minussmall:before {
      content: "\\e632";
    }
    
    .k-icon-minus:before {
      content: "\\e633";
    }
    
    .k-icon-more-circled:before {
      content: "\\e634";
    }
    
    .k-icon-more:before {
      content: "\\e635";
    }
    
    .k-icon-notification-outline:before {
      content: "\\e636";
    }
    
    .k-icon-picture:before {
      content: "\\e637";
    }
    
    .k-icon-paper:before {
      content: "\\e638";
    }
    
    .k-icon-refresh2:before {
      content: "\\e639";
    }
    
    .k-icon-phone:before {
      content: "\\e63a";
    }
    
    .k-icon-pin:before {
      content: "\\e63b";
    }
    
    .k-icon-panel:before {
      content: "\\e63c";
    }
    
    .k-icon-refresh:before {
      content: "\\e63d";
    }
    
    .k-icon-question:before {
      content: "\\e63e";
    }
    
    .k-icon-return-right:before {
      content: "\\e63f";
    }
    
    .k-icon-servers:before {
      content: "\\e640";
    }
    
    .k-icon-search:before {
      content: "\\e641";
    }
    
    .k-icon-settings-vertical:before {
      content: "\\e642";
    }
    
    .k-icon-right-squared:before {
      content: "\\e643";
    }
    
    .k-icon-time:before {
      content: "\\e644";
    }
    
    .k-icon-sortbig:before {
      content: "\\e645";
    }
    
    .k-icon-settings-horizontal:before {
      content: "\\e646";
    }
    
    .k-icon-settings:before {
      content: "\\e647";
    }
    
    .k-icon-truth-circled:before {
      content: "\\e648";
    }
    
    .k-icon-truth:before {
      content: "\\e649";
    }
    
    .k-icon-sort:before {
      content: "\\e64a";
    }
    
    .k-icon-sortfill:before {
      content: "\\e64b";
    }
    
    .k-icon-unlock:before {
      content: "\\e64c";
    }
    
    .k-icon-upload:before {
      content: "\\e64d";
    }
    
    .k-icon-up-squared:before {
      content: "\\e64e";
    }
    
    .k-icon-users:before {
      content: "\\e64f";
    }
    
    .k-icon-zoom-out:before {
      content: "\\e650";
    }
    
    .k-icon-zoom-in:before {
      content: "\\e651";
    }
    
    .k-icon-visible:before {
      content: "\\e652";
    }
    
    .k-icon-user:before {
      content: "\\e653";
    }
    
    .k-icon-information:before {
      content: "\\e654";
    }
    
    .k-icon-arrow-bigdown:before {
      content: "\\e605";
    }
    
    .k-icon-add-samll:before {
      content: "\\e606";
    }
    
    .k-icon-alarm:before {
      content: "\\e607";
    }
    
    .k-icon-add-big:before {
      content: "\\e608";
    }
    
    .k-icon-alert:before {
      content: "\\e609";
    }
    
    .k-icon-arrow-bigright:before {
      content: "\\e60a";
    }
    
    .k-icon-arrow-bigleft:before {
      content: "\\e60b";
    }
    
    .k-icon-arrow-bigup:before {
      content: "\\e60c";
    }
    
    .k-icon-arrow-down-circled:before {
      content: "\\e60d";
    }
    
    .k-icon-arrow-left-circled:before {
      content: "\\e60e";
    }
    
    .k-icon-arrow-left:before {
      content: "\\e60f";
    }
    
    .k-icon-arrow-right:before {
      content: "\\e610";
    }
    
    .k-icon-arrow-up:before {
      content: "\\e611";
    }
    
    .k-icon-closebig:before {
      content: "\\e612";
    }
    
    .k-icon-batchsearch:before {
      content: "\\e613";
    }
    
    .k-icon-cloud:before {
      content: "\\e614";
    }
    
    .k-icon-arrow-down:before {
      content: "\\e615";
    }
    
    .k-icon-all:before {
      content: "\\e616";
    }
    
    .k-icon-close:before {
      content: "\\e617";
    }
`;

