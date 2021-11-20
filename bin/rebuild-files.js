const rebuildFiles = async () => {

   
   const fse = require('fs-extra');
   const exec = require('../.web/modules/execShellCommand');
   const latest = require('../.web/modules/get-latest-version');
   const { sh, draft } = require('../.web/modules/sh');
   const readJSON = file => JSON.parse(fse.readFileSync(file, 'utf-8'));
   const buildJSON = obj => orderJSON(obj, 2);
   const package = readJSON('package.json') || { };
   const babelrc = readJSON('.babelrc') || { };
   const stage = {
      
      package: false,
      babelrc: false,
      error: false,
      npm_i: false
   };
   const orderJSON = (obj, space) => {
      
      const allKeys = [];
      const seen = { };
      
      JSON.stringify(obj, (key, value) => {
         
         if (!(key in seen)) {
            
            allKeys.push(key);
            seen[key] = null;
         }
         
         return value;
      });
      
      allKeys.sort();
      
      return JSON.stringify(obj, allKeys, space);
   };
   const dependencies = [
      
      '@babel/cli',
      '@babel/core',
      '@babel/preset-env',
      'autoprefixer',
      'postcss-cli',
      'sass',
      'uglify-js'
   ];

   /* package.json */
   try {
   
      if (!package?.dependencies) package.dependencies = { };
      
      for (const dependence of dependencies) {

         if (!package?.dependencies[dependence]) {

            package.dependencies[dependence] = `^${await latest(dependence)}`;
            
            if (!stage.package) stage.package = true;
            if (!stage.npm_i) stage.npm_i = true;
         }
      }

      /* autoprefixer requires */
      if (!package?.browserslist) {
   
         package.browserslist = '> 0%';
         if (!stage.package) stage.package = true;
      }

      /* Dev */
      if (!package?.devDependencies) package.devDependencies = { };
      if (!package?.devDependencies?.web) {
         
         package.devDependencies.web = 'file:.library';

         if (!stage.package) stage.package = true;
         if (!stage.npm_i) stage.npm_i = true;
      }
   
      if (stage.package) fse.writeFileSync('package.json', buildJSON(package));
      if (stage.npm_i) {
         
         console.log(sh.clear);

         const importing = new draft('Importing required local modules');

         await exec('npm i');
         importing.stop(1);
      }
   }
   catch (error) {
   
      console.warn('Unable to get the needed resources into package.json.\nPlease, look at: https://github.com/wellwelwel/simple-web/blob/main/package.json and insert "browserslist" and local dependence "web" manually\n');
      console.error(`Error: ${error.message}\n`);
   
      if (!stage.error) stage.error = true;
   }
   
   /* .babelrc */
   try {
      
      if (!babelrc?.minified) {
         
         babelrc.minified = true;
         if (!stage.babelrc) stage.babelrc = true;
      }
      if (!babelrc?.comments) {
         
         babelrc.comments = false;
         if (!stage.babelrc) stage.babelrc = true;
      }
      if (!Array.isArray(babelrc?.presets)) {
         
         babelrc.presets = [ ];
         if (!stage.babelrc) stage.babelrc = true;
      }
      if (!Array.isArray(babelrc?.presets[0])) {
         
         babelrc.presets[0] = [ ];
         if (!stage.babelrc) stage.babelrc = true;
      }
      
      const arrays = {
      
         presetEnv: false,
         exclude: false,
         transformRegenerator: false
      };
      
      babelrc.presets.forEach(item => {
      
         if (item.includes('@babel/preset-env')) arrays.presetEnv = true;
         if (!Array.isArray(item)) return;
      
         item.forEach(subitem => {
      
            if (subitem?.exclude) {
               
               if (subitem.exclude.includes('transform-regenerator')) arrays.transformRegenerator = true;
               arrays.exclude = true;
            }
         });
      });
      
      if (!arrays.presetEnv) {
         
         babelrc.presets[0].push('@babel/preset-env');
         if (!stage.babelrc) stage.babelrc = true;
      }
      if (!arrays.exclude && !arrays.transformRegenerator) {
         
         babelrc.presets[0].push({ exclude: [ 'transform-regenerator' ] });
         if (!stage.babelrc) stage.babelrc = true;
      } else if (arrays.exclude && !arrays.transformRegenerator) {
      
         const excludeIndex = babelrc.presets[0].findIndex(item => item.exclude);
      
         babelrc.presets[0][excludeIndex].exclude.push('transform-regenerator');
         if (!stage.babelrc) stage.babelrc = true;
      }
   
      if (stage.babelrc) fse.writeFileSync('.babelrc', buildJSON(babelrc));
   }
   catch (error) {
      
      console.warn('Unable to get the needed resources into .babelrc.\nPlease, look at: https://github.com/wellwelwel/simple-web/blob/main/.babelrc and insert missing JSON values manually\n');
      console.error(`Error: ${error.message}\n`);
   
      if (!stage.error) stage.error = true;
   }
   
   return !stage.error;
};

module.exports = rebuildFiles;