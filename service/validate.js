const validateEcmascriptText = (text) => {
    const pattern = /^ *ECMAScript([1-9]|1[0-5])?$/i;
    return pattern.test(text);
}

const validateDomainZone = (text) => {
    const pattern = /^(\w|[.-])+\.(com|org|il)$/i; // a-z0-9_   =   \w
    return pattern.test(text);
}

const validateEmail = (email) => {
    const pattern = /^\w(\w|\.|-)*@[a-z0-9](\w|-|\.)*\.[a-z]{2,6}$/i
    return pattern.test(email);
}

module.exports = {
    validateEcmascriptText,
    validateDomainZone,
    validateEmail
}; // common.js export style

