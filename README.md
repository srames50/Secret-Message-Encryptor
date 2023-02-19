# Secret-Message-Encryptor-

This is a JavaScript function that creates a secret message by shifting the meanings of the given message by the users' given amount. It takes a string as input and returns an encrypted string. Inputs can be uppercase or lowercase, but the returned string will be all uppercase.

Usage: 
To use this function, copy the code and paste it into your preferred JavaScript environment.

The function secretMessageCreator(str, num) takes two parameters:

str: The message you want to encrypt

num: The amount you want to shift each letter in the message
Call the function and pass your message and shift value as arguments. The function will return the encrypted message in all uppercase.

To decode an encrypted message, use the 26 minus the shift value you used to encode the message.

Limitations: 
This encryption technique is not very secure and can be easily broken by an attacker with some knowledge of cryptography. It's not suitable for securing sensitive information, but it can be a fun and educational tool to learn about encryption and decryption.
