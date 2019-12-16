export class Accordion {

    attached() {
        document.querySelectorAll('.card').forEach((card, index) => {
            card.setAttribute('id', index + 1)
        })
        document.querySelector('input').addEventListener('input', function () {
            var previousElement = document.querySelector('.active')
            previousElement
                ? previousElement.classList.remove('active')
                : null
            document.getElementById(this.value).classList.add('active');
        })
    }

    continue(event) {
        var parentDivId = event.target.parentElement.parentElement.id;
        event.target.parentElement.parentElement.classList.remove('active')
        document.getElementById(parseInt(parentDivId) + 1).classList.add('active');
    }
    
    previous(event) {
        var parentDivId = event.target.parentElement.parentElement.id;
        event.target.parentElement.parentElement.classList.remove('active')
        document.getElementById(parseInt(parentDivId) - 1).classList.add('active');
    }
}