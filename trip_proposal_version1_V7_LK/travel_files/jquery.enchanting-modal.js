/**
 * Enchanting Modal Plugin
 * Version 1.0.0
 *
 * By: Junaid Bhura
 * http://www.junaidbhura.com
 */

(function ( $ ) {
	$.fn.enchanting_modal = function( options ) {
		// Default options
		var settings = $.extend({
			closeButton: ".close",
			width: -1,
			height: 0,
			onComplete: function() {}
		}, options );

		// Double check that we have only one
		if ( $( this ).length > 1 )
			return false;

		// Close any existing modals
		$.enchanting_modal.close();

		// Check if width was not specified
		if ( settings.width == -1 ) {
			// Check if object's width is specified
			if ( $( this ).width() !== undefined && $( this ).width() != '' && $( this ).width() > 0 )
				settings.width = $( this ).width();
			
			// Object's width is not specified, give a default value
			else
				settings.width = 500;
		}

		// Add modal to body
		$( 'body' ).append( '<div id="enchanting-modal-overlay"><div id="enchanting-modal">' + $( this ).html() + '</div></div>' );
		$( '#enchanting-modal-overlay' ).height( $( document ).height() );
		$( '#enchanting-modal' ).width( settings.width );
		if ( settings.height > 0 )
			$( '#enchanting-modal' ).height( settings.height );

		// Position modal on screen
		$.enchanting_modal.reposition();

		// Modal close button event
		$( '#enchanting-modal ' + settings.closeButton ).click(function() {
			$.enchanting_modal.close();

			return false;
		});

		// Close modal on clicking overlay
		$( '#enchanting-modal-overlay' ).click(function( e ) {
			if ( e.target !== this )
				return;

			$.enchanting_modal.close();
		});

		// Close modal on Escape
		$( document ).bind( 'keyup.enchanting_modal', function( e ) {
			if ( e.keyCode == 27 )
				$.enchanting_modal.close();
		});

		// Run callback
		settings.onComplete();
	};
}( jQuery ) );

jQuery.enchanting_modal = {
	reposition: function() {
		if ( $( '#enchanting-modal' ).height() > $( window ).height() )
			$( '#enchanting-modal' ).css( 'top', ( $( document ).scrollTop() + 20 ) + 'px' );
		else
			$( '#enchanting-modal' ).css( 'top', ( $( document ).scrollTop() + ( ( $( window ).height() - $( '#enchanting-modal' ).height() ) / 2 ) ) + 'px' );

		$( '#enchanting-modal' ).css( 'margin-left', 0 - $( '#enchanting-modal' ).width() / 2 );

		$( '#enchanting-modal-overlay' ).height( $( document ).height() );
	},
	close: function() {
		$( document ).unbind( 'keyup.enchanting_modal' );
		$( '#enchanting-modal-overlay' ).remove();
	}
};
