import data from "../data";
import Friend from "./Friend";

function FriendsList() {
    const friend = data.map(item => {
        return (
            <div>
                <Friend
                    key={item.post}
                    {...item}
                />
            </div>
        )
    })

    return (
        <div>
            {friend}
        </div>

    );
}

export default FriendsList;