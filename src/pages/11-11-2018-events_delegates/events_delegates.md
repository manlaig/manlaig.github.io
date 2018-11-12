---
path: "/events_delegates"
date: "2018-11-11T11:34:33.962Z"
title: "Using Events and Delegates in Unity"
excerpt: "Events and Delegates allow you notify other classes when a certain action happens. This writing will try to explain what events and delegates are and how to use them."
---

Let’s say you’re writing a function that does something when the user clicks on the mouse. The most obvious solution might be to check if the mouse is clicked in some update function that is called every frame. It might look like:

```csharp
void Update()
{
  if(Input.mousePress() > 0)
     doSomething();
}
```

This is okay if you only have one class listening for it. If not, this is very inefficient and it’s a bad code design. Why? Because what if you want other functions in different classes to respond to mouse clicks also. Then, you might have an `if` statement checking mouse events and calling all those static functions or you might have update functions in each class checking for mouse events. Either way, this is bad code. It’s hard to extend and maintain.

Events are perfect solutions for this situation.

Events are one of my favorite features of C#. If you’re coding a game, you want to structure your code, in a way that doesn’t make different components depend on each other, events can be very useful for that. 

>In short, **events allow you to listen and notify other classes for actions.** 

Events depend on **delegates**, to understand events we first need to know about delegates because you can't have events without them.

## Delegates

>**A delegate is a reference type object that holds references to functions.**

This is the syntax for declaring a delegate: 

```csharp
delegate returnType name([parameters]);
```

The parameters are optional.

I mentioned that delegates store functions, so the `parameters` of a delegate means that the **functions stored in a delegate must have the same parameters as the delegate declaration**.

**The `returnType` tells what the functions stored in a delegate must return**.

Here's an example of a delegate in C#:

```csharp
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

Output:

```
  Func
  Func2
```

First, we declare a delegate `Del` with return type `void` and no parameters. What that means is that all functions `Del` stores must have a return type of `void` and no paremeters. We can see that `func` and `func2` satisfies these specifications. So, they can be stored in `delInstance`.

Otherwise, `delInstance += func;` would not work.

When we run `delInstance()`, that calls all the functions stored in `delInstance`, in the order they were added.

## Events

I think of events as being wrapper classes of delegates. They are capable of doing the same thing, but events solve some problems with delegates, which I will demostrate shortly.

Now that we have a delegate, we can declare an event.

Here's the syntax for declaring events:

```csharp
event delegateName name;
```

`delegateName` is the name of the declared delegate, `Del` in our previous code.

Using the delegate we declared before, events can be added like this:

```csharp
class Events
{
  public delegate void Del();
  public static event Del e;
  
  static void trigger()
  {
    if(e != null)
      e();
  }
}
```

`trigger()` is for triggering the event, this is because **outside the class we can only attach and remove listeners to an event**. Calling the event can only be done in the class the event is defined.

To use this event in a different class, we need a function that matches the delegate type. For example, 

```csharp
class MainClass
{
  static void func() { }

  public static void Main (string[] args)
  {
    Events.e += func; // attaching to event
    Events.trigger(); // triggering event
    Events.e -= func; // removing from event
  }
}
```

**The compiler only allows attaching and removing operations when events are used in different classes.**

Creating and using events like this allows us to notify all listeners when event is invoked.

You can probably already see the benefits of using this design. We can have events, such as `playerDead`, `playerMoved`, `gameOver`, `gameStarted`, and so on. You can attach a function that does displays the game over text to the `playerDead` event and it will be called when the event is invoked.

## Delegates vs Events

If you noticed, delegates and events can do the same thing. Both can hold functions and call them when it is invoked.

As I said earlier, I think of events as wrapper classes of delegates. 

This is because **delegates have a weakness when it comes to making a notification system.**

If you have a public delegate, then you can change its properties in any class. Like setting it to `null`. This is a serious issue. So, delegates cannot be used to create a notification system because of this.

On the other hand, events solve this problem of delegates. You can only add and remove functions from events in outside classes. 
