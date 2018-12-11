---
path: "/building-placement"
date: "2018-12-08T20:13:43.962Z"
title: "Grid-based object placement in Unity"
excerpt: "In RTS games, when you place an object, it shows you where you can place it and where you cannot. In some games, like Starcraft, they have a grid that shows the collisions. This writing will go over on implementing a similar object placement."
---

Placing object while checking collisions can done simply with a raycast, but RTS games have a grid under the object which shows whether it can be placed at that spot.

<img src="/static/images/example-building-place.jpg" width="360px" height="270px">

The *[image](https://imgur.com/OmFT6)* above shows Starcraft’s object placement grid.

**This grid needs to be resized based on the object being placed and it must change colors depending on what’s underneath it.** One solution is to get the area of the object and fill it with grid tiles. And that's what we'll do for this implementation.

## End Result

![](/static/images/desert.gif?raw=true "Placing building in desert")

## Implementation

### Placing objects with a raycast

It’s always a good idea to start simple and gradually build up. So, how to place something on a plane?

To simply place something on a plane can be done with a single function call. 

``` csharp
[SerializeField] LayerMask layerToRaycast;
[SerializeField] GameObject object;

void RaycastToMouse()
{
    Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit, Mathf.Infinity, layerToRaycast))
        object.transform.position = hit.point;
}
```

Raycasting this way sends a ray that collides with specific layers that we set in the inspector, which will be very useful in our case. With the above code, we need to our plane to be in a specific layer and set `layerToRaycast` to that layer in the inspector.

Now, an object can be placed on a plane, but it can be placed on top of other objects. Obviously, this is an issue. There are many solutions to this problem. There can be a script that is attached to every GameObject that we dont want to place on top of, I think this solution is good if we want our game to expand in the future. But, then we would need a new script. For this writing, I chose to use layers. This is so that objects, that cannot be placed on top of, can be in the same layer.

### BuildingSO (ScriptableObject)

I think, having a `ScriptableObject` for each placeable object is a good way to do it. This asset will define everything about the placeable object and the same asset can be later used in multiple cases. For example, if we want to display it in an inventory.

I think of ScriptableObjects being like `struct`s. The cool thing about them is that they **can be stored as assets.** I found [this](https://youtu.be/raQ3iHhE_Kk) talk about game architectures using ScriptableObjects to be very interesting.

For this implementation, placeable objects are represented as `BuildingSO`s that contains their name, prefab, cost, and icon.

```csharp
[CreateAssetMenu(menuName = "Placeable/Object")]
public class BuildingSO : ScriptableObject
{
    public string name;
    public GameObject buildingPrefab;
    public float cost;
    public Icon icon;
}
```

If we put an attribute `CreateAssetMenu` on top, creating an asset of `BuildingSO` can be done just like any other Asset! 

.
.
.