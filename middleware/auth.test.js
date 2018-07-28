const AuthModuke = require('./auth').UserAuth;

test('userId = 1 and permissionId = 1 should be true', () => {
    expect(can(1, 1)).toBe(true)
});
