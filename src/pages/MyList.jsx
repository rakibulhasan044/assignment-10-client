import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserItems from "../components/UserItems";




const MyList = () => {
    const myList = useLoaderData();
    console.log(myList);
    const [list, setList] = useState(myList)
    return (
        <div>
            <h2>item mylist: {myList.length}</h2>
            <h3>item state list: {list.length}</h3>
            <div>
                {
                    list.map(item => <UserItems key={item._id}
                    item={item}></UserItems>)
                }
            </div> 
            
        </div>
    );
};

export default MyList;