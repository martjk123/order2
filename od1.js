

let viewOrder = document.querySelector(".viewOrder");
let viewOrder1 = document.querySelector(".viewOrder1");
let viewOrderc2 = document.querySelector(".viewOrderc2");
let viewOrder1c2 = document.querySelector(".viewOrder1c2");
let viewOrderc3 = document.querySelector(".viewOrderc3");
let viewOrder1c4 = document.querySelector(".viewOrder1c4");
let viewOrderc4 = document.querySelector(".viewOrderc4");
let viewOrder1c3 = document.querySelector(".viewOrder1c3");
let viewOrderc5 = document.querySelector(".viewOrderc5");
let viewOrder1c5 = document.querySelector(".viewOrder1c5");
let viewOrderc6 = document.querySelector(".viewOrderc6");
let viewOrder1c6 = document.querySelector(".viewOrder1c6");
let viewOrderc7 = document.querySelector(".viewOrderc7");
let viewOrder1c7 = document.querySelector(".viewOrder1c7");
let viewOrderc8 = document.querySelector(".viewOrderc8");
let viewOrder1c8 = document.querySelector(".viewOrder1c8");
let viewOrderc9 = document.querySelector(".viewOrderc9");
let viewOrder1c9 = document.querySelector(".viewOrder1c9");
let viewOrderc10 = document.querySelector(".viewOrderc10");
let viewOrder1c10 = document.querySelector(".viewOrder1c10");

let back = document.querySelector("#back");
let back3 = document.querySelector("#back3");
let back4 = document.querySelector("#back4");
let back5 = document.querySelector("#back5");
let back6 = document.querySelector("#back6");
let back7 = document.querySelector("#back7");
let back8 = document.querySelector("#back8");
let back9 = document.querySelector("#back9");
let back10 = document.querySelector("#back10");


let bdesign2 = document.querySelector("#bdesign2");
let quantityClass = document.querySelector(".quantityClass");



let showlist = document.querySelector(".containershoworder");
// let image = docuemnt.querySelector("#image");


function showreceipt1(){
    //  quantityClass.style.display = "none";
    bdesign2.style.display = "none";
   showlist.style.display = "block";
   
  
}

function receiptback(){//
      //  quantityClass.style.display = "none";
          showRefundb.style.display = "none";
        showApplyV.style.display = "none";
            showDiscountb.style.display = "none";
    bdesign2.style.display = "none";
   showlist.style.display = "none";   
       showApplyV.style.display = "none";
       
}


function clickpine(){
  
       bdesign2.style.display = "block";
  viewOrder.style.display = "block";
    viewOrder1.style.display = "block";
    back.style.display = "block";
     image.style.display = "block";
     

}

function clicklemon(){
       bdesign2.style.display = "block";
  viewOrderc2.style.display = "block";
    viewOrder1c2.style.display = "block";
    back.style.display = "block";

}

function clickapple(){
       bdesign2.style.display = "block";
    back3.style.display = "block";
    viewOrderc3.style.display = "block";
    viewOrder1c3.style.display = "block";
}

function clickchoco(){
       bdesign2.style.display = "block";
    back4.style.display = "block";
    viewOrderc4.style.display = "block";
    viewOrder1c4.style.display = "block";
}


function clickchoco2(){
       bdesign2.style.display = "block";
    back5.style.display = "block";
    viewOrderc5.style.display = "block";
    viewOrder1c5.style.display = "block";
}

function clickmilkcoffee(){
       bdesign2.style.display = "block";
      back6.style.display = "block";
    viewOrderc6.style.display = "block";
    viewOrder1c6.style.display = "block";
}

function clickbanana(){
       bdesign2.style.display = "block";
      back7.style.display = "block";
    viewOrderc7.style.display = "block";
    viewOrder1c7.style.display = "block";
}

function clickgrape(){
       bdesign2.style.display = "block";
      back8.style.display = "block";
    viewOrderc8.style.display = "block";
    viewOrder1c8.style.display = "block";
}

function clickwatermelon(){
       bdesign2.style.display = "block";
      back9.style.display = "block";
    viewOrderc9.style.display = "block";
    viewOrder1c9.style.display = "block";
}

function clickicecoffee(){
       bdesign2.style.display = "block";
      back10.style.display = "block";
    viewOrderc10.style.display = "block";
    viewOrder1c10.style.display = "block";
}

const resetCount=()=>{
        count = 1;
        quantity.innerHTML = count;
        quantity2.innerHTML = count;
        quantity3.innerHTML = count;
        quantity4.innerHTML = count;
        quantity5.innerHTML = count;
        quantity6.innerHTML = count;
        quantity7.innerHTML = count;
        quantity8.innerHTML = count
        quantity9.innerHTML = count;
        quantity10.innerHTML = count;
        
}

function backb(){
  resetCount();
       bdesign2.style.display = "none";
       viewOrder.style.display = "none";
    viewOrder1.style.display = "none";
      viewOrderc2.style.display = "none";
    viewOrder1c2.style.display = "none";
      back.style.display = "none";

}

function backb3(){
  resetCount();
  quantity3.innerHTML = count;
    bdesign2.style.display = "none";
       viewOrder.style.display = "none";
      back3.style.display = "none";
        viewOrderc3.style.display = "none";
    viewOrder1c3.style.display = "none";
}

function backb4(){
    resetCount();
  quantity4.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc4.style.display = "none";
    viewOrder1c4.style.display = "none";
      back4.style.display = "none";
}


function backb5(){
  resetCount();
  quantity5.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc5.style.display = "none";
    viewOrder1c5.style.display = "none";
      back5.style.display = "none";
}

function backb6(){
    resetCount();
  quantity6.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc6.style.display = "none";
    viewOrder1c6.style.display = "none";
      back6.style.display = "none";
}

// _______________

function backb7(){
    resetCount();
  quantity7.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc7.style.display = "none";
    viewOrder1c7.style.display = "none";
      back7.style.display = "none";
}

function backb8(){
    resetCount();
  quantity8.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc8.style.display = "none";
    viewOrder1c8.style.display = "none";
      back8.style.display = "none";
}

function backb9(){
    resetCount();
  quantity9.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc9.style.display = "none";
    viewOrder1c9.style.display = "none";
      back9.style.display = "none";
}

function backb10(){
    resetCount();
  quantity10.innerHTML = count;
    bdesign2.style.display = "none";
      viewOrderc10.style.display = "none";
    viewOrder1c10.style.display = "none";
      back10.style.display = "none";
}





let quantity = document.querySelector("#quantitynum");//mao ni ag id
let quantity2 = document.querySelector("#quantitynum2");
let quantity3 = document.querySelector("#quantitynum3");
let quantity4 = document.querySelector("#quantitynum4");
let quantity5 = document.querySelector("#quantitynum5");
let quantity6 = document.querySelector("#quantitynum6");
let quantity7 = document.querySelector("#quantitynum7");
let quantity8 = document.querySelector("#quantitynum8");
let quantity9 = document.querySelector("#quantitynum9");
let quantity10 = document.querySelector("#quantitynum10");
let count = 1;




function resetorder1(){
  // Reset count and quantity display
  count = 1;
  quantity.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 1);// check kong equal sa menu and id if equal ma reset
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  // Update the receipt display
  updateReceiptTable();
}// mogana if tinagsaon ang function

function resetorder2(){
  count = 1; 
  quantity2.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 2);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder3(){
  count = 1; 
  quantity3.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 3);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder4(){
  count = 1; 
  quantity4.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 4);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder5(){
  count = 1; 
  quantity5.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 5);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder6(){
  count = 1; 
  quantity6.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 6);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder7(){
  count = 1; 
  quantity7.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 7);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder8(){
  count = 1; 
  quantity8.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 8);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder9(){
  count = 1; 
  quantity9.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 9);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}

function resetorder10(){
  count = 1; 
  quantity10.innerHTML = count;
  const itemIndex = currentReceipt.findIndex(item => item.id === 10);  
  if (itemIndex !== -1) {
    currentReceipt[itemIndex].quantity = 0;
  }
  updateReceiptTable();
}


function addorder1(){
  count += 1;
  quantity.innerHTML = count;
    quantity2.innerHTML = count;
        quantity3.innerHTML = count;
            quantity4.innerHTML = count;
             quantity5.innerHTML = count;
            quantity6.innerHTML = count;
        quantity7.innerHTML = count;
   quantity8.innerHTML = count;
  quantity9.innerHTML = count;
quantity10.innerHTML = count;
}

function addorder2(){
  count += 1;
  quantity.innerHTML = count;
}

function reduceorder1() {
  if (count > 1) {
    count -= 1;
    quantity.innerHTML = count;
    quantity2.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}


function reduceorder3() {
  if (count > 1) {
    count -= 1;
    quantity3.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder4() {
  if (count > 1) {
    count -= 1;
    quantity4.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder5() {
  if (count > 1) {
    count -= 1;
    quantity5.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder6() {
  if (count > 1) {
    count -= 1;
    quantity6.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder7() {
  if (count > 1) {
    count -= 1;
    quantity7.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder8() {
  if (count > 1) {
    count -= 1;
    quantity8.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder9() {
  if (count > 1) {
    count -= 1;
    quantity9.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}

function reduceorder10() {
  if (count > 1) {
    count -= 1;
    quantity10.innerHTML = count;
    updateReceipt(); // Update the receipt whenever quantity changes
  }
}


const menu = [
    { id: 1, name: "Pineaple Tea", price: 10.00 },
    { id: 2, name: "Lemon Tea", price: 5.00 },
    { id: 3, name: "Apple Tea", price: 15.00 },
    { id: 4, name: "Hot Chocolate Coffee", price: 7.00 },
    { id: 5, name: "Caramel Coffee", price: 13.00 },
    { id: 6, name: "Milk Coffee", price: 13.00 },
    { id: 7, name: "Banana Tea", price: 9.00 },
    { id: 8, name: "Grape Tea", price: 8.00 },
    { id: 9, name: "Watermelon Tea", price: 9.00 },
    { id: 10, name: "Ice Cream Tea", price: 12.00 },
  ];


  
  let currentReceipt = [];
  let orderHistory = [];
  let voucherCodes = ["DISCOUNT10", "STUDENT5", "SENIOR20"];
  let usedVoucherCodes = [];

function addToReceipt(itemId) {
  const item = menu.find(i => i.id === itemId);
  const existingItem = currentReceipt.find(i => i.id === itemId);
  if (existingItem) {
    existingItem.quantity += count;
    
  } else {
    currentReceipt.push({ ...item, quantity: count });
  }
  updateReceiptTable();
}

function updateReceiptTable() {
  const tbody = document.querySelector("#receipt-table tbody");
  tbody.innerHTML = "";
  let totalPrice = 0;
  
  currentReceipt.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${(item.price * item.quantity).toFixed(2)}</td><td><button class="remove-row" data-index="${index}" style="background-color:red;color:white;border:none">X</button></td>`;
    tbody.appendChild(row);
    totalPrice += item.price * item.quantity;
  });
  
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  
  // Add event listener to each "X" button
  const removeButtons = document.querySelectorAll(".remove-row");
  removeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      currentReceipt.splice(index, 1); // Remove item from currentReceipt array
      updateReceiptTable(); // Update the table after removal
    });
  });
}



// ____________________________


  
  // function printReceipt() {
  //   const orderNumber = orderHistory.length + 1;
  //   const totalPrice = document.getElementById("total-price").textContent;
  //   orderHistory.push({ orderNumber, items: [...currentReceipt], total: totalPrice });
  //   updateOrderHistory();
  //   currentReceipt = [];
  //   updateReceiptTable();
  //   alert("Receipt printed successfully! Order Number: " + orderNumber);
  // }

  function updateOrderHistory() {
    const tbody = document.querySelector("#order-history-table tbody");
    tbody.innerHTML = "";
    orderHistory.forEach(order => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${order.orderNumber}</td><td>${JSON.stringify(order.items)}</td><td>${order.total}</td>`;
      tbody.appendChild(row);
    });
  }

  function toggleOrderHistory() {
    const historySection = document.querySelector(".order-history");
    historySection.classList.toggle("open");
    const showHistoryText = document.querySelector(".show-history");
    if (historySection.classList.contains("open")) {
      showHistoryText.textContent = "Hide History";
    } else {
      showHistoryText.textContent = "Show History";
    }
  }


  let showRefundb = document.querySelector(".showRefundb");
  function processRefund() {
    showRefundb.style.display = "block";
        showApplyV.style.display = "none";
            showDiscountb.style.display = "none";
    // openModal();
  }

  
  function submitRefund() {
    const orderNumber = parseInt(document.getElementById("refund-order-number").value);
    const refundAmount = parseFloat(document.getElementById("refund-amount").value);
    const order = orderHistory.find(order => order.orderNumber === orderNumber);
    if (order && refundAmount <= parseFloat(order.total)) {
      order.total = (parseFloat(order.total) - refundAmount).toFixed(2);
      updateOrderHistory();
      alert("Refund processed successfully!");
      closeModal();
    } else {
      alert("Invalid order number or refund amount exceeds total.");
    }
  }


  let showApplyV = document.querySelector(".showApplyV");
  function applyVoucher() {
    showDiscountb.style.display = "none";//ge adddan ani
       showRefundb.style.display = "none";
    showApplyV.style.display = "block";
    // openModal();
  }



  function submitVoucher() {
    const voucherCode = document.getElementById("voucher-code").value;
    if (voucherCodes.includes(voucherCode) && !usedVoucherCodes.includes(voucherCode)) {
      let discount = 0;
      if (voucherCode === "DISCOUNT10") discount = 0.10;
      if (voucherCode === "STUDENT5") discount = 0.05;
      if (voucherCode === "SENIOR20") discount = 0.20;
      let totalPrice = parseFloat(document.getElementById("total-price").textContent);
      totalPrice = totalPrice * (1 - discount);
      document.getElementById("total-price").textContent = totalPrice.toFixed(2);
      usedVoucherCodes.push(voucherCode);
      alert("Voucher applied successfully!");
      closeModal();
    } else {
      alert("Invalid or already used voucher code.");
    }
  }

  let showDiscountb = document.querySelector(".showDiscountb");
  function applyDiscount() {
    showDiscountb.style.display = "block";
        showApplyV.style.display = "none";
           showRefundb.style.display = "none";
    // openModal();
  }

  function submitDiscount() {
    const discountType = document.getElementById("discount-type").value;
    let discount = 0;
    if (discountType === "student") discount = 0.10;
    if (discountType === "pwd") discount = 0.20;
    if (discountType === "senior") discount = 0.15;
    let totalPrice = parseFloat(document.getElementById("total-price").textContent);
    totalPrice = totalPrice * (1 - discount);
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    alert("Discount applied successfully!");
    closeModal();
  }


  function updateReceiptTable1() {
  // Sort currentReceipt by price before displaying
  currentReceipt.sort((a, b) => a.price - b.price);

  const tbody = document.querySelector("#receipt-table tbody");
  tbody.innerHTML = "";
  let totalPrice = 0;

  currentReceipt.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${(item.price * item.quantity).toFixed(2)}</td><td><button class="remove-row" data-index="${index}" style="background-color:red;color:white;border:none">X</button></td>`;
    tbody.appendChild(row);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);

  // Add event listener to each "X" button
  const removeButtons = document.querySelectorAll(".remove-row");
  removeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      currentReceipt.splice(index, 1); // Remove item from currentReceipt array
      updateReceiptTable(); // Update the table after removal
    });
  });
}


 function sortByPrice() {
  menu.sort((a, b) => a.price - b.price); // Sort menu by price in ascending order
  updateReceiptTable1(); // Update receipt table with sorted menu items
  alert("Menu sorted by price!");
}
