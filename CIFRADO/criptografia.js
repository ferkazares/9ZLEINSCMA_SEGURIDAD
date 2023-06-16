function encrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var encryptionType = document.getElementById("encryptionType").value;
    var result = "";
    
    if (encryptionType === "cesar") {
        result = cesarEncrypt(message, parseInt(key));
    } else if (encryptionType === "vigenere") {
        result = vigenereEncrypt(message, key);
    }
    
    document.getElementById("result").value = result;
}

function decrypt() {
    var message = document.getElementById("message").value;
    var key = document.getElementById("key").value;
    var encryptionType = document.getElementById("encryptionType").value;
    var result = "";
    
    if (encryptionType === "cesar") {
        result = cesarDecrypt(message, parseInt(key));
    } else if (encryptionType === "vigenere") {
        result = vigenereDecrypt(message, key);
    }
    
    document.getElementById("result").value = result;
}

function cesarEncrypt(message, key) {
    var encryptedMessage = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            encryptedMessage += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedMessage += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            encryptedMessage += message.charAt(i);
        }
    }
    return encryptedMessage;
}

function cesarDecrypt(message, key) {
    return cesarEncrypt(message, 26 - key);
}

function vigenereEncrypt(message, key) {
    var encryptedMessage = "";
    var keyIndex = 0;
    
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            var keyCharCode = key.charCodeAt(keyIndex % key.length);
            var encryptedCharCode = ((charCode - 65 + keyCharCode - 65) % 26) + 65;
            encryptedMessage += String.fromCharCode(encryptedCharCode);
            keyIndex++;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            var keyCharCode = key.charCodeAt(keyIndex % key.length);
            var encryptedCharCode = ((charCode - 97 + keyCharCode - 97) % 26) + 97;
            encryptedMessage += String.fromCharCode(encryptedCharCode);
            keyIndex++;
        } else {
            encryptedMessage += message.charAt(i);
        }
    }
    
    return encryptedMessage;
}

function vigenereDecrypt(message, key) {
    var decryptedMessage = "";
    var keyIndex = 0;
    
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            var keyCharCode = key.charCodeAt(keyIndex % key.length);
            var decryptedCharCode = ((charCode - 65 - (keyCharCode - 65) + 26) % 26) + 65;
            decryptedMessage += String.fromCharCode(decryptedCharCode);
            keyIndex++;
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            var keyCharCode = key.charCodeAt(keyIndex % key.length);
            var decryptedCharCode = ((charCode - 97 - (keyCharCode - 97) + 26) % 26) + 97;
            decryptedMessage += String.fromCharCode(decryptedCharCode);
            keyIndex++;
        } else {
            decryptedMessage += message.charAt(i);
        }
    }
    
    return decryptedMessage;
}
