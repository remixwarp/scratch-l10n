# @turbowarp/scratch-l10n

This repository contains translations for TurboWarp projects.

## Scripts

This repository also contains scripts that we use to maintain TurboWarp's translations. They assume you have a directory laid out with `scratch-l10n`, `scratch-gui`, `turbowarp-desktop`, and `packager` in the same parent folder.

Download all translations:

```bash
npm run tw:pull
```

Upload translations:

```bash
npm run tw:push
```

Publish minified scratch-l10n to npm:

```bash
npm run tw:publish
```
