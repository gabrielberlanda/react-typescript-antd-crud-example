export enum ContactType {
    SYSTEM = 1,
    EMAIL = 2,
    SMS = 3,
    WHATS_APP = 4
}

export interface ApplicationUserContact {
    value?: string;
    type?: ContactType,
    allowNotification?: boolean;
}

export interface ApplicationGroup {
    id?: number,
    name?: string;
    description?: string;
}

export interface ApplicationUser {
    id?: number;
    userName?: string;
    name?: string;
    birthDate?: Date;
    disabled?: Date;
    password?: string;
    userGroups?: ApplicationGroup[];
    userContacts?: ApplicationUserContact[];
}