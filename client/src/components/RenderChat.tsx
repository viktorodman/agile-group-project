import {useContext} from 'react';
import Chat from '../components/Chatroom/Chat';
import NoChat from './Chatroom/NoChat';
import {HomeContext } from '../context/HomeProvider';
const RenderChat = () => {
    const {activeChat} = useContext(HomeContext)
    return (
        <div>
            {activeChat ? <Chat/> : <NoChat/>}
        </div>
    )
}

export default RenderChat
