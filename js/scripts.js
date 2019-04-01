var suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
$(document).ready(function () {
  var index = 0;
  suits.forEach(function(suit) {
    cards = getCardList();
    $("#" + index).html(
      cards.map(function(card) {
        return "<li>" + card + " of " + suit + "</li>";
      })
    );
    index++;
  });

});


function getCardList() {
  var cardList = []
  cardList.push("Ace")
  for (var x = 2; x < 11; x++) {
    cardList.push(x)
  }
  cardList.push("Jack")
  cardList.push("Queen")
  cardList.push("King")
  return cardList;
}
