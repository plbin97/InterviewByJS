# ASCII-Encoded Strings
Question from Honeywell interview

Many simple encoding methods have been devised over years. A common method having to do with computing is the ASCII character set used to display characters on the screen. Each character is given a numeric value which can be interpreted by the computer. 

In this challenge, you will be given a string to decode. Am example of an encoded string "Hacker Rank" follows.

729799107101114328297110107

We then reverse the ASCII string to get the encoded string 701011792823411101701997927. 

To decode the string, first reverse the string of digits, then successively pick valid values from the string and convert them to their ASCII equivalents. Some of the values will have two digits, and others three. Use the ranges of valid values when decoding the string of digits.

##### Function Description
The function must return the original decoded string. 

decode has the following parameter(s): 

* encoded: an encoded string

##### Constraints
* 1 <= |s| <= 10^5
* s[i] -> {A-Z,a-z, }
