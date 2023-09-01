# Using EJS

EJS stands for Embeded JavaScript. EJS isa simple templating language that generates HTML markup with plain JS.

This allows developers to create separate tmeplate files for different components (e.g. header, nav, footer) and include them in multiple files.

Other libraries that do similar: Pug.

Syntax:
<%- include('./template/message.ejs') -%>

EJS uses the file format: name.ejs
