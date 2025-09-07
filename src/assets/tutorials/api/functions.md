---
title: Functions
author: Efnilite
date: 9/7/2024
url: https://github.com/SkriptLang/docs/blob/master/src/assets/tutorials/functions.md
section: API
index: 1
---

# Functions

Skript's functions allow users to perform specific actions at multiple points in a code base.
To allow addons to easily add their own functions, Skript 2.13 introduced a new API for registering functions, 
which uses the DefaultFunction class. Compared to the previous way of dealing with functions, 
this new API is a drastic improvement in several key ways. 

As an example, let's register a function that removes a specific character from some strings,
which defaults to removing all spaces.

```applescript
# Intended result
set {_x::*} to remove("  hello  ") # "hello"
set {_y::*} to remove("  hello  ", " hey ") # "hello", "hey"
set {_z::*} to remove(("  hello  ", " hey "), "h") # "  ello  ", " ey " 
```

## Creating a new builder

First, create a new builder to start building our function. This builder takes the `SkriptAddon`
instance of your addon, the name of the function, and the return type of the function. Since our
function always returns an array of strings, we can specify the return type as `String[].class`.
If our function only returned a single string value, the return type would be `String.class`.

```java
SkriptAddon addon = SkriptAddon.of(YourMainClass.class);

DefaultFunction.builder(addon, "remove", String[].class)
```

## Documentation

After creating the builder, the documentation should be specified. 
This allows documentation sites to view more information about the function.

- The description features a brief description of the function and information about how it works.
- The examples contain example use cases or examples of what the function returns.
- The since method specifies the version history of the function. Any changes or additions to the function's workings should be added here. 
- The keywords contain words that may be associated with this function.

```java
DefaultFunction.builder(addon, "remove", String[].class)
    .description("Removes a specific character from the strings.",
        "Removes spaces if no character is specified.")
    .examples("""
        set {_x::*} to remove("  hello  ") # "hello"
        set {_y::*} to remove("  hello  ", " hey ") # "hello", "hey"
        set {_z::*} to remove(("  hello  ", " hey "), "h") # "  ello  ", " ey " 
        """)
    .since("3.0")
    .keywords("format", "strings")
```

## Parameters

Next, we should specify what arguments our function can take. To do this, we use the `parameter` function.
This starts by specifying the parameter name, and then the type it accepts. Like the return type,
using an array indicates that multiple values can be passed to the argument. 

Additionally, the `char` parameter contains a modifier, which changes the behaviour of a parameter.
The optional modifier indicates that no value has to be passed to the argument. 

```java
DefaultFunction.builder(addon, "remove", String[].class)
    .description("Removes a specific character from the strings.",
        "Removes spaces if no character is specified.")
    .examples("""
        set {_x::*} to remove("  hello  ") # "hello"
        set {_y::*} to remove("  hello  ", " hey ") # "hello", "hey"
        set {_z::*} to remove(("  hello  ", " hey "), "h") # "  ello  ", " ey " 
        """)
    .since("3.0")
    .keywords("format", "strings")
    .parameter("strings", String[].class)
    .parameter("char", String.class, Modifier.OPTIONAL)
```

## Implementation

To complete our function, we add the implementation. This is the part that will handle the actual function logic.
The `build` method provides you with a `FunctionArguments` instance, called `args` in our example. This contains
all the values for the parameters that are passed when a function is called. These values are associated by the name
of the parameter. 

```java
DefaultFunction.builder(addon, "remove", String[].class)
    .description("Removes a specific character from the strings.",
        "Removes spaces if no character is specified.")
    .examples("""
        set {_x::*} to remove("  hello  ") # "hello"
        set {_y::*} to remove("  hello  ", " hey ") # "hello", "hey"
        set {_z::*} to remove(("  hello  ", " hey "), "h") # "  ello  ", " ey " 
        """)
    .since("3.0")
    .keywords("format", "strings")
    .parameter("strings", String[].class)
    .parameter("char", String.class, Modifier.OPTIONAL)
    .build(args -> {
         // what the user entered for strings
        String[] strings = args.get("strings");

        // what the user entered, or, if the user passed nothing, returns " "
        // this is only necessary because char has Modifier.OPTIONAL
        String chr = args.getOrDefault("char", " "); 

        // actually replace all the characters
        for (int i = 0; i < strings.length; i++) {
            strings[i] = strings[i].replaceAll(chr, "");
        }

        // return the value
        return strings;
    });
```

## Final step

Now that we have our function, we should register it. To do this, use `Functions#register`.

```java
DefaultFunction<String[]> remove = DefaultFunction.builder(addon, "remove", String[].class)
    .description("Removes a specific character from the strings.",
        "Removes spaces if no character is specified.")
    .examples("""
        set {_x::*} to remove("  hello  ") # "hello"
        set {_y::*} to remove("  hello  ", " hey ") # "hello", "hey"
        set {_z::*} to remove(("  hello  ", " hey "), "h") # "  ello  ", " ey " 
        """)
    .since("3.0")
    .keywords("format", "strings")
    .parameter("strings", String[].class)
    .parameter("char", String.class, Modifier.OPTIONAL)
    .build(args -> {
         // what the user entered for strings
        String[] strings = args.get("strings");

        // what the user entered, or, if the user passed nothing, returns " "
        // this is only necessary because char has Modifier.OPTIONAL
        String chr = args.getOrDefault("char", " "); 

        // actually replace all the characters
        for (int i = 0; i < strings.length; i++) {
            strings[i] = strings[i].replaceAll(chr, "");
        }

        // return the value
        return strings;
    });

Functions.register(remove);
```