const USERS = {"example@example.com": "0039829837498983749823"}

/* Code from https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/ */
function stringToHash(string) {
             
    let hash = 0;
     
    if (string.length == 0) return hash;
     
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
     
    return hash;
}


document.addEventListener("DOMContentLoaded", () => {
    const getEmailaddress = document.getElementById("InputEmail");
    
})