---
path: "/building-placement"
date: "2018-12-08T20:13:43.962Z"
title: "RTS Building Placement in Unity"
excerpt: "I played Red Alert 2 growing up. The game was about placing buildings, raising an army, and conquering the enemy. Implementing a similar building placement in Unity seemed like a fun thing to do. So, I have tried to do something similar."
---

I used to play Red Alert 2 growing up. The game was about placing buildings, raising an army, and conquering the enemy. Implementing a similar building placement in Unity seemed like a fun thing to do. So, I have tried to do something similar as shown below.

<img src="/static/images/example-building-place.jpg" width="260px" height="170px">

The above *[image](https://imgur.com/OmFT6)* shows how Starcraft places buildings.

## My attempt

**The goal was to place buildings while checking collisions.** The struggle was that I wanted my implementation to work with any object and I wanted the tiles under to be the *same* size as the object. That meant I needed to get the area of the object and fill it with tiles that are either green or red.

After some coding, I came up with a working building placement. Currently, it looks like this:

![](/static/images/desert.gif?raw=true "Placing building in desert")

The thing that I think is cool about it is that it doesn't allow placing objects on high-slope areas.

# Code

### BuildingSO (ScriptableObject)

I think of `ScriptableObject`s being like `struct`s. The cool thing about them is that they **can be stored as assets.** I found [this](https://youtu.be/raQ3iHhE_Kk) talk about game architectures using `ScriptableObject`s to be very interesting.

For this implementation, spawnable buildings are represented as `ScriptableObject`s that contains their name, prefab, cost, and icon.

```csharp
[CreateAssetMenu(fileName = "Building", menuName = "Placeable/Building", order = 1)]
public class BuildingSO : ScriptableObject
{
    public string objectName = "Name";
    public GameObject buildingPrefab;
    public float cost;
    public Icon icon;
}
```

If we have define it like this, creating an instance of `BuildingSO` can be done just like any other Asset! 

### Placing Objects

Now that each placeable object is defined, the next thing needed is actually placing the object. Raycasts can be useful in this case.

.
.
.