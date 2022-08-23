function getTextElementValueById(elementId) {
    const phoneTotal = document.getElementById(elementId)
    const currentPhoneTotalString = phoneTotal.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal;

}

function setTaxElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value
}

function calculateSubtotal() {
    const currentTotalPhone = getTextElementValueById('phone-total-element')
    const currentTotalCase = getTextElementValueById('case-total-element')
    const currentSubTotal = currentTotalPhone + currentTotalCase
    setTaxElementValueById('sub-total', currentSubTotal)



    const taxAmountString = (currentSubTotal * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTaxElementValueById('tax-amount', taxAmount)

    const finalAmount = currentSubTotal + taxAmount

    setTaxElementValueById('final-total', finalAmount)

}

