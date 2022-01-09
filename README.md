<p align="center">
 <img width="100px" src="https://weslley.io/media/simple-web-11.svg" align="center" alt="simple-web" />
 <h1 align="center">Simple Web Cli</h1>
 <p align="center">A simple compiler to automate the development in the HTML, CSS/Sass, JavaScript and PHP languages using the FTP connection to deploy files processed automatically to the final server.</p>
</p>

<p align="center">
   <a href="/README.md">English</a>
   ·
   <a href="/README_pt-BR.md">Português</a>
</p>

## Install

```shell
   npm i simple-web-cli -D  # to download the dependencies
```
```shell
   npx sw  # to start the service
```
<hr />

### Development
* **`scr`** is the directory of development
* **`dist`** is the directory with the compiled code
<hr />

<!-- Commands -->
### Commands
   * `npx sw` or `npx sw start`: prepares the environment and starts the service
   * `npx sw init`: prepares the environment without starting the service
   * `npx sw build`: compiles the contents from `src` and zips it to `release.zip`
<hr />

<!-- HTML Import -->
### HTML Import
  * You can import `.html` files recursively, based on the `scss` import, for example:
   
   ```html
      <html>
         <body>
            <!-- import('./views/_header.html') -->
            <section>
               <!-- import('./views/_main.html') -->
            </section>
            <!-- import('../_footer.html') -->
         </body>
      </html>
   ```
<hr />

<!-- Local Modules -->
### Local Modules - Browser
  * In **JavaScript** (web), it's possible to import local modules saved into `.library`, for example:
 
   <ins>`.library/my-script/index.js`</ins>
   
   ```javascript
      /* for entire file import */
      require('web/my-script');

      /* to import the default module into a variable */
      const my_script = require('web/my-script');

      /* to import the modules by destronstuct variables */
      const { my_script1, my_script2 }  = require('web/my-script');

      /* to import the module into a variable with a custom name */
      const my_name_var = require('web/my-script').my_script1;
   ```
<hr />

### Enable the FTP
* In the file **`.swrc.js`**, just insert the acess infos:
```javascript
{
   ftp: {
      root: '_ROOT_DIRECTORY_',
      host: '_IP_',
      user: '_USER_',
      pass: '_PASSWORD_',
      secure: true || 'explict'
   }
}
```

* Assuming the **`root`** directory is <ins>`/var/www`</ins>, the input and output of the directories would be:

   - **Development:** <ins>`src/html/index.html`</ins>  
   - **Distribution:** <ins>`dist/html/index.html`</ins>  
   - **FTP:** <ins>`/var/www/html/index.html`</ins>  

> ##### *- If no access is entered, it will create the project normally, just ignoring the FTP upload*  <br />  *- If the FTP doesn't use SSL certification, set `"explict"` in `"secure"`*
<hr />

### Using
   * Once the process is started, the event occurs by **saving any file** into `src`.
<br />

<p align="center">
<h2 align="center"><img src="https://weslley.io/media/simple-web-2.svg" width="20" /> Some Examples <img src="https://weslley.io/media/simple-web-2.svg" width="20" /></h2>
</p>

<!-- HTML -->
### HTML
`INPUT`
```html
   <div>
      <h1>Title</h1>
      <p>Paragraph</p>
   </div>
```
`OUTPUT`
```html
   <div><h1>Title</h1><p>Paragraph</p></div>
```
<hr />

<!-- CSS -->
### CSS | Sass
`INPUT` 
```css
   div {
      display: flex;
   }
```
`OUTPUT`
```css
   div{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}
```
<hr />

<!-- JS -->
### JavaScript
`INPUT`
```javascript
   (() => {
      require('web/selector');

      const element = s('body');
      const inElement = sEl(element, 'div');
      const elements = sAll('.class');
      const elementsInElement = sElAll(element, '.class');
   })();
```
`OUTPUT`
```javascript
   "use strict";!function(){var e,c,l,r,t=(e="body",document.querySelector(e));c="div",t.querySelector(c),l=".class",document.querySelectorAll(l),r=".class",t.querySelectorAll(r)}();
```
<hr />

<!-- PHP -->
### PHP | PHTML
`INPUT`
```php
<?
   $var = 'text'
?>

<div>
   <?=$var?>
</div>
```
`OUTPUT`
```php
  <?php $var='text'?><div><?=$var?></div>
```
<hr />

<!-- .htaccess -->
### Apache (.htaccess, php.ini)
`INPUT`
```apache
# comment
<Directory /var/www/>
   # another comment
   Options Indexes FollowSymLinks MultiViews
</Directory>
```
`OUTPUT`
```apache
<Directory /var/www/>
Options Indexes FollowSymLinks MultiViews
</Directory>
```
<hr />

<!-- Text Replacement  -->
### Strings Replacement
   * You can create an easy to read code and on compiling, replace the specified strings, for example:
   > ##### *- works for any language that is enabled in `.swrc.js`*
 
   <ins>`.swrc.js`</ins>
   
   ```javascript
   {
      strings: {
         '*token*': {
            start: '0cfcda42c340dad5616e0b7449a5634b',
            build: '0cfcda42c340dad5616e0b7449a5634b'
         },
         '*site-name*': {
            start: 'dev.weslley.io',
            build: 'weslley.io'
         }
      }
   }
   ```

   `INPUT`
   ```php
   <?
      $_POST['*token*'];
      $site = '*site-name*';
   ```

   `OUTPUT DEV (npx sw)`
   ```php
   <?php $_POST['0cfcda42c340dad5616e0b7449a5634b'];$site='dev.weslley.io';
   ```

   `OUTPUT BUILD (npx sw build)`
   ```php
   <?php $_POST['0cfcda42c340dad5616e0b7449a5634b'];$site='weslley.io';
   ```
<hr />

<!-- others -->
### Miscellaneous Files
 * Only uploads the original file to the output directories
<hr />

<!-- Compatibility -->
### - Compatibility

>
>`Operational Systems`  
>
>- [x] **macOS**  
>- [x] **Linux**  
>- [x] **Windows**  
>

>
>`Node`  
>
>- [x] **>=14.15.0**  
>

>
>`npm`  
>
>- [x] **>=7.0.2**  
>

>
>`Code Editors`  
>
>- [x] [**Visual Studio Code**](https://code.visualstudio.com/Download)  
>- [x] **Others** *(the features depend only on ` Terminal`, however, other editors may not suggest local modules intellisense)*  
>

>
>`Recomended Extensions (VSCode)` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" width="12" />
>
>- [x] [**Path Intellisense** - *Christian Kohler*](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
>- [x] [**npm Intellisense** - *Christian Kohler*](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
>- [x] [**Visual Studio IntelliCode** - *Microsoft*](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
>- [x] [**ESLint** - *Dirk Baeumer*](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
>

>- [x] Translate: [**SrLaco**](https://github.com/SrLaco)
>- [x] Review: [**micaele-mags**](https://github.com/micaele-mags)

#### __Made with *sadness* and *sorrow* in rainy nights by [Weslley Araújo](https://github.com/wellwelwel)__ 🖤
<hr />

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwellwelwel%2Fsimple-web.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwellwelwel%2Fsimple-web?ref=badge_shield)
