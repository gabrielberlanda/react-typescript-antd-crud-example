import { ApplicationUser, ContactType, ApplicationGroup } from "../models/ApplicationUser";

const AdministradorGroup: ApplicationGroup = { name: 'Grupo Administradores' };
const OperariosGroup: ApplicationGroup = { name: 'Grupo Operarios' };
const GestoresGroup: ApplicationGroup = { name: 'Grupo Gestores' };

export const ApplicationGroupsMockData: ApplicationGroup[] = [
    AdministradorGroup, 
    OperariosGroup,
    GestoresGroup
];

export const ApplicationUsersMockData: ApplicationUser[] = [
    {
        id: 1,
        name: 'Gabriel Berlanda',
        birthDate: new Date('05/01/1995'),
        disabled: undefined,
        password: '123456',
        userName: 'berlanda',
        userContacts: [
            { allowNotification: true, type: ContactType.EMAIL, value: 'berlanda@mailinator.com' },
            { allowNotification: false, type: ContactType.SYSTEM },
            { allowNotification: false, type: ContactType.SMS, value: '45999999999'}
        ], 
        userGroups: [
            AdministradorGroup,
            GestoresGroup
        ]
    }, 
    {
        id: 2,
        name: 'João da Silva',
        birthDate: new Date('05/02/1990'),
        disabled: undefined, 
        password: '123456',
        userName: 'joaosilva',
        userContacts: [
            { allowNotification: true, type: ContactType.SYSTEM }
        ],
        userGroups: [
            OperariosGroup
        ]
    },
    {
        id: 3,
        name: 'Usuário disabled',
        birthDate: new Date('05/02/1990'),
        disabled: new Date(),
        password: '99999999',
        userName: 'disabled',
        userContacts: [
            { allowNotification: true, type: ContactType.WHATS_APP, value: '45888888888'}
        ],
        userGroups: [
            OperariosGroup
        ]
    }
];