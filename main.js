let totalBalance = 5500; // Initial balance

// Function to show the donation or history section and update the button styles
function showSection(section) {
    const donationSection = document.getElementById("donationSection");
    const historySection = document.getElementById("historySection");
    const donationButton = document.getElementById("donationButton");
    const historyButton = document.getElementById("historyButton");

    if (section === "donation") {
        donationSection.classList.remove("hidden");
        historySection.classList.add("hidden");
        donationButton.classList.add("bg-lime-400");
        donationButton.classList.remove("border-solid", "border");
        historyButton.classList.add("border-solid", "border");
        historyButton.classList.remove("bg-lime-400");
    } else {
        donationSection.classList.add("hidden");
        historySection.classList.remove("hidden");
        historyButton.classList.add("bg-lime-400");
        historyButton.classList.remove("border-solid", "border");
        donationButton.classList.add("border-solid", "border");
        donationButton.classList.remove("bg-lime-400");
    }
}

// Function to handle donations
function donate(location) {
    let donationAmount = 0;

    // Retrieve the donation amount based on the location
    if (location === 'Noakhali') {
        donationAmount = parseInt(document.getElementById("donationAmountNoakhali").value);
    } else if (location === 'Feni') {
        donationAmount = parseInt(document.getElementById("donationAmountFeni").value);
    } else if (location === 'Quota') {
        donationAmount = parseInt(document.getElementById("donationAmountQuota").value);
    }

    // Ensure the donation amount is valid
    if (donationAmount > 0 && donationAmount <= totalBalance) {
        // Update the total balance
        totalBalance -= donationAmount;
        document.getElementById("totalMoney").innerHTML = `<img src="./assets/coin.png" alt="Coin Icon" class="w-6 h-6 inline"> ${totalBalance} BDT`;

        // Update the specific donation badge
        if (location === 'Noakhali') {
            document.getElementById("donationNoakhali").innerHTML = `<img src="./assets/coin.png" alt="Coin Icon" class="w-5 h-5 inline mr-1"> ${donationAmount} BDT`;
        } else if (location === 'Feni') {
            document.getElementById("donationFeni").innerHTML = `<img src="./assets/coin.png" alt="Coin Icon" class="w-5 h-5 inline mr-1"> ${donationAmount} BDT`;
        } else if (location === 'Quota') {
            document.getElementById("donationQuota").innerHTML = `<img src="./assets/coin.png" alt="Coin Icon" class="w-5 h-5 inline mr-1"> ${donationAmount} BDT`;
        }

        // Add the donation to the history table
        const historyTable = document.getElementById("historyTable");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border px-4 py-2">${location}</td>
            <td class="border px-4 py-2">${donationAmount} BDT</td>
            <td class="border px-4 py-2">${new Date().toLocaleString()}</td>
        `;
        historyTable.appendChild(row);

        // Show the modal to confirm the donation
        showModal();
    } else {
        alert("Please enter a valid donation amount.");
    }
}

// Function to show the modal
function showModal() {
    document.getElementById("donationModal").classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
    document.getElementById("donationModal").classList.add("hidden");
}
