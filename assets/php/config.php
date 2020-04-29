<?php

//banner und extras///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//define('BANNER_TOP', ''); // in Content/de/header.php auch anpassen
define('SITE_LANGUAGE_DEFAULT', 'de');
define('SITE_LANGUAGE_DEFAULT_ADMIN', 'de');
define('EPI_VERSION_DEFAULT', '4.1');

//database///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define('DB_NAME', 'db170005');
define('DB_HOST', 'mysql5.epidev.firma.cc');
define('DB_USER', 'db170005');
define('DB_PASS', '*******');
define('DB_TABLE_USER', 'fe_users');
define('DB_TABLE_NEWS', 'news');
define('DB_TABLE_PRODUCT', 'product');
define('DB_TABLE_PRODUCT_LANG', 'product_lang');
define('DB_TABLE_PRODUCT_PRICE', 'product_price');
define('DB_TABLE_BASKET', 'basket');
//URL + DIRS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//define('SITE_URL', 'https://themos.epi.rent');



define('SITE_URL', 'https://epi.rent');



define('SITE_DIR', '/'); // /test
define('SITE_URI', SITE_URL.SITE_DIR);
define('SITE_IMAGES', SITE_URI.'/imgs');
define('SITE_CSS', SITE_URI.'/css');

define('ADMIN_URL', SITE_URL);
define('ADMIN_DIR', '/cccms');// /test/cccms
define('ADMIN_URI', ADMIN_URL.'/'.ADMIN_DIR);
define('ADMIN_IMAGES', ADMIN_URI.'/imgs');
define('ADMIN_PHPMYADMIN', 'https://epi-dev.de/sqladmin/');


//ESHOP

define('DEFAULT_CURRENCY_ID', 1); //euro
define('UPLOAD_PRODUCT_IMAGES_PATH','../content/_media/img/products/');
define('UPLOAD_FLAG_IMAGES_PATH','../content/_media/img/flags/');
define('UPLOAD_CAROUSEL_IMAGES_PATH','../content/_media/img/slides/');
define('UPLOAD_CMS_IMAGES_PATH','../content/_media/img/cms/');
define('UPLOAD_CMS_VIDEOS_PATH','../content/_media/videos/');

//
define('UPLOAD_VIDEO_THUMBS_PATH','../content/_media/img/video_thumbs/');
define('CONTENT_PATH','../content/');
?>