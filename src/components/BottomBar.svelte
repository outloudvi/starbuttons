<footer>
  <a
    href="https://github.com/outloudvi/ui-buttons"
    aria-label="GitHub repository of Ui Buttons"
    target="_blank"
  >
    <i class="icon-github"></i>
  </a>
  /
  <a
    href="https://t.me/ShigureUi_Group"
    aria-label="Telegram Fan Group"
    target="_blank"
  >
    <i class="icon-telegram"></i>
  </a>
  /
  <a
    href="https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw"
    aria-label="Shigure Ui YouTube Channel"
    target="_blank"
  >
    <i class="icon-youtube"></i>
  </a>
  /
  <a
    href="https://www.youtube.com/c/UiBeam/about"
    aria-label="UiBeam YouTube Channel"
    target="_blank"
  >
    <i class="icon-youtube"></i>
    <sup>(Beam)</sup>
  </a>
  /
  <LanguageSwitch />
</footer>

<script lang="ts">
  import { _ } from 'svelte-i18n'
  import LanguageSwitch from './LanguageSwitch.svelte'
</script>

<style lang="scss">
  @import '../styles/variables';

  footer {
    text-align: center;
    margin-bottom: 11vh;
    line-height: 1em;
  }

  a {
    margin: 0 0.5vw;
    text-decoration: none;
    color: $bottom-link-color;
  }
</style>
