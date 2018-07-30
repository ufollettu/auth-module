beforeEach(() => {
    // mock data for unit testing
    const user_permission = require("../middleware/user_permission.json");
    const UserAuth = require('./auth').UserAuth;
    return auth = new UserAuth(user_permission);
});

describe('Test the auth.can() method', () => {
    test('userId = undefined and permissionId = undefined should throw', () => {
        expect(() => { auth.can() }).toThrow('no input fields')
    });
    test('userId = 1 and permissionId = undefined should throw', () => {
        expect(() => { auth.can(1) }).toThrow('no input fields')
    });
    test('userId = undefined and permissionId = 1 should throw', () => {
        expect(() => { auth.can(undefined, 1) }).toThrow('no input fields')
    });
    test('userId = 1 and permissionId = 1 should be true', () => {
        expect(auth.can(1, 1)).toBe(true)
    });
    test('userId = 1 and permissionId = 2 should be false', () => {
        expect(auth.can(1, 2)).toBe(false)
    });
    test('userId = 2 and permissionId = 0 should throw', () => {
        expect(() => { auth.can(2, 0) }).toThrow('no input fields')
    });
    test('userId = 5 and permissionId = 1 should be false', () => {
        expect(auth.can(5, 1)).toBe(false)
    });
});

describe('Test the auth.allow() method', () => {
    test('userId = undefined and permissionId = undefined should throw error', () => {
        expect(() => { auth.allow() }).toThrow('no input fields')
    });
    test('userId = 1 and permissionId = 2 should return default obj', () => {
        const defaultObj = { userId: 1, permissionId: 2 }
        expect(auth.allow(1, 2)).toMatchObject(defaultObj);
    });
    test('userId = 1 and permissionId = 2 and custom fields set should return custom obj', () => {
        const customObj = { idField: 1, keyField: 2 }
        expect(auth.allow(1, 2, ['idField', 'keyField'])).toMatchObject(customObj);
    });
    test('userId = undefined and permissionId = undefined and custom fields set should throw error', () => {
        expect(() => { auth.allow(undefined, undefined, ['idField', 'keyField']) }).toThrow('no input fields');
    });
});

describe('Test the auth.disallow() method', () => {
    test('userId = undefined and permissionId = undefined should throw error', () => {
        expect(() => { auth.disallow() }).toThrow('no input fields')
    });
    test('userId = 1 and permissionId = 2 should return default obj', () => {
        const defaultObj = { userId: 1, permissionId: 2 }
        expect(auth.disallow(1, 2)).toMatchObject(defaultObj);
    });
    test('userId = 1 and permissionId = 2 and custom fields set should return custom obj', () => {
        const customObj = { idField: 1, keyField: 2 }
        expect(auth.disallow(1, 2, ['idField', 'keyField'])).toMatchObject(customObj);
    });
    test('userId = undefined and permissionId = undefined and custom fields set should throw error', () => {
        expect(() => { auth.disallow(undefined, undefined, ['idField', 'keyField']) }).toThrow('no input fields');
    });
});