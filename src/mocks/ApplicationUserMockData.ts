import { ApplicationUser, ContactType, ApplicationGroup, Structure } from "../models/ApplicationUser";

const AdministradorGroup: ApplicationGroup = { id: 1, name: 'Grupo Administradores' };
const OperariosGroup: ApplicationGroup = { id: 2, name: 'Grupo Operarios' };
const GestoresGroup: ApplicationGroup = { id: 3, name: 'Grupo Gestores' };
const RandomGroup: ApplicationGroup = { id: 4, name: 'Grupo Aleatorio' };

export const ApplicationGroupsMockData: ApplicationGroup[] = [
    AdministradorGroup, 
    OperariosGroup,
    GestoresGroup,
    RandomGroup
];

const structureGrandChildren1: Structure = { id: 4, name: 'Estrutura neta 1' };
const structureGrandChildren2: Structure = { id: 5, name: 'Estrutura neta 2' };
const structureChildren1: Structure = { id: 2, name: 'Estrutura filha 1' };
const structureChildren2: Structure = { id: 3, name: 'Estrutura filha 2', children: [ structureGrandChildren1, structureGrandChildren2 ] };
const structureRoot: Structure = { id: 1, name: 'Estrutura raiz', children: [ structureChildren1, structureChildren2 ] };

export const StructuresMockData: Structure[] = [
    structureRoot
];

export const getStructureTreeMockData = () => {
    function mapStructureToTreeData(structures: Structure[]): any {
        return structures.map(s => ({
            title: s.name,
            key: s.id,
            value: s.id,
            children: mapStructureToTreeData(s.children || [])
        }));
    }

    return mapStructureToTreeData(StructuresMockData);
}


export const ApplicationUsersMockData: ApplicationUser[] = [
    {
        id: 1,
        name: 'Gabriel Berlanda',
        birthDate: new Date('05/01/1995'),
        disabled: undefined,
        password: '123456',
        userName: 'berlanda',
        structure: structureChildren1,
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
        structure: structureChildren2,
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
        structure: structureGrandChildren2,
        userContacts: [
            { allowNotification: true, type: ContactType.WHATS_APP, value: '45888888888'}
        ],
        userGroups: [
            OperariosGroup
        ]
    }
];