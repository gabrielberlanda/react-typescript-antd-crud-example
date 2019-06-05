import { ApplicationUser } from "../models/ApplicationUser";
import { ApplicationUsersMockData } from "../mocks/ApplicationUserMockData";

export const getUsers = (): Promise<ApplicationUser[]> => {
    return new Promise<ApplicationUser[]>((resolve) => {
        setTimeout(() => resolve(ApplicationUsersMockData), 2000);
    })
};
