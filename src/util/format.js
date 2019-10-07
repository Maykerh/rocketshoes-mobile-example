export const formatPrice = value => {
    return `R$ ${JSON.stringify(value).replace('.', ',')}`;
};
