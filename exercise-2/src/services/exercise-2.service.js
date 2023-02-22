export default class Exercise2Service {
  async storeDetails(details) {
    const name = details.name;
    const age = details.age;
    const birthdate = details.birthdate;
    const contactMobile = details.contact.mobile;
    const contactHome = details.contact.home;
    const addressLine1 = details.address.line1;
    const addressLine2 = details.address.line2;
    const addressCity = details.address.city;
    const addressProvince = details.address.province;
    const addressCountry = details.address.country;

    let errorMessage = "";
    //name
    if (!name) {
      errorMessage += "should not be empty ";
    }
    if (name.length < 4) {
      errorMessage += "  should be a String and greater than 3";
    }

    //age

    if (!age) {
      errorMessage += "should not be empty";
    }
    if (age < 0) {
      errorMessage += "should be a positive integer";
    }

    //birthdate

    if (!birthdate) {
      errorMessage += "should not be empty";
    }
    if (birthdate < 0) {
      errorMessage += "dipa nagagawa!!";
    }

    //contact.mobile

    if (contactMobile.length > 11) {
      errorMessage += "should not be more than 11 digits";
    }

    //contact.home
    if (contactHome.length < 8) {
      errorMessage += "should not be less than 7 digits";
    }

    // address.line1
    if (!addressLine1) {
      errorMessage += "should not be empty";
    }

    // address.line2
    if (!addressLine2) {
      errorMessage += "should not be empty";
    }

    // address.city
    if (!addressCity) {
      errorMessage += "should not be empty";
    }
    // address.province
    if (!addressProvince) {
      errorMessage += "should not be empty";
    }

    // address.country
    if (!addressCountry) {
      errorMessage += "should not be empty ";
    }

    if (
      addressCountry !== "India" ||
      addressCountry !== "Philippines" ||
      addressCountry !== "New Zealand" ||
      addressCountry !== "Australia"
    ) {
      errorMessage +=
        " allowed countries should only be Philippines, India, New Zealand, and Australia";
    }

    if (!errorMessage) {
      return { details };
    } else {
      return { errorMessage };
    }
  }
}
