# Is Possible
Question from Honeywell interview

Consider a pair of integers, (a,b). The following operations can be performed on (a,b) in any order, zero or more times: 
```
 (a,b) -> (a + b, b)
 (a,b) -> (b, a + b)
```

For example, starting with (1, 1), perform the operation (1, 1 + 1) to get (1, 2), perform the operation (1 + 2, 2) to get (3, 2), and perform the operation(3 + 2, 2) to get (5, 2). Alternatively, the first operation could be (1 + 1, 1) to get (2, 1) and so on. 

Build a function "isPossible" that contains four parameters a,b,c,d. 

"a" and "b" represent the starter coordinate (a, b). 

"c" and "d" represent the target coordinate (c, d). 

Function "isPossible" should return true if coordinate (c, d) is reachable; otherwise, return false. 
