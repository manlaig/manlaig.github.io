---
path: "/lvalue-rvalue"
date: "2018-10-26T17:12:33.962Z"
title: "lvalues and rvalues in C++"
excerpt: "Understanding lvalues and rvalues will give you more deeper understanding of C++. You will get better idea C++ move constructors, rvalue references, assignments, operators, and more."
---
Take a look at this code:
```c++
int main()
{
    10 = 1;
}
```
Weird, right? We never see someone writing code like this. If we run this code, the get:

```c++
error: lvalue required as left operand of assignment
10 = 1;
```

So, we can see that we need lvalue as the left operand, the compiler is telling us `10` is not an lvalue.

### So, what is lvalue?
lvalue means “locator value.” Overly simply explanation, lvalue is an object that can be the left operand of assignment because initially, lvalues meant objects that can be placed on the left side of an assignment operator.

Definition:
>**lvalue is any object that has location in memory of the program.**

This explains why we got the previous error, it’s because `10` doesn’t have a location in memory, it’s not a lvalue.

Also, that is why the below code works: 
```c++
int i;
i = 10;
```
Here, `i` is declared, so it has a location in memory, which means i is a lvalue.

### lvalue reference
This writing will go over two types of references: lvalue reference and rvalue reference. I will talk about rvalue references later in this writing. But now, what is a lvalue reference?
>**lvalue reference is a reference to a lvalue (existing object that's present in the memory of the program)**

lvalue references are created using the `&` operator. For example,
```c++
int i = 0;
int& ref = i;
```
`ref` is a lvalue reference to `i`. That means, any change to `i` will affect `ref` and vice versa.

When creating lvalue references, the assignment operator expects a lvalue on the right side. That's why this code `int& ref = 0;` will not compile.

We get the error:
```c++
error: cannot bind non-const lvalue reference of type 'int&' to an rvalue of type 'int'
```
In summary, everything that's defined (have memory address in program memory) is a lvalue. You can assume that everything that has a name is a lvalue.

### What is rvalue?
rvalue is the opposite of lvalue. They are expressions and temporary values that don't have location in the memory.

If you recall that everything that's defined and has a name is a lvalue, then anything that doesn't have a name is a rvalue.

### Conversion between rvalue and lvalue

there is an implicit conversion from lvalue to rvalue in function arguments

### Move constructor

>STILL WRITING