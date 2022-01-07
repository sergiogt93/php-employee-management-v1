window.addEventListener("DOMContentLoaded", async() => {
    let employeers = await getEmployeers();
    displayTypeTasks(employeers);
});

async function getEmployeers() {
    const response = await fetch(`./library/employeeController.php?getEmployeers`);
    const data = await response.json();
    return data;
}

function displayTypeTasks(employeers) {
    $("#dashboard").jsGrid({
        height: "auto",
        width: "100%",

        // filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,

        pageSize: 15,
        pageButtonCount: 5,

        data: employeers,

        fields: [
            { name: "name", type: "text", title: "Name"},
            { name: "email", type: "text", title: "Email"},
            { name: "age", type: "number", title: "Age"},
            { name: "streetAddress", type: "number", title: "Street No." },
            { name: "city", type: "text", title: "City" },
            { name: "state", type: "text", title: "State" },
            { name: "postalCode", type: "number", title: "Postal Code" },
            { name: "phoneNumber", type: "number", title: "Phone Number" },
            { type: "control", modeSwitchButton: true, editButton: true}
        ],

        controller: {
            // insertItem: function name(item) {
            //     return $.ajax({
            //         type: "POST",
            //         url: "./library/employeeController.php?addEmployee",
            //         data: item
            //     })
            // },
            // updateItem: function name(item) {
            //     return $.ajax({
            //         type: "PUT",
            //         url: "./library/employeeController.php?modifyEmployee",
            //         data: item
            //     })
            // }
        }
    });
}