export class Accordion {

    continue(event){
        var targetCard = event.target.parentElement
        var cardToMove = targetCard.nextElementSibling

        var percentageParent = targetCard.style.top
        var stringParent = percentageParent.replace(/\%/g, "")
        var integerParent = parseInt(stringParent, 10)

        var percentageChild = cardToMove.style.top
        var stringChild = percentageChild.replace(/\%/g, "")
        var integerChild = parseInt(stringChild, 10)

        cardToMove.style.top =  integerParent + 5 + '%'
    }
}