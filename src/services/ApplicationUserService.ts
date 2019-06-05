import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUsersMockData } from "../mocks/ApplicationUserMockData";

export const getUsers = (filter: string): Promise<ApplicationUser[]> => {
    return new Promise<ApplicationUser[]>((resolve) => {
        resolve(
            ApplicationUsersMockData.filter(u => u.name && u.name.indexOf(filter) > -1)
        )
    })
};
