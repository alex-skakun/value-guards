import { execCommand, LOCAL_REGISTRY, parsePackageJson } from './shared.mjs';


parsePackageJson('./package.json')
  .then(packageJson => packageJson.localDevDependencies)
  .then(packageNames => Promise.all(packageNames.map(packageName => {
    return execCommand(`npm uninstall ${packageName}`)
      .then(() => execCommand(`npm install --save-dev ${packageName} --registry ${LOCAL_REGISTRY}`));
  })))
  .then(
    () => console.log('UPDATED'),
    (err) => {
      console.error('FAILED');
      console.error(err);
    },
  );
