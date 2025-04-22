export const validateEcmascriptText = (text) => {
    const pattern = /^ *ECMAScript([1-9]|1[0-5])?$/i;
    return pattern.test(text);
}

export const validateDomainZone = (text) => {
    const pattern = /^(\w|[.-])+\.(com|org|il)$/i; // a-z0-9_   =   \w
    return pattern.test(text);
}

export const validateEmail = (email) => {
    const pattern = /^\w(\w|\.|-)*@[a-z0-9](\w|-|\.)*\.[a-z]{2,6}$/i
    return pattern.test(email);
}

// ecmoscript export style