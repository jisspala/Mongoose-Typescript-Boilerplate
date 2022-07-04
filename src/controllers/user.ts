import { randomUUID } from "crypto";
import { User } from "../model";
import { cuser } from "../types";



const addUser = async (): Promise<void> => {
    const user: cuser = await User.create({
        name: `Name_${randomUUID()}`,
        email: `Email_${randomUUID()}`,
    });
    console.log(user);
}

const getUsers = async (): Promise<void> => {
    const users: cuser[] = await User.find()
    console.log(users);
}

export { addUser,getUsers };
