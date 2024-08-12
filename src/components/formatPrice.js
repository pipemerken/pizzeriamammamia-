export const formatPrice = (price) => {
    // Convierte el valor a número y lo formatea
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0, // Ajusta los dígitos decimales si es necesario
    }).format(price);
};