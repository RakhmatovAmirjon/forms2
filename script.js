let inputs = document.querySelectorAll('.important')
let filled = true
let email = document.getElementById('adress')
let number = document.getElementById('number')
let save_changes = document.getElementById('save_changes');
    
    save_changes.addEventListener('click', function(event) {
        event.preventDefault();
    
        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                input.classList.add('empty-input')
                filled = false
            } else {
                input.classList.remove('empty-input')
            }
        })
    

        if (email.value.trim() === '' || !email.value.includes('@') || !email.value.endsWith(".com")) {
            email.classList.add('empty-input')
            filled = false
        } else {
            email.classList.remove('empty-input')
        }

    
        if (number.value.trim() === '' || !number.value.startsWith('+998') || number.value.length !== 13) {
        number.classList.add('empty-input')
        filled = false
        } else {
        number.classList.remove('empty-input')
        }

    
        if (filled === true) {
            let formData = {}

            inputs.forEach(function (input) {
               let previous_input = input.previousElementSibling.textContent.trim()

                formData[previous_input] = input.value
            })
            console.log(formData)
        }
    })