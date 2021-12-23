import {
    useEffect,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import moderatorImg from '../images/moderator.png';
import chattareImg from '../images/chattare.png';
import editUserImg from '../images/edit.png';
import type { User } from '../types/User';
import ROLE from '../types/Role';
import UserService from '../utils/http/user-service';
import AdminRoomList from '../components/AdminRoomList/AdminRoomList';

const AdminPanel = () => {
    const [userData, setUserData] = useState<User[]>([]);

    useEffect(() => {
        (async () => {
            const userService = new UserService();
            const resUser = await userService.getAll();
            setUserData(resUser.data);
        })();
    }, []);

    const removeUser = async (id: number) => {
        const userService = new UserService();
        await userService.delete(id);
        setUserData(userData.filter((ud: User) => ud.id !== id));
    };


    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-indigo-600 h-screen">
                <AdminRoomList />

                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <img className="w-1/4 h-1/4" src={moderatorImg} alt="Moderator" />
                        <div className="font-bold text-xl mb-2">Moderator</div>
                        <ul>
                            {userData.map(
                                (u: User, i: number) =>
                                    u.role === ROLE.MOD && (
                                        <li key={i}>
                                            <div className="inline-flex space-x-4 ">
                                                <h3>{u.username} </h3>
                                                <button
                                                    onClick={() => {
                                                        removeUser(u.id);
                                                    }}
                                                    className="btn btn-red btn-red:hover"
                                                >
                        REMOVE
                                                </button>
                                                <Link to="/create-user">
                                                    <img
                                                        className="w-12 h-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                                        src={editUserImg}
                                                        alt="Edit"
                                                    />
                                                </Link>
                                            </div>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <img className="w-1/4 h-1/4" src={chattareImg} alt="Chattare" />
                        <div className="font-bold text-xl mb-2">Chattare</div>
                        <ul>
                            {userData.map(
                                (u: User, i: number) =>
                                    u.role === ROLE.USER && (
                                        <li key={i}>
                                            <div className="inline-flex space-x-4 ">
                                                <h3>{u.username} </h3>
                                                <button
                                                    onClick={() => {
                                                        removeUser(u.id);
                                                    }}
                                                    className="btn btn-red btn-red:hover"
                                                >
                        REMOVE
                                                </button>
                                                <Link to="/create-user">
                                                    <img
                                                        className="w-12 h-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                                        src={editUserImg}
                                                        alt="Edit"
                                                    />
                                                </Link>
                                            </div>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
