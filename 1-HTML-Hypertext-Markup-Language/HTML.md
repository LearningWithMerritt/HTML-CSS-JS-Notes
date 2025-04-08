

# `Hypertext Markup Language`

[`mdn web docs_ HTML`](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

<br>

___

<br>

Covered in this file:

1. [`HTML Defined`](#html-defined)
1. [`HTML Files`](#html-files)
1. [`Structure of an HTML Document`](#structure-of-an-html-document)
1. [`Comments`](#comments)
1. [`Tags`](#tags)
1. [`Elements`](#elements)
    1. [`Parent and Child Elements`](#parent-and-child-elements)
1. [`Attributes`](#attributes)
1. [`Organizing HTML`](#organizing-html)




<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>

# `HTML Defined`
`HTML (Hypertext Markup Language)` is the standard language for creating and structuring web documents. It uses a system of `tags` and `attributes` to define the elements on a webpage, including headings, paragraphs, links, and more. HTML provides the basic structure for content on the World Wide Web and is essential for creating web pages. 

<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>

# `HTML Files`
`HTML files` are plain text files that use tags to define structure and content.
* HTML files use the `.html` file extension.
* The default .html file is called `index.html`. 
    * This is because webservers like Apache and Nginx automatically serve a file named `index.html` when looking inside of a directory.

To get started create a file called `index.html`, and open this file in a text editor program. 


<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>

# `Structure of an HTML Document`
An HTML document uses sets of `tags`, and `attributes` to define `elements` of a webpage.

The basic structure of a document looks like this:
```html
<!DOCTYPE html>
<html>
    <head>
        
    </head>
    <body>

    </body>
</html>
```
| Element          | Description |
|-----------------|-------------|
| `<!DOCTYPE html>` | Declares the document type and version of HTML (HTML5). It ensures proper rendering in modern browsers. |
| `<html>` | The root element that contains all the content of the HTML document. |
| `<head>` | Contains metadata about the document, such as the title, character encoding, and linked resources (CSS, JS). |
| `<body>` | Contains the main content of the web page, including text, images, links, and other elements visible to users. |



<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>


# `Comments`
A `comment` in HTML is a way to add annotations or notes within the code. Comments are not displayed in the browser and are ignored during the rendering of the webpage. They serve as helpful explanations for developers and are crucial for code documentation. 

```html
<!--This is a single line HTML Comment -->
```

```html
<!--
This 
is 
a 
multi-line 
HTML 
Comment 
-->
```

<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>

# `Tags`
A `tag` in HTML is a fundamental building block that defines an element. 
It consists of an opening tag, content, and a closing tag. Tags are used 
to structure and format the content on a webpage, providing a standardized 
way to create and display various elements such as headings, paragraphs, 
links, etc. 

<br>

`Opening Tag`: This is the start of the element and is enclosed in angle brackets (`< >`). 
```html
<tag>
```

<br>


`Closing Tag`: This marks the end of the element and is similar to the opening tag but with a forward slash `/` before the element name.
```html
</tag>
```

<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>

# `Elements`
`Elements` in HTML define the structure and content of a web page. They include tags like `<html>`, `<head>`, `<body>`, `<h1>,` `<p>`, etc., each serving a specific purpose in organizing and presenting information. 

HTML Elements are made of 3 parts:

* `Opening Tag`: This is the start of the element and is enclosed in angle brackets (`< >`). 
    * For example, `<p>` starts a paragraph.

* `Content`: This is the information or content that appears between the opening and closing tags. 
    * For example, in `<p>`Hello, world!`</p>`, the text "Hello, world!" is the content.

* `Closing Tag`: This marks the end of the element and is similar to the opening tag but with a forward slash before the element name (e.g., `</p>`).

<br>

syntax:
```html
<tag> content </tag>
```
OR
```html
<tag>

    content

</tag>
```

<br>

## `Parent and Child Elements`

A `parent element` is an element that contains other elements called `child elements`.

<br>

A `child element` is an element that is contained within another element called a `parent element`
* child elements are typically indented inside of their parent element. 

<br>

syntax:
```
<parent><child></child></parent>
```
```
<parent>

    <child></child>

</parent>
```

example:
```html
<html> <!-- Parent of: head, body; Child of: none -->

    <head> <!-- Parent of: title; Child of: html -->

        <title></title><!-- Parent of: none; Child of: head -->

    </head> 
    
    <body> <!-- Parent of: div; Child of: html -->

        <div> <!-- Parent of: h1, p; Child of: body -->

            <h1></h1> <!-- Parent of: none; Child of: div -->
            
            <p> <!-- Parent of: a; Child of: div -->

                <a></a> <!-- Parent of: none; Child of: p -->
                
            </p> 
        </div>
    </body>
</html>
```


<br>

## `Self Contained Elements`
`Self-contained elements`, are elements that do not have content or a closing tag.
* also known as void elements or self-closing elements
* they stand alone and perform a specific function.

Common uses:
1. Media (pictures, video, audio)
1. Line breaks
1. Metadata

example:
```html
<!--Images >>> self contained img element-->
<img src="imagefile.png" alt="Description of image" width="500px">
```
```html
<!--Line breaks >>> self contained br element-->
Adding a break tag to start a new line <br>
This text will appear on a new line
```
```html
<!--Metadata >>> self contained meta element-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>



# `Attributes`
`Attributes` in HTML provide additional information or behavior to elements. 

* For example, the 'lang' attribute in the `<html>` tag specifies the language 
of the document, aiding in language-specific processing or styling. Attributes 
can be found in various HTML tags, enhancing the functionality and presentation 
of the content. 

syntax:
```html
<tag attribute = "value"> content </tag>
```

<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>


# `Organizing HTML`
When you're writing HTML code, it's a good idea to organize it neatly. 

To make your HTML code readable:
1. Indent child elements inside of thier parent elements (2 or 4 spaces)
1. Keep lines short. Long lines should be broken onto new lines when necessary
1. Use lowercase attribute names
1. Group your elements into blocks with containers like \<div\>
1. Keep HTML, CSS, and JavaScript in seperate files.



A Simple Example of Proper Structure:
```html
<!DOCTYPE html> 
<html lang="en-us"> 
    <head>
        <title>Page Title</title> 
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script src="script.js"></script>
    </head> 
    <body> 

        <!--Dividers are containers that are block level (stack on top of each other)-->
        <div>
            <h1>Group Your Content with div tags</h1> 
            <p>
                Your content should be grouped into blocks using div tags.<br>
                div elements stack on top of each other.
            </p>
        </div>

    
        <!--Spans are containers that are inline (stack next to each other)-->
        <span>Stack</span>
        <span>Side</span>
        <span>by</span>
        <span>Side</span>



        <div>
            <h1>This is a heading</h1> 
            <p>This is a paragraph.</p> 
        </div>


        <div>
            <a href="https://www.w3schools.com">This is a link</a> 
        </div>
        

        <div>
            <img src="image.png" alt="alt text here">
        </div>


    </body> 
</html> 
```



<br>

___

[`Back To Top`](#hypertext-markup-language)

<br>