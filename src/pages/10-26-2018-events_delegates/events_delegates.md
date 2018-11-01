---
path: "/events-delegates"
date: "2018-10-26T20:12:33.962Z"
title: "Using Events and Delegates in Unity"
excerpt: "Events and Delegates allow you notify other classes when a certain action happens. This writing will try to explain what events and delegates are and how to use them."
---

Let’s say you’re writing a function that does something when the user touches on the screen. The most obvious solution might be to check the touch input in some function that is called every frame. In Unity, it might look like this:

```
void Update()
{
  if(Input.touchCount > 0)
     doSomething();
}
```

But, this is very inefficient and it’s bad code. Why? Because what if you want other functions in different classes to respond to touch input also. Then, you might need to make this `if` statement longer or you might have update functions in each classes checking for touch inputs. Either way, this is bad code. 

We need a better solution. Events are perfect for this situation.

If you’re coding a game, you want to structure your code in a way that doesn’t make different components depend on each other, events can be very useful for that.

### Definition
In short, **events allow you to listen and notify other classes for actions.** 

Events depend on **delegates**, to understand events we first need to know about delegates.
>**A delegate is an object that stores functions.**

This is the syntax for declaring a delegate: 
```
delegate returnType name([parameters]);
```
The parameters are optional.

Here's an example of a delegate in C#:
```
class MainClass
{
  delegate void Del();
  
  static void func()
  {
    Console.WriteLine("Func");
  }
  
  static void func2()
  {
    Console.WriteLine("Func2");
  }

  public static void Main(string[] args)
  {
    Del delInstance = null;
    delInstance += func;
    delInstance += func2;
    delInstance();
  }
}
```
First, we declare a delegate `Del` with return type `void` and no parameters. What that means is that all functions `Del` stores must have a return type of `void` and no paremeters. We can see that `func` and `func2` satisfies these specifications. So, they can be stored in `delInstance`.

When we run `delInstance()`, that calls all the functions stored in `delInstance`.

>STILL WRITING