import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import UserItems from "../components/UserItems";

const MyList = () => {
    const myList = useLoaderData();
    const [list, setList] = useState(myList);
    const [filter, setFilter] = useState("all");

    const applyFilter = (value) => {
        if (value === "all") {
            setList(myList);
        } else {
            const filteredList = myList.filter(item => item.customization === value);
            setList(filteredList);
        }
        setFilter(value);
    };

    return (
        <div>
            <h2>item mylist: {myList.length}</h2>
            <h3>item state list: {list.length}</h3>
            <div className="flex items-center justify-center my-5">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 px-10 bg-green-400 text-white">
                        Filter by customization
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                        <li>
                            <Link onClick={() => applyFilter("all")} className="bg-green-400 text-white">
                                All
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => applyFilter("yes")} className="bg-green-400 text-white">
                                Yes
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => applyFilter("no")} className="bg-green-400 text-white">
                                No
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="grid gap-10">
                {list.map((item, index) => (
                    <UserItems
                        key={item._id}
                        item={item}
                        list={list} 
                        setList={setList} 
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyList;
