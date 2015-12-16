ig.module(
  'game.main'
)
.requires(
  'plusplus.core.plusplus',
  'plusplus.debug.debug'
)
.defines(function(){
  "use strict";

  var _c = ig.CONFIG;

  var game = ig.GameExtended.extend({
    init: function() {
      this.parent();
    }
  });

  ig.main(
    '#canvas',
    game,
    60,
    _c.GAME_WIDTH,
    _c.GAME_HEIGHT,
    _c.SCALE,
    ig.LoaderExtended
  );
});
