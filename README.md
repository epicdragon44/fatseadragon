# FatSeaDragon

A Material UI Wrapper of OpenSeaDragon for React.js. 

![alt text](https://i.ibb.co/9v1fNV2/Screenshot-from-2022-06-07-15-30-23.png)


### How to Install:

```
npm install fatseadragon
```

### Dependencies:
OpenSeaDragon, React MUI, and Styled-Components.

NOT compatible with Typescript.


### How to use:

FatSeaDragon requires 5 parameters as props:
- **prefixUrl**, a *string* specifying a folder which contains all the deep zoom image slices
- **tileSources**, a *string* specifying a direct Url to the dzi or json file that contains metadata about how to read the deep zoom image
- **height**: a *string* specifying how tall to render the viewer (it takes units such as vh)
- **width**: a *string* specifying how wide to render the viewer (it takes units such as vw)
- **showNavigator**: a *boolean* that indicates whether to show a small navigator


```
import * as React from 'react';
import { FatSeaDragon } from 'fatseadragon';

export default function App() {

  return (
    <>
      <FatSeaDragon 
        prefixUrl="http://goblinrum.mynetgear.com/images/outputs/"
        tileSources="http://goblinrum.mynetgear.com/images/outputs/testimage1_outdzi.dzi"
        height="50vh"
        width="50vw"
        showNavigator=true
      />
    </>
  );
}
```

### Roadmap:

- [ ] Add support for custom styling of controls
- [ ] Add support for auto-hide or hidden controls
