---
path: "/convolution"
date: "2018-11-21T16:53:43.962Z"
title: "Implementing Image Convolutions in Python"
excerpt: "Ever wondered how blurs and edge detections work on images, it's much simple than you expect. In this writing, I will implement a convolution algorithm and use it to blur and edge detect on images."
---

In this writing, I will write a script in Python that does a convolution on an image and use it to do some cool image processing. 

You will need `PIL` for this, `PIL` is an image processing library.

## Definition

Convolution is a process of adding each pixel value of the image to its local neighbors, weighted by the kernel. Kernel is just a matrix that we'll use to change the pixel values.

Here's a good illustration from [Deep Learning:](http://deeplearning.net/software/theano_versions/dev/tutorial/conv_arithmetic.html) 

![](/static/images/convolution.gif?raw=true "Convolution on image")


You can see the kernel is going over the image and changing the pixel values according to its weights of [ [2,0,1], [1,0,0], [0,1,1] ].

Our script will work similar to this. Note that the illustration above has a **padding** of same, meaning that the kernel starts out of the image. By doing this, we can calculate pixel values for pixels at the edge.

Also, this illustration has a **stride** of 2, meaning that it jumps 2 pixels each time. Not having a stride of 1 will create an image different sized than the original.

Our script will have a padding of same, a stride of 1, and a kernel size of 3 by 3.

Here's another good illustration from [Deep Learning](http://deeplearning.net/software/theano_versions/dev/tutorial/conv_arithmetic.html) that shows exactly what out convolution function will do:

![](/static/images/convolution_illustration.gif?raw=true "Convolution on image")

## Coding

First, we need to get the input image and open it with `PIL`.

```python
im = Image.open(sys.argv[1])
im_matrix = np.asarray(im)
```

`im_matrix` is a matrix that contains all the pixel values of the input image.

Next, we create an empty matrix, which will be the output image.

```python
output_im = np.empty(im_matrix.shape)
```

Now, we loop through the whole input image and calculate new pixel values for each pixel.

```python
kernel = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]

for i in range(im_matrix.shape[0]):
    for j in range(im_matrix.shape[1]):
        for k in range(im_matrix.shape[2]):
            output_im[i][j] = getNewPixelValue(im_matrix, i, j, k, kernel)
```

`getBlurValue` function looks like this:
 
```python
def getNewPixelValue(im, pixel_y, pixel_x, channel, kernel):
    pixel_val = 0
    offset = int(kernel_size/2)

    for i in range(-offset, offset+1, 1):
        for j in range(-offset, offset+1, 1):
            if pixel_x + j < 0 or pixel_y + i < 0:
                continue
            if (pixel_x + j < im.shape[1] - 1
                and pixel_y + i < im.shape[0] - 1):
               pixel_val += im[pixel_y+i][pixel_x+j][channel] * kernel[i+offset][j+offset]
    return max(pixel_val, 0)
```

The full can be found in my GitHub [repo.](https://github.com/manlaig/image_convolutions)

Using the `getNewPixelValue` function, you can do convolutions on images with different filters, such as sharpening, embossing, and so on.

Here's an example of convolution done with this function.

## Blur

Using the Gaussian blur filter, we can blur images. The bigger the size of the kernel, the more blurred the image will be.

![](/static/images/Gaussian5x5.jpg?raw=true "3 by 3 Gaussian filter")

3x3 filter was not blurring well, so I used this 5x5 filter and got this result.

Before:

![](/static/images/nature.jpg?raw=true "Before Blurring")

After:

![](/static/images/nature_blurred.jpg?raw=true "After Blurring")

## Conclusion

There's so much to explore with convolutions, image processing and even convolutional neural networks use them. I found them to be very interesting and wanted to write my own and share it with others.
