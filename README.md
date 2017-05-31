# og-ts-enum

Provides support for string-based enums in typescript

```typescript

import { Enum } from "og-ts-enum";

// from Array
const Direction = Enum.fromArray([
    'North',
    'South',
    'East',
    'West'
]);
type Direction = typeof keyof Direction;

// from Object
const GraphicsMode = Enum.fromObject({
    '2D': '2D',
    '3D': '3D'
});
type GraphicsMode = typeof keyof GraphicsMode;



```