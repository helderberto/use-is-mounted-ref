<div align="center">
  <h1>📦 use-is-mounted-ref</h1>

  <p><strong>useIsMountedRef is a React Hook</strong> to check when the component is mounted.</p>

<!-- prettier-ignore-start -->
[![build][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![downloads][downloads-badge]][npmtrends]
<!-- prettier-ignore-end -->

</div>

---

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Motivation](#motivation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Bugs and Sugestions](#bugs-and-sugestions)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Motivation

- Avoid memory leaks setting states when component are unmounted;
- Control when component already mounted;
- Common error when setting state to unmounted component:

```js
Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
```

## Usage

To start using the `use-is-mounted-ref` in your project, first install in your project:

`yarn add use-is-mounted-ref` or `npm install use-is-mounted-ref`

<details open>
<summary><strong>Avoid set state when unmounted component:</strong></summary>

```jsx
import { useState, useEffect } from 'react';
import useIsMountedRef from 'use-is-mounted-ref';

function App() {
  const isMountedRef = useIsMountedRef();

  const initialState = {
    loading: false,
    error: false,
    data: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch('https://www.reddit.com/.json')
      .then((response) => response.json())
      .then(({ data }) => {
        if (isMountedRef.current) {
          setState((prevState) => {
            return {
              ...prevState,
              loading: false,
              data,
            };
          });
        }
      })
      .catch((err) => {
        if (isMountedRef.current) {
          setState((prevState) => {
            return { ...prevState, loading: false, error: true };
          });
        }
      });
  }, []);

  return state.loading ? 'Loading...' : 'Found Data!';
}

export default App;
```

</details>

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/helderburato/use-is-mounted-ref/issues).

## License

[MIT License](LICENSE) © [helderburato](https://helderburato.com)

<!-- prettier-ignore-start -->
[version-badge]: https://img.shields.io/npm/v/use-is-mounted-ref.svg?style=flat-square
[package]: https://www.npmjs.com/package/use-is-mounted-ref
[downloads-badge]: https://img.shields.io/npm/dm/use-is-mounted-ref.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/use-is-mounted-ref
[license-badge]: https://img.shields.io/npm/l/use-is-mounted-ref.svg?style=flat-square
[license]: https://github.com/helderburato/use-is-mounted-ref/blob/master/LICENSE
[build]: https://github.com/helderburato/use-is-mounted-ref/actions
[build-badge]: https://github.com/helderburato/use-is-mounted-ref/actions/workflows/ci.yml/badge.svg
<!-- prettier-ignore-end -->
