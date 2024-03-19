import {User} from "@/interfaces/user/AuthState";
import {MessageList} from "@/interfaces/message/Message";

export const BASE_API_URL = 'http://localhost:5000/';
export const AUTH_API = `${BASE_API_URL}auth/login`;
export const CHECK_AUTH_API = `${BASE_API_URL}auth/me`;


// test data
export const user: User = {
    id: 1,
    name: 'Samvel',
    phone: '+37498942042',
    gender: 'male',
    image: 'https://picsum.photos/200/300',
    token: '',
    contacts: [
        {
            id: 2,
            name: 'Adil Adnan',
            phone: '+37498272721',
            gender: 'male',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Bristy Haque',
            phone: '+37498272929',
            gender: 'male',
            image: 'https://picsum.photos/333/300',
        }
    ]
}
export const messageData: MessageList = {
    id: 1,
    messageList: [
        {
            id: 1,
            unReadMessagesCount: 2,
            isOnline: true,
            participants: [{
                id: 4,
                name: 'Bristy Haque88',
                phone: '+37498272929',
                gender: 'male',
                image: 'https://picsum.photos/333/300',
            }, {
                id: 5,
                name: 'Bristy Haque1',
                phone: '+374972929',
                gender: 'male',
                image: 'https://picsum.photos/333/300',
            }],
            messages: [{text: 'lorem', time: 'today'}, {text: 'lorem2', time: 'yesterday'}]
        },
        {
            id: 2,
            isGroup: true,
            isOnline: false,
            groupName:'Team Align',
            unReadMessagesCount: 0,
            participants: [{
                id: 4,
                name: 'Bristy Haque2',
                phone: '+37498272929',
                gender: 'male',
                image: 'https://picsum.photos/900/300',
            }, {
                id: 5,
                name: 'Bristy Haque3',
                phone: '+37498272929',
                gender: 'male',
                image: 'https://picsum.photos/600/300',
            }, {
                id: 7,
                name: 'Bristy Haque3',
                phone: '+37498272929',
                gender: 'male',
                image: 'https://picsum.photos/500/350',
            }],
            messages: [{text: 'lorem1', time: 'today'}, {text: '123123', time: 'yesterday'}]
        }
    ]
}
