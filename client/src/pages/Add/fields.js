const fields = {
    aboutFields: [
        {
            id: 1,
            name: "fname",
            type: "text",
            placeholder: "First name",
            label: "First name",
            err: "First name should be 3-16 characters",
            required: true,
            pattern: `^[A-Za-z0-9]{3,16}$`
        },
        {
            id: 2,
            name: "lname",
            type: "text",
            placeholder: "Last name",
            label: "Last name",
            err: "Last name should be 3-16 characters",
            required: true
        },
        {
            id: 3,
            name: "phone",
            type: "tel",
            placeholder: "Phone",
            label: "Phone",
            err: "It should be a valid phone number",
            required: true
        },
        {
            id: 4,
            name: "age",
            type: "number",
            placeholder: "Age",
            label: "Age",
            err: "Age should be a valid number",
            required: true
        },
        {
            id: 5,
            name: "dept",
            form: "employee",
            options: ["HR", "Product", "Sales"],
            label: "Department",
        },
        {
            id: 6,
            name: "status",
            form: "employee",
            options: ["Contract", "Full-time", "Remote"],
            label: "Status",
        }

    ],

    addressFields: [
        {
            id: 7,
            name: "address1",
            type: "text",
            placeholder: "Building no. 123",
            form: "employee",
            label: "Address Line 1",
        },
        {
            id: 8,
            name: "address2",
            type: "text",
            placeholder: "Hudson Street",
            form: "employee",
            label: "Address Line 2",
        },
        {
            id: 9,
            name: "city",
            type: "text",
            placeholder: "Meerut",
            form: "employee",
            label: "City",
        },
        {
            id: 10,
            name: "state",
            type: "text",
            placeholder: "Uttar Pradesh",
            form: "employee",
            label: "State",
        },
        {
            id: 11,
            name: "country",
            type: "text",
            placeholder: "India",
            form: "employee",
            label: "Country",
        }
    ]
    // geolocationFields: [
    //         {
    //                 id: 7,
    //                 name: "latitude",
    //                 type: "number",
    //                 placeholder: "Building no. 123",
    //                 form: "employee",
    //                 label: "Latitude",
    //             },
    //             {
    //                 id: 8,
    //                 name: "longitude",
    //                 type: "number",
    //                 form: "employee",
    //                 label: "Longitude",
    //             },
        
        
    // ]
}

export default fields;