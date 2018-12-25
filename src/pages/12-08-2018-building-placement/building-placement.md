---
path: "/building-placement"
date: "2018-12-08T20:13:43.962Z"
title: "Dynamic grid-based object placement"
excerpt: "In RTS games, when you place an object, it shows you where you can place it and where you cannot. In some games, like Starcraft, they have a grid that shows the collisions. This writing will go over on implementing a similar object placement."
---

In Unity, placing object while checking collisions can done simply with a raycast, but RTS games have a grid under the object which shows whether it can be placed at that spot or not.

<img src="/static/images/example-building-place.jpg" width="400px" height="300px">

The *[image](https://imgur.com/OmFT6)* above shows Starcraft’s object placement grid.

**This grid needs to be resized based on the object being placed and it must change colors depending on what’s underneath it.** One solution is to get the area of the object and fill it with grid tiles. And that's what we'll do for this implementation.

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

Raycasting this way sends a ray that collides with specific layers that we set in the inspector, which will be very useful in our case. With the above code, we need our plane to be in a specific layer and set `layerToRaycast` to that layer in the inspector.

Now, an object can be placed on a plane, but it can be placed on top of other objects. Obviously, this is an issue. There are some solutions to this problem. For this writing, I chose to use *layers*. This is so that objects, that cannot be placed on top of, can be in the same layer. Using layers is the easiest solution because we wouldn't need any more scripts, we just need to place certain GameObjects in certain layers.

### BuildingSO (ScriptableObject)

I think, having a `ScriptableObject` for each placeable object is a good way to do it. This `ScriptableObject` will define everything about the placeable object and the same asset can be later used in multiple cases. For example, if we want to display it in an inventory.

I think of ScriptableObjects being like `struct`s. The cool thing about them is that they **can be stored as assets.** I found [this](https://youtu.be/raQ3iHhE_Kk) talk about game architectures using ScriptableObjects to be very interesting.

For this implementation, placeable objects are represented as `BuildingSO`s that contains their name, prefab, build time, cost, and icon.

```csharp
[CreateAssetMenu(menuName = "Placeable/Object")]
public class BuildingSO : ScriptableObject
{
    public string name;
    public GameObject buildingPrefab;
    public float buildTime;
    public float cost;
    public Icon icon;
}
```

By putting an attribute `CreateAssetMenu` on top, creating an asset of `BuildingSO` can be done just like any other Asset!

I hope at this point, it is clear why ScriptableObjects are useful in this case (we have everything we need to know about the object in one asset!).

### Grid Tiles

So far, objects can be placed on a plane. Actually, it can be placed on anything, I am just using planes for the simplicity. Also, we have a ScriptableObject for the objects that will be placed.

The problem to solve now is detecting collisions, so that objects cannot be placed on top of some other objects. Remember, the above function for raycasting accepts a layer, which means we can send rays to specific layers. We will use that for the collision grid.

The grid consists of *tiles*. Each tile is a **quad that turns green is no collision or red if there’s a collision**.

One way to do it, we can attach a script to each tile and implements its `OnTriggerEnter` and `OnTriggerExit` functions and detect whether the collider lies in the collision layer.

```csharp
[SerializeField] LayerMask collisionLayers;
public bool colliding { get; private set; } 

void OnTriggerEnter(Collider other)
{
    if(collisionLayers == (collisionLayers | (1 << other.gameObject.layer)))
    {
        if(other.gameObject.transform.root.gameObject.GetInstanceID() != transform.root.gameObject.GetInstanceID())
        {
            SetColor(Color.red);
            colliding = true;
        }
    }
}

void OnTriggerExit(Collider other)
{
    if(collisionLayers == (collisionLayers | (1 << other.gameObject.layer)))
    {
        SetColor(Color.green);
        colliding = false;
    }
}
```

After assigning `collisionLayers` in the inspector, the grid tile will change colors if it collides with an object in `collisionLayers`.

### Dynamically resizing grids

Now that grid tiles are complete, we need to find a way to **make a grid depending on the size of the placing object**.

So, let's simplify the problem. We need to somehow **find the area of the GameObject and fill it with grid tiles**. Since we don't want our placeable objects to be built on top of other placeable objects, we send a ray to check. Furthermore, this means each placeable object must have a collider attached to it. Otherwise, raycasts will not work.

The `Collider` class has a property called `bounds` and `bounds.extents`. We can use these properties to get the area of the collider.

```csharp
[SerializeField] GameObject tileGO;
GameObject grid;

Rect MakeRectOfCollider(Collider col)
{
    Rect r = new Rect(col.bounds.center.x - col.bounds.extents.x,
                    col.bounds.center.z - col.bounds.extents.z,
                    col.bounds.size.x, col.bounds.size.z);
    return r;
}

void FillRectWithTiles(Collider col)
{
    if(grid)
        return;

    Rect rect = MakeRectOfCollider(col);
    float fromX = rect.position.x;
    float toX = rect.position.x + rect.width;
    float fromZ = rect.position.y;
    float toZ = rect.position.y + rect.height;

    GameObject parent = new GameObject("Grid");
    parent.transform.SetParent(col.gameObject.transform.root);
    parent.transform.position = col.gameObject.transform.position;

    for(float i = fromX; i < toX; i += tileGO.transform.localScale.x)
        for(float j = fromZ; j < toZ; j += tileGO.transform.localScale.y)
        {
            GameObject tile = Instantiate(tileGO);
            tile.transform.SetParent(parent.transform);
            tile.transform.position = new Vector3(i, parent.transform.position.y + 1, j);
            activeTiles.Add(tile.GetComponent<GridTile>());
        }
    grid = parent;
}
```

The `FillRectWithTiles` loops through the rectangle representing the area of the object and spawns grid tiles along the way.

## End Result

The finished project can be found [here](https://github.com/manlaig/object_placement)

<img src="/static/images/desert.gif" width="400px" height="400px">