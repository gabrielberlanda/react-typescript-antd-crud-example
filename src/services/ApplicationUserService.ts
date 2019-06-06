import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUsersMockData } from "../mocks/ApplicationUserMockData";

export const getUsers = (filter: string): Promise<ApplicationUser[]> => {
    return new Promise<ApplicationUser[]>((resolve) => {
        resolve(
            ApplicationUsersMockData.filter(u => u.name && u.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
        )
    })
};

export const findUserById = (id: number): Promise<ApplicationUser> => {
    return new Promise<ApplicationUser>((resolve, reject) => {
        const user = ApplicationUsersMockData.find(u => u.id === id);
        if(user) {
            resolve(user);
        } else {
            reject({ message: 'User not found' });
        }
    })
}