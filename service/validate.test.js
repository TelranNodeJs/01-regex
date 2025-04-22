import {validateEcmascriptText, validateDomainZone, validateEmail}  from './validate'; // ecmoscript export style


describe('validateEcmascriptText', () => {
    test('should return true for valid ECMAScript is provided', () => {
        expect(validateEcmascriptText('       ecmascript')).toBe(true);
        expect(validateEcmascriptText('ecmascript')).toBe(true);
        expect(validateEcmascriptText('       ecmascript15')).toBe(true);
        expect(validateEcmascriptText('       ecmascript7')).toBe(true);
        expect(validateEcmascriptText('ECMAScript')).toBe(true);
    })

    test('should return false for valid ECMAScript is not provided', () => {
        expect(validateEcmascriptText('   ecmascrip')).toBe(false);
        expect(validateEcmascriptText('ecmascript0')).toBe(false);
        expect(validateEcmascriptText('       ecmascript16')).toBe(false);
        expect(validateEcmascriptText('   10    ecmascript7')).toBe(false);
    })
})

describe('validateDomainZone', () => {
    test('domain zone is valid', () => {
        expect(validateDomainZone('abracadabra.com')).toBe(true);
        expect(validateDomainZone('abracadabra.org')).toBe(true);
        expect(validateDomainZone('abracadabra.il')).toBe(true);
        expect(validateDomainZone('abra-cadabra.il')).toBe(true);
        expect(validateDomainZone('abra.cadabra.il')).toBe(true);
        expect(validateDomainZone('abra_cadabra.il')).toBe(true);
        expect(validateDomainZone('abracadabra2025.il')).toBe(true);
    })

    test(' domain zone is not valid', () => {
        expect(validateDomainZone('abracadabracom')).toBe(false);
        expect(validateDomainZone('abracadabra.ru')).toBe(false);
        expect(validateDomainZone('.com')).toBe(false);
        expect(validateDomainZone('abraca dabra.com')).toBe(false);
        expect(validateDomainZone('abraca$dabra.com')).toBe(false);
    })
})

describe('validateEmail', () => {
    test ('valid email address', () => {
        expect(validateEmail('john-smith1990@gmail.com')).toBe(true);
        expect(validateEmail('o@g.uk')).toBe(true);
        expect(validateEmail('john.smith@walla.co.il')).toBe(true);
    })

    test('not valid email address', () => {
        expect(validateEmail('abracadabra.com')).toBe(false);
        expect(validateEmail('.com')).toBe(false);
        expect(validateEmail('abracadabr@@a.com')).toBe(false);
        expect(validateEmail('abra@cada@bra.com')).toBe(false);
        expect(validateEmail('@gmail.com')).toBe(false);
        expect(validateEmail('abracadabra@gmail.c')).toBe(false);
        expect(validateEmail('abracad$abraa@gmail.com')).toBe(false);
        expect(validateEmail('abracad abraa@gmail.com')).toBe(false);
        expect(validateEmail('abracadabraa@gmail.commerce')).toBe(false);
        expect(validateEmail('abra@gmailcom')).toBe(false);
        expect(validateEmail('abr.a@gmailcom')).toBe(false);
    })
})