// 'use strict';

// module.exports =
//   angular.module('clearancefly.foo', [
//     //load your foo submodules here, e.g.:
//     //require('./bar').name
//   ])
//   .config(function ($stateProvider) {
//     $stateProvider
//     .state('foo', {
//       url: '',
//       templateUrl: 'app/core/layout.html',
//       controller: 'fooController'
//     });
//   })
//   .controller('fooController', require('./fooController'));

// 'use strict';

// module.exports =
//   angular.module('clearancefly.core', [
//     //load your foo submodules here, e.g.:
//     //require('./bar').name
//   ])
//   .config(function ($stateProvider) {
//     $stateProvider
//     .state('listings', {
//       url: '',
//       templateUrl: 'app/core/layout.html',
//       controller: 'listingController'
//     })
//     .state('listing', {
//       url: '/listing/:id',
//       templateUrl: 'app/core/listing.html',
//       controller: 'singleListingController'
//     });
//   })
//   .controller('listingController', require('./listingController'))
//   .controller('singleListingController', require('./singleListingController'));
    
  'use strict';

module.exports =
  angular.module('clearancefly.core', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('listings', {
      url: '/',
      templateUrl: 'app/core/views/layout.html',
      controller: 'listingController'
    })
    .state('categoryList', {
      url: '/category/:category',
      templateUrl: 'app/core/views/layout.html',
      controller: 'categoryList'
    })
    .state('listing', {
      url: '/listings/:id',
      templateUrl: 'app/core/views/listing.html',
      controller: 'singleListingController'
    });
  })
  .controller('listingController', require('./listingController'))
  .controller('singleListingController', require('./singleListingController'))
  .controller('categoryList', require('./categoryList'));

    
  

