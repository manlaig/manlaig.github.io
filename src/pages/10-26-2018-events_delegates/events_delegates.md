---
path: "/events-delegates"
date: "2018-10-26T20:12:33.962Z"
title: "Using Events and Delegates in Unity"
excerpt: "Events and Delegates allow you notify other classes when a certain action happens. This writing will try to explain what events and delegates are and how to use them."
---

Let’s say you’re writing a function that does something when the user clicks on the mouse. The most obvious and inefficient solution might be to check if the mouse is clicked in some update function that is called every frame. It might look like:

```
void Update()
{
  if(Input.mousePress() > 0)
     doSomething();
}
```

But, this is very inefficient and it’s a bad code design. Why? Because what if you want other functions in different classes to respond to mouse clicks also. Then, you might have an if statement checking mouse click and calling all those static functions or you might have update functions in each class checking for mouse clicks. Either way, this is an example of bad code.

We need a better solution. Events are perfect fit for this situation.

If you’re coding a game, you want to structure your code, in a way that doesn’t make different components depend on each other, events can be very useful in this case. 

In short, **events allow you to get notified on actions and notify other classes on actions.** 

To declare an event, you first need a delegate.
>A delegate is an object that stores functions.

This is the syntax for declaring a delegate: 
`delegate returnType name([parameters]);`

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

  public static void Main (string[] args)
  {
    Del delInstance = null;
    delInstance += func;
    delInstance += func2;
    delInstance();
  }
}
```
Let's go over this class line by line.
First, we declare a delegate `Del` with return type `void` and no parameters. What that means is that all functions `Del` stores must have a return type of `void` and no paremeters. We can see that `func` and `func2` satisfies these specifications. So, they can be stored in `delInstance`.

When we run `delInstance()`, that calls all the functions stored in `delInstance`.

>STILL WRITING