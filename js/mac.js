
// 8GB unified memory
const memoryCost = document.getElementById('memory-cost');

document.getElementById('8gb-memory-button').addEventListener('click', function () {
    memoryCost.innerText = 0;
    upDateTotal()
})

// 16GB unified memory
document.getElementById('16gb-memory-button').addEventListener('click', function () {
    memoryCost.innerText = 180;
    upDateTotal()
})


// 256GB SSD Storage
const storageCost = document.getElementById('storage-cost');

document.getElementById('storage-256gb').addEventListener('click', function () {
    storageCost.innerText = 0;
    upDateTotal()
})

// 512GB SSD Storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    storageCost.innerText = 100;
    upDateTotal()
})

// 1TB SSD Storage
document.getElementById('storage-1tb').addEventListener('click', function () {

    storageCost.innerText = 180;
    upDateTotal()
})



// free delivery
const deliveryCharge = document.getElementById('delivery-charge');

document.getElementById('free-delivery-button').addEventListener('click', function () {
    deliveryCharge.innerText = 0;
    upDateTotal()
})

// paid delivery
document.getElementById('paid-delivery-button').addEventListener('click', function () {
    deliveryCharge.innerText = 20;
    upDateTotal()
})



// Total price
const bestPrice = document.getElementById('best-price');
const totalCost = document.getElementById('total-price');

function upDateTotal() {
    const totalMemoryCost = parseInt(memoryCost.innerText);
    const totalStorageCost = parseInt(storageCost.innerText);
    const totalDeliveryCharge = parseInt(deliveryCharge.innerText);
    const totalBestPrice = parseInt(bestPrice.innerText);
    const upDateCost = totalMemoryCost + totalStorageCost + totalDeliveryCharge + totalBestPrice;
    totalCost.innerText = upDateCost;
}


//  Pomo code

document.getElementById('pomo-button').addEventListener('click', function () {
    const pomoInput = document.getElementById('pomo-input');
    const pomoInputValue = pomoInput.value;

    const totalAmount = document.getElementById('total');
    const totalAmountText = totalAmount.innerText;

    if (pomoInputValue == 'stevekaku') {
        const number = parseInt(totalCost.innerText) / 20;

        totalAmount.innerText = number;


    }

    pomoInput.value = '';

})