
import {SetStateAction, useState } from 'react'
import Message from './Message'


const person1 = {
    name: "Erik",
    message: "Hejsan"
}
const person2 = {
    name: "Pär",
    message: "Nämen tjenare"
}

const testMess = [
    person1,
    person2,
    person1,
    person2,
    person1,
    person2
]


export default function ChatRoom({Toggle} : {Toggle: () => void}) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    
    const handleName = (Event: { target: { value: SetStateAction<string> } }) => {
        setName(Event.target.value)

    }

    const handleMessage = (Event: { target: { value: SetStateAction<string> } }) => {
        setMessage(Event.target.value)
    }
        
    const handleOnSubmit = (Event: {preventDefault: ()  => void}) => {
        const chatMessage = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }
        Event.preventDefault()
    }

    return (
            <div className="max-w-auto h-screen w-full m-auto bg-indigo-300 rounded p-5">
                <header>
                    <div className="relative left-5 top-5">
                        <button onClick={Toggle} type="button" className="absolute bottom-0 right-0 bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>

                <div className="h-3/4 overflow-y-scroll">
                <ul>
                    {testMess.map(message => (
                    <li>
                        <Message message={message} />
                    </li>
                    ))}
                </ul>
                </div>
                <div className="mb-6 mx-4">
                    <form onSubmit={handleOnSubmit}>
                    <div className="pt-4 absolute pb-0 w-3/4 bottom-0">
                                    <div className="write bg-white shadow flex rounded-lg">
                                        <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                                            <span className="block text-center text-gray-400 hover:text-gray-800">
                                                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <textarea onChange={handleMessage} name="message" className="w-full block outline-none py-4 px-4 bg-transparent" placeholder="Type a message..." autoFocus></textarea>
                                        </div>
                                        <div className="flex-2 w-32 p-2 flex content-center items-center">
                                            <div className="flex-1 text-center">
                                                <span className="text-gray-400 hover:text-gray-800">
                                                    <span className="inline-block align-text-bottom">
                                                        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                                                    <span className="inline-block align-text-bottom">
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-4 h-4 text-white"><path d="M5 13l4 4L19 7"></path></svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </form>
                </div>
            </div>

           
    )
}