/* global pokedex:true*/
/* jshint camelcase:false*/

'use strict';

$(document).ready(init);

function init(){
  drawPokedex();
}
function drawPokedex(){
pokedex.pokemon.forEach(function(pokemonObj){
  var $pokeDiv = $('<div>');
  $pokeDiv.addClass('pokemon').attr('data-uri', pokemonObj.resource_uri);
  var $pokeName = $('<div>');
  $pokeName.addClass('name').text(pokemonObj.name);
  $('#pokedex').append($pokeDiv.append($pokeName));
});
}
