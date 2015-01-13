# Interactive WCAG

A filterable and shareable version of the WCAG 2.0 spec.

## Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Developing](#developing)

## Requirements

- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)

## Installation

### Install Grunt packages

From the root of the site and run `npm install`.

## Developing

### Grunt

- Run `grunt` to do a one-time compile of all the assets to the `dest` directory.
- Run `grunt watch` while working on the project to compile assets as they're modified.

### Local Server

In the second tab run `grunt connect` and go to:<br>
[http://0.0.0.0:8000/](http://0.0.0.0:8000/)

### Production

Run a production build to inline the dependent JS and CSS with `grunt deploy`.

## View on Github Pages

[http://vigetlabs.github.io/interactive-wcag/](http://vigetlabs.github.io/interactive-wcag/)
