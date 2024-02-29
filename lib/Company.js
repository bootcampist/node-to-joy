class Company {
    // Set the company details to the user's input or a default alternative;
    constructor(name, logo, favicon, motto){
        this.name = name || '';
        this.logo = logo || '';
        this.favicon = favicon || '';
        this.motto = motto || '';
    }

    // Functions to return the companydetails
    getName () {
        return this.name;
    }
    getLogo () {
        return this.logo;
    }
    getFavicon () {
        return this.favicon;
    }
    getMotto () {
        return this.motto;
    }
    getRole() {
        return 'Company';
    }
}

// Export the Class
module.exports = Company;