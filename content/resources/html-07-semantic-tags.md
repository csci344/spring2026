---
title: "Semantic Tags"
group: "HTML Resources"
group_order: 1
order: 7
quicklink: 0
---


Semantic elements both (a) clearly describe the purpose of the tag in the tag itself, and (b) help group content sections together. Examples of semantic tags include &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;aside&gt;, etc. Semantic tags are useful for grouping your page into logical sections that are easy for a screen reader or web crawler to interpret.

## Example 1: Simple
```bash
|---------------------------------|
|             <header>            |
|-----------|---------------------|
| <nav>     | <section>           |
|-----------|---------------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/zBYeRm/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>

## Example 2: More Complicated
```bash
|---------------------------------|
|             <header>            |
|---------------------------------|
|               <nav>             |
|-----------------|---------------|
| <section>       |               |
|-----------------| <aside>       |
| <article>       |               |
|-----------------|---------------|
|             <footer>            |
|---------------------------------|
```
<iframe src="//codepen.io/vanwars/embed/rLNPoq/?theme-id=18654&default-tab=html,result" allowfullscreen="true" class="codepen-frame"></iframe>



> ## Reference Videos & Readings
> W3Schools Reference:
> * [http://www.w3schools.com/html/html5_semantic_elements.asp](http://www.w3schools.com/html/html5_semantic_elements.asp)
> * [http://www.w3schools.com/html/html_layout.asp](http://www.w3schools.com/html/html_layout.asp)