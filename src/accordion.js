export class Accordion {

    continue(event){
        var targetCard = event.target.parentElement
        var targetStyles = window.getComputedStyle(targetCard).top;
        //var targetTop = targetStyles.getPropertyValue('top');
        console.log(targetStyles)
        //var cardToMove = targetCard.nextElementSibling
        
        
        // var string = percentage.replace(/\%/g, "")
        // var integer = parseInt(string, 10)
        //debugger
        
        // cardToMove.style.top =  integer !== NaN 
        //                             ? + 5 + '%' 
        //                             : 5 + '%'
    }

}