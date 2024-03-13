/* Start: Login form datas
========================================= */
export const moduleFormData = {
    Title: "Login",
    moduleForm: [
        {
            label: "Email",
            name: "email",
            type: "email",
            id: "Email",
            placeholder: "Email",
            mandatory: true,
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            id: "Password",
            placeholder: "Password",
            mandatory: true,
        },
        {
            label: "LogIn",
            name: "loginSubmitBtn",
            type: "submit",
            id: "loginBtn",
            bgcolor: "#ec549b",
            color:" #ffffff"

        },
    ],
};
/* End: Login form datas
========================================= */

/* Start: Add task datas
========================================= */
 export const moduleAddTask = {
    Title: "Add Task",
    taskForm: [
        {
            type: "title",
            heading: "Task Information"
        },
        {
            label: "Task Assigned To",
            name: "name",
            type: "text",
            id: "name",
            placeholder: "Name",
            mandatory: true,
        },
        {
            label: "Title",
            name: "title",
            type: "text",
            id: "title",
            placeholder: "Title",
            mandatory: true,
        },
        {
            label: "Description",
            name: "description",
            type: "textarea",
            id: "description",
            placeholder: "Description",
            mandatory: true,
        },
        {
            label: "Status",
            name: "status",
            select: "Status",
            lookUP:"front",
            type: "dropdown",
            options: ["Pending", "Completed"],
            id: "status",
            placeholder: "Status",
            mandatory: true,
        },
        {
            label: "Add Task",
            name: "taskSubmitBtn",
            type: "submit",
            id: "addTaskBtn",
            bgcolor: "#ec549b",
            color:" #ffffff"
        },
    ]
}

    export const moduleUpdateTask = {
        Title: "Update Task",
        taskForm: [
            {
                type: "title",
                heading: "Task Information"
            },
            {
                label: "Assigned To",
                name: "name",
                type: "text",
                id: "name",
                placeholder: "Name",
                mandatory: true,
            },
            {
                label: "Title",
                name: "title",
                type: "type",
                id: "title",
                placeholder: "Title",
                mandatory: true,
            },
            {
                label: "Description",
                name: "description",
                type: "textarea",
                id: "description",
                placeholder: "Description",
                mandatory: true,
            },
            {
                label: "Status",
                name: "status",
                select: "Status",
                lookUP:"front",
                type: "dropdown",
                options: ["Pending", "Completed"],
                id: "status",
                placeholder: "Status",
                mandatory: true,
            },
            {
                label: "Update Task",
                name: "taskSubmitBtn",
                type: "submit",
                id: "updateTaskBtn",
                bgcolor: "#ec549b",
                color:" #ffffff"
            },
        ]
};