function Calculate()
{
    let total = parseFloat(document.querySelector("#total").value);
    let tax = parseFloat(document.querySelector("#tax").value)*0.01;
    let gratutiy = parseFloat(document.querySelector("#gratuity").value)*0.01;
    let tip = parseFloat(document.querySelector("#tip").value)*0.01;
    let amountOfPeople = parseInt(document.querySelector("#AmountOfPeople").value);
    let grand_total = total; 
    if (isNaN(total) || total <= 0) {
        document.getElementById("Reply").textContent = "Please enter a valid total amount.";
        return;
    }
    if (isNaN(amountOfPeople) || amountOfPeople <= 0) {
        document.getElementById("Reply").textContent = "Please enter a valid number of people.";
        return;
    }
    if(gratutiy<=0 || tip <= 0 || tax <=0)
    {
        document.getElementById("Reply").textContent = "Please make sure gratuity, tip, and taxes are above zero.";
        return;
    }
    if(tax > 0)
    {
        grand_total = grand_total + (tax*grand_total);
    }
    if(gratutiy > 0)
    {
        grand_total = grand_total + (gratutiy*grand_total);
    }
    if(tip > 0)
    {
        grand_total = grand_total + (tip*grand_total);
    }
    grand_total = grand_total/amountOfPeople;
    document.getElementById("Reply").textContent = "The cost per person is $" + (grand_total).toFixed(2); 
    return;
    
}