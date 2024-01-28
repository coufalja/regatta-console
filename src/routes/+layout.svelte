<script>
	import '../app.postcss';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head
	>{@html `
<script>
function autoModeWatcher() {
  const mql = window.matchMedia("(prefers-color-scheme: light)");
  function setMode(value) {
    const elemHtmlClasses = document.documentElement.classList;
    const classDark = 'dark';
    value === true ? elemHtmlClasses.remove(classDark) : elemHtmlClasses.add(classDark);
  }
  setMode(mql.matches);
  mql.onchange = () => {
    setMode(mql.matches);
  };
}
autoModeWatcher();
</script>
`}
</svelte:head>
<!-- eslint-enable -->
<slot />
