export class Accordion {

    attached(){
        document.querySelectorAll('button').forEach((button)=> {
            button.addEventListener('click', function(){
                var parent = button.parentElement
                var uncle = parent.nextElementSibling
                var uncleContent = uncle.querySelector('.content')
                parent.classList.remove('active')
                uncleContent.classList.add('active')
            })
        })
    }
}