$(function () {
    init();

    const form = $("#newAccountForm")
    form.submit(captureValues, event)
});

function init() {
    const url = window.location.origin + "/data/customerData.json"
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
    })
        .done(function (accounts) {
            const cache = localStorage.getItem("accountData")
            const data = JSON.parse(cache)
            if (cache == null || !(data instanceof Array)) {
                localStorage.removeItem("accountData")
                const store = JSON.stringify(accounts)
                window.localStorage.setItem("accountData", store)
            }
            displayAccountInformation()
        })
        .fail(function (xhr, status, errorThrown) {
            console.log(`Error: ${errorThrown}\nStatus: ${status}`);
            console.dir(xhr);
        })
}

function displayAccountInformation() {
    let info = localStorage.getItem("accountData")
    accountInfo = JSON.parse(info)
    accountInfo.forEach(account => displayAccount(account))
}

function displayAccount(account) {
    const li = `<li class="list-group-item">
        ${account["Account Number"]} | 
        ${account["Customer Name"]} | 
        ${account["Type of Account"]}
    </li>`;
    const ul = $("ul#accounts");
    ul.append(li);
}

function captureValues(event) {
    const accountNumber = $("#accountNumber")
    const customerName = $("#customerName")
    const accountType = $("#accountType")

    if (accountNumber.val() != "" || customerName.val() != "" || accountType.val() != "") {
        const detail = { 
            "Account Number": accountNumber.val(), 
            "Customer Name": customerName.val(),
            "Type of Account": accountType.val()
        }
        appendToLocalStorage(detail)
        displayAccount(detail)
    }

    return false;
}

function appendToLocalStorage(account) {
    const data = localStorage.getItem("accountData")
    let accounts = [account]
    if (data != null) {
        accounts = JSON.parse(data)
        accounts.push(account)
    }
    localStorage.setItem("accountData", JSON.stringify(accounts))
}
