import {isPasswordValid} from "../../password_validator/passwordValidator";

describe(`Password Validator should`, () => {
    test(`validate successfully a password that meets all the requirements`, () => {
        expect(isPasswordValid("Pass1_")).toBeTruthy()
    })

    test(`invalidate a password that does not have at least six characters`, () => {
        expect(isPasswordValid("P_ss1")).toBeFalsy()
    })

    test(`invalidate a password that does not have at least one number`, () => {
        expect(isPasswordValid("Pass__")).toBeFalsy()
    })

    test(`invalidate a password that does not have at least one upper case character`, () => {
        expect(isPasswordValid("pass1_")).toBeFalsy()
    })

    test(`invalidate a password that does not have at least one lower case character`, () => {
        expect(isPasswordValid("PASS1_")).toBeFalsy()
    })

    test(`invalidate a password that does not have at least one underscore character`, () => {
        expect(isPasswordValid("Pass11")).toBeFalsy()
    })
});
