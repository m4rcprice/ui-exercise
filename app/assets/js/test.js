(function (document, window, undefined) {

  'use strict';

  var toggleNav = function () {

    if ($( '.site__canvas' ).hasClass( 'site__canvas--active' )) {

      $( '.site__canvas' ).removeClass( 'site__canvas--active' );
      $( '.close__canvas' ).removeClass( 'close__canvas--active' );

    } else {
      $( '.site__canvas' ).addClass( 'site__canvas--active' );
      $( '.close__canvas' ).addClass( 'close__canvas--active' );
    }
  }

  $( '.toggle__nav, .close__canvas' ).click(function() {
    toggleNav();
  });

})( document, window );
