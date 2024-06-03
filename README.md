# Image Carousel Web Component

![img.png](img.png)

## Introduction

Welcome to the ImageCarousel Web Component! This component is a reusable custom element designed to allow users to easily create a carousel of images. The component provides a modern, responsive user interface and includes functionality for navigating through the images.

## Key Features

- **Friendly design:** Enjoy a clean and modern user interface.
- **Image Navigation:** Allows users to easily navigate through a set of images.
- **Simple Integration:** Easily integrate into any web application as a custom HTML element.

## Content

The project has the following components:

- **index.html** Usage example of the component.
- **image-carousel.js** The implementation of the component.

## Implementation Details

### HTML 

The ImageCarousel component uses HTML to define its structure, including elements such as images, navigation buttons, and indicators for the current image.

### CSS Styling

Custom CSS styling enhances the visual appearance of the carousel, ensuring a pleasant user experience.

### JavaScript

JavaScript handles the interactive aspects of the carousel, such as navigating between images and updating indicators.

## Usage

To use the component, insert the <image-carousel> tag in your HTML file where you want the carousel to appear. You can set any number of images using the images attribute:

- **Example1:** 
    ```html
    <image-carousel images="src1.png"></image-carousel>
    ```

- **Example2:** 
    ```html
    <image-carousel images="src1.png,src2.png,src3.png"></image-carousel>
    ```
In the images attribute you have to specify existing image sources in your project.

### Example usage:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Carousel</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    image-carousel {
      width: 80%;
      max-width: 600px;
    }
  </style>
</head>
<body>
<image-carousel images="src1.png,src2.png,src3.png"></image-carousel>

<script src="image-carousel.js"></script>
</body>
</html>


```