export enum ContactType {
    SYSTEM = 1,
    EMAIL = 2,
    SMS = 3,
    WHATS_APP = 4
}

export interface Structure {
    id?: number;
    name?: string;
    children?: Structure[]
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
    structure?: Structure;
    userGroups?: ApplicationGroup[];
    userContacts?: ApplicationUserContact[];
}