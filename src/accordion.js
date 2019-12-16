export class Accordion {

    constructor() {
        this.firstTab = true;
        this.activeTab;
        this.input;
    }

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
    closeAccordion() {
        //should appear only when order (the first tab) is active

        //will need an animation
        document.querySelector('.root').style.display = 'none';
    }
}
