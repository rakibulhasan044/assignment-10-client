import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserItems from "../components/UserItems";



const MyList = () => {
    const myList = useLoaderData();
    //console.log(myList);
    const [list, setList] = useState(myList)
    // console.log(list);
    return (
        <div>
            <h2>item mylist: {myList.length}</h2>
            <h3>item state list: {list.length}</h3>
            <div className="grid gap-10">
                {
                    list.map(item => <UserItems key={item._id}
                    item={item}
                    list={list}
                    setList={setList}
                    ></UserItems>)
                }
            </div> 
            
        </div>
    );
};

export default MyList;