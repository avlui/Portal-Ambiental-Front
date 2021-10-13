function CheckEmail(email) {
    const structure = /\S+@\S+.\S+/;
    return structure.test(email);

}

export default CheckEmail;