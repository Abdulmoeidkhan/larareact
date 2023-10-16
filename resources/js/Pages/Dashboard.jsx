import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Collapse } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
    {
        key: "1",
        label: "This is panel header 1",
        children: <p>{text}</p>,
    },
    {
        key: "2",
        label: "This is panel header 2",
        children: <p>{text}</p>,
    },
    {
        key: "3",
        label: "This is panel header 3",
        children: <p>{text}</p>,
    },
];

export default function Dashboard({ auth }) {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            {/* <div>{route().current()}</div> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                            <Collapse
                                items={items}
                                defaultActiveKey={["1"]}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
