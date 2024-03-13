
export const convertToUpperCase = (data) => {
    const result = data && typeof data === 'string' ? data.toUpperCase() : data;
    return result;
  }

  export const emailValidator = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export const passwordValidator = password => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password)
  }
  
  export const getprefixName = (message) => {
    const getIndex = message.includes("is") ? message.indexOf("is") : message.indexOf("must");
    const getPrefix = message.slice(0, getIndex - 1);
    console.log("getPrefix", getPrefix);
    const getName = getPrefix.toLowerCase().replaceAll(" ", "_");
    return getName;
  }
  