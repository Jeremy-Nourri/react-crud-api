import { createBrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import ListTasks from "./components/ListTasks";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/form/:taskId",
                element: <Form />
            },
            {
                path: "/",
                element: <ListTasks />
            }
        ]

    }
])

export default router;