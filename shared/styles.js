import { css, cx, keyframes, injectGlobal } from '@emotion/css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
</style>

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, sans-serif;
  }
`
