(function() {
  'use strict';

  angular
    .module('angularWin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
