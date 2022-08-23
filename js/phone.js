

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString)

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber


    const phoneTotalPrice = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById('phone-total-element')
    phoneTotalElement.innerText = phoneTotalPrice

    calculateSubtotal()


})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString)

    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber

    const phoneTotalPrice = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById('phone-total-element')
    phoneTotalElement.innerText = phoneTotalPrice

    calculateSubtotal()

})